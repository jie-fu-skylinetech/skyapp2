'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

// Constants
const PORT = 8080;
const HOST = 'localhost';

// App
const app = express();

app.use(bodyParser());

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//app.use(bodyParser.json())

app.use(express.json());       // to support JSON-encoded bodies
//app.use(express.urlencoded()); // to support URL-encoded bodies

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'app/build')));

app.all('/api/isWellKnownUser', (req, res) => {
    console.log('requesting /api/isWellKnownUser')
    console.log(req.params)
    console.log(req.body)
    //console.log(req)
    res.json({'isWellKnownUser':1})
});

app.all('/api/registerUnknownUser', (req, res) => {
    console.log('requesting /api/registerUnknownUser')
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