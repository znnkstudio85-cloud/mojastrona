/**
 * =========================================================================
 * BAZA WIZUALIZACJI DEMONSTRACYJNYCH STRON WWW DLA HERO I GALERII
 * =========================================================================
 * Każda strona posiada całkowicie odmienny styl graficzny, fotografię
 * oraz kolorystykę, aby zaprezentować różnorodne możliwości projektowe.
 */

import villaImg from '@/src/assets/images/zdjg.jpg';
import barberImg from '@/src/assets/images/zdjf.jpg';
import autoServiceImg from '@/src/assets/images/zdjff.jpg';
import spaImg from '@/src/assets/images/zdjt.jpg';
import cleaningImg from '@/src/assets/images/zdj.jpg';
import photoStudioImg from '@/src/assets/images/zdjtwo.jpg';

export interface WebsiteDemoItem {
  id: string;
  name: string;
  industry: string;
  category: string;
  domain: string;
  bgImage: string;
  styleLabel: string;
  theme: {
    accent: string;
    accentBg: string;
    overlayGradient: string;
    navStyle: string;
    buttonColor: string;
    tagColor: string;
  };
  header: {
    logoText: string;
    logoSub?: string;
    phoneBtnText: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    pills: string[];
  };
  features: string[];
  summary: string;
}

