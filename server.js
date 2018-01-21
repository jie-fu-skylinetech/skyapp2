'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = 8080;
const HOST = 'localhost';

// App
const app = express();
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'app/build')));

app.get('/api/isWellKnownUser', (req, res) => {
    console.log('requesting /api/isWellKnownUser')
    res.json({'isWellKnownUser':1})
});

app.get('/api/registerUnknownUser', (req, res) => {
    console.log('requesting /api/registerUnknownUser')
    res.json({'registered':1})
});

app.get('*', (req, res) => {
    console.log('requesting /')
    res.sendFile(path.join(__dirname, 'app', 'build' ,'index.html'))
  //res.send('Hello world\n');
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);