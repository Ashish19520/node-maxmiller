const fs=require("fs");
const path=require("path");

var greet=fs.readFileSync(path.join(__dirname+"/dummy.txt"),"utf-8");  //sync method
console.log(greet);


fs.readFile(path.join(__dirname+"/dummy.txt"),"utf8",(err,data)=>{    //async method to  print buffer value a file if remove utf-
    if(err) console.log("some error occured!");
    else console.log(data);
})



// Error firstr callback 
// in node js the callback take first parametes as error or a null object