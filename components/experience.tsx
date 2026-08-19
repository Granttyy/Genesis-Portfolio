'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const EXPERIENCES = [
  {
    title: 'Skills Training & Mentorship Program',
    company: 'Nimbyx',
    period: 'Jun 2026 — Present',
    type: 'work',
    description:
      'Administer Microsoft 365, Entra ID, and Azure VMs while building Shell/Bash scripts for automation, managing remote infrastructure, and handling credentials with Passbolt.',
    skills: ['Microsoft 365', 'Entra ID', 'Azure', 'Bash Scripting', 'Passbolt', 'IT Infrastructure'],
  },
  {
    title: 'IT Intern',
    company: 'PBO Global',
    period: 'Feb 2026 — Mar 2026',
    type: 'work',
    description:
      'Coordinated with ISPs to build network infrastructure from the ground up, diagnosed hardware/endpoint issues, and overhauled asset tracking systems.',
    skills: ['Networking', 'ISP Coordination', 'Hardware Diagnostics', 'Asset Management', 'IT Support'],
  },
  {
    title: 'Inventory Management Specialist',
    company: 'Automatiq',
    period: 'Sep 2025 — Jan 2026',
    type: 'work',
    description:
      'Automated data gathering via web scraping, resolved inventory discrepancies, and managed operational workflows using 1Password and Intercom.',
    skills: ['Web Scraping', 'Data Analysis', '1Password', 'Intercom', 'Process Automation'],
  },
  {
    title: 'BS in Computer Science',
    company: 'Pampanga State University',
    period: '2022 — 2026',
    type: 'edu',
    description:
      'Graduated Cum Laude with a GWA of 1.424, building a strong foundation in software engineering and databases while developing a focused interest in backend development and cloud systems.',
    skills: ['Software Engineering', 'Cloud Computing', 'Data Structures', 'Databases'],
  },
  {
    title: 'Customer Service Representative',
    company: 'VXI Global Solutions',
    period: 'Jun 2022 — Sep 2022',
    type: 'work',
    description:
      'Provided technical support for the Modivcare account, managed complex escalations, and maintained confidential service documentation.',
    skills: ['Technical Support', 'Customer Service', 'Process Management', 'Documentation'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function Experience() {
  return (
    <section 
      id="experience" 
      className="min-h-screen py-24 px-6 md:px-12 bg-background relative overflow-hidden selection:bg-accent/30 text-foreground"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-[0.3em]">Career Path</span>
          <h2 className="text-5xl md:text-7xl font-extrabold text-foreground mt-4">Experience</h2>
          <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed">
            A chronological look at my academic foundation and one year of hands-on professional experience in IT infrastructure, system administration, and automation.
          </p>
        </motion.div>

        {/* Timeline Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative border-l-2 border-border ml-4 md:ml-6"
        >
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 md:pl-12 pb-16 last:pb-0 group"
            >
              {/* Timeline Icon */}
              <div className="absolute -left-[17px] top-4 flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-border text-muted-foreground group-hover:border-accent group-hover:text-accent transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,217,255,0.3)] group-hover:scale-110">
                {exp.type === 'work' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
              </div>

              {/* Card Container */}
              <div className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50">
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-accent font-medium text-lg">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs font-bold whitespace-nowrap bg-background/50 px-3 py-1.5 rounded-full border border-border group-hover:border-accent/30 transition-colors">
                    <Calendar size={12} className="text-accent" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed text-base mb-8">
                  {exp.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-muted-foreground text-[11px] font-bold px-3 py-1.5 bg-background rounded-full border border-border group-hover:border-accent/30 group-hover:text-foreground transition-all"
                    >
                      {skill}
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