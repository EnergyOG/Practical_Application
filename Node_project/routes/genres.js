const express = require('express');
const router = express.Router();
const genres =[
    {id: 1, name:"Action"},
    {id: 2, name: "Horror"},
    {id: 3, name: "Romance"}
];
router.get('/',(req,res)=>{
    res.status(200).send(genres);
    console.log("File read successfully ✅");
})
router.get('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const genre = genres.find(g=>g.id ===id);
    if(!genre){
       res.status(404).send({Error:"Id not found🤣"});
        console.log("The id you are looking for you know its not available but still😤");
        return;
    }
    return res.status(200).send(genre);
})

router.post('/',(req,res)=>{
    const name = req.body.name;
    const genre = {
        id : genres.length+1,
        name: name
    }
    if(!name){
        res.status(400).send({error: "You don't have a name for the genre"});
    }
    if (typeof name !== 'string') {
        return res.status(400).send({ error: "Genre name must be a string" });
    }
    if (name.length < 3) {
        return res.status(400).send({ error: "Genre name must be at least 3 characters long" });
    }
    if (name.length > 50) {
        return res.status(400).send({ error: "Genre name cannot exceed 50 characters" });
    }
    genres.push(genre);
    res.status(200).send(genre);
})
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const genre = genres.find(g => g.id === id);

    if (!genre) {
        return res.status(404).send({ error: "ID not a match" });
    }

    const newName = req.body.name;
    if (!newName || typeof newName !== 'string' || newName.length < 3 || newName.length > 50) {
        return res.status(400).send({ error: "Invalid genre name. It should be a string between 3 and 50 characters long." });
    }

    genre.name = newName;
    res.status(200).send(genre);
});
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const genre = genres.find(g => g.id === id);

    if (!genre) {
        return res.status(404).send({ error: "Id not found❌" });
    }

    const index = genres.indexOf(genre); 
    genres.splice(index, 1); 

    res.status(200).send(genres);
});
 
router.use((req,res)=>{
    res.status(404).send({message:"Not Found"});
    console.log("File not found❌");
})

module.exports = router;