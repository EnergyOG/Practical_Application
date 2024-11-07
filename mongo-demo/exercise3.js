import mongoose from 'mongoose';
import express from 'express';

const app = express();
const { connect, model, Schema } = mongoose;
// const port = process.env.PORT || 3000;

connect('mongodb://localhost:27017/exercise3', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to Database 🫙"))
    .catch((err) => console.error(err));

const userSchema = new Schema({
    tags: {type: String, required:true},
    isPublished: Boolean,
    price: Number,
    author: String
});

const UserModel = model('User', userSchema);

async function reading() {
    try {
        // Initial user data creation
        const created = await UserModel.create([
            {
                "tags": ["express", "backend"],
                "isPublished": true,
                "price": 100,
                "author": "Dennis"
            },
            {
                "tags": ["node", "backend"],
                "isPublished": false,
                "price": 500,
                "author": "Andy"
            },
            {
                "tags": ["aspnet", "backend"],
                "isPublished": true,
                "price": 200,
                "author": "Andy"
            },
            {
                "tags": ["react", "frontend"],
                "isPublished": false,
                "price": 300,
                "author": "Dennis"
            },
            {
                "tags": ["node", "backend"],
                "isPublished": false,
                "price": 100,
                "author": "Andy"
            },
            {
                "tags": ["node", "backend"],
                "isPublished": true,
                "price": 200,
                "author": "Dennis"
            },
            {
                "tags": ["angular", "frontend"],
                "isPublished": true,
                "price": 500,
                "author": "Dennis"
            }
        ]);
        console.log("Users saved to database:", created);
    } catch (error) {
        console.error("Error reading or saving data:", error);
    }
}

// Call `reading()` only once if data needs to be seeded
// reading();

// Define the GET route
app.get('/user', async (req, res) => {
    try {
        const users = await UserModel.find({ tags: "frontend", isPublished: true });
        res.status(200).json(users);
        console.log("File read successfully");
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Error fetching users");
    }
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send("Error Message: Not Found");
    console.log("Error with File Fetching");
});

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
