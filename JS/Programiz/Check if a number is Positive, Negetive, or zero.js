const prompt = require("prompt-sync")();
let number = prompt("Enter a Number: ");

if(number > 0){console.log(`${number} is positive number`);}
else if(number < 0){console.log(`${number} is negetive number`);}
else {console.log(`${number} is Zero`);}

