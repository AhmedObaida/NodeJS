const { profileEnd } = require('console');
const fs = require('fs');
// let products = JSON.parse(fs.readFileSync('products.json','utf-8'));
// console.log(products);


const http= require('http');
let server= http.createServer(function(req, res) {
    let urls = req.url.split('/');
    if(urls[1] === 'home'){
        res.write("welcome to our APIs");
    }
    else if(urls[1] === 'products' && urls[2]){
        let products = JSON.parse(fs.readFileSync('products.json','utf-8'));
    
        res.write(JSON.stringify(products[(urls[2]-1)]));
    }
    else if(urls[1] === 'products'){
        let products = JSON.parse(fs.readFileSync('products.json','utf-8'));
        res.write(JSON.stringify(products));
    }
    else
    {
        res.writeHead(404);
        res.write('<h1>404 Not Found</h1>');
    }
    res.end();
});

server.listen(4000,function(){
    console.log('server is running');
});

