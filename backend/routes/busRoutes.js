const express = require('express')
const router = express.Router()
// const {
//     getBus, setBus, updateBus
// } = require('../controllers/busController')

router.route('/').get((req, res) => {res.status(200).json({message: 'get bus'})})
.post((req, res) => {res.status(200).json({message: 'set bus'})})

router.route('/:id').put((req, res) => {res.status(200).json({message: 'update bus'})})

// router.post("/register", registerUser)
// router.post("/login", loginUser)
// router.get("/me", protect, getMe)

module.exports = router