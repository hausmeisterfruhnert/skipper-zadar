# Benutzerhandbuch – Website Skipper Zadar & Boat Rent

Dieses Handbuch erklärt dir in einfachen Worten, wie deine Website aufgebaut ist
und wie du selbst Inhalte änderst – Preise, Kontaktdaten, Texte, Bilder und mehr.
Du brauchst dafür **keine Programmierkenntnisse**, nur etwas Sorgfalt.

---

## 1. Wie die Website funktioniert (das Grundprinzip)

Deine Website besteht aus zwei „Welten":

1. **Die Quelldateien** – hier pflegst *du* die Inhalte. Wichtig sind vor allem:
   - `src/data.js` → Kontaktdaten, Touren, **Preise**, Zusatzleistungen, Partner, Bilder
   - `src/pages.js` → die Texte der einzelnen Seiten
   - `assets/styles.css` → Design & Farben
   - `assets/` → alle Fotos

2. **Die fertige Website** – daraus baut GitHub automatisch die fertigen Seiten
   (`de/preise.html`, `hr/preise.html` usw.). **Diese fertigen Dateien bearbeitest
   du nie direkt.**

Der Ablauf ist immer gleich:

> **Du änderst eine Quelldatei → lädst sie zu GitHub hoch (Commit) → GitHub baut
> die Website automatisch neu → nach ~1 Minute ist die Änderung live.**

Der große Vorteil: Du pflegst z. B. einen Preis nur **einmal** in `data.js`, und
er erscheint automatisch korrekt auf Deutsch, Kroatisch und Englisch.

---

## 2. Die wichtigen Dateien im Überblick

| Datei | Wofür zuständig | Wie oft brauchst du sie |
|-------|-----------------|--------------------------|
| `src/data.js` | Kontakt, **Preise**, Touren, Zusatzleistungen, Partner, Bildpfade | **am häufigsten** |
| `src/pages.js` | Fließtexte der Seiten (Über uns, Boot, Kontakt …) | gelegentlich |
| `assets/styles.css` | Farben, Schriftgrößen, Design | selten |
| `assets/` (Ordner) | Fotos (`.jpg`, `.png`) | wenn du Bilder tauschst |

Dateien, die du **in Ruhe lassen** solltest (die steuern die Technik):
`build.js`, der Ordner `.github/`, `assets/script.js`.

---

## 3. Zwei Wege, um etwas zu ändern

### Weg A – Direkt auf GitHub.com (am schnellsten)

