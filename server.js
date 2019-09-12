//mongo oplog setup
const MongoOplog = require('mongo-oplog');
const oplogURL = 'mongodb://127.0.0.1:27017/local';
const oplog = MongoOplog(oplogURL, { ns: 'petstore.pets' });
const configOplog = require('./backend/middleware/oplog')(oplog);

//mongoose setup
const mongoose = require('mongoose');
const mongoURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/petstore';
const configMongoose = require('./backend/middleware/mongoose')(mongoose);

//connecting to database
mongoose.connect(mongoURL, { useNewUrlParser: true }, err => console.log(err));
mongoose.connection.on('error', err => console.log(err));

//express server setup
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const distDir = __dirname + '/dist/';
const configApp = require('./backend/middleware/express')(app, distDir);

//connecting app to server
app.listen(port, () => console.log(`app listening on port ${port}`));