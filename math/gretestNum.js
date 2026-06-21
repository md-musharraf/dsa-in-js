const prompt = require("prompt-sync")();

const num1 = parseFloat(prompt("Enter the first number: "));
const num2 = parseFloat(prompt("Enter the second number: "));
const num3 = parseFloat(prompt("Enter the third number: "));

if (num1 >= num2 && num1 >= num3) {
  console.log(`${num1} is the greatest number.`);
} else if (num2 >= num1 && num2 >= num3) {
  console.log(`${num2} is the greatest number.`);
} else {
  console.log(`${num3} is the greatest number.`);
}
