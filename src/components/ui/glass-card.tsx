'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = false,
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className={`
        relative overflow-hidden
        bg-white/60 backdrop-blur-xl
        border border-white/40
        rounded-2xl
        ${hover ? 'hover:bg-white/80 hover:border-white/60 hover:shadow-2xl hover:shadow-black/5' : ''}
        ${glow ? 'shadow-[0_0_40px_rgba(255,255,255,0.3)]' : ''}
        ${className}
      `}
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      style={{
        boxShadow: '0 4px 24px -1px rgba(0, 0, 0, 0.05), 0 2px 8px -1px rgba(0, 0, 0, 0.03)',
      }}
    >
      {/* Frosted glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 pointer-events-none" />

      {/* Edge highlight */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Subtle gradient glow on hover */}
      {hover && (
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-white/20 via-transparent to-transparent"
          style={{ mixBlendMode: 'soft-light' }}
        />
      )}
    </motion.div>
  );
}
