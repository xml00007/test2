'use strict';

var _ = require('lodash');
var objects = [{ 'a': 1, 'b': 2, 'c': 3, 'd': { e: 5 } }, { 'a': 4, 'b': 5, 'c': 6 }];

//
// console.log(Object.prototype.toString.call({e:5}));
// console.log(_.filter(objects, _.matches({e: 5})));

console.log('-----------------------------------------------------------------');
var assert = require('assert');

// let objectToMatch = {a: {b: 2}};
//
// let falseMatches = [
//   _.isMatch(objectToMatch, {a: {d: null}}),
//   _.matchesProperty('a', null)(objectToMatch),
//   _.matchesProperty('a', [])(objectToMatch),
//   _.matches({b: null})(objectToMatch),
// ];
//
// assert.deepEqual(falseMatches, [false, false, false, false]);
//
// let trueMatches = [
//   _.isMatch(objectToMatch, {a: {}}),
//   _.matchesProperty('a', {})(objectToMatch),
//   _.matches(undefined)(objectToMatch),
//   _.matches({})(objectToMatch),
// ];
//
// assert.deepEqual(trueMatches, [true, true, true, true]);

console.log('----------------------------------------------------');

var users = [{ 'user': 'barney' }, { 'user': 'fred' }];

// The `_.property` iteratee shorthand.
console.log(_.matches({ user: 'barney' })(users[1]));
console.log(_.property('user')({ 'user': 'barney' }));
console.log(_.map(users, 'user'));
// => ['barney', 'fred']

console.log(_.filter(objects, { 'a': 4, 'c': 6 }));

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++');
var objectss = [{ 'a': 4, 'b': 4, 'c': 3 }, { 'a': [1, 2, 3], 'b': 4, 'c': 6 }];

console.log(_.find(objectss, ['a', 4]));
console.log(_.find(objectss, _.matchesProperty('a[2]', 3)));
console.log(_.find(objectss, _.matchesProperty(['a', '2'], 3)));

// => { 'a': 4, 'b': 5, 'c': 6 }


function abd() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  console.log(args);
  console.log(_.nthArg(1).apply(undefined, args));
}

abd(1, 2, 3, 4);
//# sourceMappingURL=mathches.js.map