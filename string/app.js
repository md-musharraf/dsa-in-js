// let str = "hello";
// let revStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   revStr = revStr + str[i];
// }
// console.log(revStr);

// is palidrome or not
// let str = "madammam";
// let palindrome = true;
// for (let i = 0; i < Math.floor(str.length / 2); i++) {
//   if (str[i] !== str[str.length - 1 - i]) {
//     palindrome = false;
//     break;
//   }
// }
// if (palindrome) {
//   console.log("This is a palindrome string");
// } else {
//   console.log("This is not a palindrome string");
// }

// Count vowels in the word
// let str = "musharraf";
// let vowels = "aieou";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   for (let j = 0; j < vowels.length; j++) {
//     if (str[i] === vowels[j]) {
//       console.log(str[i]);
//       count = count + 1;
//     }
//   }
// }
// console.log(count);

// // find how may type of character in a word
// let str = "musharraf";
// let char = { m: 1, u: 1, s: 1, h: 1, a: 2, r: 2, f: 1 };
// for (let i = 0; i < str.length; i++) {
//   if (char[str[i]]) {
//     char[str[i]] += 1;
//   } else {
//     char[str[i]] = 1;
//   }
// }
// console.log(char);

// // Count Uppercase Letters
// let str = "MuhsArrAF";
// let uppercase = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === str[i].toUpperCase()) {
//     console.log(str[i]);
//     uppercase += 1;
//   }
// }
// console.log(uppercase);

// // find the digit in this word
// let str = "abc123xyz45";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] >= "0" && str[i] <= "9") {
//     count++;
//   }
// }
// console.log(count);
