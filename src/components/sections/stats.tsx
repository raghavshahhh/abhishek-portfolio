'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const statsData = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Apps Shipped', value: '10+' },
  { label: 'App Downloads', value: '1M+' },
  { label: 'Max Performance Boost', value: '40%' },
];

function AnimatedCounter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  const numericMatch = value.match(/[0-9.]+/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = value.replace(/[0-9.]+/g, '');

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2.5; // seconds
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentValue = numericValue * easeProgress;

      // If the number is small (like 5 or 10), show 1 decimal place while animating so it looks continuous.
      if (progress < 1) {
        if (numericValue <= 10) {
          setDisplayValue(currentValue.toFixed(1));
        } else {
          setDisplayValue(Math.floor(currentValue).toString());
        }
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(numericValue.toString());
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericValue]);

  if (!numericMatch) return <span>{value}</span>;

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-16 bg-white" id="stats">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center justify-center p-6 border border-black/5 bg-gray-50/50 hover:bg-white hover:border-black/10 transition-colors"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-widest text-center">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
