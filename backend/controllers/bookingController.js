const asyncHandler = require('express-async-handler');

const Booking = require('../models/tripModel');

// @desc Get bookings
// @route GET /api/bookings
// @access Private
const getBookings = asyncHandler(async (req, res) => {
    const bookings = await Booking.find()

    res.status(200).json(bookings);
})

// @desc Set booking
// @route POST /api/bookings
// @access Private
const setBooking = asyncHandler(async (req, res) => {
    if (!req.body.user || !req.body.trip || !req.body.seat) {
        res.status(404)
        throw new Error('Please fill all fields')
    }

    const booking = await Booking.create({
        user: req.body.user,
        trip: req.body.trip,
        seat: req.body.seat,
    })

    res.status(200).json(booking)
})

// @desc Update booking
// @route PUT /api/bookings/:id
// @access Private
const updateBooking = asyncHandler(async (req, res) => {
    const booking = await Booking.findById(req.params.id)

    if (!booking) {
        res.status(404)
        throw new Error('Booking not found')
    }

    const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true, })

    res.status(200).json( updatedBooking )
})

module.exports = {
    getBookings,
    setBooking,
    updateBooking,
}