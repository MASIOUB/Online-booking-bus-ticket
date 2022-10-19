const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        full_name: {
            type: String,
            required: [true, 'Please add your name'],
        },
        email: {
            type: String,
            lowercase: true,
            required: [true, 'Please add your email'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please add new password'],
        },
        phone: {
            type: String,
            required: [true, 'Please add your phone number'],
        },
        role: {
            type: String,
            enum: ['admin', 'customer'],
            default: 'customer',
        }
    },
    { timestapms: true }
)

module.exports = mongoose.model('User', userSchema);