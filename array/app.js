// const arr = [10, 20, 20, 40, 3, 0, 99];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// find the index
// const arr = [10, 25, 30, 45, 60];
// let target = 45;
// for (let i = 0; i < arr.length; i++) {
//   if (target === arr[i]) {
//     console.log(i);
//     break;
//   }
// }

// find the max number in array and How many times the maximum element appears
// let arr = [1, 22, 2, 24, 89, 98, 4, 4, 3, 98, 98];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);
// let count = 0;
// for (let j = 0; j < arr.length; j++) {
//   if (max === arr[j]) {
//     count++;
//   }
// }
// console.log(count);

// Find the second largest element
// const arr = [12, 45, 8, 99, 23, 99];
// let largest = 0;
// let secondLargest = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (largest < arr[i]) {
//     secondLargest = largest;
//     largest = arr[i];
//   } else if (arr[i] > secondLargest && arr[i] !== largest) {
//     secondLargest = arr[i];
//   }
// }
// console.log(largest, secondLargest);

// // Count how many times each number appears.
// const arr = [1, 2, 1, 3, 2, 1];
// let freq = {};
// for (let i = 0; i < arr.length; i++) {
//   if (freq[arr[i]]) {
//     freq[arr[i]]++;
//   } else {
//     freq[arr[i]] = 1;
//   }
// }
// console.log(freq[1]);

// //Reverse an array
// const arr = [10, 20, 30, 40, 50];
// let revArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
//   revArr.push(arr[i]);
// }
// console.log(revArr);

// // check this is a palindrome array or not
// const arr = [1, 2, 3, 2, 1];
// let isPalindrome = false;
// for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//   if (arr[i] === arr[arr.length - 1 - i]) {
//     isPalindrome = true;
//   }
// }
// if (isPalindrome) {
//   console.log("this is palindrome array");
// } else {
//   console.log("this is not a palindrome array");
// }

// // sum of all even number
// const arr = [5, 10, 15, 20, 25, 30];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     sum = sum + arr[i];
//   }
// }
// console.log(sum);

// // All zeroes to left and all ones to right
// let arr = [0, 1, 0, 1, 1, 1, 0, 1, 0];
// let zeroIdx = 0;
// let oneIdx = arr.length - 1;
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     newArr[zeroIdx] = 0;
//     zeroIdx++;
//   } else {
//     newArr[oneIdx] = 1;
//     oneIdx--;
//   }
// }
// console.log(newArr);

// // Array left Rotation by 1
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let newArr = [];
// for (let i = 1; i < arr.length; i++) {
//   newArr[i - 1] = arr[i];
// }
// newArr[arr.length - 1] = arr[0];
// console.log(newArr);
