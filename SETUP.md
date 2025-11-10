# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## Project Structure

- ✅ Next.js 14 with App Router
- ✅ TypeScript configuration
- ✅ TailwindCSS with custom theme
- ✅ Framer Motion animations
- ✅ Mobile-responsive design
- ✅ All pages created (Home, Services, Portfolio, About, Contact)
- ✅ Contact form API route
- ✅ Netlify deployment configuration

## Next Steps

### 1. Install Dependencies
Run `npm install` to install all required packages.

### 2. Test Locally
Run `npm run dev` and test all pages and functionality.

### 3. Customize Content
- Update contact information in Footer and Contact page
- Add your actual portfolio items
- Update about page with your story
- Customize service descriptions

### 4. Backend Integration
Update `app/api/contact/route.ts` to connect to your Render backend:
- Add your backend URL as environment variable
- Configure email service (SendGrid, Resend, etc.)
- Test contact form submission

### 5. Deploy to Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Netlify will auto-detect Next.js settings
4. Add environment variables if needed
5. Deploy!

### 6. Environment Variables (Optional)
If using backend API, add to Netlify:
- `BACKEND_URL` - Your Render backend URL
- `EMAIL_API_KEY` - For email service (if needed)

## Features Implemented

✅ Dark futuristic theme with gold accents
✅ Neural mesh background animation
✅ Mobile-responsive navigation with hamburger menu
✅ Hero section with call-to-action
✅ Services section with detailed cards
✅ Features/benefits section
✅ Portfolio showcase
✅ About page with values
✅ Contact form with validation
✅ Footer with social links
✅ Smooth animations throughout
✅ Touch-friendly mobile interface
✅ SEO metadata
✅ API route for contact form

## Mobile Optimization

- All touch targets minimum 48px
- Responsive typography scales properly
- Mobile-first navigation
- Optimized images
- No horizontal scrolling
- Fast loading times

## Customization Guide

### Colors
Edit `tailwind.config.ts`:
- `dark.*` - Background colors
- `gold.*` - Primary accent
- `neon.*` - Secondary accents

### Content
- Pages: `app/*/page.tsx`
- Components: `components/`
- Sections: `components/sections/`

## Need Help?

Contact: contact@ethioaisolutions.com

