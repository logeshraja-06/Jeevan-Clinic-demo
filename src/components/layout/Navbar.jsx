import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageSquare, ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { clinicData } from '../../data/clinic';
import { createWhatsAppLink } from '../../utils/helpers';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white/92 backdrop-blur-md py-2 md:py-2.5 shadow-xs border-b border-gray-200/80'
          : 'bg-white/95 backdrop-blur-xs py-3 md:py-3.5 border-b border-gray-100'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between min-h-[40px] md:min-h-[44px]">
          {/* Left Zone: Brand Logo & Wordmark */}
          <div className="flex items-center justify-start flex-1 min-w-0">
            <Link
              to="/"
              className="flex items-center gap-2.5 sm:gap-3 group select-none shrink-0"
              aria-label="Jeevan Physiotherapy Clinic Home"
            >
              <img
                src="/logo/jp-logo.png"
                alt="Jeevan Physiotherapy Logo"
                className="h-7 sm:h-8 md:h-8.5 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="flex flex-col justify-center">
                <span className="font-heading text-sm sm:text-[15px] md:text-[17px] font-bold text-[#1E2A38] tracking-tight group-hover:text-[#1B8480] transition-colors leading-tight whitespace-nowrap">
                  JEEVAN <span className="text-[#1B8480]">PHYSIOTHERAPY</span>
                </span>
                <span className="font-body text-[9px] sm:text-[10px] font-medium tracking-[0.14em] text-[#64748B] uppercase leading-none mt-0.5 whitespace-nowrap">
                  Physical Care & Wellness
                </span>
              </div>
            </Link>
          </div>

          {/* Center Zone: Perfectly Centered Navigation Links */}
          <nav className="hidden md:flex items-center justify-center flex-1 font-body">
            <div className="flex items-center gap-2 lg:gap-4 xl:gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-2.5 lg:px-3 py-1.5 text-xs lg:text-[13px] xl:text-sm font-medium transition-colors duration-200 relative rounded-md whitespace-nowrap ${
                      isActive
                        ? 'text-[#1B8480] font-semibold'
                        : 'text-[#4B5563] hover:text-[#1B8480] hover:bg-[#F4F8F7]/70'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#1B8480] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Right Zone: Secondary Action CTAs */}
          <div className="hidden md:flex items-center justify-end flex-1 gap-2.5 lg:gap-3 shrink-0">
            <a
              href={createWhatsAppLink(clinicData.whatsapp, "Hello! I would like to inquire about booking an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1B8480] hover:text-[#14514F] bg-[#F4F8F7] hover:bg-[#1B8480]/10 rounded-full border border-[#1B8480]/20 transition-colors shrink-0"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#1B8480]" />
              <span className="hidden xl:inline font-medium">WhatsApp</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#1B8480] hover:bg-[#14514F] rounded-full shadow-xs hover:shadow transition-all group shrink-0"
            >
              <span className="whitespace-nowrap">Book Appointment</span>
              <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-lg text-[#1E2A38] hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#1B8480]" />
              ) : (
                <Menu className="w-5 h-5 text-[#1E2A38]" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden font-body shadow-lg"
          >
            <Container className="py-3.5 space-y-3">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-3.5 py-2 text-sm transition-colors rounded-lg ${
                        isActive
                          ? 'bg-[#1B8480] text-white font-semibold'
                          : 'text-[#4B5563] hover:bg-[#F4F8F7] hover:text-[#1B8480]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Action CTAs */}
              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href={createWhatsAppLink(clinicData.whatsapp, "Hello! I would like to inquire about booking an appointment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2 text-xs font-semibold text-[#1B8480] bg-[#F4F8F7] rounded-lg border border-[#1B8480]/20"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Inquiry</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 w-full py-2 text-xs font-semibold text-white bg-[#1B8480] rounded-lg"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};


