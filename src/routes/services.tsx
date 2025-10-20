import { createFileRoute } from '@tanstack/react-router'
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { WavyLine, ArrowRightIcon } from '../components/ui/icons.tsx';


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

const cardContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Data for Offerings
interface Offering {
  title: string;
  description: string;
  imageUrl: string;
}

const offeringsData: Offering[] = [
  {
    title: "Software Solutions",
    description: "Developing robust web and mobile applications to address specific user needs and streamline processes for organizations.",
    imageUrl: "/homepage/one_ball.png"
  },
  {
    title: "AI & Machine Learning",
    description: "Utilizing data science and machine learning models to create intelligent systems that can predict, classify, and analyze complex data.",
    imageUrl: "/homepage/two_balls.png"
  },
  {
    title: "IoT & Embedded Systems",
    description: "Building smart, connected devices and sensor networks to interact with the physical world and provide real-time data and control.",
    imageUrl: "/homepage/three_balls.png"
  }
];

// Data for Process
interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const processData: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover & Define',
    description: 'We work with stakeholders to thoroughly understand the problem, define project goals, and outline the scope and requirements.',
  },
  {
    number: '02',
    title: 'Ideate & Design',
    description: 'Our team brainstorms creative solutions, designs system architectures, and creates user-centric prototypes and wireframes.',
  },
  {
    number: '03',
    title: 'Build & Implement',
    description: 'We write clean, efficient code and engineer the hardware, turning our designs into functional, real-world applications.',
  },
  {
    number: '04',
    title: 'Test & Deploy',
    description: 'We conduct rigorous testing to ensure quality and reliability before deploying the solution for its intended users.',
  },
];

// Sub-components for the page
const OfferingCard: React.FC<Offering> = ({ title, description, imageUrl }) => (
  <motion.div
    className="border border-white/20 flex flex-col h-full bg-[#1a1a1a] group overflow-hidden"
    variants={cardVariants}
  >
    <div className="overflow-hidden h-48 flex">
      <img src={imageUrl} alt={title} className=" object-contain group-hover:scale-105 my-auto mx-auto transition-transform duration-300" />
    </div>
    <div className="p-8 flex-grow flex flex-col">
      <h3 className="text-3xl font-medium bg-gradient-to-r from-purple-400 via-pink-400 to-white bg-clip-text text-transparent tracking-tight font-heading">{title}</h3>
      <p className="mt-4 text-white/70 leading-relaxed flex-grow">{description}</p>
    </div>
  </motion.div>
);

const ProcessStepCard: React.FC<ProcessStep> = ({ number, title, description }) => (
  <motion.div variants={cardVariants}>
    <div className="flex items-start gap-6">
      <h3 className="text-5xl font-medium text-white/30 font-heading">{number}</h3>
      <div>
        <h4 className="text-2xl font-medium text-white font-heading">{title}</h4>
        <p className="mt-2 text-white/70 leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

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
export const Route = createFileRoute('/services')({
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
            Our Services
          </motion.h1>
          <motion.div className="mt-4 flex justify-center" variants={heroItemVariants}>
            <WavyLine id="services-hero" />
          </motion.div>
          <motion.p
            className="mt-8 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto"
            variants={heroItemVariants}
          >
            We leverage our diverse technical skills to transform complex challenges into innovative, practical solutions. From software development to AI and IoT, we build technology that makes a difference.
          </motion.p>
        </motion.div>
      </section>

      {/* Technical Domains Section */}
      <AnimatedSection className="py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-medium text-white leading-none tracking-tighter font-heading">
              Technical Domains
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-white/70">
              Our members possess a diverse range of skills, allowing us to tackle complex problems across various domains.
            </p>
          </div>

          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={cardContainerVariants}
          >
            {offeringsData.map(offering => (
              <OfferingCard key={offering.title} {...offering} />
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Our Process Section */}
      <AnimatedSection className="py-24 px-4 sm:px-6 md:px-8 bg-[#1a1a1a]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-4xl sm:text-5xl font-medium text-white leading-none tracking-tighter font-heading">
                Our Development Process
              </h2>
              <p className="mt-6 text-white/70 leading-relaxed">
                We follow a structured and agile methodology to ensure our projects are well-planned, efficiently executed, and successfully delivered.
              </p>
            </div>
            <motion.div
              className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
              variants={cardContainerVariants}
            >
              {processData.map((step) => (
                <ProcessStepCard key={step.number} {...step} />
              ))}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-32 px-4 sm:px-6 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-medium text-white font-heading">
            Have a project in mind?
          </h2>
          <p className="mt-6 text-lg text-white/70">
            We're always looking for new challenges and opportunities to collaborate. If you have an idea or a problem that technology can solve, we'd love to hear from you.
          </p>
          <div className="mt-12">
            <a
              href="#"
              className="group inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#111111] focus:ring-purple-500"
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
