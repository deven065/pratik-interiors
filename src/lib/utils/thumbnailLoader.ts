import { ProjectImage } from '@/types';

/**
 * Thumbnail Loader Utility
 * Helps load multiple thumbnail images for carousel functionality
 */

/**
 * Generate multiple thumbnail paths
 * Automatically creates paths for thumbnail, thumbnail-2, thumbnail-3, etc.
 */
export function generateThumbnailPaths(
  basePath: string,
  count: number = 1
): string[] {
  const paths: string[] = [];
  
  // Add primary thumbnail
  paths.push(`${basePath}/thumbnail.jpg`);
  
  // Add additional thumbnails if count > 1
  for (let i = 2; i <= count; i++) {
    paths.push(`${basePath}/thumbnail-${i}.jpg`);
  }
  
  return paths;
}

/**
 * Create thumbnail image objects from base path
 * Supports multiple thumbnails for carousel
 */
export function createThumbnails(
  basePath: string,
  alt: string,
  count: number = 1
): ProjectImage | ProjectImage[] {
  const thumbnails: ProjectImage[] = [];
  
  // Primary thumbnail
  thumbnails.push({
    url: `${basePath}/thumbnail.jpg`,
    alt: alt,
    width: 1200,
    height: 800,
  });
  
  // Additional thumbnails
  for (let i = 2; i <= count; i++) {
    thumbnails.push({
      url: `${basePath}/thumbnail-${i}.jpg`,
      alt: `${alt} - View ${i}`,
      width: 1200,
      height: 800,
    });
  }
  
  return count > 1 ? thumbnails : thumbnails[0];
}

/**
 * Check if project has multiple thumbnails
 */
export function hasMultipleThumbnails(
  thumbnail: ProjectImage | ProjectImage[]
): boolean {
  return Array.isArray(thumbnail) && thumbnail.length > 1;
}

/**
 * Get thumbnail count
 */
export function getThumbnailCount(
  thumbnail: ProjectImage | ProjectImage[]
): number {
  return Array.isArray(thumbnail) ? thumbnail.length : 1;
}
