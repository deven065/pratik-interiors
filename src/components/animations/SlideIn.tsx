'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

/**
 * SlideIn Component
 * Slide-in animation from specified direction
 */

interface SlideInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  duration?: number;
}

export function SlideIn({
  children,
  className,
  delay = 0,
  direction = 'left',
  duration = 0.5,
}: SlideInProps) {
  const directionVariants = {
    left: { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    right: { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    up: { initial: { y: 100, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    down: { initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 } },
  };

  const variants = directionVariants[direction];

  return (
    <motion.div
      initial={variants.initial}
      animate={variants.animate}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
