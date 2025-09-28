import React from 'react';
import { TripleStarIcon, WavyLine } from './ui/icons.tsx';
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CursorHover } from './cursorProvider.tsx';

const leftColVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const rightColVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 } },
};

const About: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section ref={ref} className="py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        className="space-y-12"
                        variants={leftColVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        <CursorHover variant="text">
                            <p className="text-white/70">AISSMS IOIT, Pune</p>
                        </CursorHover>
                        <div>
                            <CursorHover variant="text">
                                <h2 className="text-5xl sm:text-6xl md:text-7xl font-medium text-white leading-none tracking-tighter font-heading">
                                    A Hub for Student-Led Innovation
                                </h2>
                            </CursorHover>
                            <div className="mt-4">
                                <WavyLine id="about" />
                            </div>
                        </div>
                        <TripleStarIcon className="w-20 h-10 opacity-50" />
                    </motion.div>
                    <motion.div
                        className="space-y-8"
                        variants={rightColVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        <CursorHover variant="text">
                            <p className="text-white/70 leading-relaxed">
                                Catalysts is a dedicated student committee at AISSMS IOIT, founded on the principle of applying classroom knowledge to solve tangible, real-world problems. We are a collective of passionate thinkers, coders, and creators.
                            </p>
                            <p className="text-white/70 leading-relaxed mt-8">
                                Our mission is to bridge the gap between academic theory and practical application. We foster a culture of innovation, compete in national hackathons, and promote hands-on learning within our community.
                            </p>
                        </CursorHover>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-8">
                                <CursorHover variant="text">
                                    <p className="text-white/70 leading-relaxed">
                                        Our team consists of motivated students from various engineering disciplines, working together to tackle challenges through our collective technical expertise. We thrive on curiosity and the drive to make a meaningful impact.
                                    </p>
                                    <p className="text-white/70 leading-relaxed mt-8">
                                        From developing software for local communities to engineering solutions for industry partners, we are committed to creating technology that serves a purpose and drives positive change.
                                    </p>
                                </CursorHover>
                            </div>
                            <div className="flex justify-center md:justify-end pt-8">
                                <div className="relative w-48 h-48">
                                    <img src="/homepage/ball.png" alt="Catalysts committee members collaborating on a project" className="w-full h-full object-cover rounded-lg shadow-lg" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                                    <p className="text-xs text-white/90 absolute bottom-4 right-4">Established 2025</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;