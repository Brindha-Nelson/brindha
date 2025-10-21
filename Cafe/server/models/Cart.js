const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    items: [{
        title: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        description: String,
        image: String,
        quantity: {
            type: Number,
            default: 1,
            min: 1
        }
    }],
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Update the timestamp when cart is modified
CartSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Cart', CartSchema); 