import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { clinicData } from '../../data/clinic';

export const Stats = () => {
  return (
    <section className="relative z-20 -mt-8 md:-mt-12 pb-12">
      <Container>
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-[#168F87]/15">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {clinicData.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col items-center text-center ${
                  idx > 0 ? 'pt-4 sm:pt-0' : ''
                }`}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#176B87] tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm sm:text-base font-bold text-[#12343B]">
                  {stat.label}
                </div>
                <div className="text-xs text-[#168F87] font-medium mt-0.5">
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
