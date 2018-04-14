/**
 * Created by liudezhong on 2017/5/8.
 */
/**
 * 连接mysql数据库
 */
'use strict';
// import * as database from '../config/config';
const database = require('../config');
const jieaMock = require('../mock/jieaMock');
const Sequlize = require('sequelize');

// 定义两个数据库配置文件

const nirvanaMysql = database.databaseConfig.nirvanaMysql;
const jieaMysql = database.databaseConfig.jieaMysql;
const holmesMysql = database.databaseConfig.holmesMysql;

let testSeq = null;
let jieaSeq = null;

export async function dbInit() {
  if (!global.__nirvanaSeq) {
    global.__nirvanaSeq = new Sequlize(nirvanaMysql.database, nirvanaMysql.user,
      nirvanaMysql.password, nirvanaMysql.option);
  }
  if (jieaSeq === null) {
    jieaSeq = new Sequlize(jieaMysql.database, jieaMysql.user,
      jieaMysql.password, jieaMysql.option);
  }
  if (!global.__mongoSeq) {
    global.__mongoSeq = new Sequlize(nirvanaMysql.database, nirvanaMysql.user,
      nirvanaMysql.password, nirvanaMysql.option);
  }
  if (!global.__holmesSeq) {
    global.__holmesSeq = new Sequlize(holmesMysql.database, holmesMysql.user,
      holmesMysql.password, holmesMysql.option);
  }
}

export async function insertUser(table, data) {
  let result = {};
  try{
    const fileds = Object.keys(data);
    const values = fileds.map(
      (item) => JSON.stringify(data[item]));

    // console.error('values======>', JSON.stringify(values));
    const sqlStr = `insert into ${table}(${fileds.join(
      ',')}) values(${values.join(',')})`;
    // console.error('sqlStr======>', sqlStr);
    result = await jieaSeq.query(sqlStr, {type: jieaSeq.QueryTypes.INSERT});
  }catch (err) {
    console.log(err);
  }
  return result;
}

export async function insertUserNew(table, data) {
  let result = {};
  try {
    const fileds = Object.keys(data);
    const values = fileds.map(
      (item) => JSON.stringify(data[item]));

    // console.error('values======>', JSON.stringify(values));
    const sqlStr = `insert into ${table}(${fileds.join(
      ',')}) values(${values.join(',')})`;
    if (table.indexOf('risk') > -1) {
      result = await global.__holmesSeq.query(sqlStr, {type: Sequlize.QueryTypes.INSERT});
    } else {
      result = await global.__nirvanaSeq.query(sqlStr, {type: Sequlize.QueryTypes.INSERT});
    }
    console.log(result);
  } catch (err) {
    console.log(err.toString());
  }
  return result;
}


export async function deleteSql(sqlStr, database) {
  let result = {};
  try {
    console.log(sqlStr);
    if (database === 'nirvana') {
      result = await global.__nirvanaSeq.query(sqlStr, {type: Sequlize.QueryTypes.DELETE});
      console.log(result);
    }else if (database === 'jiea') {
      result = await jieaSeq.query(sqlStr, {type: jieaSeq.QueryTypes.DELETE});
    } else if (database === 'holmes') {
      result = await global.__holmesSeq.query(sqlStr, {type: Sequlize.QueryTypes.DELETE});
    }
    return result;
  }catch(err) {
    console.log(err);
    return err;
  }
}

export async function selectSql(sqlStr, database) {
  let result = {};
  try {
    console.log(sqlStr);
    if (database === 'nirvana') {
      result = await global.__nirvanaSeq.query(sqlStr, {type: Sequlize.QueryTypes.SELECT});
    }else if (database === 'jiea') {
      result = await jieaSeq.query(sqlStr, {type: jieaSeq.QueryTypes.SELECT});
    }
    result.code = 200;
  }catch(err) {
    console.log(err);
    result.code = 400;
  }
  return result;
}

export async function mongoSelectSql(sqlStr, database) {
  let result = {};
  try {
    console.log(sqlStr);
    if (database === 'nirvana') {
      result = await global.__nirvanaSeq.query(sqlStr, {type: Sequlize.QueryTypes.SELECT});
    } else if (database === 'jiea') {
      result = await jieaSeq.query(sqlStr, {type: jieaSeq.QueryTypes.SELECT});
    }
    result.code = 200;
  } catch (err) {
    console.log(err);
    result.code = 400;
  }
  return result;
}

beforeAll(() => {
  dbInit();
});

afterAll(() => {
  // 中断数据库连接
  global.__nirvanaSeq.close();
  global.__mongo.disconnect();
  jieaSeq.close();
  global.__holmesSeq.close();
  // testSeq = null;
  // jieaMysql = null;
});

