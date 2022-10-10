let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
var a = parseInt(input[0]);
var b = input[1].split(" ");

let answer = 0;
let y = 0;
let m = 0;

for(let i=0; i<a; i++) {
  let Ycost = Math.floor(b[i]/30) + 1
  let Mcost = Math.floor(b[i]/60) + 1
  y = y+ 10*Ycost
  m = m+ 15*Mcost
}

if ( y < m ) {
  answer = "Y " + y
} else if ( y === m ) {
  answer = "Y M " + y
} else {
  answer = "M " + m
}

console.log(answer)