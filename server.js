'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = 8080;
const HOST = 'localhost';

// App
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse application/json
app.use(express.json())

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'app/build')));

app.all('/api/isWellKnownUser', (req, res) => {
    console.log('requesting /api/isWellKnownUser')
    console.log(req.params)
    console.log(req.body)
    res.json({'isWellKnownUser':1})
});

app.all('/api/registerUnknownUser', (req, res) => {
    console.log('requesting /api/registerUnknownUser')
    console.log(req.params)
    console.log(req.body)
    res.json({'registered':1})
});

app.get('*', (req, res) => {
    console.log('requesting /')
    res.sendFile(path.join(__dirname, 'app', 'build' ,'index.html'))
  //res.send('Hello world\n');
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);
