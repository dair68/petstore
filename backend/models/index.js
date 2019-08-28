var mongoose = require('mongoose');
var configure = require('./configure');

const Schema = mongoose.Schema;

const Pet = new Schema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        index: true,
        required: true
    },
    sex: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    details: String,
    in_stock: Boolean,
    image: String,
    price: {
        type: Number,
        min: 0
    }
});

Pet.methods.sell = function() {
    this.in_stock = false;
}

var petModel = mongoose.model('Pet', Pet);

//configures initial documents
//configure.initializeCollection(petModel);

module.exports = petModel;