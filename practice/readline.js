const readline = require('readline');
const r1=readline.createInterface(
    input = process.stdin,
    output = process.stdout,
);
r1.question("Please enter your name :",(name)=>{
        console.log(`Your name is ${name}`);
        r1.close();
    })

r1.on('close', ()=>{
    console.log("Interface is logged out");
    process.exit(0);
})