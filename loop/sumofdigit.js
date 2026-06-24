// while loop

// print n number's sum of digit
const prompt = require("prompt-sync")();
let n = prompt("Enter a Number - ");
let digit = 0;
while (n > 0) {
  let temp = n % 10;
  digit = digit + temp;
  n = Math.floor(n / 10);
}
console.log(digit);

// print reverse of n number

// while(n>0){
//     let temp = 1
// }
