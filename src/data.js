// ============================================================
//  Skipper Zadar & Boat Rent — Inhaltsdaten (DE / HR / EN)
// ============================================================

const BRAND = {
  name: "Skipper Zadar & Boat Rent",
  owner: "Andreas Fruhnert",
  logo: "../assets/logo-full.jpeg",           // Header/Footer: volles Original-Logo (inkl. „Skipper & Home Care")
  logoMark: "../assets/logo-mark.png",        // Kompakte Bildmarke (Favicon): Boot + Skipper
  logoNoHomecare: "../assets/logo-no-homecare.jpeg", // Volles Logo ohne „Home Care" (Alternative)
  phoneDisplay: "099 780 6063",
  phoneIntl: "+385 99 780 6063",
  tel: "+385997806063",
  wa: "385997806063",
  email: "fruhnert.service.zadar@gmail.com",
  addr: "Ul. Ante Trumbića 26, 23000 Zadar",
  city: "Zadar, Kroatien",
  booking: "https://connect.shore.com/bookings/skipper-zadar-boat-rent-fruhnert-deutsch/services",
  instagram: "https://www.instagram.com/fruhnert_zadar",
  instaHandle: "@fruhnert_zadar",
  domain: "", // z.B. "www.skipper-zadar.com" – wenn gesetzt, wird beim Build eine CNAME-Datei erzeugt (Custom Domain)
  // Fotos: Dateien in assets/ legen und Pfad eintragen (z.B. "../assets/boot-1.jpg"). Leer = markenfarbenes Panel.
  images: {
    boat:     "../assets/boat-main.jpg", // Hauptfoto Boot (Seite „Das Boot")
    boatDeck: "../assets/boat-2.jpg",    // zweites Boot-Foto – Seite „Das Boot"
    owner:    "../assets/about-neutral.jpg", // Über uns: neutrales Zadar-Motiv (Platzhalter, bis echtes Foto von Andreas da ist)
    night:    "", // Zadar-Hafen bei Nacht / beleuchtete Brücke (Startseite-Highlight) – noch offen
    // Impressionen-Galerie auf der Startseite
    gallery: [
      "../assets/gallery-1.jpg", // Bug / Insel
      "../assets/gallery-2.jpg", // Baden
      "../assets/gallery-3.jpg", // Zadar (goldene Stunde)
      "../assets/gallery-4.jpg", // Champagner an Bord
      "../assets/gallery-5.jpg", // Boot in der Marina
      "../assets/gallery-6.jpg"  // Gäste an Bord
    ]
  },
  lat: 44.0664081,
  lng: 15.2702796,
  boat: "Scarani Coral 30",
  capacity: 8,
  rating: "5,0",
  reviews: 2
};

// Reihenfolge & Dateinamen der Seiten
const PAGES = ["index","touren","dugi-otok","boot","preise","ueber-uns","partner","kontakt","buchung","impressum","datenschutz","agb"];

const LANGS = ["de","hr","en"];
const LANG_LABEL = { de:"DE", hr:"HR", en:"EN" };
const HTML_LANG  = { de:"de", hr:"hr", en:"en" };

