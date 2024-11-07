const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json());
const path = require('path');
const filePath = path.join(__dirname, 'mosh_requests.value.json');

// Load the data from the JSON file
let fileSent = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Route to add a new person to person5
app.post('/getHome/person5/new', (req, res) => {
    try {
        const person5 = {
            id: fileSent.person5.length + 1,
            name: req.body.name,
            region: req.body.region,
            light: req.body.light
        };

        fileSent.person5.push(person5);
        fs.writeFileSync(filePath, JSON.stringify(fileSent, null, 2), 'utf8');

        res.status(200).json(person5);
        console.log("File Successfully updated with new person!", person5);
    } catch (error) {
        console.error("Error updating file:", error);
        res.status(500).send("Internal Server Error");
    }
});
// Handle unknown routes
app.use((req, res) => {
    res.status(404).send("Error: File was not found🤣");
    console.log("Error for updating file🤣");
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

