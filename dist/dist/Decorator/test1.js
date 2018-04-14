"use strict";

var _class = void 0;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function testable(target) {
  target.isTestable = true;
}

var My = testable(_class = function My() {
  _classCallCheck(this, My);
}) || _class;

console.log(My.isTestable);

function ace(type) {
  var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  param.forEach(function (data) {
    console.log(data);
  });
}

ace(1, [2]);

var a = [{ a: 1, b: 2 }, { c: 3, d: 4 }];
var b = JSON.stringify(a);
console.log(b[0]);
//# sourceMappingURL=test1.js.map
//# sourceMappingURL=test1.js.map