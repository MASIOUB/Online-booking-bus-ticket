const User = require('../models/userModel');

// @desc Register new user
// @route Post /api/users
// @access Public
const registerUser = (req, res) => {
    res.status(200).json({message: 'register user function'});
}

// @desc Authenticate a user
// @route Post /api/users/login
// @access Public
const loginUser = (req, res) => {
    res.status(200).json({message: 'login user function'});
}

// @desc Get user data
// @route GET /api/users/me
// @access Public
const getMe = (req, res) => {
    res.status(200).json({message: 'get user data function'});
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
}