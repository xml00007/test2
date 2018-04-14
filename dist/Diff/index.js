'use strict';

// import creditOld from './creditOld';
// import creditNew from './creditNew';

// const oldData = require('./kaNiuData/credit_old_2');
// const newData = require('./creditNew');

// const oldData = require('./kaNiuData/bianliang_old_2');
// const newData = require('./bianliangNew');

// const oldData = require('./Data/wacaiCreditOld');
// const newData = require('./Data/wacaiCreditNew');


let oldData = require('./Data/applistAndHistory_old');
let newData = require('./Data/applistAndHistory_new');
let xlsx = require('node-xlsx').default;
let _ = require('lodash');
let fs = require('fs');

let obj = {};

function getUrl(data, url) {
  for (let prop in data) {
    let typeText = type(data[prop]);
    console.log('prop', prop, typeText);
    if (typeText !== 'object' && typeText !== 'array') {
      let type1 = null;
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
      let _array = data[prop];
      if (_array.length > 0) {
        let _iteratorNormalCompletion = true;
        let _didIteratorError = false;
        let _iteratorError = undefined;

        try {
          for (let _iterator = _array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            let arr = _step.value;

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
  let s = Object.prototype.toString.call(o);
  let tt = s.slice(s.indexOf(' ') + 1, s.length - 1).toLowerCase();
  if (o === 'NumberLong') {
    return 'NumberLong';
  }
  if (o === 'NumberInt') {
    return 'NumberInt';
  }
  return tt;
}

let allDiff = {};
// 得到老数据的所有路径及字段类型
getUrl(oldData.data, 'data');

//  对比新数据 找到差异
for (let prop in obj) {
  let url = obj[prop].url;
  let type1 = obj[prop].type1;
  let datan = _.get(newData, url);
  let type2 = type(datan);
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
for (let _prop in obj) {
  let _url = obj[_prop].url;
  let _type = obj[_prop].type1;
  let _datan = _.get(oldData, _url);
  let _type2 = type(_datan);
  let i = 0;
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
let allDiffnew = {};
Object.keys(allDiff).sort().forEach(function (item) {
  allDiffnew[item] = allDiff[item];
});

let array = [];
for (let a in allDiffnew) {
  //  只要类型有差异的数据
  if (allDiffnew[a].oldType !== allDiffnew[a].newType) {
    let arr = [];
    arr.push(a.substring(a.indexOf('.') + 1));
    arr.push(allDiffnew[a].oldType);
    arr.push(allDiffnew[a].newType);
    array.push(arr);
  }
}

function writeXls(datas) {
  let buffer = xlsx.build([{ name: 'mySheetName', data: datas }]);
  fs.writeFileSync('applistAndHistory_02.xlsx', buffer, 'binary');
}

writeXls(array);
//# sourceMappingURL=index.js.map