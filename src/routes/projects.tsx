import { createFileRoute } from '@tanstack/react-router'
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { WavyLine } from '../components/ui/icons.tsx';
import { currentProjectsData, type Project } from '../data/currentProjectsData.ts';

export const Route = createFileRoute('/projects')({
  component: RouteComponent,
})

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

const projectVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const TickIcon: React.FC = () => (
  <svg className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const ProjectDetail: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const isOdd = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      variants={projectVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className={`order-1 ${isOdd ? 'lg:order-2' : 'lg:order-1'}`}>
        <p className="text-sm uppercase tracking-widest text-white/60">{project.category}</p>
        <h3 className="mt-4 text-4xl font-medium text-white font-heading">{project.title}</h3>
        <p className="mt-6 text-white/70 leading-relaxed">{project.description}</p>

        <div className="mt-8 space-y-4">
          {project.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-4">
              <TickIcon />
              <p className="text-white/80">{feature}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-white/60">Project Lead: <span className="text-white/90 font-semibold">{project.lead}</span></p>
          <p className="mt-2 text-sm text-white/60">Team: <span className="text-white/90">{project.team.join(', ')}</span></p>
        </div>
      </div>
      <div className={`order-2 ${isOdd ? 'lg:order-1' : 'lg:order-2'} flex items-center justify-center`}>
        <div className="border border-white/20 p-2 bg-[#1a1a1a]">
          <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-contain max-h-96" />
        </div>
      </div>
    </motion.div>
  );
};

function RouteComponent() {
  return (<motion.div initial="hidden" animate="visible" variants={pageVariants}>
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
          Innovations in Progress
        </motion.h1>
        <motion.div className="mt-4 flex justify-center" variants={heroItemVariants}>
          <WavyLine id="projects-hero" />
        </motion.div>
        <motion.p
          className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto"
          variants={heroItemVariants}
        >
          A glimpse into the challenges our teams are currently tackling. These projects represent our commitment to hands-on learning and real-world problem-solving.
        </motion.p>
      </motion.div>
    </section>

    {/* Projects List */}
    <section className="py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
        {currentProjectsData.map((project, index) => (
          <ProjectDetail key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  </motion.div>
  );
}
