const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
        quantity: Number
    }],
    totalPrice: Number,
    date: { type: Date, default: Date.now },
    isOpen: Boolean,
    payment: String,
});

module.exports = mongoose.model('Order', OrderSchema);