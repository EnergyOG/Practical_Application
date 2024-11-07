const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017',{
     useNewUrlParser: true, 
     useUnifiedTopology: true 
    }
)
.then(() => console.log("Connected to MongoDB Database"))
.catch(err => console.log("Connection error:", err));

// Define the User Schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    clients: [String]
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Function to create a user
async function createUser() {
    try {
        const user1 = new User({
            id: 1,
            name: "Dennis",
            age: 25,
            clients: ["Client1", "Client2"]
        });
        const userDisplay = await user1.save();
        console.log("User saved:", userDisplay);
    } catch (err) {
        console.log(err);
    }
}

async function logic(){
    try{
        const result = await User.find({
            price:{$eq:10}
            //price:{neq:20}
            //price: (lt:10)
        })

        /// to find a and with case sensitive .find(/.*Dennis.*/);
        .sort({number:1})//this for ascending order
        .sort({number: -1})//this for descending order
        .limit()
        .or([{price:{$eq:10}},{price:{$eq:10}}])
        .and([{price:{$eq:10}},{price:{$eq:10}}])
        .count()
    }

    catch(error){
        console.log("Error Message",error);
    }
}

// Call the function to create a user
createUser();
