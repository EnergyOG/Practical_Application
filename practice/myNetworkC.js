const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("Hello world");
    }else{
        res.end("PAGE NOT FOUND!");
    }
});

// const requestServer = http.request(networkCreation,(res)=>{
//     res.on();
//     res.write();
//     res.end();
// })
// server.listen(3000,()=>{
//     console.log("Listening on port 3000....")
// });



// const http = require('http');
// const server = http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.end('http://visa-connect-b417d.web.app/');
        
//     }else{
//         console.log("Page not found!");
//         res.end("Page not found!");
//     }
// })
// server.listen(3000,'127.0.0.1',()=>{
//     console.log("Server running on http://127.0.0.1:3000");
// })



///// Writing an https code to redirect a request to another page on the local host

// const http = require('http');
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(302, {
//             'Location': 'http://visa-connect-b417d.web.app/'
//         });
//         console.log("New Request sent");
//         res.end();
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end("Page not found!");
//     }
// });

server.listen(3000, '127.0.0.1', () => {
    console.log("Server running on http://127.0.0.1:3000");
});
