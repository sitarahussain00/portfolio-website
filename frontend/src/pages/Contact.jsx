import { useState, useCallback } from 'react'
import { Send, Loader2 } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import SectionHeading from '../components/SectionHeading'
import Toast from '../components/Toast'

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-warmBeige bg-ivory text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-secondaryBlush/40 focus:border-secondaryBlush transition-colors'

function validateContactForm(form) {
  if (!form.name.trim()) return 'Full name is required.'
  if (!form.email.trim()) return 'Email is required.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Enter a valid email.'
  if (!form.phone.trim()) return 'Phone number is required.'
  if (!form.subject.trim()) return 'Please add a subject or area of interest.'
  if (!form.message.trim()) return 'Message is required.'
  if (form.message.trim().length < 10) return 'Message must be at least 10 characters.'
  return null
}

export default function Contact() {
  const ref = useScrollAnimation()
  const [toast, setToast] = useState({ message: '', type: 'success' })

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [contactLoading, setContactLoading] = useState(false)
  const [contactError, setContactError] = useState('')

  const dismissToast = useCallback(() => setToast({ message: '', type: 'success' }), [])

  const handleContactChange = (e) => {
    setContactForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setContactError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationError = validateContactForm(contactForm)
    if (validationError) {
      setContactError(validationError)
      return
    }

    setContactLoading(true)
    setContactError('')

    try {
      const response = await fetch('https://formspree.io/f/mpqvkqwg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          phone: contactForm.phone,
          subject: contactForm.subject,
          message: contactForm.message,
          _replyto: contactForm.email,
          _subject: `Portfolio inquiry: ${contactForm.subject}`,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setToast({
        message: 'Thank you! Your message has been received. I will get back to you soon.',
        type: 'success',
      })
      setContactForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      setToast({
        message: 'Something went wrong. Please try again or email me directly.',
        type: 'error',
      })
    } finally {
      setContactLoading(false)
    }
  }

  return (
    <div className="pt-24 md:pt-28 pb-10 md:pb-12 bg-ivory">
      <Toast message={toast.message} type={toast.type} onClose={dismissToast} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Let's Connect"
          subtitle="Reach out for project coordination, QA collaboration, Agile support, or career guidance."
        />

        <div ref={ref} className="animate-on-scroll max-w-3xl mx-auto">
          <div className="card-base rounded-2xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-charcoal mb-1.5">
                    Full Name <span className="text-dustyRose">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={handleContactChange}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-charcoal mb-1.5">
                    Email Address <span className="text-dustyRose">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={handleContactChange}
                    className={inputClass}
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-charcoal mb-1.5">
                    Phone Number <span className="text-dustyRose">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    value={contactForm.phone}
                    onChange={handleContactChange}
                    className={inputClass}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-charcoal mb-1.5">
                    Subject or Area of Interest <span className="text-dustyRose">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={contactForm.subject}
                    onChange={handleContactChange}
                    className={inputClass}
                    placeholder="e.g. QA collaboration, Agile support"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-charcoal mb-1.5">
                  Message <span className="text-dustyRose">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={contactForm.message}
                  onChange={handleContactChange}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me a little about your project or how I can help..."
                />
              </div>

              {contactError && (
                <p className="text-sm text-red-600">{contactError}</p>
              )}

              <button
                type="submit"
                disabled={contactLoading}
                className="inline-flex items-center gap-2 btn-primary text-white px-8 py-3.5 rounded-full text-base font-medium transition-all duration-300 disabled:opacity-60"
              >
                {contactLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {contactLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
