import React, { useState, forwardRef, useImperativeHandle } from 'react';
import {
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { BRAND_CONFIG, FORM_CONFIG } from '../data/config';

export interface ContactFormHandle {
  setPlan: (plan?: 'ownership' | 'subscription') => void;
  setIndustryPrefill: (text: string) => void;
  scrollIntoView: () => void;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  companyActivity: string;
  websiteType: string;
  materials: {
    hasLogo: boolean;
    hasPhotos: boolean;
    hasDomain: boolean;
    noMaterials: boolean;
  };
  consent: boolean;
  honeypot: string;
}

const INITIAL_STATE: FormState = {
  fullName: '',
  email: '',
  phone: '',
  companyActivity: '',
  websiteType: '',
  materials: {
    hasLogo: false,
    hasPhotos: false,
    hasDomain: false,
    noMaterials: false,
  },
  consent: false,
  honeypot: '',
};

export const ContactForm = forwardRef<ContactFormHandle>((_props, ref) => {
  const [formData, setFormData] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useImperativeHandle(ref, () => ({
    setPlan: () => {
      const elem = document.getElementById('kontakt');
      elem?.scrollIntoView({ behavior: 'smooth' });
    },
    setIndustryPrefill: (text: string) => {
      setFormData((prev) => ({
        ...prev,
        websiteType: `Inspiracja wzorem: ${text}`,
      }));
      const elem = document.getElementById('kontakt');
      elem?.scrollIntoView({ behavior: 'smooth' });
    },
    scrollIntoView: () => {
      const elem = document.getElementById('kontakt');
      elem?.scrollIntoView({ behavior: 'smooth' });
    },
  }));

  // Polish Phone Number Validator (+48 optional, 9 digits)
  const validatePhone = (phoneStr: string): boolean => {
    const cleaned = phoneStr.replace(/[\s\-()]/g, '');
    const polishPhoneRegex = /^(?:\+48)?[1-9]\d{8}$/;
    return polishPhoneRegex.test(cleaned);
  };

  // Standard Email Validator
  const validateEmail = (emailStr: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(emailStr.trim());
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Proszę podać imię i nazwisko lub nazwę firmy.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Adres e-mail jest wymagany.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Wprowadź poprawny adres e-mail (np. kontakt@twojadomena.pl).';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Numer telefonu jest wymagany do kontaktu w sprawie projektu.';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Wprowadź poprawny numer telefonu (9 cyfr, opcjonalnie z +48, np. 537 347 356).';
    }

    if (!formData.companyActivity.trim()) {
      newErrors.companyActivity = 'Proszę krótko opisać, czym zajmuje się Twoja firma.';
    }

    if (!formData.consent) {
      newErrors.consent = 'Wymagana jest zgoda na przetwarzanie danych w celu przygotowania projektu i odpowiedzi.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Spam honeypot detection
    if (formData.honeypot) {
      console.warn('Spam detected via honeypot.');
      setIsSuccess(true);
      return;
    }

    if (!validate()) {
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        document.getElementById(`form-${firstErrorField}`)?.focus();
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const materialsList = [];
      if (formData.materials.hasLogo) materialsList.push('Logo');
      if (formData.materials.hasPhotos) materialsList.push('Zdjęcia');
      if (formData.materials.hasDomain) materialsList.push('Domena');
      if (formData.materials.noMaterials) materialsList.push('Brak materiałów (pomoc potrzebna)');

      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company_activity: formData.companyActivity,
        website_type: formData.websiteType || 'Brak sprecyzowania',
        materials: materialsList.join(', ') || 'Nie zaznaczono',
        target_inquiry: 'Darmowy test 14 dni strony WWW',
        created_at: new Date().toISOString(),
      };

      if (FORM_CONFIG.web3FormsAccessKey) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: FORM_CONFIG.web3FormsAccessKey,
            subject: `Nowe zapytanie o darmowy projekt WWW: ${formData.fullName}`,
            ...payload,
          }),
        });
        const result = await response.json();
        if (!response.ok || !result.success) {
          throw new Error(result.message || 'Błąd wysyłki');
        }
      } else if (FORM_CONFIG.formEndpoint) {
        const response = await fetch(FORM_CONFIG.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!response.ok) {
          throw new Error('Serwer formularza zwrócił błąd');
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
        console.info('Formularz wysłany (tryb developerski ZNNKstudio):', payload);
      }

      setIsSuccess(true);
      setFormData(INITIAL_STATE);
    } catch (err: unknown) {
      console.error('Błąd wysyłania zapytania:', err);
      setSubmitError(
        'Wystąpił problem z przesłaniem formularza przez sieć. Prosimy o ponowną próbę lub bezpośredni kontakt telefoniczny pod numerem ' +
          BRAND_CONFIG.phoneFormatted
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMaterialChange = (key: keyof FormState['materials']) => {
    setFormData((prev) => {
      if (key === 'noMaterials') {
        const newVal = !prev.materials.noMaterials;
        return {
          ...prev,
          materials: {
            hasLogo: false,
            hasPhotos: false,
            hasDomain: false,
            noMaterials: newVal,
          },
        };
      } else {
        return {
          ...prev,
          materials: {
            ...prev.materials,
            [key]: !prev.materials[key],
            noMaterials: false,
          },
        };
      }
    });
  };

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Formularz bez zobowiązań
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Opowiedz mi o swojej firmie
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Wypełnij krótki formularz. Skontaktuję się z Tobą, aby omówić Twoją nową stronę internetową i przygotować bezpłatną wersję do 14-dniowego testu.
          </p>
        </div>

        {/* Content Layout: Form on Left, Contact Panel on Right */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Contact Form */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/40">
            {isSuccess ? (
              <div className="text-center py-12 px-4 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Dziękuję za wiadomość!
                </h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                  Twoje zgłoszenie zostało przesłane. Wkrótce skontaktuję się z Tobą telefonicznie lub mailowo, aby omówić szczegóły i rozpocząć przygotowanie Twojej strony na darmowy 14-dniowy test.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Wyślij kolejne zapytanie
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Submit Error banner if any */}
                {submitError && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-800 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-600 mt-0.5" />
                    <div>
                      <p className="font-semibold">Nie udało się wysłać wiadomości</p>
                      <p className="mt-0.5 text-xs text-rose-700">{submitError}</p>
                    </div>
                  </div>
                )}

                {/* Honeypot anti-spam field (hidden from legitimate users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website-trap">Nie wypełniaj tego pola:</label>
                  <input
                    id="website-trap"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  />
                </div>

                {/* Field 1: Full name / Company name */}
                <div>
                  <label
                    htmlFor="form-fullName"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Imię i nazwisko lub nazwa firmy <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="form-fullName"
                    type="text"
                    required
                    placeholder="np. Jan Kowalski / Auto Serwis Kowalski"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-200 focus:border-sky-500 focus:ring-sky-100'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-rose-600 font-medium">{errors.fullName}</p>
                  )}
                </div>

                {/* Field 2: Email */}
                <div>
                  <label
                    htmlFor="form-email"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Adres e-mail <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    placeholder="np. kontakt@twojafirma.pl"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-200 focus:border-sky-500 focus:ring-sky-100'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-600 font-medium">{errors.email}</p>
                  )}
                </div>

                {/* Field 3: Phone */}
                <div>
                  <label
                    htmlFor="form-phone"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Numer telefonu <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    required
                    placeholder="np. 537 347 356 lub +48 537 347 356"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-200 focus:border-sky-500 focus:ring-sky-100'
                    }`}
                  />
                  <p className="mt-1 text-[11px] text-slate-500">
                    Akceptujemy format 9 cyfr z lub bez prefiksu +48.
                  </p>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-rose-600 font-medium">{errors.phone}</p>
                  )}
                </div>

                {/* Field 4: Business activity */}
                <div>
                  <label
                    htmlFor="form-companyActivity"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Czym zajmuje się Twoja firma? <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="form-companyActivity"
                    rows={3}
                    required
                    placeholder="np. Prowadzę warsztat mechaniki pojazdowej w Krakowie, wykonujemy naprawy bieżące, klimatyzację i geometrię kół."
                    value={formData.companyActivity}
                    onChange={(e) => {
                      setFormData({ ...formData, companyActivity: e.target.value });
                      if (errors.companyActivity) setErrors({ ...errors, companyActivity: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.companyActivity
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-200 focus:border-sky-500 focus:ring-sky-100'
                    }`}
                  />
                  {errors.companyActivity && (
                    <p className="mt-1 text-xs text-rose-600 font-medium">
                      {errors.companyActivity}
                    </p>
                  )}
                </div>

                {/* Field 5: Desired website type (optional) */}
                <div>
                  <label
                    htmlFor="form-websiteType"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Jaką stronę chcesz mieć? <span className="text-slate-400 text-[10px] font-normal lowercase">(opcjonalnie)</span>
                  </label>
                  <input
                    id="form-websiteType"
                    type="text"
                    placeholder="Np. strona wizytówkowa, prezentacja oferty, galeria zdjęć, formularz kontaktowy"
                    value={formData.websiteType}
                    onChange={(e) => setFormData({ ...formData, websiteType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none transition-all"
                  />
                </div>

                {/* Field 6: Do you already have materials? (Checkboxes) */}
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                    Czy masz już materiały do strony?
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:border-slate-300 cursor-pointer bg-slate-50/50 hover:bg-slate-50 transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.materials.hasLogo}
                        onChange={() => handleMaterialChange('hasLogo')}
                        className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500"
                      />
                      <span className="text-xs sm:text-sm font-medium text-slate-700">Mam logo</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:border-slate-300 cursor-pointer bg-slate-50/50 hover:bg-slate-50 transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.materials.hasPhotos}
                        onChange={() => handleMaterialChange('hasPhotos')}
                        className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500"
                      />
                      <span className="text-xs sm:text-sm font-medium text-slate-700">Mam zdjęcia</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:border-slate-300 cursor-pointer bg-slate-50/50 hover:bg-slate-50 transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.materials.hasDomain}
                        onChange={() => handleMaterialChange('hasDomain')}
                        className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500"
                      />
                      <span className="text-xs sm:text-sm font-medium text-slate-700">Mam domenę</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:border-slate-300 cursor-pointer bg-slate-50/50 hover:bg-slate-50 transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.materials.noMaterials}
                        onChange={() => handleMaterialChange('noMaterials')}
                        className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500"
                      />
                      <span className="text-xs sm:text-sm font-medium text-slate-700">Nie mam jeszcze materiałów</span>
                    </label>
                  </div>
                </div>

                {/* Field 7: Consent Checkbox (REQUIRED) */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      id="form-consent"
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => {
                        setFormData({ ...formData, consent: e.target.checked });
                        if (errors.consent) setErrors({ ...errors, consent: '' });
                      }}
                      className="mt-0.5 w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500 shrink-0"
                    />
                    <span className="text-xs text-slate-600 leading-relaxed">
                      Wyrażam zgodę na przetwarzanie podanych danych osobowych w celu kontaktu,
                      udzielenia odpowiedzi na zapytanie i przygotowania bezpłatnego projektu testowego
                      strony internetowej przez ZNNKstudio. <span className="text-rose-500">*</span>
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="mt-1 text-xs text-rose-600 font-medium">{errors.consent}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-sky-600 hover:bg-sky-700 active:scale-98 disabled:opacity-60 text-white font-semibold text-base flex items-center justify-center gap-2.5 shadow-md shadow-sky-600/15 transition-all focus-visible:outline-2 focus-visible:outline-sky-500"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Przesyłanie zapytania...</span>
                      </span>
                    ) : (
                      <>
                        <span>Wyślij zapytanie o darmowy projekt</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="mt-3 text-center text-xs text-slate-500">
                    Brak opłat z góry · 14 dni darmowego testu gotowej strony · Zero ryzyka
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Side Panel: "Wolisz porozmawiać?" */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg shadow-slate-200/30">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full">
                Szybki kontakt
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-3">
                Wolisz porozmawiać?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Zadzwoń bezpośrednio lub napisz e-mail. Chętnie odpowiem na wszystkie pytania dotyczące Twojej nowej strony.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 space-y-4">
                {/* Clickable Phone */}
                <a
                  href={`tel:${BRAND_CONFIG.phoneRaw}`}
                  className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-sky-50/70 border border-transparent hover:border-sky-200 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-slate-500 tracking-wider block">
                      Telefon
                    </span>
                    <span className="text-base font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {BRAND_CONFIG.phone}
                    </span>
                    <span className="text-[11px] text-sky-600 block mt-0.5 font-medium">
                      Kliknij, aby zadzwonić
                    </span>
                  </div>
                </a>

                {/* Clickable Email */}
                <a
                  href={`mailto:${BRAND_CONFIG.email}`}
                  className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-sky-50/70 border border-transparent hover:border-sky-200 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-slate-500 tracking-wider block">
                      E-mail
                    </span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors break-all">
                      {BRAND_CONFIG.email}
                    </span>
                    <span className="text-[11px] text-sky-600 block mt-0.5 font-medium">
                      Kliknij, aby napisać
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Trial Guarantee Side Card */}
            <div className="rounded-3xl bg-gradient-to-br from-sky-600 to-blue-700 p-6 text-white shadow-lg">
              <div className="flex items-center gap-2 mb-2 text-sky-200 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-sky-300" />
                <span>Bezpieczna zasada</span>
              </div>
              <h4 className="text-lg font-bold">14 dni darmowego testu</h4>
              <p className="mt-2 text-xs text-sky-100 leading-relaxed">
                Przygotowuję dla Ciebie stronę do testowania. Nie pobieram zaliczki przed przedstawieniem gotowego projektu. Decydujesz dopiero po 14 dniach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
