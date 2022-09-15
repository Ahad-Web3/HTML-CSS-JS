const prompt = require("prompt-sync")();

let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
let c = prompt("Enter third number: ");

if(a >= b && a >= c){
    console.log(`${a} is the largest number among ${a}, ${b}, ${c} (Using if else)`)
}else if(b >= a && b >= c){
    console.log(`${b} is the largest number among ${a}, ${b}, ${c} (Using if else)`)
}else {
    console.log(`${c} is the largest number among ${a}, ${b}, ${c} (Using if else)`)
}

console.log(`${Math.max(a,b,c)} is the largest number among ${a}, ${b}, ${c} (Using Math.max())`);