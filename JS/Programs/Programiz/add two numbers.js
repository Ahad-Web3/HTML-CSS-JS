const prompt = require("prompt-sync")();
const a = parseInt(prompt("First Number : "));
const b = parseInt(prompt("Second Number : "));

sum = a + b;
console.log(`sum of ${a} and ${b} is ${sum}`);