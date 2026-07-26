const { readJsonFile, writeJsonFile } = require('../utils/dataStore')
const { validateBooking } = require('../utils/validation')

async function submitBooking(req, res, next) {
  try {
    const { name, email, selectedCourse, preferredDate, message } = req.body
    const error = validateBooking({ name, email, selectedCourse, preferredDate, message })

    if (error) {
      return res.status(400).json({ success: false, message: error })
    }

    const booking = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      selectedCourse: selectedCourse.trim(),
      preferredDate: preferredDate.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    }

    const bookings = readJsonFile('bookings.json', [])
    bookings.push(booking)
    writeJsonFile('bookings.json', bookings)

    console.log('New booking inquiry:', booking)

    res.status(201).json({
      success: true,
      message: 'Your booking inquiry has been submitted successfully!',
      data: { id: booking.id },
    })
  } catch (err) {
    next(err)
  }
}

module.exports = { submitBooking }
