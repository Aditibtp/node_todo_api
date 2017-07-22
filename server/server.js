var express = require('express');
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo')
var {TodoUsers} = require('./models/todousers')

var app = express()

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})

app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
    console.log(req.body)
        var newTodo = new Todo({
            text: req.body.text
        });

        newTodo.save().then((result) => {
            console.log('Todo saved', result)
            res.send(doc)
        }, (err) => {
            res.status(400).send(err)
            console.log('Something went wrong', err)
        })
});


// var newTodo = new Todo({
//     text: "Cook Dinner",
//     completed: false
// })

// var newTodo2 = new Todo({
//     text: "Take a bath",
//     completed: false,
//     completedAt: (Date.now())
// })

// newTodo.save().then((result) => {
//     console.log('Todo saved', result)
// }, (err) => {
//     console.log('Something went wrong', err)
// })

// type casting exists in mongoose eg. text: true turns into "true"

// newTodo2.save().then((result) => {
//     console.log('Todo saved', result)
// }, (err) => {
//     console.log('Something went wrong', err)
// })

// var newUser = new TodoUsers({
//     name: "Meredith",
//     email: "mer@dith.com"
// })

// newUser.save().then((result) => {
//     console.log('User saved', result)
// }, (err) => {
//     console.log('User not saved', err)
// })