'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Projects() {
  const projects = [
    {
      title: 'UNI-FINDER',
      description:
        'AI-powered university recommendation system using NLP and Cosine Similarity to match students with programs in Pampanga based on interests and budget.',
      technologies: ['FastAPI', 'Node.js', 'React.js', 'MongoDB', 'NLP'],
      image: '/projects/Unifinder.jpg',
      github: '#', // Hidden: Show only link
      live: 'https://uni-finder.dev/',
      featured: true,
    },
    {
      title: 'Deployment Manager',
      description:
        'Custom DevOps orchestrator that automates Docker deployments from GitHub URLs using webhooks for real-time CI/CD pipelines.',
      technologies: ['Node.js', 'Docker', 'Webhooks', 'Smee.io', 'Shell Scripting'],
      image: '/projects/Deployment Manager.jpg',
      github: 'https://github.com/Granttyy/deployment-manager', 
      live: '#', // Hidden: Show only repo
      featured: true,
    },
    {
      title: 'PBO Global OJT Tracker',
      description:
        'Professional time-tracking system with JWT authentication and automated PDF report generation for internship compliance.',
      technologies: ['Next.js', 'Express.js', 'MongoDB', 'JWT', 'PDFKit'],
      image: '/projects/PBO - DTR.jpg',
      github: '#', // Hidden: Show only link
      live: 'https://pbo-dtr.vercel.app/',
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-20 px-6 md:px-12 bg-black relative"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-blue-400 text-sm font-medium">PORTFOLIO</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">Featured Projects</h2>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="relative h-80 md:h-96 overflow-hidden bg-gray-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:from-black/80" />
                </div>

                <div className="relative p-8 -mt-32 z-10 bg-gradient-to-b from-transparent via-black to-black group-hover:via-black/90 transition-all">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-6 line-clamp-2 group-hover:text-white/80 transition-colors">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2 py-1 rounded bg-white/10 text-white/70 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {/* Only show GitHub if link is provided */}
                    {project.github !== '#' && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg border border-white/20 text-white/70 hover:border-blue-400 hover:text-blue-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {/* Only show Live Link if link is provided */}
                    {project.live !== '#' && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg border border-white/20 text-white/70 hover:border-blue-400 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                   <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.github !== '#' && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-1.5 rounded border border-white/20 text-white/70 hover:border-blue-400 hover:text-blue-400 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      )}
                      {project.live !== '#' && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-1.5 rounded border border-white/20 text-white/70 hover:border-blue-400 hover:text-blue-400 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30"
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