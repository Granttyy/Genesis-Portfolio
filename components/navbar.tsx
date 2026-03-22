'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  // Animation variants for the mobile menu links
  const menuLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1, // Slight stagger after menu opens
        duration: 0.6, // Slower fade-in
        ease: "easeOut"
      }
    }),
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      // Slower entrance for the navbar itself
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 md:py-8 flex items-center justify-between">
        {/* Logo */}
        <motion.div className="text-lg md:text-xl font-bold text-white z-[60]">
          <Link href="#home">
            <span className="text-accent">&lt;</span>
            <span className="hidden sm:inline">Genesis Grant Vivero</span>
            <span className="sm:hidden">GGV</span>
            <span className="text-accent">/&gt;</span>
          </Link>
        </motion.div>

        {/* Right Side: Button + Hamburger */}
        <div className="flex items-center gap-6">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, backgroundColor: '#00d9ff', color: '#0a0a0a' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4 }} // Slower hover interaction
            className="px-5 py-2 rounded-full border border-white/20 text-white/80 text-xs md:text-sm font-medium hidden xs:block"
          >
            Get In Touch
          </motion.a>

          <button 
            className="md:hidden text-white z-[60] p-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-white/70 hover:text-accent text-sm transition-colors duration-500">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            // Slower slide-down/fade effect
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 md:hidden z-50"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={menuLinkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Link 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl text-white/80 hover:text-accent font-light tracking-widest"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}