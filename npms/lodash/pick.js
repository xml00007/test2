const _ = require('lodash');
const userData = {
  a: '2',
  b: '1',
  c: '',
};
const aaa = _.pickBy(_.pick(userData, ['a', 'b', 'c']), _.isString);
console.log(aaa);