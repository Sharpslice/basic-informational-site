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

        
    }
    
});


server.listen(8080,()=>{
    console.log("server is listening to 8080")
});