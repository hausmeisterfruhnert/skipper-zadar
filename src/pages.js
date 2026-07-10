// ============================================================
//  src/pages.js — Seiten-Inhalte (DE / HR / EN)
//  Jede Funktion bekommt ctx und liefert { title, desc, body }
// ============================================================

const pick = (l, o) => o[l];

// gemeinsame CTA-Band
function ctaBand(ctx){
  const { l, t, BRAND, wa, waMsg, IC } = ctx;
  const txt = pick(l,{
    de:{h:"Bereit für euren Tag auf der Adria?", p:"Sichert euch euren Wunschtermin – unkompliziert per WhatsApp, Telefon oder direkt online über unser Buchungssystem."},
    hr:{h:"Spremni za dan na Jadranu?", p:"Osigurajte željeni termin – jednostavno putem WhatsAppa, telefona ili online preko sustava za rezervacije."},
    en:{h:"Ready for your day on the Adriatic?", p:"Secure your preferred date – easily via WhatsApp, phone or directly online through our booking system."}
  });
  return `<section><div class="container"><div class="cta-band">
    <h2>${txt.h}</h2><p>${txt.p}</p>
    <div class="cta-actions">
      <a class="btn btn-primary btn-lg" href="buchung.html">⚓ ${t.book}</a>
      <a class="btn btn-wa btn-lg" href="${wa(l,waMsg[l])}" target="_blank" rel="noopener">${IC.wa} ${t.whatsapp}</a>
    </div>
  </div></div></section>`;
}

/* ---------------- START ---------------- */
exports.index = (ctx) => {
  const { l, t, BRAND, TOURS, tourCard, wa, waMsg, IC } = ctx;
  const x = pick(l,{
    de:{
      eyebrow:"Private Bootstouren ab Zadar",
      h1:"Euer exklusiver Tag auf der Adria",
      lead:"Private, familiäre Bootsausflüge mit deutschem Skipper – zu versteckten Buchten, Sandstränden und Inseln rund um Zadar. Kein Massentourismus, nur ihr und das türkisblaue Meer.",
      badges:["🇩🇪 Deutscher Skipper","👥 Bis zu 8 Personen","★ 5,0 auf Google","💶 All-Inclusive Festpreis"],
      cardTitle:"All-Inclusive Ganztag",
      cardSub:"Scarani Coral 30 · bis 8 Pers.",
      cardList:["Welcome-Drink & Getränke inklusive","Erfahrener Skipper (DE/EN)","Treibstoff & Reinigung inklusive"],
      whyE:"Warum Skipper Zadar",
      whyH:"Premium-Erlebnis statt Massentourismus",
      whyP:"Vergesst enge, nasse Schlauchboote und überfüllte Ausflugsschiffe. Bei uns genießt ihr einen komplett privaten Tag auf einem luxuriösen Daycruiser – mit persönlicher Betreuung durch euren deutschsprachigen Skipper.",
      feats:[
        ["🛥️","Luxus-Daycruiser","Große Sonnenliege, Kabine, echte Bord-Toilette und Badeplattform für maximalen Komfort."],
        ["🗺️","Individuelle Routen","Ihr bestimmt mit: versteckte Buchten, Schnorchel-Stopps oder der berühmte Sakarun-Strand."],
        ["🥂","All-Inclusive","Welcome-Drink, gekühlte Getränke und persönlicher Service – ohne versteckte Kosten."],
        ["⚓","Wetter-Garantie","Fällt die Tour wegen Wind oder Regen aus: 100 % Rückerstattung oder neuer Sonnentag."]
      ],
      toursE:"Unsere Touren",
      toursH:"Wählt euer Abenteuer",
      toursP:"Halb- oder Ganztags, All-Inclusive oder Lite – jede Fahrt privat für eure Crew.",
      reviewsE:"Gästestimmen",
      reviewsH:"5,0 ★ – das sagen unsere Gäste",
      reviews:[
        ["★★★★★","„Traumhafter Tagesausflug auf der Coral 30. Das Boot ist top gepflegt, viel Platz und absolut sicher. Unser deutscher Skipper war genial – absolut empfehlenswert!“","Jakov K."],
        ["★★★★★","„Perfekter Tag auf dem Meer! Private Tour rüber nach Preko. Modern, super gepflegt und richtig Spaß. Der deutsche Skipper war klasse.“","Tengohan H."]
      ]
    },
    hr:{
      eyebrow:"Privatni izleti brodom iz Zadra",
      h1:"Vaš ekskluzivni dan na Jadranu",
      lead:"Privatni, obiteljski izleti brodom s njemačkim skiperom – do skrivenih uvala, pješčanih plaža i otoka oko Zadra. Bez masovnog turizma, samo vi i tirkizno more.",
      badges:["🇩🇪 Njemački skiper","👥 Do 8 osoba","★ 5,0 na Googleu","💶 All-Inclusive fiksna cijena"],
      cardTitle:"All-Inclusive cijeli dan",
      cardSub:"Scarani Coral 30 · do 8 os.",
      cardList:["Welcome drink i pića uključeni","Iskusni skiper (DE/EN)","Gorivo i čišćenje uključeni"],
      whyE:"Zašto Skipper Zadar",
      whyH:"Premium doživljaj umjesto masovnog turizma",
      whyP:"Zaboravite tijesne, mokre gumenjake i prepune izletničke brodove. Kod nas uživate u potpuno privatnom danu na luksuznom daycruiseru – uz osobnu pratnju vašeg skipera koji govori njemački.",
      feats:[
        ["🛥️","Luksuzni daycruiser","Velika ležaljka, kabina, pravi WC i platforma za kupanje za maksimalnu udobnost."],
        ["🗺️","Individualne rute","Vi birate: skrivene uvale, ronjenje ili slavna plaža Sakarun."],
        ["🥂","All-Inclusive","Welcome drink, hladna pića i osobna usluga – bez skrivenih troškova."],
        ["⚓","Jamstvo za vrijeme","Otkaže li se tura zbog vjetra ili kiše: 100 % povrat ili novi sunčani dan."]
      ],
      toursE:"Naše ture",
      toursH:"Odaberite svoju avanturu",
      toursP:"Pola dana ili cijeli dan, All-Inclusive ili Lite – svaka vožnja privatno za vašu posadu.",
      reviewsE:"Dojmovi gostiju",
      reviewsH:"5,0 ★ – što kažu naši gosti",
      reviews:[
        ["★★★★★","„Prekrasan cjelodnevni izlet na Coral 30. Brod je besprijekoran, puno prostora i potpuno siguran. Naš njemački skiper bio je sjajan – toplo preporučujem!“","Jakov K."],
        ["★★★★★","„Savršen dan na moru! Privatna tura do Preka. Moderno, dotjerano i jako zabavno. Njemački skiper bio je odličan.“","Tengohan H."]
      ]
    },
    en:{
      eyebrow:"Private boat tours from Zadar",
      h1:"Your exclusive day on the Adriatic",
      lead:"Private, family-friendly boat trips with a German-speaking skipper – to hidden bays, sandy beaches and islands around Zadar. No mass tourism, just you and the turquoise sea.",
      badges:["🇩🇪 German-speaking skipper","👥 Up to 8 guests","★ 5.0 on Google","💶 All-Inclusive fixed price"],
      cardTitle:"All-Inclusive full day",
      cardSub:"Scarani Coral 30 · up to 8",
      cardList:["Welcome drink & drinks included","Experienced skipper (DE/EN)","Fuel & cleaning included"],
      whyE:"Why Skipper Zadar",
      whyH:"A premium experience, not mass tourism",
      whyP:"Forget cramped, wet RIBs and crowded tour boats. With us you enjoy a completely private day on a luxurious day cruiser – with personal care from your German-speaking skipper.",
      feats:[
        ["🛥️","Luxury day cruiser","Large sun deck, cabin, a real on-board toilet and swim platform for maximum comfort."],
        ["🗺️","Custom routes","You help decide: hidden coves, snorkelling stops or the famous Sakarun beach."],
        ["🥂","All-Inclusive","Welcome drink, chilled drinks and personal service – with no hidden costs."],
        ["⚓","Weather guarantee","If the tour is cancelled due to wind or rain: 100% refund or a new sunny day."]
      ],
      toursE:"Our tours",
      toursH:"Choose your adventure",
      toursP:"Half or full day, All-Inclusive or Lite – every trip private for your crew.",
      reviewsE:"Guest voices",
      reviewsH:"5.0 ★ – what our guests say",
      reviews:[
        ["★★★★★","“A dream day trip on the Coral 30. The boat is immaculate, roomy and rock-solid. Our German skipper was brilliant – highly recommended!”","Jakov K."],
        ["★★★★★","“Perfect day at sea! A private tour over to Preko. Modern, spotless and great fun. The German skipper was fantastic.”","Tengohan H."]
      ]
    }
  });
  const featured = TOURS[0], island = TOURS.find(z=>z.id==="dugi-otok");
  const preview = TOURS.filter(z=>["tagestour-ai","halbtag-ai","tagestour-lite","dugi-otok"].includes(z.id));
  const body = `
  <section class="hero">
    <div class="container">
      <div>
        <span class="eyebrow">${x.eyebrow}</span>
        <h1>${x.h1}</h1>
        <p class="lead">${x.lead}</p>
        <div class="hero-badges">${x.badges.map(b=>`<span class="hero-badge">${b}</span>`).join("")}</div>
        <div class="hero-actions">
          <a class="btn btn-primary btn-lg" href="touren.html">${t.viewTours}</a>
          <a class="btn btn-wa btn-lg" href="${wa(l,waMsg[l])}" target="_blank" rel="noopener">${IC.wa} ${t.whatsapp}</a>
        </div>
      </div>
      <div class="hero-card">
        <h3>${x.cardTitle}</h3>
        <p style="color:#bfe9ee;margin:.2em 0 .6em">${x.cardSub}</p>
        <div class="price-big">${ctx.money(featured.price)}</div>
        <ul>${x.cardList.map(i=>`<li>${i}</li>`).join("")}</ul>
        <a class="btn btn-primary" style="margin-top:16px;width:100%;justify-content:center" href="buchung.html">${t.book}</a>
      </div>
    </div>
    <svg class="wave" viewBox="0 0 1440 90" preserveAspectRatio="none"><path fill="#f6f1e7" d="M0 40c240 40 480 40 720 20s480-40 720-20v50H0z"/></svg>
  </section>

  <section>
    <div class="container">
      <div style="text-align:center;max-width:720px;margin:0 auto 10px">
        <span class="eyebrow">${x.whyE}</span>
        <h2>${x.whyH}</h2>
        <p class="lead">${x.whyP}</p>
      </div>
      <div class="grid grid-2" style="margin-top:34px">
        ${x.feats.map(f=>`<div class="card"><div class="ic">${f[0]}</div><h3>${f[1]}</h3><p>${f[2]}</p></div>`).join("")}
      </div>
    </div>
  </section>

  <section class="section-sand">
    <div class="container">
      <div style="text-align:center;max-width:680px;margin:0 auto">
        <span class="eyebrow">${x.toursE}</span><h2>${x.toursH}</h2><p class="lead">${x.toursP}</p>
      </div>
      <div class="grid grid-2" style="margin-top:34px">
        ${preview.map(tr=>tourCard(l,tr)).join("")}
      </div>
      <div class="center" style="margin-top:30px"><a class="btn btn-outline btn-lg" href="touren.html">${t.allTours} →</a></div>
    </div>
  </section>

  <section>
    <div class="container">
      <div style="text-align:center;max-width:680px;margin:0 auto 30px">
        <span class="eyebrow">${x.reviewsE}</span><h2>${x.reviewsH}</h2>
      </div>
      <div class="grid grid-2">
        ${x.reviews.map(r=>`<div class="review"><div class="stars">${r[0]}</div><p>${r[1]}</p><span class="who">— ${r[2]}</span></div>`).join("")}
      </div>
    </div>
  </section>

  ${ctaBand(ctx)}`;
  return { title:x.h1, desc:x.lead.slice(0,155), body };
};

