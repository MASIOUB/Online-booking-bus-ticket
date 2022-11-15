const express = require('express')
const router = express.Router()
const {
    getTrips, setTrip, updateTrip, getAvailableTrip
} = require('../controllers/tripController')

router.route('/').get(getTrips).post(setTrip)

router.route('/searchTrips').get(getAvailableTrip)

router.route('/:id').put(updateTrip)

module.exports = router