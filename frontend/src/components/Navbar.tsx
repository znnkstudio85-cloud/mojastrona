import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';

interface NavbarProps {
  onNavigateToContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Korzyści', href: '#korzysci' },
    { label: 'Jak to działa', href: '#jak-to-dziala' },
    { label: 'Cennik', href: '#cennik' },
    { label: 'Oferta', href: '#oferta' },
    { label: 'Realizacje', href: '#realizacje' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100 py-3.5'
          : 'bg-white/80 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Pure Brand Wordmark without 'Z' logo icon */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 group"
          >
            <span className="tracking-tight text-slate-950 font-extrabold">ZNNK</span>
            <span className="text-sky-600 font-semibold ml-0.5">studio</span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-sky-600 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-500 rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Phone CTA (Desktop) & Hamburger Toggle (Mobile) */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BRAND_CONFIG.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-xs transition-all duration-150 hover:shadow-sky-100 active:scale-98 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-500"
              title={`Zadzwoń do nas: ${BRAND_CONFIG.phoneFormatted}`}
            >
              <Phone className="w-4 h-4" />
              <span>Zadzwoń: {BRAND_CONFIG.phone}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:text-sky-600 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-sky-500"
              aria-label={mobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${BRAND_CONFIG.phoneRaw}`}
                className="flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-xs"
              >
                <Phone className="w-5 h-5" />
                <span>Zadzwoń: {BRAND_CONFIG.phone}</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToContact();
                }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl"
              >
                <span>Wypełnij formularz</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
