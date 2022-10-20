const express = require('express')
const router = express.Router()
const {
    getBookings, setBooking, updateBooking
} = require('../controllers/bookingController')

router.route('/').get(getBookings).post(setBooking)

router.route('/:id').put(updateBooking)

module.exports = router