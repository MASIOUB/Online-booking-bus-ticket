const express = require('express')
const router = express.Router()

router.post("/register", (req, res, next) => {
    res.status(200).json({message: 'register user'})
})
router.post("/login", (req, res, next) => {
    res.status(200).json({message: 'login user'})
})
router.get("/me", (req, res, next) => {
    res.status(200).json({message: 'get user data'})
})

module.exports = router