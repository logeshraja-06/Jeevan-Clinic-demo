import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const WhyChooseUs = () => {
  const editorialItems = [
    {
      num: "01",
      title: "Expert Care",
      desc: "Professional physiotherapy care with an individualized clinical approach tailored to your body's specific biomechanics."
    },
    {
      num: "02",
      title: "Personalized Treatment",
      desc: "Treatment plans designed around each patient's condition, functional assessment, and long-term recovery goals."
    },
    {
      num: "03",
      title: "Rehabilitation Focus",
      desc: "Targeted support for injury recovery, joint mobility restoration, post-surgery rehabilitation, and strength preservation."
    },
    {
      num: "04",
      title: "Patient-Centered Approach",
      desc: "Comfortable, attentive, and empathetic clinical environment prioritizing patient comfort, safety, and physical wellbeing."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F4F8F7] relative border-t border-b thin-line-separator">
      <Container>
        <SectionHeading
          eyebrow="OUR CLINICAL APPROACH"
          title="Designed Around Recovery"
          subtitle="We combine clinical methodology with patient-focused attention to achieve lasting physical health."
        />

        {/* 2x2 Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 pt-4">
          {editorialItems.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="pt-6 border-t thin-line-separator space-y-3 group"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-heading text-3xl md:text-4xl font-extrabold text-[#1B8480]">
                  {item.num}
                </span>
                <span className="w-8 h-[2px] bg-[#1B8480]/30 group-hover:w-14 transition-all duration-300" />
              </div>

              <h3 className="font-heading text-2xl font-bold text-[#1E2A38] group-hover:text-[#1B8480] transition-colors">
                {item.title}
              </h3>

              <p className="font-body text-base text-[#6B7280] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
