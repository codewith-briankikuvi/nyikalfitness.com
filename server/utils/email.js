import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// Send contact form email
export const sendContactEmail = async ({ name, email, phone, service, contactMethod, message }) => {
  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: 'charlesnyikal52@gmail.com',
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #81C704;">New Contact Form Submission</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${service ? `<p><strong>Service Interest:</strong> ${service}</p>` : ''}
          ${contactMethod ? `<p><strong>Preferred Contact Method:</strong> ${contactMethod}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <p style="margin-top: 20px; color: #666;">
          This message was sent from the Nyikal Fitness website contact form.
        </p>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
}

// Send confirmation email to user
export const sendConfirmationEmail = async (email, name) => {
  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: email,
    subject: 'Thank you for contacting Nyikal Fitness',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #81C704;">Thank You, ${name}!</h2>
        <p>Thank you for reaching out to Nyikal Fitness. We have received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to:</p>
        <ul>
          <li>Follow us on Instagram: <a href="https://instagram.com/fitnyikal">@fitnyikal</a></li>
          <li>Explore our services on our website</li>
          <li>Check out our client transformations</li>
        </ul>
        <p style="margin-top: 20px; color: #666;">
          Best regards,<br>
          Coach Fitnyikal<br>
          Nyikal Fitness
        </p>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
}
