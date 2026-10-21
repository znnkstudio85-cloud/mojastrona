import React from 'react';
import { Phone, Mail, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Description without 'Z' logo badge */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-2xl font-extrabold tracking-tight text-white">
              <span>ZNNK</span>
              <span className="text-sky-400 font-semibold ml-0.5">studio</span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Nowoczesne strony internetowe dla małych firm i lokalnych przedsiębiorców.
              Strony wizytówkowe, usługowe oraz prezentacje oferty z możliwością bezpłatnego
              testowania przez 14 dni przed decyzją o zakupie.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-sky-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Gwarancja 0 zł opłat za przygotowanie projektu testowego</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Nawigacja
            </span>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#korzysci"
                  onClick={(e) => handleSmoothScroll(e, '#korzysci')}
                  className="hover:text-white transition-colors"
                >
                  Co zyskuje Twoja firma
                </a>
              </li>
              <li>
                <a
                  href="#jak-to-dziala"
                  onClick={(e) => handleSmoothScroll(e, '#jak-to-dziala')}
                  className="hover:text-white transition-colors"
                >
                  Jak działa 14 dni za darmo
                </a>
              </li>
              <li>
                <a
                  href="#cennik"
                  onClick={(e) => handleSmoothScroll(e, '#cennik')}
                  className="hover:text-white transition-colors"
                >
                  Cennik i abonament
                </a>
              </li>
              <li>
                <a
                  href="#oferta"
                  onClick={(e) => handleSmoothScroll(e, '#oferta')}
                  className="hover:text-white transition-colors"
                >
                  Zakres oferty
                </a>
              </li>
              <li>
                <a
                  href="#realizacje"
                  onClick={(e) => handleSmoothScroll(e, '#realizacje')}
                  className="hover:text-white transition-colors"
                >
                  Galeria realizacji
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  onClick={(e) => handleSmoothScroll(e, '#kontakt')}
                  className="hover:text-white transition-colors"
                >
                  Formularz kontaktowy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (No opening hours) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Kontakt bezpośredni
            </span>
            <div className="space-y-3.5 text-sm">
              <a
                href={`tel:${BRAND_CONFIG.phoneRaw}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400">Telefon:</span>
                  <span className="font-semibold text-white">{BRAND_CONFIG.phoneFormatted}</span>
                </div>
              </a>

              <a
                href={`mailto:${BRAND_CONFIG.email}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400">E-mail:</span>
                  <span className="font-semibold text-white">{BRAND_CONFIG.email}</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {BRAND_CONFIG.name}. Wszelkie prawa zastrzeżone.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors underline underline-offset-4"
            >
              Polityka prywatności i RODO
            </button>
            <span>Projekt i wykonanie: ZNNKstudio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
