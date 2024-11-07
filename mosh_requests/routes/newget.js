const fs = require('fs');
const express = require('express');
const router = express.Router();
const app = express();
const debug = require('debug')('app:Function Debug');
router.use(express.json());

const fileSend =JSON.parse(fs.readFileSync('./values.json'));
router.get('/getHome/person/:group/:id',(req,res)=>{
    const group = req.params.group;
    if (!fileSend[group]) {return res.status(404).send("Error: Person group not found ❌");}
    const personIndex = parseInt(req.params.id,10);
    const person = fileSend.person.find(p =>p.id===personIndex);
    if(!person){return res.status(404).send("Error with your code❌")}
    res.status(404).send(person);
    debug("Person id can now be fetched✅", person);
    return;
})
router.get('/getHome',(req,res)=>{
    res.status(200).json(fileSend);
    debug("File sent successful");
})
router.get('/person2', (req, res) => {
    res.status(200).json(fileSend.person2);
    debug("person2 data successfully sent");
});
router.get('/person3', (req, res)=>{
    res.status(200).send(fileSend.person3);
})
router.use((req,res)=>{
    res.status(404).send("Cannot find file");
    debug("file not found");
})
const port = process.env.PORT || 3000;
router.listen(port, ()=>{
    debug(`Listening on port${port}...`);
})

module.exports.router = router;