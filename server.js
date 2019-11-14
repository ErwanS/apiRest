// Imports

var express = require('express');
var bodyParser = require('body-parser');
var connection = require('./db').db;
var apiRouter = require('./apiRouter').router;

// Instantiate server

var server = express();

// Instantiate a body-parser object

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Check the success of the MySQL connection

connection.connect(function(error) {
    if(!!error) {
        console.log('Error - Unable to connect to the database !')
    } else {
        console.log('Connected to the DataBase')
    }
})

//We ask the server to use our router

server.use(apiRouter);

// Launch server

server.listen(3000, function() {
  console.log('API server started');
    //console.log('API server started on: ' + port);
});
