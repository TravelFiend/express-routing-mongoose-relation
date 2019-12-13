const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    recipeId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Recipe'
    },
    dateOfEvent: {
        type: Date,
        required: true
    },
    notes: {
        type: String,
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    }
});

module.exports = mongoose.model('Attempt', schema);
