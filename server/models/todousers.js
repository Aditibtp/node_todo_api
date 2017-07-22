var mongoose = require('mongoose')

var TodoUsers = mongoose.model('TodoUsers', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    email:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = { TodoUsers }