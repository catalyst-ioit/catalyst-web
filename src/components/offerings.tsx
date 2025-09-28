import React from 'react';
import { WavyLine } from './ui/icons.tsx';
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Offering {
    title: string;
    description: string;
    imageUrl: string;
}

const offeringsData: Offering[] = [
    {
        title: "Software Solutions",
        description: "Developing robust web and mobile applications to address specific user needs and streamline processes for organizations.",
        imageUrl: "/homepage/one_ball.png"
    },
    {
        title: "AI & Machine Learning",
        description: "Utilizing data science and machine learning models to create intelligent systems that can predict, classify, and analyze complex data.",
        imageUrl: "/homepage/two_balls.png"
    },
    {
        title: "IoT & Embedded Systems",
        description: "Building smart, connected devices and sensor networks to interact with the physical world and provide real-time data and control.",
        imageUrl: "/homepage/three_balls.png"
    }
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const OfferingCard: React.FC<Offering> = ({ title, description, imageUrl }) => (
    <motion.div
        className="border border-white/20 flex flex-col h-full bg-[#1a1a1a] group overflow-hidden"
        variants={cardVariants}
    >
        <div className="overflow-hidden h-48 flex">
            <img src={imageUrl} alt={title} className=" object-contain group-hover:scale-105 my-auto mx-auto transition-transform duration-300" />
        </div>
        <div className="p-8 flex-grow flex flex-col">
            <h3 className="text-3xl font-medium bg-gradient-to-r from-purple-400 via-pink-400 to-white bg-clip-text text-transparent tracking-tight font-heading">{title}</h3>
            <p className="mt-4 text-white/70 leading-relaxed flex-grow">{description}</p>
        </div>
    </motion.div>
);


const Offerings: React.FC = () => {
    const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: cardsRef, inView: cardsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const headerContainerVariants: Variants = {
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const headerItemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };

    const cardContainerVariants: Variants = {
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    return (
        <section className="py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={headerRef}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                    variants={headerContainerVariants}
                    initial="hidden"
                    animate={headerInView ? "visible" : "hidden"}
                >
                    <motion.div variants={headerItemVariants}>
                        <p className="text-white/70">AISSMS IOIT, Pune</p>
                        <h2 className="mt-8 text-5xl sm:text-6xl md:text-7xl font-medium text-white leading-none tracking-tighter font-heading">
                            Our Technical Domains
                        </h2>
                        <div className="mt-4">
                            <WavyLine id="offerings" />
                        </div>
                    </motion.div>
                    <motion.div className="space-y-6 self-end" variants={headerItemVariants}>
                        <p className="text-white/70 leading-relaxed">
                            Our members possess a diverse range of technical skills, allowing us to tackle complex problems across various domains. We are committed to staying at the forefront of technology.
                        </p>
                        <p className="text-white/70 leading-relaxed">
                            We leverage this expertise to develop innovative solutions that are not only technically sound but also practical and impactful. Our projects span from software development to intelligent systems design.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    ref={cardsRef}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={cardContainerVariants}
                    initial="hidden"
                    animate={cardsInView ? "visible" : "hidden"}
                >
                    {offeringsData.map(offering => (
                        <OfferingCard key={offering.title} {...offering} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Offerings;