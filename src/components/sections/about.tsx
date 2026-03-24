'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/abhi311098', icon: FaGithub },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abhishek-gupta-2515ab157', icon: FaLinkedin },
  { name: 'WhatsApp', url: 'https://wa.me/919958484437', icon: FaWhatsapp },
  { name: 'Instagram', url: 'https://instagram.com/abhi311098', icon: FaInstagram },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative py-12 md:py-16 bg-white" id="about">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <motion.div
            className="about-content space-y-6 w-full md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs text-gray-500 uppercase tracking-wider">About</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              I&apos;ve been doing this since 2021.
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Started as an associate at KwikPixel writing Dart code and figuring out why widgets were overflowing at 2am. Fast forward five years — I&apos;m leading Flutter teams, shipping apps to government clients, and watching a million people use something I helped build. That doesn&apos;t get old.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              I&apos;ve worked across the full mobile stack — state management, API integration, UI animation, App Store submissions, team mentoring, the works. Not a specialist who only touches one thing. I know the whole pipeline.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full border border-black/10 hover:border-black/30 hover:bg-black hover:text-white text-black group transition-all shadow-sm"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-all" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gray-100 rounded-full border border-black/10 shadow-md overflow-hidden group">
              <img
                src="/profile.jpg"
                alt="Abhishek Gupta"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=Abhishek+Gupta&size=800&background=f3f4f6&color=000000`;
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
