const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//mongo oplog setup
const MongoOplog = require('mongo-oplog');
const oplogURL = 'mongodb://127.0.0.1:27017/local';
const oplog = MongoOplog(oplogURL, { ns: 'petstore.pets' });
const configOplog = require('./backend/middleware/oplog')(oplog);

const router = require('./backend/routes');
const bodyParser = require('body-parser');

// Create link to Angular build directory
const distDir = __dirname + "/dist/";
app.use(express.static(distDir));

//mongoose setup
const mongoose = require('mongoose');
const mongoURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/petstore';
const configMongoose = require('./backend/middleware/mongoose')(mongoose);

//connecting to database
mongoose.connect(mongoURL, { useNewUrlParser: true }, err => console.log(err));

//if error occurs after database connection
mongoose.connection.on('error', err => console.log(err));

//adding middleware
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(router);

//connecting app to server
app.listen(port, () => console.log(`app listening on port ${port}`));





