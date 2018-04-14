/**
 * Created by Arthur on 17/9/4.
 */
const fs = require('fs');
const chalk = require('chalk');
const log = console.log;
const packages = '/Users/jinke/Downloads';
const Path = require('path');
let iconv = require('iconv-lite');

function warning(...arg) {
  console.log(chalk.red(...arg));
}

let myModules = fs.readdirSync(packages).filter(name => name === '1221.docx');

warning(myModules);
const promiseAll = myModules.map(
    (item) => {
      const url = Path.join(packages, item);
      let a = new Promise(function(reslove, reject) {
        fs.readFile(url, {encoding: 'utf-8'}, function(err, data) {
          if (err) {
            reject(err);
          }
          reslove({name: url, data});
        });
      });
      return a;
    });

Promise.all(promiseAll).then(function(data) {
  data.map(item => {
    console.log(item.data);
    // const data1 = item.data.toString().replace(/(!(\S+)\s\|\|\s\S+.code\s!==\s200)/g, 'Message.isFailed($2)');
    // const data1 = item.data.toString().replace(/\((\S+).code\s!==\s200\)/g, '(Message.isFailed($1))');
    let str = iconv.decode(item.data, 'gb2312');
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

