# EmailJS Template Setup Instructions

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to Email Services → Add New Service
2. Choose "Gmail" (or your preferred email provider)
3. Follow the instructions to connect your email account
4. Copy the **Service ID** and add it to your `.env` file

## Step 3: Create Email Template
1. Go to Email Templates → Create New Template
2. Use the following HTML template:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission - Nyikal Fitness</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            color: #ffffff;
            margin: 0;
            font-size: 28px;
            font-weight: bold;
        }
        .header p {
            color: #ffffff;
            margin: 10px 0 0 0;
            font-size: 16px;
            opacity: 0.9;
        }
        .content {
            padding: 30px;
        }
        .section {
            margin-bottom: 25px;
            padding-bottom: 25px;
            border-bottom: 1px solid #e5e5e5;
        }
        .section:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        .label {
            font-size: 12px;
            text-transform: uppercase;
            color: #666666;
            font-weight: 600;
            margin-bottom: 5px;
            letter-spacing: 1px;
        }
        .value {
            font-size: 16px;
            color: #333333;
            line-height: 1.6;
        }
        .value strong {
            color: #22c55e;
        }
        .message-box {
            background-color: #f9f9f9;
            padding: 20px;
            border-left: 4px solid #22c55e;
            border-radius: 5px;
            margin-top: 10px;
        }
        .footer {
            background-color: #1a1a1a;
            padding: 20px;
            text-align: center;
        }
        .footer p {
            color: #ffffff;
            margin: 5px 0;
            font-size: 14px;
        }
        .footer a {
            color: #22c55e;
            text-decoration: none;
        }
        .badge {
            display: inline-block;
            background-color: #22c55e;
            color: #ffffff;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏋️ Nyikal Fitness</h1>
            <p>New Contact Form Submission</p>
        </div>
        
        <div class="content">
            <div class="section">
                <div class="label">From</div>
                <div class="value">
                    <strong>{{from_name}}</strong><br>
                    {{from_email}}
                </div>
            </div>

            <div class="section">
                <div class="label">Phone Number</div>
                <div class="value">{{phone}}</div>
            </div>

            <div class="section">
                <div class="label">Service Interest</div>
                <div class="value">
                    {{service}}
                    <br>
                    <span class="badge">New Inquiry</span>
                </div>
            </div>

            <div class="section">
                <div class="label">Message</div>
                <div class="message-box">
                    <div class="value">{{message}}</div>
                </div>
            </div>
        </div>

        <div class="footer">
            <p><strong>Nyikal Fitness</strong></p>
            <p>Transform Your Life Through Fitness</p>
            <p>
                <a href="https://wa.me/254111201803">WhatsApp</a> • 
                <a href="mailto:charlesnyikal52@gmail.com">Email</a>
            </p>
        </div>
    </div>
</body>
</html>
```

## Step 4: Configure Template Variables
In your EmailJS template, make sure these variables are set:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{phone}}` - Phone number
- `{{service}}` - Service interest
- `{{message}}` - Message content
- `{{to_email}}` - Your email (charlesnyikal52@gmail.com)

## Step 5: Get Template ID
1. Save your template
2. Copy the **Template ID** and add it to your `.env` file

## Step 6: Get Public Key
1. Go to Account → General
2. Copy the **Public Key** and add it to your `.env` file

## Step 7: Update .env File
Replace the placeholder values in your `.env` file with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 8: Test
1. Restart your development server
2. Go to the Contact page
3. Fill out the form and submit
4. Check your email for the submission

## Notes
- The free EmailJS plan allows up to 200 emails per month
- The template uses a professional green color scheme matching your brand
- The email is fully responsive and looks great on mobile devices
- All form fields are included in the email template
