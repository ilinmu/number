(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.number = {}));
}(this, (function (exports) { 'use strict';

  function sum(a, b) {
    console.log("a + b = ".concat(a, " + ").concat(b));
    return a + b;
  }
  function subtraction(a, b) {
    return a - b;
  }

  exports.subtraction = subtraction;
  exports.sum = sum;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
