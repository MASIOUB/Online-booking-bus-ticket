const express = require('express')
const router = express.Router()
const {
    getBus, setBus, updateBus
} = require('../controllers/busController')

router.route('/').get(getBus).post(setBus)

router.route('/:id').put(updateBus)

module.exports = router