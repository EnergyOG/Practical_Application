const express = require('express');
const app = express();
const genres = require('./routes/genres');
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('tiny'));
app.use('/api/genres',genres);
const date = new Date();
const port = process.env.PORT || 3002;
app.listen(port,()=>{
    console.log(`Listening on port ${port}...on ${date}`);
}) 