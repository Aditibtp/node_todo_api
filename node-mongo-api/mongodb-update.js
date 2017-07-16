const {MongoClient, ObjectId} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to mongo db server')
    }
    console.log('Connected to mongo db service') 

    db.collection('Todos').findOneAndUpdate({
            _id: new ObjectId('596b68a2e160178169125774')},
           { $set: {completed: false}}, {returnOriginal: false}).then((result) => {
               console.log(result)
           })

    db.collection('TodoUsers').findOneAndUpdate({
            _id: new ObjectId('596b3b9bc404ad642af730a1')},
           { $inc: { age: 1 }, $set: {name: 'Derek Shepherd'}} , {returnOriginal: false} ).then((result) => {
               console.log(result)
           })       
})

//596b3b9bc404ad642af730a1