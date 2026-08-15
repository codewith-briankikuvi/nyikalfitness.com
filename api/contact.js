import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, phone, service, message } = req.body || {}

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields (name, email, and message are required).' })
    }

    const host = process.env.SMTP_HOST || 'smtp.gmail.com'
    const port = parseInt(process.env.SMTP_PORT || '587', 10)
    const user = process.env.SMTP_USER || 'charlesnyikal52@gmail.com'
    const pass = process.env.SMTP_PASS || 'vrul rmhq qxvg vjgn'
    const from = process.env.SMTP_FROM || user

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    })

    const mailOptions = {
      from: `"Nyikal Fitness" <${from}>`,
      to: 'charlesnyikal52@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #1a1a1a; color: #ffffff; border-radius: 12px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
          <div style="border-bottom: 2px solid #81C704; padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="color: #81C704; margin: 0 0 8px 0; font-size: 24px;">🏋️ New Contact Inquiry</h2>
            <p style="color: #aaaaaa; margin: 0; font-size: 14px;">Received via nyikalfitness.com contact form</p>
          </div>
          
          <div style="background-color: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <p style="margin: 0 0 12px 0; font-size: 16px;"><strong>Name:</strong> <span style="color: #ffffff;">${name}</span></p>
            <p style="margin: 0 0 12px 0; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #81C704; text-decoration: none;">${email}</a></p>
            ${phone ? `<p style="margin: 0 0 12px 0; font-size: 16px;"><strong>Phone:</strong> <span style="color: #ffffff;">${phone}</span></p>` : ''}
            ${service ? `<p style="margin: 0 0 12px 0; font-size: 16px;"><strong>Service Interest:</strong> <span style="background-color: #81C704; color: #000000; padding: 3px 10px; border-radius: 20px; font-weight: bold; font-size: 14px;">${service}</span></p>` : ''}
          </div>

          <div style="background-color: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 20px;">
            <p style="margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; color: #81C704; font-weight: bold; letter-spacing: 1px;">Message:</p>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #dddddd; font-size: 15px;">${message}</p>
          </div>

          <div style="margin-top: 24px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 16px;">
            <p style="margin: 0; font-size: 12px; color: #888888;">Nyikal Fitness Website Contact System</p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return res.status(200).json({ success: true, message: 'Message delivered successfully!' })
  } catch (error) {
    console.error('Contact Form Error:', error)
    return res.status(500).json({ error: error.message || 'Failed to send message.' })
  }
}
