const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: String,
    author: String,
    image: String,
    pages: {
        type: Number,
        required: true
    },
    description: String
})

exports.Book = mongoose.model('Book', bookSchema);
