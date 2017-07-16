const {MongoClient, ObjectId} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to mongo db server')
    }
    console.log('Connected to mongo db service')

    db.collection('Todos').insertOne({
        text: 'Finish up mongo',
        completed: true
    }, (err, result) => {
        if(err){
            return console.log('unable to insert todo', err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    })

    // db.collection('TodoUsers').insertOne({
    //     name: 'Derek',
    //     // _id: 123, also valid
    //     location: 'Seattle'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('unable to insert todo', err)
    //     }
    //     //_id is made of timestamp, client id, process id and last 3 bytes from random number
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
    // })

    

    db.close()
})