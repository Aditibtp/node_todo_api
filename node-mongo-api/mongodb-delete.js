const {MongoClient, ObjectId} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to mongo db server')
    }
    console.log('Connected to mongo db service') 

    //delete many

    // db.collection('Todos').deleteMany({text: 'Sing a song'}).then((result)=>{
    //     console.log(result)
    // })

    //delete one -- delete first item that matches the criteria

    // db.collection('Todos').deleteOne({text: 'Sing along'}).then((result)=>{
    //     console.log(result)
    // })

    //find one and delete

    db.collection('Todos').findOneAndDelete({completed: false}).then((doc)=>{
        console.log(doc)
    })
})