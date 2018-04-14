'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.writeXls = writeXls;
var xlsx = require('node-xlsx').default;
var fs = require('fs');

function writeXls(datas, sheetName, excelName) {
    var buffer = xlsx.build([{ name: sheetName, data: datas }]);
    fs.writeFileSync(excelName + '.xlsx', buffer, 'binary');
}
//# sourceMappingURL=exportToExcel.js.map