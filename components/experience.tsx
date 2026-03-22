'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const EXPERIENCES = [
  {
    title: 'IT Intern',
    company: 'PBO Global',
    period: 'Feb 2026 — Mar 2026',
    type: 'work',
    description:
      'Engineered network optimizations and resolved critical hardware/software bottlenecks. Transitioned physical layouts into high-fidelity Figma designs and streamlined IT asset tracking.',
    skills: ['Network Architecture', 'Figma', 'Hardware Diagnostics', 'Network Configuration'],
  },
  {
    title: 'BS in Computer Science',
    company: 'Pampanga State University',
    period: '2022 — 2026',
    type: 'edu',
    description:
      'Specializing in Cloud Infrastructure and Backend Systems. Developed a robust foundation in algorithmic complexity, database normalization, and distributed systems.',
    skills: ['Software Engineering', 'Cloud Computing', 'Distributed Systems', 'Data Structures'],
  },
  {
    title: 'Inventory Management Specialist',
    company: 'Automatiq',
    period: 'Sep 2025 — Jan 2026',
    type: 'work',
    description:
      'Developed automated web scraping scripts to aggregate product intelligence. Performed deep-dive data analysis to optimize inventory turnover and order accuracy.',
    skills: ['Data Analytics', 'Process Automation', 'Inventory Control'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-black text-white selection:bg-accent/30">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter italic">
            Experience<span className="text-accent">.</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-md font-mono text-sm uppercase tracking-widest">
            A chronological look at my professional and academic evolution.
          </p>
        </motion.div>

        {/* Timeline Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0"
        >
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 pb-16 last:pb-0"
            >
              {/* Timeline Dot/Icon */}
              <div className="absolute -left-[13px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-black border border-white/20 text-accent group-hover:border-accent transition-colors">
                {exp.type === 'work' ? <Briefcase size={12} /> : <GraduationCap size={12} />}
              </div>

              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{exp.title}</h3>
                  <p className="text-accent/90 font-medium text-lg">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-white/40 font-mono text-xs whitespace-nowrap bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  <Calendar size={12} />
                  {exp.period}
                </div>
              </div>

              <p className="text-white/60 leading-relaxed max-w-3xl text-base mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/80 hover:border-accent/50 hover:text-accent transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}