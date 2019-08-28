var express = require('express');
var controller = require('../controller');
var router = express.Router();

console.log("obtaining routes");

router.get('/', function (req, res) {
    res.send('Welcome to the Petting Zoo!');
});

router.get('/api/pets', function (req, res) {
    controller.getAllPets(req.body, null, function (err, docs) {
        if (err) {
            console.log(err);
        }

        res.send(docs);
    });
})

router.get('/api/pets/:numPets', function (req, res) {
    controller.getPets(req.body, null, +(req.params.numPets), function (err, docs) {
        if (err) {
            console.log(err);
        }

        res.send(docs);
    });
})

router.get('/api/pet-details/:id', function (req, res) {
    controller.getPetDetails(req.params.id, function(err, pet) {
        if(err) {
            console.log(err);
        }

        res.send(pet);
    });
})

module.exports = router;