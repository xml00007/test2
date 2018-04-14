import * as excel from '../Utils/excel';

const sheets = excel.readExcel(`${__dirname}/data2.xlsx`);

console.log(sheets[0].data.slice(6));
console.log(sheets.length);

const rightData = sheets.map(function(obj) {
  const realData = obj.data.slice(6);
  let newData = realData.map(function(item) {
    console.log('item', item);
    let arr = item[0].trim().split(/\s+/);
    return arr;
  });
  console.log(newData);
  obj.data = newData;
  return obj;
});
excel.writeXls(rightData, 'all_2.xlsx');