import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { clinicData } from '../../data/clinic';
import { createWhatsAppLink, createCallLink } from '../../utils/helpers';

export const MobileStickyBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#082F38] border-t border-white/10 px-3 py-2.5 shadow-2xl backdrop-blur-lg flex items-center justify-between gap-2">
      {/* Call Button */}
      <a
        href={createCallLink(clinicData.phoneRaw)}
        className="flex-1 py-2 px-2 bg-white/10 hover:bg-white/20 text-white rounded-[4px] font-quicksand font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors border border-white/10"
      >
        <Phone className="w-3.5 h-3.5 text-[#C9952E]" />
        <span>Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={createWhatsAppLink(clinicData.whatsapp, "Hello! I would like to inquire about booking an appointment.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2 px-2 bg-[#167A91]/80 hover:bg-[#167A91] text-white rounded-[4px] font-quicksand font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      {/* Book Appointment Button */}
      <a
        href="/contact"
        className="flex-1 py-2 px-2 bg-[#C9952E] hover:bg-[#a67920] text-white rounded-[4px] font-quicksand font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-colors"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Appt</span>
      </a>
    </div>
  );
};
