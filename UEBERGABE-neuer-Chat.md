# KONTEXT / ÜBERGABE AN NEUEN CHAT — Website „Skipper Zadar & Boat Rent"

## Was bereits gebaut wurde
Eine moderne, **dreisprachige** (Deutsch / Kroatisch / Englisch) statische Website für meine
**Bootsvermietung in Zadar, Kroatien**. Stilvorlage war die Referenzseite „MAG Seefahrtschule Zadar".
Die Website ist fertig und liegt als ZIP-Paket vor (`skipper-zadar-website.zip`).

## Technik / Aufbau (bitte übernehmen)
- Statische Website, erzeugt über ein **Node-Build-Skript** (`node build.js`) mit gemeinsamer Vorlage
  (Header, Footer, Buttons, CSS zentral gepflegt). Ausgabe landet in `/dist`.
- Struktur:
  - `build.js` — Layout (Header/Footer/Floating-Buttons) + Generator
  - `src/data.js` — Marke, Kontaktdaten, Navigation, Touren, Preise, Zusatzleistungen, **Partner**
  - `src/pages.js` — Seiteninhalte (Start, Touren, Dugi-Otok, Boot, Preise, Über uns, **Partner**, Kontakt, Buchung, Recht)
  - `assets/styles.css` — Design · `assets/script.js` — Menü & Formular
- **36 Seiten** = 12 Seiten × 3 Sprachen, in `/dist/de`, `/dist/hr`, `/dist/en` (+ Root-Redirect auf DE).
- Look: modern, kompakt, Petrol/Türkis; Schriften **Manrope** (Text) + **Fraunces** (Überschriften).
- Schwebende Buttons unten rechts: grüner **WhatsApp**-Button + türkiser **„Jetzt buchen"**.
- Kartenlayout, Preis-Sidebars, Google-Maps-Embed, Kontaktformular mit „Worum geht es?"-Auswahl,
  Sprachumschalter DE/HR/EN im Header.

## Seiten
Start · Touren (Übersicht) · Dugi-Otok-Detailseite (Stopp-für-Stopp) · Das Boot · Preise ·
Über uns · **Partner** · Kontakt · Buchung · Impressum · Datenschutz · AGB

## Firmen- & Kontaktdaten (im Einsatz)
- Firma: **Skipper Zadar & Boat Rent** · Inhaber: **Andreas Fruhnert**
- Adresse / Basis: **Ul. Ante Trumbića 26, 23000 Zadar** (Marina Zadar)
- Telefon / WhatsApp: **+385 99 780 6063**
- E-Mail: **fruhnert.service.zadar@gmail.com**
- Instagram: **@fruhnert_zadar** (https://www.instagram.com/fruhnert_zadar)
- Online-Buchung (Shore): https://connect.shore.com/bookings/skipper-zadar-boat-rent-fruhnert-deutsch/services
- Boot: **Scarani Coral 30** (Daycruiser, bis 8 Personen, Kabine, Bord-WC, Badeplattform)
- Bewertung: 5,0 ★ (Google)
- Text neben dem Logo im Header: „Skipper Zadar · Boat Rent · Zadar"

## Logo (im Paket enthalten, in `assets/`)
- `logo-full.jpeg` — Original inkl. „Skipper & Home Care" → **aktuell im Header/Footer aktiv**
- `logo-no-homecare.jpeg` — volles Logo ohne „Home Care" (Alternative)
- `logo-mark.png` — quadratische Bildmarke (Boot + Skipper) → Favicon
- Umschaltbar in `src/data.js` (`logo`, `logoMark`, `logoNoHomecare`).

## Touren & Preise (Festpreis pro Boot / Crew, bis 8 Personen)
**All-Inclusive** (Welcome-Drink, Bier + Softdrinks, Skipper DE/EN, Treibstoff, Reinigung):
- Exklusive Ganztagestour (8 Std.) — **850 €**
- Exklusive Halbtagestour (4 Std.) — **550 €**

**Lite** (Softdrinks inkl., Alkohol auf Absprache):
- Ganztagestour LITE (8 Std.) — **700 €**
- Halbtagestour LITE (4 Std.) — **450 €**

**Insel-Abenteuer:**
- Dugi Otok & Sakarun – Schiffswrack, Golubinka-Höhle, „Drachenauge", blaue Lagune, Sakarun-Strand,
  U-Boot-Bunker (8 Std.) — **850 €**

**Charter:**
- Individuelle Bootstour nach Wunsch (flexible Dauer) — **auf Anfrage**

**Zusatzleistungen:** Dalmatinische Pancetta-/Käseplatte 80 € · Champagner/Schaumwein 80 € ·
All-Inclusive Getränke-Flatrate (bis 6 Pers.) 120 €

**Anzahlungs- & Wetter-Garantie:** Anzahlung sichert Boot & Skipper; bei Absage wegen Wind (Jugo/Bura)
oder Regen 100 % Rückerstattung oder Verschiebung auf einen Sonnentag.

## Partner-Seite (bereits eingebaut)
- **Villa Dalmatina Zadar** — Ferienwohnungen mit Pool, 4,9 ★ (61), https://www.villa-dalmatina-zadar.com/
- **Apartment Lea Maria** — zentral, 5,0 ★ (3), https://www.croatiahotels.net/en/hotel/apartment-lea-maria.html
- **MAG Seefahrtschule Zadar** — Küstenpatent auf Deutsch, https://kuestenpatent-kroatien.online/
(Weitere Partner können jederzeit ergänzt werden.)

## Noch offen / To-do
1. **Eigene Fotos** einsetzen (Platzhalter bei „Das Boot", „Über uns"; optional Partner-Karten mit Logos/Bildern).
2. **Wunsch-Domain** festlegen und Hosting (Ordner `/dist` hochladen).
3. **Rechtstexte** (Impressum/Datenschutz/AGB) sind sorgfältige Entwürfe mit `[…]`-Lücken
   (OIB/USt-ID, Hosting-Anbieter, Storno-Fristen) → vor Veröffentlichung fachkundig prüfen lassen.
4. Ggf. exakten **Wortlaut** neben dem Logo anpassen.
5. Ggf. weitere Sprachen/Feinschliff.

## Bewusst weggelassen
Hausmeisterservice / „Home Care" — die Website zeigt **nur die Bootsvermietung**.
