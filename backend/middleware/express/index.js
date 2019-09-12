const router = require('../../routes');
const bodyParser = require('body-parser');
const express = require('express');

module.exports = (app) => {
    //adding middleware
    app.use(bodyParser.json()) // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
    app.use(router);

    // Creating link to Angular build directory
    // const distDir = '../../../dist';
    // app.use(express.static(distDir));
}