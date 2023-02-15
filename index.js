// const bcrypt = require('bcrypt'); // import bcrypt 
// const saltRounds = 2;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

// bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//         // Store hash in your password DB.
//         console.log(hash);

//     });
// });


// const calc= require('./calc'); //import calc

// console.log(calc.add(1,2));

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response){
    // console.log(req.headers);
    // res.write('hi from server ' + req.headers);
    // res.end(); 
    let urls = request.url.split('/');
    // console.log(urls);
    // console.log(req.url);
    if(urls[1]=='index')
    {
        let html = fs.readFileSync('index.html','utf-8');
        response.write(html);
    }

    else if(urls[1]=='add')
    {
        fs.writeFileSync('todo.txt',urls[2]+'=>'+urls[3]);
        response.write('data is saved in file');
    }
    // else
    // {
    //     res.writeHead(404);
    //     res.write('<h1>404 Not Found</h1>');
    // }

    response.end();

});

server.listen(7000,function () {
    console.log('hi in port 7000');
});

