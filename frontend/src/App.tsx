/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyUs } from './components/WhyUs';
import { HowItWorks } from './components/HowItWorks';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Portfolio } from './components/Portfolio';
import { ContactForm, ContactFormHandle } from './components/ContactForm';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';
import { StandaloneExportModal } from './components/StandaloneExportModal';
import { MobileFloatingCall, ScrollToTop } from './components/FloatingActions';
import { FileCode2 } from 'lucide-react';

export default function App() {
  const contactFormRef = useRef<ContactFormHandle>(null);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [exportModalOpen, setExportModalOpen] = useState(false);

  const scrollToContact = () => {
    contactFormRef.current?.scrollIntoView();
  };

  const handleSelectPlan = (plan: 'ownership' | 'subscription') => {
    contactFormRef.current?.setPlan(plan);
  };

  const handleRequestSimilar = (projectName: string) => {
    contactFormRef.current?.setIndustryPrefill(projectName);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Informative top announcement banner regarding 14-day free trial */}
      <div className="bg-slate-900 text-slate-300 px-4 py-2 text-xs flex items-center justify-between text-center relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <span className="hidden sm:inline-block text-sky-400 font-bold">ZNNKstudio:</span>
          <span>Darmowy 14-dniowy test strony dla Twojej firmy · Płacisz dopiero po akceptacji</span>
        </div>
        <button
          type="button"
          onClick={() => setExportModalOpen(true)}
          className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-sky-300 text-[11px] font-semibold transition-colors"
          title="Pobierz gotową paczkę 3 plików HTML/CSS/JS do wdrożenia na dowolny hosting"
        >
          <FileCode2 className="w-3.5 h-3.5" />
          <span>Paczka 3 plików HTML/CSS/JS</span>
        </button>
      </div>

      {/* Sticky Navigation */}
      <Navbar onNavigateToContact={scrollToContact} />

      {/* Main Page Sections in exact required order */}
      <main className="flex-1">
        {/* 1. Hero Section with Interactive Mockup */}
        <Hero onOrderClick={scrollToContact} />

        {/* 2. Bezpośrednio pod Hero JAKO PIERWSZA: „Co zyskuje Twoja firma?” */}
        <WhyUs />

        {/* 3. Bezpośrednio pod Hero JAKO DRUGA: „Jak działa 14 dni za darmo?” */}
        <HowItWorks onStartClick={scrollToContact} />

        {/* 4. Co mogę dla Ciebie zrobić (Oferta) */}
        <Services onContactClick={scrollToContact} />

        {/* 5. Cennik (500–1000 zł jednorazowo oraz 50 zł / miesiąc abonament) */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* 6. Galeria Realizacji (6 wizualizacji stron www z powiększeniem w lightboxie) */}
        <Portfolio onRequestSimilar={handleRequestSimilar} />

        {/* 7. Formularz Kontaktowy (Najważniejsza sekcja) */}
        <ContactForm ref={contactFormRef} />

        {/* 8. FAQ (Akordeon 7 pytań) */}
        <Faq />

        {/* 9. Końcowa sekcja CTA */}
        <FinalCta onTestClick={scrollToContact} />
      </main>

      {/* Footer */}
      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />

      {/* Modals & Floating Controls */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <StandaloneExportModal isOpen={exportModalOpen} onClose={() => setExportModalOpen(false)} />
      <MobileFloatingCall />
      <ScrollToTop />
    </div>
  );
}
