import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { clinicData } from '../../data/clinic';
import { createWhatsAppLink, createCallLink } from '../../utils/helpers';

export const MobileStickyBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#28363F] border-t border-white/10 px-3 py-2.5 shadow-2xl backdrop-blur-lg flex items-center justify-between gap-2 font-body">
      {/* Call Button */}
      <a
        href={createCallLink(clinicData.phoneRaw)}
        className="flex-1 py-2 px-2 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium text-xs flex items-center justify-center gap-1.5 transition-colors border border-white/10"
      >
        <Phone className="w-3.5 h-3.5 text-[#1B8480]" />
        <span>Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={createWhatsAppLink(clinicData.whatsapp, "Hello! I would like to inquire about clinic treatments.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2 px-2 bg-[#1B8480] hover:bg-[#14514F] text-white rounded-full font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      {/* Contact Button */}
      <a
        href="/contact"
        className="flex-1 py-2 px-2 bg-[#14514F] hover:bg-[#1B8480] text-white rounded-full font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md transition-colors"
      >
        <MapPin className="w-3.5 h-3.5" />
        <span>Contact</span>
      </a>
    </div>
  );
};
