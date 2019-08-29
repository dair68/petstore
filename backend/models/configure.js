const startingPets = require('./startingPets');

//initializes starting documents in collection
const initializeCollection = function(model) {
    model.deleteMany({}, function(err) {
        if(err) {
            console.log(err);
        }

        model.insertMany(startingPets, function(err, docs) {
            if(err) {
                console.log(err);
            }

            console.log("Collection initialized with the following docs: " + docs);
        });
    });
}

module.exports = {
    initializeCollection: initializeCollection
};