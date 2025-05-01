let fs=require("fs");
let zlib=require("zlib");


// we create a readable stream from dummy.txt data is loading in chunks of length 16kb each
let readable=fs.createReadStream(__dirname+"/dummy.txt",{encoding:"utf8",highWaterMark:16*1024});  

let writable=fs.createWriteStream(__dirname+"/dummycopy.txt");

let compress=fs.createWriteStream(__dirname+"/dummy.gz");

const gzip=zlib.createGzip();


// here we pass the writable to readable pipe and our work is done
readable.pipe(writable)
readable.pipe(gzip).pipe(compress);
// the above is we do with chaining
// a method chaingin return an  object so we can keep calling another methods
// 