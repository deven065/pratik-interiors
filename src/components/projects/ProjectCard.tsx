'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/types';

/**
 * ProjectCard Component
 * Reusable card for displaying project preview
 */

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
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
          <Image
            src={project.thumbnail.url}
            alt={project.thumbnail.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
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
