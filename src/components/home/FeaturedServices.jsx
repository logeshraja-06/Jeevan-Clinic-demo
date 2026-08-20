import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { featuredServices } from '../../data/services';

export const FeaturedServices = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="SPECIALIZED CARE HIGHLIGHTS"
          title="Featured Clinical Services"
          subtitle="Explore our primary focus areas engineered to relieve pain, rebuild strength, and restore full functional movement."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-5 pt-2">
          {featuredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="group bg-[#EEF7FA] rounded-lg overflow-hidden border border-[#176B87]/15 shadow-xs hover:shadow-md transition-all duration-300 grid grid-cols-1 sm:grid-cols-12"
            >
              {/* Image Side (5 cols) */}
              <div className="sm:col-span-5 relative h-52 sm:h-auto overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/35 via-transparent to-transparent" />
                <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[#176B87] text-[11px] font-bold shadow-xs uppercase tracking-wider">
                  {service.category}
                </span>
              </div>

              {/* Text Side (7 cols) */}
              <div className="sm:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-3.5">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#12343B] group-hover:text-[#176B87] transition-colors mb-1.5 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#17252A]/80 leading-relaxed mb-2.5">
                    {service.shortDesc}
                  </p>
                  <p className="text-xs text-[#168F87] font-medium leading-relaxed bg-white/70 p-2.5 rounded-md border border-[#168F87]/10">
                    {service.details}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <Button
                    href="/services"
                    variant="outline"
                    size="sm"
                    showArrow
                  >
                    View Treatments
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="primary" size="lg" showArrow>
            Browse All Conditions & Techniques
          </Button>
        </div>
      </Container>
    </section>
  );
};
