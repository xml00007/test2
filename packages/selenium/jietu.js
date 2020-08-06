require('chromedriver');
const fs = require('fs');
const {Builder, By, Key, until} = require('selenium-webdriver');

let driver = new Builder().forBrowser('chrome').build();

driver.get('http://www.google.com');
driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.takeScreenshot().then(function(data) {
  let dataBuffer = new Buffer(data, 'base64');
  fs.writeFile('./image.png', dataBuffer, function(err) {
    if (err) {
      console.log('err', err);
    } else {
      console.log('操作成功');
    }
  });
});
driver.quit();