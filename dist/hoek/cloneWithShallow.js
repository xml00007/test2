'use strict';

var Hoek = require('hoek');

var nestedObj = {
  w: /^something$/ig,
  x: {
    a: [1, 2, 3],
    b: 123456,
    c: new Date()
  },
  y: 'y',
  z: new Date()
};

var copy = Hoek.cloneWithShallow(nestedObj, ['x']);

copy.x.b = 100;

console.log(copy.y); // results in 'y'
console.log(nestedObj.x.b); // results in 100
console.log(copy.x.b); // results in 100
//# sourceMappingURL=cloneWithShallow.js.map