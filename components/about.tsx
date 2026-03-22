'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function About() {
  const skills = [
    {
      category: 'Backend & APIs',
      items: ['FastAPI', 'Node.js', 'Express.js', 'Python', 'REST APIs', 'Webhooks']
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Docker', 'CI/CD', 'Bash Scripting', 'Linux']
    },
    {
      category: 'Networking',
      items: ['IP Networking', 'Router Configuration', 'IT Support']
    },
    {
      category: 'Other',
      items: ['MongoDB', 'MySQL', 'NLP', 'Web Scraping', 'Data Analysis']
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-24 px-6 md:px-12 bg-black relative overflow-hidden"
    >
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-blue-400 text-sm font-bold uppercase tracking-[0.3em]">About Me</span>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mt-4">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.p variants={item} className="text-white/70 text-lg md:text-xl leading-relaxed">
              I am a <span className="font-bold text-white underline decoration-blue-400/40 decoration-2 underline-offset-4">Computer Science student</span> from
              <span className="text-blue-400 font-bold"> Pampanga State University</span> with hands-on experience building backend systems and deploying applications.

              I work with FastAPI, Node.js, Docker, and AWS to develop APIs, automate deployments, and create reliable, scalable solutions focused on <span className="font-bold text-white">Backend Development</span> and <span className="font-bold text-white">DevOps</span>.
            </motion.p>

            <motion.div variants={item} className="border-l-4 border-blue-400 pl-6 py-2">
              <p className="text-white/90 text-lg italic font-light tracking-wide">
                &quot;My goal is to develop backend systems, automate deployments, 
                and gain deeper experience in building and maintaining cloud-based applications.&quot;
              </p>
            </motion.div>

            <motion.div variants={item} className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-blue-400 font-bold hover:gap-4 transition-all duration-300"
              >
                Let&apos;s build something scalable <span className="text-2xl">→</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Fixed Image Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group" // Added 'group' here for hover context
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative">
              <Image
                src="/Genesis Grant Vivero Profile.png"
                alt="Genesis Grant Vivero Profile"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover transition-all duration-700 scale-105 group-hover:scale-100" // REMOVED grayscale classes
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Decorative Frame - Inner */}
              <div className="absolute inset-0 border border-blue-400/20 m-4 rounded-xl pointer-events-none group-hover:border-blue-400/50 transition-colors duration-500" />
            </div>
            
            {/* Subtle glow behind the image */}
            <div className="absolute -inset-1 bg-blue-500/10 blur-2xl -z-10 group-hover:bg-blue-500/20 transition-all" />
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              variants={item}
              whileHover={{ y: -10, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 group"
            >
              <h3 className="text-blue-400 font-bold text-sm mb-6 uppercase tracking-widest group-hover:text-white transition-colors">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((tech) => (
                  <span
                    key={tech}
                    className="text-white/50 text-[11px] font-bold px-3 py-1.5 bg-white/5 rounded-full border border-white/5 group-hover:border-blue-400/30 group-hover:text-white/80 transition-all"
                  >
                    {tech}
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