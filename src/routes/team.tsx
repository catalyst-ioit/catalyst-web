import { createFileRoute } from '@tanstack/react-router'
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { WavyLine } from '../components/ui/icons.tsx';
import MemberCard from '../components/memberCard.tsx';
import { advisoryBoard, committeeLeads, coreMembers } from '../data/team.ts';

export const Route = createFileRoute('/team')({
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

const gridContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
function RouteComponent() {
  const { ref: advisorRef, inView: advisorInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: leadsRef, inView: leadsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: membersRef, inView: membersInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div initial="hidden" animate="visible" variants={pageVariants}>
      {/* Hero Section */}
      <section className="relative  min-h-[60vh] flex items-center justify-center py-32 md:pt-60 px-4 sm:px-6 md:px-8 text-center overflow-hidden">
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
            Meet the Innovators
          </motion.h1>
          <motion.div className="mt-4 flex justify-center" variants={heroItemVariants}>
            <WavyLine id="team-hero" />
          </motion.div>

        </motion.div>
      </section>

      {/* Advisory Board Section */}
      <section ref={advisorRef} className="py-16 px-4 sm:px-6 md:px-8 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-medium font-heading text-white text-center">Advisory Board</h2>
          <motion.div
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8 justify-center"
            variants={gridContainerVariants}
            initial="hidden"
            animate={advisorInView ? "visible" : "hidden"}
          >
            {advisoryBoard.map(member => (
              <MemberCard key={member.name} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Committee Leads Section */}
      <section ref={leadsRef} className="py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-medium font-heading text-white text-center">Core Team</h2>
          <motion.div
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={gridContainerVariants}
            initial="hidden"
            animate={leadsInView ? "visible" : "hidden"}
          >
            {committeeLeads.map(member => (
              <MemberCard key={member.name} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Members Section */}
      <section ref={membersRef} className="py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-medium font-heading text-white text-center">Team Members</h2>
          <motion.div
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
            variants={gridContainerVariants}
            initial="hidden"
            animate={membersInView ? "visible" : "hidden"}
          >
            {coreMembers.map(member => (
              <MemberCard key={member.name} member={member} />
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
