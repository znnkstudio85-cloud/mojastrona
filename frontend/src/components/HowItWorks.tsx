import React from 'react';
import { MessageSquareText, Palette, Clock, ThumbsUp, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/config';

interface HowItWorksProps {
  onStartClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartClick }) => {
  const icons = [MessageSquareText, Palette, Clock, ThumbsUp];

  return (
    <section id="jak-to-dziala" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Przejrzyste zasady bez ryzyka
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Jak działa 14 dni za darmo?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Zobacz, jak wygląda współpraca od pierwszego zgłoszenia po uruchomienie gotowej strony www dla Twojej firmy.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div
                key={step.step}
                className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-50 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      Krok {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-500">
                  <span className="text-sky-700 font-semibold">{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onStartClick}
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors focus-visible:outline-2 focus-visible:outline-sky-500"
          >
            <span>Rozpocznij krok 1 – opowiedz mi o swojej firmie</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