/* ---------------- TOUREN ---------------- */
exports.touren = (ctx) => {
  const { l, t, TOURS, tourCard } = ctx;
  const x = pick(l,{
    de:{h1:"Touren & Ausflüge",lead:"Alle Fahrten privat für eure Crew (bis 8 Personen) auf der Scarani Coral 30. All-Inclusive mit Getränken oder als günstige Lite-Variante.",
      g:{ai:"All-Inclusive Touren",lite:"Lite-Touren",island:"Insel-Abenteuer",charter:"Sonderfahrten & Charter"},
      incl:"Inklusive",hl:"Highlights"},
    hr:{h1:"Ture i izleti",lead:"Sve vožnje privatno za vašu posadu (do 8 osoba) na Scarani Coral 30. All-Inclusive s pićima ili kao povoljna Lite varijanta.",
      g:{ai:"All-Inclusive ture",lite:"Lite ture",island:"Otočna avantura",charter:"Posebne vožnje i charter"},
      incl:"Uključeno",hl:"Vrhunci"},
    en:{h1:"Tours & Trips",lead:"Every trip private for your crew (up to 8) on the Scarani Coral 30. All-Inclusive with drinks or as an affordable Lite version.",
      g:{ai:"All-Inclusive tours",lite:"Lite tours",island:"Island adventure",charter:"Special trips & charter"},
      incl:"Included",hl:"Highlights"}
  });
  const groups = ["ai","lite","island","charter"];
  const section = (g) => {
    const items = TOURS.filter(z=>z.group===g);
    if(!items.length) return "";
    return `<div style="margin-top:40px"><h2 style="margin-bottom:18px">${x.g[g]}</h2>
      <div class="grid grid-2">${items.map(tr=>{
        const d=tr[l];
        return `<div class="tour"><div class="tour-media"><span class="tour-tag${tr.gold?' gold':''}">${tr.tag[l]}</span><span class="emoji">${tr.emoji}</span></div>
          <div class="tour-body"><h3>${d.title}</h3>
          <div class="tour-meta">${tr.hrs?`<span>⏱️ ${tr.hrs} ${t.hours}</span>`:`<span>🧭 ${l==='de'?'flexibel':l==='hr'?'fleksibilno':'flexible'}</span>`}<span>👥 ${l==='de'?'bis':l==='hr'?'do':'up to'} ${ctx.BRAND.capacity}</span></div>
          <p>${d.teaser}</p>
          <details style="margin:6px 0 14px"><summary style="cursor:pointer;font-weight:700;color:var(--teal)">${x.incl} &amp; ${x.hl}</summary>
            <ul class="includes" style="margin:12px 0">${d.inc.map(i=>`<li>${i}</li>`).join("")}</ul>
            <ul class="includes" style="margin:12px 0">${d.hi.map(i=>`<li style="--x:1">✦ ${i}</li>`).join("")}</ul>
          </details>
          <div class="tour-foot">${tr.price?`<div class="tour-price">${ctx.money(tr.price)}<small>${t.perBoat}</small></div>`:`<div class="tour-price">${t.onRequest}<small>&nbsp;</small></div>`}
          <a class="btn btn-dark" href="${tr.slug==='dugi-otok'?'dugi-otok.html':'buchung.html'}">${tr.slug==='dugi-otok'?t.details:t.bookThis}</a></div>
        </div></div>`;
      }).join("")}</div></div>`;
  };
  const body = `
  <section class="page-hero"><div class="container">
    <div class="breadcrumb"><a href="index.html">${t.nav.index}</a> › ${x.h1}</div>
    <h1>${x.h1}</h1><p class="lead">${x.lead}</p>
  </div></section>
  <section><div class="container">
    ${groups.map(section).join("")}
  </div></section>
  ${ctaBand(ctx)}`;
  return { title:x.h1, desc:x.lead.slice(0,155), body };
};

