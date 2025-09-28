import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceProps {
    number: string;
    description: string;
    imageUrl: string;
}

const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    },
};

const ProcessItem: React.FC<ServiceProps> = ({ number, description, imageUrl }) => (
    <motion.div
        className="relative p-12 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${imageUrl})` }}
        variants={itemVariants}
    >
        <div className="absolute inset-0 bg-[#111111]/60 backdrop-blur-sm"></div>
        <div className="relative z-10">
            <h3 className="text-6xl font-medium text-white/50 font-heading">{number}</h3>
            <p className="mt-6 max-w-sm text-white/80 leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

const Process: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const services: ServiceProps[] = [
        {
            number: '01',
            description: 'Discover & Define: We work with stakeholders to thoroughly understand the problem, define project goals, and outline the scope and requirements.',
            imageUrl: '/homepage/rect1.png',
        },
        {
            number: '02',
            description: 'Ideate & Design: Our team brainstorms creative solutions, designs system architectures, and creates user-centric prototypes and wireframes.',
            imageUrl: '/homepage/rect2.png',
        },
        {
            number: '03',
            description: 'Build & Implement: We write clean, efficient code and engineer the hardware, turning our designs into functional, real-world applications.',
            imageUrl: '/homepage/rect3.png',
        },
        {
            number: '04',
            description: 'Test & Deploy: We conduct rigorous testing to ensure quality and reliability before deploying the solution for its intended users.',
            imageUrl: '/homepage/rect4.png',
        },
    ];

    return (
        <section ref={ref} className="py-24 px-4 sm:px-6 md:px-8">
            <motion.div
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px overflow-hidden"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                {services.map((service) => (
                    <ProcessItem key={service.number} {...service} />
                ))}
            </motion.div>
        </section>
    );
};

export default Process;