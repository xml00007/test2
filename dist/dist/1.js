"use strict";

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
    var _a = 1;
  }
  console.log(a);
  return a;
}

// const c = asc();
// console.log(c);


function f(condition, x) {
  if (condition) {
    var _x = 100;
    return _x;
  }

  return x;
}

console.log(f(false, 0)); // returns 0
console.log(f(true, 0));; // returns 100


// for (let i = 0; i < 10 ; i++) {
//   setTimeout(function() {console.log(i); }, 100 * i);
// }


function go(na) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator2 = na.a[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator2.next()).done); _iteratorNormalCompletion = true) {
      var n = _step.value;
      // TypeError: n is undefined
      console.log(n);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

go({ a: [1, 2, 3] });
//# sourceMappingURL=1.js.map
//# sourceMappingURL=1.js.map