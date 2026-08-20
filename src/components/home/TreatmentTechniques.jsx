import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { ArrowRight } from 'lucide-react';

export const TreatmentTechniques = () => {
  const techniques = [
    {
      id: "manual-therapy",
      title: "Manual Therapy",
      shortDesc: "Hands-on joint mobilization, Maitland spinal manipulation, and passive tissue glides to restore joint articulation.",
      image: "/images/clinic/hero_physio.png"
    },
    {
      id: "myofascial-release",
      title: "Myofascial Release Therapy",
      shortDesc: "Targeted soft tissue release eliminating fascial restrictions, trigger points, and chronic muscular tension.",
      image: "/images/clinic/about_physio.png"
    },
    {
      id: "therapeutic-taping",
      title: "Therapeutic Taping",
      shortDesc: "Kinesiology and rigid joint taping providing dynamic structural support, proprioceptive feedback, and edema reduction.",
      image: "/images/camps/camp_3.png"
    },
    {
      id: "electrotherapy",
      title: "Electrotherapy",
      shortDesc: "Application of TENS, IFT, ultrasound, and electrical muscle stimulation for localized analgesia and cell repair.",
      image: "/images/camps/camp_4.png"
    },
    {
      id: "sports-strengthening",
      title: "Sports Strengthening Program",
      shortDesc: "Progressive resistance training, kinetic chain integration, and functional movement conditioning.",
      image: "/images/camps/camp_5.png"
    },
    {
      id: "wax-therapy",
      title: "Wax Therapy",
      shortDesc: "Deep paraffin heat bath treatment soothing arthritis pain and stiffness in small wrist and hand joints.",
      image: "/images/camps/camp_2.png"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden font-body">
      <Container>
        <SectionHeading
          eyebrow="CLINICAL MODALITIES"
          title="Treatment Techniques"
          subtitle="Evidence-based physical therapy methods tailored to target specific tissue impairments and pain mechanisms."
        />

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Interactive Technique List (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {techniques.map((tech, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={tech.id}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`relative py-4 px-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive 
                      ? 'bg-[#F4F8F7] border-[#1B8480]/30 shadow-xs' 
                      : 'bg-white border-transparent hover:bg-gray-50/80 hover:border-gray-200'
                  }`}
                >
                  {/* Left Active Line Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTechniqueIndicator"
                      className="absolute left-0 top-3 bottom-3 w-1.5 bg-[#1B8480] rounded-r-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Number Badge */}
                      <span className={`w-9 h-9 rounded-full flex items-center justify-center font-heading text-xs font-bold transition-all ${
                        isActive 
                          ? 'bg-[#1B8480] text-white shadow-xs' 
                          : 'bg-gray-100 text-[#4D5255]'
                      }`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      <h3 className={`font-heading text-lg sm:text-xl font-bold transition-colors ${
                        isActive ? 'text-[#1B8480]' : 'text-[#1E2A38]'
                      }`}>
                        {tech.title}
                      </h3>
                    </div>

                    <ArrowRight className={`w-4 h-4 transition-all duration-300 ${
                      isActive ? 'text-[#1B8480] translate-x-1.5' : 'text-gray-300'
                    }`} />
                  </div>

                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-body text-sm text-[#6B7280] leading-relaxed mt-3 pl-13 pr-4"
                    >
                      {tech.shortDesc}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Layered Editorial Photograph Preview (5 cols) */}
          <div className="lg:col-span-5 relative pt-4 pb-4">
            {/* Offset Decorative Backdrop Card with Teal & Gold Accent Borders */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#1B8480]/20 via-transparent to-[#C9952E]/20 rounded-3xl transform rotate-1 scale-[1.02] pointer-events-none" />
            <div className="absolute inset-0 bg-[#28363F] rounded-2xl transform -rotate-1 pointer-events-none opacity-90 shadow-xl" />

            <div className="relative rounded-2xl overflow-hidden border-2 border-[#1B8480]/30 shadow-2xl min-h-[420px] lg:min-h-[500px] bg-[#28363F]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={techniques[activeIndex].id}
                  src={techniques[activeIndex].image}
                  alt={techniques[activeIndex].title}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Multi-stage Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#28363F] via-[#28363F]/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#28363F]/40 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Caption Details */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 z-10">
                <div className="font-body text-xs font-bold uppercase tracking-widest text-[#1B8480]">
                  Technique Demonstration
                </div>
                <h4 className="font-heading text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                  {techniques[activeIndex].title}
                </h4>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
