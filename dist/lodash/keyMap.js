'use strict';

var _ = require('lodash');
var array = [{ 'dir': 'left', 'code': 97 }, { 'dir': 'right', 'code': 100 }];

var arrobj = {
  a: { d: 1 }, b: { d: 2 }, c: { d: 'm' }
};

console.log(_.keyBy(array, function (o) {
  return String.fromCharCode(o.code);
}));
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }

console.log(_.keyBy(array, 'dir'));
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }

// console.log(_.keyBy(arrobj, function(o) {
//   console.log(o);
//   return 'cc';
// }));

console.log(_.keyBy(arrobj, 'd'));
//# sourceMappingURL=keyMap.js.map