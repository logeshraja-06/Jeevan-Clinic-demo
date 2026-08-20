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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featuredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="group bg-[#EEF7FA] rounded-3xl overflow-hidden border border-[#176B87]/15 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 sm:grid-cols-12"
            >
              {/* Image Side (5 cols) */}
              <div className="sm:col-span-5 relative h-56 sm:h-auto overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/40 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#176B87] text-xs font-bold shadow-sm">
                  {service.category}
                </span>
              </div>

              {/* Text Side (7 cols) */}
              <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#12343B] group-hover:text-[#176B87] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#17252A]/80 leading-relaxed mb-3">
                    {service.shortDesc}
                  </p>
                  <p className="text-xs text-[#168F87] font-medium leading-relaxed bg-white/60 p-3 rounded-xl border border-[#168F87]/10">
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
