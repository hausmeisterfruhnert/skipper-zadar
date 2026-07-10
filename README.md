# Skipper Zadar & Boat Rent — Website

Moderne, dreisprachige Website (Deutsch / Kroatisch / Englisch) für deine Bootsvermietung in Zadar.
Aufgebaut im Stil der MAG-Referenzseite: Petrol/Türkis, Schriften **Fraunces** + **Manrope**,
Kartenlayout, Preis-Sidebars, schwebende WhatsApp- und „Jetzt buchen"-Buttons, Google-Maps-Karte
und Kontaktformular mit „Worum geht es?"-Auswahl.

## Was drin ist

- **33 Seiten** = 11 Seiten × 3 Sprachen (`dist/de`, `dist/hr`, `dist/en`)
  Start · Touren · Dugi-Otok-Detailseite · Das Boot · Preise · Über uns · Kontakt · Buchung · Impressum · Datenschutz · AGB
- Alle **Leistungen, Preise und Beschreibungen** direkt aus deinem Google-/Shore-Profil übernommen.
- **Logo** aus deinem Buchungsprofil eingebunden.
- Erzeugt über ein **Node-Build-Skript** mit gemeinsamer Vorlage (Header, Footer, CSS, Buttons zentral gepflegt).

## Ansehen

Einfach `dist/de/index.html` im Browser öffnen (oder `dist/index.html` → leitet auf Deutsch weiter).
Zum Veröffentlichen den kompletten Ordner **`dist/`** zu deinem Webhoster hochladen.

## Inhalte ändern

Alle Texte/Preise stehen zentral in:

- `src/data.js` — Marke, Kontaktdaten, Touren, Preise, Zusatzleistungen, Navigation
- `src/pages.js` — Seiteninhalte (Start, Über uns, Kontakt, Rechtstexte …)
- `assets/styles.css` — Design/Farben · `assets/script.js` — Menü & Formular

Danach neu bauen:

```
node build.js
```

## Bitte noch ergänzen / prüfen

1. **Fotos:** An einigen Stellen sind Platzhalter (Das Boot, Über uns). Eigene Fotos einsetzen (siehe Platzhalter-Kästen).
2. **Domain:** falls vorhanden, ergänze ich gern.
3. **Rechtstexte** (Impressum/Datenschutz/AGB): sind sorgfältige **Entwürfe** mit `[…]`-Lücken (OIB/USt-ID,
   Hosting-Anbieter, Storno-Fristen). Vor Veröffentlichung bitte von einer fachkundigen Person prüfen lassen.

## Logo-Dateien (`assets/`)

Dein echtes Logo ist eingebunden. Es liegen drei Varianten bereit:

- `logo-mark.png` — quadratische Bildmarke (Boot + Skipper), **im Header/Footer aktiv genutzt**
- `logo-no-homecare.jpeg` — volles Logo **ohne „Skipper & Home Care"** (CROATIAN BOAT RENTAL)
- `logo-full.jpeg` — dein Original inkl. „Skipper & Home Care"

Umschalten in `src/data.js` über die Felder `logo`, `logoFull`, `logoOriginal`.

## Verwendete Daten (aus deinem Profil)

- Firma: **Skipper Zadar & Boat Rent** · Inhaber: **Andreas Fruhnert**
- Adresse: **Ul. Ante Trumbića 26, 23000 Zadar**
- Telefon/WhatsApp: **+385 99 780 6063**
- E-Mail: **fruhnert.service.zadar@gmail.com**
- Instagram: **@fruhnert_zadar**
- Boot: **Scarani Coral 30** (bis 8 Personen)
- Buchung: Shore-Buchungssystem (verlinkt)
- Bewertung: 5,0 ★ (Google)
