const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'Front')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}Front/index.html`);
    res.sendFile(`${__dirname}Front/users.js`);
});

app.get('/users', (req, res) => {
    res.sendFile(`${__dirname}/users.json`);
});

app.listen(3000);