// ---------- UI / Navigation / Footer ----------
const UI = {
  de:{
    nav:{ index:"Start", touren:"Touren", boot:"Das Boot", preise:"Preise", "ueber-uns":"Über uns", partner:"Partner", kontakt:"Kontakt" },
    book:"Jetzt buchen", whatsapp:"WhatsApp", callNow:"Anrufen", viewTours:"Touren ansehen",
    requestOffer:"Angebot anfragen", contactUs:"Kontakt aufnehmen", allTours:"Alle Touren & Preise",
    from:"ab", perBoat:"pro Boot / Crew", hours:"Std.", included:"Inklusive", highlights:"Highlights",
    details:"Details & Buchung", bookThis:"Diese Tour buchen", onRequest:"auf Anfrage",
    footTagline:"Private Bootstouren & Bootsvermietung mit deutschem Skipper ab Zadar.",
    quick:"Schnellzugriff", legal:"Rechtliches", contactH:"Kontakt",
    hoursH:"Erreichbarkeit", hoursV:"Täglich · nach Vereinbarung", rights:"Alle Rechte vorbehalten.",
    imprint:"Impressum", privacy:"Datenschutz", terms:"AGB",
    disclaimer:"Hinweis: Diese Website ist ein Entwurf. Bilder teils Platzhalter – bitte durch eigene Fotos ersetzen."
  },
  hr:{
    nav:{ index:"Početna", touren:"Ture", boot:"Brod", preise:"Cijene", "ueber-uns":"O nama", partner:"Partneri", kontakt:"Kontakt" },
    book:"Rezerviraj", whatsapp:"WhatsApp", callNow:"Nazovi", viewTours:"Pogledaj ture",
    requestOffer:"Zatraži ponudu", contactUs:"Kontaktirajte nas", allTours:"Sve ture i cijene",
    from:"od", perBoat:"po brodu / posadi", hours:"h", included:"Uključeno", highlights:"Vrhunci",
    details:"Detalji i rezervacija", bookThis:"Rezerviraj ovu turu", onRequest:"na upit",
    footTagline:"Privatni izleti brodom i najam broda s njemačkim skiperom iz Zadra.",
    quick:"Brzi izbornik", legal:"Pravno", contactH:"Kontakt",
    hoursH:"Dostupnost", hoursV:"Svaki dan · po dogovoru", rights:"Sva prava pridržana.",
    imprint:"Impressum", privacy:"Privatnost", terms:"Uvjeti",
    disclaimer:"Napomena: Ova stranica je nacrt. Dio slika su rezervirana mjesta – zamijenite vlastitim fotografijama."
  },
  en:{
    nav:{ index:"Home", touren:"Tours", boot:"The Boat", preise:"Prices", "ueber-uns":"About", partner:"Partners", kontakt:"Contact" },
    book:"Book now", whatsapp:"WhatsApp", callNow:"Call us", viewTours:"View tours",
    requestOffer:"Request a quote", contactUs:"Get in touch", allTours:"All tours & prices",
    from:"from", perBoat:"per boat / crew", hours:"hrs", included:"Included", highlights:"Highlights",
    details:"Details & booking", bookThis:"Book this tour", onRequest:"on request",
    footTagline:"Private boat tours & boat rental with a German-speaking skipper from Zadar.",
    quick:"Quick links", legal:"Legal", contactH:"Contact",
    hoursH:"Availability", hoursV:"Daily · by arrangement", rights:"All rights reserved.",
    imprint:"Imprint", privacy:"Privacy", terms:"Terms",
    disclaimer:"Note: This website is a draft. Some images are placeholders – please replace with your own photos."
  }
};

