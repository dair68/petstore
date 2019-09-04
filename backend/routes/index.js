const express = require('express');
const Pet = require('../models/index');
const handleError = require('./handleError');

const router = express.Router();

//default route
router.get('/', (req, res) => res.send('Welcome to the Petting Zoo!'));

//obtains all pets from database
router.get('/api/pets', function (req, res) {
    //optional search query fields from url
    queryParams = ['name', 'species', 'sex', 'in_stock'];
    defaultSpecies = ['dog', 'cat', 'rabbit', 'fish', 'bird'];

    const filter = {};

    //adding optional fields to database request
    for (let i = 0; i < queryParams.length; i++) {
        const param = queryParams[i];
        
        //checking if query option has been given in url
        if(req.query[param]) {
            //special case for {species: 'other'}
            if(param === 'species' && req.query[param] === 'other') {
                filter.species = {$nin: defaultSpecies};
            }
            //adds this query info to database filter
            else {
                filter[param] = req.query[param];
            }
        }
    }

    //querying for all pets from collection 
    Pet.find(filter, function (err, pets) {
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
    const id = req.params.id;

    //querying for pet by id
    Pet.findById(id, function (err, pet) {
        if (err) {
            handleError(res, err.message, 'could not find pet-details');
        }
        res.send(pet);
    });
});

//updates pet to not in stock
router.put('/api/pet/sell/:id', function (req, res) {
    const id = req.params.id;

    //querying for pet by id
    Pet.findByIdAndUpdate(id, { in_stock: false }, { new: true }, function (err, pet) {
        if (err) {
            handleError(res, err.message, 'could not sell pet');
        }
        res.send(pet);
    });
});

//edits pet 
router.put('/api/pet/:id', function (req, res) {
    const id = req.params.id;
    const pet = req.body;

    //querying for pet by id
    Pet.findByIdAndUpdate(id, pet, { new: true }, function (err, edittedPet) {
        if (err) {
            handleError(res, err.message, 'could not edit pet');
        }
        res.send(edittedPet);
    });
})

//adds a pet to database
router.post('/api/pet', function (req, res) {
    const pet = req.body;

    //creating new document
    Pet.create(pet, function (err, newPet) {
        if (err) {
            handleError(res, err.message, 'could not add pet');
        }
        res.send(newPet);
    })
});

//deletes pet from database
router.delete('/api/pet/:id', function (req, res) {
    const id = req.params.id;

    //deleting document
    Pet.deleteOne({ _id: id }, function (err) {
        if (err) {
            handleError(res, err.message, 'could not delete pet');
        }
        res.send('deleted pet ' + id);
    });
});

module.exports = router;