'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _model = require('@nirvana/nirvana-sdk/kernel/model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fetch = require('node-fetch');
var debug = require('nirvana-logger')('app:restClient');
var querystring = require('querystring');


var _ = require('lodash');

/**
 * 创建错误请求日志记录
 */
var recordErrorLog = function recordErrorLog(log) {
    // 如需记录请求日志，请设置 global.__track_outer_api_request_log = true
    if (!global.__track_outer_api_request_log) return;
    var url = log.url,
        option = log.option,
        _log$startTime = log.startTime,
        startTime = _log$startTime === undefined ? new Date().getTime() : _log$startTime,
        _log$endTime = log.endTime,
        endTime = _log$endTime === undefined ? new Date().getTime() : _log$endTime,
        _log$response = log.response,
        response = _log$response === undefined ? {} : _log$response,
        _log$status = log.status,
        status = _log$status === undefined ? '' : _log$status;

    try {
        _model2.default.outer_api_request_log.create({
            url: url,
            method: option.method,
            payload: _.toString(option.body),
            httpStatus: status,
            response: _.isObject(response) ? JSON.stringify(response) : _.toString(response),
            responseTime: endTime - startTime
        });
    } catch (e) {}
};

/**
 * fetch 重试
 * @param url  node-fetch's url
 * @param options node-fetch's options extend retries and retryDelay
 * @return {Promise}
 */
function fetchRetry(url, options) {
    var retries = 3;
    var retryDelay = 1000;

    return new Promise(function (resolve, reject) {
        var wrappedFetch = function wrappedFetch(n) {
            fetch(url, options).then(function (response) {
                resolve(response);
            }).catch(function (error) {
                if (error.errno === 'ENOTFOUND' && n > 0) {
                    debug('域名解析失败', '\u6B63\u5728\u91CD\u8BD5 ' + (retries - n) + ' \u6B21');
                    setTimeout(function () {
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
    return toString.apply(v) === '[object Object]' || toString.apply(v) === '[object Window]';
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
    Object.keys(params).forEach(function (name) {
        path = path.replace('{' + name + '}', encodeURIComponent(params[name]));
    });
    return path;
}

/**
 * 获取oAuth token
 * @returns {Promise<T>|Promise}
 */
function getOAuthToken(oAuthConfig) {
    return new Promise(function (resolve, reject) {
        var certificate = new Buffer(oAuthConfig.client_id + ':' + oAuthConfig.client_secret).toString('base64');
        var tokenType = 'Basic';

        var Authorization = tokenType + ' ' + certificate;
        var url = oAuthConfig.url;
        var option = {
            method: 'post',
            headers: {
                Authorization: Authorization,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        fetch(url, option).then(function (response) {
            return response.json();
        }).then(function (jsonData) {
            return resolve(jsonData['access_token']);
        }).catch(function (err) {
            debug('获取oauthtoken失败', err);
            reject(err);
        });
    });
}

var RestClient = function () {
    function RestClient() {
        var beforeFetch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var errorHandle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, RestClient);

        this.oAuthConfig = null;
        this.init();
        this.beforeFetch = beforeFetch;
        this.errorHandle = errorHandle;
    }

    _createClass(RestClient, [{
        key: 'init',
        value: function init(oAuthConfig) {
            this.oAuthConfig = oAuthConfig;
        }

        /**
         * 异步request方法
         * @param baseUrl - baseUrl
         * @param config - {path, needOAuth, method}
         * @param data - {payload, query, param}
         * @returns {Promise.<void>}
         */

    }, {
        key: 'requestAsync',
        value: async function requestAsync(baseUrl, config) {
            var _this = this;

            var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var url = baseUrl + config.path;

            // 如果参数在url中
            if (url.match(/\{.+\}/i) && data.param) {
                url = pathParamResolve(url, data.param);
            }

            // 设置默认Content-Type为application/json
            if (!config['Content-Type']) {
                config['Content-Type'] = 'application/json';
            }

            var option = {
                method: config.method,
                headers: {
                    'Content-Type': config['Content-Type']
                },
                timeout: 2 * 60 * 1000 };

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
                var oAuthToken = await getOAuthToken(global.__config.oAuth);
                option.headers.Authorization = 'Bearer ' + oAuthToken;
            }

            this.beforeFetch && this.beforeFetch(config, data, option);

            // 请求开始时间
            var startTime = new Date().getTime();

            // 打印日志
            debug(url, option);

            return fetchRetry(url, option).then(function (response) {
                return new Promise(function (resove, reject) {
                    var endTime = new Date().getTime();
                    response.text().then(function (text) {
                        try {
                            debug('返回结果 =>', text);
                            resove(JSON.parse(text));
                            // 记录错误信息
                            recordErrorLog({ url: url, option: option, startTime: startTime, endTime: endTime, response: text, status: response.status });
                        } catch (err) {
                            debug('json解析失败 =>', err);
                            // 记录错误信息
                            recordErrorLog({ url: url, option: option, startTime: startTime, endTime: endTime, response: { res: text, err: err }, status: response.status });
                            debug({ status: response.status, text: text });
                            resove({ status: response.status, text: text });
                        }
                    });
                });
            }).catch(function (err) {
                // 记录错误信息
                debug('restClient Error=>', err);
                recordErrorLog({ url: url, option: option, startTime: startTime, endTime: new Date().getTime(), response: { err: err } });
                _this.errorHandle && _this.errorHandle(url, JSON.stringify(data) + '', err + '');
                return Promise.reject('restClient Error ==> ' + err);
            });
        }
    }]);

    return RestClient;
}();

exports.default = RestClient;
;
//# sourceMappingURL=index.js.map