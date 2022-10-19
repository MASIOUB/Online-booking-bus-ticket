const bcrypt = require('bcryptjs');

const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');

// @desc Register new user
// @route Post /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { full_name, email, password, phone } = req.body;

    if (!full_name || !email || !password || !phone) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if user exists
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        full_name,
        email,
        password: hashedPassword,
        phone,
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            full_name: user.full_name,
            email: user.email,
            phone: user.phone,
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc Authenticate a user
// @route Post /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'login user function'});
})

// @desc Get user data
// @route GET /api/users/me
// @access Public
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'get user data function'});
})

module.exports = {
    registerUser,
    loginUser,
    getMe,
}