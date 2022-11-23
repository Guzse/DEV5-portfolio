const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    user: {
        required: true,
        type: String
    },
    message: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Message', dataSchema)