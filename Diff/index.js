// import creditOld from './creditOld';
// import creditNew from './creditNew';

// const oldData = require('./kaNiuData/credit_old_2');
// const newData = require('./creditNew');

// const oldData = require('./kaNiuData/bianliang_old_2');
// const newData = require('./bianliangNew');

// const oldData = require('./Data/wacaiCreditOld');
// const newData = require('./Data/wacaiCreditNew');


const oldData = require('./Data/applistAndHistory_old');
const newData = require('./Data/applistAndHistory_new');
const xlsx = require('node-xlsx').default;
const _ = require('lodash');
const fs = require('fs');

let obj = {};

function getUrl(data, url) {
  for (let prop in data) {
    const typeText = type(data[prop]);
    console.log('prop',prop,typeText);
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
        type1,
      };
    }
    if (typeText === 'object') {
      getUrl(data[prop], url + '.' + prop);
    }
    if (typeText === 'array') {
      const array = data[prop];
      if (array.length > 0) {
        for (let arr of array) {
          getUrl(arr, url + '.' + prop + '[0]');
        }
      }
    }
  }
}

function type(o) {
  let s = Object.prototype.toString.call(o);
  const tt = s.slice(s.indexOf(' ') + 1, s.length - 1).toLowerCase();
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
  const url = obj[prop].url;
  const type1 = obj[prop].type1;
  const datan = _.get(newData, url);
  const type2 = type(datan);
  if (!allDiff[url]) {
    allDiff[url] = {
      oldType: type1,
      newType: type2,
    };
  }
}
obj = {};

// 得到新数据的所有路径及字段类型
getUrl(newData.data, 'data');

//  对比新数据 找到差异
for (let prop in obj) {
  const url = obj[prop].url;
  const type1 = obj[prop].type1;
  const datan = _.get(oldData, url);
  const type2 = type(datan);
  let i = 0;
  if (!allDiff[url]) {
    i = i + 1;
    allDiff[url] = {
      oldType: type2,
      newType: type1,
      i,
    };
  }
}

// 排序
const allDiffnew = {};
Object.keys(allDiff).sort().forEach((item) => {
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
  const buffer = xlsx.build([{name: 'mySheetName', data: datas}]);
  fs.writeFileSync('applistAndHistory_02.xlsx', buffer, 'binary');
}

writeXls(array);