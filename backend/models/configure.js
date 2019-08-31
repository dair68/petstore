const startingPets = require('./startingPets');

//creates the starting documents in collection
const initializeCollection = function (model) {
    //deleting existing documents
    model.deleteMany({}, function (err) {
        if (err) {
            console.log(err);
        }
        //inserting premade documents
        model.insertMany(startingPets, function (err, pets) {
            if (err) {
                console.log(err);
            }
            console.log("Collection initialized with the following docs: " + pets);
        });
    });
}

module.exports = {
    initializeCollection: initializeCollection
};