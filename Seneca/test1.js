var seneca=require('seneca')();
// seneca.add({role:'math',cmd:'sum'},function(msg,res) {
//   var sum=msg.left+msg.right;
//   res(null,{answer:sum});
// });
// seneca.add({role:'math',cmd:'product'},function(msg,res) {
//   var product =msg.left*msg.right;
//   res(null,{answer:product});
// });
//
// seneca.act({role:'math',cmd:'product',left:12,right:3},function(err, data) {
//     console.log(data);
// });


function init1(msg,next) {
  console.log('begin');
  next();
}

function math(option) {
  console.log(option);
  this.add({role:'math',cmd:'sum'},function(msg, next ) {
    console.log(1);
    next(msg);
  });
  this.add({init:"math",init1});
}
seneca.use(math).act('role:math,cmd:sum,left:1',console.log);