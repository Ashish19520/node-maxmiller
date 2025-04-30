let fs=require("fs");


// we create a readable stream from dummy.txt data is loading in chunks of length 16kb each
let readable=fs.createReadStream(__dirname+"/dummy.txt",{encoding:"utf8",highWaterMark:16*1024});  

let writable=fs.createWriteStream(__dirname+"/dummycopy.txt");



// here we are emiting the event if a chunk is came into a buffer we will proceed them
readable.on('data',(chunk)=>{
    console.log(chunk);

    // every chunk we get we are writng them in the file through  a writable stream
    writable.write(chunk)
})
