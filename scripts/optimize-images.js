const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const inputDir = './public/images';
const quality = 85;

async function getAllFiles(dir, fileList = []) {
  try {
    const files = await fs.readdir(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = await fs.stat(filePath);
      
      if (stat.isDirectory()) {
        await getAllFiles(filePath, fileList);
      } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
        fileList.push(filePath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return fileList;
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const dir = path.dirname(filePath);
  const name = path.basename(filePath, ext);
  
  try {
    // Get original file size
    const originalStats = await fs.stat(filePath);
    const originalSize = (originalStats.size / 1024).toFixed(2);
    
    // Convert to WebP
    const webpPath = path.join(dir, `${name}.webp`);
    await sharp(filePath)
      .webp({ quality })
      .toFile(webpPath);
    const webpStats = await fs.stat(webpPath);
    const webpSize = (webpStats.size / 1024).toFixed(2);
    console.log(`✓ WebP: ${name}${ext} (${originalSize}KB → ${webpSize}KB)`);
    
    // Convert to AVIF (best compression)
    const avifPath = path.join(dir, `${name}.avif`);
    await sharp(filePath)
      .avif({ quality })
      .toFile(avifPath);
    const avifStats = await fs.stat(avifPath);
    const avifSize = (avifStats.size / 1024).toFixed(2);
    console.log(`✓ AVIF: ${name}${ext} (${originalSize}KB → ${avifSize}KB)`);
    
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Finding images to optimize...\n');
  const images = await getAllFiles(inputDir);
  console.log(`Found ${images.length} images\n`);
  
  if (images.length === 0) {
    console.log('No JPG or PNG images found to optimize.');
    return;
  }
  
  console.log('Starting optimization...\n');
  
  for (const image of images) {
    await optimizeImage(image);
  }
  
  console.log('\n✅ Image optimization complete!');
  console.log('\n💡 Tip: Update your code to use .webp or .avif extensions for better performance');
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