// ---------- Touren ----------
// group: ai = All-Inclusive, lite = Lite, island = Insel, charter = Charter
const TOURS = [
  {
    id:"tagestour-ai", slug:"touren", group:"ai", emoji:"🛥️", hrs:8, price:"850",
    tag:{de:"Bestseller",hr:"Najprodavanije",en:"Bestseller"}, gold:true,
    de:{ title:"Exklusive Ganztagestour – All-Inclusive",
      teaser:"Privater Ganztag auf der Scarani Coral 30 – nur eure Crew, versteckte Buchten rund um Zadar & Ugljan, Welcome-Drink und Getränke inklusive.",
      inc:["Welcome-Drink: hausgemachter Limoncello oder Champagner 🥂","3 gekühlte kroatische Biere p. P. + Softdrinks & Säfte nach Wunsch","Erfahrener Skipper (Deutsch/Englisch)","Treibstoff für Standardrouten (Zadar / Ugljan)","Endreinigung – keine versteckten Kosten"],
      hi:["Bis zu 8 Personen, komplett privat","Große Sonnenliege, Kabine, Bord-WC & Badeplattform","Start 09:00 Uhr Marina Zadar (flexibel)"] },
    hr:{ title:"Ekskluzivna cjelodnevna tura – All-Inclusive",
      teaser:"Privatni cijeli dan na Scarani Coral 30 – samo vaša posada, skrivene uvale oko Zadra i Ugljana, welcome drink i pića uključeni.",
      inc:["Welcome drink: domaći limoncello ili šampanjac 🥂","3 hladna hrvatska piva po osobi + sokovi po želji","Iskusni skiper (njemački/engleski)","Gorivo za standardne rute (Zadar / Ugljan)","Završno čišćenje – bez skrivenih troškova"],
      hi:["Do 8 osoba, potpuno privatno","Velika ležaljka za sunčanje, kabina, WC i platforma za kupanje","Polazak 09:00 marina Zadar (fleksibilno)"] },
    en:{ title:"Exclusive Full-Day Tour – All-Inclusive",
      teaser:"A private full day on the Scarani Coral 30 – just your crew, hidden bays around Zadar & Ugljan, welcome drink and drinks included.",
      inc:["Welcome drink: homemade limoncello or champagne 🥂","3 chilled Croatian beers p.p. + soft drinks & juices on request","Experienced skipper (German/English)","Fuel for standard routes (Zadar / Ugljan)","Final cleaning – no hidden costs"],
      hi:["Up to 8 guests, fully private","Large sun deck, cabin, on-board WC & swim platform","Start 9:00 am Marina Zadar (flexible)"] }
  },
  {
    id:"halbtag-ai", slug:"touren", group:"ai", emoji:"⚓", hrs:4, price:"550",
    tag:{de:"Halbtag",hr:"Pola dana",en:"Half day"},
    de:{ title:"Exklusive Halbtagestour – All-Inclusive",
      teaser:"4 Stunden pure Entspannung: die schönsten Buchten um Zadar, Ošljak & Ugljan – privat mit Welcome-Drink & Getränken an Bord.",
      inc:["Welcome-Drink (Limoncello oder Champagner)","3 kroatische Biere p. P. + Softdrinks nach Wunsch","Skipper (Deutsch/Englisch)","Treibstoff & Endreinigung inklusive","Weitere Stunden flexibel zubuchbar"],
      hi:["Vormittags- oder goldene Nachmittagssonne","Schnorchel-Stopps in versteckten Buchten","Bis zu 8 Personen, komplett privat"] },
    hr:{ title:"Ekskluzivna poludnevna tura – All-Inclusive",
      teaser:"4 sata potpunog opuštanja: najljepše uvale oko Zadra, Ošljaka i Ugljana – privatno uz welcome drink i pića na brodu.",
      inc:["Welcome drink (limoncello ili šampanjac)","3 hrvatska piva po osobi + sokovi po želji","Skiper (njemački/engleski)","Gorivo i završno čišćenje uključeni","Dodatni sati po dogovoru"],
      hi:["Jutarnje ili zlatno popodnevno sunce","Zaustavljanja za ronjenje u skrivenim uvalama","Do 8 osoba, potpuno privatno"] },
    en:{ title:"Exclusive Half-Day Tour – All-Inclusive",
      teaser:"4 hours of pure relaxation: the most beautiful bays around Zadar, Ošljak & Ugljan – private, with welcome drink & drinks on board.",
      inc:["Welcome drink (limoncello or champagne)","3 Croatian beers p.p. + soft drinks on request","Skipper (German/English)","Fuel & final cleaning included","Extra hours easily added"],
      hi:["Morning or golden afternoon sun","Snorkelling stops in hidden coves","Up to 8 guests, fully private"] }
  },
  {
    id:"tagestour-lite", slug:"touren", group:"lite", emoji:"☀️", hrs:8, price:"700",
    tag:{de:"Lite",hr:"Lite",en:"Lite"},
    de:{ title:"Ganztagestour LITE",
      teaser:"Das volle Yacht-Erlebnis zum Sparpreis: privater Ganztag mit gekühlten Softdrinks & Säften an Bord. Alkoholische Wunschgetränke auf Absprache.",
      inc:["Gekühlte Softdrinks & Säfte nach Wunsch","Skipper (Deutsch/Englisch)","Treibstoff für Standardrouten","Endreinigung inklusive","Wunsch-Getränke (Bier/Wein) auf Absprache vorab"],
      hi:["Bis zu 8 Personen, privat","Sonnenliege, Kabine, Bord-WC, Badeplattform","Bester Preis für den ganzen Tag"] },
    hr:{ title:"Cjelodnevna tura LITE",
      teaser:"Potpuni doživljaj jahte po povoljnoj cijeni: privatni cijeli dan uz hladne sokove na brodu. Alkoholna pića po dogovoru.",
      inc:["Hladni sokovi po želji","Skiper (njemački/engleski)","Gorivo za standardne rute","Završno čišćenje uključeno","Željena pića (pivo/vino) po prethodnom dogovoru"],
      hi:["Do 8 osoba, privatno","Ležaljka, kabina, WC, platforma za kupanje","Najbolja cijena za cijeli dan"] },
    en:{ title:"Full-Day Tour LITE",
      teaser:"The full yacht experience at a saver price: a private full day with chilled soft drinks & juices on board. Alcoholic drinks by arrangement.",
      inc:["Chilled soft drinks & juices on request","Skipper (German/English)","Fuel for standard routes","Final cleaning included","Preferred drinks (beer/wine) arranged in advance"],
      hi:["Up to 8 guests, private","Sun deck, cabin, on-board WC, swim platform","Best value for the whole day"] }
  },
  {
    id:"halbtag-lite", slug:"touren", group:"lite", emoji:"🌊", hrs:4, price:"450",
    tag:{de:"Lite",hr:"Lite",en:"Lite"},
    de:{ title:"Halbtagestour LITE",
      teaser:"Die Freiheit der Coral 30 zum Aktionspreis – 4 Stunden privat mit gekühlten Softdrinks. Ideal für den spontanen Ausflug.",
      inc:["Gekühlte Softdrinks & Säfte nach Wunsch","Skipper (Deutsch/Englisch)","Treibstoff & Endreinigung inklusive","Wunsch-Getränke auf Absprache vorab"],
      hi:["Kristallklares Wasser, versteckte Buchten","Bis zu 8 Personen, privat","Unschlagbarer Einstiegspreis"] },
    hr:{ title:"Poludnevna tura LITE",
      teaser:"Sloboda Coral 30 po akcijskoj cijeni – 4 sata privatno uz hladne sokove. Idealno za spontani izlet.",
      inc:["Hladni sokovi po želji","Skiper (njemački/engleski)","Gorivo i završno čišćenje uključeni","Željena pića po prethodnom dogovoru"],
      hi:["Kristalno čisto more, skrivene uvale","Do 8 osoba, privatno","Nenadmašna početna cijena"] },
    en:{ title:"Half-Day Tour LITE",
      teaser:"The freedom of the Coral 30 at a special price – 4 private hours with chilled soft drinks. Perfect for a spontaneous trip.",
      inc:["Chilled soft drinks & juices on request","Skipper (German/English)","Fuel & final cleaning included","Preferred drinks arranged in advance"],
      hi:["Crystal-clear water, hidden coves","Up to 8 guests, private","Unbeatable entry price"] }
  },
  {
    id:"dugi-otok", slug:"dugi-otok", group:"island", emoji:"🏝️", hrs:8, price:"850",
    tag:{de:"Insel-Abenteuer",hr:"Otočna avantura",en:"Island adventure"}, gold:true,
    de:{ title:"Dugi Otok & Sakarun – Das ultimative Insel-Abenteuer",
      teaser:"Schiffswrack, Meereshöhle, „Drachenauge“, die blaue Lagune, der Traumstrand Sakarun und geheime U-Boot-Bunker – der spektakulärste Ganztagesausflug ab Zadar, mit dem Komfort einer echten Yacht statt engem Schlauchboot.",
      inc:["Erfahrener deutscher Skipper","Schnorchelausrüstung an Bord","Riesige Liegefläche, Schattenplätze, Bord-WC & Soundanlage","Treibstoff inklusive"],
      hi:["Schiffswrack „St. Michele“ zum Schnorcheln","Golubinka-Meereshöhle & „Drachenauge“","Sakarun – einer der schönsten Sandstrände Kroatiens","Jugoslawische U-Boot-Bunker aus dem Kalten Krieg"] },
    hr:{ title:"Dugi Otok i Sakarun – vrhunska otočna avantura",
      teaser:"Olupina broda, morska špilja, „Zmajevo oko“, plava laguna, prekrasna plaža Sakarun i tajni podmornički bunkeri – najspektakularniji cjelodnevni izlet iz Zadra, uz udobnost prave jahte umjesto tijesnog gumenjaka.",
      inc:["Iskusni njemački skiper","Oprema za ronjenje na brodu","Velika ležaljka, sjena, WC i zvučnici","Gorivo uključeno"],
      hi:["Olupina „St. Michele“ za ronjenje","Morska špilja Golubinka i „Zmajevo oko“","Sakarun – jedna od najljepših pješčanih plaža Hrvatske","Jugoslavenski podmornički bunkeri iz Hladnog rata"] },
    en:{ title:"Dugi Otok & Sakarun – The Ultimate Island Adventure",
      teaser:"A shipwreck, a sea cave, the “Dragon’s Eye”, the blue lagoon, the dream beach Sakarun and secret submarine bunkers – the most spectacular full-day trip from Zadar, with the comfort of a real yacht instead of a cramped RIB.",
      inc:["Experienced German-speaking skipper","Snorkelling gear on board","Huge sun deck, shade, on-board WC & sound system","Fuel included"],
      hi:["Snorkel the “St. Michele” shipwreck","Golubinka sea cave & the “Dragon’s Eye”","Sakarun – one of Croatia’s finest sandy beaches","Cold-War Yugoslav submarine bunkers"] }
  },
  {
    id:"charter", slug:"touren", group:"charter", emoji:"🧭", hrs:0, price:"",
    tag:{de:"Individuell",hr:"Individualno",en:"Bespoke"},
    de:{ title:"Individuelle Bootstour nach Wunsch",
      teaser:"Ihr bestimmt Dauer und Route – Insel-Transfer, Sonnenuntergangsfahrt, Feier oder Junggesellenabschied. Euer Skipper meldet sich mit einem maßgeschneiderten Festpreis.",
      inc:["Flexible Dauer & individuelle Route","Insel-Transfers möglich","Sonnenuntergangs- & Sonderfahrten","Unverbindliche Anfrage – Festpreis vorab"],
      hi:["Perfekt für Feiern & Gruppen","Deutscher Skipper, schnelle Rückmeldung","Preis je nach Dauer individuell"] },
    hr:{ title:"Individualna tura brodom po želji",
      teaser:"Vi određujete trajanje i rutu – transfer na otok, vožnja u zalazak sunca, proslava ili momačka večer. Skiper javlja fiksnu cijenu po mjeri.",
      inc:["Fleksibilno trajanje i ruta","Mogući transferi na otoke","Vožnje u zalazak i posebne prilike","Nezobvezujući upit – fiksna cijena unaprijed"],
      hi:["Idealno za proslave i grupe","Njemački skiper, brz odgovor","Cijena ovisno o trajanju"] },
    en:{ title:"Bespoke Boat Tour – Your Way",
      teaser:"You choose the duration and route – island transfer, sunset cruise, celebration or stag/hen party. Your skipper replies with a tailored fixed price.",
      inc:["Flexible duration & custom route","Island transfers possible","Sunset & special-occasion trips","No-obligation request – fixed price in advance"],
      hi:["Perfect for celebrations & groups","German-speaking skipper, quick reply","Price tailored to duration"] }
  }
];

