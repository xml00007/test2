/**
 * Created by Arthur on 2017/5/17.
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ModelName = 'channel_relation_info';
var _mongodb = require('../config').databaseConfig.mongodb;
var _Schema = new Schema({
  userId: Number, // Nirvana用户注册时生成的ID
  requestId: String, // 交互时的请求 id
  idCardNum: String, // 身份证
  createdTime: Date, // 创建日期 2016-12-07 00:00:00
  channel: String // 渠道号
});
beforeAll(function () {
  if (!global._mongo) {
    var uri = 'mongodb://' + _mongodb.username + ':' + _mongodb.password + '@' + _mongodb.host + '/' + _mongodb.database;
    var opt = { auth: { authdb: 'admin' } };
    global.__mongo = mongoose.connect(uri, opt);
  }
});

afterAll(function () {
  global.__mongo.disconnect();
});

// const uri = `mongodb://${_mongodb.username}:${_mongodb.password}@${_mongodb.host}/${_mongodb.database}`;
// const opt = {auth: {authdb: 'admin'}};
// global.__mongo = mongoose.connect(uri, opt);
module.exports = mongoose.model(ModelName, _Schema, ModelName);
//# sourceMappingURL=channel_relation_info.js.map