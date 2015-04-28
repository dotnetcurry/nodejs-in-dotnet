var body_Parser = require('body-parser'); //Load Modules for bodyparser
var path = require('path'); //Load 'path' the File base module 
//var bson = require('bson');
var express = require('express'); //Load express module
var http = require('http'); //Load Http module for Http operation

var app = express(); //The Express object

app.use(body_Parser());

var MongoClient = require('mongodb').MongoClient;
//var http = require('http');
//var express = require('express');
//var path = require('path');
var rwOperation = require('./ReadWrite.js'); //Load the File

var communicationPort = 8080; //The Communication port

//var application = express();

//The REST API

app.get('/EmployeeList/api/employees', rwOperation.get);

app.post('/EmployeeList/api/employees', rwOperation.add);

app.delete('/EmployeeList/api/employees/:Id', rwOperation.delete);

app.listen(communicationPort);