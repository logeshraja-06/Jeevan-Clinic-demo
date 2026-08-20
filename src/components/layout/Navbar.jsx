import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
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
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-[#167A91]/15'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-gray-100'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
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
              <span className="font-jura text-lg sm:text-xl font-bold text-[#082F38] tracking-tight group-hover:text-[#075A68] transition-colors leading-tight">
                JEEVAN <span className="text-[#167A91]">PHYSIOTHERAPY</span>
              </span>
              <span className="font-quicksand text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#C9952E]">
                Rehabilitation Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-1.5 text-sm font-quicksand font-semibold transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#075A68]'
                      : 'text-[#17343B]/80 hover:text-[#075A68]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#075A68]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={createWhatsAppLink(clinicData.whatsapp, "Hello! I would like to inquire about booking an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-quicksand font-semibold text-[#075A68] hover:text-[#082F38] bg-[#EFF8F7] hover:bg-[#075A68]/10 rounded-[4px] border border-[#075A68]/15 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#167A91]" />
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

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-[4px] text-[#082F38] hover:bg-[#EFF8F7] focus:outline-none transition-colors"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#075A68]" /> : <Menu className="w-6 h-6 text-[#082F38]" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <Container className="py-4 space-y-3">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`px-4 py-2.5 font-quicksand text-base font-semibold transition-colors ${
                        isActive
                          ? 'bg-[#075A68] text-white rounded-[4px]'
                          : 'text-[#17343B] hover:bg-[#EFF8F7] hover:text-[#075A68]'
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
                  variant="gold"
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
