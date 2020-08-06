let a = {
  b: 2,
  c: 3,
  d: {
    e: 5,
    f: 6,
    g:{
      h:[1,2,3],
      i:3,
      k:[{
        l:9,m:10
      },{
        l:9,m:11
      }]
    }
  },
};


const _=require('lodash');

console.log(_.toPairsIn(a));