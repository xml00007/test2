'use strict';

var fs = require('fs');
var oldurl = '/Users/jinke/xinmingliang/images/';

fs.readdir('/Users/jinke/xinmingliang/images/', function (err, data) {
  data = data.slice(1);
  console.log(data);
  data.forEach(function (item) {

    var num = parseInt(item.split('-')[1].split('.')[0]);
    console.log(num);
    var newurl = oldurl + num + '.png';
    console.log(newurl);
    fs.rename(oldurl + item, newurl, function (err, data) {
      console.log('err', err);
      console.log('data', data);
    });
  });
});
//# sourceMappingURL=builkChannelName.js.map