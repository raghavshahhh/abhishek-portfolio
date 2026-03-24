'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LiquidButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function LiquidButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: LiquidButtonProps) {
  const baseStyles = 'relative overflow-hidden font-medium transition-all duration-300 group';

  const variantStyles = {
    primary: 'bg-black text-white border border-black hover:bg-gray-900',
    secondary: 'bg-white text-black border border-black hover:bg-gray-50',
    glass: 'bg-white/10 text-black border border-black/20 backdrop-blur-md hover:bg-white/20',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Liquid hover effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/10 to-black/5"
        initial={{ x: '-100%', opacity: 0 }}
        whileHover={{ x: '100%', opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />

      {/* Ripple container */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"
          style={{ transformOrigin: 'center' }}
        />
      </div>
    </>
  );

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedClassName}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {buttonContent}
    </motion.button>
  );
}
