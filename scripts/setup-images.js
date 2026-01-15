#!/usr/bin/env node

/**
 * Quick Image Placeholder Setup Script
 * 
 * This script creates necessary image directories and provides
 * instructions for adding images to the project.
 * 
 * For production, replace placeholder images with real photography.
 */

const fs = require('fs');
const path = require('path');

const imageDirectories = [
  'public/images/hero',
  'public/images/about',
  'public/images/projects/penthouse',
  'public/images/projects/hotel-goa',
  'public/images/projects/office-bangalore',
  'public/images/projects/villa-pune',
  'public/images/projects/restaurant-delhi',
  'public/images/projects/retail-mumbai',
  'public/images/projects/apartment-chennai',
  'public/images/projects/spa-kerala',
];

console.log('🖼️  Pratik Gupta Interiors - Image Setup\n');

// Ensure all directories exist
imageDirectories.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ Created: ${dir}`);
  } else {
    console.log(`✓ Exists: ${dir}`);
  }
});

console.log('\n📝 Required Images:\n');

const requiredImages = [
  { path: 'hero/hero-main.jpg', size: '1920x1080', desc: 'Homepage hero background' },
  { path: 'about/studio.jpg', size: '1200x900', desc: 'Studio/office photo' },
  { path: 'about/pratik-gupta.jpg', size: '800x1067', desc: 'Founder portrait' },
  { path: 'projects/penthouse/*.jpg', size: 'Various', desc: '1 thumbnail + 4 gallery' },
  { path: 'projects/hotel-goa/*.jpg', size: 'Various', desc: '1 thumbnail + 3 gallery' },
  { path: 'projects/office-bangalore/*.jpg', size: 'Various', desc: '1 thumbnail + 4 gallery' },
  { path: 'projects/villa-pune/*.jpg', size: 'Various', desc: '1 thumbnail + 3 gallery' },
  { path: 'projects/restaurant-delhi/*.jpg', size: 'Various', desc: '1 thumbnail + 3 gallery' },
  { path: 'projects/retail-mumbai/*.jpg', size: 'Various', desc: '1 thumbnail + 3 gallery' },
  { path: 'projects/apartment-chennai/*.jpg', size: 'Various', desc: '1 thumbnail + 3 gallery' },
  { path: 'projects/spa-kerala/*.jpg', size: 'Various', desc: '1 thumbnail + 3 gallery' },
];

requiredImages.forEach((img, index) => {
  console.log(`${index + 1}. ${img.path}`);
  console.log(`   Size: ${img.size} | ${img.desc}\n`);
});

console.log('\n🎨 Quick Setup Options:\n');
console.log('OPTION 1: Use Unsplash (Recommended)');
console.log('  1. Visit: https://unsplash.com/s/photos/luxury-interior');
console.log('  2. Download high-quality images');
console.log('  3. Rename and place in appropriate folders\n');

console.log('OPTION 2: Use Lorem Picsum (Quick Testing)');
console.log('  1. Download from: https://picsum.photos/1920/1080');
console.log('  2. Save with appropriate names\n');

console.log('OPTION 3: Use Your Own Photos');
console.log('  1. Use professional interior photography');
console.log('  2. Optimize images before adding (< 500KB each)');
console.log('  3. Use JPG format\n');

console.log('📖 For detailed requirements, see: public/images/README.md\n');
console.log('✨ Once images are added, refresh your browser at http://localhost:3000\n');