// 4 projekty do automatycznej rotacji w sekcji HERO
export const HERO_ROTATION_PROJECTS: WebsiteDemoItem[] = [
  {
    id: 'hero-villa',
    name: 'Firma Budowlana – Nowoczesne Domy',
    industry: 'Budownictwo i Architektura',
    category: 'Budownictwo',
    domain: 'vanguard-domy.pl',
    bgImage: villaImg,
    styleLabel: 'Jasny styl architektoniczny',
    theme: {
      accent: '#f59e0b',
      accentBg: 'rgba(245, 158, 11, 0.18)',
      overlayGradient: 'bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-slate-950/60',
      navStyle: 'bg-stone-950/80 backdrop-blur-md text-white border-b border-white/10',
      buttonColor: 'bg-amber-500 hover:bg-amber-600 text-stone-950',
      tagColor: 'text-amber-400 bg-amber-500/20 border-amber-400/30',
    },
    header: {
      logoText: 'VANGUARD',
      logoSub: 'HOMES & ARCHITECTURE',
      phoneBtnText: 'Bezpłatny projekt',
    },
    hero: {
      kicker: 'Generalny wykonawca domów energooszczędnych',
      headline: 'Budujemy nowoczesne domy przyszłości',
      subheadline: 'Indywidualne projekty architektoniczne, zaawansowane technologie pasywne i 10 lat pisemnej gwarancji na konstrukcję.',
      primaryCta: 'Zobacz nasze realizacje',
      secondaryCta: 'Darmowa wycena budowy',
      pills: ['Konstrukcje pod klucz', 'Pompy ciepła & Fotowoltaika', 'Pisemna gwarancja 10 lat'],
    },
    features: ['Projektowanie rezydencji i willi', 'Standard energooszczędny NF40/NF15', 'Nadzór budowlany od A do Z'],
    summary: 'Ekskluzywna strona dla generalnego wykonawcy i biura architektonicznego w słonecznym, nowoczesnym stylu.',
  },
  {
    id: 'hero-auto',
    name: 'Warsztat Samochodowy & Serwis',
    industry: 'Mechanika Pojazdowa',
    category: 'Motoryzacja',
    domain: 'autoserwis-pro.pl',
    bgImage: autoServiceImg,
    styleLabel: 'Styl technologiczny & neon',
    theme: {
      accent: '#06b6d4',
      accentBg: 'rgba(6, 182, 212, 0.18)',
      overlayGradient: 'bg-gradient-to-t from-slate-950/95 via-sky-950/40 to-slate-950/80',
      navStyle: 'bg-slate-950/85 backdrop-blur-md text-white border-b border-cyan-500/20',
      buttonColor: 'bg-cyan-500 hover:bg-cyan-400 text-slate-950',
      tagColor: 'text-cyan-300 bg-cyan-500/20 border-cyan-400/30',
    },
    header: {
      logoText: 'AUTO SERVICE PRO',
      logoSub: 'SERWIS PREMIUM',
      phoneBtnText: 'Zadzwoń do serwisu',
    },
    hero: {
      kicker: 'Certyfikowany serwis wszystkich marek',
      headline: 'Precyzyjna diagnostyka i fachowe naprawy aut',
      subheadline: 'Certyfikowani mechanicy, komputerowa diagnostyka najnowszej generacji i bezpłatne auto zastępcze.',
      primaryCta: 'Zgłoś auto do naprawy',
      secondaryCta: 'Cennik przeglądów',
      pills: ['Diagnostyka komputerowa', 'Serwis skrzyń i silników', 'Klimatyzacja i geometria'],
    },
    features: ['Przejrzysty cennik usług', 'Szybki kontakt telefoniczny', 'Mapa dojazdu z trasą'],
    summary: 'Nowoczesna i dynamiczna strona warsztatu z naciskiem na szybkie połączenie telefoniczne.',
  },
  {
    id: 'hero-barber',
    name: 'Salon fryzjerski & Barber',
    industry: 'Salon fryzjerski / Barber',
    category: 'Usługi beauty',
    domain: 'atelier-fryzur.pl',
    bgImage: barberImg,
    styleLabel: 'Ciepły styl vintage / rzemieślniczy',
    theme: {
      accent: '#f59e0b',
      accentBg: 'rgba(245, 158, 11, 0.18)',
      overlayGradient: 'bg-gradient-to-t from-stone-950/92 via-amber-950/30 to-stone-950/70',
      navStyle: 'bg-stone-900/85 backdrop-blur-md text-white border-b border-amber-500/20',
      buttonColor: 'bg-amber-500 hover:bg-amber-600 text-stone-950',
      tagColor: 'text-amber-300 bg-amber-500/20 border-amber-300/30',
    },
    header: {
      logoText: 'ATELIER FRYZUR',
      logoSub: 'STYLIZACJA & BARBER',
      phoneBtnText: 'Zarezerwuj wizytę',
    },
    hero: {
      kicker: 'Mistrzowskie strzyżenie i koloryzacja',
      headline: 'Perfekcyjne fryzury dopasowane do Twojego stylu',
      subheadline: 'Kameralny salon w centrum miasta. Strzyżenie męskie, stylizacja damska i bezpieczna pielęgnacja.',
      primaryCta: 'Zarezerwuj termin',
      secondaryCta: 'Sprawdź cennik usług',
      pills: ['Strzyżenie klasyczne', 'Modelowanie brody', 'Koloryzacja wielotonowa'],
    },
    features: ['Cennik cięć i koloryzacji', 'Galeria metamorfoz przed i po', 'Bezpośredni telefon do rezerwacji'],
    summary: 'Klimatyczna strona z ofertą usług w ciepłym stylu vintage z cegłą, drewnem i skórą.',
  },
  {
    id: 'hero-spa',
    name: 'Gabinet Kosmetyczny & Spa',
    industry: 'Kosmetologia & Wellness',
    category: 'Usługi beauty',
    domain: 'estetica-beauty.pl',
    bgImage: spaImg,
    styleLabel: 'Pastelowy minimalizm organiczny',
    theme: {
      accent: '#f472b6',
      accentBg: 'rgba(244, 114, 182, 0.18)',
      overlayGradient: 'bg-gradient-to-t from-stone-900/80 via-rose-950/20 to-stone-900/50',
      navStyle: 'bg-stone-900/80 backdrop-blur-md text-white border-b border-pink-400/20',
      buttonColor: 'bg-pink-500 hover:bg-pink-600 text-white',
      tagColor: 'text-pink-300 bg-pink-500/20 border-pink-300/30',
    },
    header: {
      logoText: 'ESTETICA BEAUTY',
      logoSub: 'KOSMETOLOGIA I WELLNESS',
      phoneBtnText: 'Umów zabieg',
    },
    hero: {
      kicker: 'Zaawansowana kosmetologia i relaks',
      headline: 'Harmonia, piękno i świadoma pielęgnacja skóry',
      subheadline: 'Zabiegi na twarz i ciało z użyciem szwajcarskich certyfikowanych preparatów w kojącej atmosferze.',
      primaryCta: 'Menu zabiegów i cennik',
      secondaryCta: 'Kup bon upominkowy',
      pills: ['Oczyszczanie wodorowe', 'Masaże relaksacyjne', 'Rytuały anti-aging'],
    },
    features: ['Szczegółowy cennik zabiegów', 'Zakup vouchera prezentowego', 'Formularz rezerwacji online'],
    summary: 'Delikatna, pastelowa witryna beauty o uspokajającej estetyce trawertynu i eukaliptusa.',
  },
];

