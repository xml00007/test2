'use strict';

let Joi = require('joi');
let schema = {
  a: Joi.any().allow('a'),
  b: Joi.string().valid('b', 'B'),
  c: Joi.any().allow(['c', 'C'])
};

let _Joi$validate = Joi.validate({ b: 'B' }, schema),
    error = _Joi$validate.error,
    value = _Joi$validate.value;

console.log(error);
console.log(value);
//# sourceMappingURL=allow.js.map