/* ---------------- DUGI OTOK (Detailseite) ---------------- */
exports["dugi-otok"] = (ctx) => {
  const { l, t, TOURS, money } = ctx;
  const tr = TOURS.find(z=>z.id==="dugi-otok"); const d = tr[l];
  const x = pick(l,{
    de:{lead:"Der spektakulärste Ganztagesausflug ab Zadar – mit dem Komfort einer echten Yacht.",
      routeH:"Euer Tag – Stopp für Stopp",
      route:[
        ["Start & Meeresorgel","Entspannter Start in der Marina Zadar, vorbei an der berühmten Meeresorgel hinaus aufs glasklare Meer."],
        ["Schiffswrack „St. Michele“","Wir ankern über dem 1984 gesunkenen Schiff in nur 3–5 m Tiefe – Schnorchelausrüstung an Bord inklusive."],
        ["Golubinka-Meereshöhle","Wir schwimmen in die magische Höhle, in der das Licht spektakuläre Farben erzeugt. Klippenspringen für Mutige."],
        ["Das „Drachenauge“","Ein kreisrundes Felsenloch im Meer mit tiefblauem, glasklarem Wasser – perfekt für den nächsten Sprung."],
        ["Blaue Lagune Veli Žal","Anker im azurblauen Paradies – entspannen auf dem Bug oder durch karibisches Wasser zum Strand schwimmen."],
        ["Sakarun Sandstrand","Einer der schönsten Strände Kroatiens: weißer Sand, türkises Wasser, echtes Karibik-Feeling."],
        ["Leuchtturm Veli Rat & Mittagessen","Geschützte Bucht am höchsten Leuchtturm der Adria (42 m). Zeit für ein Inselrestaurant (exkl.) oder Strandfotos."],
        ["Geheime U-Boot-Bunker","Zum Abschluss fahren wir direkt in den gigantischen Militär-Felsentunnel aus dem Kalten Krieg."]
      ],
      bringH:"Bitte mitbringen",bring:"Badekleidung, Handtuch, Sonnenschutz, leichte Jacke für die Rückfahrt und etwas Bargeld fürs Mittagessen.",
      noteH:"Gut zu wissen",note:"Exklusive Kleingruppen-Tour auf einer echten Yacht – viel Platz und Schutz vor Spritzwasser. Ihr wollt den Tag komplett privat (Geburtstag, Junggesellenabschied)? Fragt einfach ein individuelles Angebot an."},
    hr:{lead:"Najspektakularniji cjelodnevni izlet iz Zadra – uz udobnost prave jahte.",
      routeH:"Vaš dan – stajalište po stajalište",
      route:[
        ["Polazak i Morske orgulje","Opušten polazak iz marine Zadar, pokraj slavnih Morskih orgulja na otvoreno, kristalno more."],
        ["Olupina „St. Michele“","Sidrimo iznad broda potonulog 1984. na samo 3–5 m dubine – oprema za ronjenje uključena."],
        ["Morska špilja Golubinka","Uplivavamo u čarobnu špilju gdje svjetlo stvara nevjerojatne boje. Skokovi s litica za hrabre."],
        ["„Zmajevo oko“","Kružna rupa u stijeni s tamnoplavim, bistrim morem – savršena za sljedeći skok."],
        ["Plava laguna Veli Žal","Sidro u azurnom raju – opuštanje na pramcu ili plivanje kroz karipsko more do plaže."],
        ["Plaža Sakarun","Jedna od najljepših plaža Hrvatske: bijeli pijesak, tirkizno more, pravi karipski ugođaj."],
        ["Svjetionik Veli Rat i ručak","Zaštićena uvala uz najviši svjetionik Jadrana (42 m). Vrijeme za otočni restoran (nije uključeno) ili fotografije."],
        ["Tajni podmornički bunkeri","Za kraj ulazimo brodom u golemi vojni tunel u stijeni iz doba Hladnog rata."]
      ],
      bringH:"Ponesite",bring:"Kupaći kostim, ručnik, zaštitu od sunca, laganu jaknu za povratak i nešto gotovine za ručak.",
      noteH:"Dobro je znati",note:"Ekskluzivna tura za male grupe na pravoj jahti – puno prostora i zaštita od prskanja. Želite dan potpuno privatno (rođendan, momačka večer)? Zatražite individualnu ponudu."},
    en:{lead:"The most spectacular full-day trip from Zadar – with the comfort of a real yacht.",
      routeH:"Your day – stop by stop",
      route:[
        ["Start & Sea Organ","A relaxed start from Marina Zadar, past the famous Sea Organ out to the crystal-clear open sea."],
        ["“St. Michele” shipwreck","We anchor over the ship that sank in 1984, just 3–5 m deep – snorkelling gear on board included."],
        ["Golubinka sea cave","We swim into the magical cave where the light creates spectacular colours. Cliff-jumping for the brave."],
        ["The “Dragon’s Eye”","A circular hole in the rock filled with deep-blue, crystal-clear water – perfect for the next jump."],
        ["Blue Lagoon Veli Žal","Anchor in an azure paradise – relax on the bow or swim through Caribbean water to the beach."],
        ["Sakarun sandy beach","One of Croatia’s finest beaches: white sand, turquoise water, a true Caribbean feel."],
        ["Veli Rat lighthouse & lunch","A sheltered bay by the Adriatic’s tallest lighthouse (42 m). Time for an island restaurant (excl.) or beach photos."],
        ["Secret submarine bunkers","To finish, we sail straight into the giant Cold-War military rock tunnel."]
      ],
      bringH:"Please bring",bring:"Swimwear, towel, sun protection, a light jacket for the way back and some cash for lunch.",
      noteH:"Good to know",note:"An exclusive small-group tour on a real yacht – lots of space and protection from spray. Want the day fully private (birthday, stag/hen party)? Just request a custom quote."}
  });
  const body = `
  <section class="page-hero"><div class="container">
    <div class="breadcrumb"><a href="index.html">${t.nav.index}</a> › <a href="touren.html">${t.nav.touren}</a> › Dugi Otok</div>
    <h1>${d.title}</h1><p class="lead">${x.lead}</p>
    <div class="hero-actions" style="margin-top:18px">
      <a class="btn btn-primary btn-lg" href="buchung.html">⚓ ${t.bookThis} · ${money(tr.price)}</a>
    </div>
  </div></section>
  <section><div class="container split narrow">
    <div class="prose" style="margin:0">
      <h2>${x.routeH}</h2>
      <ol class="itinerary">${x.route.map(s=>`<li><b>${s[0]}</b><br>${s[1]}</li>`).join("")}</ol>
    </div>
    <div>
      <div class="card" style="position:sticky;top:90px">
        <div class="tour-price" style="font-size:2rem">${money(tr.price)}<small>${t.perBoat}</small></div>
        <p style="color:var(--muted);margin:.4em 0 1em">⏱️ ${tr.hrs} ${t.hours} · 👥 ${l==='de'?'bis':l==='hr'?'do':'up to'} ${ctx.BRAND.capacity}</p>
        <h3 style="font-size:1.05rem">${t.included}</h3>
        <ul class="includes" style="margin:.6em 0 1.2em">${d.inc.map(i=>`<li>${i}</li>`).join("")}</ul>
        <a class="btn btn-primary" style="width:100%;justify-content:center" href="buchung.html">${t.book}</a>
        <a class="btn btn-wa" style="width:100%;justify-content:center;margin-top:10px" href="${ctx.wa(l,ctx.waMsg[l])}" target="_blank" rel="noopener">${ctx.IC.wa} ${t.whatsapp}</a>
      </div>
    </div>
  </div></section>
  <section class="section-sand"><div class="container grid grid-2">
    <div class="card"><div class="ic">🎒</div><h3>${x.bringH}</h3><p>${x.bring}</p></div>
    <div class="card"><div class="ic">ℹ️</div><h3>${x.noteH}</h3><p>${x.note}</p></div>
  </div></section>
  ${ctaBand(ctx)}`;
  return { title:d.title, desc:x.lead, body };
};

