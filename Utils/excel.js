const xlsx = require('node-xlsx').default;
const _ = require('lodash');
const fs = require('fs');

let obj = {};

export function readExcel(url) {
  const workSheets = xlsx.parse(url);
  return workSheets;
}

export function writeXls(datas,name) {
  const buffer = xlsx.build(datas);
  fs.writeFileSync(name, buffer, 'binary');
}
