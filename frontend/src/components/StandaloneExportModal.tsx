import React, { useState } from 'react';
import { X, Code2, Copy, Check, Download, Server, Sparkles } from 'lucide-react';

interface StandaloneExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneExportModal: React.FC<StandaloneExportModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedFile, setCopiedFile] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (fileName: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedFile(fileName);
    setTimeout(() => setCopiedFile(null), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Paczka 3 plików HTML / CSS / JS do pobrania
              </h3>
              <p className="text-xs text-slate-500">
                Wersja statyczna gotowa do wgrania na dowolny hosting bez Node.js
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Zamknij"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-6 text-sm text-slate-600">
          <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 flex items-start gap-3 text-sky-950">
            <Sparkles className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <span className="font-bold block mb-1">
                Przygotowano kompletny zestaw 3 plików:
              </span>
              W folderze <code>/standalone</code> znajdują się:
              <ul className="list-disc pl-5 mt-1 space-y-0.5 text-xs text-sky-900">
                <li><code>standalone/index.html</code> (kompletny kod HTML5 ze strukturą Schema.org i SEO)</li>
                <li><code>standalone/style.css</code> (czysty CSS3 z kolorami, kartami i responsywnością)</li>
                <li><code>standalone/script.js</code> (minimalny Vanilla JS z walidacją telefonu i e-maila)</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm">
              <Server className="w-4 h-4 text-sky-600" />
              <span>Jak uruchomić stronę na dowolnym hostingu?</span>
            </h4>
            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
              <li>
                <strong>Skopiuj lub pobierz 3 pliki</strong>: <code>index.html</code>, <code>style.css</code> oraz <code>script.js</code> z folderu <code>/standalone</code>.
              </li>
              <li>
                <strong>Wgraj pliki na swój serwer</strong> przez FTP, cPanel lub menedżer plików do katalogu głównego (np. <code>public_html</code>).
              </li>
              <li>
                <strong>Konfiguracja formularza:</strong> W pliku <code>script.js</code> na samej górze wklej swój darmowy klucz z <a href="https://web3forms.com" target="_blank" rel="noreferrer" className="text-sky-600 underline font-semibold">Web3Forms.com</a> lub endpoint z <a href="https://formspree.io" target="_blank" rel="noreferrer" className="text-sky-600 underline font-semibold">Formspree.io</a>.
              </li>
              <li>
                Strona zadziała natychmiast na każdym hostingu (Cyberfolks, LH.pl, OVH, Kei, Home.pl, Apache, Nginx itd.) bez konieczności uruchamiania npm czy kompilacji.
              </li>
            </ol>
          </div>

          {/* Quick Copy Box */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
            <div className="flex items-center justify-between font-mono font-bold text-slate-700 mb-2">
              <span>Ścieżki plików w Twoim projekcie:</span>
            </div>
            <div className="bg-slate-900 text-slate-200 p-3 rounded-xl font-mono text-[11px] space-y-1">
              <div>📁 /netlify/functions/send-email.js (funkcja e-mail dla Netlify + Resend)</div>
              <div>📁 /netlify.toml (konfiguracja Netlify)</div>
              <div>📁 /.env.example (przykładowe zmienne: RESEND_API_KEY, CONTACT_TO_EMAIL)</div>
              <div>📁 /standalone/index.html (wersja HTML5)</div>
              <div>📁 /standalone/style.css (style CSS)</div>
              <div>📁 /standalone/script.js (skrypt JS)</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-colors"
          >
            Zamknij okno
          </button>
        </div>
      </div>
    </div>
  );
};
