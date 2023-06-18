import * as http from 'http';

http.createServer((req,res)=>{
        res.writeHead(200,{  
        'content-type': 'text/plain',
          })
        res.end('Welcome to this server')
}).listen(8080)


