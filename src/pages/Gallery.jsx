import React from 'react';
import { Container } from '../components/common/Container';
import { Gallery } from '../components/home/Gallery';
import { AppointmentCTA } from '../components/home/AppointmentCTA';
import { Users, Heart, ShieldCheck } from 'lucide-react';

export const GalleryPage = () => {
  return (
    <main className="pt-24 pb-16 space-y-16 bg-[#EEF7FA]">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#12343B] via-[#176B87] to-[#168F87] text-white py-16 md:py-20 relative overflow-hidden">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-[#C9952E]/20 text-[#C9952E] font-bold text-xs uppercase tracking-widest border border-[#C9952E]/30">
              OUTREACH & COMMUNITY HEALTH
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Camp & Community Care Gallery
            </h1>
            <p className="text-base sm:text-lg text-[#EEF7FA]/90 leading-relaxed">
              Jeevan Physiotherapy Clinic actively conducts free physical health screening camps, posture awareness drives, and community physical wellness workshops.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <Gallery isFullPage={true} />

      {/* Community Values */}
      <section className="py-12 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-[#EEF7FA] border border-[#176B87]/15 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#176B87] text-white mx-auto flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#12343B]">Community Screening</h3>
              <p className="text-xs text-gray-600">Bringing physical assessment and posture evaluation directly to local neighborhoods.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#EAF6F4] border border-[#168F87]/15 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#168F87] text-white mx-auto flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#C9952E]" />
              </div>
              <h3 className="text-lg font-bold text-[#12343B]">Senior Wellness Drives</h3>
              <p className="text-xs text-gray-600">Dedicated joint mobility assessments and fall prevention guidance for elderly citizens.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#EEF7FA] border border-[#176B87]/15 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C9952E] text-white mx-auto flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#12343B]">Preventive Education</h3>
              <p className="text-xs text-gray-600">Teaching ergonomic habits, back care techniques, and safe stretching routines.</p>
            </div>
          </div>
        </Container>
      </section>

      <AppointmentCTA />
    </main>
  );
};
