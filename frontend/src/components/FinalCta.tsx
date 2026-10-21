import React from 'react';
import { ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';

interface FinalCtaProps {
  onTestClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onTestClick }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-blue-50/40 to-white border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="w-14 h-14 rounded-2xl bg-sky-600 text-white flex items-center justify-center mx-auto mb-6 shadow-md shadow-sky-600/20">
          <ShieldCheck className="w-8 h-8" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
          Nie inwestuj w ciemno.{' '}
          <span className="text-sky-600 block sm:inline">
            Sprawdź swoją stronę przez 14 dni za darmo.
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Zobacz gotowy projekt, przetestuj go i dopiero wtedy zdecyduj, czy chcesz za niego zapłacić.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onTestClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-sky-600 hover:bg-sky-700 active:scale-98 rounded-xl shadow-lg shadow-sky-600/20 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-sky-500"
          >
            <span>Chcę przetestować swoją stronę</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${BRAND_CONFIG.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 active:scale-98 rounded-xl shadow-xs transition-all duration-150 focus-visible:outline-2 focus-visible:outline-sky-500"
          >
            <Phone className="w-4 h-4 text-sky-600" />
            <span>Zadzwoń: {BRAND_CONFIG.phone}</span>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-500">
          <span>✓ Brak opłat z góry</span>
          <span>✓ 14 dni darmowego testu</span>
          <span>✓ Rezygnacja bez kosztów</span>
        </div>
      </div>
    </section>
  );
};
