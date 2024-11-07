const fs = require('fs');

fs.readFile('./files/starter.txt','utf8', (err,data)=>{
    if(err) throw err;
    console.log(data);
})

//working with file systems 

const cfs = require('fs');
cfs.readFile('./files/lorem.txt','utf8', (err,data)=>{
    if(err) throw err;
    console.log(data);
})

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error : ${error}`);
    process.exit(1);
})