import express from 'express'
import nodemailer from 'dotenv'
import { sendContactEmail } from '../utils/email.js'

const router = express.Router()

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, contactMethod, message, consent } = req.body

    // Validation
    if (!name || !email || !message || !consent) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    if (!consent) {
      return res.status(400).json({ error: 'Consent is required' })
    }

    // Send email
    await sendContactEmail({ name, email, phone, service, contactMethod, message })

    res.status(200).json({ 
      success: true, 
      message: 'Contact form submitted successfully. We will get back to you soon.' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ 
      error: 'Failed to submit contact form. Please try again or contact us directly.' 
    })
  }
})

export default router
