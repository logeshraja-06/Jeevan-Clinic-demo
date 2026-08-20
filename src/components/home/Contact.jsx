import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { clinicData } from '../../data/clinic';
import { createWhatsAppLink, createCallLink } from '../../utils/helpers';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative overflow-hidden font-body">
      <Container>
        <SectionHeading
          eyebrow="CLINIC INQUIRIES & VISIT"
          title="Let's Get You Moving Again."
          subtitle="For treatment enquiries, physical evaluations, or clinic visits, connect with Jeevan Physiotherapy Clinic."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          
          {/* Card 1: Direct Phone Line */}
          <div className="p-8 border border-gray-200 bg-[#F4F8F7] space-y-4 rounded-2xl flex flex-col justify-between hover:border-[#1B8480]/30 transition-all shadow-sm">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-white text-[#1B8480] rounded-xl flex items-center justify-center shadow-xs">
                <Phone className="w-6 h-6 text-[#1B8480]" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#1B8480]">
                Direct Clinic Line
              </div>
              <a
                href={createCallLink(clinicData.phoneRaw)}
                className="font-heading text-2xl font-extrabold text-[#1E2A38] hover:text-[#1B8480] transition-colors block"
              >
                {clinicData.phone}
              </a>
              <p className="text-sm text-[#6B7280]">
                Speak directly with our clinic staff for immediate inquiries and appointment scheduling.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-200/60">
              <a
                href={createCallLink(clinicData.phoneRaw)}
                className="inline-flex items-center gap-2 font-bold text-sm text-[#1B8480] hover:text-[#14514F] transition-colors"
              >
                Call Now →
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Consultation */}
          <div className="p-8 border border-gray-200 bg-white space-y-4 rounded-2xl flex flex-col justify-between hover:border-[#1B8480]/30 transition-all shadow-sm">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#F4F8F7] text-[#1B8480] rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-[#1B8480]" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#1B8480]">
                WhatsApp Consultation
              </div>
              <a
                href={createWhatsAppLink(clinicData.whatsapp, "Hello! I would like to inquire about clinic treatments.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-2xl font-bold text-[#1E2A38] hover:text-[#1B8480] transition-colors inline-flex items-center gap-2"
              >
                Chat on WhatsApp
              </a>
              <p className="text-sm text-[#6B7280]">
                Fast messaging for treatment questions, consultations, and quick support.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <a
                href={createWhatsAppLink(clinicData.whatsapp, "Hello! I would like to inquire about clinic treatments.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-sm text-[#1B8480] hover:text-[#14514F] transition-colors"
              >
                Open WhatsApp <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3: Clinic Location & Hours */}
          <div className="p-8 border border-gray-200 bg-white space-y-4 rounded-2xl flex flex-col justify-between hover:border-[#1B8480]/30 transition-all shadow-sm md:col-span-2 lg:col-span-1">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#F4F8F7] text-[#1B8480] rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#1B8480]" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#1B8480]">
                Clinic Address & Hours
              </div>
              <p className="text-sm font-semibold text-[#1E2A38] leading-relaxed">
                {clinicData.address}, {clinicData.city}, {clinicData.state} - {clinicData.pincode}
              </p>
              <div className="pt-2 border-t border-gray-100 space-y-1">
                <div className="text-xs font-bold text-[#1B8480] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Working Hours
                </div>
                {clinicData.workingHours.map((schedule, i) => (
                  <div key={i} className="flex justify-between items-center text-xs text-[#1E2A38]">
                    <span className="text-[#6B7280]">{schedule.days}</span>
                    <span className="font-semibold">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <a
                href={clinicData.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-sm text-[#1B8480] hover:text-[#14514F] transition-colors"
              >
                View on Google Maps <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

