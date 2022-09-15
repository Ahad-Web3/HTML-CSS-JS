const prompt = require("prompt-sync")();

let a = prompt("Enter first variable: ");
let b = prompt("Enter second variable: ");

let temp;

// temp = a;
// a = b;
// b = temp;

[a, b] = [b,a];

console.log(`${a}
${b}`);
