const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your product name!'],
    },
    description: {
        type: String,
        required: [true, 'Please enter your product description!'],
    },
    category: {
        type: String,
        required: [true, 'Please enter your product category!'],
    },
    tags: {
        type: String,
    },
    originalPrice: {
        type: String,
        required: [true, 'Please enter your product originalPrice!'],
    },
    discountPrice: {
        type: String,
        required: [true, 'Please enter your product discountPrice!'],
    },
    stock: {
        type: String,
        required: [true, 'Please enter your product stock!'],
    },
    images: [
        {
            type: String,
        }
    ],
    shopId: {
        type: String,
        required: true,
    },
    shop: {
        type: Object,
        default: true,
    },
    sold_out: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Product', productSchema);
