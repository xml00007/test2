require('chromedriver');
const {Builder, By, Key, until, promise} = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();

driver.get('http://www.baidu.com');
driver.findElement(By.id('kw')).sendKeys('美女', Key.RETURN);
driver.sleep(2000).then(function() {
  let pendingElements = driver.findElements(By.xpath('//div[contains(@class, "result")]/h3/a'));
  pendingElements.then(function(elements) {
    elements.map(ele => {
      ele.getText().then(function(data) {
        console.log('1111', data);
      });
    });
  });
});

driver.quit();