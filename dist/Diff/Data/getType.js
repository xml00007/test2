'use strict';

let newData = require('./applistAndHistory_new');
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

getUrl(newData.data, 'data');

let array = [];
for (let a in obj) {
  let arr = [];
  arr.push(a.substring(a.indexOf('.') + 1));
  arr.push(obj[a].type1);
  array.push(arr);
}

function writeXls(datas) {
  let buffer = xlsx.build([{ name: 'mySheetName', data: datas }]);
  fs.writeFileSync('applistAndHistory_new.xlsx', buffer, 'binary');
}

writeXls(array);
//# sourceMappingURL=getType.js.map