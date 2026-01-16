'use client';

import { motion } from 'framer-motion';
import { Service } from '@/types';

/**
 * ServiceCard Component
 * Display service information with features list
 */

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative p-10 bg-gradient-to-br from-off-white to-off-white/95 border border-charcoal/10 hover:border-gold transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Icon or Number */}
      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
        <span className="text-3xl font-serif font-bold bg-gradient-to-r from-gold to-[#F4D03F] bg-clip-text text-transparent">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-5 group-hover:text-gold transition-colors duration-300 leading-tight tracking-tight">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-charcoal/75 leading-relaxed mb-8 font-light tracking-wide">
        {service.description}
      </p>

      {/* Features List */}
      {service.features && service.features.length > 0 && (
        <ul className="space-y-3">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-charcoal/70 group/item hover:text-gold transition-colors">
              <svg
                className="w-5 h-5 text-gold flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-light tracking-wide">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
