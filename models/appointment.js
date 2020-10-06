const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    services: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
