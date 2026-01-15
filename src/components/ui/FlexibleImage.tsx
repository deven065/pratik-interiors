'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

/**
 * FlexibleImage Component
 * Enhanced Image component that handles multiple image formats automatically
 * Falls back gracefully if an image format is not found
 */

interface FlexibleImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  onLoad?: () => void;
}

export function FlexibleImage({
  src,
  alt,
  width,
  height,
  fill,
  className,
  sizes,
  priority = false,
  quality = 85,
  placeholder = 'empty',
  onLoad,
}: FlexibleImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [imageError, setImageError] = useState(false);

  // Try alternative formats if image fails to load
  const handleError = () => {
    if (!imageError) {
      setImageError(true);
      
      // Try alternative extensions
      const alternatives = [
        src.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '.jpg'),
        src.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '.jpeg'),
        src.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '.png'),
        src.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '.webp'),
      ].filter(alt => alt !== imageSrc);

      if (alternatives.length > 0) {
        setImageSrc(alternatives[0]);
      }
    }
  };

  // If all formats fail, show a placeholder
  if (imageError && imageSrc === src) {
    return (
      <div
        className={cn(
          'bg-charcoal/10 flex items-center justify-center',
          className
        )}
        style={fill ? undefined : { width, height }}
      >
        <svg
          className="w-12 h-12 text-charcoal/30"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
      quality={quality}
      placeholder={placeholder}
      onError={handleError}
      onLoad={onLoad}
    />
  );
}
