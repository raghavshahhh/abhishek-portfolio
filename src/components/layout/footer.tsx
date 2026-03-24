'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="relative py-8 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-xs text-gray-500">
              Abhishek Gupta · Flutter Engineer · New Delhi · {currentYear}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/abhi311098"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-black transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-300">·</span>
            <a
              href="https://www.linkedin.com/in/abhishek-gupta-2515ab157"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-black transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
