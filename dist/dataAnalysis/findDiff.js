'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 该文件主要提供数据分析等方法
 以数组第一项为基础对比分析数据
 */

var _ = require('lodash');
var L = require('nirvana-logger')('dataAnalysis');

var data = [{
    'serverid': 801,
    'positive_effect': 1,
    'skill_num': 3,
    'speed_aptitude': 1424,
    'eval_price': 27300,
    'game_ordersn': '1337_1513593668_1337228938',
    'color': 0,
    'physical_aptitude': 3414,
    'attack_aptitude': 1498,
    'time_left': '3\u59295\u5C0F\u65F617\u5206\u949F',
    'skill_with_suit': [308, 316, 554],
    'used_lianshou': 0,
    'equip_face_img': '102187.gif',
    'growth': 1185,
    'skill_num_with_suit': 3,
    'auction_status': 0,
    'wakan': 430,
    'auction_cur_price': 0,
    'skill': [308, 316, 554],
    'speed': 327,
    'equip_status': 2,
    'appointed_roleid': null,
    'front_status': 21,
    'defence': 348,
    'fair_show_end_time': '2017-12-22 18:56:08',
    'collect_num': 0,
    'id2': 43649071,
    'advance_skill_num': 1,
    'avoid_aptitude': 1086,
    'attack': 1001,
    'score': 99999901,
    'auction_last_mtime': 0,
    'equip_level': 79,
    'type': 102187,
    'area_name': '\u5C71\u4E1C3\u533A',
    'status': 2,
    'neidan': [902, 924],
    'sp_skill': 0,
    'negative_effect': 5,
    'server_type': 2,
    'equip_type': '102187',
    'price': '300.00',
    'other_info': '{"highlight": "[]", "accept_bargain": 0, "seller_roleid": "69696969", "seller_nickname": "Tangled\\uff01"}',
    'pass_fair_show': 1,
    'areaid': 27,
    'equip_type_desc': '',
    'summon_color': 1,
    'is_baobao': 1,
    'auction_expire_time': 0,
    'is_item_exist': 1,
    'large_equip_desc': '\u86DF\u9F99;102187;79;1406;714;1001;348;327;100;160;90;503;103;230;0;430;1406;714;5059;1;1498;1042;3414;2506;1424;1086;1185;308|316|554;0;1;0;0;0;0;(["MS_MAX":1800,"core_close":1,"iRealColor":3,"jj_extra_add":0,"growthMax":1236,"carrygradezz":0,"lastchecksubzz":0,"iJjFeedCd":0,"left_qlxl":0,"summon_equip4_type":0,"SPD_MAX":1550,"summon_equip4_desc":"","weaken":5,"MP_MAX":3050,"sjg":0,"tmp_lingxing":98,"ATK_MAX":1550,"csavezz":"1498|1042|1424|1086|3414|2506","strengthen":1,"summon_color":1,"jinjie":(["new_type":1,"lx":98,"core":(["effect":"#Y\u666E\u901A\u7269\u7406\u653B\u51FB\u51FB\u6740\u4EFB\u610F\u5355\u4F4D\u65F6\u6709#G33%#Y\u6982\u7387\u8FDB\u884C\u70AB\u8000\uFF0C\u6BCF\u573A\u6218\u6597\u6700\u591A1\u6B21\u3002\u5168\u5C5E\u6027\u964D\u4F4E#R4#Y\u3002","name":"\u81EA\u604B","id":727,"fix_st":0,]),"cnt":7,]),"HP_MAX":5500,"summon_core":([902:({5,0,([]),}),924:({1,0,([]),}),]),"DEF_MAX":1550,])',
    'used_yuanxiao': 0,
    'max_blood': 1406,
    'seller_nickname': 'Tangled\uFF01',
    'expire_time': '3\u59295\u5C0F\u65F617\u5206\u949F',
    'auction_sort_index': 0,
    'auction_bid_count': 0,
    'suit_skill': 0,
    'reonsale_identify': '5ecc613150de01b7e6824594426f24f4',
    'defence_aptitude': 1042,
    'kindid': 65,
    'level': 79,
    'auction_abort_time': 0,
    'owner_uid': 1425,
    'auction_special': 0,
    'min_buyer_level': 50,
    'server_name': '\u4E3A\u7231\u8FFD\u5BFB',
    'neidan_dict': '{"nd924":1,"nd902":5}',
    'magic_aptitude': 2506,
    'storage_type': 2,
    'tr_class': 'table2_tr2',
    'lingxing': 98,
    'equip_count': 1,
    'can_bargain': 0,
    'create_time': '2017-12-18 18:41:08',
    'equip_name': '\u86DF\u9F99',
    'eid': '201712181800113-801-OUVJQNAE8LPP',
    'game_serverid': '1337',
    'equipid': 228773,
    'texing': [727],
    'selling_time': 1520000927,
    'seller_roleid': '69696969'
}, {
    'serverid': 795,
    'positive_effect': 0,
    'skill_num': 4,
    'speed_aptitude': 1120,
    'eval_price': 29200,
    'game_ordersn': '1331_1510985397_1331442039',
    'color': 0,
    'physical_aptitude': 3378,
    'attack_aptitude': 1220,
    'time_left': '4\u59294\u5C0F\u65F634\u5206\u949F',
    'skill_with_suit': [1, 309, 412, 429, 661],
    'used_lianshou': 0,
    'equip_face_img': '102211.gif',
    'growth': 1231,
    'skill_num_with_suit': 4,
    'auction_status': 0,
    'wakan': 879,
    'auction_cur_price': 0,
    'skill': [1, 309, 412, 429, 661],
    'speed': 292,
    'equip_status': 2,
    'appointed_roleid': null,
    'front_status': 21,
    'defence': 662,
    'fair_show_end_time': '2017-11-22 14:24:58',
    'collect_num': 10,
    'id2': 43649319,
    'advance_skill_num': 2,
    'avoid_aptitude': 887,
    'attack': 769,
    'score': 99999972,
    'auction_last_mtime': 0,
    'equip_level': 138,
    'type': 102211,
    'area_name': '\u5929\u4E0B\u65E0\u53CC',
    'status': 2,
    'neidan': [905, 906, 925, 931],
    'sp_skill': 429,
    'negative_effect': 0,
    'server_type': 2,
    'equip_type': '102211',
    'price': '300.00',
    'other_info': '{"highlight": "[]", "accept_bargain": 0, "seller_roleid": "4458102", "seller_nickname": "\\u97ad\\u6253\\u738b\\u6708\\u67081"}',
    'pass_fair_show': 1,
    'areaid': 60,
    'equip_type_desc': '',
    'summon_color': 0,
    'is_baobao': 0,
    'auction_expire_time': 0,
    'is_item_exist': 1,
    'large_equip_desc': '\u753B\u9B42;102211;138;2107;3503;769;662;292;100;225;788;148;148;238;0;879;2107;3503;3612;2;1220;1059;3378;2150;1120;887;1231;412|661|429|309;429;0;0;0;0;0;(["sjg":0,"SPD_MAX":1550,"weaken":0,"core_close":0,"lastchecksubzz":0,"MP_MAX":3050,"summon_equip4_type":0,"tmp_lingxing":50,"csavezz":"1220|1059|1120|887|3378|2150","growthMax":1277,"MS_MAX":1800,"jj_extra_add":0,"DEF_MAX":1550,"HP_MAX":5500,"ATK_MAX":1550,"left_qlxl":7,"summon_equip4_desc":"","summon_equip1":(["iType":9311,"cDesc":"#r\u7B49\u7EA7 105 #r\u547D\u4E2D\u7387 +13% \u6C14\u8840 -8#r\u8010\u4E45\u5EA6 502#r#G#G\u654F\u6377 +17#Y#Y#r#W\u5236\u9020\u8005\uFF1A\u6D41\u8A00\u871A\u8BED\xB0#Y",]),"iJjFeedCd":0,"iRealColor":0,"carrygradezz":0,"jinjie":(["new_type":1,"cnt":0,"core":([]),"lx":50,]),"summon_color":0,"summon_core":([931:({5,0,([]),}),925:({1,1,([]),}),905:({5,0,([]),}),906:({5,0,([]),}),]),"strengthen":0,"summon_equip2":(["iType":9211,"cDesc":"#r\u7B49\u7EA7 105 #r\u901F\u5EA6 +26 \u6C14\u8840 -12#r\u8010\u4E45\u5EA6 545#r#G#G\u7075\u529B +9#Y#Y#r#W\u5236\u9020\u8005\uFF1A\u8863\u89D2\u7FE9\u7FE9#Y",]),"summon_equip3":(["iType":9112,"cDesc":"#r\u7B49\u7EA7 115 #r\u9632\u5FA1 +85#r\u8010\u4E45\u5EA6 515#r#G#G\u7075\u529B +6#Y#Y#r#W\u5236\u9020\u8005\uFF1A\u03C9\u989C\u96C5\u7434\u0394#Y",]),])',
    'used_yuanxiao': 0,
    'max_blood': 2107,
    'seller_nickname': '\u97AD\u6253\u738B\u6708\u67081',
    'expire_time': '4\u59294\u5C0F\u65F634\u5206\u949F',
    'auction_sort_index': 0,
    'auction_bid_count': 0,
    'suit_skill': 0,
    'reonsale_identify': '5ecc613150de01b7e6824594426f24f4',
    'defence_aptitude': 1059,
    'kindid': 66,
    'level': 138,
    'auction_abort_time': 0,
    'owner_uid': 33217,
    'auction_special': 0,
    'min_buyer_level': 50,
    'server_name': '\u8D85\u51E1\u5165\u5723',
    'neidan_dict': '{"nd906":5,"nd925":1,"nd931":5,"nd905":5}',
    'magic_aptitude': 2150,
    'storage_type': 2,
    'tr_class': 'table2_tr1',
    'lingxing': 50,
    'equip_count': 1,
    'can_bargain': 0,
    'create_time': '2017-11-18 14:09:58',
    'equip_name': '\u753B\u9B42',
    'eid': '201711181400113-795-NEPDNK0JO1RH',
    'game_serverid': '1331',
    'equipid': 619888,
    'texing': [],
    'selling_time': 1520084766,
    'seller_roleid': '4458102'
}, {
    'serverid': 795,
    'positive_effect': 0,
    'skill_num': 4,
    'speed_aptitude': 1223,
    'eval_price': 107300,
    'game_ordersn': '1331_1519825530_1331504575',
    'color': 1,
    'physical_aptitude': 4581,
    'attack_aptitude': 1617,
    'time_left': '5\u59294\u5C0F\u65F649\u5206\u949F',
    'skill_with_suit': [301, 304, 305, 316, 325],
    'used_lianshou': 0,
    'equip_face_img': '102576.gif',
    'growth': 1246,
    'skill_num_with_suit': 5,
    'auction_status': 0,
    'wakan': 622,
    'auction_cur_price': 0,
    'skill': [301, 304, 316, 325],
    'speed': 245,
    'equip_status': 2,
    'appointed_roleid': null,
    'front_status': 21,
    'defence': 656,
    'fair_show_end_time': '2018-03-04 22:00:30',
    'collect_num': 4,
    'id2': 43649393,
    'advance_skill_num': 0,
    'avoid_aptitude': 1366,
    'attack': 1874,
    'score': 100000720,
    'auction_last_mtime': 0,
    'equip_level': 119,
    'type': 102576,
    'area_name': '\u5929\u4E0B\u65E0\u53CC',
    'status': 2,
    'neidan': [901, 913, 924, 932],
    'sp_skill': 0,
    'negative_effect': 0,
    'server_type': 2,
    'equip_type': '102576',
    'price': '300.00',
    'other_info': '{"highlight": "[]", "accept_bargain": 1, "seller_roleid": "77880998", "seller_nickname": "\\u56de\\u5fc6\\u30ae"}',
    'pass_fair_show': 1,
    'areaid': 60,
    'equip_type_desc': '',
    'summon_color': 0,
    'is_baobao': 1,
    'auction_expire_time': 0,
    'is_item_exist': 1,
    'large_equip_desc': '\u9B3C\u5C06;102576;119;2406;856;1874;656;245;99;249;132;790;131;163;0;622;2406;856;1795;2;1617;1291;4581;1529;1223;1366;1246;301|316|304|325;0;1;0;0;0;0;(["growthMax":1277,"summon_equip3":(["cDesc":"#r\u7B49\u7EA7 105 #r\u9632\u5FA1 +85 \u4F24\u5BB3 +35#r\u8010\u4E45\u5EA6 590#r#G#G\u654F\u6377 +7#Y#Y#r#c4DBAF4\u5957\u88C5\u6548\u679C\uFF1A\u9644\u52A0\u72B6\u6001#c4DBAF4\u8FDE\u51FB#Y#Y#r#W\u5236\u9020\u8005\uFF1A\u7206\u70B8\u4F60\u4E36\u4E1C\u5C11#Y","iType":9111,]),"summon_core":([901:({5,0,([]),}),913:({5,0,([]),}),932:({5,0,([]),}),924:({1,1,([]),}),]),"DEF_MAX":1550,"iJjFeedCd":0,"summon_equip2":(["cDesc":"#r\u7B49\u7EA7 115 #r\u4F24\u5BB3 +38 \u901F\u5EA6 +36#r\u8010\u4E45\u5EA6 462#Y#r#c4DBAF4\u5957\u88C5\u6548\u679C\uFF1A\u9644\u52A0\u72B6\u6001#c4DBAF4\u8FDE\u51FB#Y#Y#r#W\u5236\u9020\u8005\uFF1A\u7206\u70B8\u4F60\u4E36\u4E1C\u5C11#Y","iType":9212,]),"summon_equip1":(["cDesc":"#r\u7B49\u7EA7 115 #r\u547D\u4E2D\u7387 +16% \u4F24\u5BB3 +39#r\u8010\u4E45\u5EA6 509#Y#r#c4DBAF4\u5957\u88C5\u6548\u679C\uFF1A\u9644\u52A0\u72B6\u6001#c4DBAF4\u8FDE\u51FB#Y#Y#r#W\u5236\u9020\u8005\uFF1A\u7206\u70B8\u4F60\u4E36\u4E1C\u5C11#Y#r#r\u9576\u5D4C\u6548\u679C #r+30\u4F24\u5BB3 \u9576\u5D4C\u7B49\u7EA7\uFF1A3","iType":9312,]),"MP_MAX":3050,"summon_equip4_desc":"#r\u4FEE\u7406\u5931\u8D25 1\u6B21#Y#r\u7384\u5929\u7075\u529B 507 \uFF08\u5DF2\u67D3\u8272\uFF09","left_qlxl":0,"HP_MAX":5500,"SPD_MAX":1550,"summon_color":0,"ATK_MAX":1550,"jinjie":(["new_type":0,"core":([]),"lx":84,"cnt":7,]),"MS_MAX":1800,"sjg":0,"iRealColor":1,"lastchecksubzz":2018,"jj_extra_add":0,"carrygradezz":0,"strengthen":0,"weaken":0,"iColor":1,"tmp_lingxing":84,"summon_equip4_type":3560,"core_close":0,"csavezz":"1617|1291|1223|1366|4581|1529",])',
    'used_yuanxiao': 0,
    'max_blood': 2406,
    'seller_nickname': '\u56DE\u5FC6\u30AE',
    'expire_time': '5\u59294\u5C0F\u65F649\u5206\u949F',
    'auction_sort_index': 0,
    'auction_bid_count': 0,
    'suit_skill': 305,
    'reonsale_identify': '5ecc613150de01b7e6824594426f24f4',
    'defence_aptitude': 1291,
    'kindid': 66,
    'level': 119,
    'auction_abort_time': 0,
    'owner_uid': 30300,
    'auction_special': 0,
    'min_buyer_level': 50,
    'server_name': '\u8D85\u51E1\u5165\u5723',
    'neidan_dict': '{"nd924":1,"nd932":5,"nd913":5,"nd901":5}',
    'magic_aptitude': 1529,
    'storage_type': 2,
    'tr_class': 'table2_tr2',
    'lingxing': 84,
    'equip_count': 1,
    'can_bargain': 1,
    'create_time': '2018-02-28 21:45:30',
    'equip_name': '\u9B3C\u5C06',
    'eid': '201802282100113-795-Y5SOMRCBGIFA',
    'game_serverid': '1331',
    'equipid': 682344,
    'texing': [],
    'selling_time': 1519825530,
    'seller_roleid': '77880998'
}];

var data2 = [{
    a: 1,
    b: { c: 2, d: 3 }
}];

var dataAnalysis = function () {
    function dataAnalysis() {
        _classCallCheck(this, dataAnalysis);

        this.dataDiff = {};
        this.dataOrig = {};
    }

    _createClass(dataAnalysis, [{
        key: 'findDiff',
        value: function findDiff(data) {
            if (!_.isArray(data)) {
                L('参数要求为数组，请输入正确的参数');
            }
            var allData = data.map(function (item) {
                return getUrl(item, '');
            });
            console.log(allData);
        }
    }]);

    return dataAnalysis;
}();

function getUrl(data, url) {
    var obj = {};
    if (type(data) === 'object') {}
    if (type(data) === 'array') {
        var len = data.length,
            i = 0;
        for (i = 0; i < len; i += 1) {
            getUrl(data[i], url + '[' + i + ']');
        }
    }
    return obj;
}

function type(o) {
    var s = Object.prototype.toString.call(o);
    var tt = s.slice(s.indexOf(' ') + 1, s.length - 1).toLowerCase();
    return tt;
}

var dataprocess = new dataAnalysis();

dataprocess.findDiff(data2.slice(0, 1));
//# sourceMappingURL=findDiff.js.map