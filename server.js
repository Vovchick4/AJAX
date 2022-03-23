const express = require('express');
const path = require('path');
const fs = require('fs'); 
const app = express();

const data = fs.readFileSync('users.json');
let users = JSON.parse(data); 
console.log(users); 

app.use(express.static(path.join(__dirname, 'Front')));
app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}Front/index.html`);
    res.sendFile(`${__dirname}Front/users.js`);
});

app.get('/users', (req, res) => {
    //res.send(users)
    res.sendFile(`${__dirname}/users.json`);
});

app.listen(3000);







/*
const http = require('http');
const fs = require('fs');
const port = '3000';
const host = '127.0.0.1';
let r = null;

http.createServer((request, response) => {
    const readStream = fs.createReadStream('./users.json');   
    response.writeHead(200,{'Content-type' : 'application/json'});
    readStream.pipe(response);
}).listen(port, host, function() {
    console.log('Server running at http://' + host + ':' + port)
});


////////////////////////////////////////////////////////////////////////

/*
const http = require('http');
const static = require('node-static');
const file = new static.Server('./users.json')
const port = '3000';
const host = '127.0.0.1';

http.createServer((request, response) => {
    request.addListener('end', () => {
        file.serve(request, response);
    }).resume();   

}).listen(port, host, function() {
    console.log('Server running at http://' + host + ':' + port)
});
*/