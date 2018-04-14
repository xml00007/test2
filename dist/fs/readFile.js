'use strict';

/**
 * Created by Arthur on 17/9/4.
 */
var fs = require('fs');
var chalk = require('chalk');
var log = console.log;
var packages = '/Users/jinke/Downloads';
var Path = require('path');
var iconv = require('iconv-lite');

function warning() {
  console.log(chalk.red.apply(chalk, arguments));
}

var myModules = fs.readdirSync(packages).filter(function (name) {
  return name === '1221.docx';
});

warning(myModules);
var promiseAll = myModules.map(function (item) {
  var url = Path.join(packages, item);
  var a = new Promise(function (reslove, reject) {
    fs.readFile(url, { encoding: 'utf-8' }, function (err, data) {
      if (err) {
        reject(err);
      }
      reslove({ name: url, data: data });
    });
  });
  return a;
});

Promise.all(promiseAll).then(function (data) {
  data.map(function (item) {
    console.log(item.data);
    // const data1 = item.data.toString().replace(/(!(\S+)\s\|\|\s\S+.code\s!==\s200)/g, 'Message.isFailed($2)');
    // const data1 = item.data.toString().replace(/\((\S+).code\s!==\s200\)/g, '(Message.isFailed($1))');
    var str = iconv.decode(item.data, 'gb2312');
    console.log(str);
  });
});

// let invalidNames = packageJsons.filter(item => {
//   return item.name.substr(0, 8) === '@nirvana';
// });
//
// // 输出
// if (invalidNames.length) {
//   warning('检测到不合法的包名称: 正确包名格式为 @nirvana/pacakge-name');
//   warning(invalidNames.map(item => item.name).join('\n'));
// }
//# sourceMappingURL=readFile.js.map