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
