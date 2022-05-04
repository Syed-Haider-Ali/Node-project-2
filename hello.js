const https=require('https');
const url=require('url');
const fs=require('fs');
const PORT = process.env.PORT || 5000

        // its all till 9th video of Node
// http.createServer(function(req,res){
//     fs.readFile('index.html',function(err,data){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     console.log("Incomming request", req.url)
//     res.end();
//     })

//     // let q = url.parse(req.url, true).query;
//     // let date = q.year + " " + q.month;
//     // res.end(date);
//     // res.end('Hellow G');
// }).listen(8080)


        // video 10

https.createServer(function(req,res){
    let q = url.parse(req.url, true);
    let pathName = '.'+ q.pathname;
    if(pathName == './'){
        pathName = './index'
    }
    pathName = pathName + '.html'
    console.log(pathName)
    fs.readFile(pathName, function(err,data){
        if(err){
        res.writeHead(404, {'Content-Type':'text/html'});
        return res.end("404 Page not found")

        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        res.end();
        console.log('Incomming request:', req.url,': ', q.pathname )
    })
}).listen(PORT)
console.log('server listening on port 8080...');
