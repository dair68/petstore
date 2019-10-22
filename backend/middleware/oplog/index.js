//all mongo oplog commands
module.exports = (oplog, collection, client) => {
    //starts tailing
    oplog.tail().then(() => console.log('tailing started'))
        .catch(err => console.error(err));

    //logs the oplog document for each of the operations below    
    oplog.on('op', data => {
        console.log(data);

        // storing oplog in collection
        collection.insertOne(data, function(err, res) {
            //error occured
            if(err) {
                console.log(err);
            }

            console.log("oplog tracking successful");
        });
    });

    //insert operation
    oplog.on('insert', doc => console.log('inserted doc ' + doc.o._id));

    //update operation
    oplog.on('update', doc => console.log('updated doc ' + doc.o2._id));

    //delete operation
    oplog.on('delete', doc => console.log('deleted doc ' + doc.o._id));

    //error occured
    oplog.on('error', error => console.log(error));

    //cursor stream ended
    oplog.on('end', function() {
        console.log('Stream ended');
        client.close();
    });

    //stop tailing and disconnect from server
    oplog.stop().then(() => console.log('tailing stopped'))
        .catch(err => console.error(err));
}