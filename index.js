const http = require('http');
const fs = require('node:fs');



const server = http.createServer((req,res)=>{ //creates the server
    if(req.method === 'GET') //checks to see if the request the browser made is a GET
    {
        if(req.url==='/')
        {
            res.writeHead(200,{'Content-type':'text/html'}); //sets status
            fs.readFile('index.html','utf8',(err,data) =>{
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data)
            }) 
        }
        else if(req.url ==='/about')
        {  
            res.writeHead(200,{"Content-type":"text/html"});
            fs.readFile('about.html','utf8',(err,data)=>{
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            })
        }
        else if(req.url==='/contact-me'){
            res.writeHead(200,{"Content-type":"text/html"});
            fs.readFile('contact-me.html','utf8',(error,data)=>{
                if(err){
                    console.error(err)
                    return;
                }
                res.end(data)
            })
        }
        else{
            res.writeHead(404,{"Content-type":"text/html"});
            res.end('<h1>404 not found</h1>')
        }

        
    }
    
});


server.listen(8080,()=>{
    console.log("server is listening to 8080")
});