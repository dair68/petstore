const mongoose = require('mongoose');
const conf = require('./configure');

const Schema = mongoose.Schema;

const petSchema = new Schema({
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

petSchema.methods.sell = function() {
    this.in_stock = false;
}

const Pet = mongoose.model('Pet', petSchema);

//initializes collection with 5 predetermined documents
// conf.clear(Pet);
conf.initialize(Pet);

module.exports = Pet;