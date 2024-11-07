// const fs = require('fs');
// const express = require('express');
// const app = express();
// app.use(express.json())

// const fileRead = JSON.parse(fs.readFileSync('./mosh_requests/values.json','utf8'));
// app.get('/crashed',(req,res)=>{
//     if(Object.keys(fileRead).length===0){
//         res.status(404).send("Error Unsuccessful Get method");
//         console.log("Error with code.");
//         return;
        
//     }
//     res.send("Get Successful :)");
//     console.log("Get has been successful");
// });

// const port = process.env.PORT || 5000;
// app.listen(port,()=>{
//     console.log(`Listening on port ${port}...`);
// })

const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json());
// import { readFileSync } from 'node:fs';

// Read the JSON file synchronously and parse it into a JavaScript object
const fileRead = JSON.parse(fs.readFileSync('mosh_requests/values.json', 'utf8'));

app.get('/crashed', (req, res) => {
    // Check if the fileRead object is empty
    if (Object.keys(fileRead).length === 0) {
        res.status(404).send("Error Unsuccessful Get method");
        console.log("Error with code: fileRead is empty.");
        return;  // Stop further execution
    }

    // If not empty, send success message
    res.send("Get Successful :)");
    console.log("Get has been successful");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
