import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100vh-76px)] sm:h-[calc(100vh-80px)] min-h-[560px] max-h-[820px] flex flex-col justify-between pt-20 md:pt-24 pb-4 md:pb-6 bg-[#1E2A38] text-white overflow-hidden mt-[76px] sm:mt-[80px]">
      {/* Full-width Photographic Background with Clean Visibility & Subtle Motion */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 16, ease: [0.25, 1, 0.5, 1] }}
        className="absolute inset-0 bg-cover bg-center md:bg-[position:70%_center] z-0"
        style={{ backgroundImage: `url('/images/clinic/hero_physio.png')` }}
      />

      {/* Crisp Left-Aligned Scrim for Text Legibility (Leaves Photo Crisp & Clear on Right) */}
      <div 
        className="absolute inset-0 z-10 hidden md:block pointer-events-none" 
        style={{
          background: 'linear-gradient(90deg, rgba(24, 34, 45, 0.76) 0%, rgba(24, 34, 45, 0.50) 38%, rgba(24, 34, 45, 0.15) 65%, transparent 85%)'
        }}
      />
      <div 
        className="absolute inset-0 z-10 md:hidden pointer-events-none" 
        style={{
          background: 'linear-gradient(180deg, rgba(24, 34, 45, 0.78) 0%, rgba(24, 34, 45, 0.52) 50%, rgba(24, 34, 45, 0.78) 100%)'
        }}
      />

      {/* Main Content Area */}
      <Container className="relative z-20 my-auto w-full">
        <div className="max-w-xl lg:max-w-2xl space-y-4 sm:space-y-5 text-left">
          
          {/* Main Headline — Lean, Refined & Elegant Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal tracking-tight leading-[1.16] text-white drop-shadow-xs"
          >
            Restore Your <span className="font-semibold text-white">Movement.</span><br />
            Reclaim Your <span className="font-semibold text-[#2DD4BF]">Life.</span>
          </motion.h1>

          {/* Supporting Text — Refined & Readable */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="font-body text-sm sm:text-base md:text-[17px] text-[#F4F8F7]/90 max-w-lg font-normal leading-relaxed drop-shadow-xs"
          >
            Personalized physiotherapy and clinical care designed to help you recover, move better and return to everyday life with confidence.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
            className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <Button
              href="/services"
              variant="primary"
              size="md"
              showArrow
              className="!rounded-md sm:!rounded-md shadow-sm"
            >
              Explore Treatments
            </Button>
            
            <Button
              href="/contact"
              variant="outline"
              size="md"
              className="!rounded-md sm:!rounded-md !border-white/50 !text-white hover:!bg-white hover:!text-[#1E2A38] backdrop-blur-xs"
            >
              Contact Us
            </Button>
          </motion.div>

          {/* Minimal Information Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
            className="pt-2 font-body text-xs sm:text-[13px] font-medium tracking-wider text-[#F4F8F7]/80 flex items-center gap-2.5 drop-shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
            <span>BPT • MGR University • 5 Years in Healthcare</span>
          </motion.div>

        </div>
      </Container>

      {/* Hero Bottom Detail Bar */}
      <Container className="relative z-20 w-full pt-2">
        <div className="pt-3 border-t border-white/15 flex items-center justify-between font-body text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#F4F8F7]/70">
          <span className="font-heading font-medium tracking-normal text-[#F4F8F7]/90">
            JEEVAN PHYSIOTHERAPY CLINIC
          </span>
          <span className="flex items-center gap-1 text-[#2DD4BF] font-semibold">
            Scroll to explore ↓
          </span>
        </div>
      </Container>
    </section>
  );
};
