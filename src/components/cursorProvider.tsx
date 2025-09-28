import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import { CursorContext, useCursor, type CursorVariant } from '../hooks/cursor.ts';




export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default');

    const springConfig = { damping: 25, stiffness: 300, mass: 0.1 };
    const springX = useSpring(-100, springConfig);
    const springY = useSpring(-100, springConfig);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            springX.set(e.clientX);
            springY.set(e.clientY);
        };

        globalThis.addEventListener('mousemove', updateMousePosition);

        return () => {
            globalThis.removeEventListener('mousemove', updateMousePosition);
        };
    }, [springX, springY]);

    const variants = {
        default: { scale: 1, borderWidth: '1.5px', borderColor: 'white', backgroundColor: 'transparent' },
        link: { scale: 1.7, borderWidth: '2px', borderColor: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)' },
        text: { scale: 0.5, mixBlendMode: 'difference', backgroundColor: 'white' }
    };

    const dotVariants = {
        default: { scale: 1, backgroundColor: 'white' },
        link: { scale: 0 },
        text: { scale: 2.5, mixBlendMode: 'difference', backgroundColor: 'white' }
    }

    return (
        <CursorContext.Provider value={{ setCursorVariant }}>
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-50 rounded-full hidden lg:block"
                style={{
                    width: 32,
                    height: 32,
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                variants={variants}
                animate={cursorVariant}
                transition={{ duration: 0.1 }}
            />
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-50 rounded-full hidden lg:block"
                style={{
                    width: 8,
                    height: 8,
                    x: mousePosition.x,
                    y: mousePosition.y,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                variants={dotVariants}
                animate={cursorVariant}
            />
            {children}
        </CursorContext.Provider>
    );
};


export const CursorHover: React.FC<{ children: React.ReactNode, variant: CursorVariant, className?: string }> = ({ children, variant, className }) => {
    const { setCursorVariant } = useCursor();
    return (
        <div
            onMouseEnter={() => setCursorVariant(variant)}
            onMouseLeave={() => setCursorVariant('default')}
            className={className}
        >
            {children}
        </div>
    );
};