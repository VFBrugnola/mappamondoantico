// ============================================================
//  EVENTS
//  Campi: id, anno, titolo, desc, tipo, livello, civ[], city, tags[]
//  tipo: battaglia | fondazione | distruzione | trattato | disastro | politico | culturale | scientifico
//  livello: globale | locale
//  city: id della città (stringa minuscola senza accenti) o null
// ============================================================
var EVENTS = [
  {
    "id": "gerico_primi",
    "anno": -9000,
    "titolo": "Prime strutture permanenti",
    "desc": "A Gerico sorgono torre e mura in pietra tra le più antiche al mondo: uno dei primissimi insediamenti stabili dell'umanità.",
    "tipo": "fondazione",
    "livello": "globale",
    "civ": [
      "cananea"
    ],
    "city": null,
    "tags": [
      "neolitico",
      "architettura"
    ]
  },
  {
    "id": "scrittura_uruk",
    "anno": -3200,
    "titolo": "Invenzione della scrittura",
    "desc": "A Uruk nasce la scrittura cuneiforme, inizialmente usata per registrare scambi commerciali su tavolette d'argilla.",
    "tipo": "culturale",
    "livello": "globale",
    "civ": [
      "mesopotamica"
    ],
    "city": "uruk",
    "tags": [
      "scrittura",
      "commercio"
    ]
  },
  {
    "id": "unificazione_egitto",
    "anno": -3100,
    "titolo": "Unificazione dell'Egitto",
    "desc": "Il faraone Narmer unifica Alto e Basso Egitto, fondando la prima dinastia e lo stato egizio.",
    "tipo": "politico",
    "livello": "globale",
    "civ": [
      "egizia"
    ],
    "city": "menfi",
    "tags": [
      "egitto",
      "politico"
    ]
  },
  {
    "id": "piramide_giza",
    "anno": -2560,
    "titolo": "Grande Piramide di Giza",
    "desc": "Cheope fa costruire la Grande Piramide: per millenni resterà la struttura più alta del mondo.",
    "tipo": "culturale",
    "livello": "globale",
    "civ": [
      "egizia"
    ],
    "city": null,
    "tags": [
      "architettura",
      "egitto"
    ]
  },
  {
    "id": "sargon_akkad",
    "anno": -2350,
    "titolo": "Impero di Akkad",
    "desc": "Sargon di Akkad fonda il primo impero della storia, unificando la Mesopotamia sotto un unico potere politico.",
    "tipo": "politico",
    "livello": "globale",
    "civ": [
      "mesopotamica"
    ],
    "city": "akkad",
    "tags": [
      "impero",
      "mesopotamia"
    ]
  },
  {
    "id": "ziggurat_ur",
    "anno": -2100,
    "titolo": "Ziggurat di Ur",
    "desc": "Ur-Nammu costruisce la grande Ziggurat di Ur e fonda la terza dinastia sumera.",
    "tipo": "culturale",
    "livello": "globale",
    "civ": [
      "mesopotamica"
    ],
    "city": "ur",
    "tags": [
      "architettura",
      "religione"
    ]
  },
  {
    "id": "karum_kanesh",
    "anno": -1900,
    "titolo": "Karum di Kanesh",
    "desc": "Mercanti assiri fondano la loro colonia commerciale (karum) a Kanesh in Anatolia, diffondendo la scrittura cuneiforme.",
    "tipo": "culturale",
    "livello": "globale",
    "civ": [
      "assira",
      "ittita"
    ],
    "city": "kanesh",
    "tags": [
      "commercio",
      "scrittura",
      "anatolia"
    ]
  },
  {
    "id": "hyksos_egitto",
    "anno": -1800,
    "titolo": "Hyksos in Egitto",
    "desc": "I popoli Hyksos penetrano nel delta del Nilo e fondano la loro capitale ad Avaris, introducendo il carro da guerra.",
    "tipo": "politico",
    "livello": "globale",
    "civ": [
      "egizia"
    ],
    "city": "avaris",
    "tags": [
      "invasione",
      "egitto"
    ]
  },
  {
    "id": "codice_hammurabi",
    "anno": -1750,
    "titolo": "Codice di Hammurabi",
    "desc": "Hammurabi promulga il suo celebre codice di leggi, inciso su una stele di diorite. Uno dei primi sistemi giuridici scritti della storia.",
    "tipo": "politico",
    "livello": "globale",
    "civ": [
      "mesopotamica"
    ],
    "city": "babilonia",
    "tags": [
      "diritto",
      "leggi"
    ]
  },
  {
    "id": "apogeo_cnosso",
    "anno": -1700,
    "titolo": "Apogeo di Cnosso",
    "desc": "Il palazzo di Cnosso raggiunge il massimo splendore: la civiltà minoica domina il Mediterraneo orientale.",
    "tipo": "culturale",
    "livello": "globale",
    "civ": [
      "minoica"
    ],
    "city": "cnosso",
    "tags": [
      "palazzo",
      "bronzo"
    ]
  },
  {
    "id": "thera",
    "anno": -1628,
    "titolo": "Eruzione di Thera",
    "desc": "La catastrofica eruzione di Thera (Santorino) seppellisce Akrotiri e provoca uno tsunami che sconvolge il Mediterraneo orientale.",
    "tipo": "disastro",
    "livello": "globale",
    "civ": [
      "minoica"
    ],
    "city": "akrotiri",
    "tags": [
      "eruzione",
      "disastro",
      "bronzo_tardo"
    ]
  },
  {
    "id": "nuovo_regno",
    "anno": -1550,
    "titolo": "Inizio del Nuovo Regno Egizio",
    "desc": "Ahmose I caccia gli Hyksos dall'Egitto e fonda il Nuovo Regno, il periodo di massimo splendore militare e artistico egizio.",
    "tipo": "politico",
    "livello": "globale",
    "civ": [
      "egizia"
    ],
    "city": "menfi",
    "tags": [
      "egitto",
      "conquista"
    ]
  },
  {
    "id": "megiddo_thutmosi",
    "anno": -1457,
    "titolo": "Battaglia di Megiddo",
    "desc": "Thutmosi III sconfigge una coalizione cananea a Megiddo: la prima battaglia dettagliatamente documentata della storia.",
    "tipo": "battaglia",
    "livello": "globale",
    "civ": [
      "egizia",
      "cananea"
    ],
    "city": "megiddo",
    "tags": [
      "battaglia",
      "egitto",
      "canaan"
    ]
  },
  {
    "id": "amarna_akhenaton",
    "anno": -1346,
    "titolo": "Rivoluzione di Amarna",
    "desc": "Akhenaton fonda Amarna e impone il culto del solo Aton: il primo monoteismo documentato della storia.",
    "tipo": "politico",
    "livello": "globale",
    "civ": [
      "egizia"
    ],
    "city": "amarna",
    "tags": [
      "religione",
      "monoteismo",
      "egitto"
    ]
  },
  {
    "id": "qadesh",
    "anno": -1274,
    "titolo": "Battaglia di Qadesh",
    "desc": "Ramesse II e Muwatalli II degli Ittiti si scontrano a Qadesh. La battaglia è un pareggio; nasce il primo trattato di pace documentato.",
    "tipo": "battaglia",
    "livello": "globale",
    "civ": [
      "egizia",
      "ittita"
    ],
    "city": "qadesh",
    "tags": [
      "battaglia",
      "trattato",
      "bronzo_tardo"
    ]
  },
  {
    "id": "crollo_bronzo",
    "anno": -1200,
    "titolo": "Crollo dell'Età del Bronzo",
    "desc": "I Popoli del Mare devastano il Mediterraneo orientale. Crollano gli Ittiti, i Micenei, Ugarit. Fine di un intero sistema di civiltà interconnesse.",
    "tipo": "disastro",
    "livello": "globale",
    "civ": [
      "ittita",
      "micenea",
      "cananea"
    ],
    "city": null,
    "tags": [
      "collasso",
      "popoli_del_mare",
      "bronzo_tardo"
    ]
  },
  {
    "id": "ugarit_distrutta",
    "anno": -1185,
    "titolo": "Distruzione di Ugarit",
    "desc": "Ugarit viene distrutta dai Popoli del Mare. Nell'archivio si trovano ancora le tavolette dell'ultimo re che chiede aiuto.",
    "tipo": "distruzione",
    "livello": "globale",
    "civ": [
      "cananea"
    ],
    "city": "ugarit",
    "tags": [
      "popoli_del_mare",
      "distruzione"
    ]
  },
  {
    "id": "hattusa_caduta",
    "anno": -1180,
    "titolo": "Caduta di Hattusa",
    "desc": "La capitale ittita Hattusa viene abbandonata e bruciata. L'Impero Ittita cessa di esistere.",
    "tipo": "distruzione",
    "livello": "globale",
    "civ": [
      "ittita"
    ],
    "city": "hattusa",
    "tags": [
      "collasso",
      "ittiti"
    ]
  },
  {
    "id": "micenei_caduta",
    "anno": -1100,
    "titolo": "Crollo dei Micenei",
    "desc": "I palazzi micenei vengono distrutti. La scrittura lineare B scompare per secoli. La Grecia entra nei secoli bui.",
    "tipo": "distruzione",
    "livello": "globale",
    "civ": [
      "micenea"
    ],
    "city": null,
    "tags": [
      "collasso",
      "micenei"
    ]
  },
  {
    "id": "ninive_assira",
    "anno": -700,
    "titolo": "Ninive capitale assira",
    "desc": "Sennacherib fa di Ninive la capitale dell'Impero Assiro, abbellendola con il grande palazzo e i celebri rilievi dei leoni.",
    "tipo": "politico",
    "livello": "globale",
    "civ": [
      "assira"
    ],
    "city": "ninive",
    "tags": [
      "assiria",
      "capitale"
    ]
  },
  {
    "id": "cartagine_fondazione",
    "anno": -814,
    "titolo": "Fondazione di Cartagine",
    "desc": "Secondo la tradizione, la regina fenicia Didone fonda Cartagine sulle coste dell'odierna Tunisia.",
    "tipo": "fondazione",
    "livello": "globale",
    "civ": [
      "cartaginese"
    ],
    "city": "cartagine",
    "tags": [
      "fondazione",
      "fenicia"
    ]
  },
  {
    "id": "olimpiadi",
    "anno": -776,
    "titolo": "Primi Giochi Olimpici",
    "desc": "Si svolgono i primi Giochi Olimpici documentati ad Olimpia nel Peloponneso: atletica, corse di carri, sport di combattimento.",
    "tipo": "culturale",
    "livello": "globale",
    "civ": [
      "greca"
    ],
    "city": null,
    "tags": [
      "sport",
      "religione",
      "grecia"
    ]
  },
  {
    "id": "roma_fondata",
    "anno": -753,
    "titolo": "Fondazione di Roma",
    "desc": "La tradizione romana fissa al 753 a.C. la fondazione di Roma da parte di Romolo. In realtà un lungo processo di aggregazione di villaggi latini.",
    "tipo": "fondazione",
    "livello": "globale",
    "civ": [
      "romana"
    ],
    "city": "roma",
    "tags": [
      "fondazione",
      "roma"
    ]
  },
  {
    "id": "ninive_caduta",
    "anno": -612,
    "titolo": "Caduta di Ninive",
    "desc": "Babilonesi e Medi distruggono Ninive. Fine dell'Impero Assiro, per secoli la potenza più temuta del mondo antico.",
    "tipo": "distruzione",
    "livello": "globale",
    "civ": [
      "assira",
      "mesopotamica"
    ],
    "city": "ninive",
    "tags": [
      "distruzione",
      "assiria"
    ]
  },
  {
    "id": "gerusalemme_distrutta",
    "anno": -586,
    "titolo": "Distruzione di Gerusalemme",
    "desc": "Nabucodonosor II distrugge il Tempio di Salomone e deporta gli Ebrei a Babilonia: l'esilio babilonese.",
    "tipo": "distruzione",
    "livello": "globale",
    "civ": [
      "mesopotamica"
    ],
    "city": "babilonia",
    "tags": [
      "deportazione",
      "giudea"
    ]
  },
  {
    "id": "ciro_persia",
    "anno": -550,
    "titolo": "Ciro fonda l'Impero Persiano",
    "desc": "Ciro il Grande sconfigge Medi, Lidi e Babilonesi, fondando il primo grande impero universale della storia.",
    "tipo": "politico",
    "livello": "globale",
    "civ": [
      "persiana"
    ],
    "city": "pasargade",
    "tags": [
      "impero",
      "persia"
    ]
  },
  {
    "id": "maratona",
    "anno": -490,
    "titolo": "Battaglia di Maratona",
    "desc": "Gli Ateniesi sconfiggono l'esercito persiano di Dario I a Maratona. La leggenda narra della corsa dell'annuncio.",
    "tipo": "battaglia",
    "livello": "globale",
    "civ": [
      "greca",
      "persiana"
    ],
    "city": null,
    "tags": [
      "battaglia",
      "guerra_persiana"
    ]
  },
  {
    "id": "termopili_salamina",
    "anno": -480,
    "titolo": "Termopili e Salamina",
    "desc": "Leonida resiste alle Termopili. Temistocle distrugge la flotta persiana a Salamina. La Grecia è salva.",
    "tipo": "battaglia",
    "livello": "globale",
    "civ": [
      "greca",
      "persiana"
    ],
    "city": null,
    "tags": [
      "battaglia",
      "guerra_persiana"
    ]
  },
  {
    "id": "peloponneso_fine",
    "anno": -404,
    "titolo": "Fine della guerra del Peloponneso",
    "desc": "Atene si arrende a Sparta dopo 27 anni di guerra. Fine dell'età classica ateniese.",
    "tipo": "politico",
    "livello": "globale",
    "civ": [
      "greca"
    ],
    "city": null,
    "tags": [
      "guerra",
      "grecia",
      "sparta"
    ]
  },
  {
    "id": "alessandro_asia",
    "anno": -334,
    "titolo": "Alessandro in Asia",
    "desc": "Alessandro Magno attraversa l'Ellesponto e inizia la sua fulminea conquista dell'Impero Persiano.",
    "tipo": "politico",
    "livello": "globale",
    "civ": [
      "greca",
      "persiana"
    ],
    "city": null,
    "tags": [
      "conquista",
      "alessandro"
    ]
  },
  {
    "id": "alessandro_muore",
    "anno": -323,
    "titolo": "Morte di Alessandro Magno",
    "desc": "Alessandro muore a Babilonia a soli 32 anni. Il suo impero viene diviso tra i Diadochi: inizia l'età ellenistica.",
    "tipo": "politico",
    "livello": "globale",
    "civ": [
      "ellenistica"
    ],
    "city": "babilonia",
    "tags": [
      "morte",
      "ellenismo"
    ]
  },
  {
    "id": "prima_punica",
    "anno": -264,
    "titolo": "Prima guerra punica",
    "desc": "Roma e Cartagine si scontrano per il controllo della Sicilia nella prima guerra punica (264–241 a.C.).",
    "tipo": "battaglia",
    "livello": "globale",
    "civ": [
      "romana",
      "cartaginese"
    ],
    "city": null,
    "tags": [
      "guerra",
      "sicilia",
      "punica"
    ]
  },
  {
    "id": "annibale_alpi",
    "anno": -218,
    "titolo": "Annibale attraversa le Alpi",
    "desc": "Annibale porta 40.000 soldati ed elefanti attraverso le Alpi in autunno. Inizia la seconda guerra punica.",
    "tipo": "battaglia",
    "livello": "globale",
    "civ": [
      "cartaginese",
      "romana"
    ],
    "city": null,
    "tags": [
      "guerra",
      "annibale",
      "punica"
    ]
  },
  {
    "id": "canne",
    "anno": -216,
    "titolo": "Battaglia di Canne",
    "desc": "Annibale sconfigge l'esercito romano a Canne con una manovra ad accerchiamento diventata paradigma tattico. Circa 50.000 morti romani in un giorno.",
    "tipo": "battaglia",
    "livello": "globale",
    "civ": [
      "cartaginese",
      "romana"
    ],
    "city": null,
    "tags": [
      "battaglia",
      "annibale",
      "tattica"
    ]
  },
  {
    "id": "zama",
    "anno": -202,
    "titolo": "Battaglia di Zama",
    "desc": "Scipione Africano sconfigge Annibale a Zama. Fine della seconda guerra punica. Roma diventa la potenza dominante del Mediterraneo.",
    "tipo": "battaglia",
    "livello": "globale",
    "civ": [
      "romana",
      "cartaginese"
    ],
    "city": null,
    "tags": [
      "battaglia",
      "roma",
      "punica"
    ]
  },
  {
    "id": "cartagine_corinto_distrutte",
    "anno": -146,
    "titolo": "Distruzione di Cartagine e Corinto",
    "desc": "Nello stesso anno Roma rade al suolo Cartagine (Scipione Emiliano) e Corinto. Il Mediterraneo diventa un lago romano.",
    "tipo": "distruzione",
    "livello": "globale",
    "civ": [
      "romana",
      "cartaginese",
      "greca"
    ],
    "city": null,
    "tags": [
      "distruzione",
      "roma",
      "dominio"
    ]
  },
  {
    "id": "cesare_assassinio",
    "anno": -44,
    "titolo": "Assassinio di Giulio Cesare",
    "desc": "Giulio Cesare viene assassinato alle Idi di Marzo nel Senato di Roma da Bruto, Cassio e altri congiurati.",
    "tipo": "politico",
    "livello": "globale",
    "civ": [
      "romana"
    ],
    "city": "roma",
    "tags": [
      "morte",
      "cesare",
      "politico"
    ]
  },
  {
    "id": "azio",
    "anno": -31,
    "titolo": "Battaglia di Azio",
    "desc": "Ottaviano sconfigge Marco Antonio e Cleopatra. Fine dell'età ellenistica. Roma diventa formalmente un impero.",
    "tipo": "battaglia",
    "livello": "globale",
    "civ": [
      "romana",
      "ellenistica"
    ],
    "city": null,
    "tags": [
      "battaglia",
      "augusto",
      "ellenismo"
    ]
  },
  {
    "id": "vesuvio",
    "anno": 79,
    "titolo": "Eruzione del Vesuvio",
    "desc": "Il Vesuvio erutta e seppellisce Pompei ed Ercolano sotto cenere e lapilli. Un mondo romano congelato nel tempo.",
    "tipo": "disastro",
    "livello": "globale",
    "civ": [
      "romana"
    ],
    "city": "pompei",
    "tags": [
      "eruzione",
      "disastro",
      "pompei"
    ]
  },
  {
    "id": "traiano_massimo",
    "anno": 117,
    "titolo": "Massima espansione romana",
    "desc": "Sotto Traiano l'Impero Romano raggiunge la sua massima estensione: dalla Scozia alla Mesopotamia.",
    "tipo": "politico",
    "livello": "globale",
    "civ": [
      "romana"
    ],
    "city": "roma",
    "tags": [
      "impero",
      "espansione",
      "traiano"
    ]
  },
  {
    "id": "costantinopoli",
    "anno": 330,
    "titolo": "Fondazione di Costantinopoli",
    "desc": "Costantino inaugura la nuova capitale dell'Impero sull'antica Bisanzio, sul Bosforo.",
    "tipo": "fondazione",
    "livello": "globale",
    "civ": [
      "romana"
    ],
    "city": "bisanzio",
    "tags": [
      "fondazione",
      "costantino",
      "capitale"
    ]
  },
  {
    "id": "sacco_visigoti",
    "anno": 410,
    "titolo": "I Visigoti saccheggiano Roma",
    "desc": "Alarico e i Visigoti saccheggiano Roma per tre giorni. Per la prima volta in 800 anni un nemico entra in città.",
    "tipo": "distruzione",
    "livello": "globale",
    "civ": [
      "romana"
    ],
    "city": "roma",
    "tags": [
      "sacco",
      "visigoti",
      "declino"
    ]
  },
  {
    "id": "caduta_roma",
    "anno": 476,
    "titolo": "Caduta dell'Impero Romano d'Occidente",
    "desc": "Odoacre depone Romolo Augustolo, ultimo imperatore romano d'Occidente. Convenzionalmente fine del mondo antico.",
    "tipo": "politico",
    "livello": "globale",
    "civ": [
      "romana"
    ],
    "city": "roma",
    "tags": [
      "caduta",
      "fine_impero"
    ]
  },
  {
    "id": "atene_dracone",
    "anno": -621,
    "titolo": "Leggi di Dracone",
    "desc": "Dracone redige il primo codice di leggi scritto di Atene. Le pene sono severissime (quasi tutto è punito con la morte), ma la codificazione scritta è una rivoluzione.",
    "tipo": "politico",
    "livello": "locale",
    "civ": [
      "greca"
    ],
    "city": "atene",
    "tags": [
      "diritto",
      "leggi",
      "atene"
    ]
  },
  {
    "id": "atene_solone",
    "anno": -594,
    "titolo": "Riforme di Solone",
    "desc": "Solone abolisce la schiavitù per debiti, ridistribuisce la terra e istituisce l'assemblea popolare. Le basi della democrazia ateniese sono gettate.",
    "tipo": "politico",
    "livello": "locale",
    "civ": [
      "greca"
    ],
    "city": "atene",
    "tags": [
      "democrazia",
      "riforma",
      "atene"
    ]
  },
  {
    "id": "atene_clistene",
    "anno": -508,
    "titolo": "Riforme di Clistene",
    "desc": "Clistene reorganizza le tribù ateniesi su base territoriale, potenzia l'assemblea e introduce l'ostracismo. Nasce la democrazia ateniese compiuta.",
    "tipo": "politico",
    "livello": "locale",
    "civ": [
      "greca"
    ],
    "city": "atene",
    "tags": [
      "democrazia",
      "riforma",
      "atene"
    ]
  },
  {
    "id": "atene_sacco_persiano",
    "anno": -480,
    "titolo": "Sacco persiano di Atene",
    "desc": "L'esercito di Serse occupa e incendia Atene, inclusa l'Acropoli. La città è evacuata grazie alla strategia di Temistocle.",
    "tipo": "distruzione",
    "livello": "locale",
    "civ": [
      "greca",
      "persiana"
    ],
    "city": "atene",
    "tags": [
      "sacco",
      "persia",
      "atene"
    ]
  },
  {
    "id": "partenone",
    "anno": -447,
    "titolo": "Costruzione del Partenone",
    "desc": "Pericle commissiona il Partenone sull'Acropoli ad Ictino e Callicrate. Fidia dirige la decorazione scultorea. Il cantiere dura 15 anni.",
    "tipo": "culturale",
    "livello": "locale",
    "civ": [
      "greca"
    ],
    "city": "atene",
    "tags": [
      "architettura",
      "pericle",
      "arte"
    ]
  },
  {
    "id": "socrate_morte",
    "anno": -399,
    "titolo": "Morte di Socrate",
    "desc": "Condannato dall'assemblea ateniese per empietà e corruzione dei giovani, Socrate rifiuta la fuga e beve la cicuta. Platone assiste alla scena.",
    "tipo": "politico",
    "livello": "locale",
    "civ": [
      "greca"
    ],
    "city": "atene",
    "tags": [
      "filosofia",
      "processo",
      "atene"
    ]
  },
  {
    "id": "platone_accademia",
    "anno": -387,
    "titolo": "Platone fonda l'Accademia",
    "desc": "Platone fonda l'Accademia ad Atene, la prima istituzione stabile di insegnamento filosofico della storia occidentale. Rimarrà aperta per novecento anni.",
    "tipo": "culturale",
    "livello": "locale",
    "civ": [
      "greca"
    ],
    "city": "atene",
    "tags": [
      "filosofia",
      "educazione",
      "platone"
    ]
  },
  {
    "id": "roma_repubblica",
    "anno": -509,
    "titolo": "Fondazione della Repubblica",
    "desc": "Tarquinio il Superbo viene cacciato. Roma diventa una repubblica con due consoli eletti annualmente. Inizio di un sistema istituzionale durato cinque secoli.",
    "tipo": "politico",
    "livello": "locale",
    "civ": [
      "romana"
    ],
    "city": "roma",
    "tags": [
      "repubblica",
      "istituzione",
      "roma"
    ]
  },
  {
    "id": "roma_galli",
    "anno": -390,
    "titolo": "I Galli saccheggiano Roma",
    "desc": "I Galli Senoni di Brenno saccheggiano Roma. Solo il Campidoglio resiste. Secondo la leggenda, le oche sacre svegliano i difensori.",
    "tipo": "distruzione",
    "livello": "locale",
    "civ": [
      "romana"
    ],
    "city": "roma",
    "tags": [
      "sacco",
      "galli",
      "roma"
    ]
  },
  {
    "id": "spartaco",
    "anno": -73,
    "titolo": "Rivolta di Spartaco",
    "desc": "Spartaco guida una rivolta di schiavi partita da Capua. Per due anni tiene in scacco l'esercito romano prima di essere sconfitto da Crasso.",
    "tipo": "politico",
    "livello": "locale",
    "civ": [
      "romana"
    ],
    "city": "capua",
    "tags": [
      "rivolta",
      "schiavi",
      "spartaco"
    ]
  },
  {
    "id": "colosseo",
    "anno": 80,
    "titolo": "Inaugurazione del Colosseo",
    "desc": "L'imperatore Tito inaugura il Colosseo con cento giorni di giochi. L'anfiteatro Flavio può ospitare fino a 80.000 spettatori.",
    "tipo": "culturale",
    "livello": "locale",
    "civ": [
      "romana"
    ],
    "city": "roma",
    "tags": [
      "architettura",
      "spettacolo",
      "roma"
    ]
  },
  {
    "id": "babilonia_hammurabi",
    "anno": -1792,
    "titolo": "Hammurabi re di Babilonia",
    "desc": "Hammurabi sale al trono di Babilonia e avvia la conquista della Mesopotamia. In 35 anni costruisce il più grande impero del suo tempo.",
    "tipo": "politico",
    "livello": "locale",
    "civ": [
      "mesopotamica"
    ],
    "city": "babilonia",
    "tags": [
      "hammurabi",
      "impero",
      "mesopotamia"
    ]
  },
  {
    "id": "babilonia_sennacherib",
    "anno": -689,
    "titolo": "Sennacherib distrugge Babilonia",
    "desc": "Il re assiro Sennacherib rasa al suolo Babilonia come punizione per la sua ribellione. Devia persino il corso dell'Eufrate sulla città.",
    "tipo": "distruzione",
    "livello": "locale",
    "civ": [
      "assira",
      "mesopotamica"
    ],
    "city": "babilonia",
    "tags": [
      "distruzione",
      "assiria",
      "mesopotamia"
    ]
  },
  {
    "id": "babilonia_nabucodonosor",
    "anno": -605,
    "titolo": "Nabucodonosor II al trono",
    "desc": "Nabucodonosor II inizia il suo lungo regno e fa di Babilonia la città più grande e splendida del mondo antico, con i Giardini Pensili e la Porta di Ishtar.",
    "tipo": "politico",
    "livello": "locale",
    "civ": [
      "mesopotamica"
    ],
    "city": "babilonia",
    "tags": [
      "nabucodonosor",
      "architettura",
      "mesopotamia"
    ]
  },
  {
    "id": "babilonia_ciro",
    "anno": -539,
    "titolo": "Ciro conquista Babilonia",
    "desc": "Ciro il Grande entra a Babilonia accolto come liberatore. La città cade senza combattimento. Fine dell'impero neo-babilonese.",
    "tipo": "politico",
    "livello": "locale",
    "civ": [
      "persiana",
      "mesopotamica"
    ],
    "city": "babilonia",
    "tags": [
      "ciro",
      "persia",
      "conquista"
    ]
  },
  {
    "id": "babilonia_alessandro",
    "anno": -323,
    "titolo": "Morte di Alessandro a Babilonia",
    "desc": "Alessandro Magno muore a Babilonia all'età di 32 anni. Stava progettando di fare della città la capitale del suo impero.",
    "tipo": "politico",
    "livello": "locale",
    "civ": [
      "ellenistica"
    ],
    "city": "babilonia",
    "tags": [
      "morte",
      "alessandro",
      "babilonia"
    ]
  },
  {
    "id": "alessandria_fondazione",
    "anno": -331,
    "titolo": "Fondazione di Alessandria",
    "desc": "Alessandro Magno fonda Alessandria d'Egitto scegliendo personalmente il sito. La città è progettata dall'architetto Dinocrate di Rodi.",
    "tipo": "fondazione",
    "livello": "locale",
    "civ": [
      "ellenistica"
    ],
    "city": "alessandria",
    "tags": [
      "fondazione",
      "alessandro",
      "egitto"
    ]
  },
  {
    "id": "faro_alessandria",
    "anno": -280,
    "titolo": "Costruzione del Faro",
    "desc": "Tolomeo II fa costruire il Faro di Alessandria sull'isola di Faro. Alto oltre 100 metri, è una delle Sette Meraviglie del mondo antico.",
    "tipo": "culturale",
    "livello": "locale",
    "civ": [
      "ellenistica"
    ],
    "city": "alessandria",
    "tags": [
      "architettura",
      "meraviglie",
      "faro"
    ]
  },
  {
    "id": "biblioteca_alessandria",
    "anno": -290,
    "titolo": "Fondazione della Biblioteca",
    "desc": "Tolomeo I fonda la grande Biblioteca di Alessandria con l'obiettivo di raccogliere tutto il sapere del mondo. Al suo apice conterrà 700.000 rotoli.",
    "tipo": "culturale",
    "livello": "locale",
    "civ": [
      "ellenistica"
    ],
    "city": "alessandria",
    "tags": [
      "biblioteca",
      "sapere",
      "alessandria"
    ]
  },
  {
    "id": "cleopatra_morte",
    "anno": -30,
    "titolo": "Morte di Cleopatra",
    "desc": "Cleopatra VII si suicida dopo la sconfitta di Marco Antonio. L'Egitto diventa provincia romana. Fine dell'ultima dinastia ellenistica.",
    "tipo": "politico",
    "livello": "locale",
    "civ": [
      "ellenistica",
      "romana"
    ],
    "city": "alessandria",
    "tags": [
      "cleopatra",
      "morte",
      "fine_ellenismo"
    ]
  },
  {
    "id": "assurbanipal_biblioteca",
    "anno": -668,
    "titolo": "Biblioteca di Assurbanipal",
    "desc": "Il re assiro Assurbanipal raccoglie a Ninive oltre 30.000 tavolette cuneiformi: la più grande biblioteca del mondo antico, compreso il poema di Gilgamesh.",
    "tipo": "culturale",
    "livello": "locale",
    "civ": [
      "assira"
    ],
    "city": "ninive",
    "tags": [
      "biblioteca",
      "scrittura",
      "assiria"
    ]
  },
  {
    "id": "cartagine_annibale_parte",
    "anno": -218,
    "titolo": "Annibale parte da Cartagine",
    "desc": "Annibale lascia Cartagine Nova con il suo esercito per la campagna in Italia. Traversa Spagna, Gallia e Alpi in pochi mesi.",
    "tipo": "politico",
    "livello": "locale",
    "civ": [
      "cartaginese"
    ],
    "city": "cartagine",
    "tags": [
      "annibale",
      "guerra",
      "punica"
    ]
  },
  {
    "id": "cartagine_distrutta",
    "anno": -146,
    "titolo": "Distruzione di Cartagine",
    "desc": "Scipione Emiliano distrugge Cartagine pietra per pietra dopo tre anni di assedio. La città viene bruciata per diciassette giorni. Il sito viene maledetto.",
    "tipo": "distruzione",
    "livello": "locale",
    "civ": [
      "cartaginese",
      "romana"
    ],
    "city": "cartagine",
    "tags": [
      "distruzione",
      "roma",
      "punica"
    ]
  },
  {
    "id": "persepoli_dario",
    "anno": -518,
    "titolo": "Costruzione di Persepoli",
    "desc": "Dario I inizia la costruzione di Persepoli come capitale cerimoniale dell'Impero. I lavori proseguiranno per decenni sotto Serse e Artaserse.",
    "tipo": "culturale",
    "livello": "locale",
    "civ": [
      "persiana"
    ],
    "city": "persepoli",
    "tags": [
      "architettura",
      "persia",
      "dario"
    ]
  },
  {
    "id": "persepoli_fuoco",
    "anno": -330,
    "titolo": "Persepoli in fiamme",
    "desc": "Alessandro Magno incendia Persepoli dopo averla saccheggiata. Secondo alcune fonti fu un gesto deliberato di rappresaglia per il sacco di Atene del 480 a.C.",
    "tipo": "distruzione",
    "livello": "locale",
    "civ": [
      "persiana",
      "ellenistica"
    ],
    "city": "persepoli",
    "tags": [
      "distruzione",
      "alessandro",
      "persia"
    ]
  }
];
