import React from 'react';
import { Container } from '../components/common/Container';
import { Gallery } from '../components/home/Gallery';
import { AppointmentCTA } from '../components/home/AppointmentCTA';
import { Users, Heart, ShieldCheck } from 'lucide-react';

export const GalleryPage = () => {
  return (
    <main className="pt-20 space-y-0 bg-[#F4F8F7]">
      {/* Header Banner */}
      <section className="bg-[#28363F] text-white py-20 md:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-35 mix-blend-luminosity transform scale-105"
          style={{ backgroundImage: `url('/images/camps/camp_1.png')` }}
        />

        {/* Multi-layer Gradient Overlay for Text Readability & Brand Consistency */}
        <div 
          className="absolute inset-0 z-10 hero-overlay-gradient hidden md:block" 
          style={{
            background: 'linear-gradient(90deg, rgba(40, 54, 63, 0.96) 0%, rgba(27, 132, 128, 0.85) 50%, rgba(40, 54, 63, 0.70) 100%)'
          }}
        />
        <div 
          className="absolute inset-0 z-10 hero-overlay-mobile md:hidden" 
          style={{
            background: 'linear-gradient(180deg, rgba(40, 54, 63, 0.96) 0%, rgba(27, 132, 128, 0.88) 60%, rgba(40, 54, 63, 0.96) 100%)'
          }}
        />

        <Container className="relative z-20">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.2em] text-[#1B8480]">
              <span className="w-4 h-[2px] bg-[#1B8480]" />
              <span>OUTREACH & COMMUNITY HEALTH</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Camp & Community Care Gallery
            </h1>
            <p className="font-body text-base sm:text-lg text-[#F4F8F7]/85 font-normal leading-relaxed">
              Jeevan Physiotherapy Clinic actively conducts free physical health screening camps, posture awareness drives, and community physical wellness workshops.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <Gallery />

      {/* Community Values */}
      <section className="py-16 bg-white border-t thin-line-separator font-body">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-6 rounded-lg bg-[#F4F8F7] border border-[#1B8480]/15 space-y-3 shadow-xs">
              <div className="w-11 h-11 rounded-md bg-[#1B8480] text-white mx-auto flex items-center justify-center shadow-xs">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-[#1E2A38]">Community Screening</h3>
              <p className="text-xs sm:text-sm text-[#6B7280]">Bringing physical assessment and posture evaluation directly to local neighborhoods.</p>
            </div>

            <div className="p-6 rounded-lg bg-[#F4F8F7] border border-[#1B8480]/15 space-y-3 shadow-xs">
              <div className="w-11 h-11 rounded-md bg-[#1B8480] text-white mx-auto flex items-center justify-center shadow-xs">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-[#1E2A38]">Senior Wellness Drives</h3>
              <p className="text-xs sm:text-sm text-[#6B7280]">Dedicated joint mobility assessments and fall prevention guidance for elderly citizens.</p>
            </div>

            <div className="p-6 rounded-lg bg-[#F4F8F7] border border-[#1B8480]/15 space-y-3 shadow-xs">
              <div className="w-11 h-11 rounded-md bg-[#1B8480] text-white mx-auto flex items-center justify-center shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-[#1E2A38]">Preventive Education</h3>
              <p className="text-xs sm:text-sm text-[#6B7280]">Teaching ergonomic habits, back care techniques, and safe stretching routines.</p>
            </div>
          </div>
        </Container>
      </section>

      <AppointmentCTA />
    </main>
  );
};
