const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');

// @desc Register new user
// @route Post /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    if (!req.body.name){
        res.status(400)
        throw new Error('Please fill all fields')
    }

    res.status(200).json({message: 'register user function'});
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