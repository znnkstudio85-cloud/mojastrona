import React from 'react';
import { Check, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/config';

interface PricingProps {
  onSelectPlan: (planId: 'ownership' | 'subscription') => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="cennik" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Przejrzyste modele rozliczenia
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Wybierz model dopasowany do Twojego budżetu
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Dwa czytelne sposoby współpracy. Ty decydujesz, czy wolisz zakupić stronę na własność,
            czy korzystać z wygodnego miesięcznego abonamentu.
          </p>
        </div>

        {/* 2 Pricing Cards Side-by-Side */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isSubscription = plan.id === 'subscription';

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl bg-white p-8 sm:p-9 border transition-all duration-200 flex flex-col justify-between ${
                  isSubscription
                    ? 'border-sky-300 shadow-xl shadow-sky-500/5 ring-1 ring-sky-300'
                    : 'border-slate-200 shadow-md shadow-slate-200/50 hover:border-slate-300'
                }`}
              >
                {/* Header Tag */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-bold tracking-wider uppercase text-slate-500">
                      {plan.badge}
                    </span>
                    {isSubscription ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800">
                        <Sparkles className="w-3 h-3 text-sky-600" />
                        Najpopularniejszy wybór
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        Jednorazowo
                      </span>
                    )}
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-extrabold text-slate-900">{plan.name}</h3>

                  {/* Price Block */}
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                      {plan.price}
                    </span>
                    {plan.pricePeriod && (
                      <span className="text-sm font-semibold text-slate-500">
                        {plan.pricePeriod}
                      </span>
                    )}
                  </div>

                  {/* Subtitle */}
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {plan.priceSubtitle}
                  </p>

                  {/* Note for ownership card if present */}
                  {plan.note && (
                    <p className="mt-2 text-xs font-semibold text-sky-700 bg-sky-50/80 p-2.5 rounded-lg border border-sky-100/80">
                      {plan.note}
                    </p>
                  )}

                  {/* Features List */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-4">
                      W ramach oferty:
                    </span>
                    <ul className="space-y-3.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                          <div className="w-5 h-5 rounded-md bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-10 pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan.id as 'ownership' | 'subscription')}
                    className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-150 flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-sky-500 ${
                      isSubscription
                        ? 'bg-sky-600 text-white hover:bg-sky-700 shadow-md shadow-sky-600/15'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Note Under Cards */}
        <div className="mt-12 max-w-4xl mx-auto space-y-4">
          <p className="text-center text-sm text-slate-500 leading-relaxed px-4">
            Przed rozpoczęciem współpracy poznasz dokładny koszt, zakres usług oraz ewentualne opłaty za hosting, domenę i dodatkowe funkcjonalności.
          </p>

          {/* Highlighted 14-Day Free Trial Notice */}
          <div className="rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50 to-sky-50 p-6 border border-sky-200/80 text-center flex flex-col sm:flex-row items-center justify-center gap-4 text-sky-950 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <p className="text-sm sm:text-base font-semibold leading-snug">
              Niezależnie od wybranego sposobu rozliczenia możesz najpierw przetestować przygotowaną
              stronę przez 14 dni za darmo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
