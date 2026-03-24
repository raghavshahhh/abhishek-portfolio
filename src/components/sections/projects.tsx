'use client';

import { motion } from 'framer-motion';

interface Project {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  stats: string[];
  accentColor: string;
  playStoreUrl: string;
  appStoreUrl: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    badge: 'Government · Utility',
    title: 'IGL Connect',
    subtitle: 'Official App · Indraprastha Gas Limited',
    description: 'Official app for Indraprastha Gas — a GAIL + BPCL joint venture backed by the Government of India. 1M+ downloads with 28K+ reviews.',
    stats: ['1M+ Downloads', '28K+ Reviews', 'Govt. of India'],
    accentColor: '#000000',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.CustomerApp',
    appStoreUrl: 'https://apps.apple.com/in/app/igl-connect/id1147477099',
    image: '/projects/igl-connect.png',
  },
  {
    id: 2,
    badge: 'E-Commerce · Sustainable',
    title: 'Amala Earth',
    subtitle: '500K+ Downloads · India\'s Eco Marketplace',
    description: 'A full shopping app listing 60,000+ products from 400+ homegrown Indian brands — organic food, clean beauty, sustainable fashion.',
    stats: ['500K+ Downloads', '4.5★ · 3K Reviews', '60K+ Products'],
    accentColor: '#333333',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.amala.earth&hl=en_AU&gl=US',
    appStoreUrl: 'https://apps.apple.com/in/app/amala-earth-online-shopping/id1591399697',
    image: '/projects/amala-earth.png',
  },
  {
    id: 3,
    badge: 'Health & Fitness · Defence',
    title: 'FojFit',
    subtitle: 'India\'s First Defence Fitness App',
    description: 'Built for people preparing for NDA, CDS, or AFCAT. Personalised diet plans, HD workout videos, and army-grade training routines.',
    stats: ['4.3★ Rating', 'First in Niche', 'Defence Market'],
    accentColor: '#666666',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.fitnessapp.fitness_app&hl=en&gl=US',
    appStoreUrl: 'https://apps.apple.com/in/app/fojfit/id1628305162',
    image: '/projects/fojfit.png',
  },
  {
    id: 4,
    badge: 'MedTech · USA',
    title: 'Healium',
    subtitle: 'Award-Winning · International Client',
    description: 'Biofeedback wellness app with CTIA Wireless Innovation Award. Used by veterans and healthcare professionals in the US.',
    stats: ['CTIA Award Winner', '8 Journals', 'US Client'],
    accentColor: '#999999',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.storyup.healiumxr',
    appStoreUrl: 'https://apps.apple.com/in/app/healium-camps/id6474176316',
    image: '/projects/healium.png',
  },
  {
    id: 5,
    badge: 'Education · Entrepreneurship',
    title: 'IID',
    subtitle: 'by SAMADHAN SAMITI · Active Since 2020',
    description: 'Entrepreneurship platform for first-generation founders. Version 2.2.2 shipped October 2025 with live workshops and expert seminars.',
    stats: ['4.0★ Rating', 'Active · v2.2.2', 'Education'],
    accentColor: '#CCCCCC',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.iid',
    appStoreUrl: 'https://apps.apple.com/in/app/iid/id1526146453',
    image: '/projects/iid.png',
  },
];

export default function Projects() {
  return (
    <section className="relative py-12 md:py-16 bg-white" id="projects">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">// shipped to production</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Featured Projects
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Apps live. Users real. Impact measurable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-white border border-black/10 overflow-hidden hover:border-black/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: `${project.accentColor}10` }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span
                    className="hidden text-5xl font-bold"
                    style={{ color: `${project.accentColor}30` }}
                  >
                    {project.title[0]}
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 text-[10px] uppercase tracking-wider bg-white/90 border border-black/10 text-gray-600">
                    {project.badge}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <p className="text-gray-400 text-xs mb-1">{project.subtitle}</p>
                <h3 className="text-lg font-bold text-black mb-2">{project.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stats.map((stat) => (
                    <span
                      key={stat}
                      className="px-2 py-0.5 text-[10px] border border-black/10 text-gray-600"
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.playStoreUrl !== '#' && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-1.5 bg-black text-white text-center text-xs hover:bg-gray-800 transition-colors"
                    >
                      Play Store
                    </a>
                  )}
                  {project.appStoreUrl && (
                    <a
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-1.5 border border-black text-center text-xs hover:bg-black hover:text-white transition-colors"
                    >
                      App Store
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
