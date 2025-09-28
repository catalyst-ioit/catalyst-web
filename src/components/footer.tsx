import React from 'react';
import { InstagramIcon } from './ui/icons.tsx';
// Fix: Import Variants type from framer-motion
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Fix: Add Variants type to containerVariants
const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

// Fix: Add Variants type to itemVariants
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};


const Footer: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.footer
            ref={ref}
            className="bg-[#111111] border-t border-white/10 mt-24"
        >
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 md:px-8">

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >

                    <motion.div className="md:col-span-2 lg:col-span-1" variants={itemVariants}>
                        <a href="/" aria-label="Go to homepage">
                            <img src="/catalysts_text.svg" alt="Catalysts Logo" className="h-10" />
                        </a>
                        <p className="mt-6 text-white/60 text-sm leading-relaxed max-w-xs">
                            A student committee at AISSMS IOIT dedicated to solving real-world problems through technology.
                        </p>
                    </motion.div>


                    <motion.div variants={itemVariants}><FooterLinkColumn title="Explore" links={['About Us', 'Our Team', 'Projects', 'Events', 'Hackathons']} /></motion.div>
                    <motion.div variants={itemVariants}><FooterLinkColumn title="Get Involved" links={['Join Us', 'Collaborate', 'Sponsor', 'Contact']} /></motion.div>


                    <motion.div variants={itemVariants}>
                        <h3 className="text-sm font-semibold tracking-wider uppercase font-heading text-white">Connect</h3>
                        <div className="mt-6 flex space-x-6">
                            {/* <a href="#" className="text-white/60 hover:text-white transition-colors"><TwitterIcon className="h-6 w-6" /></a> */}
                            {/* <a href="#" className="text-white/60 hover:text-white transition-colors"><LinkedInIcon className="h-6 w-6" /></a> */}
                            <a href="https://www.instagram.com/catalyst.ioit/" className="text-white/60 hover:text-white transition-colors"><InstagramIcon className="h-6 w-6" /></a>
                        </div>
                        <div className="mt-8">
                            <p className="text-sm text-white/60">Get in touch:</p>
                            <a href="mailto:catalysts@aissmsioit.org" className="text-sm text-white/80 hover:text-white transition-colors mt-1 block">catalysts@aissmsioit.org</a>
                        </div>
                    </motion.div>
                </motion.div>


                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-sm text-white/50">
                    <p>&copy; {new Date().getFullYear()} Catalysts Committee, AISSMS IOIT. All Rights Reserved.</p>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        <a href="https://aissmsioit.org" target="_blank" className="hover:text-white transition-colors">College Website</a>
                        {/* <a href="#" className="hover:text-white transition-colors">Code of Conduct</a> */}
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

const FooterLinkColumn: React.FC<{ title: string; links: string[] }> = ({ title, links }) => (
    <div>
        <h3 className="text-sm font-semibold tracking-wider uppercase font-heading text-white">{title}</h3>
        <ul className="mt-6 space-y-4">
            {links.map(link => (
                <li key={link}>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default Footer;