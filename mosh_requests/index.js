const fs = require('fs');
const express = require('express');
const middlewareMine = require('./middleware/middlewareMine');
const getRoute = require('./routes/newget');
const postRoute = require('./routes/newpost'); 
const app = express();
app.use(express.json());

const fileSend =JSON.parse(fs.readFileSync('./values.json'));
app.get('/getHome/person/:group/:id',(req,res)=>{
    const group = req.params.group;
    if (!fileSend[group]) {return res.status(404).send("Error: Person group not found ❌");}
    const personIndex = parseInt(req.params.id,10);
    const person = fileSend.person.find(p =>p.id===personIndex);
    if(!person){return res.status(404).send("Error with your code❌")}
    res.status(404).send(person);
    console.log("Person id can now be fetched✅", person);
    return;
})
app.get('/getHome',(req,res)=>{
    res.status(200).json(fileSend);
    console.log("File sent successful");
})
app.get('/person2', (req, res) => {
    res.status(200).json(fileSend.person2);
    console.log("person2 data successfully sent");
});
app.get('/person3', (req, res)=>{
    res.status(200).send(fileSend.person3);
})
app.use((req,res)=>{
    res.status(404).send("Cannot find file");
    console.log("file not found");
})
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Listening on port${port}...`);
})

