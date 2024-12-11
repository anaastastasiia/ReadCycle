const mongoose = require('mongoose');

const orderItemSchema = mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    },
    quantity: {
        type: Number,
        required: true
    }
});

exports.OrderItem = mongoose.model('OrderItem', orderItemSchema);
