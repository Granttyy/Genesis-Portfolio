'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-white/60 text-sm">
              © {currentYear} Genesis Grant Vivero. All rights reserved.
            </p>
          </div>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { label: 'GitHub', href: 'https://github.com/Granttyy' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/genesis-grant-vivero-861519364' },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ color: '#00d9ff' }}
                className="text-white/60 hover:text-accent text-sm font-medium transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
