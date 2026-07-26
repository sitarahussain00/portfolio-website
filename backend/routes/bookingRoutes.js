const express = require('express')
const { submitBooking } = require('../controllers/bookingController')

const router = express.Router()

router.post('/', submitBooking)

module.exports = router
