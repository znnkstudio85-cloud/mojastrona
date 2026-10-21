import React from 'react';
import { GALLERY_PROJECTS } from '../data/websiteDemos';

interface PortfolioProps {
  onRequestSimilar?: (projectName: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <section id="realizacje" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Realizacje
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Zobacz, jak może wyglądać Twoja strona
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Przykładowe realizacje dopasowane do specyfiki małych i lokalnych firm.
          </p>
        </div>

        {/* Clean Photos Grid: No descriptions under photos, no preview overlays, just pure photos */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 aspect-16/11"
            >
              <img
                src={project.bgImage}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
