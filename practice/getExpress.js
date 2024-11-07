//working with get method in express 

const express = require ('express');
const app = express();

const courses = [
    {id:0 , name:"java"},
    {id:1 , name:"c++"},
    {id:2 , name:"r"},
    {id:3 , name:"c#"},
    {id:4 , name:4},
];

app.get ('/', (req,res)=>{
    res.send("Hello World!!!");
})
app.get('/api/courses', (req,res)=>{
    res.send(courses);
});
app.get('/api/courses/:id',(req,res)=>{
    const course =  courses.find(course => course.id === parseInt(req.params.id)); d
    if (!course) res.status(404).send("The course with the given ID was not found");
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listening on ${port}...`);
});  

// //can you do this instead of this 
// res.writeHead('404',()=>{
//     res.end('Cannot find file');
// })
// res.status('404').send(()=>{'Cannot find file'});

