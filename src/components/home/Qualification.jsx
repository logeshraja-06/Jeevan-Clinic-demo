import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';

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
    <section className="py-20 md:py-28 bg-[#28363F] text-white relative overflow-hidden font-body">
      <Container className="relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.2em] text-[#1B8480] mb-3">
            <span className="w-4 h-[2px] bg-[#1B8480]" />
            <span>CLINICAL STANDARDS</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Qualified to Care.<br />
            <span className="text-[#1B8480]">Experienced to Guide.</span>
          </h2>

          <p className="font-body mt-4 text-base sm:text-lg text-[#F4F8F7]/85 font-normal leading-relaxed">
            Our clinical practice is built on rigorous academic foundation, clinical experience, and an ongoing commitment to evidence-based physical therapy methods.
          </p>
        </div>

        {/* Credentials Typography Grid */}
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
              <div className="font-heading text-4xl sm:text-5xl font-extrabold text-[#1B8480]">
                {item.value}
              </div>
              <div className="font-heading text-lg font-bold text-white">
                {item.label}
              </div>
              <div className="font-body text-xs text-[#F4F8F7]/70 font-medium">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
