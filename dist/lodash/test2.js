'use strict';

var _ = require('lodash');

var data = _.zipObjectDeep(['a.b[0].c', 'a.b[3].d'], [1, 2]);
console.log(JSON.stringify(data));
// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }

_.zipWith([1, 2], [10, 20], [100, 200], [1000, 2000], function (a, b, c, d) {
  console.log(a, b, c, d);
  return a + b + c;
});

console.log('------------------------------------------------------------');
_.every([true, 1, null, 'yes'], Boolean);
// => false

var users = [{ 'user': 'barney', 'age': 40, 'active': false }, { 'user': 'fred', 'age': 40, 'active': false }];

// The `_.matches` iteratee shorthand.
_.every(users, { 'user': 'barney', 'active': false });
// => false

// The `_.matchesProperty` iteratee shorthand.
console.log(_.every(users, ['active', false]));
console.log(_.every(users, { 'active': false, age: 40, user: 'fred' }));
// => true

// The `_.property` iteratee shorthand.
_.every(users, 'active');
// => false
//# sourceMappingURL=test2.js.map