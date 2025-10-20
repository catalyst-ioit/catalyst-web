import { createFileRoute } from '@tanstack/react-router'
import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { WavyLine, ArrowLeftIcon, ArrowRightIcon, CloseIcon } from '../components/ui/icons.tsx';
import { galleryData, type GalleryImage } from '../data/galleryData.ts';

// Animation variants
const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const heroContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const heroItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const gridContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const gridItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const Route = createFileRoute('/gallery')({
  component: RouteComponent,
})

function RouteComponent() {
  const { ref: gridRef, inView: gridInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage) {
      const currentIndex = galleryData.findIndex(img => img.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % galleryData.length;
      setSelectedImage(galleryData[nextIndex]);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage) {
      const currentIndex = galleryData.findIndex(img => img.id === selectedImage.id);
      const prevIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
      setSelectedImage(galleryData[prevIndex]);
    }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={pageVariants}>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 px-4 sm:px-6 md:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/homepage/hero_desktop.webp" alt="Abstract background" className="w-full h-full object-cover" />
        </div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-none tracking-tighter font-heading"
            variants={heroItemVariants}
          >
            Capturing Our Journey
          </motion.h1>
          <motion.div className="mt-4 flex justify-center" variants={heroItemVariants}>
            <WavyLine id="gallery-hero" />
          </motion.div>
          <motion.p
            className="mt-8 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto"
            variants={heroItemVariants}
          >
            Explore moments from our workshops, hackathons, and collaborative sessions. This is a visual diary of our passion for innovation and teamwork.
          </motion.p>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <motion.section
        ref={gridRef}
        className="py-24 px-4 sm:px-6 md:px-8"
        variants={gridContainerVariants}
        initial="hidden"
        animate={gridInView ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {galleryData.map((image) => (
            <motion.div
              key={image.id}
              layoutId={String(image.id)}
              onClick={() => setSelectedImage(image)}
              className="group aspect-square bg-[#1a1a1a] border border-white/10 cursor-pointer overflow-hidden"
              variants={gridItemVariants}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              className="absolute top-6 right-6 text-white/70 hover:text-white z-50 transition-colors"
              aria-label="Close image viewer"
            >
              <CloseIcon className="w-8 h-8" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white z-50 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
              aria-label="Previous image"
            >
              <ArrowLeftIcon className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <motion.div layoutId={String(selectedImage.id)} className="relative max-w-4xl max-h-[80vh]">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-auto h-auto max-w-full max-h-[80vh] object-contain shadow-2xl"
              />
            </motion.div>

            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white z-50 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
              aria-label="Next image"
            >
              <ArrowRightIcon className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
