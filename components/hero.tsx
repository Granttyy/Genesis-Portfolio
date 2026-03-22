'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  
  const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 bg-black relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto z-10"
      >
        <motion.div variants={item} className="mb-6">
          <span className="text-accent text-sm font-medium">Hi, I'm Genesis Grant Vivero</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
        >
          Backend &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-300">
            DevOps
          </span>{' '}
          Engineer
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl leading-relaxed"
        >
          I build and deploy scalable backend systems using FastAPI, Node.js, and Docker, with hands-on experience in 
          cloud infrastructure and CI/CD pipelines.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col md:flex-row gap-6 mb-16"
        >
          {/* Primary CTA: View Resume */}
          <motion.a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent text-black font-semibold rounded-full hover:shadow-lg transition-shadow text-center"
          >
            View Resume
          </motion.a>

          {/* Secondary CTA: View Work */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, borderColor: '#00d9ff' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:border-accent transition-colors text-center"
          >
            View My Work
          </motion.a>
        </motion.div>

        <motion.div
          variants={item}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center pt-8"
        >
          <ArrowDown className="w-6 h-6 text-accent/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}