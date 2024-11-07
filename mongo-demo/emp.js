import mongoose from 'mongoose';
import fs from 'fs';

const { connect, model, Schema } = mongoose;
connect('mongodb://localhost:27017/emp2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("Connected to database 🫙 "))
.catch((err) => console.error("Error Message: Didn't connect to Database", err));

const reading = fs.readFileSync('./exercise-data.json','utf8');
const read = JSON.parse(reading);

const peopleSchema = new Schema({
    tags: [String],
    isPublished: Boolean,
    price: Number,
    author: String
})

const PeopleModel = model('People',peopleSchema);

async function createFile(){
    try{
        await PeopleModel.create(read).find({tags:["frontend"], isPublished:true, name:/.*by.*/i});
        console.log("File created Successfully✅");
        return;
    }
    catch(err){
        console.error("Database Not created ❌",err);
    }
}
async function displayFile(){
    const createFileAwait = await createFile();
    console.log(createFileAwait);
}

//updating your model
async function updatePeople(id){
    const peopleID = await PeopleModel.findById(id);
    if(!peopleID)return;
    PeopleModel.set({
        isPublished : true,
        author : "Denmark"
    })
    const result = await peopleID.save();
    console.log(result);
}

//Remove/Deleting a person
async function deletePeople(id){
   const deletePeopleAwait = await PeopleModel.findByIdAndDelete(id);
   console.log(deletePeopleAwait);
}
updatePeople('5a68fdd7bee8ea64649c2777');
deletePeople('5a68fde3f09ad7646ddec17e');
displayFile();