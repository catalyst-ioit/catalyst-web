import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import { WavyLine, ArrowRightIcon } from '../components/ui/icons.tsx'

type DomainKey = 'tech' | 'hr' | 'marketing';

interface DomainData {
  id: DomainKey;
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  formLink: string;
}

const DOMAINS: DomainData[] = [
  {
    id: 'tech',
    title: 'Tech Team',
    image: '/projects/tech-team.png',
    shortDescription: 'Engineering initiatives, AI/ML, Web3, and systems development.',
    fullDescription:
      'The Tech team works on engineering initiatives, research tasks, internal tools, and projects across domains such as AI and ML, Web3, systems, development and related technical areas.',
    formLink: 'https://forms.gle/VkKB7GZRFxBnptRA6'
  },
   {
    id: 'marketing',
    title: 'Marketing Team',
    image: '/projects/marketing-join.png',
    shortDescription: 'Brand presence, content creation, and outreach strategies.',
    fullDescription:
      'The Marketing team is responsible for developing content, strengthening brand presence, managing outreach activities, and supporting communication strategies for Catalyst.',
    formLink: 'https://forms.gle/eqbYeuwksqkzjaxr8'
  },  
  {
    id: 'hr',
    title: 'HR Team',
    image: '/projects/hr.png',
    shortDescription: 'Internal coordination, recruitment, and culture management.',
    fullDescription:
      'The HR team focuses on internal coordination, documentation, recruitment processes, member communication, and contributing to a positive and well-organised club environment.',
    formLink: 'https://forms.gle/Kfi4PQY69hhDDxx76'
  },
];

const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const heroContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
};

const heroItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } }
};

const cardContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

export const Route = createFileRoute('/joinus')({
  component: RouteComponent
});

function RouteComponent() {
  const [selectedDomain, setSelectedDomain] = useState<DomainData | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedDomain ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedDomain]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="min-h-screen bg-[#0a0a0a] text-white"
    >
<section className="relative min-h-[60vh] flex items-center justify-center pt-35 sm:pt-46 lg:pt-64 pb-5 px-4 sm:px-6 md:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/homepage/hero_desktop.webp"
            alt="Abstract background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]" />
        </div>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto"
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-none tracking-tighter font-heading"
            variants={heroItemVariants}
          >
            Join Us!
          </motion.h1>

          <motion.div className="mt-6 flex justify-center" variants={heroItemVariants}>
            <WavyLine id="joinus-hero" />
          </motion.div>

          <motion.p
            className="mt-8 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            variants={heroItemVariants}
          >
            Catalyst operates at the intersection of innovation, strategy, and execution. We are now
            accepting applications for individuals eager to contribute to the institute’s premier
            committee and primary think tank.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={cardContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {DOMAINS.map((domain) => (
            <motion.div
              key={domain.id}
              variants={cardVariants}
              className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-pink-900/40 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img
                  src={domain.image}
                  alt={domain.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-heading font-medium text-white mb-2">{domain.title}</h3>
                <p className="text-white/60 mb-6 flex-grow">{domain.shortDescription}</p>

                <button
                  onClick={() => setSelectedDomain(domain)}
                  className="inline-flex items-center text-sm font-semibold text-purple-400 group-hover:text-purple-300 transition-colors"
                >
                  Read More
                  <ArrowRightIcon className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedDomain && (
          <>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              onClick={() => setSelectedDomain(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 cursor-pointer"
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-[#111] border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl pointer-events-auto flex flex-col"
              >
                <div className="relative h-40 sm:h-48 shrink-0">
                  <img
                    src={selectedDomain.image}
                    alt={selectedDomain.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                  <button
                    onClick={() => setSelectedDomain(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors border border-white/10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                  <div className="absolute bottom-4 left-6 sm:left-8">
                    <h2 className="text-3xl sm:text-4xl font-heading font-medium text-white">
                      {selectedDomain.title}
                    </h2>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  <div className="text-white/60 text-sm italic border-l-2 border-purple-500/30 pl-4">
                    Catalyst is now accepting applications. We invite motivated students who are
                    eager to contribute to the institute’s premier committee.
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Role Overview</h3>
                    <p className="text-white/80 leading-relaxed">{selectedDomain.fullDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Who We Are Looking For</h3>
                    <p className="text-white/80 leading-relaxed">
                      Catalyst seeks individuals who demonstrate{' '}
                      <span className="text-purple-400">
                        discipline, curiosity, commitment, and a willingness to take ownership
                      </span>
                      . Students from FY, SY and TY who aspire to work in a results-oriented and
                      intellectually driven environment are encouraged to apply. Prior experience is
                      not required; potential and professionalism are valued.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-white/40">We look forward to reviewing your application.</p>
                    <a
                      href={selectedDomain.formLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors shadow-lg shadow-purple-900/20"
                    >
                      Apply Here
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 