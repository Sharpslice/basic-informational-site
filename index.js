const http = require('http');
const fs = require('node:fs');
const express = require("express");
const app = express();
const path = require('path');

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'about.html'))
})

app.get('/contact-me',(req,res)=>{
    res.sendFile(path.join(__dirname,'contact-me.html'))
})

app.use((req,res)=>{
    res.status(404).send("404 page not found")
})

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('my first Express app- listening on port', PORT);
})












// const server = http.createServer((req,res)=>{ //creates the server
//     if(req.method === 'GET') //checks to see if the request the browser made is a GET
//     {
//         if(req.url==='/')
//         {
//             res.writeHead(200,{'Content-type':'text/html'}); //sets status
//             fs.readFile('index.html','utf8',(err,data) =>{
//                 if(err){
//                     console.error(err);
//                     return;
//                 }
//                 res.end(data)
//             }) 
//         }
//         else if(req.url ==='/about')
//         {  
//             res.writeHead(200,{"Content-type":"text/html"});
//             fs.readFile('about.html','utf8',(err,data)=>{
//                 if(err){
//                     console.error(err);
//                     return;
//                 }
//                 res.end(data);
//             })
//         }
//         else if(req.url==='/contact-me'){
//             res.writeHead(200,{"Content-type":"text/html"});
//             fs.readFile('contact-me.html','utf8',(error,data)=>{
//                 if(err){
//                     console.error(err)
//                     return;
//                 }
//                 res.end(data)
//             })
//         }
//         else{
//             res.writeHead(404,{"Content-type":"text/html"});
//             res.end('<h1>404 not found</h1>')
//         }

        
//     }
    
// });


// server.listen(8080,()=>{
//     console.log("server is listening to 8080")
// });