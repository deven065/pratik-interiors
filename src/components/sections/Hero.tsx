'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

/**
 * Hero Section Component
 * Full-screen hero with background video/image and text overlay
 */

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundVideo?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
  height?: 'full' | 'tall' | 'medium';
  useVideo?: boolean;
}

export function Hero({
  title = 'Crafting Timeless Spaces',
  subtitle = 'Where luxury meets livability',
  backgroundVideo = '/videos/ninecubes-desktop-hero.mp4',
  backgroundImage = '/images/hero/hero-main.jpg',
  ctaText = 'View Our Work',
  ctaLink = '/projects',
  height = 'full',
  useVideo = true,
}: HeroProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const heightClasses = {
    full: 'h-screen',
    tall: 'h-[80vh]',
    medium: 'h-[60vh]',
  };

  useEffect(() => {
    // Ensure video plays on component mount with proper error handling
    const playVideo = async () => {
      if (!videoRef.current || !useVideo || videoError) return;
      
      try {
        // Small delay to ensure DOM is ready
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Check if video element still exists in DOM
        if (videoRef.current && document.contains(videoRef.current)) {
          await videoRef.current.play();
        }
      } catch (error) {
        // Silently handle autoplay errors (user interaction might be required)
        if (error instanceof Error && error.name !== 'AbortError') {
          console.warn('Video autoplay failed:', error.message);
        }
        setVideoError(true);
      }
    };

    playVideo();

    // Cleanup
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [useVideo, videoError]);

  return (
    <section className={`relative ${heightClasses[height]} min-h-[500px] w-full overflow-hidden`}>
      {/* Background Video or Image */}
      <div className="absolute inset-0 bg-charcoal">
        {useVideo && !videoError ? (
          <>
            {/* Video Background */}
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedData={() => setVideoLoaded(true)}
              onError={() => setVideoError(true)}
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              poster={backgroundImage}
            >
              <source src={backgroundVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Show image while video loads */}
            {!videoLoaded && (
              <Image
                src={backgroundImage}
                alt="Interior design hero"
                fill
                priority
                className="object-cover opacity-40"
                sizes="100vw"
              />
            )}
          </>
        ) : (
          // Fallback to image if video disabled or error
          <Image
            src={backgroundImage}
            alt="Interior design hero"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-off-white mb-6 leading-tight">
              {title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-off-white/90 mb-12 font-light tracking-wide">
              {subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href={ctaLink}
              className="inline-block px-8 py-4 bg-gold text-charcoal font-semibold tracking-wider uppercase text-sm hover:bg-gold/90 transition-all duration-300 hover:scale-105"
            >
              {ctaText}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.5,
        }}
      >
        <div className="w-6 h-10 border-2 border-off-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-off-white/50 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
