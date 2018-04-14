'use strict';

var assert = require('assert');

var obj1 = {
  a: {
    b: 1
  }
};
var obj2 = {
  a: {
    b: 2
  }
};
var obj3 = {
  a: {
    b: 1
  }
};
var obj4 = Object.create(obj1);

assert.deepEqual(obj1, obj1);
// 测试通过，对象与自身相等。

var a = assert.deepEqual(obj1, obj2);
// 抛出 AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }
// 因为 b 属性的值不同。
console.log('1111', a);

assert.deepEqual(obj1, obj3);
// 测试通过，两个对象相等。

assert.deepEqual(obj1, obj4);
// 抛出 AssertionError: { a: { b: 1 } } deepEqual {}
// 因为不测试原型。
//# sourceMappingURL=assert.js.map