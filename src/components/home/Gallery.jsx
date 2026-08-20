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

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 pt-2">
          {campGalleryData.map((item, idx) => {
            const colSpanClass =
              idx === 0
                ? 'lg:col-span-7 md:col-span-2'
                : idx === 1
                ? 'lg:col-span-5 md:col-span-1'
                : idx === 2
                ? 'lg:col-span-4 md:col-span-1'
                : idx === 3
                ? 'lg:col-span-4 md:col-span-1'
                : 'lg:col-span-4 md:col-span-2';

            const heightClass = idx === 0 ? 'h-80 md:h-[430px]' : 'h-72 md:h-80';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`${colSpanClass} relative overflow-hidden group cursor-pointer border border-gray-300 bg-[#28363F] shadow-sm`}
                onClick={() => setSelectedImage(item)}
              >
                <div className={`w-full ${heightClass} relative overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] rounded-none"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#28363F]/95 via-[#28363F]/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1 bg-[#1B8480] text-white font-body text-xs font-semibold tracking-wider rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Expand Icon */}
                  <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10 text-white transform transition-transform duration-300 group-hover:-translate-y-1">
                    <h3 className="font-heading text-lg sm:text-xl font-extrabold line-clamp-1 mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs text-[#F4F8F7]/85 line-clamp-2 leading-relaxed font-normal">
                      {item.caption}
                    </p>

                    <div className="mt-3 pt-2 border-t thin-line-dark flex items-center justify-between font-body text-[11px] text-[#1B8480] font-semibold">
                      <span className="flex items-center gap-1 text-white/90">
                        <MapPin className="w-3 h-3 text-[#1B8480]" /> {item.location}
                      </span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
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
