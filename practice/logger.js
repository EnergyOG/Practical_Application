var url = "https://logger.com/log"; //this is not a real url

function log(message){
    return message;
}

module.exports.url = url;
module.exports.log = log;

/// how to get information about the path our root folder
// you have your the path.parse() method;

let path = require ('path');
let pathObj = path.parse(__filename);
// let timeOutID1= setTimeout(
//     ()=>{pathObj},6000
// );

// console.log(timeOutID1);
console.log(pathObj);


/// there is another module for node js know as os.fremem() and it checks for free memory on device

const os = require ('os');
let osFreeMemory = os.freemem();
let freeMemoryInMB = osFreeMemory/ (1024 * 1024);
let freeMemoryInGB = osFreeMemory/ (1024 * 1024 * 1024);
console.log(`The free memory space for this device is ♻️ ${freeMemoryInMB} MB currently`);
console.log(`The free memory space for this device is ♻️ ${freeMemoryInGB} GB currently`);