//依赖模块
let fs = require('fs');
let request = require('request');
let cheerio = require('cheerio');
let mkdirp = require('mkdirp');
let Iconv = require('iconv').Iconv;
const htmlparser2 = require('htmlparser2');
import Model from '../sequelize';

// 数据库链接

//目标网址
let url = 'http://linux.linuxidc.com/index.php';


//本地存储目录
let dir = './images';

//创建目录
mkdirp(dir, function(err) {
  if (err) {
    console.log(err);
  }
});

let obj = {};
let files = {};

//发送请求
function getPaths(url, name) {
  request({url, encoding: null}, function(error, response, body) {
    // body = new Iconv('GBK', 'UTF-8').convert(body).toString();
    const bodyOld = body;
    try {
      body = new Iconv('GBK', 'UTF-8').convert(body).toString();
    } catch (err) {
      body = bodyOld;
    }
    if (!error && response.statusCode === 200) {
      const dom = htmlparser2.parseDOM(body);
      let $ = cheerio.load(dom);

      if ($('tr.folder_bg a').length > 0) {
        $('tr.folder_bg a').each(function() {
          let newName = name;
          let src = 'http://linux.linuxidc.com/' + $(this).attr('href');
          let text = $(this).text();
          // console.log('进入文件夹', src);
          obj[text] = {};
          newName += '_' + text;
          getPaths(src, newName);
        });
      }
      if ($('tr.file_bg1').length > 0) {
        $('tr.file_bg1').each(function() {
          let data = {};
          let newName = name;
          let src = 'http://linux.linuxidc.com/' + $(this).find('a').attr('href');
          let text = $(this).find('a').text().replace(/\./g, '_').replace(/-/g, '_');
          let size = $(this).children()[1].children[0].data;
          let time = $(this).children()[2].children[0].data;
          newName += '_' + text;
          data.title = text;
          data.size = size;
          data.src = src;
          data.year = newName.split('_')[1];
          data.month = newName.split('_')[2];
          data.day = newName.split('_')[3];
          data.path = newName;
          data.createTime = time;
          Model.linuxDoc.create(data);
          console.log('正在下载2222222', newName);
          // download(src, dir, Math.floor(Math.random() * 100000) + src.substr(-4, 4));
        });
      }
    }
  });
}

//下载方法
let download = function(url, dir, filename) {
  // console.log('files', url, dir, filename);
  // request.head(url, function(err, res, body) {
  //   request(url).pipe(fs.createWriteStream(dir + '/' + filename));
  // });
};

getPaths(url, '');
// console.log(obj);

// fs.writeFile('./content.js', JSON.stringify(obj), (err) => {
//   console.log(err, '写入完成');
// });
