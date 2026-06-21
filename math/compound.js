const prompt = require("prompt-sync")();

const num1 = parseFloat(prompt("Enter the first number: "));
const num2 = parseFloat(prompt("Enter the second number: "));
const rate = parseFloat(prompt("Enter the annual interest rate (in %): "));
const time = parseFloat(prompt("Enter the time in years: "));

const compoundInterest = num1 * Math.pow(1 + rate / 100, time) - num1;

console.log(
  `The compound interest on ${num1} at an annual rate of ${rate}% for ${time} years is: ${compoundInterest.toFixed(2)}`,
);
