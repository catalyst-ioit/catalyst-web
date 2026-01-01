import { createFileRoute } from '@tanstack/react-router';
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { WavyLine } from '../components/ui/icons.tsx';

export const Route = createFileRoute('/newsletter')({
  component: RouteComponent,
});

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
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

type Issue = {
  month: string;
  title: string;
  blurb: string;
  thumb: string;
  pdf: string;
};

const issues: Issue[] = [
  {
    month: 'December 2025',
    title: 'Issue 1',
    blurb: 'The Beginning of something great.',
    thumb: '/newsletter/issues/dec-thumb.webp',
    pdf: '/newsletter/issues/dec.pdf',
  },
  
];

function RouteComponent() {
  const { ref: issuesRef, inView: issuesInView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div className="overflow-hidden" initial="hidden" animate="visible" variants={pageVariants}>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center py-32 md:pt-60 md:pb-28 px-4 sm:px-6 md:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img src="/homepage/hero_desktop.webp" alt="Abstract background" className="w-full h-full object-cover" />
        </div>
        <motion.div
          className="relative z-10 max-w-3xl mx-auto"
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-medium text-white leading-none tracking-tighter font-heading"
            variants={heroItemVariants}
          >
            Our Monthly Wrapped
          </motion.h1>
          <motion.div className="mt-4 flex justify-center" variants={heroItemVariants}>
            <WavyLine id="newsletter-hero" />
          </motion.div>
        </motion.div>
      </section>

      {/* Issue Cards (team-style) */}
      <section ref={issuesRef} className="py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="mt-3 text-4xl sm:text-5xl font-heading text-white font-medium">Latest Issue</h2>
        </div>
                  <div className="mt-4 flex justify-center">
            <WavyLine id="newsletter-latest" />
          </div>

        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={issuesInView ? 'visible' : 'hidden'}
        >
          {issues.map((issue) => (
            <motion.article
              key={issue.month}
              className="border border-white/20 bg-[#1a1a1a] overflow-hidden text-left flex flex-col w-full max-w-sm mx-auto"
              variants={cardVariants}
            >
              <a href={issue.pdf} className="block" target="_blank" rel="noopener noreferrer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={issue.thumb}
                    alt={`${issue.month} newsletter thumbnail`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </a>

              <div className="p-6 flex flex-col gap-3">
                <span className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">{issue.month}</span>
                <h3 className="text-2xl font-heading text-white">{issue.title}</h3>
                <p className="text-white/70 leading-relaxed">{issue.blurb}</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <a
                    href={issue.pdf}
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm text-white/80 hover:text-white hover:border-white"
                    download
                  >
                    Download
                  </a>
                  <a
                    href={issue.pdf}
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm text-white/80 hover:text-white hover:border-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}