1. Repository auf github.com öffnen.
2. Zur Datei klicken (z. B. Ordner `src` → `data.js`).
3. Oben rechts über dem Text auf das **Stift-Symbol** („Edit this file").
4. Änderung machen (mit **Strg + F** die Stelle suchen).
5. Oben rechts **„Commit changes"** → fertig.

### Weg B – Auf dem PC (VS Code) und dann hochladen

Gut, wenn du auf dem PC immer ein aktuelles Backup haben willst.

1. **VS Code** öffnen → „File" → „Open Folder…" → deinen Website-Ordner wählen.
2. Links im Dateibaum die Datei öffnen (z. B. `src` → `data.js`).
3. Ändern, mit **Strg + S** speichern.
   *(VS Code unterringelt Fehler rot – ein nützliches Sicherheitsnetz.)*
4. Auf github.com **zuerst in den passenden Ordner klicken** (z. B. `src`), dann
   **„Add file" → „Upload files"**, die geänderte Datei hineinziehen und
   **„Commit changes"**.

> **Merke:** Immer *zuerst auf dem PC ändern, dann hochladen* – so bleiben PC und
> GitHub synchron, und du hast jederzeit ein Backup.

---

## 4. Wie du eine Änderung veröffentlichst (und siehst, dass sie geklappt hat)

Nach jedem „Commit" startet GitHub automatisch den Neubau. Das kannst du
kontrollieren:

- Im Repository oben auf den Reiter **„Actions"**.
- Dort erscheint dein letzter Commit mit einem **gelben Punkt** (läuft gerade) →
  nach ~1 Minute ein **grüner Haken** (erfolgreich).
- Danach die Website im Browser mit **Strg + F5** neu laden – die Änderung ist da.

Ein **rotes X** bedeutet, dass der Build fehlgeschlagen ist (meist ein Tippfehler
in der Datei). Siehe Abschnitt 7.

---

## 5. Kochrezepte – die häufigsten Änderungen

### 5.1 Einen Preis ändern

In `src/data.js`. Jede Tour hat eine Zeile mit `price:"…"`. Nur die **Zahl**
ändern:

```js
id:"tagestour-ai", … hrs:8, price:"850",   →   price:"900",
```

Zuordnung der Preise:

| Tour / Leistung | erkennbar an | Preis |
|-----------------|--------------|-------|
| Ganztagestour All-Inclusive | `id:"tagestour-ai"` | 850 € |
| Halbtagestour All-Inclusive | `id:"halbtag-ai"` | 550 € |
| Ganztag Lite | `id:"tagestour-lite"` | 700 € |
| Halbtag Lite | `id:"halbtag-lite"` | 450 € |
| Insel-Abenteuer Dugi Otok | `id:"dugi-otok"` | 850 € |
| Sonnenuntergangstour | `id:"sunset"` | 200 € |
| Ausflug pro Person | `id:"properson"` | 55 € |
| Käse-/Antipasti-Platte | `emoji:"🧀"` | 80 € |
| Prosecco / Sekt | `emoji:"🍾"` | 80 € |
| Cocktails | `emoji:"🍹"` | 120 € |

> Der eingebettete **Buchungskalender (Shore)** hat eigene Preise – die änderst du
> direkt bei Shore. `data.js` steuert nur die **„Preise"-Seite**.

### 5.2 Kontaktdaten ändern

Ganz oben in `src/data.js` im Block `BRAND`. Jeweils den Text **zwischen den
Anführungszeichen** ändern:

```js
phoneDisplay: "099 780 6063",     // so wird die Nummer angezeigt
phoneIntl:    "+385 99 780 6063", // internationale Anzeige
tel:          "+385997806063",    // für den Klick-zum-Anrufen-Link (ohne Leerzeichen)
wa:           "385997806063",     // WhatsApp-Nummer (ohne + und ohne Leerzeichen)
email:        "fruhnert.service.zadar@gmail.com",
addr:         "Ul. Ante Trumbića 26, 23000 Zadar",
```

> Wenn du die Telefonnummer änderst, denk an **alle drei** Felder
> (`phoneDisplay`, `phoneIntl`, `tel`) und ggf. `wa`.

### 5.3 Einen Text auf einer Seite ändern

Die Fließtexte stehen in `src/pages.js`. Jeder Text gibt es dreimal – unter `de:`,
`hr:` und `en:`. Ändere **immer alle drei** (oder sag mir Bescheid, dann übersetze
ich die anderen beiden). Auch hier gilt: nur den Text zwischen den
Anführungszeichen ändern.

### 5.4 Ein Foto austauschen

1. Neues Bild als `.jpg` in den Ordner **`assets/`** legen (am besten kurzer Name
   ohne Leerzeichen, z. B. `boat-neu.jpg`).
2. In `src/data.js` im Block `images:` den Pfad anpassen, z. B.:
   ```js
   boat: "../assets/boat-neu.jpg",
   ```
3. Beide Dateien hochladen (das neue Bild **und** die geänderte `data.js`).

Übersicht der Bild-Felder in `data.js`:

| Feld | Wo es erscheint |
|------|------------------|
| `boat` | Hauptfoto auf „Das Boot" |
| `owner` | dein Foto auf „Über uns" |
| `night` | Zadar bei Nacht (Startseite) |
| `hero` | dezentes Hintergrundbild ganz oben |
| `gallery: [ … ]` | die 6 Bilder der „Impressionen"-Galerie |

> Tipp: Fotos vorher etwas verkleinern (Breite ca. 1200–1600 px), damit die Seite
> schnell lädt. Wenn du magst, mach ich das für dich.

### 5.5 Einen Partner ändern oder hinzufügen

In `src/data.js` im Block `PARTNERS` (Unterkünfte, Seefahrtschule, Home Care).
Am einfachsten: schick mir die Daten, dann baue ich den neuen Eintrag sauber ein.

---

## 6. Die goldenen Regeln (bitte immer beachten)

Die Dateien `data.js` und `pages.js` sind **Programmdateien**. Damit nichts kaputt
geht:

- **Nur den Text zwischen den Anführungszeichen** `" … "` ändern.
- **Anführungszeichen, Kommas, Klammern** `{ } [ ]` immer stehen lassen.
- Keine „geraden" Anführungszeichen durch „geschwungene" ersetzen (Word macht das
  automatisch – deshalb **nicht in Word bearbeiten**, sondern in VS Code oder
  direkt auf GitHub).
- Im Zweifel: **erst auf dem PC ändern, speichern, prüfen (VS Code zeigt Fehler
  rot an), dann hochladen.**

---

## 7. Wenn etwas schiefgeht (Troubleshooting)

**Die Seite baut nicht / rotes X unter „Actions":**
Meist ein fehlendes `"` oder Komma. Zwei Möglichkeiten:
- Auf github.com die letzte Änderung rückgängig machen: Reiter **„Commits"** →
  deinen letzten Commit öffnen → oben **„Revert"**. Dann ist der alte, funktionierende
  Stand wieder da.
- Oder mir kurz Bescheid geben – ich schaue drauf und richte es.

**Änderung ist nicht sichtbar:**
- Kurz warten (Build dauert ~1 Min.), dann Browser mit **Strg + F5** neu laden.
- Unter „Actions" prüfen, ob der grüne Haken da ist.

**Bild wird nicht angezeigt:**
- Stimmt der Dateiname in `data.js` **exakt** (Groß-/Kleinschreibung!) mit der
  Datei in `assets/` überein? `Boot.JPG` ≠ `boot.jpg`.

---

## 8. Backup & Ordnung

- Dein **PC-Ordner ist dein Backup.** Wenn du die Regel „erst PC, dann hochladen"
  befolgst, ist er immer aktuell.
- Zusätzlich hast du auf GitHub automatisch die komplette **Versionsgeschichte**:
  Unter „Commits" siehst du jede Änderung und kannst jederzeit zu einem früheren
  Stand zurück.
- Bewahre das jeweils letzte ZIP, das ich dir schicke, als Komplett-Sicherung auf.

---

## 9. Spickzettel (das Wichtigste in Kürze)

1. Preise/Kontakt/Bilder → **`src/data.js`**
2. Seitentexte → **`src/pages.js`** (immer `de`, `hr`, `en`)
3. Ändern → **nur zwischen den Anführungszeichen**
4. Hochladen → **Commit** → Reiter **„Actions"** abwarten (grüner Haken)
5. Kaputt? → **„Revert"** oder mir Bescheid geben
6. Regel: **erst PC, dann GitHub**

---

Bei Unsicherheiten gilt immer: Lieber einmal zu viel nachfragen als etwas
kaputtmachen. Schreib mir einfach, was du ändern möchtest – ich baue es dir ein
oder führe dich Schritt für Schritt durch.
