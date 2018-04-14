'use strict';

var _sequelize = require('../sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _restClient = require('../restClient');

var _restClient2 = _interopRequireDefault(_restClient);

var _excel = require('../excel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetch = require('node-fetch');


var fs = require('fs');
var cheerio = require('cheerio');
var debug = require('nirvana-logger')('result');
var htmlparser2 = require('htmlparser2');
var restClient = new _restClient2.default();
var option = {
    'path': '',
    'method': 'POST',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'timeout': 2 * 60 * 1000 };

var url = 'http://www.mafengwo.cn/gonglve/ajax.php?act=get_travellist';

async function getData(payload) {
    return await restClient.requestAsync(url, option, { payload: payload });
}

// for (let i = 1; i < 201; i++) {
//     option.body = 'mddid=10183&pageid=' + i;
//     const newOption = JSON.parse(JSON.stringify(option));
//     getData(url, newOption).then(function (data) {
//         // 解析数据
//         // console.log('data', data);
//         if (data.msg === 'succ') {
//             console.log('data.list.length', data.list.length);
//             const dom = htmlparser2.parseDOM(data.list);
//             let $ = cheerio.load(dom);
//             console.log('length', $('.post-item').length);
//             $('.post-item').map(function () {
//                 let obj = {};
//                 obj.url = $(this).find('.post-cover a').attr('href');
//                 obj.title = $(this).find('.post-cover img').attr('alt').split('_').slice(0, -1).join('') // 过滤表情符号
//                     .replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, 'BQ');
//                 Model.moFengWo.create(obj)
//                     .then(function (data) {
//                     })
//                     .catch(function (err) {
//                         Model.errorLog.create({message: obj.url});
//                         console.log('rithtData', filteremoji(obj.title));
//                         // Model.errorLog.create({message: filteremoji(obj.title)});
//                     });
//             });
//         }
//     }).catch(function (err) {
//         debug('err', err);
//     });
// }
// let i = 201;
var payload = {
    mddid: 10183,
    page: 1,
    sort: 2
};

async function getDataNew(i) {
    payload.page = i;
    debug('\u5F53\u524D\u7B2C' + i + '\u9875\u7684\u6570\u636E');
    var newPayload = JSON.parse(JSON.stringify(payload));
    debug('newPayload', newPayload);
    var data = await getData(newPayload);
    debug('data.list', data.list);
    if (data.msg === 'succ') {
        var dom = htmlparser2.parseDOM(data.list);
        var $ = cheerio.load(dom);
        $('.post-item').map(function () {
            var obj = {};
            obj.url = $(this).find('.post-cover a').attr('href');
            obj.title = $(this).find('.post-cover img').attr('alt').split('_').slice(0, -1).join(''); // 过滤表情符号
            obj.title = filteremoji(obj.title); // 过滤表情符号
            debug(obj.title);
            _sequelize2.default.moFengWo.create(obj);
        });
    }
    if (i <= 1185) {
        i += 1;
        getDataNew(i);
    }
}

// 获取标题和url
async function ss() {
    await getDataNew(202);
}

// ss();


//  过滤表情字符
function filteremoji(data) {
    var regStr = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig;
    return data.replace(regStr, 'BQ');
}

function loadPage(url) {
    var http = require('http');
    var pm = new Promise(function (resolve, reject) {
        http.get(url, function (res) {
            var html = '';
            res.on('data', function (d) {
                html += d.toString();
            });
            res.on('end', function () {
                resolve(html);
            });
        }).on('error', function (e) {
            reject(e);
        });
    });
    return pm;
}

async function getOtherData() {
    var urls = await _sequelize2.default.moFengWo.findAll({
        where: { startDate: '', cost: '1111' }, // url: {$like: '/i/7%'},
        order: ['url'],
        limit: 1000,
        attributes: ['url']
    });
    for (var m = 0; m < urls.length; m++) {
        var realurl = urls[m].dataValues.url;
        try {
            debug('realUrl', realurl);
            var update = await loadPage('http://www.mafengwo.cn' + realurl).then(function (data) {
                var dom = htmlparser2.parseDOM(data);
                var $ = cheerio.load(dom);
                var obj = {};
                if (!$('body').html()) {
                    return null;
                }
                // console.log('html', $('body').html());
                // console.log('html', $('.tarvel_dir_list .cost').children().length);
                obj.startDate = $('.tarvel_dir_list .time').children().length > 0 ? $('.tarvel_dir_list .time').children()['0'].next.data : '';
                obj.outDays = $('.tarvel_dir_list .day').children().length > 0 ? $('.tarvel_dir_list .day').children()['0'].next.data : '';
                obj.renWu = $('.tarvel_dir_list .people').children().length > 0 ? $('.tarvel_dir_list .people').children()['0'].next.data : '';
                obj.cost = $('.tarvel_dir_list .cost').children().length > 0 ? $('.tarvel_dir_list .cost').children()['0'].next.data : '2222';
                return obj;
            });

            if (!update) {
                break;
            }
            debug('update', update);
            await _sequelize2.default.moFengWo.update(update, { where: { url: realurl } });
        } catch (err) {
            console.log('realurl', realurl, err);
        }
    }
    debug('done');
}

var j = 1;

function processData() {
    debug('\u5F53\u524D\u7B2C' + j + '\u6B21');
    j++;
    setTimeout(getOtherData, 1000);
}

// processData();
// setInterval(processData, 3*60*1000);

// getOtherData('http://www.mafengwo.cn/i/8100970.html');

// loadPage('http://www.mafengwo.cn/i/3279103.html').then(function(data) {
//     console.log('data', data);
// }).catch(function(err) {
//     console.log('err', err);
// });

async function exportData() {
    var datas = await _sequelize2.default.moFengWo.findAll({
        attributes: ['title', 'startDate', 'outDays', 'renWu', 'cost'],
        order: [['startDate', 'DESC']]
        // limit: 10
    });
    var newdata = datas.map(function (item) {
        var obj = [];
        var it = item.dataValues;
        Object.keys(it).forEach(function (o) {
            return obj.push(it[o]);
        });
        return obj;
    });
    console.log(newdata);
    (0, _excel.writeXls)(newdata, 'data', 'mafengwo');
}

exportData();
//# sourceMappingURL=mofengwo.js.map