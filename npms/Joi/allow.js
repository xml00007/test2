const Joi = require('joi');
const schema = {
  a: Joi.any().allow('a'),
  b: Joi.string().valid('b', 'B'),
  c: Joi.any().allow(['c', 'C'])
};
const {error, value} = Joi.validate({b: 'B'}, schema);
console.log(error);
console.log(value);