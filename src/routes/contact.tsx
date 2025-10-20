import { createFileRoute } from '@tanstack/react-router'
import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { WavyLine, ArrowRightIcon, MailIcon, MapPinIcon, LinkedInIcon, InstagramIcon } from '../components/ui/icons.tsx';

// Animation variants
const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const heroContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const heroItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, submitting: false, info: { error: false, msg: '' } });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServerResponse = (ok: boolean, msg: string) => {
    if (ok) {
      setFormStatus({ submitted: true, submitting: false, info: { error: false, msg: msg } });
      setFormData({ name: '', email: '', message: '' });
    } else {
      setFormStatus({ submitted: false, submitting: false, info: { error: true, msg: msg } });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus(prev => ({ ...prev, submitting: true }));
    fetch('https://formspree.io/f/xkgqaoqk', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: new FormData(e.target as HTMLFormElement)
    })
      .then(response => {
        if (response.ok) {
          handleServerResponse(true, "Thank you! Your message has been sent.");
        } else {
          response.json().then(data => {
            // Fix: Use Object.prototype.hasOwnProperty.call for better compatibility instead of Object.hasOwn
            if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
              handleServerResponse(false, data["errors"].map((error: { message: string }) => error["message"]).join(", "));
            } else {
              handleServerResponse(false, "Oops! There was a problem submitting your form.");
            }
          });
        }
      })
      .catch(() => {
        handleServerResponse(false, "Oops! There was a problem submitting your form.");
      });
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={pageVariants}>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 px-4 sm:px-6 md:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/homepage/hero_desktop.webp" alt="Abstract background" className="w-full h-full object-cover" />
        </div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-none tracking-tighter font-heading"
            variants={heroItemVariants}
          >
            Get In Touch
          </motion.h1>
          <motion.div className="mt-4 flex justify-center" variants={heroItemVariants}>
            <WavyLine id="contact-hero" />
          </motion.div>
          <motion.p
            className="mt-8 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto"
            variants={heroItemVariants}
          >
            Have a question, a project idea, or want to collaborate? We'd love to hear from you. Reach out and let's start a conversation.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Form & Info Section */}
      <motion.section
        ref={contactRef}
        variants={sectionVariants}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
        className="py-24 px-4 sm:px-6 md:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-medium text-white font-heading">Contact Information</h2>
              <p className="mt-4 text-white/70">Fill out the form or use the details below to connect with us.</p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MailIcon className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg text-white font-semibold">Email Us</h3>
                  <a href="mailto:contact@catalysts.aissmsioit.org" className="text-white/70 hover:text-white transition-colors">contact@catalysts.aissmsioit.org</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPinIcon className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg text-white font-semibold">Our Location</h3>
                  <p className="text-white/70">AISSMS Institute of Information Technology, Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-white/10">
              <h3 className="text-lg text-white font-semibold">Follow Us</h3>
              <div className="mt-4 flex space-x-6">
                <a href="https://www.linkedin.com/company/catalystioit/" className="text-white/60 hover:text-white transition-colors"><LinkedInIcon className="h-6 w-6" /></a>
                <a href="https://www.instagram.com/catalyst.ioit/" className="text-white/60 hover:text-white transition-colors"><InstagramIcon className="h-6 w-6" /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md text-white placeholder:text-white/40 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md text-white placeholder:text-white/40 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md text-white placeholder:text-white/40 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition-all"
                ></textarea>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="group inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#111111] focus:ring-purple-500 disabled:bg-purple-800 disabled:cursor-not-allowed"
                >
                  {formStatus.submitting ? 'Sending...' : 'Send Message'}
                  <ArrowRightIcon className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
                {formStatus.info.msg && (
                  <p className={`text-sm ${formStatus.info.error ? 'text-red-500' : 'text-green-500'}`}>
                    {formStatus.info.msg}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
