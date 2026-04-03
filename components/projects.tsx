'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export function Projects() {
  const projects = [
    {
      title: 'UNI-FINDER',
      description:
        'AI-powered university recommendation system using NLP and Cosine Similarity to match students with programs in Pampanga based on interests and budget.',
      technologies: ['FastAPI', 'Node.js', 'React.js', 'MongoDB', 'NLP'],
      image: '/projects/Unifinder.jpg',
      github: '#', 
      live: 'https://uni-finder.dev/',
    },
    {
      title: 'Deployment Manager',
      description:
        'Custom DevOps orchestrator that automates Docker deployments from GitHub URLs using webhooks for real-time CI/CD pipelines.',
      technologies: ['Node.js', 'Docker', 'Webhooks', 'Smee.io', 'Shell Scripting'],
      image: '/projects/Deployment Manager.jpg',
      github: 'https://github.com/Granttyy/deployment-manager', 
      live: '#', 
    },
    {
      title: 'PBO Global OJT Tracker',
      description:
        'Professional time-tracking system with JWT authentication and automated PDF report generation for internship compliance.',
      technologies: ['Next.js', 'Express.js', 'MongoDB', 'JWT', 'PDFKit'],
      image: '/projects/PBO - DTR.jpg',
      github: '#', 
      live: 'https://pbo-dtr.vercel.app/',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 md:px-12 bg-background relative overflow-hidden text-foreground selection:bg-accent/30"
    >
      {/* Design System Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-[0.3em]">Portfolio</span>
          <h2 className="text-5xl md:text-7xl font-extrabold text-foreground mt-4 italic tracking-tighter">
            Featured Project<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur-md transition-all duration-500 hover:border-accent/40 hover:shadow-2xl hover:shadow-black/60"
            >
              {/* Image Section - Consistent Height & Gradients */}
              <div className="relative h-80 md:h-[450px] overflow-hidden bg-muted/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out scale-105 group-hover:scale-100 opacity-80 group-hover:opacity-100"
                />
                {/* The "Bleed" Gradient: transitions image into content */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent group-hover:from-background/90 transition-all duration-500" />
              </div>

              {/* Content Overlay Area */}
              <div className="relative p-8 md:p-10 -mt-32 z-10 bg-gradient-to-b from-transparent via-background/90 to-background group-hover:via-background transition-all duration-500">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold text-foreground group-hover:text-accent transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  
                  {/* Floating Action Buttons */}
                  <div className="flex gap-3">
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="p-2.5 rounded-xl border border-border bg-background/50 text-muted-foreground hover:text-accent hover:border-accent transition-all"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        className="p-2.5 rounded-xl border border-border bg-background/50 text-muted-foreground hover:text-accent hover:border-accent transition-all"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed mb-8 line-clamp-3 group-hover:text-foreground/80 transition-colors">
                  {project.description}
                </p>

                {/* Tech Pills matched to About/Experience design */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-muted-foreground text-[11px] font-bold px-3 py-1.5 bg-background rounded-full border border-border group-hover:border-accent/30 group-hover:text-foreground transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}