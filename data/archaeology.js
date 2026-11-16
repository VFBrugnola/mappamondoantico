// ============================================================
//  SCOPERTE ARCHEOLOGICHE PRINCIPALI DEL VICINO ORIENTE ANTICO
//  Struttura:
//    id, nome, lat, lng
//    scoperta: { anno_moderno, chi, istituzione }
//    periodo_antico: { min, max }  — quando il sito era attivo
//    trova: array di { nome, tipo, anno_scoperta, museo, nota }
//    desc: contesto storico-archeologico
//    wiki: pagina Wikipedia (IT o EN)
// ============================================================

var ARCHAEOLOGY = [

  // ── MESOPOTAMIA ─────────────────────────────────────────────────

  {
    id: "ninive_scavo",
    nome: "Ninive — Biblioteca di Assurbanipal",
    lat: 36.36, lng: 43.16,
    scoperta: { anno: 1842, chi: "Paul-Émile Botta; poi Austen Henry Layard (1847)", istituzione: "Consolato francese / British Museum" },
    periodo_antico: { min: -900, max: -612 },
    trova: [
      { nome: "Epopea di Gilgameš", tipo: "tavolette", anno: 1872, museo: "British Museum", nota: "George Smith decifra la Tavola XI (il diluvio) nel 1872 — notizia mondiale. 30.000 frammenti di tavolette cuneiformi." },
      { nome: "Rilievi del palazzo di Sennacherib", tipo: "scultura", anno: 1847, museo: "British Museum", nota: "Scene dell'assedio di Lachish (-701): le più dettagliate rappresentazioni di guerra del mondo antico." },
      { nome: "Obelisco Nero di Salmanassar III", tipo: "scultura", anno: 1846, museo: "British Museum", nota: "Mostra Jehu di Israele che si prostra: unica immagine di un re biblico." },
      { nome: "Rilievi della caccia al leone di Assurbanipal", tipo: "scultura", anno: 1853, museo: "British Museum", nota: "Capolavoro dell'arte assira: espressione sofferente dei leoni è senza eguali." }
    ],
    desc: "Ninive era la più grande città del mondo antico nel VII sec. a.C. La biblioteca di Assurbanipal conteneva oltre 30.000 tavolette: il primo tentativo sistematico di raccolta del sapere. La sua riscoperta nel XIX sec. fondò l'assiriologia.",
    wiki: "Ninive"
  },

  {
    id: "nimrud_scavo",
    nome: "Nimrud (Kalhu) — Palazzo di Assurnasirpal II",
    lat: 36.10, lng: 43.33,
    scoperta: { anno: 1845, chi: "Austen Henry Layard", istituzione: "British Museum" },
    periodo_antico: { min: -900, max: -612 },
    trova: [
      { nome: "Rilievi a bassorilievo del palazzo NW", tipo: "scultura", anno: 1845, museo: "British Museum / Metropolitan Museum / Iraq Museum", nota: "Migliaia di rilievi figurativi: campagne militari, banchetti, scene di caccia." },
      { nome: "Lamassu (tori androcefali alati)", tipo: "scultura", anno: 1845, museo: "British Museum / Metropolitan Museum", nota: "Figure colossal a guardia delle porte: 5 zampe per sembrare immobile di fronte e in cammino di lato." },
      { nome: "Tesoro di Nimrud — Avori fenici e siriani", tipo: "oggetti", anno: 1988, museo: "Iraq Museum (Baghdad)", nota: "Scoperti nel 1988 da archeologi iracheni: oro, gemme, avori intagliati di straordinaria qualità. Parzialmente rubati nel 2003, ritrovati in banca." }
    ],
    desc: "Kalhu (Nimrud) fu la capitale assira dall'883 al 706 a.C. I rilievi scoperti da Layard inaugurarono la moda orientalista vittoriana e fondarono i musei assiri d'Europa.",
    wiki: "Nimrud"
  },

  {
    id: "khorsabad_scavo",
    nome: "Dur-Sharrukīn (Khorsabad) — Città di Sargon II",
    lat: 36.51, lng: 43.23,
    scoperta: { anno: 1842, chi: "Paul-Émile Botta", istituzione: "Consolato francese / Louvre" },
    periodo_antico: { min: -717, max: -706 },
    trova: [
      { nome: "Palazzo e rilievi di Sargon II", tipo: "scultura", anno: 1842, museo: "Louvre (Paris)", nota: "Primo grande scavo sistematico del Vicino Oriente antico. Botta pensò inizialmente di aver trovato Ninive." },
      { nome: "Lamassu di Khorsabad", tipo: "scultura", anno: 1843, museo: "Louvre / Oriental Institute Chicago", nota: "Colossali tori alati androcefali: alcuni pesano oltre 40 tonnellate." }
    ],
    desc: "Dur-Sharrukīn fu costruita ex novo da Sargon II come nuova capitale assira, ma rimase abitata solo un anno: Sargon morì in battaglia (-705) e la città fu abbandonata. La scoperta di Botta nel 1842 aprì l'era dell'archeologia mesopotamica.",
    wiki: "Dur-Sharrukin"
  },

  {
    id: "assur_scavo",
    nome: "Assur — Città Sacra dell'Assiria",
    lat: 35.46, lng: 43.26,
    scoperta: { anno: 1903, chi: "Walter Andrae", istituzione: "Deutsche Orient-Gesellschaft" },
    periodo_antico: { min: -2500, max: -612 },
    trova: [
      { nome: "Ziggurate e tempio di Assur", tipo: "architettura", anno: 1903, museo: "in situ / Vorderasiatisches Museum Berlino", nota: "La città era la sede della divinità nazionale Assur: capitale religiosa anche quando la politica si spostò." },
      { nome: "Tavolette del periodo medio-assiro", tipo: "tavolette", anno: 1908, museo: "Vorderasiatisches Museum Berlino", nota: "Documenti legali, economici e letterari dell'Assiria Medio (XIV-XI sec. a.C.)" }
    ],
    desc: "Assur è la più antica capitale assira (UNESCO 2003). Gli scavi tedeschi di Andrae (1903-1914) furono tra i più metodici della prima archeologia orientale. Il sito è oggi parzialmente sommerso dalla diga di Mosul.",
    wiki: "Assur_(città)"
  },

  {
    id: "babilonia_scavo",
    nome: "Babilonia — Porta di Ishtar e Via delle Processioni",
    lat: 32.54, lng: 44.42,
    scoperta: { anno: 1899, chi: "Robert Koldewey", istituzione: "Deutsche Orient-Gesellschaft" },
    periodo_antico: { min: -2000, max: -300 },
    trova: [
      { nome: "Porta di Ishtar", tipo: "architettura", anno: 1902, museo: "Pergamonmuseum Berlino (ricostruita)", nota: "Costruita da Nabucodonosor II (~-575): rivestita di mattoni smaltati con draghi (mushhushshu) e tori. Smontata e ricostruita a Berlino." },
      { nome: "Via delle Processioni", tipo: "architettura", anno: 1902, museo: "Pergamonmuseum Berlino (parziale)", nota: "Lastricato cerimoniale con leoni in bassorilievo: 180 leoni su 20 metri di larghezza." },
      { nome: "Tavolette astronomiche e matematiche", tipo: "tavolette", anno: 1900, museo: "British Museum / Vorderasiatisches Museum", nota: "Babilonia era il centro dell'astronomia antica: tavole di effemeridi, calcolo delle eclissi, basi della nostra astrologia." }
    ],
    desc: "Gli scavi di Koldewey (1899-1917) identificarono la Babilonia di Nabucodonosor II. La Porta di Ishtar, smontata e portata a Berlino, è oggi il pezzo forte del Pergamonmuseum. Babilonia fu dichiarata UNESCO nel 2019.",
    wiki: "Babilonia"
  },

  {
    id: "ur_scavo",
    nome: "Ur — Tombe Reali e Ziggurat",
    lat: 30.96, lng: 46.10,
    scoperta: { anno: 1922, chi: "Leonard Woolley", istituzione: "British Museum / University of Pennsylvania" },
    periodo_antico: { min: -2600, max: -500 },
    trova: [
      { nome: "Tombe Reali di Ur (Tomba della Regina Puabi)", tipo: "oggetti", anno: 1927, museo: "British Museum / Penn Museum Philadelphia", nota: "74 persone di corte sepolte vive con la regina. Elmo in oro di Meskalamdug, arpa con testa di toro, copricapo in oro di Puabi." },
      { nome: "Standard di Ur", tipo: "oggetti", anno: 1927, museo: "British Museum", nota: "Pannello in lapislazzuli e conchiglie: le prime scene di guerra e pace documentate. Forse una cassa di risonanza." },
      { nome: "Ziggurat di Ur-Nammu", tipo: "architettura", anno: 1922, museo: "in situ", nota: "Uno dei meglio conservati del mondo: tre terrazze di mattoni cotti, costruito ~-2100. Parzialmente restaurato negli anni '80." }
    ],
    desc: "Gli scavi di Woolley (1922-1934) a Ur rivelarono la straordinaria ricchezza della civiltà sumerica. Le Tombe Reali (c. -2600-2400) contenevano sacrifici umani di massa e oggetti in oro, lapislazzuli e argento senza paragone per l'epoca.",
    wiki: "Ur_(città)"
  },

  {
    id: "nippur_scavo",
    nome: "Nippur — Centro Religioso della Mesopotamia",
    lat: 32.12, lng: 45.23,
    scoperta: { anno: 1889, chi: "John Henry Haynes / Hermann Vollrat Hilprecht", istituzione: "University of Pennsylvania" },
    periodo_antico: { min: -3500, max: -500 },
    trova: [
      { nome: "Oltre 50.000 tavolette cuneiformi", tipo: "tavolette", anno: 1889, museo: "Penn Museum / Istanbul / Iraq Museum", nota: "La più grande raccolta di tavolette mai trovata in un singolo sito: letteratura sumerica, matematica, diritto, astronomia." },
      { nome: "Tavolette letterarie sumeriche", tipo: "tavolette", anno: 1900, museo: "Penn Museum Philadelphia", nota: "Miti di Inanna, lamentazioni, proverbi: la base della letteratura sumerica nota oggi." }
    ],
    desc: "Nippur era la città sacra per eccellenza della Mesopotamia: sede del dio Enlil, mai capitale politica ma sempre centro spirituale. Gli scavi americani (1889-1900) aprirono la letteratura sumerica al mondo. Poi gli scavi continuarono fino agli anni '90.",
    wiki: "Nippur"
  },

  {
    id: "mari_scavo",
    nome: "Mari (Tell Hariri) — Palazzo dei 300 Stanze",
    lat: 34.55, lng: 40.90,
    scoperta: { anno: 1933, chi: "André Parrot", istituzione: "Louvre / CNRS" },
    periodo_antico: { min: -2900, max: -1760 },
    trova: [
      { nome: "Archivio reale (20.000 tavolette)", tipo: "tavolette", anno: 1935, museo: "Louvre (Paris) / Museo di Damasco", nota: "Corrispondenza diplomatica del XVIII sec. a.C.: lettere tra Zimri-Lim e Hammurabi, notizie sui nomadi Amorrei, razioni di cibo, campagne militari." },
      { nome: "Palazzo di Zimri-Lim (300 stanze)", tipo: "architettura", anno: 1933, museo: "in situ", nota: "Uno dei palazzi più grandi del Bronzo Medio: 2,5 ettari, affreschi, bagni, cucine." },
      { nome: "Statua di orante in alabastro", tipo: "scultura", anno: 1934, museo: "Louvre", nota: "Figura in preghiera con occhi incastonati in lapislazzuli." }
    ],
    desc: "Mari era il nodo commerciale sull'Eufrate tra Mesopotamia e Siria. Distrutta da Hammurabi (~-1760) e mai più ricostruita, la città conservò il suo palazzo e archivio intatti. Le tavolette di Mari sono tra le fonti più ricche per la storia del Bronzo Medio.",
    wiki: "Mari_(città)"
  },

  // ── ANATOLIA ────────────────────────────────────────────────────

  {
    id: "hattusa_scavo",
    nome: "Hattusa — Archivio Reale degli Ittiti",
    lat: 40.02, lng: 34.61,
    scoperta: { anno: 1834, chi: "Charles Texier (identificazione); Hugo Winckler (scavo, 1906)", istituzione: "Deutsche Orient-Gesellschaft" },
    periodo_antico: { min: -1800, max: -1180 },
    trova: [
      { nome: "Archivio reale (30.000 tavolette)", tipo: "tavolette", anno: 1906, museo: "Vorderasiatisches Museum Berlino / Museo Anatolian Ankara", nota: "Trattato di Qadesh tra Ramses II e Hattusili III: il testo originale ittita (versione egiziana nota dal tempio di Karnak)." },
      { nome: "Mura ciclopiche e Porta dei Leoni", tipo: "architettura", anno: 1906, museo: "in situ (UNESCO)", nota: "Mura di oltre 6 km con porte monumentali: Porta dei Leoni, Porta dello Sfinge, Porta del Re con rilievo." },
      { nome: "Tempio I (Grande Tempio)", tipo: "architettura", anno: 1907, museo: "in situ", nota: "Il più grande tempio ittita conservato: dedicato alla dea solare Arinna e al dio della tempesta." }
    ],
    desc: "Hattusa fu la capitale dell'impero ittita per 500 anni. La scoperta dell'archivio reale da parte di Winckler (1906) aprì la civiltà ittita alla ricerca: le tavolette includono il primo trattato di pace internazionale. UNESCO dal 1986.",
    wiki: "Hattusa"
  },

  {
    id: "kanesh_scavo",
    nome: "Kanesh (Kültepe) — Archivio dei Mercanti Assiri",
    lat: 38.85, lng: 35.63,
    scoperta: { anno: 1925, chi: "Bedřich Hrozný; poi Tahsin Özgüç (1948-2005)", istituzione: "Istituto Ceco / Università di Ankara" },
    periodo_antico: { min: -2000, max: -1750 },
    trova: [
      { nome: "23.000 tavolette cuneiformi (kārum)", tipo: "tavolette", anno: 1948, museo: "Museo delle Civiltà Anatoliche, Ankara", nota: "Il corpus documentario più ricco del commercio privato antico: contratti, lettere, prestiti, polizze. Prima documentazione del sistema finanziario moderno." },
      { nome: "Ceramica a becco (teiere anatoliche)", tipo: "ceramica", anno: 1925, museo: "Museo delle Civiltà Anatoliche, Ankara", nota: "Stile ceramico tipico del Bronzo Medio anatolico." }
    ],
    desc: "Il kārum di Kanesh (XIX-XVIII sec. a.C.) era la colonia commerciale assira più importante dell'Anatolia. Le 23.000 tavolette trovate mostrano una rete di commercio privato sorprendentemente moderna: contratti a termine, prestiti a interesse, assicurazioni sui trasporti.",
    wiki: "Kültepe"
  },

  // ── LEVANTE ──────────────────────────────────────────────────────

  {
    id: "ugarit_scavo",
    nome: "Ugarit (Ras Shamra) — Alfabeto e Mito",
    lat: 35.60, lng: 35.78,
    scoperta: { anno: 1929, chi: "Claude Schaeffer (da 1929)", istituzione: "Académie des Inscriptions, Parigi" },
    periodo_antico: { min: -2000, max: -1185 },
    trova: [
      { nome: "Alfabeto cuneiforme di Ugarit (30 segni)", tipo: "tavolette", anno: 1929, museo: "Museo Nazionale di Damasco / Louvre", nota: "Il primo alfabeto della storia (consonantico, 30 segni): precursore diretto dell'alfabeto fenicio e poi greco-latino. Decifrato in pochi mesi nel 1930." },
      { nome: "Ciclo di Baal (mitologia cananea)", tipo: "tavolette", anno: 1930, museo: "Museo Nazionale di Damasco", nota: "Il corpus mitologico più importante del Canaan: il dio Baal, Mot, Anat. Molti parallelismi con la Bibbia." },
      { nome: "Archivio del palazzo reale", tipo: "tavolette", anno: 1932, museo: "Louvre / Damasco", nota: "Corrispondenza diplomatica con Egitto, Ittiti, Cipro: fotografia del sistema internazionale del Bronzo Tardo." }
    ],
    desc: "Ugarit fu una delle città-stato più fiorenti del Bronzo Tardo (-1400/-1185). La sua scoperta accidentale nel 1928 (un contadino trovò una tomba arando) rivoluzionò la comprensione della religione e della lingua del Canaan. L'alfabeto ugarítico è il più antico alfabeto completo noto.",
    wiki: "Ugarit"
  },

  {
    id: "amarna_scavo",
    nome: "Amarna (Akhetaton) — Lettere diplomatiche",
    lat: 27.65, lng: 30.90,
    scoperta: { anno: 1887, chi: "Contadina locale (accidentale); poi Flinders Petrie (1891-92)", istituzione: "British Museum / Ägyptisches Museum Berlino" },
    periodo_antico: { min: -1346, max: -1332 },
    trova: [
      { nome: "Lettere di Amarna (382 tavolette)", tipo: "tavolette", anno: 1887, museo: "British Museum / Ägyptisches Museum Berlino / Cairo", nota: "Corrispondenza diplomatica in accadico tra Egitto (Amenofi III, Akhenaton) e tutte le grandi potenze: la finestra più nitida sul sistema diplomatico del Bronzo Tardo." },
      { nome: "Busto di Nefertiti", tipo: "scultura", anno: 1912, museo: "Ägyptisches Museum Berlino", nota: "Trovato da Ludwig Borchardt; uscì dall'Egitto in circostanze controverse. Ancora oggetto di richiesta di restituzione da parte dell'Egitto." },
      { nome: "Rilievi del periodo amarniano", tipo: "scultura", anno: 1891, museo: "vari musei europei e Cairo", nota: "Stile naturalista rivoluzionario: il sole Aton con raggi a mano, scene di vita familiare reale." }
    ],
    desc: "Amarna fu la città costruita da Akhenaton (-1346) e abbandonata dopo la sua morte. La scoperta accidentale dell'archivio nel 1887 da parte di una contadina rivoluzionò la comprensione della diplomazia del Bronzo Tardo e della 'eresia' di Akhenaton.",
    wiki: "Amarna"
  },

  {
    id: "ebla_scavo",
    nome: "Ebla (Tell Mardikh) — Grande Archivio del III Millennio",
    lat: 35.80, lng: 36.80,
    scoperta: { anno: 1964, chi: "Paolo Matthiae", istituzione: "Università La Sapienza, Roma" },
    periodo_antico: { min: -3000, max: -1600 },
    trova: [
      { nome: "Archivio reale (17.000 tavolette)", tipo: "tavolette", anno: 1975, museo: "Museo Nazionale di Aleppo", nota: "Scoperta nel 1975: la più grande biblioteca del III millennio a.C. Lingue: sumerico ed eblaita (semita). Rivela una grande civiltà dimenticata." },
      { nome: "Tavolette bilingui sumerico-eblaita", tipo: "tavolette", anno: 1975, museo: "Museo di Aleppo", nota: "Dizionari bilingui: strumenti per lo studio del sumerico da parte dei scribi di Ebla." }
    ],
    desc: "Ebla fu una delle maggiori potenze siriane del III millennio a.C., con una rete commerciale che si estendeva dall'Anatolia alla Mesopotamia. La scoperta dell'archivio (1975) da parte di Matthiae fu la più importante del XX sec. in Siria. Il sito è stato gravemente danneggiato durante la guerra civile siriana.",
    wiki: "Ebla"
  },

  {
    id: "megiddo_scavo",
    nome: "Megiddo — 20 Strati di Civiltà",
    lat: 32.58, lng: 35.18,
    scoperta: { anno: 1903, chi: "Gottlieb Schumacher; poi Oriental Institute Chicago (1925-1939)", istituzione: "Oriental Institute, Università di Chicago" },
    periodo_antico: { min: -3500, max: -300 },
    trova: [
      { nome: "20 strati sovrapposti di occupazione", tipo: "architettura", anno: 1925, museo: "Oriental Institute Chicago / Museo di Israele", nota: "Megiddo è il sito stratigrafico di riferimento per la cronologia del Levante. Ogni strato = una civiltà diversa." },
      { nome: "Scuderia di Acab (?) / Stabile di Salomone (?)", tipo: "architettura", anno: 1928, museo: "in situ", nota: "Strutture monumentali del X-IX sec. a.C.: dibattito se appartengano a Salomone o ad Acab." },
      { nome: "Sigillo di Shema, servo di Geroboamo", tipo: "oggetti", anno: 1904, museo: "disperso (calco in musei)", nota: "Uno dei rari sigilli che menziona un re biblico per nome." }
    ],
    desc: "Megiddo (Armageddon) è il sito più scavato del Levante: 20 strati sovrapposti dal Calcolitico al periodo persiano. Il nome 'Armageddon' (Har Megiddo, Monte Megiddo) deriva da qui. UNESCO dal 2005.",
    wiki: "Megiddo_(sito_arqueológico)"
  },

  {
    id: "gerico_scavo",
    nome: "Gerico — La Città più Antica del Mondo",
    lat: 31.87, lng: 35.44,
    scoperta: { anno: 1907, chi: "Ernst Sellin; poi John Garstang (1930); Kathleen Kenyon (1952-1958)", istituzione: "British School of Archaeology" },
    periodo_antico: { min: -9000, max: -500 },
    trova: [
      { nome: "Torre neolitica (c. -8000)", tipo: "architettura", anno: 1952, museo: "in situ", nota: "La struttura in pietra più antica del mondo: torre di 8 metri, scala interna, precedente all'agricoltura. Chi costruì una torre prima delle città?" },
      { nome: "Cranie modellate del PPNB", tipo: "oggetti", anno: 1953, museo: "Museo di Amman / British Museum", nota: "Cranî umani ricoperti di gesso con occhi in conchiglia: culto degli antenati nel VII millennio a.C." },
      { nome: "Mura della Tarda Età del Bronzo", tipo: "architettura", anno: 1930, museo: "in situ", nota: "Kenyon dimostrò che le mura del Bronzo Tardo crollarono prima del periodo biblico di Giosuè: dibattito storico-teologico tutt'ora aperto." }
    ],
    desc: "Gerico è il sito abitato più antico del mondo (dal 10.000 a.C. circa). Gli scavi di Kathleen Kenyon (1952-58) rivoluzionarono la comprensione del Neolitico levantino con la torre neolitica e le cranî modellate. Il dibattito sulle mura bibliche continua.",
    wiki: "Gerico"
  },

  // ── EGITTO / LEVANTE MERIDIONALE ────────────────────────────────

  {
    id: "lachish_scavo",
    nome: "Lachish — Ostraca e Rilievi di Sennacherib",
    lat: 31.56, lng: 34.85,
    scoperta: { anno: 1932, chi: "James Leslie Starkey (1932-1938); poi David Ussishkin (1973-1994)", istituzione: "Wellcome-Marston / Università di Tel Aviv" },
    periodo_antico: { min: -2000, max: -587 },
    trova: [
      { nome: "Ostraca di Lachish (21 cocci scritti)", tipo: "tavolette", anno: 1935, museo: "British Museum / Museo di Israele", nota: "Lettere in ebraico antico scritte su cocci durante l'assedio di Sennacherib (-701) o Nabucodonosor (-587): «Non vediamo più i fuochi di segnale di Azeka»." },
      { nome: "Porta a sei vani del Ferro II", tipo: "architettura", anno: 1973, museo: "in situ", nota: "Una delle porte a sei vani meglio conservate del Levante: struttura difensiva monumentale del periodo monarchico." }
    ],
    desc: "Lachish era la seconda città più importante di Giuda dopo Gerusalemme. I rilievi del palazzo di Sennacherib a Ninive mostrano l'assedio con dettaglio straordinario. Gli ostraca di Lachish sono i documenti scritti in ebraico più antichi fuori dalla Bibbia.",
    wiki: "Tel_Lachish"
  },

  // ── PERSIA / IRAN ────────────────────────────────────────────────

  {
    id: "persepoli_scavo",
    nome: "Persepoli — Capitale Cerimoniale Achemenide",
    lat: 29.93, lng: 52.89,
    scoperta: { anno: 1931, chi: "Ernst Herzfeld; poi Erich Schmidt", istituzione: "Oriental Institute, Università di Chicago" },
    periodo_antico: { min: -520, max: -330 },
    trova: [
      { nome: "Scala delle Apadane con rilievi dei delegati", tipo: "scultura", anno: 1931, museo: "in situ (UNESCO)", nota: "Processione di 23 delegazioni da tutto l'impero: il più grande «atlas» dei popoli dell'antichità — Medi, Parti, Elamiti, Greci, Egizi, Nubiani, Indiani con elefanti." },
      { nome: "Archivio della Fortezza (30.000 tavolette)", tipo: "tavolette", anno: 1933, museo: "Oriental Institute Chicago", nota: "Razioni di cibo, paghe di operai, transiti di ambasciatori: la contabilità dell'impero." },
      { nome: "Iscrizioni trilingui (persiano antico, elamita, babilonese)", tipo: "iscrizioni", anno: 1931, museo: "in situ", nota: "Clé per la decifrazione del persiano antico, parallela alla Stele di Rosetta per l'egiziano." }
    ],
    desc: "Persepoli fu la capitale cerimoniale degli Achemenidi, costruita da Dario I e completata da Serse I. Bruciata da Alessandro Magno nel -330. Gli scavi dell'Oriental Institute (1931-39) ne rivelarono la grandiosità. UNESCO dal 1979.",
    wiki: "Persepoli"
  },

  {
    id: "susa_scavo",
    nome: "Susa — Stele di Hammurabi e Capitale Elamita",
    lat: 32.19, lng: 48.26,
    scoperta: { anno: 1884, chi: "Marcel Dieulafoy; poi Jacques de Morgan (1897-1912)", istituzione: "Missione Francese" },
    periodo_antico: { min: -4000, max: -330 },
    trova: [
      { nome: "Stele di Hammurabi", tipo: "scultura", anno: 1901, museo: "Louvre (Paris)", nota: "2,25 metri di diorite: il Codice di Hammurabi (282 leggi) con il re che riceve la legge dal dio Shamash. Portata a Susa come bottino di guerra dagli Elamiti (-1157)." },
      { nome: "Stele della Vittoria di Naram-Sin", tipo: "scultura", anno: 1898, museo: "Louvre (Paris)", nota: "Monumento della vittoria del re akkadico Naram-Sin (-2250 ca.) portato anch'esso a Susa come bottino." },
      { nome: "Frigio degli arcieri (palazzo di Dario)", tipo: "scultura", anno: 1884, museo: "Louvre", nota: "Pannello in mattoni smaltati con guardie immortali di Dario I: parallelo alla Sala delle Apadane di Persepoli." }
    ],
    desc: "Susa fu una delle capitali più antiche del mondo (dal IV millennio a.C.) e capitale degli Achemenidi in inverno. I Francesi ottennero il monopolio degli scavi in Persia per decenni: molti dei pezzi più importanti del Louvre vengono da qui.",
    wiki: "Susa_(città_antica)"
  },

  // ── SCOPERTA SUBACQUEA ───────────────────────────────────────────

  {
    id: "uluburun",
    nome: "Relitto di Uluburun — Nave del Bronzo Tardo",
    lat: 36.18, lng: 29.57,
    scoperta: { anno: 1982, chi: "Mehmed Çakır (pescatore); poi George Bass e Cemal Pulak (1984-1994)", istituzione: "Institute of Nautical Archaeology (INA)" },
    periodo_antico: { min: -1310, max: -1300 },
    trova: [
      { nome: "10 tonnellate di lingotti di rame (oxhide)", tipo: "oggetti", anno: 1984, museo: "Museo di Bodrum", nota: "354 lingotti a forma di pelle di bue: la più grande riserva di rame del Bronzo Tardo mai trovata." },
      { nome: "Tavolette con scrittura ugarítica", tipo: "tavolette", anno: 1986, museo: "Museo di Bodrum", nota: "Una sola tavoletta a cera ancora nella cornice di legno: il più antico «libro» portatile noto." },
      { nome: "Manufatti di 11 culture diverse", tipo: "oggetti", anno: 1984, museo: "Museo di Bodrum", nota: "Egiziani, Cananei, Ciprioti, Micenei, Assiri, Cassiti, Nubiani: fotografia del commercio internazionale del XIV sec. a.C. secondo Cline." }
    ],
    desc: "Il relitto di Uluburun (c. -1310-1300) è la nave del Bronzo Tardo meglio documentata. Il suo carico — rame cipriota, stagno, resine, vetro, avorio, manufatti di 11 culture — è la prova fisica più potente del sistema commerciale internazionale descritto da Cline in «1177 a.C.».",
    wiki: "Relitto_di_Uluburun"
  }

];
