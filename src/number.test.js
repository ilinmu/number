"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var number_1 = require("./number");
test('adds 1 + 2 equal 3', function () {
    expect(number_1.sum(1, 2)).toBe(3);
});
test('subtraction 3 - 2 equal 1', function () {
    expect(number_1.subtraction(3, 2)).toBe(1);
});
