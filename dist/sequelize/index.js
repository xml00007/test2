'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dbConnect = require('./dbConnect');

var _dbConnect2 = _interopRequireDefault(_dbConnect);

var _config = require('./config');

var config = _interopRequireWildcard(_config);

var _Models = require('./Models');

var _Models2 = _interopRequireDefault(_Models);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dbConnect2.default)(null, config.databaseConfig).then(function (data) {
  console.log('链接成功', data);
  // Model.linuxDoc.create({
  //   title: '信明良',
  // });
}).catch(function (err) {
  console.log(22222, err);
});
exports.default = _Models2.default;
//# sourceMappingURL=index.js.map