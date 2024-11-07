const http = require ('http');
const path = require ('path');

pathParse= path.parse(__filename);
console.log(pathParse);

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write(`Hello World!!!🖐️`);
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write('Welcome to coureses');
        res.end();
    }
});

server.listen(4000);
console.log("Listening on port 4000");

