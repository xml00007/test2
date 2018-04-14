'use strict';

// import creditOld from './creditOld';
// import creditNew from './creditNew';

// const oldData = require('./kaNiuData/credit_old_2');
// const newData = require('./creditNew');

// const oldData = require('./kaNiuData/bianliang_old_2');
// const newData = require('./bianliangNew');

// const oldData = require('./Data/wacaiCreditOld');
// const newData = require('./Data/wacaiCreditNew');


var oldData = require('./Data/applistAndHistory_old');
var newData = require('./Data/applistAndHistory_new');
var xlsx = require('node-xlsx').default;
var _ = require('lodash');
var fs = require('fs');

var obj = {};

function getUrl(data, url) {
  for (var prop in data) {
    var typeText = type(data[prop]);
    console.log('prop', prop, typeText);
    if (typeText !== 'object' && typeText !== 'array') {
      var type1 = null;
      switch (typeText) {
        case 'NumberLong':
          type1 = 'NumberLong';
          break;
        case 'NumberInt':
          type1 = 'NumberInt';
          break;
        case 'string':
          type1 = 'string';
          break;
        case 'number':
          type1 = 'number';
          break;
        default:
          console.error('111111111111111111111', typeText);
          type1 = 'string';
          break;
      }
      obj[url + '.' + prop] = {
        url: url + '.' + prop,
        type1: type1
      };
    }
    if (typeText === 'object') {
      getUrl(data[prop], url + '.' + prop);
    }
    if (typeText === 'array') {
      var _array = data[prop];
      if (_array.length > 0) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator2 = _array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator2.next()).done); _iteratorNormalCompletion = true) {
            var arr = _step.value;

            getUrl(arr, url + '.' + prop + '[0]');
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }
}

function type(o) {
  var s = Object.prototype.toString.call(o);
  var tt = s.slice(s.indexOf(' ') + 1, s.length - 1).toLowerCase();
  if (o === 'NumberLong') {
    return 'NumberLong';
  }
  if (o === 'NumberInt') {
    return 'NumberInt';
  }
  return tt;
}

var allDiff = {};
// 得到老数据的所有路径及字段类型
getUrl(oldData.data, 'data');

//  对比新数据 找到差异
for (var prop in obj) {
  var url = obj[prop].url;
  var type1 = obj[prop].type1;
  var datan = _.get(newData, url);
  var type2 = type(datan);
  if (!allDiff[url]) {
    allDiff[url] = {
      oldType: type1,
      newType: type2
    };
  }
}
obj = {};

// 得到新数据的所有路径及字段类型
getUrl(newData.data, 'data');

//  对比新数据 找到差异
for (var _prop in obj) {
  var _url = obj[_prop].url;
  var _type = obj[_prop].type1;
  var _datan = _.get(oldData, _url);
  var _type2 = type(_datan);
  var i = 0;
  if (!allDiff[_url]) {
    i = i + 1;
    allDiff[_url] = {
      oldType: _type2,
      newType: _type,
      i: i
    };
  }
}

// 排序
var allDiffnew = {};
Object.keys(allDiff).sort().forEach(function (item) {
  allDiffnew[item] = allDiff[item];
});

var array = [];
for (var a in allDiffnew) {
  //  只要类型有差异的数据
  if (allDiffnew[a].oldType !== allDiffnew[a].newType) {
    var arr = [];
    arr.push(a.substring(a.indexOf('.') + 1));
    arr.push(allDiffnew[a].oldType);
    arr.push(allDiffnew[a].newType);
    array.push(arr);
  }
}

function writeXls(datas) {
  var buffer = xlsx.build([{ name: 'mySheetName', data: datas }]);
  fs.writeFileSync('applistAndHistory_02.xlsx', buffer, 'binary');
}

writeXls(array);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map