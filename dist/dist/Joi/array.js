'use strict';

var Joi = require('joi');
var de = Joi.array().items(Joi.number().integer().required());

var schema = Joi.array().items(Joi.string().required()).required();
console.log(Joi.validate([1, 2, 'k'], de).error);

var asss = [1, 2, 3].map(function (data) {
  if (data > 2) {
    return data;
  }
});

console.log(asss);
//# sourceMappingURL=array.js.map
//# sourceMappingURL=array.js.map