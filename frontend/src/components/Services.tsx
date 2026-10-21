import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/config';

interface ServicesProps {
  onContactClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onContactClick }) => {
  return (
    <section id="oferta" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Kompleksowe wsparcie
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Co mogę dla Ciebie zrobić?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Dopasowuję rozwiązania do specyfiki Twojej branży – od prostej wizytówki po rozbudowaną stronę z portfolio.
          </p>
        </div>

        {/* 12 Services with Checkmarks */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition-all duration-150 flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {service.name}
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={onContactClick}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-sky-600 hover:bg-sky-700 active:scale-98 rounded-xl shadow-md shadow-sky-600/15 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-sky-500"
          >
            <span>Opowiedz mi o swoim projekcie</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
