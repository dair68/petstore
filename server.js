const express = require("express");
const app = express();
const port = 3000;

var mongoose = require('mongoose');
var router = require('./backend/routes');

//middleware
app.use(router);

mongoose.connect('mongodb://localhost:27017/petstore', { useNewUrlParser: true }, function (err) {
    if (err) {
        handleError(error);
    }

    app.listen(port, function () { console.log(`app listening on port ${port}`) });
});

mongoose.connection.on('error', err => {
    logError(err);
});





