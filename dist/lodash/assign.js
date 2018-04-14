'use strict';

var _ = require('lodash');

function Foo() {
  this.a = 1;
}

function Bar() {
  this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

// console.log(_.assignIn({'a': 0}, new Foo, new Bar));
// => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }

var a = {
  b: 2, c: 3, d: {
    e: 4,
    f: 2,
    t: 9
  }
};
var b = {
  b: 1, c: 3, d: {
    e: 5,
    f: 6
  },
  __proto__: {
    l: 7
  }
};

var m = Object.assign({}, a, b);
var n = _.assignIn({}, a, b);
console.log(m);
// console.log(n);
// console.log(_.assign({}, a, b));
// console.log(_.assignIn({}, a, b));
//# sourceMappingURL=assign.js.map