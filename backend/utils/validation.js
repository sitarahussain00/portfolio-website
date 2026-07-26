const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateEmail(email) {
  return EMAIL_REGEX.test(email?.trim())
}

function validateContact({ name, email, phone, message }) {
  if (!name?.trim()) return 'Name is required.'
  if (!email?.trim()) return 'Email is required.'
  if (!validateEmail(email)) return 'Please provide a valid email address.'
  if (!phone?.trim()) return 'Phone is required.'
  if (!message?.trim()) return 'Message is required.'
  if (message.trim().length < 10) return 'Message must be at least 10 characters.'
  return null
}

function validateBooking({ name, email, selectedCourse, preferredDate, message }) {
  if (!name?.trim()) return 'Name is required.'
  if (!email?.trim()) return 'Email is required.'
  if (!validateEmail(email)) return 'Please provide a valid email address.'
  if (!selectedCourse?.trim()) return 'Please select a course.'
  if (!preferredDate?.trim()) return 'Preferred date is required.'
  if (!message?.trim()) return 'Message is required.'
  return null
}

module.exports = { validateContact, validateBooking }
