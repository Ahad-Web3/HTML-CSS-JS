const prompt = require("prompt-sync")();
/*1 km = 0.621371 miles*/

let a = parseInt(prompt("Enter value in kms: "));

m = a/0.621371;

console.log(`${a} kms is ${m} Miles `);