import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { ReactNode } from 'react';

/**
 * Button Component
 * Reusable button with variants
 */

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-gold text-charcoal hover:bg-gold/90 disabled:bg-gold/50',
    secondary: 'bg-charcoal text-off-white hover:bg-charcoal/90 disabled:bg-charcoal/50',
    outline: 'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-off-white disabled:border-charcoal/50 disabled:text-charcoal/50',
    ghost: 'text-charcoal hover:text-gold disabled:text-charcoal/50',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && 'cursor-not-allowed',
    className
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
