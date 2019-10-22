//mongoose setup
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/petstore';
//const configMongoose = require('./backend/middleware/mongoose')(mongoose);

//connecting to database
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    //error found
    if(err) {
        console.log(err);
    }

    console.log("Connected successfully to server");
    const dbName = 'petstore';
    const db = client.db(dbName);
    const collection = db.collection('oplogs');

    //deleting existing documents in oplogs collection
    collection.deleteMany({});

    //mongo oplog setup
    const MongoOplog = require('mongo-oplog');
    const oplogURL = 'mongodb://127.0.0.1:27017/local';
    const oplog = MongoOplog(oplogURL, { ns: 'petstore.pets' });
    const configOplog = require('./backend/middleware/oplog')(oplog, collection, client);
});