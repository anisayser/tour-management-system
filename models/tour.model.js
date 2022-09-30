const mongoose = require("mongoose");

//TOUR SCHEMA
const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please give a name to this Tour.'],
        trim: true,
        unique: [true, 'this name exists. Please privide a unique tour name.'],
        minLength: [10, 'Tour name must be at least 10 charecters.'],
        maxLength: [150, 'Tour name munst be less then 151 charecters.']
    },
    cost: {
        type: Number,
        required: [true, 'Please provide the cost of the tour.'],
        min: [0, 'Tour cost can not be negative.'],
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    views: {
        type: Number,
        default: 0
    }
}, { timeStamps: true });

//TOUR MODEL
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;