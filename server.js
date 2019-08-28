const express = require("express");
const app = express();
const port = 3000;

var mongoose = require('mongoose');
var mongoURL = 'mongodb://localhost:27017/petstore';

var router = require('./backend/routes');
var bodyParser = require('body-parser');

//connecting to database
mongoose.connect(mongoURL, { useNewUrlParser: true }, err => console.log(err.message));

//if error occurs after database connection
mongoose.connection.on('error', err => console.log(err.message));

//middleware
app.use(router);
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//connecting app to server
app.listen(port, () => console.log(`app listening on port ${port}`));





