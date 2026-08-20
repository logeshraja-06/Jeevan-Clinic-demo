import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const AppointmentCTA = () => {
  return (
    <section className="relative py-24 md:py-32 cta-banner-gradient text-white overflow-hidden font-body">
      {/* Full-width Photographic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-1000 scale-105 opacity-55"
        style={{ backgroundImage: `url('/images/clinic/about_physio1.png')` }}
      />

      {/* Refined Gradient Overlay — centered text zone focus, not full blanket */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#1B8480]/60 via-[#14514F]/55 to-[#28363F]/60" />

      <Container className="relative z-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.2em] text-[#F4F8F7]"
          >
            <span className="w-4 h-[2px] bg-white" />
            <span>START YOUR RECOVERY</span>
            <span className="w-4 h-[2px] bg-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            Your recovery starts with the right care.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-base sm:text-lg text-[#F4F8F7]/90 max-w-xl mx-auto leading-relaxed"
          >
            For appointments, treatment enquiries or physical evaluations, get in touch with Jeevan Physiotherapy Clinic today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-4"
          >
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              showArrow
              className="!bg-white !text-[#14514F] !border-white hover:!bg-[#28363F] hover:!text-white"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