/* ---------------- DAS BOOT ---------------- */
exports.boot = (ctx) => {
  const { l, t } = ctx;
  const x = pick(l,{
    de:{h1:"Die Scarani Coral 30",lead:"Unser luxuriöser Daycruiser – gebaut für entspannte, komfortable Tage auf dem Meer.",
      specsH:"Ausstattung an Bord",
      specs:[["👥","Bis zu 8 Personen","Komplett privat für eure Crew"],["🛋️","Riesige Sonnenliege","Viel Platz zum Sonnenbaden & Entspannen"],["🚪","Gemütliche Kabine","Rückzugsort & Schatten unter Deck"],["🚻","Echte Bord-Toilette","Eigenes WC für maximalen Komfort"],["🏊","Große Badeplattform","Perfekter Ein- & Ausstieg ins türkise Wasser"],["🔊","Soundanlage","Eure Musik für den perfekten Tag"]],
      p1:"Die Scarani Coral 30 ist kein enges Schlauchboot, sondern ein echter Daycruiser mit Kabine, WC und großzügigen Liegeflächen. So genießt ihr auch längere Touren – etwa zum Sakarun-Strand auf Dugi Otok – entspannt und geschützt vor Spritzwasser.",
      p2:"Standard-Start ist um 09:00 Uhr in der Marina Zadar, flexible Zeiten nach Absprache mit eurem Skipper.",skipperH:"Euer Skipper",skipperP:"Erfahren, entspannt und deutschsprachig – euer Skipper kennt die schönsten Buchten und plant die Route ganz nach euren Wünschen."},
    hr:{h1:"Scarani Coral 30",lead:"Naš luksuzni daycruiser – stvoren za opuštene, udobne dane na moru.",
      specsH:"Oprema na brodu",
      specs:[["👥","Do 8 osoba","Potpuno privatno za vašu posadu"],["🛋️","Velika ležaljka za sunčanje","Puno prostora za sunčanje i opuštanje"],["🚪","Udobna kabina","Zaklon i hlad ispod palube"],["🚻","Pravi brodski WC","Vlastiti toalet za maksimalnu udobnost"],["🏊","Velika platforma za kupanje","Savršen ulaz i izlaz u tirkizno more"],["🔊","Ozvučenje","Vaša glazba za savršen dan"]],
      p1:"Scarani Coral 30 nije tijesni gumenjak, već pravi daycruiser s kabinom, WC-om i prostranim ležajevima. Tako i duže ture – npr. do plaže Sakarun na Dugom otoku – uživate opušteno i zaštićeni od prskanja.",
      p2:"Standardni polazak je u 09:00 iz marine Zadar, fleksibilni termini po dogovoru sa skiperom.",skipperH:"Vaš skiper",skipperP:"Iskusan, opušten i govori njemački – vaš skiper poznaje najljepše uvale i planira rutu prema vašim željama."},
    en:{h1:"The Scarani Coral 30",lead:"Our luxurious day cruiser – built for relaxed, comfortable days at sea.",
      specsH:"On-board features",
      specs:[["👥","Up to 8 guests","Completely private for your crew"],["🛋️","Huge sun deck","Plenty of room to sunbathe & relax"],["🚪","Cosy cabin","Retreat & shade below deck"],["🚻","Real on-board WC","Your own toilet for maximum comfort"],["🏊","Large swim platform","Perfect in & out of the turquoise water"],["🔊","Sound system","Your music for the perfect day"]],
      p1:"The Scarani Coral 30 is not a cramped RIB but a genuine day cruiser with a cabin, WC and generous sun beds. So even longer tours – such as to Sakarun beach on Dugi Otok – are enjoyed in comfort, sheltered from spray.",
      p2:"Standard departure is 9:00 am from Marina Zadar; flexible times by arrangement with your skipper.",skipperH:"Your skipper",skipperP:"Experienced, relaxed and German-speaking – your skipper knows the finest bays and plans the route entirely around your wishes."}
  });
  const body = `
  <section class="page-hero"><div class="container">
    <div class="breadcrumb"><a href="index.html">${t.nav.index}</a> › ${x.h1}</div>
    <h1>${x.h1}</h1><p class="lead">${x.lead}</p>
  </div></section>
  <section><div class="container split narrow">
    <div>
      <div class="photo-ph" style="aspect-ratio:4/3">📷 Foto: Scarani Coral 30<br>(hier euer Boot-Foto einfügen)</div>
    </div>
    <div>
      <p>${x.p1}</p><p>${x.p2}</p>
      <h3 style="margin-top:1em">${x.skipperH}</h3><p>${x.skipperP}</p>
    </div>
  </div></section>
  <section class="section-sand"><div class="container">
    <h2 class="center" style="margin-bottom:26px">${x.specsH}</h2>
    <div class="grid grid-3">
      ${x.specs.map(s=>`<div class="card"><div class="ic">${s[0]}</div><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join("")}
    </div>
  </div></section>
  ${ctaBand(ctx)}`;
  return { title:x.h1, desc:x.lead, body };
};

/* ---------------- PREISE ---------------- */
exports.preise = (ctx) => {
  const { l, t, TOURS, ADDONS, money } = ctx;
  const x = pick(l,{
    de:{h1:"Preise",lead:"Faire Festpreise pro Boot – ganz gleich, ob ihr zu zweit oder zu acht kommt. Keine versteckten Kosten.",
      toursH:"Touren (pro Boot / Crew)",addH:"Zusatzleistungen",
      noteH:"Anzahlungs- & Wetter-Garantie",note:"Eure Anzahlung sichert Boot & Skipper. Wird die Tour wegen Wind (Jugo/Bura) oder Regen abgesagt, erhaltet ihr 100 % zurück oder wir verschieben auf einen Sonnentag.",
      per:"pro Boot"},
    hr:{h1:"Cijene",lead:"Poštene fiksne cijene po brodu – bilo da vas je dvoje ili osmero. Bez skrivenih troškova.",
      toursH:"Ture (po brodu / posadi)",addH:"Dodatne usluge",
      noteH:"Jamstvo za predujam i vrijeme",note:"Vaš predujam osigurava brod i skipera. Otkaže li se tura zbog vjetra (Jugo/Bura) ili kiše, dobivate 100 % povrat ili pomak na sunčani dan.",
      per:"po brodu"},
    en:{h1:"Prices",lead:"Fair fixed prices per boat – whether there are two of you or eight. No hidden costs.",
      toursH:"Tours (per boat / crew)",addH:"Add-ons",
      noteH:"Deposit & weather guarantee",note:"Your deposit secures the boat & skipper. If the tour is cancelled due to wind (Jugo/Bura) or rain, you get 100% back or we move to a sunny day.",
      per:"per boat"}
  });
  const row = (tr) => {const d=tr[l];return `<div class="price-row"><div><div class="name">${d.title}</div><div class="desc">${tr.hrs?tr.hrs+' '+t.hours+' · ':''}${l==='de'?'bis':l==='hr'?'do':'up to'} ${ctx.BRAND.capacity} ${l==='de'?'Pers.':l==='hr'?'os.':'guests'}</div></div><div class="amt">${tr.price?money(tr.price):t.onRequest}</div></div>`;};
  const addRow = (a)=>`<div class="price-row"><div><div class="name">${a.emoji} ${a[l].n}</div><div class="desc">${a[l].d}</div></div><div class="amt">${money(a.price)}</div></div>`;
  const body = `
  <section class="page-hero"><div class="container">
    <div class="breadcrumb"><a href="index.html">${t.nav.index}</a> › ${x.h1}</div>
    <h1>${x.h1}</h1><p class="lead">${x.lead}</p>
  </div></section>
  <section><div class="container split narrow" style="align-items:start">
    <div class="price-wrap">
      <div class="price-head"><h3>${x.toursH}</h3></div>
      ${TOURS.map(row).join("")}
    </div>
    <div>
      <div class="price-wrap" style="margin-bottom:22px">
        <div class="price-head"><h3>${x.addH}</h3></div>
        ${ADDONS.map(addRow).join("")}
      </div>
      <div class="notice"><b>⚓ ${x.noteH}</b><br>${x.note}</div>
      <a class="btn btn-primary btn-lg" style="width:100%;justify-content:center;margin-top:18px" href="buchung.html">${t.book}</a>
    </div>
  </div></section>
  ${ctaBand(ctx)}`;
  return { title:x.h1, desc:x.lead, body };
};

/* ---------------- ÜBER UNS ---------------- */
exports["ueber-uns"] = (ctx) => {
  const { l, t, BRAND } = ctx;
  const x = pick(l,{
    de:{h1:"Über uns",lead:"Eine kleine, familiäre Bootsvermietung in Zadar – mit Herz, Erfahrung und Liebe zur Adria.",
      p:["Hinter Skipper Zadar & Boat Rent steht Andreas Fruhnert – ein deutscher Skipper mit einer klaren Mission: euch einen unvergesslichen, entspannten Tag auf dem Meer zu schenken, fernab vom Massentourismus.",
         "Statt großer, überfüllter Ausflugsschiffe bekommt ihr bei uns eine private Yacht, persönliche Betreuung und die Freiheit, den Tag nach euren Wünschen zu gestalten. Wir kennen die schönsten versteckten Buchten rund um Zadar, Ugljan, Ošljak und Dugi Otok.",
         "Deutsch- und englischsprachig, zuverlässig und mit einem 5,0-Sterne-Ruf auf Google – wir freuen uns darauf, euch an Bord zu begrüßen."],
      valsH:"Wofür wir stehen",
      vals:[["🤝","Persönlich","Kleine Gruppen, echter Service, keine anonyme Massenabfertigung."],["🌊","Ortskundig","Wir kennen die schönsten Buchten und die besten Zeiten."],["✅","Verlässlich","Faire Festpreise, Wetter-Garantie und 5,0 ★ auf Google."]]},
    hr:{h1:"O nama",lead:"Mali, obiteljski najam brodova u Zadru – sa srcem, iskustvom i ljubavlju prema Jadranu.",
      p:["Iza Skipper Zadar & Boat Rent stoji Andreas Fruhnert – njemački skiper s jasnom misijom: pokloniti vam nezaboravan, opušten dan na moru, daleko od masovnog turizma.",
         "Umjesto velikih, prepunih izletničkih brodova kod nas dobivate privatnu jahtu, osobnu pratnju i slobodu da dan oblikujete po svojoj želji. Poznajemo najljepše skrivene uvale oko Zadra, Ugljana, Ošljaka i Dugog otoka.",
         "Govorimo njemački i engleski, pouzdani smo i imamo reputaciju 5,0 zvjezdica na Googleu – veselimo se što ćemo vas ugostiti na brodu."],
      valsH:"Za što se zalažemo",
      vals:[["🤝","Osobno","Male grupe, prava usluga, bez anonimne masovne obrade."],["🌊","Poznajemo kraj","Znamo najljepše uvale i najbolja vremena."],["✅","Pouzdano","Poštene fiksne cijene, jamstvo za vrijeme i 5,0 ★ na Googleu."]]},
    en:{h1:"About us",lead:"A small, family-run boat rental in Zadar – with heart, experience and a love of the Adriatic.",
      p:["Behind Skipper Zadar & Boat Rent is Andreas Fruhnert – a German skipper with a clear mission: to give you an unforgettable, relaxed day at sea, far from mass tourism.",
         "Instead of large, crowded tour boats, with us you get a private yacht, personal care and the freedom to shape the day around your wishes. We know the finest hidden bays around Zadar, Ugljan, Ošljak and Dugi Otok.",
         "German- and English-speaking, reliable and with a 5.0-star reputation on Google – we look forward to welcoming you on board."],
      valsH:"What we stand for",
      vals:[["🤝","Personal","Small groups, real service, no anonymous mass handling."],["🌊","Local know-how","We know the finest bays and the best times."],["✅","Reliable","Fair fixed prices, a weather guarantee and 5.0 ★ on Google."]]}
  });
  const body = `
  <section class="page-hero"><div class="container">
    <div class="breadcrumb"><a href="index.html">${t.nav.index}</a> › ${x.h1}</div>
    <h1>${x.h1}</h1><p class="lead">${x.lead}</p>
  </div></section>
  <section><div class="container split narrow">
    <div>
      <div class="about-photo"><div class="ph">📷<br>${l==='de'?'Foto von Andreas / Boot':l==='hr'?'Fotografija Andreasa / broda':'Photo of Andreas / boat'}<br><small>(hier einfügen)</small></div></div>
    </div>
    <div>${x.p.map(pp=>`<p>${pp}</p>`).join("")}
      <div style="margin-top:10px"><a class="btn btn-primary" href="kontakt.html">${t.contactUs}</a></div>
    </div>
  </div></section>
  <section class="section-sand"><div class="container">
    <h2 class="center" style="margin-bottom:26px">${x.valsH}</h2>
    <div class="grid grid-3">${x.vals.map(v=>`<div class="card"><div class="ic">${v[0]}</div><h3>${v[1]}</h3><p>${v[2]}</p></div>`).join("")}</div>
  </div></section>
  ${ctaBand(ctx)}`;
  return { title:x.h1, desc:x.lead, body };
};

/* ---------------- KONTAKT ---------------- */
exports.kontakt = (ctx) => {
  const { l, t, BRAND, IC, wa, waMsg, mapEmbed } = ctx;
  const x = pick(l,{
    de:{h1:"Kontakt",lead:"Fragen oder Wunschtermin? Schreibt uns – am schnellsten per WhatsApp.",
      formH:"Anfrage senden",name:"Name",phone:"Telefon",topic:"Worum geht es?",date:"Wunschdatum",people:"Personen",msg:"Nachricht",send:"Anfrage per E-Mail senden",
      topics:["Ganztagestour","Halbtagestour","Insel-Abenteuer Dugi Otok","Individuelle Charter","Allgemeine Frage"],
      note:"Es öffnet sich euer E-Mail-Programm mit der vorbereiteten Anfrage.",
      infoH:"Direkt erreichen",baseH:"Unsere Basis"},
    hr:{h1:"Kontakt",lead:"Pitanja ili željeni termin? Pišite nam – najbrže putem WhatsAppa.",
      formH:"Pošalji upit",name:"Ime",phone:"Telefon",topic:"O čemu se radi?",date:"Željeni datum",people:"Osobe",msg:"Poruka",send:"Pošalji upit e-poštom",
      topics:["Cjelodnevna tura","Poludnevna tura","Otočna avantura Dugi otok","Individualni charter","Opće pitanje"],
      note:"Otvorit će se vaš program za e-poštu s pripremljenim upitom.",
      infoH:"Izravni kontakt",baseH:"Naša baza"},
    en:{h1:"Contact",lead:"Questions or a preferred date? Message us – fastest via WhatsApp.",
      formH:"Send a request",name:"Name",phone:"Phone",topic:"What is it about?",date:"Preferred date",people:"Guests",msg:"Message",send:"Send request by e-mail",
      topics:["Full-day tour","Half-day tour","Island adventure Dugi Otok","Bespoke charter","General question"],
      note:"Your e-mail app will open with the prepared request.",
      infoH:"Reach us directly",baseH:"Our base"}
  });
  const body = `
  <section class="page-hero"><div class="container">
    <div class="breadcrumb"><a href="index.html">${t.nav.index}</a> › ${x.h1}</div>
    <h1>${x.h1}</h1><p class="lead">${x.lead}</p>
  </div></section>
  <section><div class="container split" style="align-items:start">
    <form class="form" id="contactForm"
      data-mailto="${BRAND.email}" data-subject="Anfrage Website"
      data-l-name="${x.name}" data-l-phone="${x.phone}" data-l-topic="${x.topic}" data-l-date="${x.date}" data-l-people="${x.people}" data-l-msg="${x.msg}">
      <h3 style="margin-top:0">${x.formH}</h3>
      <label>${x.name}</label><input name="name" required>
      <label>E-Mail</label><input name="email" type="email" required>
      <label>${x.phone} / WhatsApp</label><input name="phone">
      <label>${x.topic}</label>
      <select name="topic">${x.topics.map(o=>`<option>${o}</option>`).join("")}</select>
      <div class="split" style="gap:16px">
        <div><label>${x.date}</label><input name="date" type="date"></div>
        <div><label>${x.people}</label><input name="people" type="number" min="1" max="8" value="2"></div>
      </div>
      <label>${x.msg}</label><textarea name="message"></textarea>
      <button class="btn btn-primary btn-lg" style="margin-top:16px;width:100%;justify-content:center" type="submit">${x.send}</button>
      <p id="formNote" class="notice" style="display:none;margin-top:14px">${x.note}</p>
    </form>
    <div>
      <h3>${x.infoH}</h3>
      <div class="contact-info">
        <a class="contact-item" href="${wa(l,waMsg[l])}" target="_blank" rel="noopener"><span class="ic">${IC.wa}</span><span><b>WhatsApp</b>${BRAND.phoneIntl}</span></a>
        <a class="contact-item" href="tel:${BRAND.tel}"><span class="ic">${IC.phone}</span><span><b>${t.callNow}</b>${BRAND.phoneIntl}</span></a>
        <a class="contact-item" href="mailto:${BRAND.email}"><span class="ic">${IC.mail}</span><span><b>E-Mail</b>${BRAND.email}</span></a>
        <a class="contact-item" href="${BRAND.instagram}" target="_blank" rel="noopener"><span class="ic">${IC.insta}</span><span><b>Instagram</b>${BRAND.instaHandle}</span></a>
        <div class="contact-item"><span class="ic">${IC.pin}</span><span><b>${x.baseH}</b>${BRAND.addr}</span></div>
        <div class="contact-item"><span class="ic">${IC.clock}</span><span><b>${t.hoursH}</b>${t.hoursV}</span></div>
      </div>
      <div class="map-embed" style="margin-top:18px"><iframe src="${mapEmbed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Zadar"></iframe></div>
    </div>
  </div></section>`;
  return { title:x.h1, desc:x.lead, body };
};

/* ---------------- BUCHUNG ---------------- */
exports.buchung = (ctx) => {
  const { l, t, BRAND, IC, wa, waMsg } = ctx;
  const x = pick(l,{
    de:{h1:"Jetzt buchen",lead:"In wenigen Klicks zum Wunschtermin – wählt Datum, Uhrzeit und Tour direkt in unserem Online-Buchungssystem.",
      steps:[["1","Tour wählen","All-Inclusive, Lite oder Insel-Abenteuer – ihr entscheidet."],["2","Termin sichern","Datum & Uhrzeit im Buchungssystem auswählen."],["3","Ablegen","Euer Skipper bestätigt und bereitet alles vor."]],
      onlineH:"Online buchen",onlineP:"Öffnet unser sicheres Buchungssystem (Shore). Anzahlung sichert Boot & Skipper – bei Schlechtwetter 100 % zurück oder neuer Termin.",
      openBtn:"Zum Buchungssystem",altH:"Lieber persönlich?",altP:"Schreibt uns per WhatsApp oder ruft an – wir finden euren Wunschtermin."},
    hr:{h1:"Rezerviraj",lead:"Do željenog termina u nekoliko klikova – odaberite datum, vrijeme i turu izravno u našem online sustavu.",
      steps:[["1","Odaberi turu","All-Inclusive, Lite ili otočna avantura – vi odlučujete."],["2","Osiguraj termin","Odaberite datum i vrijeme u sustavu za rezervacije."],["3","Isplovi","Vaš skiper potvrđuje i sve priprema."]],
      onlineH:"Rezerviraj online",onlineP:"Otvara naš siguran sustav (Shore). Predujam osigurava brod i skipera – po lošem vremenu 100 % povrat ili novi termin.",
      openBtn:"Na sustav za rezervacije",altH:"Radije osobno?",altP:"Pišite nam na WhatsApp ili nazovite – naći ćemo vaš termin."},
    en:{h1:"Book now",lead:"Your preferred date in a few clicks – pick date, time and tour directly in our online booking system.",
      steps:[["1","Choose a tour","All-Inclusive, Lite or island adventure – you decide."],["2","Secure a date","Select date & time in the booking system."],["3","Set sail","Your skipper confirms and prepares everything."]],
      onlineH:"Book online",onlineP:"Opens our secure booking system (Shore). A deposit secures the boat & skipper – in bad weather 100% back or a new date.",
      openBtn:"Go to booking system",altH:"Prefer a personal touch?",altP:"Message us on WhatsApp or call – we’ll find your date."}
  });
  const body = `
  <section class="page-hero"><div class="container">
    <div class="breadcrumb"><a href="index.html">${t.nav.index}</a> › ${x.h1}</div>
    <h1>${x.h1}</h1><p class="lead">${x.lead}</p>
  </div></section>
  <section><div class="container">
    <div class="grid grid-3">${x.steps.map(s=>`<div class="card"><div class="ic">${s[0]}</div><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join("")}</div>
    <div class="split narrow" style="margin-top:40px;align-items:center">
      <div class="card" style="text-align:center;padding:36px">
        <div style="font-size:2.6rem">⚓</div>
        <h3>${x.onlineH}</h3><p style="color:var(--muted)">${x.onlineP}</p>
        <a class="btn btn-primary btn-lg" href="${BRAND.booking}" target="_blank" rel="noopener">${x.openBtn} →</a>
      </div>
      <div class="card" style="padding:36px">
        <h3>${x.altH}</h3><p style="color:var(--muted)">${x.altP}</p>
        <a class="btn btn-wa" style="width:100%;justify-content:center;margin-bottom:10px" href="${wa(l,waMsg[l])}" target="_blank" rel="noopener">${IC.wa} ${t.whatsapp}</a>
        <a class="btn btn-dark" style="width:100%;justify-content:center" href="tel:${BRAND.tel}">${IC.phone} ${BRAND.phoneIntl}</a>
      </div>
    </div>
  </div></section>`;
  return { title:x.h1, desc:x.lead, body };
};

/* ---------------- PARTNER ---------------- */
exports.partner = (ctx) => {
  const { l, t, PARTNERS } = ctx;
  const x = pick(l,{
    de:{ h1:"Partner & Empfehlungen",
      lead:"Unsere persönlichen Empfehlungen rund um deinen Aufenthalt in Zadar – schöne Unterkünfte und die Seefahrtschule fürs Küstenpatent. Sag gern, dass du über uns kommst!",
      apartH:"Übernachten in Zadar", schoolH:"Küstenpatent machen",
      website:"Zur Website", reviews:"Bewertungen" },
    hr:{ h1:"Partneri i preporuke",
      lead:"Naše osobne preporuke za vaš boravak u Zadru – lijepi smještaji i škola za voditelja brodice. Slobodno recite da dolazite preko nas!",
      apartH:"Smještaj u Zadru", schoolH:"Ispit za voditelja brodice",
      website:"Na web stranicu", reviews:"recenzije" },
    en:{ h1:"Partners & Recommendations",
      lead:"Our personal recommendations for your stay in Zadar – lovely places to stay and the sailing school for your skipper licence. Feel free to mention you came through us!",
      apartH:"Where to stay in Zadar", schoolH:"Get your skipper licence",
      website:"Visit website", reviews:"reviews" }
  });
  const card = (p) => {
    const d = p[l];
    const tel = p.phone ? p.phone.replace(/\s/g,'') : '';
    return `<article class="card" style="display:flex;flex-direction:column">
      <div style="display:flex;gap:14px;align-items:center;margin-bottom:10px">
        <span class="ic" style="font-size:1.7rem">${p.emoji}</span>
        <div><h3 style="margin:0 0 2px">${p.name}</h3><span style="color:var(--teal);font-weight:700;font-size:.82rem;text-transform:uppercase;letter-spacing:.04em">${d.type}</span></div>
      </div>
      ${p.rating?`<div class="stars">★★★★★ <span style="color:var(--muted);font-weight:600;font-size:.84rem">${p.rating} · ${p.reviews} ${x.reviews}</span></div>`:''}
      <p style="color:var(--muted)">${d.d}</p>
      ${(p.addr||p.phone)?`<div style="color:var(--muted);font-size:.88rem;margin:0 0 16px;line-height:1.8">
        ${p.addr?`📍 ${p.addr}<br>`:''}${p.phone?`📞 <a href="tel:${tel}">${p.phone}</a>`:''}</div>`:''}
      <a class="btn btn-dark" style="margin-top:auto;align-self:flex-start" href="${p.url}" target="_blank" rel="noopener">${x.website} →</a>
    </article>`;
  };
  const body = `
  <section class="page-hero"><div class="container">
    <div class="breadcrumb"><a href="index.html">${t.nav.index}</a> › ${x.h1}</div>
    <h1>${x.h1}</h1><p class="lead">${x.lead}</p>
  </div></section>
  <section><div class="container">
    <h2 style="margin-bottom:22px">🏝️ ${x.apartH}</h2>
    <div class="grid grid-2">${PARTNERS.apartments.map(card).join("")}</div>
  </div></section>
  <section class="section-sand"><div class="container">
    <h2 style="margin-bottom:22px">⚓ ${x.schoolH}</h2>
    <div class="grid grid-2">${PARTNERS.school.map(card).join("")}</div>
  </div></section>
  ${ctaBand(ctx)}`;
  return { title:x.h1, desc:x.lead.slice(0,155), body };
};

/* ---------------- LEGAL: gemeinsame Hilfe ---------------- */
function legalShell(ctx, h1, lead, inner){
  const { t } = ctx;
  return { title:h1, desc:lead, body:`
  <section class="page-hero"><div class="container">
    <div class="breadcrumb"><a href="index.html">${t.nav.index}</a> › ${h1}</div>
    <h1>${h1}</h1><p class="lead">${lead}</p>
  </div></section>
  <section><div class="container"><div class="prose">${inner}
    <div class="notice" style="margin-top:26px">${pick(ctx.l,{de:"⚠️ Dieser Rechtstext ist ein unverbindlicher Entwurf und ersetzt keine Rechtsberatung. Bitte vor Veröffentlichung von einer fachkundigen Person prüfen und die mit „[…]“ markierten Angaben ergänzen.",hr:"⚠️ Ovaj pravni tekst je neobvezujući nacrt i ne zamjenjuje pravni savjet. Prije objave neka ga provjeri stručna osoba i dopunite podatke označene s „[…]“.",en:"⚠️ This legal text is a non-binding draft and does not replace legal advice. Please have it reviewed by a professional before publishing and complete the fields marked “[…]”."})}</div>
  </div></div></section>`};
}

/* ---------------- IMPRESSUM ---------------- */
exports.impressum = (ctx) => {
  const { l, BRAND } = ctx;
  const x = pick(l,{
    de:{h1:"Impressum",lead:"Angaben gemäß gesetzlicher Informationspflicht.",
      inner:`<h3>Anbieter</h3><p>${BRAND.name}<br>Inhaber: ${BRAND.owner}<br>${BRAND.addr}<br>Kroatien</p>
      <h3>Kontakt</h3><p>Telefon: ${BRAND.phoneIntl}<br>E-Mail: ${BRAND.email}</p>
      <h3>Unternehmensangaben</h3><p>OIB / USt-IdNr.: [bitte ergänzen]<br>Registereintrag: [bitte ergänzen]<br>Zuständige Aufsichtsbehörde: [bitte ergänzen]</p>
      <h3>Verantwortlich für den Inhalt</h3><p>${BRAND.owner}, Anschrift wie oben.</p>
      <h3>Haftung für Inhalte & Links</h3><p>Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität wird keine Gewähr übernommen. Für Inhalte externer Links sind ausschließlich deren Betreiber verantwortlich.</p>`},
    hr:{h1:"Impressum",lead:"Podaci sukladno zakonskoj obvezi informiranja.",
      inner:`<h3>Pružatelj usluge</h3><p>${BRAND.name}<br>Vlasnik: ${BRAND.owner}<br>${BRAND.addr}<br>Hrvatska</p>
      <h3>Kontakt</h3><p>Telefon: ${BRAND.phoneIntl}<br>E-pošta: ${BRAND.email}</p>
      <h3>Podaci o tvrtki</h3><p>OIB / PDV ID: [dopuniti]<br>Upis u registar: [dopuniti]<br>Nadležno nadzorno tijelo: [dopuniti]</p>
      <h3>Odgovoran za sadržaj</h3><p>${BRAND.owner}, adresa kao gore.</p>
      <h3>Odgovornost za sadržaj i poveznice</h3><p>Sadržaj je izrađen s najvećom pažnjom. Ne jamčimo za točnost, potpunost i ažurnost. Za sadržaj vanjskih poveznica odgovorni su isključivo njihovi operateri.</p>`},
    en:{h1:"Imprint",lead:"Information pursuant to legal disclosure requirements.",
      inner:`<h3>Provider</h3><p>${BRAND.name}<br>Owner: ${BRAND.owner}<br>${BRAND.addr}<br>Croatia</p>
      <h3>Contact</h3><p>Phone: ${BRAND.phoneIntl}<br>E-mail: ${BRAND.email}</p>
      <h3>Company details</h3><p>OIB / VAT ID: [to be added]<br>Register entry: [to be added]<br>Competent supervisory authority: [to be added]</p>
      <h3>Responsible for content</h3><p>${BRAND.owner}, address as above.</p>
      <h3>Liability for content & links</h3><p>The content of these pages was created with the greatest care. No guarantee is given for accuracy, completeness or timeliness. The operators of external links are solely responsible for their content.</p>`}
  });
  return legalShell(ctx, x.h1, x.lead, x.inner);
};

/* ---------------- DATENSCHUTZ ---------------- */
exports.datenschutz = (ctx) => {
  const { l, BRAND } = ctx;
  const x = pick(l,{
    de:{h1:"Datenschutzerklärung",lead:"Wie wir mit euren Daten umgehen.",
      inner:`<h3>Verantwortlicher</h3><p>${BRAND.name}, ${BRAND.owner}, ${BRAND.addr}, E-Mail: ${BRAND.email}.</p>
      <h3>Kontaktaufnahme</h3><p>Das Kontaktformular öffnet euer eigenes E-Mail-Programm (mailto). Es werden dabei keine Daten auf dieser Website gespeichert. Bei einer Anfrage per E-Mail, Telefon oder WhatsApp verarbeiten wir eure Angaben ausschließlich zur Bearbeitung der Anfrage (Art. 6 Abs. 1 lit. b DSGVO).</p>
      <h3>Google Maps</h3><p>Zur Anzeige unseres Standorts binden wir eine Karte von Google ein. Dabei kann eure IP-Adresse an Google übertragen werden. Anbieter: Google Ireland Ltd. Weitere Infos: policies.google.com/privacy.</p>
      <h3>Online-Buchung (Shore)</h3><p>Buchungen erfolgen über den Dienstleister Shore (connect.shore.com). Dort gelten die Datenschutzbestimmungen von Shore.</p>
      <h3>Hosting & Server-Logs</h3><p>Beim Aufruf der Website kann der Hoster technisch notwendige Daten (z. B. IP-Adresse, Zeitpunkt) verarbeiten. Hosting-Anbieter: [bitte ergänzen].</p>
      <h3>Eure Rechte</h3><p>Ihr habt das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch sowie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde.</p>`},
    hr:{h1:"Izjava o privatnosti",lead:"Kako postupamo s vašim podacima.",
      inner:`<h3>Voditelj obrade</h3><p>${BRAND.name}, ${BRAND.owner}, ${BRAND.addr}, e-pošta: ${BRAND.email}.</p>
      <h3>Kontakt</h3><p>Kontakt obrazac otvara vaš vlastiti program za e-poštu (mailto). Pritom se na ovoj stranici ne pohranjuju podaci. Kod upita e-poštom, telefonom ili WhatsAppom vaše podatke obrađujemo isključivo radi obrade upita (čl. 6. st. 1. t. b GDPR).</p>
      <h3>Google Maps</h3><p>Za prikaz lokacije ugrađujemo Google kartu. Pritom se vaša IP adresa može prenijeti Googleu. Pružatelj: Google Ireland Ltd. Više: policies.google.com/privacy.</p>
      <h3>Online rezervacija (Shore)</h3><p>Rezervacije se odvijaju putem usluge Shore (connect.shore.com), gdje vrijede njihova pravila privatnosti.</p>
      <h3>Hosting i zapisi poslužitelja</h3><p>Pri posjetu stranice hosting može obrađivati tehnički nužne podatke (npr. IP adresu, vrijeme). Pružatelj hostinga: [dopuniti].</p>
      <h3>Vaša prava</h3><p>Imate pravo na pristup, ispravak, brisanje, ograničenje, prenosivost i prigovor te pravo na pritužbu nadzornom tijelu.</p>`},
    en:{h1:"Privacy Policy",lead:"How we handle your data.",
      inner:`<h3>Controller</h3><p>${BRAND.name}, ${BRAND.owner}, ${BRAND.addr}, e-mail: ${BRAND.email}.</p>
      <h3>Contact</h3><p>The contact form opens your own e-mail program (mailto). No data is stored on this website in the process. When you contact us by e-mail, phone or WhatsApp, we process your details solely to handle your request (Art. 6(1)(b) GDPR).</p>
      <h3>Google Maps</h3><p>To show our location we embed a Google map. Your IP address may be transmitted to Google. Provider: Google Ireland Ltd. More: policies.google.com/privacy.</p>
      <h3>Online booking (Shore)</h3><p>Bookings are handled via the service Shore (connect.shore.com), where Shore’s privacy terms apply.</p>
      <h3>Hosting & server logs</h3><p>When you visit the site the host may process technically necessary data (e.g. IP address, timestamp). Hosting provider: [to be added].</p>
      <h3>Your rights</h3><p>You have the right to access, rectification, erasure, restriction, data portability and objection, as well as the right to lodge a complaint with the supervisory authority.</p>`}
  });
  return legalShell(ctx, x.h1, x.lead, x.inner);
};

/* ---------------- AGB ---------------- */
exports.agb = (ctx) => {
  const { l } = ctx;
  const x = pick(l,{
    de:{h1:"AGB",lead:"Allgemeine Geschäftsbedingungen für Bootstouren & Vermietung.",
      inner:`<h3>1. Geltungsbereich</h3><p>Diese Bedingungen gelten für alle Buchungen von Bootstouren und Charterleistungen bei ${ctx.BRAND.name}.</p>
      <h3>2. Buchung & Anzahlung</h3><p>Die Buchung wird mit Bestätigung verbindlich. Eine Anzahlung sichert Boot und Skipper für den vereinbarten Termin.</p>
      <h3>3. Wetter & Sicherheit</h3><p>Sicherheit geht vor. Muss eine Tour wegen Wind (Jugo/Bura) oder Regen abgesagt werden, wird die Anzahlung zu 100 % erstattet oder die Tour auf einen anderen Tag verschoben.</p>
      <h3>4. Stornierung</h3><p>Stornobedingungen bei Rücktritt durch den Gast: [bitte ergänzen, z. B. Fristen].</p>
      <h3>5. Personenzahl & Verhalten an Bord</h3><p>Die maximale Personenzahl (bis zu 8) darf nicht überschritten werden. Den Anweisungen des Skippers ist aus Sicherheitsgründen Folge zu leisten.</p>
      <h3>6. Haftung</h3><p>Die Teilnahme erfolgt auf eigene Verantwortung im Rahmen der gesetzlichen Bestimmungen. Für mitgebrachte Gegenstände wird keine Haftung übernommen.</p>
      <h3>7. Preise & Leistungen</h3><p>Es gelten die zum Buchungszeitpunkt angegebenen Festpreise pro Boot. Zusatzleistungen werden gesondert berechnet.</p>`},
    hr:{h1:"Uvjeti poslovanja",lead:"Opći uvjeti za izlete brodom i najam.",
      inner:`<h3>1. Područje primjene</h3><p>Ovi uvjeti vrijede za sve rezervacije izleta brodom i charter usluga kod ${ctx.BRAND.name}.</p>
      <h3>2. Rezervacija i predujam</h3><p>Rezervacija postaje obvezujuća potvrdom. Predujam osigurava brod i skipera za dogovoreni termin.</p>
      <h3>3. Vrijeme i sigurnost</h3><p>Sigurnost je na prvom mjestu. Ako se tura mora otkazati zbog vjetra (Jugo/Bura) ili kiše, predujam se vraća 100 % ili se tura pomiče na drugi dan.</p>
      <h3>4. Otkazivanje</h3><p>Uvjeti otkazivanja od strane gosta: [dopuniti, npr. rokovi].</p>
      <h3>5. Broj osoba i ponašanje na brodu</h3><p>Najveći broj osoba (do 8) ne smije se premašiti. Iz sigurnosnih razloga potrebno je slijediti upute skipera.</p>
      <h3>6. Odgovornost</h3><p>Sudjelovanje je na vlastitu odgovornost u okviru zakonskih propisa. Za donesene stvari ne preuzimamo odgovornost.</p>
      <h3>7. Cijene i usluge</h3><p>Vrijede fiksne cijene po brodu navedene u trenutku rezervacije. Dodatne usluge naplaćuju se zasebno.</p>`},
    en:{h1:"Terms & Conditions",lead:"General terms for boat tours & rental.",
      inner:`<h3>1. Scope</h3><p>These terms apply to all bookings of boat tours and charter services with ${ctx.BRAND.name}.</p>
      <h3>2. Booking & deposit</h3><p>A booking becomes binding upon confirmation. A deposit secures the boat and skipper for the agreed date.</p>
      <h3>3. Weather & safety</h3><p>Safety comes first. If a tour must be cancelled due to wind (Jugo/Bura) or rain, the deposit is refunded 100% or the tour is moved to another day.</p>
      <h3>4. Cancellation</h3><p>Cancellation terms for guest withdrawal: [to be added, e.g. deadlines].</p>
      <h3>5. Number of guests & conduct on board</h3><p>The maximum number of guests (up to 8) must not be exceeded. The skipper’s instructions must be followed for safety reasons.</p>
      <h3>6. Liability</h3><p>Participation is at your own responsibility within the legal framework. No liability is accepted for personal belongings.</p>
      <h3>7. Prices & services</h3><p>The fixed per-boat prices stated at the time of booking apply. Add-ons are charged separately.</p>`}
  });
  return legalShell(ctx, x.h1, x.lead, x.inner);
};
