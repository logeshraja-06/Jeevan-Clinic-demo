import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { clinicData } from '../../data/clinic';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between pt-28 pb-8 md:pt-36 md:pb-12 bg-[#28363F] text-white overflow-hidden">
      {/* Full-width Treatment Photography Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('/images/clinic/hero_physio.png')` }}
      />

      {/* Multi-layer Gradient Overlay (#28363F / #1B8480 / #14514F) */}
      <div className="absolute inset-0 z-10 hero-overlay-gradient hidden md:block" />
      <div className="absolute inset-0 z-10 hero-overlay-mobile md:hidden" />

      {/* Content */}
      <Container className="relative z-20 my-auto">
        <div className="max-w-3xl space-y-6 text-left">
          
          {/* Mixed Weight Hero Headline (Plus Jakarta Sans font) */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] text-white font-normal"
          >
            Restore Your <span className="font-extrabold text-white">Movement.</span><br />
            Reclaim Your <span className="font-extrabold text-[#1B8480]">Life.</span>
          </motion.h1>

          {/* Supporting Statement (Inter font) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-body text-base sm:text-lg md:text-xl text-[#F4F8F7]/90 max-w-2xl font-normal leading-relaxed"
          >
            Personalized physiotherapy and rehabilitation care designed to help you recover, move better and return to everyday life with confidence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              showArrow
            >
              Book an Appointment
            </Button>
            
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="!border-white/40 !text-white hover:!bg-white hover:!text-[#1E2A38]"
            >
              Explore Treatments
            </Button>
          </motion.div>

          {/* Minimal Information Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="pt-4 font-body text-xs sm:text-sm font-medium tracking-wider text-[#F4F8F7]/75 flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-[#1B8480]" />
            <span>BPT • MGR University • 5 Years in Healthcare</span>
          </motion.div>

        </div>
      </Container>

      {/* Hero Bottom Detail Bar */}
      <Container className="relative z-20 pt-8">
        <div className="pt-4 border-t thin-line-dark flex items-center justify-between font-body text-xs uppercase tracking-[0.2em] text-[#F4F8F7]/60">
          <span className="font-heading font-semibold tracking-normal text-[#F4F8F7]/90">
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
