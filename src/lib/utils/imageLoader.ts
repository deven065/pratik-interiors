/**
 * Image Loader Utility
 * Automatically detects and loads images in multiple formats
 */

const SUPPORTED_FORMATS = ['jpg', 'jpeg', 'png', 'webp', 'avif'];

/**
 * Get the first available image from multiple format options
 * Falls back to placeholder if none found
 */
export function getImageUrl(basePath: string, fallback?: string): string {
  // If basePath already has an extension, return it as-is
  if (/\.(jpg|jpeg|png|webp|avif|gif)$/i.test(basePath)) {
    return basePath;
  }

  // Otherwise, default to .jpg (most common)
  // In production, you'd check which file exists on the server
  return `${basePath}.jpg`;
}

/**
 * Get multiple image URLs with format fallbacks
 * Returns an array of possible image paths to try
 */
export function getImageUrlsWithFallbacks(basePath: string): string[] {
  // If already has extension, just return that
  if (/\.(jpg|jpeg|png|webp|avif|gif)$/i.test(basePath)) {
    return [basePath];
  }

  // Return all possible format variations
  return SUPPORTED_FORMATS.map(format => `${basePath}.${format}`);
}

/**
 * Get flexible image path that works with any extension
 * Removes the extension from path so Next.js Image can handle it
 */
export function getFlexibleImagePath(path: string): string {
  return path.replace(/\.(jpg|jpeg|png|webp|avif|gif)$/i, '');
}

/**
 * Image error handler that tries alternative formats
 */
export function createImageErrorHandler(
  basePath: string,
  setImageSrc: (src: string) => void,
  attemptedFormats: string[] = []
) {
  return () => {
    const formats = SUPPORTED_FORMATS.filter(f => !attemptedFormats.includes(f));
    
    if (formats.length > 0) {
      const nextFormat = formats[0];
      const cleanPath = basePath.replace(/\.(jpg|jpeg|png|webp|avif|gif)$/i, '');
      setImageSrc(`${cleanPath}.${nextFormat}`);
      attemptedFormats.push(nextFormat);
    }
  };
}
