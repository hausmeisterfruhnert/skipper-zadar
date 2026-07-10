# Website online stellen mit GitHub Pages (Auto-Deploy)

Diese Anleitung bringt deine Website mit automatischem Build online. Nach der Einrichtung gilt:
**Du änderst etwas → `git push` → die Seite aktualisiert sich von selbst.**

## 1. Repository anlegen & Dateien hochladen

Entpacke das ZIP. Im Terminal im Projektordner:

```bash
git init
git add .
git commit -m "Skipper Zadar Website"
git branch -M main
# Repo vorher auf github.com anlegen (z. B. "skipper-zadar"), dann:
git remote add origin https://github.com/DEIN-NAME/skipper-zadar.git
git push -u origin main
```

> Alternativ: Repo auf github.com anlegen und die Dateien per Weboberfläche hochladen
> („Add file → Upload files"). Wichtig: **alle** Dateien inkl. Ordner `.github/` und `src/`.

## 2. GitHub Pages aktivieren

1. Im Repo auf **Settings → Pages**.
2. Bei **Source** „**GitHub Actions**" auswählen (nicht „Deploy from a branch").
3. Fertig. Der mitgelieferte Workflow (`.github/workflows/deploy.yml`) baut die Seite
   automatisch mit `node build.js` und veröffentlicht den Ordner `dist`.

Nach ~1 Minute ist die Seite online unter:

- **Projekt-Repo:** `https://DEIN-NAME.github.io/skipper-zadar/`
- oder (wenn das Repo `DEIN-NAME.github.io` heißt): `https://DEIN-NAME.github.io/`

Den Build-Fortschritt siehst du im Reiter **Actions**.

## 3. Inhalte ändern

Alles Wichtige steht in:

- `src/data.js` — Kontaktdaten, Touren, **Preise**, Zusatzleistungen, **Partner**, Logo
- `src/pages.js` — Texte der Seiten
- `assets/styles.css` — Design/Farben

Ändern → committen → pushen:

```bash
git add .
git commit -m "Preise aktualisiert"
git push
```

Die GitHub-Action baut und veröffentlicht automatisch neu.

## 4. Eigene Domain verbinden (optional)

1. Domain kaufen (z. B. bei Namecheap, IONOS, Cloudflare, ~10–15 €/Jahr).
2. In `src/data.js` das Feld `domain` setzen, z. B.:
   ```js
   domain: "www.skipper-zadar.com",
   ```
   (Beim Build wird dann automatisch eine `CNAME`-Datei erzeugt.)
3. In **Settings → Pages → Custom domain** dieselbe Domain eintragen.
4. Beim Domain-Anbieter einen **CNAME-Eintrag** `www` → `DEIN-NAME.github.io` setzen
   (bzw. die A-Records für die Root-Domain laut GitHub-Anleitung).
5. „Enforce HTTPS" aktivieren.

Danach läuft alles unter deiner eigenen Adresse.

---

**Tipp:** Falls der erste Build fehlschlägt, prüfe unter **Actions**, ob bei Pages die Source
wirklich auf „GitHub Actions" steht (Schritt 2). Der Build braucht keine Zusatzpakete –
`build.js` nutzt nur Node-Bordmittel.
