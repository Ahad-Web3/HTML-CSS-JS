const prompt =  require("prompt-sync")();
/*Area of Triangle of base and height is Base * Height.*/
let base = parseInt(prompt("Enter base of Triangle: "));
let height = parseInt(prompt("Enter height of Triangle: "));

Area = (base*height)/2;

console.log(`${Area}`);


console.log(`Area of triangle with base:${base} and Height:${height} is ${Area}`);