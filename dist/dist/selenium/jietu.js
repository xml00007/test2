'use strict';

require('chromedriver');
var fs = require('fs');

var _require = require('selenium-webdriver'),
    Builder = _require.Builder,
    By = _require.By,
    Key = _require.Key,
    until = _require.until;

var driver = new Builder().forBrowser('chrome').build();

driver.get('http://www.google.com');
driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.takeScreenshot().then(function (data) {
  var dataBuffer = new Buffer(data, 'base64');
  fs.writeFile('./image.png', dataBuffer, function (err) {
    if (err) {
      console.log('err', err);
    } else {
      console.log('操作成功');
    }
  });
});
driver.quit();
//# sourceMappingURL=jietu.js.map
//# sourceMappingURL=jietu.js.map