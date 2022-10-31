const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');

// @desc Register new user
// @route Post /api/users
// @access Private
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
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc Authenticate a user
// @route Post /api/users/login
// @access Private
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if(!email || !password) {
        res.status(400)
        throw new Error('Please add all fields');
    }

    // Check for user email
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {

        res.status(200).json({
            user: user,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

// @desc Get user data
// @route GET /api/users/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})

// @desc Get users
// @route GET /api/users
// @access Private
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find()

    res.status(200).json(users);
})

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
    getUsers,
}