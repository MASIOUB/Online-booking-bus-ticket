const express = require('express')
const router = express.Router()
const {
    getTrips, setTrip, updateTrip
} = require('../controllers/tripController')

router.route('/').get(getTrips).post(setTrip)

router.route('/:id').put(updateTrip)

module.exports = router