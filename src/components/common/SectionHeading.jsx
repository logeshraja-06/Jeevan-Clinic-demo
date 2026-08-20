import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  className = ''
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9952E] mb-3"
        >
          <span className="w-4 h-[1px] bg-[#C9952E]"></span>
          <span>{eyebrow}</span>
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`font-jura text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] ${
            light ? 'text-white' : 'text-[#082F38]'
          }`}
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`font-quicksand mt-4 text-base md:text-lg max-w-2xl font-normal leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-[#EFF8F7]/80' : 'text-[#17343B]/80'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
