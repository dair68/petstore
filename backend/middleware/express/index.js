const router = require('../../routes');
const bodyParser = require('body-parser');

module.exports = (app) => {
    //adding middleware
    app.use(bodyParser.json()) // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
    app.use(router);
}