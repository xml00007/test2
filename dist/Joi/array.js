'use strict';

let Joi = require('joi');
let de = Joi.array().items(Joi.number().integer().required());

let schema = Joi.array().items(Joi.string().required()).required();
console.log(Joi.validate([1, 2, 'k'], de).error);

let asss = [1, 2, 3].map(function (data) {
  if (data > 2) {
    return data;
  }
});

console.log(asss);
//# sourceMappingURL=array.js.map