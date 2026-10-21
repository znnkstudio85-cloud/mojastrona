/**
 * =========================================================================
 * ZNNKSTUDIO - GŁÓWNA KONFIGURACJA STRONY
 * =========================================================================
 * W tym pliku możesz łatwo modyfikować dane kontaktowe, ofertę, cennik,
 * realizacje w galerii oraz konfigurację formularza kontaktowego.
 */

// =========================================================================
// 1. DANE KONTAKTOWE I MARKA
// =========================================================================
export const BRAND_CONFIG = {
  name: 'ZNNKstudio',
  tagline: 'Nowoczesne strony internetowe dla firm',
  phone: '537 347 356',
  phoneRaw: '537347356',
  phoneFormatted: '+48 537 347 356',
  email: 'znnkstudio@gmail.com',
  responseTime: 'Szybki kontakt telefoniczny i mailowy',
  trialDays: 14,
};

// =========================================================================
// 2. KONFIGURACJA FORMULARZA KONTAKTOWEGO
// =========================================================================
export const FORM_CONFIG = {
  formEndpoint: '', 
  web3FormsAccessKey: '', 
  recipientEmail: BRAND_CONFIG.email,
};

// =========================================================================
// 3. JAK DZIAŁA 14 DNI ZA DARMO? (4 ETAPY)
// =========================================================================
export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Opowiadasz mi o swojej firmie',
    description: 'Wypełniasz krótki formularz i przedstawiasz swoje oczekiwania, branżę oraz preferencje dotyczące strony.',
    highlight: 'Krótki formularz i analiza potrzeb',
  },
  {
    step: '02',
    title: 'Przygotowuję Twoją stronę',
    description: 'Tworzę projekt dopasowany do Twojej działalności, bez pobierania opłaty za przygotowanie strony do testowania.',
    highlight: '0 zł zaliczki za projekt testowy',
  },
  {
    step: '03',
    title: 'Testujesz ją przez 14 dni za darmo',
    description: 'Sprawdzasz wygląd, działanie i funkcjonalność przygotowanej strony na telefonie, tablecie i komputerze.',
    highlight: '14 dni pełnego darmowego testu',
  },
  {
    step: '04',
    title: 'Decydujesz, czy chcesz zapłacić',
    description: 'Jeśli projekt Ci odpowiada, wybierasz sposób rozliczenia. Jeśli nie, rezygnujesz bez opłaty za wykonanie strony.',
    highlight: 'Zero ryzyka i zobowiązań',
  },
];

// =========================================================================
// 4. CENNIK (500–1000 ZŁ LUB ABONAMENT 50 ZŁ)
// =========================================================================
export const PRICING_PLANS = [
  {
    id: 'ownership',
    name: 'Zakup strony na własność',
    price: '500–1000 zł',
    priceSubtitle: 'Cena zależy od zakresu projektu, liczby podstron oraz wymaganych funkcjonalności.',
    note: 'Dokładną cenę ustalam indywidualnie przed rozpoczęciem współpracy.',
    badge: 'Pełna własność',
    features: [
      'Jednorazowa płatność po akceptacji',
      'Otrzymujesz kod źródłowy i pliki strony',
      'Strona należy do Ciebie bezterminowo',
      'Brak obowiązkowej miesięcznej subskrypcji za wykonanie strony',
      'Możliwość dalszej rozbudowy w przyszłości',
      'Cena ustalana przed rozpoczęciem płatnej współpracy',
    ],
    ctaText: 'Zapytaj o wycenę',
    recommended: false,
  },
  {
    id: 'subscription',
    name: 'Strona w abonamencie',
    price: '50 zł',
    pricePeriod: '/ miesiąc',
    priceSubtitle: 'Wygodne rozliczenie miesięczne bez dużego wydatku na start.',
    badge: 'Niski koszt startu',
    features: [
      'Niska miesięczna opłata',
      'Bez jednorazowego zakupu strony',
      'Przejrzyste zasady współpracy',
      'Możliwość ustalenia zakresu wsparcia',
      'Warunki użytkowania i zakończenia abonamentu określane przed podpisaniem umowy',
    ],
    ctaText: 'Zapytaj o abonament',
    recommended: true,
  },
];

