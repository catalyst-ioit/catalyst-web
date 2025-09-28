import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { WavyLine, ArrowRightIcon } from './ui/icons.tsx';

const pageVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
};

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const WIPPage: React.FC = () => {
    return (
        <motion.div initial="hidden" animate="visible" variants={pageVariants}>
            <section className="relative min-h-[80vh] flex items-center justify-center py-32 md:py-40 px-4 sm:px-6 md:px-8 text-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img src="/homepage/hero_desktop.webp" alt="Abstract background" className="w-full h-full object-cover" />
                </div>
                <motion.div
                    className="relative z-10 max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-none tracking-tighter font-heading"
                        variants={itemVariants}
                    >
                        Coming Soon
                    </motion.h1>
                    <motion.div className="mt-4 flex justify-center" variants={itemVariants}>
                        <WavyLine id="wip-hero" />
                    </motion.div>
                    <motion.p
                        className="mt-8 text-lg sm:text-xl text-white/70 max-w-xl mx-auto"
                        variants={itemVariants}
                    >
                        This page is currently under construction. We're working hard to bring you something amazing. Stay tuned!
                    </motion.p>
                    <motion.div
                        variants={itemVariants}
                        className="mt-12"
                    >
                        <a
                            href="/"
                            className="group inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#111111] focus:ring-purple-500"
                        >
                            Go Back Home
                            <ArrowRightIcon className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </motion.div>
            </section>
        </motion.div>
    );
};

export default WIPPage;
