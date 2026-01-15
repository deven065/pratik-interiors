'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, ProjectImage } from '@/types';

/**
 * ProjectCard Component
 * Reusable card for displaying project preview
 */

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  // Support multiple thumbnails with auto-carousel
  const thumbnails = Array.isArray(project.thumbnail) ? project.thumbnail : [project.thumbnail];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images if multiple thumbnails
  useEffect(() => {
    if (thumbnails.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % thumbnails.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [thumbnails.length]);

  const currentImage = thumbnails[currentImageIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block relative overflow-hidden bg-charcoal/5"
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={currentImage.url}
                alt={currentImage.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Image indicators for multiple thumbnails */}
          {thumbnails.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {thumbnails.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex
                      ? 'bg-gold w-6'
                      : 'bg-off-white/50'
                  }`}
                />
              ))}
            </div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          
          {/* Category Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-gold/90 backdrop-blur-sm text-charcoal text-xs font-semibold uppercase tracking-wider">
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-off-white transform transition-transform duration-300 group-hover:-translate-y-2">
          <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-gold transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-off-white/80 line-clamp-2 mb-2">
            {project.shortDescription}
          </p>
          {project.location && (
            <p className="text-xs text-off-white/60 uppercase tracking-wide">
              {project.location}
            </p>
          )}
        </div>

        {/* Hover Arrow */}
        <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          <svg
            className="w-5 h-5 text-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
}
