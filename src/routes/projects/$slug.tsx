import { createFileRoute } from '@tanstack/react-router'
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { currentProjectsData, type Project } from '../../data/currentProjectsData';

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = currentProjectsData.find((p) => p.id === params.slug);
    if (!project) throw new Error("Project not found");
    return project;
  },
  component: ProjectSlugPage,
});

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
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

function ProjectSlugPage() {
  const project = Route.useLoaderData();

  return (
    <>
 

    <div className="w-full text-white bg-[#1a1a1a] overflow-hidden">

    
      <div className="relative px-6 py-16 md:px-16 md:py-24 min-h-[60vh]">

        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/homepage/hero_desktop.webp"
            alt="Abstract background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10">
          <div className="mb-16 mt-32 ml-6">
            <h1 className="text-[10vw] leading-none font-normal tracking-tight uppercase ml-4">
              {project.title}
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 mt-2 font-light tracking-wide ml-6">
              {project.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 w-full max-w-6xl">

            <div className="flex flex-col">
              <span className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest mb-5">
                CATEGORY
              </span>
              <div className="w-full h-[1px] bg-gray-600 mb-5"></div>
              <p className="text-base md:text-lg font-normal text-white">
                {project.category}
              </p>
            </div>

            <div className="flex flex-col">
              <span className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest mb-5">
                Project Lead
              </span>
              <div className="w-full h-[1px] bg-gray-600 mb-5"></div>
              <p className="text-base md:text-lg font-normal text-white">
                {project.lead}
              </p>
            </div>

            <div className="flex flex-col">
              <span className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest mb-5">
                Team Members
              </span>
              <div className="w-full h-[1px] bg-gray-600 mb-5"></div>
              <p className="text-base md:text-lg font-normal text-white whitespace-pre-line">
                {project.team.join("\n")}
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* BELOW HERO – DEFAULT BACKGROUND */}
      <div className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
        <ProjectDetail project={project} index={0} />

        <motion.div variants={itemVariants} initial="hidden" animate="visible" className="w-full flex justify-center pt-20">
          <a
            href="/projects"
            className="group inline-flex items-center text-sm font-semibold border rounded-full border-purple-500 px-6 py-3 text-purple-400 hover:text-purple-300 transition-colors"
          >
            More Projects
          </a>
        </motion.div>
      </div>

    </div>
    </>
  )
}
