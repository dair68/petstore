const express = require('express');
const Pet = require('../models/index');
const handleError = require('./handleError');

const router = express.Router();

//default route
router.get('/', (req, res) => res.send('Welcome to the Petting Zoo!'));

//obtains all pets from database
router.get('/api/pets', function (req, res) {
    //querying for all pets from collection 
    Pet.find({}, function (err, pets) {
        if (err) {
            handleError(res, err.message, 'could not obtain pets');
        }
        res.send(pets);
    });
});

//obtains a certain number of pet images
router.get('/api/pets/images/:num', function (req, res) {
    //searching for documents with images
    const filter = { image: { $exists: true, $ne: '' } };
    //specifying document fields to query
    const fields = 'name species sex image';
    const num = +(req.params.num);

    //querying for pet images and minimal data from collection
    Pet.find(filter, fields, { limit: num }, function (err, images) {
        if (err) {
            handleError(res, err.message, 'could not obtain images');
        }
        res.send(images);
    });
});

//obtains single pet from database
router.get('/api/pet/:id', function (req, res) {
    //querying for pet by id
    Pet.findById(req.params.id, function (err, pet) {
        if (err) {
            handleError(res, err.message, 'could not find pet-details');
        }
        res.send(pet);
    });
});

//adds a pet to database
router.post('/api/pet', function (req, res) {
    //creating new document
    Pet.create(req.body, function (err, pet) {
        if (err) {
            handleError(res, err.message, 'could not add pet');
        }
        res.send(pet);
    })
});

module.exports = router;