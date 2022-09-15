
let countValue = new Promise(function(resolve,reject){
    reject("promise Rejected");
});

countValue
    .then(function successValue(result){
        console.log(result);
    })
    .then(function successValue1(){
        console.log("This is the second function call");
    })
    .then(function successValue2(){
        console.log("This is the third function call");
    })
    .catch(
        function errorValue(result){
            console.log(result);
        }
    )