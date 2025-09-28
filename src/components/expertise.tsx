import React from 'react';
import { TripleStarIcon, WavyLine } from './ui/icons.tsx';
// Fix: Import Variants type from framer-motion
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CursorHover } from './cursorProvider.tsx';

const Expertise: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const animationVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
        <section ref={ref} className="relative py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="/homepage/rect_big.png"
                    alt="Abstract colorful background"
                    className="w-full h-full object-cover"
                    aria-hidden="true"
                />
                <div className="absolute inset-0 bg-[#111111]/70"></div>
            </div>

            <motion.div
                className="relative z-10 max-w-7xl mx-auto"
                variants={animationVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                <CursorHover variant="text">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-medium text-white leading-none tracking-tighter font-heading">
                        Our Team and <br /> Culture
                    </h2>
                </CursorHover>
                <div className="mt-4">
                    <WavyLine id="expertise" />
                </div>

                <div className="mt-20">
                    <div className="max-w-4xl space-y-8">
                        <TripleStarIcon className="w-20 h-10 opacity-50" />
                        <CursorHover variant="text">
                            <p className="text-lg text-white/70 leading-relaxed">
                                Our greatest asset is our team—a diverse group of passionate students driven by collaboration and problem-solving. We sharpen our skills in competitive hackathons and foster a culture of continuous learning through workshops and tech talks. If you're an AISSMS IOIT student with a passion for building and creating, join our vibrant community to work on exciting projects and help us tackle new challenges.
                            </p>
                        </CursorHover>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Expertise;