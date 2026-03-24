'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface TimelineEntry {
  company: string;
  role: string;
  dates: string;
  badge: string;
  accentColor: string;
  bullets: string[];
}

const timelineEntries: TimelineEntry[] = [
  {
    company: 'Triazine Software Private Limited',
    role: 'Software Engineer',
    dates: 'Jan 2023 – Present',
    badge: 'Current',
    accentColor: '#000000',
    bullets: [
      'Managing a team of Flutter developers day-to-day — code reviews, architecture decisions, unblocking people when things go sideways',
      'Mentoring junior devs on Bloc, GetX, and writing Flutter code that doesn\'t become a maintenance nightmare',
      'Running Agile sprints across design, dev and QA — keeping complex projects on track and shipping',
    ],
  },
  {
    company: 'Fictivebox Media',
    role: 'Associate Team Lead',
    dates: 'June 2022 – Jan 2023',
    badge: '',
    accentColor: '#333333',
    bullets: [
      'Stepped into a team lead role on a Flutter project — first time managing delivery end-to-end',
      'Pulled out 20% performance improvement through profiling and targeted optimisation',
      'Built the habit of caring about UX metrics, not just whether it compiles',
    ],
  },
  {
    company: 'KwikPixel',
    role: 'Associate Software Engineer',
    dates: 'Jan 2021 – May 2022',
    badge: '',
    accentColor: '#666666',
    bullets: [
      'Cut app loading time by 40% by rebuilding the widget architecture from scratch',
      'Worked directly with UI/UX designers — translating Figma specs into Flutter pixel by pixel',
      'Integrated REST APIs, wrote E2E test cases, shipped real apps to real stores',
    ],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

  return (
    <section ref={containerRef} className="relative py-12 md:py-16 bg-white" id="experience">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="mb-12"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">// work history</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            5 years. 3 companies. Real shipping.
          </h2>
        </motion.div>

        <div className="relative max-w-4xl">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-black/10">
            <motion.div
              className="absolute top-0 left-0 w-full bg-black"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-8">
            {timelineEntries.map((entry, index) => (
              <motion.div
                key={entry.company}
                className="relative pl-8 md:pl-20"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white"
                  style={{ backgroundColor: entry.accentColor }}
                />

                {/* Card */}
                <div className="bg-white border border-black/10 p-6 hover:border-black/30 transition-colors">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs text-gray-400">{entry.dates}</span>
                    {entry.badge && (
                      <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-black text-white">
                        {entry.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-black mb-1">{entry.company}</h3>
                  <p className="text-sm text-gray-500 mb-4">{entry.role}</p>

                  <ul className="space-y-2">
                    {entry.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
