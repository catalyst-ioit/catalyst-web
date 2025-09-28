import React from 'react';
import { InstagramIcon } from './ui/icons.tsx';
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CursorHover } from './cursorProvider.tsx';
import { Link } from '@tanstack/react-router';

const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

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
            className="bg-[#111111] border-t border-white/10 "
        >
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 md:px-8">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div className="md:col-span-2 lg:col-span-1" variants={itemVariants}>
                        <CursorHover variant="link">
                            <Link to="/" aria-label="Go to homepage">
                                <img src="/catalysts_text.svg" alt="Catalysts Logo" className="h-10" />
                            </Link>
                        </CursorHover>
                        <CursorHover variant="text">
                            <p className="mt-6 text-white/60 text-sm leading-relaxed max-w-xs">
                                A student committee at AISSMS IOIT dedicated to solving real-world problems through technology.
                            </p>
                        </CursorHover>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <FooterLinkColumn
                            title="Explore"
                            links={[
                                { name: 'About Us', href: '/about' },
                                { name: 'Our Team', href: '/team' },
                                { name: 'Projects', href: '/projects' },
                                { name: 'Events', href: '/events' },
                                { name: 'Hackathons', href: '/hackathons' },
                            ]}
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <FooterLinkColumn
                            title="Get Involved"
                            links={[
                                { name: 'Join Us', href: '/joinus' },
                                { name: 'Collaborate', href: '/collaborate' },
                                { name: 'Sponsor', href: '/sponsor' },
                                { name: 'Contact', href: '/contact' },
                            ]}
                        />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-sm font-semibold tracking-wider uppercase font-heading text-white">Connect</h3>
                        <div className="mt-6 flex space-x-6">
                            {/* <CursorHover variant="link"><a href="#" className="text-white/60 hover:text-white transition-colors"><TwitterIcon className="h-6 w-6" /></a></CursorHover>
                            <CursorHover variant="link"><a href="#" className="text-white/60 hover:text-white transition-colors"><LinkedInIcon className="h-6 w-6" /></a></CursorHover> */}
                            <CursorHover variant="link"><a href="https://www.instagram.com/catalyst.ioit/" className="text-white/60 hover:text-white transition-colors"><InstagramIcon className="h-6 w-6" /></a></CursorHover>
                        </div>
                        <div className="mt-8">
                            <p className="text-sm text-white/60">Get in touch:</p>
                            <CursorHover variant="link">
                                <a href="mailto:catalysts@aissmsioit.org" className="text-sm text-white/80 hover:text-white transition-colors mt-1 block">catalysts@aissmsioit.org</a>
                            </CursorHover>
                        </div>
                    </motion.div>
                </motion.div>
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-sm text-white/50">
                    <p>&copy; {new Date().getFullYear()} Catalysts Committee, AISSMS IOIT. All Rights Reserved.</p>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        <CursorHover variant="link"><a href="#" className="hover:text-white transition-colors">College Website</a></CursorHover>
                        <CursorHover variant="link"><a href="#" className="hover:text-white transition-colors">Code of Conduct</a></CursorHover>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

const FooterLinkColumn: React.FC<{ title: string; links: { name: string, href: string }[] }> = ({ title, links }) => (
    <div>
        <h3 className="text-sm font-semibold tracking-wider uppercase font-heading text-white">{title}</h3>
        <ul className="mt-6 space-y-4">
            {links.map(link => (
                <li key={link.name}>
                    <CursorHover variant="link">
                        <Link to={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                            {link.name}
                        </Link>
                    </CursorHover>
                </li>
            ))}
        </ul>
    </div>
);

export default Footer;