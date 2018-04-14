'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _Model = require('./mysql/Model');

var _Model2 = _interopRequireDefault(_Model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var smartRequire = function smartRequire(modelPath) {
    var _oldPath = _path2.default.join(__dirname, modelPath);
    var _mockPath = _path2.default.join(__dirname, modelPath.replace('mysql', 'mysql/__mock__'));
    try {
        if (process.env.UNIT_TEST) return require(_mockPath);
    } catch (err) {}
    return require(_oldPath);
};
exports.default = {
    // mysql
    linuxDoc: new _Model2.default(smartRequire('./mysql/linuxDoc')),
    user: new _Model2.default(smartRequire('./mysql/user')),
    moFengWo: new _Model2.default(smartRequire('./mysql/moFengWo')),
    errorLog: new _Model2.default(smartRequire('./mysql/errorLog'))
};
//# sourceMappingURL=index.js.map