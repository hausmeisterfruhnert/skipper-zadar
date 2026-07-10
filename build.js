// ============================================================
//  build.js — erzeugt die statische Website (DE / HR / EN)
//  Aufruf:  node build.js   ->  Ausgabe in ./dist
// ============================================================
const fs = require("fs");
const path = require("path");
const { BRAND, PAGES, LANGS, LANG_LABEL, UI, TOURS, ADDONS, PARTNERS } = require("./src/data");

const OUT = path.join(__dirname, "dist");
const t = (l) => UI[l];
const money = (p) => p ? `${p} €` : "";

// ---------- kleine Helfer ----------
const wa = (l, msg) => `https://wa.me/${BRAND.wa}?text=${encodeURIComponent(msg)}`;
const waMsg = { de:"Hallo, ich interessiere mich für eine Bootstour ab Zadar.", hr:"Bok, zanima me izlet brodom iz Zadra.", en:"Hi, I'm interested in a boat tour from Zadar." };
const mapEmbed = `https://www.google.com/maps?q=${BRAND.lat},${BRAND.lng}&z=13&hl=de&output=embed`;
const mapLink  = `https://www.google.com/maps/place/Skipper+Zadar+%26+Boat+Rent/@${BRAND.lat},${BRAND.lng},14z`;

const IC = {
  wa:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.8.8-1 1.9-.6 3.1.5 1.5 1.6 3 3 4.3 2 1.8 3.6 2.3 4.9 2.5.7.1 1.4.1 2-.1.6-.2 1.7-.9 1.9-1.7.2-.5.2-.9.2-1 0-.1-.2-.2-.5-.3zM12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2z"/></svg>`,
  phone:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .5 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.5-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z"/></svg>`,
  mail:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
  pin:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>`,
  clock:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 11h-4v-2h2V7h2v6z"/></svg>`,
  insta:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.1.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.1-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.1-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.1 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.2A6.6 6.6 0 1 0 12 18.6 6.6 6.6 0 0 0 12 5.4zm0 10.9A4.3 4.3 0 1 1 12 7.7a4.3 4.3 0 0 1 0 8.6zm6.8-11.2a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>`
};

// ---------- Header ----------
function header(l, page){
  const nav = ["index","touren","boot","preise","ueber-uns","partner","kontakt"];
  const links = nav.map(p => `<a href="${p}.html"${p===page?' class="active"':''}>${t(l).nav[p]}</a>`).join("");
  const langsw = LANGS.map(lg => `<a href="../${lg}/${page}.html"${lg===l?' class="active"':''}>${LANG_LABEL[lg]}</a>`).join("");
  return `<header class="site-header"><nav class="nav">
    <a class="brand" href="index.html">
      <img src="${BRAND.logo}" alt="${BRAND.name}">
      <span class="brand-text">Skipper Zadar<small>Boat Rent · Zadar</small></span>
    </a>
    <ul class="nav-links">${links}
      <li class="lang-switch" style="margin-left:6px">${langsw}</li>
    </ul>
    <div class="nav-cta">
      <div class="lang-switch desktop">${langsw}</div>
      <a class="btn btn-primary" href="buchung.html">${t(l).book}</a>
      <button class="hamburger" aria-label="Menü"><span></span><span></span><span></span></button>
    </div>
  </nav></header>`;
}

// ---------- Footer ----------
function footer(l){
  const nav = ["index","touren","boot","preise","ueber-uns","partner","kontakt"];
  const quick = nav.map(p=>`<a href="${p}.html">${t(l).nav[p]}</a>`).join("");
  return `<footer class="site-footer"><div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-brand"><img src="${BRAND.logo}" alt="${BRAND.name}"></div>
        <p style="max-width:38ch">${t(l).footTagline}</p>
        <p style="margin-top:14px"><a href="${BRAND.booking}" target="_blank" rel="noopener" style="display:inline">↗ ${t(l).book} (Shore)</a></p>
      </div>
      <div>
        <h4>${t(l).quick}</h4>${quick}
      </div>
      <div>
        <h4>${t(l).contactH}</h4>
        <a href="tel:${BRAND.tel}">${BRAND.phoneIntl}</a>
        <a href="mailto:${BRAND.email}">${BRAND.email}</a>
        <a href="${mapLink}" target="_blank" rel="noopener">${BRAND.addr}</a>
        <a href="${BRAND.instagram}" target="_blank" rel="noopener">Instagram · ${BRAND.instaHandle}</a>
        <h4 style="margin-top:18px">${t(l).hoursH}</h4>
        <span style="color:#cfe6e8">${t(l).hoursV}</span>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} ${BRAND.name}. ${t(l).rights}</span>
      <span>
        <a href="impressum.html">${t(l).imprint}</a> ·
        <a href="datenschutz.html">${t(l).privacy}</a> ·
        <a href="agb.html">${t(l).terms}</a>
      </span>
    </div>
  </div></footer>`;
}

// ---------- Floating Buttons ----------
function floaters(l){
  return `<div class="floaters">
    <a class="float-btn float-wa" href="${wa(l,waMsg[l])}" target="_blank" rel="noopener">${IC.wa}<span>${t(l).whatsapp}</span></a>
    <a class="float-btn float-book" href="buchung.html">⚓ <span>${t(l).book}</span></a>
  </div>`;
}

// ---------- Seiten-Rahmen ----------
function shell({l, page, title, desc, body}){
  return `<!doctype html>
