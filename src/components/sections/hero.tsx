'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
      id="home"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,_#f3f4f6_0%,_transparent_50%)] opacity-70" />

      <div className="relative z-10 w-full text-center max-w-5xl mx-auto px-6 flex flex-col items-center justify-center -mt-32 md:-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black">
            Abhishek Gupta
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-gray-600"
        >
          Flutter Engineer · Team Lead · 5 Years Building Apps
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-4 text-sm md:text-base text-gray-500 max-w-xl mx-auto"
        >
          Five years. Two platforms. Apps that crossed a million downloads. I build Flutter apps that work — fast, clean, and worth shipping.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="mt-4"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full border border-black/20 bg-black/5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            Open to Opportunities
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-black text-sm font-medium hover:bg-black hover:text-white transition-colors"
          >
            Let&apos;s Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
}
