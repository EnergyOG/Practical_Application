// const http = require ('http');
// const fs = require('fs');
// const express = require('express');
// const app = express();
// app.use(express.json());

// app.get('/api/crash_courses',(req,res)=>{
//     fs.readFileSync('./refreshing','utf8',(err,data)=>{
//         if(err){
//             res.write(`File was not found: `,err);
//             return res.status(404).send("Error 404");
//         }else{
//             res.send(data);
//             console.log(`Data sent!!`);
//         }
//     })
// })
// const port = process.env.PORT || 5000;
// app.listen(port,()=>{
//     console.log(`Listening on port ${port}....`);
// });

const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json());

// Set up an API endpoint to serve the file
app.get('/api/crash_courses', (req, res) => {
  // Use asynchronous file reading
  fs.readFile('./refreshing/lorem1.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return res.status(500).send('Server Error: Could not read file');
    }
    
    // Send the file content as the response
    res.send(data);
    console.log('File has been read successfully!');
  });
})

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}....`);
});
