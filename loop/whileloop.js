// while loop
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a Number - "));

// print n number's sum of digit
// let digit = 0;
// while (n > 0) {
//   let temp = n % 10;
//   digit = digit + temp;
//   n = Math.floor(n / 10);
// }
// console.log(digit);

// print reverse of n number
// let reverse = 0;
// while (n > 0) {
//   let temp = n % 10;
//   reverse = reverse * 10 + temp;
//   n = Math.floor(n / 10);
// }
// console.log(`the reverse number of your number is ${reverse}`);

// strong number
// let strong = 0;
// let num = n;
// while (num > 0) {
//   let temp = num % 10;
//   let temp_mlt = 1;
//   for (let i = 1; i <= temp; i++) {
//     temp_mlt = temp_mlt * i;
//   }
//   strong = strong + temp_mlt;

//   num = Math.floor(num / 10);
// }
// console.log(num, n, strong);

// if (strong == n) {
//   console.log(`${n} is a strong number`);
// } else {
//   console.log(`${n} is not a strong number`);
// }

// automorphic number
// let digits = n.toString().length;
// let mod = Math.pow(10, digits);
// let square = n * n;
// let ans = square % mod;

// console.log(digits, mod, square, ans, n);

// if (ans === n) {
//   console.log("authomorphic number");
// } else {
//   console.log("not a authomorphic number");
// }


