import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 my-8 max-h-[85vh] overflow-y-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sky-600" />
            <h3 className="text-lg font-bold text-slate-900">
              Polityka prywatności i ochrona danych (RODO)
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Zamknij okno"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <h4 className="font-bold text-slate-900 text-sm">
            1. Administrator Danych Osobowych
          </h4>
          <p>
            Administratorem Twoich danych osobowych jest <strong>{BRAND_CONFIG.name}</strong>,
            kontakt: <a href={`mailto:${BRAND_CONFIG.email}`} className="text-sky-600 underline">{BRAND_CONFIG.email}</a>, tel. {BRAND_CONFIG.phoneFormatted}.
          </p>

          <h4 className="font-bold text-slate-900 text-sm">
            2. Cel i podstawa przetwarzania danych
          </h4>
          <p>
            Dane osobowe podane w formularzu kontaktowym (imię i nazwisko / nazwa firmy, adres e-mail,
            numer telefonu, opis działalności) są przetwarzane wyłącznie w celu:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Udzielenia odpowiedzi na przesłane zapytanie ofertowe,</li>
            <li>Kontaktu telefonicznego i mailowego w sprawie omówienia potrzeb strony,</li>
            <li>Przygotowania bezpłatnego projektu strony internetowej do 14-dniowego testu.</li>
          </ul>
          <p>
            Podstawą prawną przetwarzania danych jest Twoja dobrowolna zgoda (art. 6 ust. 1 lit. a RODO) oraz
            podjęcie działań na żądanie osoby, której dane dotyczą, przed zawarciem ewentualnej umowy (art. 6 ust. 1 lit. b RODO).
          </p>

          <h4 className="font-bold text-slate-900 text-sm">
            3. Okres przechowywania danych
          </h4>
          <p>
            Twoje dane będą przechowywane przez okres niezbędny do obsługi zapytania oraz trwania
            14-dniowego okresu testowego, a w przypadku nawiązania współpracy – przez czas trwania umowy
            i wymagany przepisami prawa.
          </p>

          <h4 className="font-bold text-slate-900 text-sm">
            4. Twoje prawa
          </h4>
          <p>
            Posiadasz prawo dostępu do treści swoich danych, ich sprostowania, usunięcia, ograniczenia
            przetwarzania, prawo do przenoszenia danych oraz prawo do cofnięcia zgody w dowolnym momencie.
            W celu realizacji swoich praw napisz do nas na: <span className="font-semibold text-slate-900">{BRAND_CONFIG.email}</span>.
          </p>

          <h4 className="font-bold text-slate-900 text-sm">
            5. Poufność i brak spamu
          </h4>
          <p>
            Twoje dane nie są odsprzedawane ani przekazywane podmiotom trzecim w celach marketingowych.
            Formularz jest zabezpieczony przed spamem.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-100 text-right">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-colors"
          >
            Rozumiem i zamykam
          </button>
        </div>
      </div>
    </div>
  );
};
