import React from 'react';
import { Container } from '../components/common/Container';
import { Contact } from '../components/home/Contact';

export const ContactPage = () => {
  return (
    <main className="pt-20 space-y-0 bg-[#F4F8F7]">
      {/* Header Banner */}
      <section className="bg-[#28363F] text-white py-20 md:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-35 mix-blend-luminosity transform scale-105"
          style={{ backgroundImage: `url('/images/clinic/hero_physio.png')` }}
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
              <span>GET IN TOUCH</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Contact Jeevan Physiotherapy Clinic
            </h1>
            <p className="font-body text-base sm:text-lg text-[#F4F8F7]/85 font-normal leading-relaxed">
              We are here to assist you with physical evaluation, pain management, and custom rehabilitation sessions. Connect with us directly.
            </p>
          </div>
        </Container>
      </section>

      <Contact />
    </main>
  );
};
