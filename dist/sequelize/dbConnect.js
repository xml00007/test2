'use strict';

var Sequelize = require('sequelize');
var Mongoose = require('mongoose');
var L = console.log;
var chalk = require('chalk');
var querystring = require('querystring');

Mongoose.Promise = require('bluebird');

module.exports.default = module.exports = function dbConnect(server, config) {
  if (!config || !config.mongodb) {
    return Promise.reject(new Error('dbConnect: nirvana-sdk-config.mongodb is required'));
  }
  if (!config || !config.mysql) {
    return Promise.reject(new Error('dbConnect: nirvana-sdk-config.mysql is required'));
  }

  var _mongodb = config.mongodb;
  var _mysql = config.mysql;
  var seq = global.__seq = new Sequelize(_mysql.database, _mysql.user, _mysql.password, _mysql.option);

  // 如果存在全局选项 __mongodb_no_need_connect ， 则不连接mongo
  if (!global.__mongodb_no_need_connect) {
    var hosts = _mongodb.hosts.join(',');
    var database = _mongodb.database,
        user = _mongodb.user,
        pass = _mongodb.pass,
        opts = _mongodb.opts;

    var optUri = opts.useMongoClient ? '' : '?' + querystring.stringify(opts);
    var uri = 'mongodb://' + user + ':' + pass + '@' + hosts + '/' + database + optUri;

    // L('正在连接 Mongodb ...');
    // Mongoose.connect(uri, _mongodb.opts).then((res) => {
    //   L('MONGODB => 连接成功');
    // }).catch(err => {
    //   L(chalk.red('MONGODB => 连接失败'), uri, _mongodb.opts, err);
    // });
  }

  return new Promise(function (resolve, reject) {
    try {
      // 需要授权连接方法 参考：
      // http://stackoverflow.com/questions/30105823/mongoerror-auth-failed-mongoose-connection-sting

      // const uri = `mongodb://${_mongodb.username}:${_mongodb.password}@${_mongodb.host}/${_mongodb.database}`;
      // global.__mongo = Mongoose.connect(uri);

      // 数据库连接较验
      seq.authenticate().then(function (res) {
        L('MYSQL => 连接成功');
        resolve(res);
      }).catch(function (err) {
        L('MYSQL => 连接失败');
        reject(new Error('数据库接接失败 ' + err.message));
      });
    } catch (err) {
      reject(new Error('数据库接接失败 ' + err.message));
    }
  });
};
//# sourceMappingURL=dbConnect.js.map