<html lang="${l}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title} · ${BRAND.name}</title>
<meta name="description" content="${desc}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/styles.css">
<link rel="icon" href="${BRAND.logoMark}">
</head>
<body>
${header(l,page)}
${body}
${footer(l)}
${floaters(l)}
<script src="../assets/script.js"></script>
</body>
</html>`;
}

// ---------- Bausteine ----------
const tourCard = (l, tr) => {
  const d = tr[l];
  const priceHtml = tr.price
    ? `<div class="tour-price">${money(tr.price)}<small>${t(l).perBoat}</small></div>`
    : `<div class="tour-price">${t(l).onRequest}<small>&nbsp;</small></div>`;
  const meta = [
    tr.hrs ? `<span>${IC.clock.replace('viewBox','width="15" viewBox')} ${tr.hrs} ${t(l).hours}</span>` : `<span>🧭 ${l==='de'?'flexibel':l==='hr'?'fleksibilno':'flexible'}</span>`,
    `<span>👥 ${l==='de'?'bis':l==='hr'?'do':'up to'} ${BRAND.capacity}</span>`
  ].join("");
  const link = tr.slug==="dugi-otok" ? "dugi-otok.html" : "buchung.html";
  return `<article class="tour">
    <div class="tour-media">
      <span class="tour-tag${tr.gold?' gold':''}">${tr.tag[l]}</span>
      ${tr.media?`<img class="tour-img" src="${tr.media}" alt="" loading="lazy">`:`<span class="emoji">${tr.emoji}</span>`}
    </div>
    <div class="tour-body">
      <h3>${d.title}</h3>
      <div class="tour-meta">${meta}</div>
      <p>${d.teaser}</p>
      <div class="tour-foot">
        ${priceHtml}
        <a class="btn btn-dark" href="${link}">${tr.slug==="dugi-otok"?t(l).details:t(l).bookThis}</a>
      </div>
    </div>
  </article>`;
};

// ============================================================
//  PAGE CONTENT
// ============================================================
const C = require("./src/pages");

function renderPage(l, page){
  const ctx = { l, BRAND, TOURS, ADDONS, PARTNERS, t:t(l), IC, money, wa, waMsg, mapEmbed, mapLink, tourCard };
  const p = C[page](ctx);
  return shell({ l, page, title:p.title, desc:p.desc, body:p.body });
}

// ---------- Build ----------
fs.rmSync(OUT, { recursive:true, force:true });
fs.mkdirSync(OUT, { recursive:true });
// assets rüberkopieren
fs.mkdirSync(path.join(OUT,"assets"), { recursive:true });
for(const f of fs.readdirSync(path.join(__dirname,"assets"))){
  fs.copyFileSync(path.join(__dirname,"assets",f), path.join(OUT,"assets",f));
}
let count=0;
for(const l of LANGS){
  const dir = path.join(OUT, l);
  fs.mkdirSync(dir, { recursive:true });
  for(const page of PAGES){
    fs.writeFileSync(path.join(dir, page+".html"), renderPage(l, page));
    count++;
  }
}
// Root-Redirect auf /de/
fs.writeFileSync(path.join(OUT,"index.html"),
`<!doctype html><html lang="de"><head><meta charset="utf-8">
<meta http-equiv="refresh" content="0; url=./de/index.html">
<link rel="canonical" href="./de/index.html">
<title>${BRAND.name}</title></head>
<body style="font-family:sans-serif;padding:40px">Weiterleitung … <a href="./de/index.html">${BRAND.name}</a></body></html>`);

// Optionale Custom Domain für GitHub Pages
if (BRAND.domain) {
  fs.writeFileSync(path.join(OUT, "CNAME"), BRAND.domain + "\n");
}
// Verhindert, dass GitHub Pages die Dateien durch Jekyll verarbeitet
fs.writeFileSync(path.join(OUT, ".nojekyll"), "");

console.log(`✅ Build fertig: ${count} Seiten (${LANGS.length} Sprachen × ${PAGES.length}) in /dist`);
