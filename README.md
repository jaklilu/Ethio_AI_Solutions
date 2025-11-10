# Ethio AI Solutions Website

A modern, futuristic website for Ethio AI Solutions - bringing enterprise-level AI automation to small and mid-sized businesses.

## Features

- 🎨 **Futuristic Design**: Dark theme with gold accents and neon effects
- 📱 **100% Mobile Responsive**: Fully optimized for all device sizes
- ⚡ **Fast Performance**: Built with Next.js 14 and optimized for speed
- 🎭 **Smooth Animations**: Framer Motion animations throughout
- 🔧 **AI-Focused**: Components and design reflect AI/tech capabilities

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Netlify (Frontend), Render (Backend)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                  # Next.js app router pages
│   ├── page.tsx         # Home page
│   ├── about/           # About page
│   ├── services/        # Services page
│   ├── portfolio/       # Portfolio page
│   ├── contact/         # Contact page
│   └── api/             # API routes
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── sections/       # Page sections
│   └── animations/     # Animation components
├── lib/                # Utility functions
└── public/             # Static assets
```

## Deployment

### Netlify (Frontend)

1. Connect your GitHub repository to Netlify
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Environment variables (if needed):
   - Add any required environment variables in Netlify dashboard

### Render (Backend)

1. Create a new Web Service on Render
2. Connect your backend repository
3. Set build and start commands
4. Add environment variables as needed

## Contact Form Integration

The contact form posts to `/api/contact` and uses SendGrid to deliver submissions.

### Configure SendGrid

1. Create a SendGrid account and generate an API key with Mail Send permissions.
2. Add the following environment variables (in `.env.local`, Netlify, and Render):
   ```bash
   SENDGRID_API_KEY=your_sendgrid_api_key
   SENDGRID_FROM_EMAIL=notifications@yourdomain.com
   # Optional - defaults to contact@ethioaisolutions.com
   SENDGRID_TO_EMAIL=contact@ethioaisolutions.com
   ```
3. Ensure the `SENDGRID_FROM_EMAIL` address is verified in your SendGrid account.
4. Deploy after adding the variables so the serverless function can access them.

You can update the SendGrid logic in `app/api/contact/route.ts` to meet custom requirements (e.g., logging to a CRM or Render backend).

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:
- `dark.*`: Background colors
- `gold.*`: Primary accent colors
- `neon.*`: Secondary accent colors

### Content

- Update page content in respective files under `app/`
- Modify components in `components/`
- Update metadata in `app/layout.tsx`

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Mobile Optimization

The site is fully optimized for mobile devices with:
- Touch-friendly buttons (minimum 48px height)
- Responsive typography
- Mobile-first navigation
- Optimized images
- Smooth scrolling
- No horizontal overflow

## License

Private - All rights reserved

## Support

For questions or support, contact: contact@ethioaisolutions.com