// Zusatzleistungen
const ADDONS = [
  { emoji:"🧀", price:"80",
    de:{n:"Dalmatinische Pancetta- & Käseplatte", d:"Traditionelle Spezialitäten, frisch an Bord angerichtet."},
    hr:{n:"Dalmatinska pršut i sir plata", d:"Tradicionalne delicije, svježe poslužene na brodu."},
    en:{n:"Dalmatian pancetta & cheese platter", d:"Traditional specialties, freshly served on board."} },
  { emoji:"🍾", price:"80",
    de:{n:"Premium Champagner / Schaumwein", d:"Eisgekühlt inkl. Gläser – perfekt zum Sonnenuntergang."},
    hr:{n:"Premium šampanjac / pjenušac", d:"Ledeno ohlađen uz čaše – savršeno za zalazak sunca."},
    en:{n:"Premium champagne / sparkling wine", d:"Ice-cold incl. glasses – perfect for sunset."} },
  { emoji:"🍹", price:"120",
    de:{n:"All-Inclusive Getränke-Flatrate", d:"Limoncello-Spritz, Maraska-Kirsch-Spritz, Bier, Softdrinks & Wasser – bis 6 Pers."},
    hr:{n:"All-Inclusive paket pića", d:"Limoncello spritz, Maraska spritz, pivo, sokovi i voda – do 6 osoba."},
    en:{n:"All-Inclusive drinks flat rate", d:"Limoncello spritz, Maraska cherry spritz, beer, soft drinks & water – up to 6."} }
];

