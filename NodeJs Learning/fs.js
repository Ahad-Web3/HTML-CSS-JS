const fs = require("fs");
const path = require("path");

fs.readFile('demo.txt',(err,data) => {
    if(err){
        throw err.name;
    }
    else{
        console.log(data.toString);
    }
});