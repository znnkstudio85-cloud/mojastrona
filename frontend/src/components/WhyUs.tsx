import React from 'react';
import { Award, ShieldCheck, LayoutDashboard, PhoneCall, Clock, TrendingUp } from 'lucide-react';
import { BENEFITS } from '../data/config';

export const WhyUs: React.FC = () => {
  const iconList = [Award, ShieldCheck, LayoutDashboard, PhoneCall, Clock, TrendingUp];

  return (
    <section id="korzysci" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Realna wartość dla biznesu
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Co zyskuje Twoja firma?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Dobra strona internetowa to sprawdzona inwestycja, która ułatwia pozyskiwanie nowych zleceń i buduje silną pozycję na rynku.
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((item, idx) => {
            const Icon = iconList[idx % iconList.length];
            return (
              <div
                key={item.id}
                className="group p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-50 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
