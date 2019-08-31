const express = require('express');
const petModel = require('../models/index');
const handleError = require('./handleError');

const router = express.Router();

router.get('/', (req, res) => res.send('Welcome to the Petting Zoo!'));

router.get('/api/pets', function (req, res) {

    petModel.find({}, function (err, pets) {
        if (err) {
            handleError(res, err.message, 'could not obtain pets');
        }

        res.send(pets);
    });
});

router.get('/api/pet/:id', function (req, res) {
    
    petModel.findById(req.params.id, function (err, pet) {
        if (err) {
            handleError(res, err.message, 'could not find pet-details');
        }

        res.send(pet);
    });
});

router.post('/api/pet', function (req, res) {
    petModel.create(req.body, function (err, pet) {
        if (err) {
            handleError(res, err.message, 'could not add pet');
        }

        res.send(pet);
    })
});

module.exports = router;