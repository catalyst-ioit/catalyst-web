import { createFileRoute } from '@tanstack/react-router'
import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { WavyLine, ArrowRightIcon } from '../components/ui/icons.tsx'

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

const formVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export const Route = createFileRoute('/joinus')({
  component: RouteComponent,
})

function RouteComponent() {
  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the email submission (e.g., API call)
    console.log('Email submitted:', email);
    setSubmitted(true);
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
            Become a Catalyst
          </motion.h1>
          <motion.div className="mt-4 flex justify-center" variants={heroItemVariants}>
            <WavyLine id="joinus-hero" />
          </motion.div>
          <motion.p
            className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto"
            variants={heroItemVariants}
          >
            We're always looking for the next generation of innovators. While our applications are currently closed, you can be the first to know when they reopen.
          </motion.p>
        </motion.div>
      </section>

      {/* Application Form Section */}
      <section ref={formRef} className="py-24 px-4 sm:px-6 md:px-8">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          variants={formVariants}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-medium font-heading text-white">Applications Are Currently Closed</h2>
          <p className="mt-6 text-white/70 max-w-xl mx-auto">
            Our team is currently at full capacity as we focus on our ongoing projects. Enter your email below, and we'll notify you as soon as the next recruitment cycle begins.
          </p>

          <div className="mt-12">
            {submitted ? (
              <p className="text-lg text-purple-400">Thank you! We'll be in touch.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="flex-grow px-4 py-3 bg-white/5 border border-white/20 rounded-md text-white placeholder:text-white/40 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#111111] focus:ring-purple-500"
                >
                  Notify Me
                  <ArrowRightIcon className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
