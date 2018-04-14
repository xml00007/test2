'use strict';

// const joi = require('joi');
// const schema = {
//   a: joi.string().empty(''),
// };
// const {error, value} = joi.validate({a: ''}, schema);
// console.log(error);
// console.log(value);


var joi = require('joi');
var schema = {
    a: joi.string().required()
};

var _joi$validate = joi.validate({ a: '' }, schema),
    error = _joi$validate.error,
    value = _joi$validate.value;

console.log(error);
console.log(value);
//# sourceMappingURL=test1.js.map
//# sourceMappingURL=test1.js.map