"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _foo = require("foo");

Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return babelHelpers.interopRequireDefault(_foo).default;
  }
});
module.exports = exports['default'];