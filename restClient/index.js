const fetch = require('node-fetch');
const debug = require('nirvana-logger')('app:restClient');
const querystring = require('querystring');
import Model from '@nirvana/nirvana-sdk/kernel/model';

const _ = require('lodash');

/**
 * 创建错误请求日志记录
 */
const recordErrorLog = (log) => {
    // 如需记录请求日志，请设置 global.__track_outer_api_request_log = true
    if (!global.__track_outer_api_request_log) return;
    const {url, option, startTime = new Date().getTime(), endTime = new Date().getTime(), response = {}, status = ''} = log;
    try {
        Model.outer_api_request_log.create({
            url,
            method: option.method,
            payload: _.toString(option.body),
            httpStatus: status,
            response: _.isObject(response) ? JSON.stringify(response) : _.toString(response),
            responseTime: endTime - startTime,
        });
    } catch (e) {
    }
};

/**
 * fetch 重试
 * @param url  node-fetch's url
 * @param options node-fetch's options extend retries and retryDelay
 * @return {Promise}
 */
function fetchRetry(url, options) {
    let retries = 3;
    let retryDelay = 1000;

    return new Promise(function(resolve, reject) {
        let wrappedFetch = function(n) {
            fetch(url, options).then(function(response) {
                resolve(response);
            }).catch(function(error) {
                if (error.errno === 'ENOTFOUND' && n > 0) {
                    debug('域名解析失败', `正在重试 ${retries - n} 次`);
                    setTimeout(function() {
                        wrappedFetch(--n);
                    }, retryDelay);
                } else {
                    reject(error);
                }
            });
        };
        wrappedFetch(retries);
    });
};

/**
 * {} Object类型判断
 */
function isObject(v) {
    return (toString.apply(v) === '[object Object]' ||
        toString.apply(v) === '[object Window]');
}

/**
 * url参数解决器 /core/{id}/{class} to /core/1/abc
 * @param path
 * @param params
 * @returns {*}
 */
function pathParamResolve(path, params) {
    if (!isObject(params)) {
        throw new Error(params);
    }
    Object.keys(params).forEach((name) => {
        path = path.replace('{' + name + '}', encodeURIComponent(params[name]));
    });
    return path;
}

/**
 * 获取oAuth token
 * @returns {Promise<T>|Promise}
 */
function getOAuthToken(oAuthConfig) {
    return new Promise((resolve, reject) => {
        const certificate = new Buffer(
            `${oAuthConfig.client_id}:${oAuthConfig.client_secret}`).toString(
            'base64');
        const tokenType = 'Basic';

        const Authorization = tokenType + ' ' + certificate;
        const url = oAuthConfig.url;
        let option = {
            method: 'post',
            headers: {
                Authorization,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        };
        fetch(url, option).then((response) => response.json()).then((jsonData) => {
            return resolve(jsonData['access_token']);
        }).catch((err) => {
            debug('获取oauthtoken失败', err);
            reject(err);
        });
    });
}

export default class RestClient {
    constructor(beforeFetch = null, errorHandle = null) {
        this.oAuthConfig = null;
        this.init();
        this.beforeFetch = beforeFetch;
        this.errorHandle = errorHandle;
    }

    init(oAuthConfig) {
        this.oAuthConfig = oAuthConfig;
    }

    /**
     * 异步request方法
     * @param baseUrl - baseUrl
     * @param config - {path, needOAuth, method}
     * @param data - {payload, query, param}
     * @returns {Promise.<void>}
     */
    async requestAsync(baseUrl, config, data = {}) {
        let url = baseUrl + config.path;

        // 如果参数在url中
        if (url.match(/\{.+\}/i) && data.param) {
            url = pathParamResolve(url, data.param);
        }

        // 设置默认Content-Type为application/json
        if (!config['Content-Type']) {
            config['Content-Type'] = 'application/json';
        }

        const option = {
            method: config.method,
            headers: {
                'Content-Type': config['Content-Type'],
            },
            timeout: 2 * 60 * 1000, // 超时时间 2分钟
        };

        // debug('data:', data);
        if (data.payload) {
            if (option.headers['Content-Type'].toLowerCase().indexOf('json') > 0) {
                option['body'] = JSON.stringify(data.payload);
            } else {
                option['body'] = querystring.stringify(data.payload);
            }
        }
        if (data.query) {
            url += '?' + querystring.stringify(data.query);
        }
        // https 选项
        if (config.agent) {
            option.agent = config.agent;
        }

        // oauth
        if (config.needOAuth) {
            const oAuthToken = await getOAuthToken(global.__config.oAuth);
            option.headers.Authorization = 'Bearer ' + oAuthToken;
        }

        this.beforeFetch && this.beforeFetch(config, data, option);

        // 请求开始时间
        let startTime = new Date().getTime();

        // 打印日志
        debug(url, option);

        return fetchRetry(url, option).then((response) => {
            return new Promise((resove, reject) => {
                let endTime = new Date().getTime();
                response.text().then((text) => {
                    try {
                        debug('返回结果 =>', text);
                        resove(JSON.parse(text));
                        // 记录错误信息
                        recordErrorLog({url, option, startTime, endTime, response: text, status: response.status});
                    } catch (err) {
                        debug('json解析失败 =>', err);
                        // 记录错误信息
                        recordErrorLog({url, option, startTime, endTime, response: {res: text, err}, status: response.status});
                        debug({status: response.status, text});
                        resove({status: response.status, text});
                    }
                });
            });
        }).catch((err) => {
            // 记录错误信息
            debug('restClient Error=>', err);
            recordErrorLog({url, option, startTime, endTime: new Date().getTime(), response: {err}});
            this.errorHandle && this.errorHandle(url, JSON.stringify(data) + '', err + '');
            return Promise.reject(`restClient Error ==> ${err}`);
        });
    }
};
