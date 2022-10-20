const mongoose = require('mongoose');

const busSchema = mongoose.Schema(
    {
        seats: {
            type: Number,
            required: [true, 'Please add number of seats in this bus'],
        },
    },
    { timestapms: true }
)

module.exports = mongoose.model('Bus', busSchema);