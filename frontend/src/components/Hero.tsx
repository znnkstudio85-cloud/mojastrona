import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';
import { HERO_ROTATION_PROJECTS } from '../data/websiteDemos';

interface HeroProps {
  onOrderClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic smooth rotation of showcase photos every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % HERO_ROTATION_PROJECTS.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeDemo = HERO_ROTATION_PROJECTS[currentProjectIndex];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-white">
      {/* Ambient background decoration */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-sky-100/50 via-blue-50/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Editorial kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100/70 border border-sky-200/60 text-sky-900 text-xs font-semibold mb-6">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>Gwarancja 0 zł ryzyka dla Twojej firmy</span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold text-slate-900 leading-[1.15] tracking-tight text-balance">
              Profesjonalna strona internetowa dla Twojej firmy.{' '}
              <span className="text-sky-600 underline decoration-sky-300 underline-offset-4">
                Testuj 14 dni za darmo.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Najpierw przygotuję dla Ciebie gotową stronę internetową. Przetestujesz ją przez 14
              dni i dopiero wtedy zdecydujesz, czy chcesz za nią zapłacić. Bez ryzyka i bez
              zobowiązań do zakupu.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOrderClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-sky-600 hover:bg-sky-700 active:scale-98 rounded-xl shadow-md shadow-sky-600/15 transition-all duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-500"
              >
                <span>Zamów darmowy projekt</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BRAND_CONFIG.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 active:scale-98 rounded-xl shadow-xs transition-all duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-500"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Zadzwoń: {BRAND_CONFIG.phone}</span>
              </a>
            </div>

            {/* 3 Key Differentiator Bullets */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-sky-100 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-sky-600" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  14 dni darmowego testowania
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Bez płatności z góry
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Płacisz dopiero po akceptacji
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, high-resolution rotating photo showcase */}
          <div
            className="lg:col-span-5 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative rounded-3xl bg-white p-3 border border-slate-200/90 shadow-2xl shadow-sky-950/10 transition-all duration-300">
              <div className="relative rounded-2xl overflow-hidden aspect-16/11 bg-slate-900 shadow-inner">
                <img
                  key={activeDemo.id}
                  src={activeDemo.bgImage}
                  alt={activeDemo.name}
                  className="w-full h-full object-cover transition-opacity duration-700"
                />
              </div>

              {/* Discreet dot navigation */}
              <div className="mt-3 px-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {HERO_ROTATION_PROJECTS.map((demo, idx) => (
                    <button
                      key={demo.id}
                      type="button"
                      onClick={() => setCurrentProjectIndex(idx)}
                      className={`transition-all rounded-full ${
                        currentProjectIndex === idx
                          ? 'w-6 h-2 bg-sky-600'
                          : 'w-2 h-2 bg-slate-200 hover:bg-slate-300'
                      }`}
                      aria-label={`Pokaż zdjęcie ${idx + 1}`}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-slate-500">
                  {activeDemo.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
