const _ = require('lodash');

const a = {
  b: {
    c: 4,
  },
  d: {
    e: 5,
    f: 6,
  },
};

console.log(_.filter(a, _.matches({e: 5, f: 6})));

const sss = _.times(10, function() {
  return 1;
});
console.log(sss);

console.log(_.toPath('a[0].bsda.c[4]'));

console.log(_.uniqueId('123123123'));
console.log(_.uniqueId('123123124'));
console.log(_.uniqueId('123123125'));
console.log(_.uniqueId('123123126'));
console.log(_.uniqueId('123123127'));

console.log('------------------------------------------------------');
let objects = [
  {'a': {'b': 2, 'c': {'d': 4}}},
  {'a': {'b': 1}},
];

// _.map(objects, _.property('a.b'));
// // => [2, 1]
// console.log(_.map(objects, _.property('a.b')));

_.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');

console.log(_.sortBy(objects, _.property(['a', 'b', 'c'])));

console.log('------------------------------------------------------');
// let elements = _.attempt(function(selector) {
//   return selector1;
// }, 'ds');
// console.log('elements', elements);
// if (_.isError(elements)) {
//   console.log('elements', elements);
// }

console.log('--------------------------------------------------------');
console.log(_.intersectionBy([2.1, 1.8], [4.3, 1.1], Math.ceil));
// => [2.1]

// 使用了 `_.property` 的回调结果
console.log(_.intersectionBy([{'x': 1}], [{'x': 2}, {'x': 1}], 'x'));
// => [{ 'x': 1 }]

console.log(Math.round(2.1));

const m = [1, 2, 3, 4];
const n = _.slice(m, 2);
console.log(n);
console.log(m);

console.log('------------------------------------------------------');
let users = [
  {'user': 'barney', 'active': false},
  {'user': 'fred', 'active': false},
  {'user': 'pebbles', 'active': true},
];

// console.log(_.takeWhile(users, function(o) { return !o.active; }));
// => objects for ['barney', 'fred']

// The `_.matches` iteratee shorthand.
console.log(_.takeWhile(users, {'active': false}));
// => objects for ['barney']

let users1 = [
  {'user': 'barney', 'age': 36, 'active': true, 'data': {'a': 1, 'b': 2}},
  {'user': 'fred', 'age': 40, 'active': false, 'data': {'a': 1, 'b': 3}},
];

console.log(_.filter(users1, _.matches({'a': 1})));
console.log(_.filter(users1, _.matches({'data': {'a': 1, 'b': 3}})));
// => [{ 'user': 'fred', 'age': 40, 'active': false }]