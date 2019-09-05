const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
const mongoURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/petstore';

const router = require('./backend/routes');
const bodyParser = require('body-parser');

// Create link to Angular build directory
const distDir = __dirname + "/dist/";
app.use(express.static(distDir));

//mongoose settings to fix deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//connecting to database
mongoose.connect(mongoURL, { useNewUrlParser: true }, err => console.log(err.message));

//if error occurs after database connection
mongoose.connection.on('error', err => console.log(err.message));

//adding middleware
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(router);

//connecting app to server
app.listen(port, () => console.log(`app listening on port ${port}`));





