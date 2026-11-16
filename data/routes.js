// ============================================================
//  ROTTE COMMERCIALI DEL VICINO ORIENTE ANTICO
//  Fonti: Cline (1177 a.C.), Giusfredi, Liverani
//
//  Struttura:
//    id         – identificatore unico
//    nome       – nome della rotta
//    tipo       – "terrestre" | "marittimo" | "fluviale"
//    merci      – array di oggetti { nome, icona, categoria }
//    colore     – colore della linea (per categoria merci prevalente)
//    periodo_min/max – anni di attività (negativi = a.C.)
//    waypoints  – array di [lat, lng]
//    fonte      – fonte storiografica principale
//    desc       – nota descrittiva breve
// ============================================================

var ROUTE_CATEGORIE = {
  metalli:    { label: "Metalli",           colore: "#e74c3c", icona: "⚒" },
  lusso:      { label: "Beni di lusso",     colore: "#9b59b6", icona: "💎" },
  alimentari: { label: "Derrate alimentari",colore: "#e67e22", icona: "🌾" },
  legname:    { label: "Legname e resine",  colore: "#27ae60", icona: "🌲" },
  tessili:    { label: "Tessili e coloranti",colore: "#3498db",icona: "🧵" }
};

var ROUTES = [

  // ── ROTTE DELLO STAGNO ──────────────────────────────────────────
  {
    id: "stagno_oriente",
    nome: "Rotta dello Stagno (Oriente)",
    tipo: "terrestre",
    colore: "#e74c3c",
    periodo_min: -2500,
    periodo_max: -1200,
    merci: [
      { nome: "Stagno",       icona: "⚒", cat: "metalli",  note: "Indispensabile per la lega del bronzo (10%)" },
      { nome: "Lapislazzuli", icona: "💎", cat: "lusso",    note: "Pietra preziosa dall'Afghanistan, colore blu intenso" }
    ],
    waypoints: [
      [37.5, 67.0],  // Bactria / Afghanistan settentrionale
      [36.5, 62.0],  // Margiana
      [35.0, 56.0],  // Partia
      [34.0, 48.0],  // Zagros / Media
      [35.5, 43.5],  // Assur
      [36.5, 36.5]   // Kanesh (Kültepe)
    ],
    fonte: "Cline, 1177 a.C.; Liverani, Antico Oriente",
    desc: "La via dello stagno dall'Asia centrale era vitale per tutta l'età del Bronzo. Senza stagno non c'è bronzo, senza bronzo non ci sono eserciti né utensili. I mercanti assiri (kārum) gestivano l'ultimo tratto fino all'Anatolia."
  },

  // ── ROTTA DEL RAME DI CIPRO ─────────────────────────────────────
  {
    id: "rame_cipro",
    nome: "Rotta del Rame (Cipro – Levante)",
    tipo: "marittimo",
    colore: "#e74c3c",
    periodo_min: -1600,
    periodo_max: -1200,
    merci: [
      { nome: "Rame",  icona: "⚒", cat: "metalli", note: "Cipro (Alashiya) era il principale esportatore di rame del Mediterraneo orientale. Il relitto di Uluburun (c. 1300 a.C.) trasportava 10 tonnellate di lingotti." },
      { nome: "Stagno", icona: "⚒", cat: "metalli", note: "Stagno per la produzione del bronzo, spesso trasportato insieme al rame" }
    ],
    waypoints: [
      [35.0, 33.0],  // Cipro (Enkomi / Alashiya)
      [35.6, 35.8],  // Ugarit
      [33.5, 35.5],  // Biblo
      [33.0, 35.1],  // Tiro / Sidone
      [31.2, 29.9]   // Delta del Nilo / Egitto
    ],
    fonte: "Cline, 1177 a.C. (relitto di Uluburun)",
    desc: "Cipro era chiamata Alashiya nei testi del Bronzo Tardo. I lingotti di rame a forma di pelle di bue (oxhide ingots) trovati in tutto il Mediterraneo orientale documentano questa rotta."
  },

  // ── ROTTA DEL CEDRO ─────────────────────────────────────────────
  {
    id: "cedro_libano",
    nome: "Rotta del Cedro (Libano – Egitto)",
    tipo: "marittimo",
    colore: "#27ae60",
    periodo_min: -3000,
    periodo_max: -300,
    merci: [
      { nome: "Cedro del Libano", icona: "🌲", cat: "legname", note: "L'Egitto era privo di legname da costruzione. Il cedro era indispensabile per barche, templi e palazzi reali." },
      { nome: "Resine e profumi",  icona: "🌲", cat: "legname", note: "Resine per l'imbalsamazione, incenso per i riti religiosi" }
    ],
    waypoints: [
      [34.0, 35.6],  // Biblo (porto principale del cedro)
      [33.5, 35.4],  // Sidone
      [33.3, 35.2],  // Tiro
      [32.0, 34.4],  // Giaffa
      [31.2, 32.0],  // Delta del Nilo
      [30.0, 31.2]   // Menfi / Cairo
    ],
    fonte: "Papiro di Wenamon (c. 1075 a.C.); iscrizioni egiziane fin dal III millennio",
    desc: "Una delle rotte commerciali più antiche e continue del mondo antico. I faraoni mandavano spedizioni a Biblo fin dall'Antico Regno. Il papiro di Wenamon descrive la difficoltà di questa rotta nell'Età Oscura."
  },

  // ── ROTTA DEL GRANO ─────────────────────────────────────────────
  {
    id: "grano_egitto",
    nome: "Rotta del Grano (Egitto – Levante)",
    tipo: "marittimo",
    colore: "#e67e22",
    periodo_min: -1500,
    periodo_max: -300,
    merci: [
      { nome: "Grano",   icona: "🌾", cat: "alimentari", note: "L'Egitto era il «granaio del mondo antico». Le Lettere di Amarna documentano richieste di grano da Cipro, Hatti e Mitanni." },
      { nome: "Olio d'oliva", icona: "🌾", cat: "alimentari", note: "Olio cananeo verso l'Egitto; grano egizio verso il Levante" },
      { nome: "Papiro",  icona: "🌾", cat: "alimentari", note: "Materiale scrittorio esportato in tutto il Levante" }
    ],
    waypoints: [
      [30.5, 32.3],  // Pi-Ramesse / Delta orientale
      [31.5, 34.5],  // Costa cananea
      [32.5, 34.9],  // Dor
      [33.0, 35.1],  // Tiro
      [33.5, 35.4],  // Sidone
      [33.5, 35.8],  // Biblo
      [35.6, 35.8]   // Ugarit
    ],
    fonte: "Lettere di Amarna; Cline, 1177 a.C.",
    desc: "Le Lettere di Amarna (c. 1350 a.C.) mostrano come il grano egizio fosse parte del sistema di doni diplomatici che teneva insieme il mondo del Bronzo Tardo. Cipro chiede grano all'Egitto in anni di carestia."
  },

  // ── ROTTA DELL'ORO NUBIANO ──────────────────────────────────────
  {
    id: "oro_nubia",
    nome: "Rotta dell'Oro (Nubia – Egitto)",
    tipo: "fluviale",
    colore: "#f1c40f",
    periodo_min: -3000,
    periodo_max: -300,
    merci: [
      { nome: "Oro",    icona: "💎", cat: "lusso", note: "La Nubia (Kush) era la principale fonte d'oro del mondo antico. «L'oro è come la polvere nel tuo paese» — lettera di Tushratta all'Egitto." },
      { nome: "Avorio", icona: "💎", cat: "lusso", note: "Zanne di elefante e ippopotamo dalla Nubia e dall'Africa orientale" },
      { nome: "Ebano",  icona: "🌲", cat: "legname", note: "Legno pregiato per mobili e statue reali" }
    ],
    waypoints: [
      [15.5, 32.5],  // Meroe / Nubia meridionale
      [19.5, 32.5],  // Abu Simbel
      [24.0, 32.9],  // Prima cataratta (Assuan / Elefantina)
      [25.7, 32.6],  // Luxor / Tebe
      [27.5, 30.8],  // Nilo medio
      [30.0, 31.2]   // Menfi / Delta
    ],
    fonte: "Lettere di Amarna; inscizioni del Nuovo Regno",
    desc: "Il Nilo come autostrada commerciale: oro, avorio ed ebano dalla Nubia scendono verso nord. L'oro nubiano era la valuta diplomatica con cui l'Egitto otteneva truppe alleate, principesse straniere e pace sul confine settentrionale."
  },

  // ── VIA DELL'EUFRATE ────────────────────────────────────────────
  {
    id: "via_eufrate",
    nome: "Via dell'Eufrate (Mesopotamia – Levante)",
    tipo: "fluviale",
    colore: "#3498db",
    periodo_min: -3500,
    periodo_max: -300,
    merci: [
      { nome: "Tessuti di lana",  icona: "🧵", cat: "tessili",    note: "Lana e tessuti babilonesi verso l'Anatolia, già documentati nei testi del kārum di Kanesh (XIX sec. a.C.)" },
      { nome: "Profumi e spezie", icona: "💎", cat: "lusso",      note: "Resine, spezie e unguenti dall'Arabia e dall'Oriente" },
      { nome: "Bronzo e metalli", icona: "⚒", cat: "metalli",    note: "Manufatti in bronzo dalla Mesopotamia verso il Levante" },
      { nome: "Ceramica",         icona: "🌾", cat: "alimentari", note: "Vasi e contenitori con derrate alimentari" }
    ],
    waypoints: [
      [32.5, 44.4],  // Babilonia
      [33.5, 43.0],  // Mari (Tell Hariri)
      [34.5, 40.8],  // Dura-Europos
      [36.0, 38.5],  // Karkemish
      [36.7, 37.0],  // Alepo / Yamhad
      [35.6, 35.8]   // Ugarit / costa
    ],
    fonte: "Testi del kārum di Kanesh; archivi di Mari",
    desc: "L'Eufrate era l'autostrada dell'antichità: collegava la Mesopotamia al Levante e all'Anatolia. Mari era il nodo di smistamento; i testi del palazzo di Mari (c. 1800 a.C.) mostrano una rete commerciale di sorprendente complessità."
  },

  // ── ROTTA ASSIRA DEI MERCANTI (kārum) ───────────────────────────
  {
    id: "karum_assiro",
    nome: "Rotta dei Mercanti Assiri (kārum)",
    tipo: "terrestre",
    colore: "#3498db",
    periodo_min: -2000,
    periodo_max: -1750,
    merci: [
      { nome: "Tessuti di lana", icona: "🧵", cat: "tessili", note: "Tessuti mesopotamici scambiati con argento in Anatolia. Il rapporto di cambio è documentato nelle tavolette di Kanesh." },
      { nome: "Stagno",          icona: "⚒", cat: "metalli", note: "Rivenduto in Anatolia a prezzi maggiorati" },
      { nome: "Argento",         icona: "⚒", cat: "metalli", note: "L'Anatolia pagava in argento: tornava in Mesopotamia come valuta." }
    ],
    waypoints: [
      [35.5, 43.5],  // Assur
      [36.0, 40.5],  // Traversata del deserto siriano
      [37.0, 38.5],  // Mardin / alta Mesopotamia
      [37.5, 37.5],  // Soglia del Tauro
      [38.5, 36.5],  // Goltepe / Tauro
      [38.7, 35.5]   // Kanesh (Kültepe)
    ],
    fonte: "Tavolette cuneiformi del kārum di Kanesh (XIX-XVIII sec. a.C.)",
    desc: "Le oltre 23.000 tavolette di Kanesh documentano il più antico sistema commerciale privato conosciuto. I mercanti assiri costituivano colonie commerciali (kārum) in Anatolia, operando in modo sorprendentemente moderno: prestiti, contratti, lettere d'affari."
  },

  // ── ROTTA DELLA PORPORA ─────────────────────────────────────────
  {
    id: "porpora_fenicia",
    nome: "Rotta della Porpora (Fenicia)",
    tipo: "marittimo",
    colore: "#9b59b6",
    periodo_min: -1200,
    periodo_max: -300,
    merci: [
      { nome: "Porpora di Tiro",  icona: "🧵", cat: "tessili", note: "Estratta dal murice. 10.000 conchiglie per tingere un solo grammo. Simbolo di regalità nel mondo antico." },
      { nome: "Vetro colorato",   icona: "💎", cat: "lusso",   note: "I Fenici producevano vetro colorato di alta qualità" },
      { nome: "Cedro lavorato",   icona: "🌲", cat: "legname", note: "Legname già lavorato, non solo tronchi grezzi" }
    ],
    waypoints: [
      [33.3, 35.2],  // Tiro
      [33.5, 35.4],  // Sidone
      [33.9, 35.6],  // Biblo
      [35.6, 35.8],  // Ugarit
      [36.5, 36.1],  // Alessandretta
      [36.0, 36.0]   // Karkemish
    ],
    fonte: "Plinio, NH IX; documentazione fenicia e assira",
    desc: "La porpora fenicia era così preziosa da definire la regalità. «Porfirogenito» (nato nella porpora) significava nato in una camera tappezzata di porpora. Tiro e Sidone dominavano questo commercio nel I millennio a.C."
  },

  // ── ROTTA DEL LAPISLAZZULI ──────────────────────────────────────
  {
    id: "lapislazzuli",
    nome: "Rotta del Lapislazzuli",
    tipo: "terrestre",
    colore: "#9b59b6",
    periodo_min: -3500,
    periodo_max: -300,
    merci: [
      { nome: "Lapislazzuli", icona: "💎", cat: "lusso", note: "Estratto solo a Badakhshan (Afghanistan). Trovato in Egitto, Mesopotamia, Siria, persino a Micene. Simbolo di divinità e regalità." },
      { nome: "Oro",          icona: "💎", cat: "lusso", note: "Ritorna verso oriente come pagamento" }
    ],
    waypoints: [
      [36.5, 70.0],  // Badakhshan / Afghanistan
      [35.0, 62.0],  // Herat
      [34.0, 50.0],  // altopiano iraniano
      [32.5, 44.4],  // Babilonia
      [34.5, 38.5],  // Mari / Siria centrale
      [33.5, 35.4],  // costa levantina
      [30.0, 31.2]   // Egitto
    ],
    fonte: "Cline, 1177 a.C.; Moorey, Ancient Mesopotamian Materials",
    desc: "La miniera di Sar-i Sang in Afghanistan era l'unica fonte di lapislazzuli del mondo antico. La sua presenza in contesti funerari regali dall'Egitto all'Indo prova l'esistenza di reti commerciali continentali già nel IV millennio a.C."
  },

  // ── ROTTA SPEZIE E INCENSO (Arabia) ─────────────────────────────
  {
    id: "incenso_arabia",
    nome: "Via dell'Incenso (Arabia – Levante)",
    tipo: "terrestre",
    colore: "#9b59b6",
    periodo_min: -1000,
    periodo_max: -300,
    merci: [
      { nome: "Incenso e mirra", icona: "💎", cat: "lusso",      note: "Arabia felix e Corno d'Africa. Indispensabili per i culti religiosi in tutto il Vicino Oriente." },
      { nome: "Spezie",          icona: "🌾", cat: "alimentari", note: "Cannella, cardamomo, pepe dall'India via Arabia" },
      { nome: "Oro",             icona: "💎", cat: "lusso",      note: "Oro dell'Arabia meridionale (Ofir biblico?)" }
    ],
    waypoints: [
      [15.0, 44.0],  // Arabia meridionale (Yemen)
      [21.5, 39.8],  // Mecca / Hegiaz
      [26.5, 37.9],  // Tayma
      [29.5, 35.0],  // Aqaba / Golfo di Eilat
      [30.5, 35.5],  // Negev / Cadesh-Barnea
      [31.7, 35.2],  // Gerusalemme
      [33.0, 35.1]   // Tiro / costa
    ],
    fonte: "1 Re 10 (Regina di Saba); Plinio, NH XII",
    desc: "La Via dell'Incenso percorreva 3.000 km dalla penisola arabica al Levante. La storia biblica della Regina di Saba che visita Salomone riflette i rapporti commerciali tra Gerusalemme e l'Arabia meridionale nel X sec. a.C."
  },

  // ── ROTTA MESOPOTAMIA–GOLFO PERSICO ─────────────────────────────
  {
    id: "golfo_persico",
    nome: "Rotta del Golfo Persico (Dilmun)",
    tipo: "marittimo",
    colore: "#e74c3c",
    periodo_min: -3500,
    periodo_max: -1500,
    merci: [
      { nome: "Rame",           icona: "⚒", cat: "metalli",    note: "Oman (Magan) era la fonte principale di rame per la Mesopotamia sumero-accadica" },
      { nome: "Legno di teak",  icona: "🌲", cat: "legname",   note: "Legname dall'India (Meluhha) via Golfo Persico" },
      { nome: "Oro e avorio",   icona: "💎", cat: "lusso",     note: "Prodotti esotici dall'India e dall'Africa orientale" },
      { nome: "Bitume",         icona: "🌾", cat: "alimentari",note: "Bitume naturale dalla Mesopotamia verso il Golfo" }
    ],
    waypoints: [
      [30.0, 48.0],  // Ur / bocca Eufrate
      [27.0, 50.0],  // Dilmun (Bahrain)
      [23.5, 58.5],  // Magan (Oman)
      [22.0, 60.5],  // costa omanita
      [24.0, 67.0]   // Meluhha (Indo / Pakistan)
    ],
    fonte: "Testi di Ur III e Akkad; Leemans, Foreign Trade",
    desc: "Ur era il porto di testa della rotta del Golfo. I re di Ur III ricevevano rame dall'Oman (Magan) e prodotti esotici dall'India (Meluhha). Le tavolette documentano persino la presenza di mercanti indiani a Ur."
  }

];
