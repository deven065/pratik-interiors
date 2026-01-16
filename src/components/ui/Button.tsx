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
  const baseStyles = 'group relative inline-flex items-center justify-center font-bold uppercase tracking-[0.15em] transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 overflow-hidden';
  
  const variants = {
    primary: 'bg-gradient-to-r from-gold to-[#F4D03F] text-charcoal hover:shadow-2xl hover:shadow-gold/30 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100',
    secondary: 'bg-gradient-to-br from-charcoal to-[#1a1a1a] text-off-white hover:shadow-2xl hover:shadow-charcoal/50 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-charcoal disabled:opacity-50 hover:shadow-xl hover:shadow-gold/20',
    ghost: 'text-charcoal hover:text-gold disabled:opacity-50 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full',
  };
  
  const sizes = {
    sm: 'px-6 py-2.5 text-xs',
    md: 'px-10 py-4 text-sm',
    lg: 'px-12 py-5 text-base',
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
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
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
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}
