const express = require("express");
const app = express();
const port = 3000;

const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/petstore';

const router = require('./backend/routes');
const bodyParser = require('body-parser');

//connecting to database
mongoose.connect(mongoURL, { useNewUrlParser: true }, err => console.log(err.message));

//if error occurs after database connection
mongoose.connection.on('error', err => console.log(err.message));

//middleware
app.use(router);
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//connecting app to server
app.listen(port, () => console.log(`app listening on port ${port}`));





