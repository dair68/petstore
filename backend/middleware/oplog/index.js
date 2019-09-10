//all mongo oplog commands
module.exports = (oplog) => {
    //starts tailing
    oplog.tail().then(() => console.log('tailing started'))
        .catch(err => console.error(err));

    //logs the oplog document for each of the operations below    
    oplog.on('op', data => console.log(data));

    //insert operation
    oplog.on('insert', doc => console.log(doc));

    //update operation
    oplog.on('update', doc => console.log(doc));

    //delete operation
    oplog.on('delete', doc => console.log(doc.o._id));

    //error occured
    oplog.on('error', error => console.log(error));

    //cursor stream ended
    oplog.on('end', () => console.log('Stream ended'));

    //stop tailing and disconnect from server
    oplog.stop().then(() => console.log('tailing stopped'))
        .catch(err => console.error(err));
}