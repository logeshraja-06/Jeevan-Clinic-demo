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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 pt-2">
          
          {/* Card 1: Direct Phone Line */}
          <div className="p-6 sm:p-7 border border-gray-200 bg-[#F4F8F7] space-y-4 rounded-lg flex flex-col justify-between hover:border-[#1B8480]/40 transition-all shadow-xs hover:shadow-sm">
            <div className="space-y-3">
              <div className="w-11 h-11 bg-white text-[#1B8480] rounded-md flex items-center justify-center shadow-xs">
                <Phone className="w-5 h-5 text-[#1B8480]" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#1B8480]">
                Direct Clinic Line
              </div>
              <a
                href={createCallLink(clinicData.phoneRaw)}
                className="font-heading text-xl sm:text-2xl font-bold text-[#1E2A38] hover:text-[#1B8480] transition-colors block leading-tight"
              >
                {clinicData.phone}
              </a>
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                Speak directly with our clinic staff for immediate inquiries and consultation scheduling.
              </p>
            </div>
            <div className="pt-3.5 border-t border-gray-200/60">
              <a
                href={createCallLink(clinicData.phoneRaw)}
                className="inline-flex items-center gap-1.5 font-bold text-xs sm:text-sm text-[#1B8480] hover:text-[#14514F] transition-colors"
              >
                Call Now →
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Consultation */}
          <div className="p-6 sm:p-7 border border-gray-200 bg-white space-y-4 rounded-lg flex flex-col justify-between hover:border-[#1B8480]/40 transition-all shadow-xs hover:shadow-sm">
            <div className="space-y-3">
              <div className="w-11 h-11 bg-[#F4F8F7] text-[#1B8480] rounded-md flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-[#1B8480]" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#1B8480]">
                WhatsApp Consultation
              </div>
              <a
                href={createWhatsAppLink(clinicData.whatsapp, "Hello! I would like to inquire about clinic treatments.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-xl sm:text-2xl font-bold text-[#1E2A38] hover:text-[#1B8480] transition-colors inline-flex items-center gap-2 leading-tight"
              >
                Chat on WhatsApp
              </a>
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                Fast messaging for treatment questions, physical evaluations, and quick support.
              </p>
            </div>
            <div className="pt-3.5 border-t border-gray-100">
              <a
                href={createWhatsAppLink(clinicData.whatsapp, "Hello! I would like to inquire about clinic treatments.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-xs sm:text-sm text-[#1B8480] hover:text-[#14514F] transition-colors"
              >
                Open WhatsApp <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Clinic Location & Hours */}
          <div className="p-6 sm:p-7 border border-gray-200 bg-white space-y-4 rounded-lg flex flex-col justify-between hover:border-[#1B8480]/40 transition-all shadow-xs hover:shadow-sm md:col-span-2 lg:col-span-1">
            <div className="space-y-3">
              <div className="w-11 h-11 bg-[#F4F8F7] text-[#1B8480] rounded-md flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#1B8480]" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#1B8480]">
                Clinic Address & Hours
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#1E2A38] leading-relaxed">
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
            <div className="pt-3.5 border-t border-gray-100">
              <a
                href={clinicData.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-xs sm:text-sm text-[#1B8480] hover:text-[#14514F] transition-colors"
              >
                View on Google Maps <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

