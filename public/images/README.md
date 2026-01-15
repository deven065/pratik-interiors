# Image Assets Guide

This folder contains all image assets for the Pratik Gupta Interiors website.

## Folder Structure

```
public/images/
├── hero/
│   └── hero-main.jpg         # Homepage hero background (1920x1080, <500KB)
├── about/
│   ├── studio.jpg            # Studio/office image (1200x900, <300KB)
│   └── pratik-gupta.jpg      # Founder portrait (800x1067, <200KB)
└── projects/
    ├── penthouse/
    │   ├── thumbnail.jpg     # Grid thumbnail (1200x800, <150KB)
    │   ├── gallery-1.jpg     # Detail page image (1920x1080, <300KB)
    │   ├── gallery-2.jpg
    │   ├── gallery-3.jpg
    │   └── gallery-4.jpg
    ├── hotel-goa/
    ├── office-bangalore/
    ├── villa-pune/
    ├── restaurant-delhi/
    ├── retail-mumbai/
    ├── apartment-chennai/
    └── spa-kerala/
```

## Image Requirements

### Hero Images
- **Dimensions**: 1920x1080px (minimum)
- **Format**: JPG
- **Size**: < 500KB (optimized)
- **Content**: High-quality interior shots with good lighting

### Project Thumbnails
- **Dimensions**: 1200x800px (4:3 aspect ratio)
- **Format**: JPG
- **Size**: < 150KB each
- **Content**: Best representative shot of the project

### Project Gallery Images
- **Dimensions**: 1920x1080px (16:9 aspect ratio)
- **Format**: JPG
- **Size**: < 300KB each
- **Content**: Various angles showcasing different areas

### About Page Images
- **Studio Image**: 1200x900px, < 300KB
- **Portrait**: 800x1067px (3:4 aspect ratio), < 200KB

## Optimization Tips

1. **Use image compression tools**:
   - TinyPNG (https://tinypng.com/)
   - Squoosh (https://squoosh.app/)
   - ImageOptim (Mac)

2. **Next.js Image component handles**:
   - Automatic format conversion (WebP)
   - Responsive sizing
   - Lazy loading
   - Blur placeholder

3. **Naming convention**:
   - Use lowercase
   - Use hyphens, not spaces
   - Descriptive names (e.g., `living-room-view.jpg`)

## Placeholder Images for Development

For development/testing, you can use:
- **Unsplash**: https://unsplash.com/s/photos/interior-design
- **Pexels**: https://www.pexels.com/search/interior/
- **Lorem Picsum**: https://picsum.photos/ (auto-generated)

Example Lorem Picsum URLs:
- Hero: `https://picsum.photos/1920/1080`
- Thumbnail: `https://picsum.photos/1200/800`
- Gallery: `https://picsum.photos/1920/1080`

## Current Status

⚠️ **PLACEHOLDER IMAGES NEEDED**

The following images need to be added:
- [ ] `/hero/hero-main.jpg`
- [ ] `/about/studio.jpg`
- [ ] `/about/pratik-gupta.jpg`
- [ ] All project thumbnails and galleries (8 projects × ~4 images each)

**Total: ~35 images required**

## Quick Setup

To quickly populate with placeholder images from Unsplash:

1. Visit https://unsplash.com/s/photos/luxury-interior
2. Download high-quality interior design images
3. Rename and place in appropriate folders
4. Optimize images before committing

## Production Checklist

Before deploying to production:
- [ ] All images optimized and compressed
- [ ] Images follow naming conventions
- [ ] Alt text updated in code for accessibility
- [ ] Images tested on mobile and desktop
- [ ] Page load times verified (Lighthouse score >90)
