'use strict';

var _sequelize = require('../sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var L = require('nirvana-logger')('data');
require('chromedriver');

var _require = require('selenium-webdriver'),
    Builder = _require.Builder,
    By = _require.By,
    Key = _require.Key,
    until = _require.until,
    promise = _require.promise;

var driver = new Builder().forBrowser('chrome').build();

async function findData() {
  var urls = await _sequelize2.default.moFengWo.findAll({ where: { startDate: '' }, order: ['url'], limit: 100, attributes: ['url'] });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = urls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var url = _step.value;

      var realurl = url.dataValues.url;
      try {
        L('realUrl', realurl);
        // await seleniumDriverNew(realurl);
      } catch (err) {}
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  L('done');
}

function seleniumDriver(url) {
  driver.get('http://www.mafengwo.cn' + url);
  // driver.findElement(By.id('kw')).sendKeys('美女', Key.RETURN);
  driver.sleep(1000).then(function () {
    var pendingElements = driver.findElements(By.xpath('//div[contains(@class, "tarvel_dir_list")]/ul/li'));
    pendingElements.then(function (elements) {
      elements.map(function (ele) {
        ele.getText().then(function (data) {
          L('11111', data);
          // return data;
        });
      });
    }).then(function (data) {
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
  var aaa = await driver.findElements(By.xpath('//div[contains(@class, "tarvel_dir_list")]/ul/li'));
  L('begin');
  try {
    console.log(aaa.length);
    // L('update', await aaa[0].getText());
    var obj = {};
    if (aaa.length === 0) {
      obj.startDate = '';
      obj.outDays = '';
      obj.renWu = '';
      obj.cost = '2222';
    } else {
      obj.startDate = ((await aaa[0].getText()) || '').substring(5);
      obj.outDays = ((await aaa[1].getText()) || '').substring(5);
      obj.renWu = ((await aaa[2].getText()) || '').substring(3);
      obj.cost = '1111';
      if (aaa.length > 3) {
        obj.cost = (await aaa[3].getText()).substring(5);
      }
    }

    L('update', obj);
    await _sequelize2.default.moFengWo.update(obj, { where: { url: url } });
  } catch (err) {
    console.log(err);
  }

  driver.quit();
}

findData();
//# sourceMappingURL=mofengwoFind.js.map