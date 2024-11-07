// const fs = require('fs');
// const reader = fs.readFileSync('./files/lorem.txt','utf8');
// console.log(reader);
// const addedContent = `This a new data added to starter text\n ${reader} on ${new Date}`;
// fs.writeFileSync('./files/starter.txt', addedContent);
// console.log(addedContent);


const fs = require('fs');
const { join } = require('path');
// const reading = fs.readFileSync('./files/lorem.txt');// when you don't add a utf8 to it 
//                                                     // it sends a buffer code 
const reading = fs.readFileSync('./files/lorem.txt','utf8');
const dates = new Date;
const month = dates.getMonth()+1;
console.log(`This text "${reading}"was updated on ${dates}`);
console.log(`This text "${reading}"was updated on ${month}`);

const writeIN = {"name":"Dennis",
                "age":20};
const wrote = fs.writeFileSync('./files/writing.txt',JSON.stringify(writeIN));

// Syntax for .writeHead method in node.js
// response.writeHead(200,
//     {
//         'Content-Length':
//             Buffer.byteLength(body),
//         'Content-Type':
//             'text/plain'
//     });
console.log(wrote);



// const read = fs.readFileSync('/.files/lorem.txt','utf8'); 
// const reads = read((err,data)=>{
//         if(read==='./file.lorem.txt'){
//         console.log(data)
//     }else{
//         console.log(err)
//     }});
// console.log(reads);