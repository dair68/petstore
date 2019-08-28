var petModel = require('../models/index');

module.exports = {
    getAllPets: function(filter, fields, cb) {
        petModel.find(filter, fields, cb);
    },
    getPets: function(filter, fields, numPets, cb) {
        petModel.find(filter, fields, {limit: numPets}, cb);
    },
    getPetDetails: function(id, cb) {
        petModel.findById(id, cb);
    }
}