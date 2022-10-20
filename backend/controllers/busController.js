const asyncHandler = require('express-async-handler');

const Bus = require('../models/busModel');

// @desc Get bus
// @route GET /api/buss
// @access Private
const getBus = asyncHandler(async (req, res) => {
    const bus = await Bus.find()

    res.status(200).json(bus);
})

// @desc Set bus
// @route POST /api/bus
// @access Private
const setBus = asyncHandler(async (req, res) => {
    if (!req.body.seats) {
        res.status(404)
        throw new Error('Please add number of seats')
    }

    const bus = await Bus.create({
        seats: req.body.seats,
    })

    res.status(200).json(bus)
})

// @desc Update bus
// @route PUT /api/bus/:id
// @access Private
const updateBus = asyncHandler(async (req, res) => {
    const bus = await Bus.findById(req.params.id)

    if (!bus) {
        res.status(404)
        throw new Error('Bus not found')
    }

    const updatedBus = await Bus.findByIdAndUpdate(req.params.id, req.body, { new: true, })

    res.status(200).json( updatedBus )
})

module.exports = {
    getBus,
    setBus,
    updateBus,
}