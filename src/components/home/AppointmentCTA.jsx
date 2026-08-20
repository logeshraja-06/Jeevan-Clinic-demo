import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const AppointmentCTA = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#082F38] text-white overflow-hidden">
      {/* Full-width Photographic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('/images/clinic/about_physio.png')` }}
      />

      {/* Multi-layer Deep Blue/Teal Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#082F38]/95 via-[#075A68]/90 to-[#082F38]/85" />

      <Container className="relative z-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 font-quicksand text-xs font-semibold uppercase tracking-[0.2em] text-[#C9952E]"
          >
            <span className="w-4 h-[1px] bg-[#C9952E]" />
            <span>START YOUR RECOVERY</span>
            <span className="w-4 h-[1px] bg-[#C9952E]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-jura text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight"
          >
            Your recovery starts with the right care.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-quicksand text-base sm:text-lg text-[#EFF8F7]/90 max-w-xl mx-auto leading-relaxed"
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
              variant="gold"
              size="lg"
              showArrow
            >
              Book an Appointment
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
