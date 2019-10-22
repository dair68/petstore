const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Person = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: String,
    email: String,
    address: {
        houseNum: Number,
        street: String,
        room: Number,
        town: String,
        state: {
            type: String,
            minlength: 2,
            maxlength: 2
        },
        zipcode: Number
    }
});

module.exports = Person;