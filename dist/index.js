"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Myapp = require("./Component/Myapp");

Object.keys(_Myapp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Myapp[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Myapp[key];
    }
  });
});