'use strict';

/**
 * Created by Arthur on 2017/5/15.
 */

// let a =require('./kk');
// import {CC} from './kk';
//
// CC.setConfig();

// String name = new String(param.getRealName().getBytes("iso8859-1"), "utf-8");

// const Buffer = require('buffer');
// const buf = Buffer.from('zażółć gęślą jaźń', 'binary');
//
// console.log(buf);
// // 输出 68656c6c6f20776f726c64
// console.log(buf.toString('utf-8'));

var Iconv = require('iconv').Iconv;
// let assert = require('assert');
//
// let iconv = new Iconv('ISO-8859-1', 'UTF-8');
// let buffer = iconv.convert(
//     'å²³å¥').
//     toString('utf-8');
// let iconv = new Iconv('UTF-8', 'ISO-8859-1');
// let buffer = iconv.encode('æ¨ä¸æ¥', 'iso-8859-1');
// let data = iconv.decode(buffer, 'utf8');

// // console.log(data);
//
// let iconv = require('iconv-lite');
// let output = iconv.decode(input, "ISO-8859-1");
// let buffer = iconv.encode(data, "iso-8859-1");
// data = iconv.decode(buffer, 'utf8');
// console.log(data)
//
// let Iconv = require('iconv').Iconv;
// let tempBuffer = new Buffer('æ¨ä¸æ¥');
// console.log(tempBuffer);
// let iconv = new Iconv('ISO-8859-1', 'utf8');
// let data = iconv.convert(tempBuffer).toString();
// console.log(data);
//
var tempBuffer = new Buffer('å²³å¥');
console.log(tempBuffer);
var iconv = require('iconv-lite');
var output = iconv.decode('\xE6\x9C\xB1\xE6\xB5\xB7\xE8\xA5\xBF', 'utf-8');
console.log(output);

var L = require('nirvana-logger')('11111');
L('å²³å¥');
//# sourceMappingURL=b.js.map