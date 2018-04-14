"use strict";

let _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function testable(target) {
  target.isTestable = true;
}

let My = testable(_class = function My() {
  _classCallCheck(this, My);
}) || _class;

console.log(My.isTestable);

function ace(type) {
  let param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  param.forEach(function (data) {
    console.log(data);
  });
}

ace(1, [2]);

let a = [{ a: 1, b: 2 }, { c: 3, d: 4 }];
let b = JSON.stringify(a);
console.log(b[0]);
//# sourceMappingURL=test1.js.map