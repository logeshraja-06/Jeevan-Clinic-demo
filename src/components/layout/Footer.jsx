import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { clinicData } from '../../data/clinic';
import { createWhatsAppLink, createCallLink } from '../../utils/helpers';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#28363F] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden font-body">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b thin-line-dark">
          
          {/* Column 1: Brand & Qualification Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src="/logo/jp-logo.png"
                alt="Jeevan Physiotherapy Clinic Logo"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <span className="font-heading text-xl font-extrabold text-white block">
                  JEEVAN <span className="text-[#1B8480]">PHYSIOTHERAPY</span>
                </span>
                <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#C9952E]">
                  Rehabilitation Clinic
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#F4F8F7]/80 leading-relaxed max-w-md">
              Evidence-based physical therapy and personalized rehabilitation care focused on physical recovery, mobility enhancement, and long-term joint health.
            </p>

            <div className="text-xs text-[#F4F8F7]/70 font-medium space-y-1">
              <div>{clinicData.qualification} • {clinicData.university}</div>
              <div>Graduated {clinicData.qualificationYear} • {clinicData.experience}</div>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading text-base font-bold text-white uppercase tracking-wider border-l-2 border-[#1B8480] pl-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm font-medium">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Clinic', path: '/about' },
                { label: 'Physiotherapy Treatments', path: '/services' },
                { label: 'Community Care Gallery', path: '/gallery' },
                { label: 'Contact & Appointments', path: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-[#F4F8F7]/80 hover:text-[#1B8480] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-heading text-base font-bold text-white uppercase tracking-wider border-l-2 border-[#1B8480] pl-3">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-[#F4F8F7]/85">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#1B8480] shrink-0" />
                <a href={createCallLink(clinicData.phoneRaw)} className="hover:text-[#1B8480] font-medium transition-colors">
                  {clinicData.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-[#1B8480] shrink-0" />
                <a
                  href={createWhatsAppLink(clinicData.whatsapp, "Hello! I would like to inquire about clinic appointment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1B8480] font-medium transition-colors inline-flex items-center gap-1"
                >
                  WhatsApp Direct <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#1B8480] mt-0.5 shrink-0" />
                <p className="leading-snug text-xs">{clinicData.address}, {clinicData.city}</p>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#1B8480] mt-0.5 shrink-0" />
                <p className="text-xs leading-relaxed text-[#F4F8F7]/90">
                  Mon – Sat: 9:00 AM – 8:00 PM | Sun: Prior Appointment
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button href="/contact" variant="primary" size="sm" showArrow fullWidth>
                Book Appointment
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F4F8F7]/60 gap-4">
          <p>© {currentYear} Jeevan Physiotherapy Clinic. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>BPT Qualified</span>
            <span>•</span>
            <span>MGR University</span>
            <span>•</span>
            <span>Rehabilitation Care</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
