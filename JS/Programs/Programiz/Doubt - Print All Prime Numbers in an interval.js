// const prompt = require("prompt-sync")();

// let min = parseInt(prompt("Enter initial number: "));
// let max = parseInt(prompt("Enter final number: "));

// for(let i = min; i < max; i++){
//     let flag = 0;
//     for(let j = 2; j < i;j++){
//         if(i%j == 0){
//             break;
//         }else if(i%j !== 0){
//             flag = 1;
//             break;
//         }
//     if(flag == 0){
//         console.log(i);
//     }
//     }
// }

min = 1;
max = 50;
for(let i = min; i < max; i++){
    for(let j = 2; j < i; j++){
      if(i%j == 0 ) { break } //if divisable, stop (go to next i)
      if(j == i-1 ) { console.log(i) } //console.log if last j isn't divisable
    }
}