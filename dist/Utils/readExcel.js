'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readExcel = readExcel;
exports.writeXls = writeXls;

var newData = require('./applistAndHistory_new');
var xlsx = require('node-xlsx').default;
var _ = require('lodash');
var fs = require('fs');

var obj = {};

function readExcel() {}

function writeXls(datas) {
  var buffer = xlsx.build([{ name: 'mySheetName', data: datas }]);
  fs.writeFileSync('applistAndHistory_new.xlsx', buffer, 'binary');
}
//# sourceMappingURL=readExcel.js.map