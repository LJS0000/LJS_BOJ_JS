let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

const num = Math.max(...input)
const index =  input.indexOf(num) + 1

console.log(num)
console.log(index)