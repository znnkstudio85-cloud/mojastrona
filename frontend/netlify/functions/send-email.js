/**
 * ==============================================================================
 * NETLIFY SERVERLESS FUNCTION: send-email.js
 * ==============================================================================
 * Ścieżka wywołania z frontendu: POST /.netlify/functions/send-email
 * 
 * INSTRUKCJA KONFIGURACJI W NETLIFY:
 * Wartości kluczy podasz później bezpośrednio w panelu administracyjnym Netlify:
 * 1. Zaloguj się na netlify.com i wejdź w swój projekt (witrynę).
 * 2. Przejdź do: Site configuration → Environment variables
 * 3. Dodaj następujące 3 zmienne środowiskowe:
 *    - RESEND_API_KEY: Twój klucz API z serwisu https://resend.com (np. re_123456789...)
 *    - CONTACT_TO_EMAIL: znnkstudio@gmail.com
 *    - CONTACT_FROM_EMAIL: onboarding@resend.dev (do darmowych testów Resend) lub
 *      np. kontakt@twojadomena.pl (jeśli zweryfikowałeś własną domenę w Resend)
 * 
 * BEZPIECZEŃSTWO:
 * Żadne klucze API nie są widoczne w kodzie przeglądarki ani w plikach HTML/JS.
 * Funkcja działa wyłącznie po stronie serwera Netlify i pobiera klucze przez process.env.
 * ==============================================================================
 */

