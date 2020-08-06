'use strict';
const Sequelize = require('sequelize');
const Mongoose = require('mongoose');
const L = console.log;
const chalk = require('chalk');
const querystring = require('querystring');

Mongoose.Promise = require('bluebird');

module.exports.default = module.exports = function dbConnect(server, config) {
  if (!config || !config.mongodb) {
    return Promise.reject(
        new Error('dbConnect: nirvana-sdk-config.mongodb is required'));
  }
  if (!config || !config.mysql) {
    return Promise.reject(
        new Error('dbConnect: nirvana-sdk-config.mysql is required'));
  }

  const _mongodb = config.mongodb;
  const _mysql = config.mysql;
  const seq = global.__seq = new Sequelize(_mysql.database, _mysql.user,
      _mysql.password, _mysql.option);

  // 如果存在全局选项 __mongodb_no_need_connect ， 则不连接mongo
  if (!global.__mongodb_no_need_connect) {
    const hosts = _mongodb.hosts.join(',');
    const {database, user, pass, opts} = _mongodb;
    const optUri = opts.useMongoClient ? '' : '?' + querystring.stringify(opts);
    const uri = `mongodb://${user}:${pass}@${hosts}/${database}${optUri}`;

    // L('正在连接 Mongodb ...');
    // Mongoose.connect(uri, _mongodb.opts).then((res) => {
    //   L('MONGODB => 连接成功');
    // }).catch(err => {
    //   L(chalk.red('MONGODB => 连接失败'), uri, _mongodb.opts, err);
    // });
  }

  return new Promise((resolve, reject) => {
    try {
      // 需要授权连接方法 参考：
      // http://stackoverflow.com/questions/30105823/mongoerror-auth-failed-mongoose-connection-sting

      // const uri = `mongodb://${_mongodb.username}:${_mongodb.password}@${_mongodb.host}/${_mongodb.database}`;
      // global.__mongo = Mongoose.connect(uri);

      // 数据库连接较验
      seq.authenticate().then((res) => {
        L('MYSQL => 连接成功');
        resolve(res);
      }).catch((err) => {
        L('MYSQL => 连接失败');
        reject(new Error('数据库接接失败 ' + err.message));
      });
    } catch (err) {
      reject(new Error('数据库接接失败 ' + err.message));
    }
  });
};
