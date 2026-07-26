const { readJsonFile } = require('../utils/dataStore')

function getCourses(_req, res, next) {
  try {
    const courses = readJsonFile('courses.json', [])
    res.json({ success: true, data: courses })
  } catch (err) {
    next(err)
  }
}

function getTestimonials(_req, res, next) {
  try {
    const testimonials = readJsonFile('testimonials.json', [])
    res.json({ success: true, data: testimonials })
  } catch (err) {
    next(err)
  }
}

module.exports = { getCourses, getTestimonials }
