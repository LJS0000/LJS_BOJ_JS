let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const a = parseInt(input[0])
const b = parseInt(input[1])

let num1 = b%10 
let num2 = (Math.floor(b/10))%10 
let num3 = (Math.floor(b/100))%10

console.log(a*num1)
console.log(a*num2)
console.log(a*num3)
console.log(a*b)