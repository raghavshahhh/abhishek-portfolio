'use client';

import { motion } from 'framer-motion';

export default function PageTransition() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
