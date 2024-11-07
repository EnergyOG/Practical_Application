const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongo-exercise')
.then(()=>{console.log("Connected to Database")})
.catch((err)=>console.log("Error Message",err));

const exerciseSchema = new mongoose.Schema({
    // name: String,
    // author: String,
    tags:[String],
    // date: Date,
    // isPublished: Boolean,
    // price : Number
})
const Exercise = mongoose.model('Exercise',exerciseSchema);
async function getExercise(){
    try{
        const exercise = await Exercise.find()
        console.log(exercise);
        return exercise;
    }
    catch(err){
        console.error("Error Message",err);
    }
}
getExercise(); 
