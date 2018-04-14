'use strict';

// 日期格式转换
var typeCast = function typeCast(field, next) {
  if (!global.__mysql_datetime_no_need_cast && field.type === 'DATETIME') {
    return field.string();
  }
  return next();
};

var databaseConfig = {
  mongodb: {
    hosts: ['10.10.199.59'],
    database: 'nirvana-node',
    user: 'admin',
    pass: 'puhui',
    opts: {
      // useMongoClient: true, // 由于开发环境的mongodb版本太低，useMongoClient 选项需关闭
      authSource: 'admin'
    }
  },
  mysql: {
    database: 'test',
    user: 'root',
    password: '123456',
    option: {
      dialectOptions: {
        // 时间类型 以字符串型式返回 "2017-09-13T00:00:00Z" 转换为 "2017-09-13 00:00:00"
        typeCast: typeCast
      },
      host: '127.0.0.1',
      dialect: 'mysql',
      timezone: '+08:00', // 时区 香港 北京
      // mysql连接池配置
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
      define: {
        timestamps: false // 不自动添加 updateAt 和 createdAt
      }
    }
  },
  jieaMySql: {
    host: '10.10.229.152',
    user: 'jiea_readonly',
    password: 'jiea',
    database: 'jiea_center_openline'
  }
};

var Sequelize = require('sequelize');
var _mysql = databaseConfig.mysql;

var seq = global.__seq = new Sequelize('127.0.0.1', 'root', '123456', _mysql.option);
//# sourceMappingURL=dbconnect.js.map