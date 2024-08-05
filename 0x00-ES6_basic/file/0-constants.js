"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLast = getLast;
exports.taskFirst = taskFirst;
exports.taskNext = taskNext;
function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}
function getLast() {
  return ' is okay';
}
function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();
  return combination;
}