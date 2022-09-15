// x^(1/2);
const prompt = require("prompt-sync")();

let Number = parseInt(prompt("Enter a number to find out it's root: "));


let root = Math.sqrt(Number);

console.log(`Square root of ${Number} is ${root}`);