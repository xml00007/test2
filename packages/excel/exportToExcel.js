const xlsx = require('node-xlsx').default;
const fs = require('fs');

export function writeXls(datas, sheetName, excelName) {
    const buffer = xlsx.build([{name: sheetName, data: datas}]);
    fs.writeFileSync(`${excelName}.xlsx`, buffer, 'binary');
}