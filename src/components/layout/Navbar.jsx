import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageSquare } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { clinicData } from '../../data/clinic';
import { createWhatsAppLink } from '../../utils/helpers';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-[#1B8480]/15'
          : 'bg-white py-4 border-b border-gray-100'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Jeevan Physiotherapy Clinic Home"
          >
            <img
              src="/logo/jp-logo.png"
              alt="Jeevan Physiotherapy Clinic Logo"
              className="h-9 w-auto md:h-11 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-extrabold text-[#1E2A38] tracking-tight group-hover:text-[#1B8480] transition-colors leading-tight">
                JEEVAN <span className="text-[#1B8480]">PHYSIOTHERAPY</span>
              </span>
              <span className="font-body text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#C9952E]">
                Rehabilitation Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-3 font-body">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-1.5 text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#1B8480] font-semibold'
                      : 'text-[#4D5255] hover:text-[#1B8480]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#1B8480]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={createWhatsAppLink(clinicData.whatsapp, "Hello! I would like to inquire about booking an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-body font-semibold text-[#1B8480] hover:text-[#14514F] bg-[#F4F8F7] hover:bg-[#1B8480]/10 rounded-full border border-[#1B8480]/20 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#1B8480]" />
              <span>WhatsApp</span>
            </a>

            <Button
              href="/contact"
              variant="primary"
              size="sm"
              showArrow
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#1E2A38] hover:bg-[#F4F8F7] focus:outline-none transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#1B8480]" /> : <Menu className="w-6 h-6 text-[#1E2A38]" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden font-body"
          >
            <Container className="py-4 space-y-3">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`px-4 py-2.5 text-base transition-colors ${
                        isActive
                          ? 'bg-[#1B8480] text-white font-semibold rounded-lg'
                          : 'text-[#4D5255] hover:bg-[#F4F8F7] hover:text-[#1B8480]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                <Button
                  href="/contact"
                  variant="primary"
                  fullWidth
                  showArrow
                >
                  Book Appointment
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
