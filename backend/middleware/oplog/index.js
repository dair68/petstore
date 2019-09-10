//all mongo oplog commands
module.exports = (oplog) => {
    //starts tailing
    oplog.tail().then(() => console.log('tailing started'))
        .catch(err => console.error(err));

    oplog.on('op', data => console.log(data));

    //insert oplog
    oplog.on('insert', doc => console.log(doc));

    //update oplog
    oplog.on('update', doc => console.log(doc));

    //delete oplog
    oplog.on('delete', doc => console.log(doc.o._id));

    //error oplog
    oplog.on('error', error => console.log(error));

    //terminating oplog
    oplog.on('end', () => console.log('Stream ended'));

    //server stop oplog
    oplog.stop(() => console.log('server stopped'));
}