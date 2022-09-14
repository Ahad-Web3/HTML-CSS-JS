/*
Area of Triangle of sides a, b, c;
Area = a*b*c;
*/

const prompt =  require("prompt-sync")();

let a = parseInt(prompt("Enter first side of Triangle: "));
let b = parseInt(prompt("Enter second side of Triangle: "));
let c = parseInt(prompt("Enter third side of Triangle: "));

Area = a*b*c;

console.log(`Area of triangle with sides ${a}, ${b}, ${c} is ${Area}`);