// 6 projektów dla GALERII REALIZACJI – każdy w innym stylu wizualnym
export const GALLERY_PROJECTS: WebsiteDemoItem[] = [
  {
    id: 'gal-budownictwo',
    name: 'Firma budowlana – Nowoczesne Domy',
    industry: 'Budownictwo i Architektura',
    category: 'Budownictwo',
    domain: 'vanguard-domy.pl',
    bgImage: villaImg,
    styleLabel: 'Jasny styl architektoniczny',
    theme: {
      accent: '#f59e0b',
      accentBg: 'rgba(245, 158, 11, 0.18)',
      overlayGradient: 'bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-slate-950/60',
      navStyle: 'bg-stone-950/85 backdrop-blur-md text-white border-b border-white/10',
      buttonColor: 'bg-amber-500 hover:bg-amber-600 text-stone-950',
      tagColor: 'text-amber-400 bg-amber-500/20 border-amber-400/30',
    },
    header: {
      logoText: 'VANGUARD DOMY',
      logoSub: 'BUDOWNICTWO PREMIUM',
      phoneBtnText: 'Darmowy kosztorys',
    },
    hero: {
      kicker: 'Nowoczesne domy energooszczędne',
      headline: 'Budujemy domy w standardzie premium',
      subheadline: 'Generalny wykonawca od projektu po wykończenie pod klucz z 10-letnią gwarancją na konstrukcję.',
      primaryCta: 'Zobacz projekty domów',
      secondaryCta: 'Zamów bezpłatną wycenę',
      pills: ['Stan deweloperski i pod klucz', 'Certyfikat energooszczędności', 'Gwarancja stałej ceny'],
    },
    features: ['Galeria ukończonych rezydencji', 'Kalkulator wstępny budowy', 'Pisemna gwarancja terminowości', 'Formularz darmowego kosztorysu'],
    summary: 'Elegancka, nowoczesna strona z dużym zdjęciem willi, naturalnym światłem i darmowym kosztorysem.',
  },
  {
    id: 'gal-fryzjer',
    name: 'Salon fryzjerski & Barber',
    industry: 'Salon fryzjerski / Barber',
    category: 'Usługi beauty',
    domain: 'atelier-fryzur.pl',
    bgImage: barberImg,
    styleLabel: 'Ciepły styl vintage / rzemieślniczy',
    theme: {
      accent: '#f59e0b',
      accentBg: 'rgba(245, 158, 11, 0.18)',
      overlayGradient: 'bg-gradient-to-t from-stone-950/92 via-amber-950/30 to-stone-950/70',
      navStyle: 'bg-stone-900/85 backdrop-blur-md text-white border-b border-amber-500/20',
      buttonColor: 'bg-amber-500 hover:bg-amber-600 text-stone-950',
      tagColor: 'text-amber-300 bg-amber-500/20 border-amber-300/30',
    },
    header: {
      logoText: 'ATELIER FRYZUR',
      logoSub: 'STYLIZACJA & BARBER',
      phoneBtnText: 'Zarezerwuj wizytę',
    },
    hero: {
      kicker: 'Mistrzowskie strzyżenie i koloryzacja',
      headline: 'Perfekcyjne fryzury dopasowane do Twojego stylu',
      subheadline: 'Kameralny salon w centrum miasta. Strzyżenie męskie, stylizacja damska i bezpieczna pielęgnacja.',
      primaryCta: 'Zarezerwuj termin',
      secondaryCta: 'Sprawdź cennik usług',
      pills: ['Strzyżenie klasyczne', 'Modelowanie brody', 'Koloryzacja wielotonowa'],
    },
    features: ['Cennik cięć i koloryzacji', 'Galeria metamorfoz przed i po', 'Bezpośredni telefon do rezerwacji', 'Integracja z Booksy i Google Maps'],
    summary: 'Klimatyczna strona z ofertą usług w ciepłym klimacie vintage z cegłą, drewnem i skórzanymi fotelami.',
  },
  {
    id: 'gal-warsztat',
    name: 'Warsztat samochodowy & Serwis',
    industry: 'Warsztat samochodowy',
    category: 'Motoryzacja',
    domain: 'autoserwis-pro.pl',
    bgImage: autoServiceImg,
    styleLabel: 'Styl technologiczny & neon',
    theme: {
      accent: '#06b6d4',
      accentBg: 'rgba(6, 182, 212, 0.18)',
      overlayGradient: 'bg-gradient-to-t from-slate-950/95 via-sky-950/40 to-slate-950/80',
      navStyle: 'bg-slate-950/85 backdrop-blur-md text-white border-b border-cyan-500/20',
      buttonColor: 'bg-cyan-500 hover:bg-cyan-400 text-slate-950',
      tagColor: 'text-cyan-300 bg-cyan-500/20 border-cyan-400/30',
    },
    header: {
      logoText: 'AUTOSERWIS PRO',
      logoSub: 'MECHANIKA & WULKANIZACJA',
      phoneBtnText: 'Zadzwoń do serwisu',
    },
    hero: {
      kicker: 'Profesjonalny serwis samochodowy',
      headline: 'Szybka diagnostyka i fachowe naprawy Twojego auta',
      subheadline: 'Nowoczesny sprzęt diagnostyczny, uczciwe wyceny części i terminowa realizacja zleceń.',
      primaryCta: 'Umów wizytę w serwisie',
      secondaryCta: 'Wycena naprawy',
      pills: ['Diagnostyka silnika', 'Wymiana opon i wyważanie', 'Serwis klimatyzacji'],
    },
    features: ['Wykaz napraw mechanicznych', 'Cennik wymiany opon', 'Interaktywna mapa dojazdu', 'Zgłoszenie awarii on-line'],
    summary: 'Profesjonalna strona motoryzacyjna w nowoczesnym stylu high-tech z oświetleniem neon cyan i sportowym autem.',
  },
  {
    id: 'gal-kosmetyczka',
    name: 'Gabinet kosmetyczny & Spa',
    industry: 'Gabinet kosmetyczny',
    category: 'Usługi beauty',
    domain: 'estetica-beauty.pl',
    bgImage: spaImg,
    styleLabel: 'Pastelowy minimalizm organiczny',
    theme: {
      accent: '#f472b6',
      accentBg: 'rgba(244, 114, 182, 0.18)',
      overlayGradient: 'bg-gradient-to-t from-stone-900/80 via-rose-950/20 to-stone-900/50',
      navStyle: 'bg-stone-900/80 backdrop-blur-md text-white border-b border-pink-400/20',
      buttonColor: 'bg-pink-500 hover:bg-pink-600 text-white',
      tagColor: 'text-pink-300 bg-pink-500/20 border-pink-300/30',
    },
    header: {
      logoText: 'ESTETICA BEAUTY',
      logoSub: 'KOSMETOLOGIA I WELLNESS',
      phoneBtnText: 'Umów zabieg',
    },
    hero: {
      kicker: 'Świadoma pielęgnacja twarzy i ciała',
      headline: 'Podaruj swojej skórze profesjonalną pielęgnację',
      subheadline: 'Nowoczesne rytuały nawilżające, oczyszczanie wodorowe i masaże relaksacyjne w kojących wnętrzach.',
      primaryCta: 'Sprawdź listę zabiegów',
      secondaryCta: 'Kup voucher upominkowy',
      pills: ['Oczyszczanie wodorowe', 'Masaż ciepłymi kamieniami', 'Zabiegi anti-aging'],
    },
    features: ['Przejrzyste menu zabiegowe z cenami', 'Kupno bonu prezentowego', 'Wskazówki przed pierwszą wizytą', 'Formularz rezerwacji'],
    summary: 'Minimalistyczna witryna beauty o uspokajającej estetyce trawertynu, eukaliptusa i pastelowych odcieni.',
  },
  {
    id: 'gal-sprzatanie',
    name: 'Firma sprzątająca',
    industry: 'Firma sprzątająca',
    category: 'Usługi dla domu i firm',
    domain: 'czystyblysk-uslugi.pl',
    bgImage: cleaningImg,
    styleLabel: 'Jasny styl skandynawski & eko',
    theme: {
      accent: '#10b981',
      accentBg: 'rgba(16, 185, 129, 0.18)',
      overlayGradient: 'bg-gradient-to-t from-slate-900/78 via-emerald-950/15 to-slate-900/40',
      navStyle: 'bg-slate-900/80 backdrop-blur-md text-white border-b border-emerald-400/20',
      buttonColor: 'bg-emerald-500 hover:bg-emerald-600 text-white',
      tagColor: 'text-emerald-300 bg-emerald-500/20 border-emerald-300/30',
    },
    header: {
      logoText: 'CZYSTY BŁYSK',
      logoSub: 'USŁUGI SPRZĄTAJĄCE',
      phoneBtnText: 'Szybka wycena',
    },
    hero: {
      kicker: 'Kompleksowe utrzymanie czystości',
      headline: 'Krystaliczna czystość w Twoim domu i biurze',
      subheadline: 'Zaufany zespół, profesjonalny sprzęt myjący i ekologiczne środki czystości. Wycena w 5 minut.',
      primaryCta: 'Zamów bezpłatną wycenę',
      secondaryCta: 'Zobacz nasze stawki',
      pills: ['Sprzątanie biur i mieszkań', 'Mycie okien i witryn', 'Pranie ekstrakcyjne mebli'],
    },
    features: ['Kalkulator metrów kwadratowych', 'Wycena on-line w kilka minut', 'Obszar działania na mapie', 'Ubezpieczenie OC wykonawcy'],
    summary: 'Niezwykle jasna, czysta strona usługowa w stylu nowoczesnego, skandynawskiego apartamentu.',
  },
  {
    id: 'gal-fotograf',
    name: 'Fotograf okolicznościowy',
    industry: 'Fotografia & Portfolio',
    category: 'Fotografia',
    domain: 'studio-swiatla-foto.pl',
    bgImage: photoStudioImg,
    styleLabel: 'Artystyczny styl monochromatyczny',
    theme: {
      accent: '#e2e8f0',
      accentBg: 'rgba(255, 255, 255, 0.15)',
      overlayGradient: 'bg-gradient-to-t from-black/92 via-black/35 to-black/75',
      navStyle: 'bg-black/85 backdrop-blur-md text-white border-b border-white/10',
      buttonColor: 'bg-white hover:bg-slate-100 text-black font-bold',
      tagColor: 'text-slate-200 bg-white/15 border-white/25',
    },
    header: {
      logoText: 'STUDIO ŚWIATŁA',
      logoSub: 'FOTOGRAFIA ARTYSTYCZNA',
      phoneBtnText: 'Zapytaj o termin',
    },
    hero: {
      kicker: 'Naturalne kadry i autentyczne emocje',
      headline: 'Zatrzymujemy najpiękniejsze chwile na zawsze',
      subheadline: 'Ponadczasowe reportaże ślubne, nastrojowe plenery oraz profesjonalne sesje wizerunkowe dla firm.',
      primaryCta: 'Zobacz portfolio ślubne',
      secondaryCta: 'Sprawdź wolne terminy',
      pills: ['Reportaż ślubny', 'Sesje plenerowe', 'Portrety biznesowe'],
    },
    features: ['Galerie zdjęć w wysokiej rozdzielczości', 'Pakiety ślubne z zakresem godzin', 'Kalendarz dostępności terminów', 'Formularz rezerwacji'],
    summary: 'Eleganckie, artystyczne portfolio w estetyce czarno-białej fotografii modowej i studyjnej.',
  },
];
