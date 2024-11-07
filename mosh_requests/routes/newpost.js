const fs = require('fs');
const http = require('http');
const express = require('express');
const app = express();
const router = express.Router();
const env = require('dotenv');
const debug = require('debug');
debug('app:function');
env.config();
const morgan = require('morgan');// this helps you to create a secure http server/endpoint
router.use(express.json());// allows you to json.parse json files into your code
router.use(express.static());//allows you to input html parameters in the browsers endpoint request/ Browser request
//Example : http://localhost:3000/index.html
router.use(express.urlencoded(extended=true));// this allows you to use an input directly to input new elements using the keys values pairs
//Example : you have an input box taking key value pairs you can input them directly without needing to write it in json format

const fileSent = JSON.parse(fs.readFile('./values.json','utf-8',(err,data)=>{
    if(err){
        res.status(404).send(`Error:${err}`);
        console.log("Error: Unable to read file"); 
    } 
    res.status(200).send(data);
    console.log("File read Successfully");
}));
router.post('/getHome/person/addNewId',(req,res)=>{
   
    try{
    //The Logic
    //set an id for the new person created
    //name properties for the new person 
    //push the new person up the values.json file
    //we get the entire to see it there has been add person
    const person5 = {
        id : fileSent.length+1,
        name : req.body.name,
        region : req.body.region,
        light : req.body.light,
    }
    fileSent.push(person5);
    res.status(200).json(person5);
    console.log("New person added successfully");
   }

   catch(err){
    console.error(err);
    console.log("Unable to add new file");
   } 

})
router.use((req,res)=>{
    res.status(404).send("There was an error");
    console.log("Error: The code didn't workout");
})
// Start the server
const port = process.env.PORT || 3000;
router.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

module.exports.router= router;