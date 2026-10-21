/**
 * =========================================================================
 * ZNNKstudio - SKRYPT JAVASCRIPT (script.js)
 * Czysty Vanilla JS bez bibliotek, obsługa lightboxa, formularza i menu.
 * =========================================================================
 */

const CONFIG = {
  web3FormsAccessKey: '', 
  formspreeEndpoint: '',  
  fallbackEmail: 'znnkstudio@gmail.com'
};

const PROJECTS_DATA = [
  {
    title: 'Firma budowlana – Nowoczesne Domy',
    domain: 'vanguard-domy.pl',
    headline: 'Budujemy nowoczesne domy w standardzie premium',
    desc: 'Elegancka, nowoczesna strona z dużym zdjęciem domu, dopracowanym menu i formularzem darmowego kosztorysu.',
    features: '• Galeria ukończonych rezydencji\n• Standard energooszczędny NF40\n• Formularz darmowego kosztorysu\n• Pisemna gwarancja 10 lat'
  },
  {
    title: 'Salon fryzjerski & Barber',
    domain: 'atelier-fryzur.pl',
    headline: 'Perfekcyjne fryzury dopasowane do Twojego stylu',
    desc: 'Estetyczna strona z ofertą usług cięć męskich i damskich, cennikiem zabiegów i szybką rezerwacją telefoniczną.',
    features: '• Cennik zabiegów i pakietów\n• Rezerwacja telefoniczna\n• Mapa Google\n• Wersja na smartfony'
  },
  {
    title: 'Warsztat samochodowy & Serwis',
    domain: 'autoserwis-pro.pl',
    headline: 'Szybka diagnostyka i fachowe naprawy Twojego auta',
    desc: 'Profesjonalna strona motoryzacyjna z wykazem usług mechaniki ogólnej, serwisem klimatyzacji, wulkanizacją i formularzem wyceny.',
    features: '• Wykaz usług z orientacyjną wyceną\n• Szybki telefon do dyspozytora\n• Integracja Google Maps\n• Formularz zgłoszenia awarii'
  },
  {
    title: 'Gabinet kosmetyczny & Spa',
    domain: 'estetica-beauty.pl',
    headline: 'Podaruj swojej skórze profesjonalną pielęgnację',
    desc: 'Minimalistyczna witryna beauty z listą zabiegów pielęgnacyjnych, bonami podarunkowymi oraz wskazówkami przed wizytą.',
    features: '• Menu zabiegowe z cennikiem\n• Bon upominkowy na prezent\n• Przyciski rezerwacji\n• Estetyczna oprawa'
  },
  {
    title: 'Firma sprzątająca',
    domain: 'czystyblysk-uslugi.pl',
    headline: 'Krystaliczna czystość w Twoim domu i biurze',
    desc: 'Jasna, przejrzysta strona usługowa z zakresem sprzątania mieszkań, biur oraz obiektów po remoncie.',
    features: '• Cennik sprzątania biur i mieszkań\n• Pranie tapicerki i mycie okien\n• Formularz szybkiej wyceny\n• Ekologiczne środki'
  },
  {
    title: 'Fotograf okolicznościowy',
    domain: 'studio-swiatla-foto.pl',
    headline: 'Zatrzymujemy najpiękniejsze chwile na zawsze',
    desc: 'Nowoczesne portfolio fotograficzne z dużymi galeriami zdjęć ślubnych, sesji biznesowych oraz formularzem rezerwacji terminu.',
    features: '• Galerie zdjęć w wysokiej rozdzielczości\n• Pakiety ślubne z zakresem godzin\n• Kalendarz dostępności terminów\n• Formularz rezerwacji'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // 1. MOBILNE MENU
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 2. PRZYCISKI W CENNIKU
  const planButtons = document.querySelectorAll('.select-plan');
  planButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // 3. LIGHTBOX DLA GALERII REALIZACJI Z NAWIGACJĄ NASTĘPNY / POPRZEDNI
  const lightboxModal = document.getElementById('lightboxModal');
  const lbTitle = document.getElementById('lbTitle');
  const lbDesc = document.getElementById('lbDesc');
  const lbContent = document.getElementById('lbContent');
  const lbClose = document.getElementById('lbClose');
  const lbContactBtn = document.getElementById('lbContactBtn');
  let currentLbIndex = 0;

  const renderLbProject = (idx) => {
    currentLbIndex = (idx + PROJECTS_DATA.length) % PROJECTS_DATA.length;
    const data = PROJECTS_DATA[currentLbIndex];
    if (!data) return;

    lbTitle.textContent = `${data.title} (${currentLbIndex + 1} / ${PROJECTS_DATA.length})`;
    lbDesc.textContent = data.desc;
    lbContent.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <span style="font-size:12px; color:#38bdf8; font-weight:bold;">Wzór projektu</span>
        <div style="display:flex; gap:8px;">
          <button id="lbPrevBtn" style="background:#1e293b; color:#fff; border:1px solid #334155; padding:4px 10px; border-radius:6px; cursor:pointer;">&larr; Poprzedni</button>
          <button id="lbNextBtn" style="background:#1e293b; color:#fff; border:1px solid #334155; padding:4px 10px; border-radius:6px; cursor:pointer;">Następny &rarr;</button>
        </div>
      </div>
      <h3 style="font-size:20px; font-weight:800; color:#ffffff; margin-bottom:10px;">${data.headline}</h3>
      <pre style="font-family:inherit; font-size:13px; color:#cbd5e1; white-space:pre-wrap; line-height:1.6;">${data.features}</pre>
    `;

    document.getElementById('lbPrevBtn')?.addEventListener('click', () => renderLbProject(currentLbIndex - 1));
    document.getElementById('lbNextBtn')?.addEventListener('click', () => renderLbProject(currentLbIndex + 1));

    if (lbContactBtn) {
      lbContactBtn.onclick = () => {
        lightboxModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        const typeInput = document.getElementById('websiteType');
        if (typeInput) typeInput.value = `Wzór: ${data.title}`;
      };
    }
  };

  document.querySelectorAll('.open-lightbox-card').forEach((card) => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-idx') || '0', 10);
      renderLbProject(idx);
      lightboxModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  if (lbClose && lightboxModal) {
    const closeLb = () => {
      lightboxModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    };
    lbClose.addEventListener('click', closeLb);
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLb();
    });

    window.addEventListener('keydown', (e) => {
      if (lightboxModal.style.display === 'flex') {
        if (e.key === 'Escape') closeLb();
        if (e.key === 'ArrowLeft') renderLbProject(currentLbIndex - 1);
        if (e.key === 'ArrowRight') renderLbProject(currentLbIndex + 1);
      }
    });
  }

  // 4. OBSŁUGA FORMULARZA
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccessMessage');
  const submitBtn = document.getElementById('submitBtn');

  const isValidPolishPhone = (phone) => {
    const cleaned = phone.replace(/[\s\-()]/g, '');
    const regex = /^(?:\+48)?[1-9]\d{8}$/;
    return regex.test(cleaned);
  };

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email.trim());
  };

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      document.querySelectorAll('.error-msg').forEach((el) => (el.textContent = ''));

      const honeypot = form.querySelector('input[name="_gotcha"]');
      if (honeypot && honeypot.value !== '') {
        form.style.display = 'none';
        successMsg.style.display = 'block';
        return;
      }

      const fullName = document.getElementById('fullName');
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      const companyActivity = document.getElementById('companyActivity');
      const consent = document.getElementById('consent');

      let hasErrors = false;

      if (!fullName.value.trim()) {
        document.getElementById('err-fullName').textContent = 'Proszę podać imię i nazwisko lub nazwę firmy.';
        hasErrors = true;
      }

      if (!email.value.trim()) {
        document.getElementById('err-email').textContent = 'Adres e-mail jest wymagany.';
        hasErrors = true;
      } else if (!isValidEmail(email.value)) {
        document.getElementById('err-email').textContent = 'Wprowadź prawidłowy adres e-mail.';
        hasErrors = true;
      }

      if (!phone.value.trim()) {
        document.getElementById('err-phone').textContent = 'Numer telefonu jest wymagany do kontaktu.';
        hasErrors = true;
      } else if (!isValidPolishPhone(phone.value)) {
        document.getElementById('err-phone').textContent = 'Wprowadź poprawny 9-cyfrowy numer telefonu (np. 537 347 356 lub +48...).';
        hasErrors = true;
      }

      if (!companyActivity.value.trim()) {
        document.getElementById('err-companyActivity').textContent = 'Napisz krótko, czym zajmuje się Twoja firma.';
        hasErrors = true;
      }

      if (!consent.checked) {
        document.getElementById('err-consent').textContent = 'Zgoda jest wymagana w celu odpowiedzi na zapytanie.';
        hasErrors = true;
      }

      if (hasErrors) return;

      const formData = new FormData(form);
      const dataObj = Object.fromEntries(formData.entries());

      submitBtn.disabled = true;
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Przesyłanie zapytania...';

      try {
        const res = await fetch('/.netlify/functions/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(dataObj),
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || json.success === false) {
          throw new Error(json.error || 'Błąd wysyłki');
        }

        form.style.display = 'none';
        successMsg.style.display = 'block';
      } catch (err) {
        console.error('Błąd podczas wysyłania:', err);
        alert(
          `Wystąpił problem z połączeniem. Możesz zadzwonić bezpośrednio pod numer 537 347 356 lub napisać na ${CONFIG.fallbackEmail}`
        );
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }
});
