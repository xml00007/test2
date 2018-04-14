'use strict';

var newData = require('./applistAndHistory_new');
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

getUrl(newData.data, 'data');

var array = [];
for (var a in obj) {
  var arr = [];
  arr.push(a.substring(a.indexOf('.') + 1));
  arr.push(obj[a].type1);
  array.push(arr);
}

function writeXls(datas) {
  var buffer = xlsx.build([{ name: 'mySheetName', data: datas }]);
  fs.writeFileSync('applistAndHistory_new.xlsx', buffer, 'binary');
}

writeXls(array);
//# sourceMappingURL=getType.js.map
//# sourceMappingURL=getType.js.map