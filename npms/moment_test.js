/**
 * Created by Arthur on 2017/7/26.
 */

var moment = require('moment');
// var now = "04/11/2013 15:00:00";
// var then = "04/10/2013 14:20:30";
// const  a=moment.utc(moment(now,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss")
// console.log(a);
//
var now = moment('2017-07-30 03:17:00.752Z');
var then = moment('2017-07-22 03:18:30.752Z');


//
// var now=moment('2017-07-01 10:00:00');
// var then=moment('2017-07-02 11:00:00');
// moment.locale('zh');
console.log((now.diff(Date.now(),'hour',true)));
// console.log(moment(moment.duration(now.diff(then,'second',true))))

// const b = [1, 2];
// const c = b.slice();
// b.push(3);
// console.log(b);
// console.log(c);
//
// let d = new String('111');
// console.log(JSON.stringify(d));
//
// function testinput(re, str) {
//   var midstring;
//   if (str.search(re) != -1) {
//     midstring = ' contains ';
//   } else {
//     midstring = ' does not contain ';
//   }
//   console.log(str + midstring + re);
// }
//
// testinput('dr', 'asdasdres');
//
// var hello = 'Hello, ';
// console.log(hello.concat('Kevin', ' have a nice day.'));
// /* Hello, Kevin have a nice day. */
// console.log(hello);
//
// const m = undefined || 0;
// console.log(m);
//
// const n = {
//   a: 1,
//   b: 2,
//   c: [4, 5],
// };
// console.log(JSON.stringify(n, ['c']));
// console.log(JSON.stringify(n, function(k, v) {
//
//   console.log('k================>', k);
//   if (k !== '1') {
//     return v;
//   }
// }));
//
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(undefined));
// console.log(Number(null));
//
// console.log(1 + null);
// console.log(1 + undefined);
// console.log(1 + true);
//
// const g = 2 + {a: 1};
// console.log(g);
//
// console.log(Boolean(new Number(0)));
// if (new Number(0)) {
//   console.log('11111111111111');
// }
//
// if (Number(0)) {
//   console.log('2222222222');
// }
//
// let p = '4.9';
// console.log(typeof +p);
//
// console.log(1+ +p);
//
//
// console.log(Date.now())


console.log([1,2].toString());


let that = moment("2017-07-30T11:38:41.000Z");
let timeSpan = that.diff(Date.now(), 'hour', true);
console.log('timeSpan',timeSpan);




console.log(Date(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss SSS')))
console.log(typeof moment(Date.now()).format('YYYY-MM-DD HH:mm:ss SSS'))


