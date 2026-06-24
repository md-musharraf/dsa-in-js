const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter a number: "));

// print "Hello, World!" n times
// for (let i = 1; i <= n; i++) {
//   console.log(`Hello, World! ${i}`);
// }

// print numbers from 1 to n
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

// print numbers from n to 1
// for (let i = n; i >= 1; i--) {
//   console.log(i);
// }

// print the table of a n number
// for (let i = 1; i <= 10; i++) {
//   console.log(`${n} x ${i} = ${n * i}`);
// }

// print the sum of numbers from 1 to n
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(`The sum of numbers from 1 to ${n} is: ${sum}`);

// print the factorial of a number n
// let factorial = 1;
// for (let i = 1; i <= n; i++) {
//   factorial *= i;
// }
// console.log(`The factorial of ${n} is: ${factorial}`);

// print the sum of odd and even numbers from 1 to n
// let oddSum = 0;
// let evenSum = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     evenSum += i;
//   } else {
//     oddSum += i;
//   }
// }
// console.log(`The sum of odd numbers from 1 to ${n} is: ${oddSum}`);
// console.log(`The sum of even numbers from 1 to ${n} is: ${evenSum}`);

// print factors of n number
// let factors = [1];
// for (let i = 2; i <= n / 2; i++) {
//   if (n % i === 0) {
//     factors.push(i);
//   }
// }
// if (n !== 1) {
//   factors.push(n);
// }
// console.log(factors);

// check n is a prime number or not
// let isPrime = true;
// if (n < 2) {
//   isPrime = false;
// } else {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }
// isPrime ? console.log(`${n} is a prime number`) : console.log(`${n} is a not a prime number`);


