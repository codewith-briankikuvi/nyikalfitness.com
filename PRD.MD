# Product Requirements Document (PRD)
## Coach Fitnyikal Premium Fitness Website

---

## 1. Executive Summary & Objectives

### 1.1 Executive Summary
Coach Fitnyikal is a premium fitness brand requiring a cinematic, high-contrast website that showcases personal training services, client transformations, and a robust booking system. The website will serve as the primary digital hub for client acquisition, brand storytelling, and service delivery.

### 1.2 Primary Objectives
- **Brand Authority**: Establish Coach Fitnyikal as a premium fitness authority through visual storytelling and high-end design
- **Lead Generation**: Convert visitors into paying clients through strategic CTAs and seamless booking flows
- **Client Engagement**: Showcase transformations and build trust through testimonials and social proof
- **Service Accessibility**: Provide clear, interactive navigation of all fitness services
- **Performance**: Deliver bombastic, high-performance UI animations with fast load times

### 1.3 Success Metrics
- Conversion rate from visitor to booking inquiry
- Average time on site (target: >2 minutes)
- Mobile engagement rate (target: >60% mobile traffic)
- Page load performance (target: <2s initial load)
- Client testimonial submission rate

---

## 2. Target Audience

### 2.1 Primary Audience
- **Age**: 25-45 years old
- **Location**: Urban and suburban areas
- **Income**: Middle to upper-middle class
- **Fitness Goals**: Weight loss, muscle building, boxing training, nutrition guidance
- **Tech Proficiency**: Comfortable with digital booking and online payments

### 2.2 Secondary Audience
- Corporate clients seeking group training
- Apartment complexes looking for resident fitness programs
- Individuals seeking online coaching flexibility

### 2.3 User Personas
- **The Transformation Seeker**: Wants visible results, motivated by before/after content
- **The Busy Professional**: Needs flexible scheduling, values efficiency
- **The Boxing Enthusiast**: Specifically interested in combat fitness training
- **The Nutrition-Conscious**: Seeks holistic wellness approach

---

## 3. Tech Stack & Architecture

### 3.1 Frontend Stack
- **Framework**: React 18+
- **Styling**: Tailwind CSS
- **Typography**: League Spartan (Google Fonts)
- **State Management**: React Context API / Redux (if needed)
- **Animations**: Framer Motion / GSAP for bombastic UI effects
- **Routing**: React Router

### 3.2 Backend Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **API**: RESTful API architecture

### 3.3 Third-Party Integrations
- **Media Storage**: Cloudinary (optimized image/video delivery)
- **Email Service**: SMTP (Nodemailer for contact form)
- **Reviews**: Google My Business API integration
- **Booking**: WhatsApp Business API, direct email routing
- **CMS**: Custom CMS structure for blog/fitness articles

### 3.4 Architecture Overview
```
Client (React) → API Gateway (Express) → Services
                                      ↓
                              Cloudinary (Media)
                              SMTP (Email)
                              Google Reviews API
                              WhatsApp API
```

