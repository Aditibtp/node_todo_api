const {MongoClient, ObjectId} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to mongo db server')
    }
    console.log('Connected to mongo db service') 

    db.collection('Todos').find({completed: false}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to fetch data')
    });

    db.collection('TodoUsers').find({name: 'Meredith'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to fetch data')
    });

    db.collection('TodoUsers').find({name: 'Meredith'}).count().then((count) => {
        console.log('Todo Users ', count)
    }, (err) => {
        console.log('Unable to fetch data')
    });
})