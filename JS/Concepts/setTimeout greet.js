

function greet() {
    console.log("After 3000 ms Hello!");
}
let intervalId = setTimeout(greet, 3000);
console.log("ID:" + intervalId);
