"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral([""], [""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Arthur on 2017/6/25.
 */

// export default function() {
//   return {b:2}
// }

var OpenApi = function () {
  function OpenApi(a) {
    _classCallCheck(this, OpenApi);

    this.a = a(_templateObject);
  }

  _createClass(OpenApi, [{
    key: "init",
    value: function init() {
      console.log(this.a);
    }
  }, {
    key: "add",
    value: function add(b) {
      console.log(this.a + b);
    }
  }]);

  return OpenApi;
}();

var openapi = new OpenApi(2);
openapi.init();
exports.default = openapi;
//# sourceMappingURL=t1.js.map