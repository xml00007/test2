'use strict';

let Joi = require('joi');
// const schema = Joi.object().keys({
//   c: Joi.string().required(),
//   a: Joi.any(),
//   b: Joi.any(),
// }).or('a', 'b');
//
// const mm = Joi.validate({a: 1, b: 2}, schema);
// console.log(mm.error);

let schema = Joi.object().keys({
  a: Joi.string().required(),
  b: Joi.string(),
  c: Joi.string()
}).or('b', 'c');
let mm = Joi.validate({ a: '1', b: '11', c: '' }, schema);
console.log(mm.error);
//# sourceMappingURL=or.js.map