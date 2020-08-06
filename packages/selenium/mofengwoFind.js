import Model from '../sequelize';

const L = require('nirvana-logger')('data');
require('chromedriver');
const {Builder, By, Key, until, promise} = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();


async function findData() {
  const urls = await Model.moFengWo.findAll({where: {startDate: ''}, order: ['url'], limit: 100, attributes: ['url']});
  for (let url of urls) {
    let realurl = url.dataValues.url;
    try {
      L('realUrl', realurl);
      // await seleniumDriverNew(realurl);
    } catch (err) {
    }
  }
  L('done');
}


function seleniumDriver(url) {
  driver.get('http://www.mafengwo.cn' + url);
  // driver.findElement(By.id('kw')).sendKeys('美女', Key.RETURN);
  driver.sleep(1000).then(function() {
    let pendingElements = driver.findElements(By.xpath('//div[contains(@class, "tarvel_dir_list")]/ul/li'));
    pendingElements.then(function(elements) {
      elements.map(ele => {
        ele.getText().then(function(data) {
          L('11111', data);
          // return data;
        });
      });
    }).then(function(data) {
      L('data', data);
    });
  });

  driver.quit();
}

async function seleniumDriverNew(url) {
  L('realUrl', 11);
  await driver.get('http://www.mafengwo.cn' + url);
  await driver.sleep(1000);
  L('realUrl', 22);
  const aaa = await driver.findElements(By.xpath('//div[contains(@class, "tarvel_dir_list")]/ul/li'));
  L('begin');
  try {
    console.log(aaa.length);
    // L('update', await aaa[0].getText());
    let obj = {};
    if (aaa.length === 0) {
      obj.startDate = '';
      obj.outDays = '';
      obj.renWu = '';
      obj.cost = '2222';
    } else {
      obj.startDate = (await aaa[0].getText() || '').substring(5);
      obj.outDays = (await aaa[1].getText() || '').substring(5);
      obj.renWu = (await aaa[2].getText() || '').substring(3);
      obj.cost = '1111';
      if (aaa.length > 3) {
        obj.cost = (await aaa[3].getText()).substring(5);
      }
    }

    L('update', obj);
    await Model.moFengWo.update(obj, {where: {url}});
  } catch (err) {
    console.log(err);
  }

  driver.quit();
}


findData();
