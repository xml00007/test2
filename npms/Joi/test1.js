// const joi = require('joi');
// const schema = {
//   a: joi.string().empty(''),
// };
// const {error, value} = joi.validate({a: ''}, schema);
// console.log(error);
// console.log(value);


const joi = require('joi');
const schema = {
  a: joi.string().required(),
};
const {error, value} = joi.validate({a: ''}, schema);
console.log(error);
console.log(value);