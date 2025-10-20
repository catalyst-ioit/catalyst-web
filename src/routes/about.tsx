import { createFileRoute } from '@tanstack/react-router'
import { WavyLine, ArrowRightIcon } from '../components/ui/icons.tsx';
// Fix: Import Variants type from framer-motion
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Route = createFileRoute('/about')({
    component: RouteComponent,
})

const pageVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
};

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const heroContainerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const heroItemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const ValueCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <motion.div className="border border-white/20 p-8 bg-[#1a1a1a] flex flex-col" variants={itemVariants}>
        <div className="text-purple-400">{icon}</div>
        <h3 className="mt-4 text-2xl font-medium text-white font-heading">{title}</h3>
        <p className="mt-2 text-white/70 flex-grow">{description}</p>
    </motion.div>
);
function RouteComponent() {
    const { ref: philosophyRef, inView: philosophyInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: journeyRef, inView: journeyInView } = useInView({ triggerOnce: true, threshold: 0.2 });

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
                        Driven by Curiosity & Code
                    </motion.h1>
                    <motion.div className="mt-4 flex justify-center" variants={heroItemVariants}>
                        <WavyLine id="about-hero" />
                    </motion.div>
                    <motion.p
                        className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto"
                        variants={heroItemVariants}
                    >
                        Catalysts is more than just a committee; it's a launchpad for the next generation of tech innovators at AISSMS IOIT, founded on the idea that learning happens when passion meets purpose.
                    </motion.p>
                </motion.div>
            </section>

            {/* Mission & Vision Section */}
            <section ref={philosophyRef} className="py-24 px-4 sm:px-6 md:px-8">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={philosophyInView ? 'visible' : 'hidden'}
                >
                    <motion.h2 className="text-4xl font-medium text-white font-heading" variants={itemVariants}>
                        Our Philosophy
                    </motion.h2>
                    <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-left" variants={containerVariants}>
                        <motion.div variants={itemVariants}>
                            <h3 className="text-3xl font-medium text-white font-heading">Our Mission</h3>
                            <p className="mt-4 text-white/70 leading-relaxed">To bridge the gap between academic theory and real-world application by creating a dynamic environment where students can collaborate, innovate, and build impactful technology.</p>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <h3 className="text-3xl font-medium text-white font-heading">Our Vision</h3>
                            <p className="mt-4 text-white/70 leading-relaxed">To be a leading student-led innovation hub recognized for technical excellence, community contributions, and fostering future-ready engineers who drive positive change.</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Core Values Section */}
            <section ref={valuesRef} className="py-16 px-4 sm:px-6 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-medium text-white font-heading text-center">Our Core Values</h2>
                    <motion.div
                        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={valuesInView ? 'visible' : 'hidden'}
                    >
                        <ValueCard
                            title="Collaboration"
                            description="We believe the best solutions are born from diverse perspectives. Teamwork is at the heart of everything we do."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-5M3 4h5v5M10 14l10-10M3 21l11-11" /></svg>}
                        />
                        <ValueCard
                            title="Innovation"
                            description="We constantly challenge the status quo, explore emerging technologies, and encourage creative problem-solving."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
                        />
                        <ValueCard
                            title="Impact"
                            description="Our projects are purpose-driven. We aim to create solutions that make a tangible, positive difference in our community."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                        />
                        <ValueCard
                            title="Learning"
                            description="We are committed to growth through direct experience. Members are integrated into ongoing, professional-grade projects from day one."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" /></svg>}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Join Our Mission Section */}
            <section ref={journeyRef} className="py-24 px-4 sm:px-6 md:px-8">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={journeyInView ? 'visible' : 'hidden'}
                >
                    <motion.h2 className="text-4xl font-medium text-white font-heading" variants={itemVariants}>
                        Join Our Mission
                    </motion.h2>
                    <motion.p className="mt-6 text-white/70 leading-relaxed" variants={itemVariants}>
                        Ready to make an impact? We're looking for passionate students to join our ranks. Explore our team and see how you can become a part of the next wave of innovation at AISSMS IOIT.
                    </motion.p>
                    <motion.div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
                        <a
                            href="/team"
                            className="group inline-flex items-center justify-center px-8 py-3 bg-transparent border border-white/40 text-white font-semibold rounded-md hover:bg-white/10 hover:border-white transition-colors"
                        >
                            Meet The Team
                        </a>
                        <a
                            href="/joinus"
                            className="group inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors"
                        >
                            Become a Catalyst
                            <ArrowRightIcon className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </motion.div>
            </section>
        </motion.div>
    );

}