// =========================================================================
// 5. CO ZYSKUJE TWOJA FIRMA? (6 KORZYŚCI)
// =========================================================================
export const BENEFITS = [
  {
    id: 1,
    title: 'Profesjonalny wizerunek',
    description: 'Nowoczesny, estetyczny wygląd buduje pierwsze wrażenie, które od razu wyróżnia Twoją działalność na tle lokalnej konkurencji.',
  },
  {
    id: 2,
    title: 'Większa wiarygodność firmy',
    description: 'Dopracowana strona z danymi kontaktowymi budzi zaufanie potencjalnych klientów jeszcze przed wykonaniem pierwszego telefonu.',
  },
  {
    id: 3,
    title: 'Lepsza prezentacja oferty',
    description: 'Przejrzysty układ pozwala w atrakcyjny sposób pokazać to, czym się zajmujesz, zakres usług oraz dotychczasowe realizacje.',
  },
  {
    id: 4,
    title: 'Łatwiejsze pozyskiwanie zapytań',
    description: 'Szybkie przyciski bezpośredniego połączenia, przejrzysty formularz i mapa ułatwiają klientom szybki kontakt z Twoją firmą.',
  },
  {
    id: 5,
    title: 'Dostępność informacji o firmie 24/7',
    description: 'Twoi potencjalni klienci mogą sprawdzić ofertę, lokalizację i zakres usług o każdej porze dnia i nocy.',
  },
  {
    id: 6,
    title: 'Większe możliwości rozwoju biznesu',
    description: 'Własna strona to solidna baza pod lokalne pozycjonowanie w Google, wizytówkę Google Maps i pozyskiwanie nowych klientów.',
  },
];

// =========================================================================
// 6. CO MOGĘ DLA CIEBIE ZROBIĆ (ZAKRES USŁUG)
// =========================================================================
export const SERVICES_LIST = [
  { name: 'Strony wizytówkowe', desc: 'Kompaktowe, estetyczne witryny idealne na start dla małych firm.' },
  { name: 'Profesjonalne strony firmowe', desc: 'Wielosekcyjne, rozbudowane strony dla przedsiębiorstw i usługodawców.' },
  { name: 'Prezentacja usług i oferty', desc: 'Czytelne cenniki, pakiety i specyfikacje Twoich usług.' },
  { name: 'Galerie zdjęć i realizacji', desc: 'Profesjonalne portfolio prezentujące Twoje dotychczasowe prace.' },
  { name: 'Formularze kontaktowe', desc: 'Bezpieczne, zwalidowane formularze zapytania ofertowego.' },
  { name: 'Przyciski szybkiego kontaktu', desc: 'Bezpośrednie dzwonienie oraz e-mail jednym kliknięciem na smartfonie.' },
  { name: 'Integracja z mapami Google', desc: 'Ułatwienie dojazdu klientom bezpośrednio do Twojego lokalu.' },
  { name: 'Strony w pełni responsywne', desc: 'Perfekcyjne wyświetlanie na telefonach, tabletach i komputerach.' },
  { name: 'Strony wielojęzyczne', desc: 'Możliwość przygotowania wersji w języku angielskim lub innych.' },
  { name: 'Podstawowa optymalizacja SEO', desc: 'Odpowiednie nagłówki, meta tagi i indeksacja w wyszukiwarkach.' },
  { name: 'Pomoc z domeną i hostingiem', desc: 'Doradztwo przy wyborze adresu www oraz konfiguracji serwera.' },
  { name: 'Modernizacja istniejących stron', desc: 'Odświeżenie przestarzałych witryn i dostosowanie do dzisiejszych standardów.' },
];

// =========================================================================
// 7. REALIZACJE – PRZYKŁADOWE WIZUALIZACJE STRON WWW
// =========================================================================
export interface WebsiteMockupData {
  id: string;
  name: string;
  industry: string;
  category: string;
  summary: string;
  demoUrl: string;
  theme: {
    primaryColor: string;
    accentColor: string;
    bgStyle: string;
    navBg: string;
  };
  mockupContent: {
    siteTitle: string;
    tagline: string;
    heroHeadline: string;
    heroSub: string;
    ctaPrimary: string;
    badges: string[];
    sections: { title: string; subtitle: string; icon: string }[];
  };
  features: string[];
}

