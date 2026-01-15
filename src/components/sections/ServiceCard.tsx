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
      className="group p-8 bg-off-white border border-charcoal/10 hover:border-gold transition-all duration-300 hover:shadow-xl"
    >
      {/* Icon or Number */}
      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
        <span className="text-2xl font-serif font-bold text-gold">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-serif font-bold text-charcoal mb-4 group-hover:text-gold transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-charcoal/70 leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Features List */}
      {service.features && service.features.length > 0 && (
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-charcoal/60">
              <svg
                className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
