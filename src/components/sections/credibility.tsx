'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface CredibilityItem {
  icon: string;
  value: string;
  label: string;
}

const items: CredibilityItem[] = [
  { icon: '◆', value: '10+', label: 'Apps Shipped to Store' },
  { icon: '◆', value: '1.5M+', label: 'Total App Downloads' },
  { icon: '◆', value: '1', label: 'Government Client' },
  { icon: '◆', value: '1', label: 'Award-Winning US Client' },
  { icon: '◆', value: '5yrs', label: 'Continuous Experience' },
];

function CountUp({ target, duration = 2 }: { target: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseFloat(target.replace(/[^0-9.]/g, '')) || 0;
  const suffix = target.replace(/[0-9.]/g, '');

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = numericValue * easeOutQuart;

      if (target.includes('.')) {
        setCount(parseFloat(currentValue.toFixed(1)));
      } else {
        setCount(Math.floor(currentValue));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(numericValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericValue, duration, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Credibility() {
  return (
    <section className="relative py-16 bg-white" id="credibility">
      <div className="w-full overflow-hidden flex relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <motion.div
          className="flex whitespace-nowrap w-max py-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
        >
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="flex-shrink-0 text-center mx-12 md:mx-16"
            >
              <span className="text-2xl md:text-3xl font-bold text-black">
                {item.value.match(/[0-9]/) ? (
                  <CountUp target={item.value} duration={2} />
                ) : (
                  item.value
                )}
              </span>
              <p className="text-xs text-gray-500 mt-1">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