export const PORTFOLIO_PROJECTS: WebsiteMockupData[] = [
  {
    id: 'salon-fryzjerski',
    name: 'Salon Fryzjerski & Barber',
    industry: 'Salon fryzjerski / Barber',
    category: 'Usługi beauty',
    summary: 'Elegancka strona salonu fryzjerskiego z przejrzystą ofertą cięć, cennikiem zabiegów i szybką rezerwacją telefoniczną.',
    demoUrl: 'twoj-salon-fryzur.pl',
    theme: {
      primaryColor: '#b45309', // warm amber
      accentColor: '#f59e0b',
      bgStyle: 'bg-amber-50/40',
      navBg: 'bg-stone-900 text-stone-100',
    },
    mockupContent: {
      siteTitle: 'Atelier Fryzur & Barber',
      tagline: 'Mistrzowskie strzyżenie męskie i stylizacja damska',
      heroHeadline: 'Perfekcyjne fryzury dopasowane do Twojego stylu',
      heroSub: 'Zadbaj o swój wizerunek w kameralnej atmosferze. Rezerwacja wizyt online lub telefonicznie.',
      ctaPrimary: 'Zarezerwuj wizytę',
      badges: ['Strzyżenie klasyczne', 'Modelowanie brody', 'Koloryzacja premium'],
      sections: [
        { title: 'Strzyżenie & Stylizacja', subtitle: 'Od 70 zł · Pełna pielęgnacja', icon: '✂' },
        { title: 'Barber & Pielęgnacja', subtitle: 'Strzyżenie brody i gorący ręcznik', icon: '💈' },
        { title: 'Cennik & Terminarz', subtitle: 'Zawsze aktualne godziny i stawki', icon: '📅' },
      ],
    },
    features: ['Cennik zabiegów i pakietów', 'Sekcja rezerwacji telefonicznej', 'Lokalizacja na mapie', 'Wersja mobile-first'],
  },
  {
    id: 'warsztat-samochodowy',
    name: 'Warsztat Samochodowy & Serwis',
    industry: 'Warsztat samochodowy',
    category: 'Motoryzacja',
    summary: 'Nowoczesna strona warsztatu z wykazem napraw mechanicznych, wulkanizacją, diagnostyką komputerową i mapą dojazdu.',
    demoUrl: 'autoserwis-pro.pl',
    theme: {
      primaryColor: '#0284c7', // steel blue
      accentColor: '#38bdf8',
      bgStyle: 'bg-slate-50',
      navBg: 'bg-slate-900 text-white',
    },
    mockupContent: {
      siteTitle: 'AutoSerwis Pro',
      tagline: 'Kompleksowa mechanika pojazdowa i wulkanizacja',
      heroHeadline: 'Szybka diagnostyka i fachowe naprawy Twojego auta',
      heroSub: 'Certyfikowani mechanicy, nowoczesny sprzęt diagnostyczny i transparentny cennik części oraz robocizny.',
      ctaPrimary: 'Umów wizytę w warsztacie',
      badges: ['Diagnostyka OBD', 'Wymiana rozrządu', 'Serwis klimatyzacji'],
      sections: [
        { title: 'Mechanika ogólna', subtitle: 'Zawieszenie, hamulce, silniki', icon: '🔧' },
        { title: 'Wymiana opon & Wyważanie', subtitle: 'Szybki serwis sezonowy', icon: '🚗' },
        { title: 'Klimatyzacja & Ozonowanie', subtitle: 'Pełny przegląd układu', icon: '❄' },
      ],
    },
    features: ['Wykaz usług z wyceną', 'Szybki telefon do dyspozytora', 'Integracja Google Maps', 'Formularz zgłoszenia awarii'],
  },
  {
    id: 'firma-budowlana',
    name: 'Firma Budowlano-Remontowa',
    industry: 'Firma budowlana',
    category: 'Budownictwo',
    summary: 'Profesjonalna strona firmy budowlanej z prezentacją ukończonych remontów mieszkań, budowy domów i referencjami.',
    demoUrl: 'solidbud-remonty.pl',
    theme: {
      primaryColor: '#d97706', // construction orange
      accentColor: '#f59e0b',
      bgStyle: 'bg-stone-50',
      navBg: 'bg-zinc-900 text-white',
    },
    mockupContent: {
      siteTitle: 'SolidBud Remonty',
      tagline: 'Wykończenia wnętrz pod klucz i generalne remonty',
      heroHeadline: 'Solidne remonty i budownictwo bez niespodzianek',
      heroSub: 'Terminowość, pisemna gwarancja na wykonane prace i bezpłatny kosztorys na miejscu u klienta.',
      ctaPrimary: 'Poproś o darmowy kosztorys',
      badges: ['Wykończenia pod klucz', 'Gładzie i malowanie', 'Płytki i łazienki'],
      sections: [
        { title: 'Mieszkania pod klucz', subtitle: 'Kompleksowe wykończenia stanów deweloperskich', icon: '🏠' },
        { title: 'Remonty łazienek', subtitle: 'Glazura, hydraulika, armatura', icon: '🚿' },
        { title: 'Elewacje i ocieplenia', subtitle: 'Nowoczesne systemy izolacji', icon: '🧱' },
      ],
    },
    features: ['Galeria przed i po realizacji', 'Kalkulator wstępny', 'Formularz bezpłatnego kosztorysu', 'Pisemna gwarancja'],
  },
  {
    id: 'gabinet-kosmetyczny',
    name: 'Gabinet Kosmetyczny & Spa',
    industry: 'Gabinet kosmetyczny',
    category: 'Usługi beauty',
    summary: 'Minimalistyczna, spokojna strona beauty z listą zabiegów pielęgnacyjnych, bonami podarunkowymi i cennikiem.',
    demoUrl: 'estetica-beauty-spa.pl',
    theme: {
      primaryColor: '#be185d', // rose
      accentColor: '#f43f5e',
      bgStyle: 'bg-rose-50/30',
      navBg: 'bg-stone-800 text-stone-50',
    },
    mockupContent: {
      siteTitle: 'Estetica Beauty',
      tagline: 'Kosmetologia estetyczna i rytuały pielęgnacyjne',
      heroHeadline: 'Podaruj swojej skórze profesjonalną pielęgnację',
      heroSub: 'Zabiegi na twarz i ciało z użyciem certyfikowanych kosmetyków organicznych w kojącej atmosferze.',
      ctaPrimary: 'Sprawdź menu zabiegów',
      badges: ['Oczyszczanie wodorowe', 'Masaż relaksacyjny', 'Zabiegi anti-aging'],
      sections: [
        { title: 'Pielęgnacja twarzy', subtitle: 'Rytuały nawilżające i regenerujące', icon: '✨' },
        { title: 'Masaże & Spa', subtitle: 'Ciepłe kamienie i aromaterapia', icon: '🌿' },
        { title: 'Bony upominkowe', subtitle: 'Idealny prezent dla bliskiej osoby', icon: '🎁' },
      ],
    },
    features: ['Przejrzysty cennik zabiegów', 'Zakup vouchera prezentowego', 'Wskazówki przed wizytą', 'Formularz rezerwacji'],
  },
  {
    id: 'firma-sprzatajaca',
    name: 'Firma Sprzątająca',
    industry: 'Firma sprzątająca',
    category: 'Usługi dla firm i domu',
    summary: 'Jasna, przejrzysta strona usługowa z zakresem sprzątania biur, mieszkań i po remontach wraz z przejrzystymi stawkami.',
    demoUrl: 'czystyblysk-uslugi.pl',
    theme: {
      primaryColor: '#059669', // fresh emerald
      accentColor: '#10b981',
      bgStyle: 'bg-emerald-50/20',
      navBg: 'bg-slate-900 text-white',
    },
    mockupContent: {
      siteTitle: 'CzystyBłysk Usługi',
      tagline: 'Profesjonalne sprzątanie biur, domów i poremontowe',
      heroHeadline: 'Krystaliczna czystość w Twoim domu i biurze',
      heroSub: 'Doświadczona kadra, ekologiczne środki czystości i profesjonalny sprzęt myjący. Wycena w 5 minut.',
      ctaPrimary: 'Zamów szybką wycenę',
      badges: ['Sprzątanie biur', 'Mycie okien', 'Sprzątanie po remoncie'],
      sections: [
        { title: 'Domy & Mieszkania', subtitle: 'Jednorazowo lub w abonamencie', icon: '🧹' },
        { title: 'Biura & Lokale', subtitle: 'Utrzymanie czystości firm', icon: '🏢' },
        { title: 'Pranie tapicerki', subtitle: 'Ekstrakcyjne czyszczenie mebli', icon: '🛋' },
      ],
    },
    features: ['Kalkulator metrów kwadratowych', 'Obszar działania na mapie', 'Wycena on-line', 'Zaufany zespół'],
  },
  {
    id: 'fotograf',
    name: 'Fotograf okolicznościowy',
    industry: 'Fotograf',
    category: 'Fotografia & Kreatywne',
    summary: 'Estetyczna strona portfolio z dużymi galeriami zdjęć ślubnych, sesji biznesowych oraz formularzem rezerwacji terminu.',
    demoUrl: 'studio-swiatla-foto.pl',
    theme: {
      primaryColor: '#4f46e5', // indigo
      accentColor: '#6366f1',
      bgStyle: 'bg-slate-50',
      navBg: 'bg-neutral-950 text-white',
    },
    mockupContent: {
      siteTitle: 'Studio Światła',
      tagline: 'Fotografia ślubna, portretowa i reportażowa',
      heroHeadline: 'Naturalne kadry, które zatrzymują najpiękniejsze chwile',
      heroSub: 'Emocje, autentyczność i ponadczasowa estetyka. Sprawdź wolne terminy na nadchodzący sezon.',
      ctaPrimary: 'Zobacz portfolio i pakiety',
      badges: ['Reportaż ślubny', 'Sesje plenerowe', 'Portret biznesowy'],
      sections: [
        { title: 'Śluby & Wesela', subtitle: 'Kompletne pakiety od przygotowań po oczepiny', icon: '💍' },
        { title: 'Sesje rodzinne', subtitle: 'Ciepłe, naturalne sesje w plenerze', icon: '📷' },
        { title: 'Biznes & Wizerunek', subtitle: 'Portrety do LinkedIn i stron www', icon: '👔' },
      ],
    },
    features: ['Galerie tematyczne', 'Cennik pakietów ślubnych', 'Kalendarz wolnych terminów', 'Formularz rezerwacji'],
  },
];

