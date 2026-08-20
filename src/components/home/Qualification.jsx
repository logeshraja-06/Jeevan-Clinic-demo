import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { clinicData } from '../../data/clinic';

export const Qualification = () => {
  const credentials = [
    {
      value: "BPT",
      label: "Bachelor of Physiotherapy",
      sub: "Comprehensive Clinical Degree"
    },
    {
      value: "MGR",
      label: "MGR University",
      sub: "Accredited Medical University"
    },
    {
      value: "2021",
      label: "July 2021",
      sub: "Degree Graduation Year"
    },
    {
      value: "5 YEARS",
      label: "Healthcare Experience",
      sub: "Dedicated Patient Practice"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#082F38] text-white relative overflow-hidden">
      <Container className="relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-quicksand text-xs font-semibold uppercase tracking-[0.2em] text-[#C9952E] mb-3">
            <span className="w-4 h-[1px] bg-[#C9952E]" />
            <span>CLINICAL STANDARDS</span>
          </div>

          <h2 className="font-jura text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Qualified to Care.<br />
            <span className="gold-gradient-text">Experienced to Guide.</span>
          </h2>

          <p className="font-quicksand mt-4 text-base sm:text-lg text-[#EFF8F7]/80 font-normal leading-relaxed">
            Our clinical practice is built on rigorous academic foundation, clinical experience, and an ongoing commitment to evidence-based physical therapy methods.
          </p>
        </div>

        {/* Large Editorial Typography Grid (Lines & Spacing, No Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-6 border-t thin-line-dark">
          {credentials.map((item, idx) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-2 pr-4 border-r thin-line-dark last:border-none"
            >
              <div className="font-jura text-4xl sm:text-5xl font-bold text-[#C9952E]">
                {item.value}
              </div>
              <div className="font-jura text-lg font-bold text-white">
                {item.label}
              </div>
              <div className="font-quicksand text-xs text-[#EFF8F7]/70 font-medium">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
