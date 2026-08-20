import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { clinicData } from '../../data/clinic';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-between pt-28 pb-8 md:pt-36 md:pb-12 bg-[#082F38] text-white overflow-hidden">
      {/* Full-width Photographic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('/images/clinic/hero_physio.png')` }}
      />

      {/* Multi-layer Gradient Overlay for Optimal Text Readability */}
      <div className="absolute inset-0 z-10 hero-overlay-gradient hidden md:block" />
      <div className="absolute inset-0 z-10 hero-overlay-mobile md:hidden" />

      {/* Main Content Area */}
      <Container className="relative z-20 my-auto">
        <div className="max-w-3xl space-y-6 text-left">
          
          {/* Main Headline (Jura font, 64-90px desktop) */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-jura text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.08] text-white"
          >
            Restore Your Movement.<br />
            <span className="gold-gradient-text">
              Reclaim Your Life.
            </span>
          </motion.h1>

          {/* Supporting Text (Quicksand font, max 2-3 lines) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-quicksand text-base sm:text-lg md:text-xl text-[#EFF8F7]/90 max-w-2xl font-normal leading-relaxed"
          >
            Personalized physiotherapy and rehabilitation care designed to help you recover, move better and return to everyday life with confidence.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Button
              href="/contact"
              variant="gold"
              size="lg"
              showArrow
            >
              Book an Appointment
            </Button>
            
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="!border-white/30 !text-white hover:!bg-white hover:!text-[#082F38]"
            >
              Explore Treatments
            </Button>
          </motion.div>

          {/* Minimal Info Line (No pills, no cards) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="pt-4 font-quicksand text-xs sm:text-sm font-semibold tracking-wider text-[#EFF8F7]/70 flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-[#C9952E]" />
            <span>BPT • MGR University • 5 Years in Healthcare</span>
          </motion.div>

        </div>
      </Container>

      {/* Hero Bottom Editorial Detail */}
      <Container className="relative z-20 pt-10">
        <div className="pt-4 border-t thin-line-dark flex items-center justify-between font-quicksand text-xs uppercase tracking-[0.2em] text-[#EFF8F7]/60">
          <span className="font-jura font-semibold tracking-normal text-[#EFF8F7]/90">
            JEEVAN PHYSIOTHERAPY CLINIC
          </span>
          <span className="flex items-center gap-1 text-[#C9952E] font-medium animate-pulse">
            Scroll to explore ↓
          </span>
        </div>
      </Container>
    </section>
  );
};
