'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Loader2 } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const MY_EMAIL = 'genesisgrantvivero@gmail.com';

  // Social link Gmail fallback (keeps your original "quick connect" behavior)
  const openGmail = (subject: string, body: string) => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${MY_EMAIL}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  // ✅ New EmailJS Submit Handler
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      alert("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again or use the email button above.");
    } finally {
      setIsSending(false);
    }
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: '#',
      handle: MY_EMAIL,
      onClick: () => openGmail('Hello Genesis', 'Hi Genesis, I would like to connect with you.'),
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Granttyy',
      handle: '@Granttyy',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/genesis-grant-vivero-861519364',
      handle: 'Genesis Grant Vivero',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent blur-3xl" />

      <div className="max-w-4xl mx-auto w-full z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 leading-tight">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-300">Amazing</span>
          </h2>
        </motion.div>

        {/* Social Cards */}
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                onClick={(e) => { if (social.onClick) { e.preventDefault(); social.onClick(); } }}
                variants={item}
                whileHover={{ y: -5, borderColor: '#00d9ff' }}
                className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-1">{social.label}</h3>
                <p className="text-white/60 text-sm truncate">{social.handle}</p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact Form Section */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="pt-12 border-t border-white/10">
          <p className="text-white/60 text-sm text-center mb-10">Or use the secure contact form below</p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4 max-w-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name" // Matches {{name}} in EmailJS
                placeholder="Your Name"
                required
                className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all"
              />
            </div>

            <input
              type="text"
              name="subject" // Matches {{subject}} in EmailJS
              placeholder="Subject"
              required
              className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all"
            />

            <textarea
              name="message" // Matches {{message}} in EmailJS
              placeholder="Your message..."
              rows={5}
              required
              className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all resize-none"
            />

            <motion.button
              type="submit"
              disabled={isSending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-accent text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}