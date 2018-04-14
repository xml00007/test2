"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Arthur on 2017/5/14.
 */

var A = function () {
  function A(a) {
    _classCallCheck(this, A);

    this.a = a;
  }

  _createClass(A, [{
    key: "setConfig",
    value: function setConfig() {
      console.log(this.a);
    }
  }]);

  return A;
}();

var CC = exports.CC = new A(2);
// exports.a=CC;
//# sourceMappingURL=kk.js.map