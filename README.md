# Nyikal Fitness Website

A premium cinematic fitness website for Coach Fitnyikal, built with React, Tailwind CSS, Node.js, and Express.

## Tech Stack

### Frontend
- React 18+
- Vite (build tool)
- Tailwind CSS (styling)
- React Router (navigation)
- Framer Motion (animations)
- League Spartan (font)

### Backend
- Node.js
- Express.js
- Nodemailer (email)
- Cloudinary (media storage)

## Project Structure

```
nyikalfitness.com/
├── src/
│   ├── components/
│   │   ├── CMS/          # Admin panel components
│   │   ├── Header.jsx    # Navigation header
│   │   └── Footer.jsx    # Site footer
│   ├── pages/
│   │   ├── services/     # Service detail pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Transformations.jsx
│   │   ├── Booking.jsx
│   │   ├── Gallery.jsx
│   │   ├── Pricing.jsx
│   │   └── Blog.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server/
│   ├── routes/           # API routes
│   ├── utils/            # Utility functions
│   ├── server.js         # Express server
│   └── .env.example      # Environment variables template
├── package.json
├── vite.config.js
├── tailwind.config.js
└── index.html
```

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git (optional)

### Frontend Setup

1. **Navigate to the project directory**
   ```bash
   cd "c:\Users\brian\OneDrive\Documents\Nyikal Fitness\nyikalfitness.com"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Backend Setup

1. **Navigate to the server directory**
   ```bash
   cd server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Copy `.env.example` to `.env`
   - Fill in your actual values:
     ```
     PORT=5000
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_USER=your-email@gmail.com
     SMTP_PASS=your-app-password
     SMTP_FROM=your-email@gmail.com
     CLOUDINARY_CLOUD_NAME=your-cloud-name
     CLOUDINARY_API_KEY=your-api-key
     CLOUDINARY_API_SECRET=your-api-secret
     ```

4. **Start the backend server**
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

5. **Verify the backend is running**
   Navigate to `http://localhost:5000/api/health`

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with auto-reload

## Environment Variables

### Backend (.env)
- `PORT` - Server port (default: 5000)
- `SMTP_HOST` - SMTP server host
- `SMTP_PORT` - SMTP server port
- `SMTP_USER` - SMTP username
- `SMTP_PASS` - SMTP password
- `SMTP_FROM` - From email address
- `CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret

## Features

### Implemented
- ✅ Responsive design with Tailwind CSS
- ✅ Custom color palette (#1C1C1C, #FFFFFF, #81C704)
- ✅ League Spartan font integration
- ✅ Framer Motion animations
- ✅ All 8 main pages
- ✅ 7 service detail pages
- ✅ CMS structure for blog management
- ✅ Search and filter functionality
- ✅ Booking system with WhatsApp and email integration
- ✅ Backend API structure

### Pending
- ⏳ Cloudinary media upload integration
- ⏳ Google My Business API integration
- ⏳ Rich text editor for CMS
- ⏳ SEO optimization
- ⏳ Performance optimization
- ⏳ Testing and deployment

## Color Palette

- **Deep Charcoal**: #1C1C1C (primary background)
- **Crisp White**: #FFFFFF (text and highlights)
- **Vibrant Green**: #81C704 (accents and CTAs)

## Contact Information

- **Email**: charlesnyikal52@gmail.com
- **Phone**: +254 111 201803, +254 782 923076
- **Instagram**: @fitnyikal

## Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting platform

### Backend (Heroku/Railway/Render)
1. Set environment variables in your hosting platform
2. Deploy the `server` directory
3. Ensure your hosting platform supports Node.js

## Support

For issues or questions, please contact Coach Fitnyikal at charlesnyikal52@gmail.com

## License

© 2026 Nyikal Fitness. All rights reserved.
