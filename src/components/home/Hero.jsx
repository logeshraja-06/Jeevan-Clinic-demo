import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100vh-76px)] sm:h-[calc(100vh-80px)] min-h-[560px] max-h-[820px] flex flex-col justify-between pt-20 md:pt-24 pb-4 md:pb-6 bg-[#28363F] text-white overflow-hidden mt-[76px] sm:mt-[80px]">
      {/* Full-width Photographic Background with Slow Ken Burns Zoom Effect */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.07 }}
        transition={{ duration: 18, ease: [0.25, 1, 0.5, 1] }}
        className="absolute inset-0 bg-cover bg-center md:bg-[position:70%_center] z-0 transform-gpu contrast-[1.03] brightness-[0.97]"
        style={{ backgroundImage: `url('/images/clinic/hero_physio.png')` }}
      />

      {/* Multi-layer Gradient Overlay for Optimal Text Readability & Photography Visibility */}
      <div 
        className="absolute inset-0 z-10 hero-overlay-gradient hidden md:block" 
        style={{
          background: 'linear-gradient(90deg, rgba(40, 54, 63, 0.62) 0%, rgba(27, 132, 128, 0.32) 42%, rgba(20, 81, 79, 0.10) 72%, rgba(40, 54, 63, 0) 100%)'
        }}
      />
      <div 
        className="absolute inset-0 z-10 hero-overlay-mobile md:hidden" 
        style={{
          background: 'linear-gradient(180deg, rgba(40, 54, 63, 0.82) 0%, rgba(27, 132, 128, 0.45) 50%, rgba(40, 54, 63, 0.82) 100%)'
        }}
      />

      {/* Subtle Radial Vignette for Depth */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-transparent via-[#28363F]/20 to-[#28363F]/60 pointer-events-none" />

      {/* Soft Bottom Fade for Smooth Transition into Next Section */}
      <div className="absolute inset-x-0 bottom-0 h-28 z-10 bg-gradient-to-t from-[#28363F] via-[#28363F]/60 to-transparent pointer-events-none" />

      {/* Main Content Area */}
      <Container className="relative z-20 my-auto w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-5 text-left">
          
          {/* Main Headline (Scaled to 52px - 68px desktop, fits 2 lines comfortably) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.12] text-white"
          >
            Restore Your <span className="font-bold text-white">Movement.</span><br />
            Reclaim Your <span className="font-bold text-[#1B8480]">Life.</span>
          </motion.h1>

          {/* Supporting Text (~2 lines max) */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="font-body text-sm sm:text-base md:text-lg text-[#F4F8F7]/90 max-w-xl font-normal leading-relaxed"
          >
            Personalized physiotherapy and rehabilitation care designed to help you recover, move better and return to everyday life with confidence.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
            className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <Button
              href="/services"
              variant="primary"
              size="md"
              showArrow
              className="!rounded-md sm:!rounded-md"
            >
              Explore Treatments
            </Button>
            
            <Button
              href="/contact"
              variant="outline"
              size="md"
              className="!rounded-md sm:!rounded-md !border-white/40 !text-white hover:!bg-white hover:!text-[#1E2A38]"
            >
              Contact Us
            </Button>
          </motion.div>

          {/* Minimal Information Line (No pills, no cards) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.36, ease: "easeOut" }}
            className="pt-2 font-body text-xs sm:text-sm font-medium tracking-wider text-[#F4F8F7]/75 flex items-center gap-2.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1B8480]" />
            <span>BPT • MGR University • 5 Years in Healthcare</span>
          </motion.div>

        </div>
      </Container>

      {/* Hero Bottom Detail Bar */}
      <Container className="relative z-20 w-full pt-2">
        <div className="pt-3 border-t thin-line-dark flex items-center justify-between font-body text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#F4F8F7]/60">
          <span className="font-heading font-medium tracking-normal text-[#F4F8F7]/85">
            JEEVAN PHYSIOTHERAPY CLINIC
          </span>
          <span className="flex items-center gap-1 text-[#1B8480] font-semibold animate-pulse">
            Scroll to explore ↓
          </span>
        </div>
      </Container>
    </section>
  );
};
