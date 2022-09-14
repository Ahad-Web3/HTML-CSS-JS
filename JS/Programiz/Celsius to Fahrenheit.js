const prompt = require("prompt-sync")();
/*fahrenheit = celsius * 1.8 + 32*/

let celsius = parseInt(prompt("Enter temperature in Celsius: "));

let fahrenheit = celsius* 1.8 +32;

console.log(`${celsius}°C is ${fahrenheit}°F`);

