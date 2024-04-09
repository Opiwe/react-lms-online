const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    availableSeats: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    videoLink: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    instructorName: {
        type: String,
        required: true
    },
    instructorEmail: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    submitted: {
        type: Date,
        default: Date.now
    },
    totalEnrolled: {
        type: Number,
        default: 0
    },
    reason: {
        type: String,
        default: null
    }
});

module.exports = mongoose.model('Course', CourseSchema);