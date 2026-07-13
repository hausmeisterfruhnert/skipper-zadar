# Google Search Console einrichten & Sitemap einreichen
### Schritt-für-Schritt-Anleitung für skipper-zadar.com

Diese Anleitung bringt deine Website bei Google „an den Start": Du meldest die
Seite offiziell an und sagst Google, wo alle Unterseiten liegen. Danach wird
deine Seite deutlich schneller und vollständiger indexiert (= in der Google-Suche
gefunden).

Du brauchst dafür:
- ein Google-Konto (z. B. deine Gmail-Adresse `fruhnert.service.zadar@gmail.com`)
- Zugang zu deinem **Strato**-Kundenkonto (für einen kleinen DNS-Eintrag)
- ca. 15 Minuten Zeit

---

## Teil 1 – Search Console öffnen

1. Gehe auf **https://search.google.com/search-console**
2. Melde dich mit deinem **Google-Konto** an (dieselbe Adresse, die du auch sonst
   für Google nutzt).
3. Falls du noch nie dort warst, klickt Google dich direkt zum Fenster
   „Property-Typ auswählen". Wenn nicht: oben links auf das Auswahlfeld klicken →
   **„+ Property hinzufügen"**.

---

## Teil 2 – Deine Domain anmelden (empfohlener Weg)

Google bietet zwei Varianten an. Wir nehmen die **linke Variante „Domain"** –
die ist die beste, weil sie **alle** Adressen abdeckt (mit/ohne `www`, http und
https, alle Sprachen auf einmal).

1. Im Fenster „Property-Typ auswählen" links bei **„Domain"** eintragen:

   ```
   skipper-zadar.com
   ```

   (nur so, ohne `https://`, ohne `www`, ohne Schrägstrich)

2. Auf **„Weiter"** klicken.

3. Google zeigt dir jetzt einen **Bestätigungs-Code** an – eine lange Zeile,
   die ungefähr so aussieht:

   ```
   google-site-verification=Ax1B2c3D4e5F6g7H8i9J0kLmNoPqRsTuVwXyZ...
   ```

   Klicke daneben auf **„Kopieren"**. Lass dieses Google-Fenster offen –
   wir kommen gleich zurück und klicken auf „Bestätigen".

---

## Teil 3 – Den Code bei Strato eintragen (TXT-Eintrag)

Jetzt hinterlegen wir diesen Code bei deinem Domain-Anbieter Strato. Das ist
derselbe Bereich, in dem du damals die Einträge für GitHub gesetzt hast.

1. In einem **neuen Browser-Tab** bei **Strato** einloggen:
   **https://www.strato.de/apps/CustomerService**
2. Zur **Domainverwaltung** gehen und die Domain **skipper-zadar.com** auswählen.
3. Den Bereich **„DNS-Einstellungen"** bzw. **„TXT- und CNAME-Records"** öffnen
   (genau dort, wo du auch die A-Records und den `www`-Eintrag gemacht hast).
4. Einen **neuen TXT-Eintrag** anlegen:

   | Feld            | Was du einträgst                                   |
   |-----------------|----------------------------------------------------|
   | **Typ**         | TXT                                                |
   | **Name / Host** | *leer lassen* bzw. `@` (steht für die Hauptdomain) |
   | **Wert / Ziel** | den kopierten Code `google-site-verification=...`  |

   > Wichtig: Beim **Wert** die komplette Zeile einfügen, genau wie kopiert.
   > Falls Strato dich fragt: einen bestehenden TXT-Eintrag **nicht** löschen,
   > sondern **zusätzlich** einen neuen anlegen.

5. **Speichern**.

---

## Teil 4 – Bestätigen

1. Zurück zum offenen **Google-Fenster** wechseln.
2. Auf **„Bestätigen"** klicken.

Wenn alles passt, kommt „**Inhaberschaft bestätigt**" 🎉 – geschafft.

> Klappt es nicht sofort? Kein Grund zur Sorge. DNS-Änderungen bei Strato
> brauchen manchmal **ein paar Stunden** (selten bis 24 Std.), bis Google sie
> sieht. Dann einfach später nochmal auf „Bestätigen" klicken. Der Eintrag muss
> dauerhaft stehen bleiben – nicht wieder löschen.

---

## Teil 5 – Sitemap einreichen (der eigentliche Turbo)

Die Sitemap ist die „Landkarte" deiner Website. Sie liegt schon fertig auf deinem
Server und enthält alle 36 Seiten (Deutsch, Kroatisch, Englisch).

1. In der Search Console links im Menü auf **„Sitemaps"** klicken.
2. Im Feld **„Neue Sitemap hinzufügen"** eintragen:

   ```
   sitemap.xml
   ```

   (Der Teil `https://skipper-zadar.com/` steht dort schon davor – du ergänzt
   nur `sitemap.xml`.)

3. Auf **„Senden"** klicken.

Nach kurzer Zeit (manchmal ein paar Minuten, manchmal ein, zwei Tage) sollte dort
Status **„Erfolgreich"** stehen und „36 URLs entdeckt" o. ä.

---

## Teil 6 – Startseite sofort zur Indexierung anstupsen (optional)

Damit deine wichtigste Seite schneller drankommt:

1. Oben in die **Suchleiste** der Search Console die Adresse
   `https://skipper-zadar.com/de/index.html` eingeben und Enter drücken.
2. Es erscheint „URL-Prüfung". Auf **„Indexierung beantragen"** klicken.

Das kannst du für ein paar Hauptseiten machen (Startseite, Touren, Preise, Boot).
Nicht für alle 36 – das übernimmt die Sitemap.

---

## Was passiert danach? (realistische Erwartung)

- **Anmeldung & Bestätigung:** sofort erledigt.
- **Erste Seiten im Index:** oft nach wenigen Tagen.
- **Vollständige Indexierung + erste Auswertungen** (welche Suchbegriffe, wie
  viele Klicks): meist nach **2–4 Wochen**. Eine ganz neue Domain braucht
  etwas Geduld – das ist völlig normal und kein Fehler.

Ab dann siehst du in der Search Console unter **„Leistung"**, über welche
Suchbegriffe Leute dich finden, und unter **„Seiten"**, welche Unterseiten
indexiert sind.

---

## Wichtig für deine Frage von vorhin

Wenn du künftig die Website aktualisierst (Dateien ersetzt), musst du **nichts**
davon wiederholen. Die Anmeldung und die Sitemap bleiben bestehen, und Google
aktualisiert deine Seiten beim nächsten Besuch automatisch. Nur wenn du mal eine
**komplett neue Unterseite** hinzufügst, kannst du sie über „Indexierung
beantragen" (Teil 6) schneller reinbringen – nötig ist es aber nicht, weil die
Sitemap sie ohnehin meldet.

---

## Wenn etwas klemmt

- **„Bestätigung fehlgeschlagen":** DNS noch nicht durch – ein paar Stunden warten,
  dann erneut „Bestätigen".
- **TXT-Eintrag-Feld bei Strato unklar:** Der Code kommt in **Wert/Ziel**, das
  **Name/Host-Feld** bleibt leer bzw. `@`.
- **Sitemap „konnte nicht abgerufen werden":** kurz prüfen, ob
  `https://skipper-zadar.com/sitemap.xml` im Browser lädt (sollte eine XML-Liste
  zeigen). Falls nicht, ist evtl. der letzte Upload nicht durchgelaufen.

Viel Erfolg – und melde dich, wenn an einer Stelle etwas anders aussieht als hier
beschrieben. Dann gehen wir es gemeinsam durch.
