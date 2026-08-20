import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, MapPin } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { campGalleryData } from '../../data/gallery';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 md:py-28 bg-[#F4F8F7] relative border-t thin-line-separator">
      <Container>
        <SectionHeading
          eyebrow="COMMUNITY OUTREACH"
          title="Care Beyond the Clinic"
          subtitle="Supporting movement, awareness and better health in the community."
        />

        {/* Editorial Masonry Grid (Balanced 6-6 and 4-4-4 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 pt-2">
          {campGalleryData.map((item, idx) => {
            // Balanced column spans: Row 1 has two 6-col cards; Row 2 has three 4-col cards
            const colSpanClass =
              idx === 0 || idx === 1
                ? 'lg:col-span-6 md:col-span-1'
                : 'lg:col-span-4 md:col-span-1';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`${colSpanClass} relative w-full h-72 sm:h-80 md:h-88 lg:h-96 overflow-hidden group cursor-pointer border border-gray-200/80 bg-[#28363F] shadow-md rounded-2xl`}
                onClick={() => setSelectedImage(item)}
              >
                {/* Clean Edge-to-Edge Full-Fill Image with Smooth Hover Zoom */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Concentrated Bottom Gradient Overlay (~45% height for maximum photo visibility) */}
                <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#28363F]/95 via-[#28363F]/50 to-transparent pointer-events-none z-10 transition-opacity duration-500 ease-out" />

                {/* Top-Left Category Tag */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3.5 py-1 bg-[#1B8480] group-hover:bg-[#14514F] text-white font-body text-xs font-semibold tracking-wider rounded-full shadow-md transition-all duration-300 group-hover:scale-105 inline-block">
                    {item.category}
                  </span>
                </div>

                {/* Top-Right Hover Expand Icon */}
                <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out group-hover:scale-110 border border-white/20 backdrop-blur-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Clean Minimal Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-20 text-white transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <h3 className="font-heading text-base sm:text-lg md:text-xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Lightbox Modal (Displays Full Details on Click) */}
        <AnimatePresence>
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 bg-[#28363F]/90 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative z-10 w-full max-w-4xl bg-white shadow-2xl overflow-hidden border border-white/20 my-8 rounded-2xl"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 text-white hover:bg-black/90 transition-colors rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="max-h-[60vh] overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full max-h-[60vh] object-contain rounded-none"
                  />
                </div>

                <div className="p-6 sm:p-8 bg-white space-y-3 font-body">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7280]">
                    <span className="px-3 py-1 bg-[#1B8480] text-white font-bold rounded-full">
                      {selectedImage.category}
                    </span>
                    <span>• {selectedImage.date}</span>
                  </div>

                  <h3 className="font-heading text-2xl font-extrabold text-[#1E2A38]">
                    {selectedImage.title}
                  </h3>

                  <p className="text-sm text-[#6B7280] leading-relaxed bg-[#F4F8F7] p-4 border border-[#1B8480]/15 rounded-lg">
                    {selectedImage.caption}
                  </p>

                  <div className="text-xs font-semibold text-[#6B7280] flex items-center gap-1.5 pt-1">
                    <MapPin className="w-4 h-4 text-[#1B8480]" /> Location: {selectedImage.location}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
};
