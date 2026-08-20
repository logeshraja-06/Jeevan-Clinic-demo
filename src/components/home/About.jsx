import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const About = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Sharp Photography (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative border border-gray-200 shadow-md">
              <img
                src="/images/clinic/about_physio.png"
                alt="Physiotherapy session at Jeevan Physiotherapy Clinic"
                className="w-full h-[460px] sm:h-[520px] object-cover rounded-none"
              />
            </div>
          </motion.div>

          {/* Right Column: Editorial Text & Credentials (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.2em] text-[#1B8480]">
              <span className="w-4 h-[2px] bg-[#1B8480]" />
              <span>ABOUT THE CLINIC</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E2A38] leading-[1.15]">
              Care Designed Around Your Recovery.
            </h2>

            <p className="font-body text-base sm:text-lg text-[#6B7280] leading-relaxed font-normal">
              Jeevan Physiotherapy Clinic is dedicated to delivering professional rehabilitation care with a human touch. Every patient receives a comprehensive physical evaluation to uncover the underlying cause of pain or restricted movement, creating a clear pathway back to active living.
            </p>

            {/* Editorial Credentials Information Row */}
            <div className="pt-6 border-t thin-line-separator grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="pr-4 border-r thin-line-separator last:border-none">
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1B8480]">
                  BPT
                </div>
                <div className="font-body text-xs text-[#6B7280] font-medium mt-1">
                  Bachelor of Physiotherapy
                </div>
              </div>

              <div className="pr-4 border-r thin-line-separator last:border-none">
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1B8480]">
                  MGR
                </div>
                <div className="font-body text-xs text-[#6B7280] font-medium mt-1">
                  MGR University
                </div>
              </div>

              <div className="pr-4 border-r thin-line-separator last:border-none">
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1B8480]">
                  2021
                </div>
                <div className="font-body text-xs text-[#6B7280] font-medium mt-1">
                  Qualification Year
                </div>
              </div>

              <div className="last:border-none">
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1B8480]">
                  5 YEARS
                </div>
                <div className="font-body text-xs text-[#6B7280] font-medium mt-1">
                  Healthcare Experience
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button href="/about" variant="primary" size="md" showArrow>
                Learn More About Our Practice
              </Button>
            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
};
