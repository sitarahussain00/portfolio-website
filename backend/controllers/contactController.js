const { readJsonFile, writeJsonFile } = require('../utils/dataStore')
const { validateContact } = require('../utils/validation')

async function submitContact(req, res, next) {
  try {
    const { name, email, phone, message } = req.body
    const error = validateContact({ name, email, phone, message })

    if (error) {
      return res.status(400).json({ success: false, message: error })
    }

    const submission = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    }

    const messages = readJsonFile('messages.json', [])
    messages.push(submission)
    writeJsonFile('messages.json', messages)

    console.log('New contact message:', submission)

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      data: { id: submission.id },
    })
  } catch (err) {
    next(err)
  }
}

module.exports = { submitContact }
