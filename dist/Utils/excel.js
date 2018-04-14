'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readExcel = readExcel;
exports.writeXls = writeXls;
var xlsx = require('node-xlsx').default;
var _ = require('lodash');
var fs = require('fs');

var obj = {};

function readExcel(url) {
  var workSheets = xlsx.parse(url);
  return workSheets;
}

function writeXls(datas, name) {
  var buffer = xlsx.build(datas);
  fs.writeFileSync(name, buffer, 'binary');
}
//# sourceMappingURL=excel.js.map