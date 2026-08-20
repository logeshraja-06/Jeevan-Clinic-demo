import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { clinicData } from '../../data/clinic';

export const About = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Sharp Editorial Photo (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative border border-gray-200 shadow-lg">
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
            <div className="inline-flex items-center gap-2 font-quicksand text-xs font-semibold uppercase tracking-[0.2em] text-[#C9952E]">
              <span className="w-4 h-[1px] bg-[#C9952E]" />
              <span>ABOUT THE CLINIC</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-jura text-3xl sm:text-4xl md:text-5xl font-bold text-[#082F38] leading-[1.15]">
              Care Designed Around Your Recovery.
            </h2>

            <p className="font-quicksand text-base sm:text-lg text-[#17343B]/80 leading-relaxed font-normal">
              Jeevan Physiotherapy Clinic is dedicated to delivering professional rehabilitation care with a human touch. Every patient receives a comprehensive physical evaluation to uncover the underlying cause of pain or restricted movement, creating a clear pathway back to active living.
            </p>

            {/* Clean Editorial Horizontal Information Row (Thin Lines, No Cards) */}
            <div className="pt-6 border-t thin-line-separator grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="pr-4 border-r thin-line-separator last:border-none">
                <div className="font-jura text-2xl sm:text-3xl font-bold text-[#075A68]">
                  BPT
                </div>
                <div className="font-quicksand text-xs text-[#17343B]/70 font-semibold mt-1">
                  Bachelor of Physiotherapy
                </div>
              </div>

              <div className="pr-4 border-r thin-line-separator last:border-none">
                <div className="font-jura text-2xl sm:text-3xl font-bold text-[#075A68]">
                  MGR
                </div>
                <div className="font-quicksand text-xs text-[#17343B]/70 font-semibold mt-1">
                  MGR University
                </div>
              </div>

              <div className="pr-4 border-r thin-line-separator last:border-none">
                <div className="font-jura text-2xl sm:text-3xl font-bold text-[#C9952E]">
                  2021
                </div>
                <div className="font-quicksand text-xs text-[#17343B]/70 font-semibold mt-1">
                  Qualification Year
                </div>
              </div>

              <div className="last:border-none">
                <div className="font-jura text-2xl sm:text-3xl font-bold text-[#075A68]">
                  5 YEARS
                </div>
                <div className="font-quicksand text-xs text-[#17343B]/70 font-semibold mt-1">
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
