function greet(name,myFunction) {
    console.log("Hello World!");
    myFunction(name);
}
function sayName(myname) {
    console.log('Hello' + ' ' + myname);
}


// greet('Ahad',sayName);
setTimeout(greet, 4000, 'Ahad', sayName);
