const express = require('express');
const petModel = require('../models/index');
const handleError = require('./handleError');

const router = express.Router();

//default route
router.get('/', (req, res) => res.send('Welcome to the Petting Zoo!'));

//obtains all pets from database
router.get('/api/pets', function (req, res) {
    //querying for all pets from collection 
    petModel.find({}, function (err, pets) {
        if (err) {
            handleError(res, err.message, 'could not obtain pets');
        }
        res.send(pets);
    });
});

//obtains single pet from database using pet id in url
router.get('/api/pet/:id', function (req, res) {
    //querying for pet by id
    petModel.findById(req.params.id, function (err, pet) {
        if (err) {
            handleError(res, err.message, 'could not find pet-details');
        }
        res.send(pet);
    });
});

//adds a pet to database
router.post('/api/pet', function (req, res) {
    //creating new document
    petModel.create(req.body, function (err, pet) {
        if (err) {
            handleError(res, err.message, 'could not add pet');
        }
        res.send(pet);
    })
});

module.exports = router;