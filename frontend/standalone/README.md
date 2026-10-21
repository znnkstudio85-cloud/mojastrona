# ZNNKstudio – Instrukcja Uruchomienia i Konfiguracji

Dziękujemy za wybranie projektu strony one-page **ZNNKstudio**!
Strona została zaprojektowana w dwóch wariantach:
1. **Aplikacja SPA w React + Tailwind CSS** (w katalogu głównym `/src`, zoptymalizowana pod Vite i nowoczesne środowiska).
2. **Kompletna wersja statyczna 3 plików** (w katalogu `/standalone`), składająca się wyłącznie z:
   - `standalone/index.html`
   - `standalone/style.css`
   - `standalone/script.js`

Ta wersja nie wymaga żadnego środowiska Node.js, kompilatorów ani procesów budowania – działa na każdym tradycyjnym hostingu WWW (Cyberfolks, LH.pl, OVH, Home.pl, darmowy GitHub Pages, Cloudflare Pages, Netlify itd.).

---

## 🚀 Jak uruchomić stronę na tradycyjnym hostingu?

1. Przejdź do folderu `/standalone`.
2. Skopiuj 3 pliki: `index.html`, `style.css` oraz `script.js`.
3. Zaloguj się na swój serwer FTP lub do panelu hostingowego (np. cPanel / DirectAdmin).
4. Wgraj te 3 pliki do folderu głównego domeny (zwykle `public_html`, `www` lub `htdocs`).
5. Twoja strona jest natychmiast widoczna w Internecie!

---

## 📝 Lista danych do samodzielnego uzupełnienia / edycji

W plikach umieszczono wyraźne komentarze `<!-- EDYCJA DANYCH -->` oraz `// EDYCJA DANYCH`:

### 1. Konfiguracja wysyłki formularza kontaktowego:
Aby wiadomości z formularza trafiały bezpośrednio na Twój adres e-mail (`znnkstudio@gmail.com`):
- Otwórz plik `standalone/script.js` (lub `src/data/config.ts` w wersji React).
- Zarejestruj darmowy klucz na **[https://web3forms.com](https://web3forms.com)** i wklej go w:
  ```javascript
  web3FormsAccessKey: 'TWÓJ_KLUCZ_Z_WEB3FORMS'
  ```
  LUB utwórz darmowy endpoint na **[https://formspree.io](https://formspree.io)** i wklej go w:
  ```javascript
  formspreeEndpoint: 'https://formspree.io/f/twój_id'
  ```

### 2. Dane kontaktowe:
- **Numer telefonu:** domyślnie ustawiono `537 347 356` (klikalny `tel:537347356`). Jeśli chcesz go zmienić, wyszukaj ten numer w pliku `index.html` i podmień.
- **Adres e-mail:** domyślnie ustawiono `znnkstudio@gmail.com` (klikalny `mailto:znnkstudio@gmail.com`).
- **Godziny kontaktu:** Poniedziałek – Sobota: 8:00 – 20:00.

### 3. Cennik:
- Karta 1: Zakup na własność – Wycena indywidualna.
- Karta 2: Strona w abonamencie – 50 zł / miesiąc.
- Warunki 14-dniowego darmowego testu są jasno wyróżnione.

### 4. Galeria realizacji (podmiana wzorów na prawdziwe zdjęcia):
- W pliku `standalone/index.html` w sekcji `<section id="realizacje">` znajdziesz 6 kart z demonstracyjnymi wzorami.
- Gdy wykonasz pierwsze zlecenia dla klientów, możesz podmienić klasy tła `.p-hair`, `.p-auto`, `.p-build` itd. w pliku `style.css` na ścieżki do rzeczywistych zdjęć:
  ```css
  .p-hair { background-image: url('twoje-zdjecie-salonu.jpg'); }
  ```
- Wszystkie projekty posiadają etykietę `DEMO`, którą możesz usunąć po wdrożeniu rzeczywistych realizacji.
