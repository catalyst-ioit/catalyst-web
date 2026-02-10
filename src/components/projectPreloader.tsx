'use client';
import { useEffect, useState } from 'react';
import { motion,type Variants } from 'framer-motion';

const opacity: Variants = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: { duration: 0.5, delay: 0.2 },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.5 },
    },
};

const slideUp: Variants = {
    initial: {
        top: "100vh", // Start below the screen
    },
    enter: {
        top: 0, // Slide up to cover screen
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
        top: "-100vh", // Slide up away from screen
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
};

export default function Preloader({ title }: { title: string }) {
    const [dimension, setDimension] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
    const [animationState, setAnimationState] = useState<'initial' | 'enter' | 'exit'>('initial');

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        // 1. Start Entrance Animation
        setAnimationState('enter');

        // 2. Wait for read time (e.g., 1.5s), then trigger Exit
        const timer = setTimeout(() => {
            setAnimationState('exit');
        }, 2000); 

        return () => clearTimeout(timer);
    }, []);

    // The 'bulge' is defined by adding 300px to the height in the Quadratic Bezier curve
    const initialPath: string = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
    
    // The flat path for the exit state
    const targetPath: string = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

    const curve: Variants = {
        initial: {
            d: initialPath, // Keep curved while entering and holding
        },
        enter: {
            d: initialPath, // Keep curved while entering and holding
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
            d: targetPath, // Animate to flat ONLY on exit to create the "swish"
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
        },
    };

    return (
        <motion.div
            variants={slideUp}
            initial="initial"
            animate={animationState}
            className="fixed inset-0 h-screen w-screen flex items-center justify-center z-50 bg-[#141516]" // Added bg color to ensure opacity
        >
            {dimension.width > 0 && (
                <>
                    <motion.p
                        variants={opacity}
                        initial="initial"
                        animate={animationState === 'enter' ? 'enter' : 'exit'}
                        className="flex text-white text-6xl font-bold tracking-tighter font-heading absolute z-10 items-center"
                    >
                        {title}
                    </motion.p>

                    <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none">
                        <motion.path
                            variants={curve}
                            initial="initial"
                            animate={animationState}
                            fill="#141516" // Match the bg color
                        ></motion.path>
                    </svg>
                </>
            )}
        </motion.div>
    );
}