import React from 'react';
import { Container } from '../components/common/Container';
import { Contact } from '../components/home/Contact';
import { MapPin, Phone, Clock, MessageSquare } from 'lucide-react';
import { clinicData } from '../data/clinic';

export const ContactPage = () => {
  return (
    <main className="pt-24 pb-16 space-y-12 bg-[#EEF7FA]">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#12343B] via-[#176B87] to-[#168F87] text-white py-16 md:py-20 relative overflow-hidden">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-[#C9952E]/20 text-[#C9952E] font-bold text-xs uppercase tracking-widest border border-[#C9952E]/30">
              BOOK AN APPOINTMENT
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Contact Jeevan Physiotherapy Clinic
            </h1>
            <p className="text-base sm:text-lg text-[#EEF7FA]/90 leading-relaxed">
              We are here to assist you with physical evaluation, pain management, and custom rehabilitation sessions. Book an appointment or contact us directly.
            </p>
          </div>
        </Container>
      </section>

      <Contact />
    </main>
  );
};
