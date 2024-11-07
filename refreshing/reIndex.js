//there are three main modules used in node js
// 1.fs 2.os 3.http 4.path

//fs module helps to transfer/collect/identify data within files
// fs has some identifiers like __filename, __dirname, __basename, ___endname,etc
// and some methods like path.parse(__filename);
//path(
// path.parse(__filename) give all the relevant info you need to know about a file 
// to use this method you need to file import the file system module then pass the method

//Example of fileSystems in node.js and implementation of their methods

const path = require('path');
const fs = require('fs');
const os = require ('os');
const util = require('util');
const reject = require('underscore/cjs/reject.js');


// reading files in sync
const data = fs.readFileSync('lorem1.txt','utf8');
console.log(data);

//writing files in sync
const write = fs.writeFileSync('lorem2.txt','Hello World');
console.log('File written successfully!');

const platform = os.platform();
console.log(`The platform used for this operation is ${platform}`);


const readFile = util.promisify(fs.readFile);

readFile('lorem2.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));
