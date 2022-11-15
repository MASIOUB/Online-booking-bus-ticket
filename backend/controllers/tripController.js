const asyncHandler = require('express-async-handler');

const Trip = require('../models/tripModel');

// @desc Get trips
// @route GET /api/trips
// @access Private
const getTrips = asyncHandler(async (req, res) => {
    const trips = await Trip.find()

    res.status(200).json(trips);
})

// @desc Get trips after a search
// @route GET /api/trips
// @access Private
const getAvailableTrip = asyncHandler(async (req, res) => {
    const { from, to, date } = req.query;
    
    const trips= await Trip.find({ from, to, date })
    
    if(trips.length > 0){
            res.status(200).json(trips);
    }else{
        res.status(400)
        throw new Error('not trips found')
    }
})

// @desc Set trip
// @route POST /api/trips
// @access Private
const setTrip = asyncHandler(async (req, res) => {
    if (!req.body.from || !req.body.to || !req.body.date || !req.body.time || !req.body.price || !req.body.bus) {
        res.status(404)
        throw new Error('Please fill all fields')
    }

    const trip = await Trip.create({
        from: req.body.from,
        to: req.body.to,
        date: req.body.date,
        time: req.body.time,
        price: req.body.price,
        bus: req.body.bus,
    })

    res.status(200).json(trip)
})

// @desc Update trip
// @route PUT /api/trips/:id
// @access Private
const updateTrip = asyncHandler(async (req, res) => {
    const trip = await Trip.findById(req.params.id)

    if (!trip) {
        res.status(404)
        throw new Error('Trip not found')
    }

    const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true, })

    res.status(200).json( updatedTrip )
})

module.exports = {
    getTrips,
    setTrip,
    updateTrip,
    getAvailableTrip,
}