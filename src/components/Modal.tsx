import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import React from "react";

interface Props {
  modal: { active: boolean; index: number };
  projects: { title: string; src: string; slug: string }[];
  parentRef: React.RefObject<HTMLDivElement | null>
}

export default function Modal({ modal, projects }: Props) {
  const { active, index } = modal;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 140, damping: 18 });
  const y = useSpring(mouseY, { stiffness: 140, damping: 18 });

function handleMouseMove(e: MouseEvent) {
  const offsetX = 120; 
  const offsetY = -20; 

  const modalHeight = 350;  
  const padding = 20;        
  let targetX = e.pageX + offsetX;
  let targetY = e.pageY + offsetY;

  const maxY = window.innerHeight - modalHeight - padding;
  const minY = padding;

  if (targetY > maxY) targetY = maxY;
  if (targetY < minY) targetY = minY;

  mouseX.set(targetX);
  mouseY.set(targetY);
}


 
  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div className="pointer-events-none fixed inset-0 z-50">
          <motion.div
            style={{ x, y }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            className="absolute h-[350px] w-[400px] bg-black rounded-lg overflow-hidden"
          >
            <motion.div
              animate={{ top: `${index * -100}%` }}
              transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
              className="absolute w-full h-full"
            >
              {projects.map((p, i) => (
                <div
                  key={i}
                  className="w-full h-[350px] flex items-center justify-center"
                >
                  <img src={p.src} alt={p.title} className="max-h-[300px] object-contain" />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
