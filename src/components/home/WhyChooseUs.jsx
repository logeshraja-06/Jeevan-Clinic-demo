import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const WhyChooseUs = () => {
  const editorialItems = [
    {
      num: "01",
      title: "Expert Care",
      desc: "Professional physiotherapy care with an individualized clinical approach tailored to your body's specific biomechanics."
    },
    {
      num: "02",
      title: "Personalized Treatment",
      desc: "Treatment plans designed around each patient's condition, functional assessment, and long-term recovery goals."
    },
    {
      num: "03",
      title: "Rehabilitation Focus",
      desc: "Targeted support for injury recovery, joint mobility restoration, post-surgery rehabilitation, and strength preservation."
    },
    {
      num: "04",
      title: "Patient-Centered Approach",
      desc: "Comfortable, attentive, and empathetic clinical environment prioritizing patient comfort, safety, and physical wellbeing."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % editorialItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + editorialItems.length) % editorialItems.length);
  };

  const currentItem = editorialItems[currentIndex];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#28363F] text-white">
      {/* Photographic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-25 mix-blend-luminosity transform scale-105"
        style={{ backgroundImage: `url('/images/clinic/about_physio.png')` }}
      />

      {/* Multi-layer Dark Teal & Navy Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10" 
        style={{
          background: 'linear-gradient(135deg, rgba(40, 54, 63, 0.96) 0%, rgba(27, 132, 128, 0.88) 60%, rgba(20, 81, 79, 0.95) 100%)'
        }}
      />

      <Container className="relative z-20">
        <SectionHeading
          eyebrow="OUR CLINICAL APPROACH"
          title="Designed Around Recovery"
          subtitle="We combine clinical methodology with patient-focused attention to achieve lasting physical health."
          light={true}
        />

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto pt-2">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-6 relative overflow-hidden"
              >
                {/* Gold Accent Top Bar */}
                <div className="w-16 h-1 bg-[#C9952E] rounded-full" />

                <div className="flex items-center justify-between gap-4">
                  <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#1B8480]">
                    {currentItem.num}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9952E] bg-[#C9952E]/15 px-3.5 py-1.5 rounded-full border border-[#C9952E]/30">
                    Pillar {currentItem.num} of 04
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                  {currentItem.title}
                </h3>

                <p className="font-body text-base sm:text-lg text-[#F4F8F7]/90 leading-relaxed max-w-2xl">
                  {currentItem.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls & Dot Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8">
              {/* Dot Indicators */}
              <div className="flex items-center gap-3">
                {editorialItems.map((item, idx) => (
                  <button
                    key={item.num}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? 'w-10 bg-[#1B8480]'
                        : 'w-2.5 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrow Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="p-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all hover:scale-105 active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="p-3.5 rounded-full bg-[#1B8480] hover:bg-[#14514F] border border-[#1B8480] text-white shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
