'use strict';

var _excel = require('../Utils/excel');

var excel = _interopRequireWildcard(_excel);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var sheets = excel.readExcel(__dirname + '/data2.xlsx');

console.log(sheets[0].data.slice(6));
console.log(sheets.length);

var rightData = sheets.map(function (obj) {
  var realData = obj.data.slice(6);
  var newData = realData.map(function (item) {
    console.log('item', item);
    var arr = item[0].trim().split(/\s+/);
    return arr;
  });
  console.log(newData);
  obj.data = newData;
  return obj;
});
excel.writeXls(rightData, 'all_2.xlsx');
//# sourceMappingURL=readToMysql.js.map