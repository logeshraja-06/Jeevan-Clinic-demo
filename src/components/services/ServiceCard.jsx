import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const servicePhotosMap = {
  "muscle-joint-pain": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
  "stroke-rehabilitation": "https://images.unsplash.com/photo-1576091160291-248981602741?auto=format&fit=crop&w=1200&q=80",
  "parkinsons-rehabilitation": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  "fracture-rehabilitation": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
  "ligament-tear-rehabilitation": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  "muscle-stiffness": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
  "post-surgery-rehabilitation": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  "geriatric-physiotherapy": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
  "pediatric-physiotherapy": "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80",
  "womens-health-physiotherapy": "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
  "sports-physiotherapy": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
  "sports-physiotherapy-cond": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
  "manual-therapy": "https://images.unsplash.com/photo-1519824145371-296894a0daf9?auto=format&fit=crop&w=1200&q=80",
  "myofascial-release-therapy": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
  "therapeutic-taping": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
  "electrotherapy": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  "sports-strengthening-program": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
  "wax-therapy": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
};

const defaultPhotos = [
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
];

export const ServiceCard = ({ service, index, onClick }) => {
  const photoUrl = servicePhotosMap[service.id] ||
    (service.image && service.image.startsWith('http') ? service.image : defaultPhotos[index % defaultPhotos.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 8) * 0.03 }}
      onClick={() => onClick(service)}
      className="group relative w-full h-28 sm:h-32 md:h-36 rounded-none overflow-hidden cursor-pointer border-b border-[#1B8480]/30 flex items-center transition-all duration-300"
    >
      {/* Full-Bleed Unsplash Background Photo */}
      <img
        src={photoUrl}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
      />

      {/* Dark Brand Gradient Overlay for Maximum Text Contrast */}
      <div 
        className="absolute inset-0 z-10" 
        style={{
          background: 'linear-gradient(90deg, rgba(40, 54, 63, 0.96) 0%, rgba(27, 132, 128, 0.85) 45%, rgba(40, 54, 63, 0.50) 80%, rgba(40, 54, 63, 0.20) 100%)'
        }}
      />

      {/* Content Container on top of Overlay */}
      <div className="relative z-20 w-full px-5 sm:px-8 py-3 sm:py-4 flex flex-col md:flex-row md:items-center justify-between gap-2.5 md:gap-4">
        {/* Left Side: Title & Description */}
        <div className="space-y-1 md:w-8/12">
          <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-extrabold text-white group-hover:text-[#F4F8F7] transition-colors leading-snug">
            {service.title}
          </h3>

          <p className="font-body text-xs sm:text-sm text-[#F4F8F7]/85 line-clamp-1 sm:line-clamp-2 max-w-xl font-normal leading-relaxed">
            {service.shortDesc}
          </p>
        </div>

        {/* Right Side: Learn More Button */}
        <div className="md:w-3/12 flex items-center justify-start md:justify-end shrink-0 pt-0.5 md:pt-0">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold font-body text-white bg-[#1B8480] group-hover:bg-[#14514F] rounded-full border border-white/20 shadow-sm transition-all group-hover:translate-x-1">
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