// ---------- Partner / Empfehlungen ----------
const PARTNERS = {
  apartments: [
    {
      name:"Villa Dalmatina Zadar", emoji:"🏡",
      url:"https://www.villa-dalmatina-zadar.com/",
      rating:"4,9", reviews:61,
      phone:"+385 99 471 0059",
      addr:"Ul. Mile Gojsalića 27A, 23000 Zadar",
      de:{ type:"Ferienwohnungen mit Pool", d:"Gepflegte, moderne Ferienwohnungen mit Pool und Garten in ruhiger Lage – familienfreundlich und mit herzlichen Gastgebern. Ideal für deinen Aufenthalt rund um die Bootstour." },
      hr:{ type:"Apartmani s bazenom", d:"Uređeni, moderni apartmani s bazenom i vrtom na mirnoj lokaciji – idealni za obitelji, uz srdačne domaćine. Savršeni za boravak uz vaš izlet brodom." },
      en:{ type:"Holiday apartments with pool", d:"Well-kept, modern holiday apartments with a pool and garden in a quiet location – family-friendly with warm hosts. Perfect for your stay around your boat trip." }
    },
    {
      name:"Apartment Lea Maria", emoji:"🌅",
      url:"https://www.croatiahotels.net/en/hotel/apartment-lea-maria.html",
      rating:"5,0", reviews:3,
      phone:"+385 95 804 5558",
      addr:"Rivnica ul. 4, 23000 Zadar",
      de:{ type:"Ferienwohnung · zentrale Lage", d:"Gemütliche, top-gepflegte Ferienwohnung in perfekter Lage – nur wenige Schritte zur Altstadt, zur Meeresorgel und zu Restaurants. Die Gastgeberin spricht fließend Deutsch, Englisch und Kroatisch." },
      hr:{ type:"Apartman · centralna lokacija", d:"Ugodan, besprijekorno održavan apartman na savršenoj lokaciji – nekoliko koraka do Starog grada, Morskih orgulja i restorana. Domaćica tečno govori njemački, engleski i hrvatski." },
      en:{ type:"Apartment · central location", d:"A cosy, immaculately kept apartment in a perfect location – just steps from the old town, the Sea Organ and restaurants. The host speaks fluent German, English and Croatian." }
    }
  ],
  school: [
    {
      name:"MAG Seefahrtschule Zadar", emoji:"⚓",
      url:"https://kuestenpatent-kroatien.online/",
      de:{ type:"Küstenpatent & Bootsführerschein", d:"Küstenpatent-Kurse auf Deutsch in Zadar – hol dir den Bootsführerschein und fahr in Kroatien selbst aufs Meer. Ideal, um deinen Urlaub mit dem eigenen Skipper-Schein abzurunden." },
      hr:{ type:"Voditelj brodice", d:"Tečajevi za voditelja brodice na njemačkom u Zadru – položite ispit i sami zaplovite Jadranom. Savršen dodatak vašem odmoru na moru." },
      en:{ type:"Coastal skipper licence", d:"German-language coastal skipper courses in Zadar – get your boating licence and cruise Croatia yourself. A perfect way to round off your holiday on the water." }
    }
  ]
};

module.exports = { BRAND, PAGES, LANGS, LANG_LABEL, HTML_LANG, UI, TOURS, ADDONS, PARTNERS };
