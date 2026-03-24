'use client';

import { motion } from 'framer-motion';

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Mobile Dev',
    skills: ['Flutter', 'Dart', 'Kotlin', 'Swift'],
  },
  {
    category: 'Web',
    skills: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
  },
  {
    category: 'Architecture',
    skills: ['Bloc', 'GetX', 'Provider', 'State Management', 'Route Management'],
  },
  {
    category: 'Integration',
    skills: ['REST APIs', 'HTTP', 'JSON Parsing', 'Third-party Libraries'],
  },
  {
    category: 'Tools',
    skills: ['GitHub', 'Bitbucket', 'Git', 'Agile', 'Scrum'],
  },
];

const getIconUrl = (name: string) => {
  const map: Record<string, string> = {
    'Flutter': 'flutter', 'Dart': 'dart', 'Kotlin': 'kotlin', 'Swift': 'swift',
    'HTML': 'html5', 'CSS': 'css3', 'JavaScript': 'javascript', 'MySQL': 'mysql',
    'GitHub': 'github', 'Bitbucket': 'bitbucket', 'Git': 'git'
  };
  const slug = map[name];
  return slug ? `https://cdn.simpleicons.org/${slug}/000000` : null;
};

export default function Skills() {
  return (
    <section className="relative py-12 md:py-16 bg-white" id="skills">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="mb-12"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Technical Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="bg-white border border-black/10 p-6"
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
            >
              <h3 className="text-sm font-medium text-black mb-4 uppercase tracking-wider">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const iconUrl = getIconUrl(skill);
                  return (
                    <span
                      key={skill}
                      className="group flex items-center gap-2 px-3 py-1.5 text-xs border border-black/10 text-gray-600 hover:bg-black hover:text-white transition-colors cursor-default"
                    >
                      {iconUrl && (
                        <img 
                          src={iconUrl} 
                          alt={skill} 
                          className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:invert transition-all" 
                        />
                      )}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
