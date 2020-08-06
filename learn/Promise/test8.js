var p = {
  then: function(resolve, rejected) {
    throw  new Error('ddd');
  },
};

Promise.resolve(p).then(function(data) {
  console.log(data);
}).catch(function(err) {
  console.log('11111111');
  console.log(err);

});

let o = new Promise(function() {
  throw new Error('kkkk');
});

Promise.resolve(o).then(function(data) {
  console.log(data);
}).catch(function(err) {
  console.log('2222');
  console.log(err);

});