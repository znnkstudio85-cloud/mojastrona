import React from 'react';
import { WebsiteDemoItem } from '../data/websiteDemos';

interface WebsiteMockupPreviewProps {
  demo: WebsiteDemoItem;
  device?: 'desktop' | 'mobile';
  isCompact?: boolean;
}

export const WebsiteMockupPreview: React.FC<WebsiteMockupPreviewProps> = ({
  demo,
  device = 'desktop',
  isCompact = false,
}) => {
  if (device === 'mobile') {
    return (
      <div className="relative mx-auto max-w-[270px] rounded-3xl bg-slate-900 p-2.5 shadow-2xl border-4 border-slate-800 transition-all select-none">
        {/* Phone Notch/Speaker */}
        <div className="w-16 h-3.5 bg-slate-800 rounded-full mx-auto mb-2" />

        {/* Inner Phone Screen */}
        <div className="rounded-2xl overflow-hidden bg-slate-950 text-white relative flex flex-col justify-between aspect-9/16">
          {/* Background image */}
          <img
            src={demo.bgImage}
            alt={demo.name}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className={`absolute inset-0 ${demo.theme.overlayGradient || 'bg-gradient-to-t from-black/90 via-black/40 to-black/70'}`} />

          {/* Simulated Mobile Header: Brand & CTA only, NO text links */}
          <div className="relative z-10 p-3 flex items-center justify-between border-b border-white/10 bg-black/40 backdrop-blur-xs">
            <div>
              <span className="text-[11px] font-extrabold tracking-tight text-white block">
                {demo.header.logoText}
              </span>
              {demo.header.logoSub && (
                <span className="text-[7px] text-slate-300 tracking-wider block">
                  {demo.header.logoSub}
                </span>
              )}
            </div>
            <span
              className="text-[9px] font-bold px-2 py-0.5 rounded shadow-xs"
              style={{ backgroundColor: demo.theme.accent, color: '#0f172a' }}
            >
              {demo.header.phoneBtnText}
            </span>
          </div>

          {/* Simulated Mobile Hero */}
          <div className="relative z-10 p-3.5 flex flex-col justify-end text-left">
            <span
              className="text-[9px] font-bold uppercase tracking-wider inline-block px-2 py-0.5 rounded-full mb-1.5 w-fit"
              style={{ backgroundColor: demo.theme.accentBg, color: demo.theme.accent }}
            >
              {demo.hero.kicker}
            </span>
            <h4 className="text-sm font-extrabold text-white leading-tight">
              {demo.hero.headline}
            </h4>
            <p className="text-[10px] text-slate-200 mt-1 leading-relaxed line-clamp-3">
              {demo.hero.subheadline}
            </p>

            {/* Mobile CTAs */}
            <div className="mt-3 flex flex-col gap-1.5 w-full">
              <div
                className="w-full text-center py-2 px-3 rounded-lg text-[11px] font-bold shadow-md"
                style={{ backgroundColor: demo.theme.accent, color: '#0f172a' }}
              >
                {demo.hero.primaryCta}
              </div>
              <div className="w-full text-center py-1.5 px-3 rounded-lg text-[10px] font-semibold text-white bg-white/15 border border-white/15">
                {demo.hero.secondaryCta}
              </div>
            </div>

            {/* Micro Badge */}
            <div className="mt-2 text-center text-[9px] text-slate-300">
              ✓ 100% dopasowana do smartfonów
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop Mockup View (Compact for Gallery or Full for Hero/Lightbox)
  return (
    <div className="w-full h-full rounded-xl overflow-hidden bg-slate-950 relative select-none flex flex-col justify-between">
      {/* Background Image with custom overlay matching each project style */}
      <img
        src={demo.bgImage}
        alt={demo.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      <div className={`absolute inset-0 ${demo.theme.overlayGradient || 'bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/70'}`} />

      {/* Website Top Bar: Clean Brand Logo + CTA button (NO text links over photo) */}
      <div
        className={`relative z-10 px-4 py-2.5 flex items-center justify-between border-b border-white/10 ${
          demo.theme.navStyle
        }`}
      >
        {/* Website Brand Logo */}
        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: demo.theme.accent }}
          />
          <div>
            <span
              className={`font-black tracking-tight text-white block ${
                isCompact ? 'text-[11px]' : 'text-xs sm:text-sm'
              }`}
            >
              {demo.header.logoText}
            </span>
            {demo.header.logoSub && (
              <span className="text-[8px] text-slate-300 tracking-wider uppercase block leading-none">
                {demo.header.logoSub}
              </span>
            )}
          </div>
        </div>

        {/* Right side: Action button (NO text menu links over image) */}
        <div className="flex items-center gap-2">
          <span
            className={`font-bold rounded-lg shadow-xs whitespace-nowrap ${
              isCompact ? 'px-2.5 py-1 text-[9px]' : 'px-3 py-1.5 text-[11px]'
            }`}
            style={{ backgroundColor: demo.theme.accent, color: '#0f172a' }}
          >
            {demo.header.phoneBtnText}
          </span>
        </div>
      </div>

      {/* Website Hero Content Block */}
      <div
        className={`relative z-10 text-left ${
          isCompact ? 'p-4 sm:p-5' : 'p-6 sm:p-8'
        }`}
      >
        {/* Kicker & Style Badge */}
        <div className="mb-2 flex items-center gap-2 flex-wrap">
          <span
            className={`font-bold uppercase tracking-wider inline-block rounded-full border ${
              isCompact ? 'text-[9px] px-2 py-0.5' : 'text-[11px] px-3 py-1'
            }`}
            style={{
              backgroundColor: demo.theme.accentBg,
              color: demo.theme.accent,
              borderColor: `${demo.theme.accent}40`,
            }}
          >
            {demo.hero.kicker}
          </span>
          {demo.styleLabel && (
            <span className="text-[9px] font-semibold text-white/90 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/15">
              {demo.styleLabel}
            </span>
          )}
        </div>

        {/* Main Headline */}
        <h3
          className={`font-black text-white leading-[1.15] tracking-tight ${
            isCompact ? 'text-sm sm:text-base' : 'text-xl sm:text-2xl lg:text-3xl max-w-xl'
          }`}
        >
          {demo.hero.headline}
        </h3>

        {/* Subtitle */}
        <p
          className={`text-slate-200 leading-relaxed max-w-lg ${
            isCompact ? 'text-[11px] mt-1.5 line-clamp-2' : 'text-xs sm:text-sm mt-2.5'
          }`}
        >
          {demo.hero.subheadline}
        </p>

        {/* CTAs */}
        <div className={`flex items-center gap-2.5 ${isCompact ? 'mt-3' : 'mt-5'}`}>
          <div
            className={`font-bold rounded-xl shadow-md transition-transform whitespace-nowrap ${
              isCompact ? 'px-3 py-1.5 text-[10px]' : 'px-4 py-2.5 text-xs'
            }`}
            style={{ backgroundColor: demo.theme.accent, color: '#0f172a' }}
          >
            {demo.hero.primaryCta}
          </div>
          <div
            className={`font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/20 rounded-xl whitespace-nowrap ${
              isCompact ? 'px-2.5 py-1.5 text-[9px]' : 'px-3.5 py-2.5 text-xs'
            }`}
          >
            {demo.hero.secondaryCta}
          </div>
        </div>

        {/* Feature Pills Strip */}
        {!isCompact && (
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs text-slate-300">
            {demo.hero.pills.map((pill, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>{pill}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
