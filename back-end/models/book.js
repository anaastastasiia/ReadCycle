const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    images: [{
        type: String
    }],
    pages: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    edition: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    year: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    numReviews: {
        type: Number,
        default: 0
    }
})

exports.Book = mongoose.model('Book', bookSchema);
