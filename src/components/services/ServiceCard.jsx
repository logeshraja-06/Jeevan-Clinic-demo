import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const ServiceCard = ({ service, index, onClick }) => {
  const formattedNumber = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      onClick={() => onClick(service)}
      className="group py-5 px-4 sm:px-6 border-b thin-line-separator hover:bg-white transition-all duration-300 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
    >
      {/* Number & Service Name */}
      <div className="flex items-center gap-4 sm:gap-6 md:w-5/12">
        <span className="font-heading text-xl sm:text-2xl font-bold text-[#1B8480] group-hover:text-[#14514F] transition-colors shrink-0">
          {formattedNumber}
        </span>
        <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1E2A38] group-hover:text-[#1B8480] transition-colors">
          {service.title}
        </h3>
      </div>

      {/* Short Description */}
      <div className="md:w-5/12">
        <p className="font-body text-sm text-[#6B7280] leading-relaxed line-clamp-2">
          {service.shortDesc}
        </p>
      </div>

      {/* Action Link: "Learn More →" */}
      <div className="md:w-2/12 flex items-center justify-end">
        <div className="inline-flex items-center gap-1.5 text-xs font-body font-bold text-[#1B8480] group-hover:text-[#14514F]">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </div>
      </div>
    </motion.div>
  );
};
