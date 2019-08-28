var express = require('express');
var petModel = require('../models/index');
var handleError = require('./handleError');

var router = express.Router();

router.get('/', (req, res) => res.send('Welcome to the Petting Zoo!'));

router.get('/api/pets', function (req, res) {
    petModel.find(function (err, docs) {
        if (err) {
            handleError(res, err.message, 'could not obtain pets');
        }

        res.send(docs);
    });
});

router.get('/api/pets/:numPets', function (req, res) {
    var numPets = +(req.params.numPets);
    
    petModel.find({}, null, {limit: numPets}, function (err, docs) {
        if (err) {
            handleError(res, err.message, 'could not obtain pets');
        }

        res.send(docs);
    });
});

router.get('/api/pet-details/:id', function (req, res) {
    var id = req.params.id;
    
    petModel.findById(id, function (err, pet) {
        if (err) {
            handleError(res, err.message, 'could not find pet-details');
        }

        res.send(pet);
    });
});

module.exports = router;