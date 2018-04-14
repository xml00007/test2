'use strict';

require('chromedriver');

var _require = require('selenium-webdriver'),
    Builder = _require.Builder,
    By = _require.By,
    Key = _require.Key,
    until = _require.until,
    promise = _require.promise;

var driver = new Builder().forBrowser('chrome').build();

driver.get('http://www.baidu.com');
driver.findElement(By.id('kw')).sendKeys('美女', Key.RETURN);
driver.sleep(2000).then(function () {
  var pendingElements = driver.findElements(By.xpath('//div[contains(@class, "result")]/h3/a'));
  pendingElements.then(function (elements) {
    elements.map(function (ele) {
      ele.getText().then(function (data) {
        console.log('1111', data);
      });
    });
  });
});

driver.quit();
//# sourceMappingURL=find.js.map
//# sourceMappingURL=find.js.map