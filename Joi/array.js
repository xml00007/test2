const Joi = require('joi');
const de = Joi.array().items(Joi.number().integer().required());

const schema = Joi.array().items(Joi.string().required()).required();
console.log(Joi.validate([1, 2, 'k'], de).error);

const asss = [1, 2, 3].map(function(data) {
  if (data > 2) {
    return data;
  }
});

console.log(asss);