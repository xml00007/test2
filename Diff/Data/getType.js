
const newData = require('./applistAndHistory_new');
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


getUrl(newData.data, 'data');

let array = [];
for (let a in obj) {
    let arr = [];
    arr.push(a.substring(a.indexOf('.') + 1));
    arr.push(obj[a].type1);
    array.push(arr);
}



function writeXls(datas) {
  const buffer = xlsx.build([{name: 'mySheetName', data: datas}]);
  fs.writeFileSync('applistAndHistory_new.xlsx', buffer, 'binary');
}

writeXls(array);