let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);

if (b-45 >= 0) {
  console.log(a+" "+(b-45))
} else {
  a === 0 ? console.log("23 "+(b+15)) : console.log((a-1)+" "+(b+15))
}
  