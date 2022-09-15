const prompt = require("prompt-sync")();
/*
Prime number does not have any factors 
i.e. it is divisible by only itself 
i.e. remainder will not be zero when divided by numbers less than itself
*/

let number = parseInt(prompt("Enter the number :"));

let isPrime = true;
if(number == 1){console.log(`${number} is neither a prime number nor composite number`)
}else if(number > 1){
    for(i=2; i < number; i++){
        if(number % i == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(`${number} is a prime number`);
    }else{
        console.log(`${number} is a not prime number`);
    }
}else{console.log(`${number} is a not prime number`)}

