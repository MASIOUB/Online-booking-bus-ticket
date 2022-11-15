const mongoose = require('mongoose');

const tripSchema = mongoose.Schema(
    {
        from: {
            type: String,
            required: [true, 'Please add the start station'],
        },
        to: {
            type: String,
            required: [true, 'Please add the return station']
        },
        date: {
            type: String,
            required: [true, 'Please add the date'],
        },
        time: {
            type: String,
            required: [true, 'Please add the time'],
        },
        price: {
            type: String,
            required: [true, 'Please add the price'],
        },
        bus: {
            type: mongoose.Schema.Types.ObjectId,
            reqired: true,
            ref: "Bus",
        }
    },
    { timestapms: true }
)

module.exports = mongoose.model('Trip', tripSchema);
