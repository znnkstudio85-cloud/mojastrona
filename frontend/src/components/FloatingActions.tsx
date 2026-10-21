import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';

export const MobileFloatingCall: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 md:hidden animate-in fade-in duration-300">
      <a
        href={`tel:${BRAND_CONFIG.phoneRaw}`}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-sky-600 hover:bg-sky-700 text-white shadow-xl shadow-sky-600/30 border border-sky-400 font-bold text-xs tracking-wide active:scale-95 transition-all"
        aria-label={`Zadzwoń do nas: ${BRAND_CONFIG.phoneFormatted}`}
      >
        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
          <Phone className="w-3.5 h-3.5 fill-current" />
        </div>
        <span>Zadzwoń: {BRAND_CONFIG.phone}</span>
      </a>
    </div>
  );
};

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="hidden md:flex fixed bottom-6 right-6 z-40 w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-sky-600 hover:border-sky-300 shadow-md hover:shadow-lg items-center justify-center transition-all duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-sky-500"
      aria-label="Wróć na górę strony"
      title="Wróć na górę strony"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
