import React from 'react';
import { projectData, type Project } from '../data/projectsData';
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


interface Props {
  index: number;
  title: string;
  subcategory: string;
  setModal: React.Dispatch<React.SetStateAction<{ active: boolean; index: number }>>;
  slug: string;
}

const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div variants={itemVariants} className="w-full flex justify-center py-10">
      <a
        href={project.link}
        className="relative block w-[95%] h-[90vh] group rounded-[10px] overflow-hidden shadow-xl"
      >
        <div className="absolute inset-0 z-[5] rounded-[10px] border-2 border-white/20 pointer-events-none"></div>

        <img
          src={project.src}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white z-20">
          <h2 className="text-4xl md:text-8xl font-extrabold tracking-tight uppercase text-center font-heading drop-shadow-xl">
            {project.title}
          </h2>
          <p className="text-sm md:text-base tracking-widest uppercase mt-4 text-white/80">
            {project.category}
          </p>
        </div>

        <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-300 group-hover:bg-black/50"></div>
      </a>
    </motion.div>
  );
};

export function ProjectsList() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
    >
      {projectData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}

      <motion.div variants={itemVariants} className="w-full flex justify-center pt-12 pb-24">
        <a
          href="/projects"
          className="group inline-flex items-center text-sm font-semibold border rounded-full border-purple-500 px-6 py-3 text-purple-400 hover:text-purple-300 transition-colors"
        >
          More Projects
        </a>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectShowcase() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div initial="hidden" animate="visible" variants={pageVariants}>
      <motion.section
        ref={ref}
        variants={containerVariants}
        animate={inView ? 'visible' : 'hidden'}
        className="py-24 px-4 sm:px-6 md:px-8 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-medium text-white leading-none tracking-tighter font-heading"
        >
          PROJECTS
        </motion.h1>
      </motion.section>

      <ProjectsList />
    </motion.div>
  );
}

export function ProjectItem({ index, title, subcategory, setModal, slug }: Props) {
  return (
    <a
      href={`/projects/${slug}`}
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      className="flex w-full justify-between items-center pt-8 md:pt-12 pb-4 px-4 md:px-8 border-t border-gray-400 transition-opacity duration-200 hover:opacity-50 group"
    >
      <h2 className="text-3xl md:text-5xl font-heading transition-transform duration-300 uppercase group-hover:-translate-x-3">
        {title}
      </h2>

      <p className="hidden md:block font-heading transition-transform duration-300 group-hover:translate-x-3">
        {subcategory}
      </p>
    </a>
  )
}
