



function testable(target) {
  target.isTestable=true;
}


@testable
class My{
  constructor(){

  }
}

console.log(My.isTestable);



function ace(type,param=[]) {
  param.forEach((data)=>{
    console.log(data);
  })
}


ace(1,[2]);


var a=[{a:1,b:2},{c:3,d:4}];
var b=JSON.stringify(a);
console.log(b[0]);



