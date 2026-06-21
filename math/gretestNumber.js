const prompt = require("prompt-sync")();

const num1 = parseFloat(prompt("Enter the first number: "));
const num2 = parseFloat(prompt("Enter the second number: "));

if (num1 > num2) {
  console.log(`${num1} is greater than ${num2}`);
} else {
  console.log(`${num2} is greater than ${num1}`);
}