// =========================================================================
// 8. PYTANIA I ODPOWIEDZI (FAQ)
// =========================================================================
export const FAQ_ITEMS = [
  {
    question: 'Ile kosztuje stworzenie strony?',
    answer: 'Koszt zakupu na własność wynosi od 500 do 1000 zł w zależności od stopnia skomplikowania i liczby podstron. Dostępna jest również opcja abonamentowa za 50 zł miesięcznie, zgodnie z ustalonymi warunkami.',
  },
  {
    question: 'Czy naprawdę mogę testować stronę przez 14 dni za darmo?',
    answer: 'Tak. Najpierw otrzymujesz przygotowaną stronę do testowania. Dopiero później podejmujesz decyzję o płatnej współpracy.',
  },
  {
    question: 'Co jeśli strona mi się nie spodoba?',
    answer: 'Możesz zrezygnować bez ponoszenia opłaty za jej wykonanie.',
  },
  {
    question: 'Czy muszę mieć domenę i hosting?',
    answer: 'Nie musisz mieć ich na początku. Mogę pomóc Ci w wyborze i konfiguracji. Ewentualne koszty ustalamy wcześniej.',
  },
  {
    question: 'Czy mogę wprowadzać zmiany na stronie?',
    answer: 'Tak, zakres i sposób wprowadzania zmian zależą od ustalonego modelu współpracy.',
  },
  {
    question: 'Ile trwa przygotowanie strony?',
    answer: 'Termin zależy od złożoności projektu i zostanie ustalony indywidualnie.',
  },
  {
    question: 'Czy mogę zrezygnować z abonamentu?',
    answer: 'Tak, na zasadach określonych w warunkach współpracy, które poznasz przed podjęciem decyzji.',
  },
];
