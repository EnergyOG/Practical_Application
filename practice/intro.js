
// This is an introductory course to node js


console.log("Hello World");
const oS = require('os');
const path = require('path');
const math = require('./math');



console.log(oS.type());
console.log(oS.version());
console.log(oS.homedir());

const calc = require('./math');
console.log(calc.add(13,5));

console.log(__dirname);
console.log(__filename);
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

// this is the best 
console.log(path.parse(__filename));

console.log(math.add(2, 4).toFixed(2)); 