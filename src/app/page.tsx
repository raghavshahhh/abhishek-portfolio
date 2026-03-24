'use client';

import { Suspense, useEffect } from 'react';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Stats from '@/components/sections/stats';
import Experience from '@/components/sections/experience';
import Credibility from '@/components/sections/credibility';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import Contact from '@/components/sections/contact';
import Navigation from '@/components/layout/navigation';
import Footer from '@/components/layout/footer';
import ParticleCanvas from '@/components/3d/particle-canvas';

export default function Home() {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      e.preventDefault();
      const href = anchor.getAttribute('href');
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', handleClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div className="min-h-[100dvh] bg-white text-black overflow-x-hidden">
      <Suspense fallback={<div className="fixed inset-0 bg-white" />}>
        <ParticleCanvas />
      </Suspense>

      <Navigation />

      <main>
        <Hero />
        <About />
        <Stats />
        <Experience />
        <Credibility />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
