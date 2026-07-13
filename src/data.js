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
  // siteUrl = Basis-Adresse für SEO (Canonical/hreflang/Sitemap).
  siteUrl: "https://skipper-zadar.com",
  // domain = schaltet die Custom Domain scharf (erzeugt CNAME). Erst hochladen, wenn die Strato-DNS eingerichtet ist!
  domain: "skipper-zadar.com",
  // Fotos: Dateien in assets/ legen und Pfad eintragen (z.B. "../assets/boot-1.jpg"). Leer = markenfarbenes Panel.
  images: {
    boat:     "../assets/boat-main.jpg", // Hauptfoto Boot (Seite „Das Boot")
    boatDeck: "../assets/boat-2.jpg",    // zweites Boot-Foto – Seite „Das Boot"
    owner:    "../assets/about-andreas.jpg", // Über uns: echtes Foto von Andreas Fruhnert
    night:    "../assets/night-zadar.jpg", // Zadar-Hafen bei Nacht / beleuchtete Brücke (Startseite-Highlight)
    hero:     "../assets/hero.jpg", // dezentes Hintergrundbild im Hero oben
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
const PAGES = ["index","touren","pro-person","dugi-otok","boot","preise","ueber-uns","partner","kontakt","buchung","impressum","datenschutz","agb"];

const LANGS = ["de","hr","en"];
const LANG_LABEL = { de:"DE", hr:"HR", en:"EN" };
const HTML_LANG  = { de:"de", hr:"hr", en:"en" };

// ---------- UI / Navigation / Footer ----------
const UI = {
  de:{
    nav:{ index:"Start", touren:"Touren", "pro-person":"Pro Person", boot:"Das Boot", preise:"Preise", "ueber-uns":"Über uns", partner:"Partner", kontakt:"Kontakt" },
    book:"Jetzt buchen", whatsapp:"WhatsApp", callNow:"Anrufen", viewTours:"Touren ansehen",
    requestOffer:"Angebot anfragen", contactUs:"Kontakt aufnehmen", allTours:"Alle Touren & Preise",
    from:"ab", perBoat:"pro Boot / Crew", perPerson:"pro Person", perPersonShort:"/ Pers.", hours:"Std.", included:"Inklusive", highlights:"Highlights",
    details:"Details & Buchung", bookThis:"Diese Tour buchen", onRequest:"auf Anfrage",
    footTagline:"Private Bootstouren & Bootsvermietung mit deutschem Skipper ab Zadar.",
    quick:"Schnellzugriff", legal:"Rechtliches", contactH:"Kontakt",
    hoursH:"Erreichbarkeit", hoursV:"Täglich · nach Vereinbarung", rights:"Alle Rechte vorbehalten.",
    imprint:"Impressum", privacy:"Datenschutz", terms:"AGB",
    seoTag:"Bootsvermietung & private Bootstouren Zadar",
    disclaimer:"Hinweis: Diese Website ist ein Entwurf. Bilder teils Platzhalter – bitte durch eigene Fotos ersetzen."
  },
  hr:{
    nav:{ index:"Početna", touren:"Ture", "pro-person":"Po osobi", boot:"Brod", preise:"Cijene", "ueber-uns":"O nama", partner:"Partneri", kontakt:"Kontakt" },
    book:"Rezerviraj", whatsapp:"WhatsApp", callNow:"Nazovi", viewTours:"Pogledaj ture",
    requestOffer:"Zatraži ponudu", contactUs:"Kontaktirajte nas", allTours:"Sve ture i cijene",
    from:"od", perBoat:"po brodu / posadi", perPerson:"po osobi", perPersonShort:"/ os.", hours:"h", included:"Uključeno", highlights:"Vrhunci",
    details:"Detalji i rezervacija", bookThis:"Rezerviraj ovu turu", onRequest:"na upit",
    footTagline:"Privatni izleti brodom i najam broda s njemačkim skiperom iz Zadra.",
    quick:"Brzi izbornik", legal:"Pravno", contactH:"Kontakt",
    hoursH:"Dostupnost", hoursV:"Svaki dan · po dogovoru", rights:"Sva prava pridržana.",
    imprint:"Impressum", privacy:"Privatnost", terms:"Uvjeti",
    seoTag:"Najam broda i privatni izleti brodom u Zadru",
    disclaimer:"Napomena: Ova stranica je nacrt. Dio slika su rezervirana mjesta – zamijenite vlastitim fotografijama."
  },
  en:{
    nav:{ index:"Home", touren:"Tours", "pro-person":"Per Person", boot:"The Boat", preise:"Prices", "ueber-uns":"About", partner:"Partners", kontakt:"Contact" },
    book:"Book now", whatsapp:"WhatsApp", callNow:"Call us", viewTours:"View tours",
    requestOffer:"Request a quote", contactUs:"Get in touch", allTours:"All tours & prices",
    from:"from", perBoat:"per boat / crew", perPerson:"per person", perPersonShort:"/ pers.", hours:"hrs", included:"Included", highlights:"Highlights",
    details:"Details & booking", bookThis:"Book this tour", onRequest:"on request",
    footTagline:"Private boat tours & boat rental with a German-speaking skipper from Zadar.",
    quick:"Quick links", legal:"Legal", contactH:"Contact",
    hoursH:"Availability", hoursV:"Daily · by arrangement", rights:"All rights reserved.",
    imprint:"Imprint", privacy:"Privacy", terms:"Terms",
    seoTag:"Boat Rental & Private Boat Tours Zadar",
    disclaimer:"Note: This website is a draft. Some images are placeholders – please replace with your own photos."
  }
};

// ---------- Touren ----------
// group: ai = All-Inclusive, lite = Lite, island = Insel, charter = Charter
const TOURS = [
  {
    id:"tagestour-ai", media:"../assets/tour-ai-tag.jpg", slug:"touren", group:"ai", emoji:"🛥️", hrs:8, price:"850",
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
    id:"halbtag-ai", media:"../assets/tour-ai-halb.jpg", slug:"touren", group:"ai", emoji:"⚓", hrs:4, price:"550",
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
    id:"tagestour-lite", media:"../assets/tour-lite-tag.jpg", slug:"touren", group:"lite", emoji:"☀️", hrs:8, price:"700",
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
    id:"halbtag-lite", media:"../assets/tour-lite-halb.jpg", slug:"touren", group:"lite", emoji:"🌊", hrs:4, price:"450",
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
    id:"dugi-otok", media:"../assets/tour-island.jpg", slug:"dugi-otok", group:"island", emoji:"🏝️", hrs:8, price:"850",
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
    id:"charter", media:"../assets/night-zadar.jpg", slug:"touren", group:"charter", emoji:"🧭", hrs:0, price:"",
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
  },
  {
    id:"sunset", media:"../assets/tour-charter.jpg", slug:"touren", group:"charter", emoji:"🌅",
    hrs:2, price:"200", tag:{de:"Sonnenuntergang",hr:"Zalazak sunca",en:"Sunset"}, gold:true,
    de:{ title:"Sonnenuntergangstour – privat",
      teaser:"Der berühmte Sonnenuntergang von Zadar (laut Hitchcock der schönste der Welt) – ganz privat vom Meer aus. 2 Stunden entspanntes Cruisen vor Altstadt und Inseln, mit einer Flasche gekühltem kroatischem Schaumwein & Knabbereien. Nur ihr, eure Begleitung und der Skipper.",
      inc:["Flasche gekühlter kroatischer Schaumwein (Pjenušac) & Knabbereien 🥂","Erfahrener deutscher Skipper","Meeresorgel & „Gruß an die Sonne\" vom Wasser aus","Jede weitere Stunde nur +100 €"],
      hi:["Ganz privat – nur ihr & der Skipper (bis 8 Personen)","Ideal für Paare, Heiratsanträge & besondere Abende","Start ab Marina Zadar"] },
    hr:{ title:"Tura u zalazak sunca – privatno",
      teaser:"Slavni zalazak sunca u Zadru (prema Hitchcocku najljepši na svijetu) – potpuno privatno s mora. 2 sata opuštene vožnje pokraj Starog grada i otoka, uz bocu hladnog hrvatskog pjenušca i grickalice. Samo vi, vaše društvo i skiper.",
      inc:["Boca hladnog hrvatskog pjenušca i grickalice 🥂","Iskusni njemački skiper","Morske orgulje i „Pozdrav suncu\" s mora","Svaki dodatni sat samo +100 €"],
      hi:["Potpuno privatno – samo vi i skiper (do 8 osoba)","Idealno za parove, prosidbe i posebne večeri","Polazak iz marine Zadar"] },
    en:{ title:"Private Sunset Cruise",
      teaser:"Zadar's famous sunset (called the world's most beautiful by Hitchcock) – fully private from the water. 2 hours of relaxed cruising past the old town and islands, with a bottle of chilled Croatian sparkling wine & snacks. Just you, your company and the skipper.",
      inc:["A bottle of chilled Croatian sparkling wine & snacks 🥂","Experienced German-speaking skipper","The Sea Organ & „Greeting to the Sun\" from the water","Each additional hour only +100 €"],
      hi:["Fully private – just you & the skipper (up to 8)","Ideal for couples, proposals & special evenings","Departure from Marina Zadar"] }
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
  ],
  homecare: [
    {
      name:"Croatian Home Care", emoji:"🏠",
      url:"https://homecare-zadar.com",
      de:{ type:"Objektbetreuung & Hausverwaltung", d:"Unser eigener, deutschsprachiger Service rund um Zadar: Schlüsselservice, Gäste Check-in/-out, Reinigung, Instandhaltung und Verwaltung – auch auf den Inseln (Preko, Ugljan) mit eigenem Boot. Ihr Zuhause an der Adria in besten Händen." },
      hr:{ type:"Briga o nekretninama i upravljanje", d:"Naš vlastiti servis na njemačkom oko Zadra: usluga ključa, prijava/odjava gostiju, čišćenje, održavanje i upravljanje – i na otocima (Preko, Ugljan) vlastitim brodom. Vaš dom na Jadranu u najboljim rukama." },
      en:{ type:"Property care & management", d:"Our own German-speaking service around Zadar: key handling, guest check-in/-out, cleaning, maintenance and management – also on the islands (Preko, Ugljan) by our own boat. Your Adriatic home in the best hands." }
    }
  ]
};

// ---------- Touren pro Person (geteilte Gruppentouren, ab 3 Pers.) ----------
const PPTOURS = [
  {
    id:"drei-insel", media:"../assets/gallery-1.jpg", price:"35",
    tag:{de:"Beliebt",hr:"Popularno",en:"Popular"},
    dur:{de:"3–4 Std.",hr:"3–4 h",en:"3–4 hrs"},
    sub:{de:"Ošljak · Ugljan · Galevac",hr:"Ošljak · Ugljan · Galevac",en:"Ošljak · Ugljan · Galevac"},
    de:{ title:"3-Insel-Tour", teaser:"Drei Inseln, versteckte Buchten, Schnorcheln und Baden im türkisen Wasser – der perfekte Mix aus Meer und Inselleben." },
    hr:{ title:"Tura 3 otoka", teaser:"Tri otoka, skrivene uvale, ronjenje i kupanje u tirkiznom moru – savršen spoj mora i otočkog života." },
    en:{ title:"3-Island Tour", teaser:"Three islands, hidden bays, snorkelling and swimming in turquoise water – the perfect mix of sea and island life." }
  },
  {
    id:"sunset", media:"../assets/tour-charter.jpg", price:"29", gold:true,
    tag:{de:"Sonnenuntergang",hr:"Zalazak sunca",en:"Sunset"},
    dur:{de:"ca. 1,5 Std.",hr:"oko 1,5 h",en:"approx. 1.5 hrs"},
    sub:{de:"Altstadt & Meeresorgel",hr:"Stari grad i Morske orgulje",en:"Old Town & Sea Organ"},
    de:{ title:"Sonnenuntergang-Tour", teaser:"Der schönste Sonnenuntergang – vom Wasser aus. Mit einem Glas Sekt an Bord, vorbei an der beleuchteten Altstadt und der Meeresorgel." },
    hr:{ title:"Tura u zalazak sunca", teaser:"Najljepši zalazak sunca – s mora. Uz čašu pjenušca na brodu, pokraj osvijetljenog Starog grada i Morskih orgulja." },
    en:{ title:"Sunset Tour", teaser:"The most beautiful sunset – from the water. With a glass of sparkling wine on board, past the illuminated old town and the Sea Organ." }
  },
  {
    id:"dugi-otok", media:"../assets/tour-island.jpg", price:"89", gold:true,
    tag:{de:"Highlight",hr:"Vrhunac",en:"Highlight"},
    dur:{de:"ganztägig, ~9 Std.",hr:"cijeli dan, ~9 h",en:"full day, ~9 hrs"},
    sub:{de:"Sakarun · Höhle · Wrack · Tunnel",hr:"Sakarun · špilja · olupina · tunel",en:"Sakarun · cave · wreck · tunnel"},
    de:{ title:"Dugi Otok – Ganztag", teaser:"Das große Abenteuer: Sakarun-Sandstrand, die Golubinka-Meereshöhle, Schnorcheln am Schiffswrack und die geheimen U-Boot-Tunnel." },
    hr:{ title:"Dugi Otok – cijeli dan", teaser:"Velika avantura: pješčana plaža Sakarun, morska špilja Golubinka, ronjenje na olupini broda i tajni podmornički tuneli." },
    en:{ title:"Dugi Otok – Full Day", teaser:"The big adventure: Sakarun sandy beach, the Golubinka sea cave, snorkelling at the shipwreck and the secret submarine tunnels." }
  },
  {
    id:"sakarun", media:"../assets/tour-lite-tag.jpg", price:"72",
    tag:{de:"Halbtag",hr:"Pola dana",en:"Half day"},
    dur:{de:"ca. 4,5 Std.",hr:"oko 4,5 h",en:"approx. 4.5 hrs"},
    sub:{de:"Lagune · Schnorcheln · Tunnel",hr:"Laguna · ronjenje · tunel",en:"Lagoon · snorkelling · tunnel"},
    de:{ title:"Sakarun-Strand & Wrack", teaser:"Karibik-Feeling am Sakarun: türkise Lagune, feiner Sand, Schnorcheln am Wrack und ein Blick in die Tunnel aus dem Kalten Krieg." },
    hr:{ title:"Plaža Sakarun i olupina", teaser:"Karipski ugođaj na Sakarunu: tirkizna laguna, fini pijesak, ronjenje na olupini i pogled u tunele iz Hladnog rata." },
    en:{ title:"Sakarun Beach & Wreck", teaser:"Caribbean feeling at Sakarun: turquoise lagoon, fine sand, snorkelling at the wreck and a look into the Cold-War tunnels." }
  },
  {
    id:"kornati", media:"../assets/gallery-3.jpg", price:"95", gold:true,
    tag:{de:"Premium",hr:"Premium",en:"Premium"},
    dur:{de:"ganztägig",hr:"cijeli dan",en:"full day"},
    sub:{de:"Klippen & Naturwunder",hr:"Litice i čudo prirode",en:"Cliffs & natural wonder"},
    note:{de:"zzgl. ~16 € Nationalpark-Gebühr",hr:"+ ~16 € ulaznica za park",en:"+ ~€16 national-park fee"},
    de:{ title:"Kornati-Nationalpark", teaser:"140 Inseln, dramatische Klippen und kristallklares Wasser im Nationalpark Kornati – das Naturwunder der Adria, ganz für euch erlebt." },
    hr:{ title:"Nacionalni park Kornati", teaser:"140 otoka, dramatične litice i kristalno čisto more u NP Kornati – čudo prirode Jadrana, doživljeno baš za vas." },
    en:{ title:"Kornati National Park", teaser:"140 islands, dramatic cliffs and crystal-clear water in Kornati National Park – the Adriatic's natural wonder, all for you." }
  },
  {
    id:"individuell", media:"../assets/tour-lite-halb.jpg", price:"55",
    tag:{de:"Flexibel",hr:"Fleksibilno",en:"Flexible"},
    dur:{de:"ab 2 Std.",hr:"od 2 h",en:"from 2 hrs"},
    sub:{de:"Route & Dauer nach Wunsch",hr:"Ruta i trajanje po želji",en:"Route & duration your way"},
    de:{ title:"Individueller Ausflug", teaser:"Ihr bestimmt Route und Dauer. Ideal für ein paar entspannte Stunden auf dem Meer – ganz nach euren Wünschen. Ab 3 Personen." },
    hr:{ title:"Individualni izlet", teaser:"Vi određujete rutu i trajanje. Idealno za nekoliko opuštenih sati na moru – po vašoj želji. Od 3 osobe." },
    en:{ title:"Bespoke Trip", teaser:"You decide the route and duration. Ideal for a few relaxed hours at sea – entirely your way. From 3 guests." }
  }
];

// Highlight: Romantik-Sonnenuntergang für Pärchen (privat zu zweit)
const PPHIGHLIGHT = {
  media:"../assets/gallery-4.jpg", price:"149",
  unit:{de:"für 2 Personen",hr:"za 2 osobe",en:"for 2 people"},
  tag:{de:"Highlight für Pärchen",hr:"Vrhunac za parove",en:"Highlight for couples"},
  de:{ title:"Romantik-Sonnenuntergang für Pärchen",
    teaser:"Der schönste Sonnenuntergang von Zadar – ganz privat nur zu zweit. Anstoßen mit Champagner oder kroatischem Sekt und einem Aperol Spritz, während die Sonne über der Adria versinkt. Perfekt für Jahrestage, Heiratsanträge oder einfach einen unvergesslichen Abend.",
    inc:["Flasche Champagner oder kroatischer Sekt 🍾","Aperol Spritz zum Anstoßen 🥂","Privat – nur ihr zwei & der Skipper","ca. 1,5–2 Std. entspanntes Cruisen zum Sonnenuntergang"] },
  hr:{ title:"Romantični zalazak sunca za parove",
    teaser:"Najljepši zadarski zalazak sunca – posve privatno, samo za dvoje. Nazdravite šampanjcem ili hrvatskim pjenušcem i Aperol Spritzom dok sunce tone u Jadran. Savršeno za godišnjice, prosidbe ili jednostavno nezaboravnu večer.",
    inc:["Boca šampanjca ili hrvatskog pjenušca 🍾","Aperol Spritz za nazdravljanje 🥂","Privatno – samo vas dvoje i skiper","oko 1,5–2 h opuštene vožnje u zalazak sunca"] },
  en:{ title:"Romantic Sunset for Couples",
    teaser:"Zadar's most beautiful sunset – completely private, just the two of you. Toast with champagne or Croatian sparkling wine and an Aperol Spritz as the sun sinks into the Adriatic. Perfect for anniversaries, proposals or simply an unforgettable evening.",
    inc:["A bottle of champagne or Croatian sparkling wine 🍾","Aperol Spritz to toast 🥂","Private – just the two of you & the skipper","approx. 1.5–2 hrs of relaxed sunset cruising"] }
};

// FAQ (trilingual) – wird auch als FAQPage-JSON-LD ausgegeben
const PPFAQ = [
  { de:{q:"Was ist im Preis pro Person enthalten?",a:"Deutschsprachiger Skipper & lokaler Guide, Kraftstoff und alle Gebühren, Sicherheitsausrüstung, Handtücher an Bord, Trinkwasser sowie ein Willkommensgetränk. Die Schnorchel-Ausrüstung bringt ihr bitte selbst mit. Ihr zahlt einfach pro Person – ohne das ganze Boot mieten zu müssen."},
    hr:{q:"Što je uključeno u cijenu po osobi?",a:"Skiper koji govori njemački i lokalni vodič, gorivo i sve pristojbe, sigurnosna oprema, ručnici na brodu, pitka voda te welcome piće. Opremu za ronjenje molimo ponesite sami. Plaćate jednostavno po osobi – bez najma cijelog broda."},
    en:{q:"What is included in the price per person?",a:"A German-speaking skipper & local guide, fuel and all fees, safety equipment, towels on board, drinking water and a welcome drink. Please bring your own snorkelling gear. You simply pay per person – without renting the whole boat."} },
  { de:{q:"Ab wie vielen Personen fahrt ihr los?",a:"Wir starten ab 3 Personen. Bei weniger Gästen findet sich oft eine passende Gruppe – frag einfach nach dem nächsten möglichen Termin."},
    hr:{q:"Od koliko osoba krećete?",a:"Krećemo od 3 osobe. Uz manje gostiju često se nađe odgovarajuća grupa – samo pitajte za sljedeći mogući termin."},
    en:{q:"How many people do you need to set off?",a:"We depart from 3 people. With fewer guests a suitable group often comes together – just ask for the next possible date."} },
  { de:{q:"Wie viele Gäste sind an Bord?",a:"Maximal 8 – also eine kleine, entspannte Gruppe. Keine anonyme Massenabfertigung wie auf den großen Ausflugsschiffen."},
    hr:{q:"Koliko je gostiju na brodu?",a:"Najviše 8 – dakle mala, opuštena grupa. Bez anonimne masovne vožnje kao na velikim izletničkim brodovima."},
    en:{q:"How many guests are on board?",a:"A maximum of 8 – a small, relaxed group. No anonymous mass handling like on the big tourist boats."} },
  { de:{q:"Gibt es eine Toilette an Bord?",a:"Ja! Unsere Scarani Coral 30 hat eine echte Bord-Toilette und eine schattige Kabine – ein echter Komfortvorteil gegenüber offenen Schlauchbooten."},
    hr:{q:"Ima li toalet na brodu?",a:"Da! Naš Scarani Coral 30 ima pravi brodski WC i sjenovitu kabinu – prava prednost u odnosu na otvorene gumenjake."},
    en:{q:"Is there a toilet on board?",a:"Yes! Our Scarani Coral 30 has a real on-board WC and a shaded cabin – a genuine comfort advantage over open RIBs."} },
  { de:{q:"Bekomme ich Getränke an Bord?",a:"Trinkwasser ist immer inklusive. Auf Wunsch gibt es Aperol Spritz, Limoncello, Champagner oder kroatischen Sekt an Bord – bitte einfach bei der Buchung vorab Bescheid geben, damit wir alles gut gekühlt bereitstellen."},
    hr:{q:"Dobivam li piće na brodu?",a:"Pitka voda uvijek je uključena. Po želji nudimo Aperol Spritz, limoncello, šampanjac ili hrvatski pjenušac na brodu – javite nam unaprijed kod rezervacije kako bismo sve dobro ohladili."},
    en:{q:"Do I get drinks on board?",a:"Drinking water is always included. On request there's Aperol Spritz, limoncello, champagne or Croatian sparkling wine on board – just let us know in advance when booking so we can chill everything."} },
  { de:{q:"Kann ich auch das ganze Boot privat mieten?",a:"Klar – dann schau bei unseren „Touren“ zum Festpreis vorbei. Dort zahlt ihr einen Gesamtpreis fürs ganze Boot, egal wie viele ihr seid."},
    hr:{q:"Mogu li unajmiti cijeli brod privatno?",a:"Naravno – pogledajte naše „Ture“ po fiksnoj cijeni. Ondje plaćate ukupnu cijenu za cijeli brod, bez obzira na broj osoba."},
    en:{q:"Can I also rent the whole boat privately?",a:"Sure – have a look at our fixed-price “Tours”. There you pay one total price for the whole boat, no matter how many you are."} },
  { de:{q:"Was passiert bei schlechtem Wetter?",a:"Wird die Tour wegen Wind (Jugo/Bura) oder Regen abgesagt, bekommt ihr 100 % zurück oder wir verschieben auf einen Sonnentag."},
    hr:{q:"Što ako je loše vrijeme?",a:"Ako se tura otkaže zbog vjetra (jugo/bura) ili kiše, dobivate 100 % povrat ili je pomičemo na sunčani dan."},
    en:{q:"What happens if the weather is bad?",a:"If the tour is cancelled due to wind (Jugo/Bura) or rain, you get 100 % back or we move it to a sunny day."} },
  { de:{q:"Wo starten die Touren und muss ich schwimmen können?",a:"Start ist an der Marina Zadar (Details nach der Buchung). Schwimmen ist optional – Rettungswesten sind an Bord, du kannst die Tour also auch ohne Baden genießen."},
    hr:{q:"Gdje počinju ture i moram li znati plivati?",a:"Polazak je iz marine Zadar (detalji nakon rezervacije). Plivanje je neobavezno – prsluci za spašavanje su na brodu, pa turu možete uživati i bez kupanja."},
    en:{q:"Where do the tours start and do I need to swim?",a:"Departure is from Marina Zadar (details after booking). Swimming is optional – life jackets are on board, so you can enjoy the tour without going in the water."} }
];

// Echte Gäste-Bewertungen hier eintragen (Text + Name). Leer = nur Google-Score wird gezeigt.
const PPREVIEWS = [];

module.exports = { BRAND, PAGES, LANGS, LANG_LABEL, HTML_LANG, UI, TOURS, ADDONS, PARTNERS, PPTOURS, PPHIGHLIGHT, PPFAQ, PPREVIEWS };
