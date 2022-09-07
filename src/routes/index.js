const express = require('express')
const router = express.Router()

const {
    getBookings,
    setBooking
} = require('../controller/bookingController')

router.route('/').get(getBookings).post(setBooking)

module.exports = router