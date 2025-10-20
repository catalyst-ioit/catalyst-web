import { createFileRoute } from '@tanstack/react-router'
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { WavyLine, ArrowRightIcon } from '../components/ui/icons.tsx';
import { partnersData } from '../data/partnersData.ts';
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

const logoGridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const logoItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Reusable animated section component
const AnimatedSection: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.section
      ref={ref}
      className={className}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.section>
  );
};

export const Route = createFileRoute('/partners')({
  component: RouteComponent,
})

function RouteComponent() {
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
            Driving Innovation Together
          </motion.h1>
          <motion.div className="mt-4 flex justify-center" variants={heroItemVariants}>
            <WavyLine id="partners-hero" />
          </motion.div>
          <motion.p
            className="mt-8 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto"
            variants={heroItemVariants}
          >
            We believe in the power of collaboration.
          </motion.p>
        </motion.div>
      </section>

      {/* Partners Grid Section */}
      {/* <AnimatedSection className="py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-medium text-white leading-none tracking-tighter font-heading">
              Our Collaborators
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-white/70">
              We are proud to work with a diverse group of partners who share our passion for technology and education.
            </p>
          </div>

          <motion.div
            className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
            variants={logoGridVariants}
          >
            {partnersData.map(partner => (
              <motion.a
                key={partner.name}
                href={partner.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#1a1a1a] border border-white/10 p-8 flex items-center justify-center aspect-video transition-all duration-300 hover:bg-white/5 hover:border-white/20"
                variants={logoItemVariants}
                title={partner.name}
              >
                <img
                  src={partner.logoUrl}
                  alt={`${partner.name} logo`}
                  className="max-h-16 w-auto object-contain transition-transform duration-300 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </AnimatedSection> */}

      {/* CTA Section */}
      <AnimatedSection className="py-32 px-4 sm:px-6 md:px-8 text-center bg-[#1a1a1a]/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-medium text-white font-heading">
            Interested in Partnering With Us?
          </h2>
          <p className="mt-6 text-lg text-white/70">
            We are always seeking new opportunities to collaborate on projects, host events, or create educational content. If your organization shares our vision, we'd love to hear from you.
          </p>
          <div className="mt-12">
            <a
              href="mailto:contact@catalysts.aissmsioit.org"
              className="group inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1a1a1a] focus:ring-purple-500"
            >
              Get In Touch
              <ArrowRightIcon className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
  );
}