exports.handler = async function (event, context) {
  // Nagłówki CORS i odpowiedzi JSON
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json; charset=utf-8',
  };

  // Obsługa wstępnego zapytania OPTIONS (preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ status: 'ok' }),
    };
  }

  // Wymagana metoda POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Method Not Allowed. Użyj metody POST.',
      }),
    };
  }

  try {
    // Bezpieczne parsowanie danych wejściowych
    let data = {};
    try {
      data = typeof event.body === 'string' ? JSON.parse(event.body) : (event.body || {});
    } catch (parseErr) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Nieprawidłowy format danych JSON.',
        }),
      };
    }

    // 1. Ochrona antyspamowa (honeypot)
    // Jeśli robot wypełnił ukryte pole, udajemy sukces bez wysyłania maila
    if (data.honeypot || data._gotcha || data['website-trap']) {
      console.warn('Wykryto spam przez honeypot. Pomijanie wysyłki.');
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'Wiadomość przyjęta.',
        }),
      };
    }

    // 2. Ekstrakcja pól z formularza
    const fullName = (data.fullName || data.name || '').trim();
    const email = (data.email || '').trim();
    const phone = (data.phone || '').trim();
    const companyActivity = (data.companyActivity || data.company_activity || '').trim();
    const websiteType = (data.websiteType || data.website_type || 'Brak sprecyzowania (do ustalenia)').trim();
    const materials = (data.materials || 'Nie zaznaczono').trim();
    const createdAt = data.created_at || new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' });

    // 3. Walidacja wymaganych pól po stronie serwera
    if (!fullName || !email || !phone || !companyActivity) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Wszystkie wymagane pola (imię/firma, e-mail, telefon, opis działalności) muszą być wypełnione.',
        }),
      };
    }

    // 4. Pobranie zmiennych środowiskowych Netlify (process.env)
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL || 'znnkstudio@gmail.com';
    const contactFromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

    // 5. Tryb developerski / testowy (gdy RESEND_API_KEY nie został jeszcze ustawiony w Netlify)
    if (!resendApiKey) {
      console.warn('================================================================');
      console.warn('OSTRZEŻENIE: Brak zmiennej środowiskowej RESEND_API_KEY w process.env!');
      console.warn('Wiadomość od klienta:', { fullName, email, phone, companyActivity, websiteType, materials });
      console.warn('Aby maile trafiały na znnkstudio@gmail.com, dodaj RESEND_API_KEY w panelu Netlify:');
      console.warn('Site configuration → Environment variables → Add a variable');
      console.warn('================================================================');

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          devMode: true,
          message: 'Wiadomość została przyjęta (funkcja działa w trybie dev - uzupełnij RESEND_API_KEY w Netlify).',
        }),
      };
    }

    // 6. Przygotowanie czytelnej treści wiadomości e-mail (HTML + wersja tekstowa)
    const emailSubject = `Nowe zapytanie o stronę WWW [14 dni testu]: ${fullName}`;

    const emailHtml = `
      <!DOCTYPE html>
      <html lang="pl">
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 24px; }
          .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { background: #0284c7; color: #ffffff; padding: 28px 24px; text-align: left; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.02em; }
          .header p { margin: 6px 0 0; font-size: 13px; opacity: 0.9; }
          .content { padding: 28px 24px; }
          .field-group { margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid #f1f5f9; }
          .field-group:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
          .field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 4px; display: block; }
          .field-value { font-size: 15px; color: #0f172a; font-weight: 500; line-height: 1.5; }
          .highlight { font-size: 17px; font-weight: 700; color: #0369a1; }
          .cta-box { background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 12px; padding: 16px; margin-top: 24px; }
          .cta-box p { margin: 0; font-size: 13px; color: #0369a1; font-weight: 600; }
          .footer { background: #f8fafc; padding: 16px 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
          a { color: #0284c7; text-decoration: none; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>ZNNKstudio · Nowe zapytanie o darmowy projekt</h1>
            <p>Odwiedzający wypełnił formularz na Twojej stronie internetowej</p>
          </div>
          <div class="content">
            <div class="field-group">
              <span class="field-label">Imię i nazwisko / Firma:</span>
              <div class="field-value highlight">${fullName}</div>
            </div>

            <div class="field-group">
              <span class="field-label">Numer telefonu:</span>
              <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
            </div>

            <div class="field-group">
              <span class="field-label">Adres e-mail klienta:</span>
              <div class="field-value"><a href="mailto:${email}">${email}</a></div>
            </div>

            <div class="field-group">
              <span class="field-label">Czym zajmuje się firma klienta:</span>
              <div class="field-value" style="white-space: pre-line; background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">${companyActivity}</div>
            </div>

            <div class="field-group">
              <span class="field-label">Preferowany typ strony:</span>
              <div class="field-value">${websiteType}</div>
            </div>

            <div class="field-group">
              <span class="field-label">Materiały do strony (logo, zdjęcia, domena):</span>
              <div class="field-value">${materials}</div>
            </div>

            <div class="field-group">
              <span class="field-label">Data przesłania zgłoszenia:</span>
              <div class="field-value" style="font-size: 13px; color: #64748b;">${createdAt}</div>
            </div>

            <div class="cta-box">
              <p>💡 Następny krok: Skontaktuj się z klientem telefonicznie pod numerem <strong><a href="tel:${phone}">${phone}</a></strong>, aby omówić szczegóły i uruchomić 14-dniowy bezpłatny test strony.</p>
            </div>
          </div>
          <div class="footer">
            Wiadomość wygenerowana automatycznie przez funkcję Netlify dla domeny ZNNKstudio.
          </div>
        </div>
      </body>
      </html>
    `;

    const emailText = `
NOWE ZAPYTANIE ZE STRONY ZNNKSTUDIO (14 DNI ZA DARMO):
--------------------------------------------------
Imię i nazwisko / Firma: ${fullName}
Telefon: ${phone}
E-mail: ${email}

Czym zajmuje się firma:
${companyActivity}

Oczekiwany typ strony: ${websiteType}
Posiadane materiały: ${materials}
Data zgłoszenia: ${createdAt}

--------------------------------------------------
Wiadomość z formularza kontaktowego Netlify Function / Resend API.
    `.trim();

    // 7. Wysłanie wiadomości przez Resend REST API (bez zewnętrznych bibliotek npm)
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: contactFromEmail,
        to: [contactToEmail],
        reply_to: email,
        subject: emailSubject,
        html: emailHtml,
        text: emailText,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error('Błąd odpowiedzi z Resend API:', resendData);
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({
          success: false,
          error: resendData.message || 'Wystąpił błąd podczas wysyłania e-maila przez usługę pocztową.',
        }),
      };
    }

    console.info('E-mail został pomyślnie wysłany na adres:', contactToEmail, 'ID Resend:', resendData.id);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        id: resendData.id,
        message: 'Wiadomość została pomyślnie wysłana na adres znnkstudio@gmail.com.',
      }),
    };
  } catch (err) {
    console.error('Nieoczekiwany błąd w funkcji send-email:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Wystąpił wewnętrzny błąd serwera podczas przetwarzania zapytania.',
      }),
    };
  }
};
