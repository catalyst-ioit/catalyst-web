import React from 'react';
import { StarBurstIcon } from './ui/icons.tsx';
import { motion, type Variants } from 'framer-motion';
import { CursorHover } from './cursorProvider.tsx';
import { Link } from '@tanstack/react-router';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    },
};


const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[80vh] md:min-h-[90vh] flex flex-col justify-between px-4 sm:px-6 md:px-8 pt-28 md:pt-40 pb-16 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
                <img
                    src="/homepage/hero_desktop.webp"
                    alt="Abstract flowing colors background for desktop"
                    className="hidden md:block w-full h-full object-cover"
                    aria-hidden="true"
                />
                <img
                    src="/homepage/hero_mobile.webp"
                    alt="Abstract flowing colors background for mobile"
                    className="block md:hidden w-full h-full object-cover"
                    aria-hidden="true"
                />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto w-full flex-grow flex items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
                    <motion.div
                        className="max-w-xl"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <CursorHover variant="text">
                            <motion.h1
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-none tracking-tighter font-heading"
                                variants={itemVariants}
                            >
                                Collaborate.
                            </motion.h1>
                            <motion.h1
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-none tracking-tighter font-heading"
                                variants={itemVariants}
                            >
                                Engineer.
                            </motion.h1>
                            <motion.h1
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-none tracking-tighter font-heading"
                                variants={itemVariants}
                            >
                                Transform.
                            </motion.h1>
                        </CursorHover>
                        <CursorHover variant="text">
                            <motion.p
                                className="mt-6 text-lg sm:text-xl text-white/70"
                                variants={itemVariants}
                            >
                                We turn your challenges into solutions.
                            </motion.p>
                        </CursorHover>
                    </motion.div>
                    <motion.div
                        className="hidden md:flex items-start gap-6 max-w-xs justify-self-end"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        <StarBurstIcon className="w-10 h-10 flex-shrink-0 mt-1" />
                        <CursorHover variant="text">
                            <p className="text-base text-white/70 leading-relaxed">
                                We believe in the power of technology and innovation to address real-world challenges and make a positive impact in our community.
                            </p>
                        </CursorHover>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="relative z-10 max-w-7xl mx-auto w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <ServiceLink href='projects' title="Our Projects" />
                    <ServiceLink href='services' title="Technical Domains" />
                    <ServiceLink href='joinus' title="Join The Team" />
                    <ServiceLink href='gallery' title="Gallery" />
                </div>
            </motion.div>
        </section>
    );
};

const ServiceLink: React.FC<{ title: string, href?: string }> = ({ title, href = "#" }) => (
    <CursorHover variant="link">
        <Link to={href} className="group text-center md:text-left cursor-pointer">
            <p className="text-sm font-medium tracking-widest text-white/80 uppercase">{title}</p>
            <div className="h-px mt-2 bg-white/20 group-hover:bg-white transition-colors duration-300"></div>
        </Link>
    </CursorHover>
);

export default Hero;