### 3.5 Design System
- **Primary Color**: Deep Charcoal (#1C1C1C)
- **Secondary Color**: Crisp White (#FFFFFF)
- **Accent Color**: Vibrant Green (#81C704)
- **Font**: League Spartan (all headings and body text)
- **Contrast Ratio**: WCAG AA compliant (4.5:1 minimum)
- **Design Language**: High-contrast, cinematic, visual-heavy

---

## 4. Feature Requirements

### 4.1 Home Page

#### 4.1.1 Hero Section
- **Looping Background Media**: Cinematic video or high-quality image slideshow
- **Primary CTA**: "Start Your Transformation" (routes to Services)
- **Secondary CTA**: "Meet Coach Fitnyikal" (routes to About Me)
- **Headline**: Bold, motivational tagline
- **Subheadline**: Value proposition statement

#### 4.1.2 Quick Services Preview
- Horizontal scroll or grid of top 3 services
- Each card: Icon, service name, brief description, "Learn More" CTA

#### 4.1.3 Social Proof Strip
- Client count, transformation count, years experience
- Animated counters for statistics

#### 4.1.4 Latest Blog Preview
- 3 most recent fitness articles
- Thumbnail, title, excerpt, "Read More" CTA

### 4.2 About Me Page

#### 4.2.1 Hero Section
- Professional hero image/video
- Name and title introduction
- Brief mission statement

#### 4.2.2 Journey Timeline
- Visual timeline of fitness journey
- Key milestones, certifications, achievements
- Interactive scroll animations

#### 4.2.3 Certifications Section
- Grid of certification badges/logos
- Hover effects showing certification details
- Downloadable PDF option

#### 4.2.4 Mission & Philosophy
- Personal training philosophy
- Approach to client transformations
- Core values statement

#### 4.2.5 Personal Story
- Narrative about fitness journey
- Why became a trainer
- Passion for helping others

### 4.3 Services Page

#### 4.3.1 Services Grid
Interactive cards for each service:
- Personal Training
- Online Coaching
- Boxing
- Muscle Building
- Nutrition
- Group Training
- Apartment Training

#### 4.3.2 Service Card Components
- Service icon/illustration
- Service name
- Brief description (2-3 lines)
- Price range or "Custom Pricing"
- "View Details" CTA button

#### 4.3.3 Service Detail Views
Each service routes to a dedicated detail page with:
- Extended description
- What's included
- Target audience
- Pricing tiers (if applicable)
- Booking CTA
- FAQ section
- Related services

#### 4.3.4 Service Filtering
- Filter by category (1-on-1, Group, Online, Nutrition)
- Search functionality
- Sort by popularity or price

### 4.4 Client Transformations Page

#### 4.4.1 Testimonials Grid
- Client photo (before/after if available)
- Client name and transformation duration
- Star rating (1-5 stars)
- Written testimonial
- Verification badge (if from Google Reviews)

#### 4.4.2 Google My Business Integration
- Fetch and display latest Google reviews
- Auto-sync with Google My Business API
- Display "Verified Google Review" badge
- Link to full Google Business profile

#### 4.4.3 Transformation Stories
- Featured transformation spotlight
- Before/after slider or side-by-side comparison
- Client interview or quote
- Training program used

#### 4.4.4 Submission Form
- Form for clients to submit testimonials
- Photo upload (before/after)
- Written testimonial
- Star rating
- Consent for public display

#### 4.4.5 Filtering & Sorting
- Filter by service type
- Filter by transformation duration
- Sort by newest, highest rated

### 4.5 Booking System

#### 4.5.1 Booking Options
Three primary booking methods:
1. **WhatsApp Business**: Direct chat with Coach Fitnyikal
2. **Direct Email**: Mailto link with pre-filled subject
3. **Contact Form**: SMTP-powered form submission

#### 4.5.2 Contact Form Fields
- Name (required)
- Email (required)
- Phone number (optional)
- Service interest (dropdown)
- Preferred contact method (WhatsApp/Email/Phone)
- Message (required)
- Consent checkbox (GDPR/compliance)

#### 4.5.3 Form Validation
- Real-time email validation
- Phone number format validation
- Required field indicators
- Character limits for message field

#### 4.5.4 Confirmation Flow
- Success message with next steps
- Email confirmation (via SMTP)
- Expected response time
- Calendar integration option (future)

#### 4.5.5 WhatsApp Integration
- Click-to-chat WhatsApp button
- Pre-filled message template
- Business profile display
- Response time indicator

### 4.6 Gallery Page

#### 4.6.1 Media Grid
- Masonry or grid layout
- Mixed media (photos, videos, reels)
- Cloudinary-optimized delivery
- Lazy loading for performance

#### 4.6.2 Media Categories
- Training sessions
- Client transformations
- Boxing sessions
- Nutrition tips
- Events/Community

#### 4.6.3 Lightbox Viewer
- Full-screen media viewer
- Previous/next navigation
- Caption display
- Social sharing buttons

#### 4.6.4 Filtering
- Filter by category
- Filter by media type (photo/video)
- Search functionality

### 4.7 Pricing Page

#### 4.7.1 Hybrid Pricing Model
Two pricing approaches:
1. **Transparent Tiers**: Standard packages with clear pricing
2. **Consultation Gates**: Custom 1-on-1 packages require consultation

#### 4.7.2 Standard Package Cards
- Package name
- Price (monthly or one-time)
- Features list (checkmarks)
- Duration
- "Book Now" CTA
- Popular badge (if applicable)

#### 4.7.3 Custom Package Section
- "Custom 1-on-1 Training" highlight
- "Schedule Consultation" CTA
- Consultation benefits explanation
- What to expect from consultation

#### 4.7.4 FAQ Section
- Payment methods accepted
- Cancellation policy
- Package modification options
- Refund policy

#### 4.7.5 Comparison Table
- Side-by-side package comparison
- Feature highlights
- Best value indicators

### 4.8 Blog/Fitness Page

#### 4.8.1 CMS Structure
- Admin panel for article creation
- Rich text editor
- Image upload (Cloudinary)
- Category tagging
- SEO metadata fields
- Publish scheduling

#### 4.8.2 Article Listing
- Grid or list view
- Featured article spotlight
- Category filters
- Search functionality
- Pagination

#### 4.8.3 Article Detail Page
- Full article content
- Author bio
- Publication date
- Reading time estimate
- Related articles
- Social sharing buttons
- Comment section (optional)

#### 4.8.4 Categories
- Workout Tips
- Nutrition Advice
- Boxing Techniques
- Client Stories
- Motivation

#### 4.8.5 SEO Features
- Custom URLs
- Meta titles and descriptions
- Open Graph tags
- Schema markup
- XML sitemap generation

---

## 5. Non-Functional Requirements

### 5.1 Performance
- **Initial Load Time**: <2 seconds on 3G connection
- **Time to Interactive**: <3 seconds
- **Lighthouse Score**: 90+ across all categories
- **Image Optimization**: WebP format, lazy loading, Cloudinary transformations
- **Code Splitting**: Route-based code splitting in React

### 5.2 UI/UX Requirements
- **Bombastic Animations**: High-impact, smooth animations using Framer Motion/GSAP
- **Micro-interactions**: Hover effects, button states, scroll animations
- **Loading States**: Skeleton screens, spinners, progress indicators
- **Error States**: User-friendly error messages and recovery options
- **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation, screen reader support

### 5.3 Mobile Responsiveness
- **Breakpoints**: Mobile (320px+), Tablet (768px+), Desktop (1024px+)
- **Touch-Friendly**: Minimum 44px tap targets, swipe gestures where appropriate
- **Mobile-First Design**: Optimize for mobile, enhance for desktop
- **Responsive Images**: Serve appropriate image sizes per device

### 5.4 Security
- **HTTPS**: SSL/TLS encryption required
- **Form Validation**: Client and server-side validation
- **XSS Prevention**: Input sanitization, Content Security Policy
- **Rate Limiting**: Prevent form spam and API abuse
- **Data Privacy**: GDPR compliance, consent management

### 5.5 SEO
- **Meta Tags**: Unique titles and descriptions per page
- **Structured Data**: Schema markup for local business, reviews, articles
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Proper crawler directives
- **Canonical URLs**: Prevent duplicate content issues

### 5.6 Scalability
- **CDN Usage**: Cloudinary CDN for media delivery
- **Caching Strategy**: Browser caching, CDN caching, API response caching
- **Database Optimization**: Indexed queries, efficient data structures (if database added)
- **Load Balancing**: Prepare for horizontal scaling (future)

### 5.7 Browser Compatibility
- **Supported Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Progressive Enhancement**: Core functionality works on older browsers
- **Feature Detection**: Graceful degradation for unsupported features

### 5.8 Analytics
- **Tracking**: Google Analytics 4 or alternative
- **Event Tracking**: Button clicks, form submissions, page scrolls
- **Conversion Tracking**: Booking inquiries, service page views
- **Performance Monitoring**: Core Web Vitals tracking

---

## 6. Development Phases

### Phase 1: Foundation (Week 1-2)
- Project setup (React, Tailwind, Node.js)
- Design system implementation (colors, fonts, components)
- Base layout and navigation
- Home page hero section

### Phase 2: Core Pages (Week 3-4)
- About Me page
- Services page with cards
- Service detail views
- Gallery page with Cloudinary integration

### Phase 3: Interactive Features (Week 5-6)
- Client Transformations page
- Google Reviews integration
- Booking system (WhatsApp, Email, Contact Form)
- SMTP configuration

### Phase 4: Content & CMS (Week 7-8)
- Pricing page
- Blog/Fitness CMS structure
- Article listing and detail pages
- Admin panel for content management

### Phase 5: Polish & Launch (Week 9-10)
- UI animations and micro-interactions
- Mobile responsiveness optimization
- Performance optimization
- SEO implementation
- Testing and bug fixes
- Deployment

---

## 7. Success Criteria

### 7.1 Technical Success
- All functional requirements implemented
- Performance targets met (Lighthouse 90+)
- Mobile responsiveness across all devices
- Cross-browser compatibility achieved

### 7.2 Business Success
- Website launches on schedule
- Client booking inquiries increase by X%
- Average time on site exceeds 2 minutes
- Mobile engagement rate exceeds 60%

### 7.3 User Success
- Positive user feedback on design and usability
- Easy navigation and booking process
- Fast page load times
- Accessible to users with disabilities

---

## 8. Risks & Mitigations

### 8.1 Technical Risks
- **Risk**: Cloudinary API rate limits
  - **Mitigation**: Implement caching, optimize image delivery
- **Risk**: SMTP deliverability issues
  - **Mitigation**: Use reputable email service, implement SPF/DKIM
- **Risk**: Google Reviews API changes
  - **Mitigation**: Build fallback manual review system

### 8.2 Timeline Risks
- **Risk**: Scope creep
  - **Mitigation**: Strict change management process
- **Risk**: Third-party integration delays
  - **Mitigation**: Build integrations early, have fallbacks

### 8.3 Performance Risks
- **Risk**: Heavy media slowing load times
  - **Mitigation**: Aggressive optimization, lazy loading, CDN

---

## 9. Maintenance & Support

### 9.1 Post-Launch Support
- 30-day warranty period for bug fixes
- Performance monitoring and optimization
- Security updates and patches

### 9.2 Content Updates
- CMS training for Coach Fitnyikal
- Documentation for blog/article management
- Gallery media upload guidelines

### 9.3 Ongoing Maintenance
- Monthly performance audits
- Quarterly security updates
- Annual design refresh (optional)

---

## 10. Appendix

### 10.1 Design References
- Benchmark image provided (yoga website for design inspiration only)
- High-contrast, cinematic fitness websites
- Premium fitness brand websites

### 10.2 Technical Documentation
- API documentation (to be created during development)
- Component library documentation
- Deployment guide

### 10.3 Brand Guidelines
- Logo usage guidelines
- Color palette specifications
- Typography guidelines
- Voice and tone guidelines

---

**Document Version**: 1.0
**Last Updated**: June 2026
**Owner**: Coach Fitnyikal Project Team