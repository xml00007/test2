'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _exportToExcel = require('./exportToExcel');

Object.keys(_exportToExcel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _exportToExcel[key];
    }
  });
});
//# sourceMappingURL=index.js.map