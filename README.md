# Pratik Gupta Interiors - Portfolio Website

A premium interior design portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for scroll animations and transitions
- **Responsive Design**: Mobile-first, fully responsive layout
- **Form Validation**: React Hook Form + Zod for type-safe form handling
- **SEO Optimized**: Metadata configuration for all pages
- **Premium Design**: Luxury aesthetic with gold accents and minimalist layout

## 📁 Project Structure

```
pratik-gupta-interiors/
├── src/
│   ├── app/                    # Next.js 14 App Router pages
│   │   ├── layout.tsx          # Root layout with nav and footer
│   │   ├── page.tsx            # Homepage
│   │   ├── projects/           # Projects pages
│   │   ├── about/              # About page
│   │   └── contact/            # Contact page
│   ├── components/
│   │   ├── animations/         # Animation wrappers
│   │   ├── forms/              # Contact form
│   │   ├── layout/             # Navigation, Footer
│   │   ├── projects/           # Project components
│   │   ├── sections/           # Hero, ServiceCard
│   │   └── ui/                 # Reusable UI components
│   ├── lib/
│   │   ├── data/               # Sample data (projects, services)
│   │   ├── hooks/              # Custom React hooks
│   │   └── utils/              # Utility functions
│   └── types/                  # TypeScript interfaces
├── public/
│   └── images/                 # Image assets
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Add placeholder images**:
   - See `public/images/README.md` for image requirements
   - For quick testing, images will use fallback backgrounds
   - For production, add high-quality interior design images

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Pages

- **Homepage** (`/`) - Hero + Services + Featured Projects + About Preview
- **Projects** (`/projects`) - All projects with category filtering
- **Project Detail** (`/projects/[slug]`) - Individual project with gallery
- **About** (`/about`) - Studio story, philosophy, founder info
- **Contact** (`/contact`) - Contact form and studio information

## 🎨 Brand Colors

```css
--off-white: #FAFAF8     /* Background */
--charcoal: #2F2F2F      /* Text & dark elements */
--gold: #D4AF37          /* Accent color */
```

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Image Optimization**: Next.js Image component

## 📦 Key Dependencies

```json
{
  "next": "16.1.1",
  "react": "19.2.3",
  "framer-motion": "^12.26.2",
  "react-hook-form": "^7.71.1",
  "zod": "^4.3.5",
  "tailwindcss": "^4",
  "typescript": "^5"
}
```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🖼️ Image Setup

Before deploying, add images to `public/images/`:

1. **Hero image**: `/images/hero/hero-main.jpg` (1920x1080)
2. **About images**: Studio and founder photos
3. **Project images**: Thumbnails and gallery images for 8 projects

See `public/images/README.md` for detailed specifications.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub repository
2. Import project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and configure settings
4. Click Deploy!

The site will be live at: `https://your-project-name.vercel.app`

### Build Command
```bash
npm run build
```

## 📈 Performance Goals

- ✅ Lighthouse Performance: >90
- ✅ Lighthouse Accessibility: >90
- ✅ Lighthouse Best Practices: >90
- ✅ Lighthouse SEO: >90

## 🎯 Future Enhancements

- [ ] Integrate Sanity.io CMS for content management
- [ ] Add Cloudinary for image optimization and CDN
- [ ] Implement email service (SendGrid/Resend) for contact form
- [ ] Add blog/insights section
- [ ] Integrate analytics (Google Analytics/Plausible)
- [ ] Add dark mode toggle
- [ ] Implement testimonials section
- [ ] Add loading states and skeleton screens

## 📝 Customization

### Update Project Data
Edit `src/lib/data/projects.ts` to add/modify projects.

### Update Services
Edit `src/lib/data/services.ts` to modify services offered.

### Update Brand Colors
Modify CSS variables in `src/app/globals.css`.

### Update Contact Info
Edit `src/components/layout/Footer.tsx` and `src/app/contact/page.tsx`.

## 🐛 Troubleshooting

### Images not loading
- Ensure images are placed in `public/images/` directory
- Check image paths match those in the data files
- Verify image file names (case-sensitive on Linux/Mac)

### Build errors
- Delete `.next` folder and rebuild: `rm -rf .next && npm run build`
- Clear npm cache: `npm cache clean --force`
- Reinstall dependencies: `rm -rf node_modules && npm install`

## 📄 License

Private project for Pratik Gupta Interiors.

## 👤 Contact

**Pratik Gupta Interiors**
- Email: hello@pratikguptainteriors.com
- Phone: +91 98765 43210
- Location: Mumbai, India

---

Built with ❤️ using Next.js 14
