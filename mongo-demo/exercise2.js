//import mongoose
const mongoose = require('mongoose');

//connect to your local host
mongoose.connect('mongodb://localhost:27017/mongo-exercise',{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}
)
.then(()=>console.log("Connected to MongoDB Database"))
.catch((error)=>{console.log("Error Message:",error)})

//create a schema for the database
const exerciseSchema = new mongoose.Schema({
    tags: [String],
    isPublished: Boolean,
    price : Number,
    author: String
});

//create a class for the based on the existing schema
const Exercise = mongoose.model('Exercise',exerciseSchema);

async function getExercise(){
    try{
        return await Exercise
        .find({isPublished:true})
        .sort({price:-1})
        .select({author:1, price:1});
    }
    catch(err){
        console.error(err);
    }
}
async function run(){
    const exercise = await getExercise();
    console.log(exercise);
}
run();