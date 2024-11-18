const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name: {
        type: String
    }
})

exports.Order = mongoose.model('Order', orderSchema);
