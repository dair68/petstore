const startingPets = require('./startingPets');

module.exports = {
    //removes all documents from collection
    clear: function (model) {
        //deleting all documents
        model.deleteMany({}, err => { if (err) { console.log(err) } });
    },

    //creates the starting documents in collection
    initialize: function (model) {
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
};