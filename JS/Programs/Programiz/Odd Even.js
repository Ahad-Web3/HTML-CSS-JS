const prompt = require('prompt-sync')();

let number = prompt("Enter the Number: ");
// Using If else
if(number % 2 == 0){console.log(`${number} is even`)}
else if(number % 2 !== 0){console.log(`${number} is odd`)}
// Using ternary Operator
let oddEven = (number % 2 == 0)? 'even' : 'odd';
console.log(oddEven);