const prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number :- "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }
// output -
// *
// * *
// * * *
// * * * *
// * * * * *

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(`${j} `);
//   }
//   console.log();
// }
// output:-
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(64 + j) + " ");
//   }
//   console.log();
// }
// output -
// A
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F
// A B C D E F G
