"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSumOfHoods;
function getSumOfHoods(initialNumber) {
  var expansion1989 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 89;
  var expansion2019 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 19;
  return initialNumber + expansion1989 + expansion2019;
}