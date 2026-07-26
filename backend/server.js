require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require('path')
const contactRoutes = require('./routes/contactRoutes')
const bookingRoutes = require('./routes/bookingRoutes')
const { getCourses, getTestimonials } = require('./controllers/contentController')
const errorHandler = require('./middleware/errorHandler')

const app = express()
const PORT = process.env.PORT || 5000

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
)
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ success: true, message: 'Siatara Hussain API is running' })
})

app.use('/api/contact', contactRoutes)
app.use('/api/booking', bookingRoutes)
app.get('/api/courses', getCourses)
app.get('/api/testimonials', getTestimonials)

if (process.env.NODE_ENV === 'production') {
  const frontendDist = path.join(__dirname, '../frontend/dist')
  app.use(express.static(frontendDist))
  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(frontendDist, 'index.html'))
  })
}

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
