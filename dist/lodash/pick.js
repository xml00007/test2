'use strict';

var _ = require('lodash');
var userData = {
  a: '2',
  b: '1',
  c: ''
};
var aaa = _.pickBy(_.pick(userData, ['a', 'b', 'c']), _.isString);
console.log(aaa);
//# sourceMappingURL=pick.js.map