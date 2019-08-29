const express = require('express');
const petModel = require('../models/index');
const handleError = require('./handleError');

const router = express.Router();

router.get('/', (req, res) => res.send('Welcome to the Petting Zoo!'));

router.get('/api/pets/:numPets', function (req, res) {
    const numPets = +(req.params.numPets);
    
    petModel.find({}, null, {limit: numPets}, function (err, docs) {
        if (err) {
            handleError(res, err.message, 'could not obtain pets');
        }

        res.send(docs);
    });
});

router.get('/api/pet-details/:id', function (req, res) {
    const id = req.params.id;
    
    petModel.findById(id, function (err, pet) {
        if (err) {
            handleError(res, err.message, 'could not find pet-details');
        }

        res.send(pet);
    });
});

module.exports = router;