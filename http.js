const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=> {
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1> This is NODE Js</h1>Hello World!');
})
server.listen(port,()=>{
    console.log(`Server is listen port ${port}`);
})

