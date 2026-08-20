import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { MobileStickyBar } from './components/layout/MobileStickyBar';
import { Home } from './pages/Home';
import { AboutPage } from './pages/About';
import { ServicesPage } from './pages/Services';
import { GalleryPage } from './pages/Gallery';
import { ContactPage } from './pages/Contact';
import { useLenis } from './hooks/useLenis';

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  useLenis();

  return (
    <Router>
      <ScrollToTopOnNavigate />
      <div className="flex flex-col min-h-screen bg-[#EFF8F7] font-quicksand text-[#17343B] antialiased selection:bg-[#075A68] selection:text-white pb-14 md:pb-0">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
        <ScrollToTop />
        <MobileStickyBar />
      </div>
    </Router>
  );
}
