#!/usr/bin/node
function add (a, b) {
  return a + b;
}
const args = process.argv.slice(2);
const arg1 = parseInt(args[0]);
const arg2 = parseInt(args[1]);
console.log(add(arg1, arg2));
