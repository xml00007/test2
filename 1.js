/**
 * Created by Arthur on 2017/5/14.
 */

//
// let a=1;
// console.log(a)
// const [c,d]=[2,3];
// console.log(c);
// let d=2;

function asc(data) {
  if (data) {
    let a = 1;
  }
  console.log(a);
  return a;
}

// const c = asc();
// console.log(c);


function f(condition, x) {
  if (condition) {
    let x = 100;
    return x;
  }

  return x;
}

console.log(f(false, 0)); // returns 0
console.log(f(true, 0));;  // returns 100


//
// for (var i = 0; i < 10 ; i++) {
//   setTimeout(function() {console.log(i); }, 100 * i);
// }



function go(na,b){
  let b=[11111,111];
  for (let n of na.a) { // TypeError: n is undefined
    console.log(n);
  }
}

go({a:[1,2,3]});