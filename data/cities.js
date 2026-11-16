// ============================================================
//  CITIES — Vicino Oriente Antico
//  Solo civiltà del Bronzo e del Ferro (senza Greci e Romani)
// ============================================================
var CITIES = [

  // ── EGITTO ────────────────────────────────────────────────
  { id:"menfi", name:"Menfi", modern:"Mit Rahina (Egitto)", lat:29.85, lng:31.25,
    civ:"egizia", start:-3100, end:-400, tipo:"capitale", unesco:true,
    wiki:"Memphis,_Egypt",
    desc:"Prima capitale dell'Egitto unificato. Centro del culto di Ptah, sede della prima dinastia.",
    era:"III millennio – IV sec. a.C.", museum:"Museo Egizio del Cairo",
    tags:["capitale","religione","egitto"] },

  { id:"tebe", name:"Tebe (Waset)", modern:"Luxor (Egitto)", lat:25.70, lng:32.64,
    civ:"egizia", start:-2000, end:-400, tipo:"capitale", unesco:true,
    wiki:"Thebes,_Egypt",
    desc:"Waset, capitale del Nuovo Regno. Tempio di Amon a Karnak, Valle dei Re, Ramesseum.",
    era:"II millennio – IV sec. a.C.", museum:"Museo di Luxor — Karnak — Valle dei Re",
    tags:["capitale","religione","arte"] },

  { id:"eliopoli", name:"Eliopoli", modern:"Matariyya, Cairo (Egitto)", lat:30.13, lng:31.34,
    civ:"egizia", start:-3000, end:-200, tipo:"sito_religioso", unesco:false,
    wiki:"Heliopolis,_Egypt",
    desc:"Centro del culto solare di Ra. Gli obelischi di Eliopoli sono oggi a Roma, Parigi, Londra, Istanbul.",
    era:"III millennio – II sec. a.C.", museum:"Museo Egizio del Cairo",
    tags:["religione","obelischi","sole"] },

  { id:"amarna", name:"Amarna (Akhetaton)", modern:"Tell el-Amarna (Egitto)", lat:27.64, lng:30.90,
    civ:"egizia", start:-1346, end:-1332, tipo:"capitale", unesco:false,
    wiki:"Amarna",
    desc:"Akhetaton, capitale di Akhenaton, il faraone del monoteismo solare. Abbandonata alla sua morte.",
    era:"1346 – 1332 a.C.", museum:"Neues Museum, Berlino — Busto di Nefertiti",
    tags:["monoteismo","akhenaton","politica"] },

  { id:"pi_ramesse", name:"Pi-Ramesse", modern:"Qantir (Egitto)", lat:30.82, lng:31.82,
    civ:"egizia", start:-1279, end:-1070, tipo:"capitale", unesco:false,
    wiki:"Pi-Ramesses",
    desc:"Grande capitale di Ramesse II nel delta del Nilo. Centro della campagna contro gli Ittiti.",
    era:"XIII – XI sec. a.C.", museum:"Museo Egizio del Cairo",
    tags:["capitale","ramesse","delta"] },

  { id:"avaris", name:"Avaris", modern:"Tell el-Dab'a (Egitto)", lat:30.78, lng:31.80,
    civ:"egizia", start:-1800, end:-1550, tipo:"capitale", unesco:false,
    wiki:"Avaris",
    desc:"Capitale degli Hyksos nel delta del Nilo, conquistata da Ahmose I nel 1550 a.C.",
    era:"XIX – XVI sec. a.C.", museum:"Museo Egizio del Cairo",
    tags:["hyksos","delta","invasione"] },

  // ── MESOPOTAMIA ───────────────────────────────────────────
  { id:"uruk", name:"Uruk", modern:"Warka (Iraq)", lat:31.32, lng:45.64,
    civ:"mesopotamica", start:-4500, end:-300, tipo:"capitale", unesco:true,
    wiki:"Uruk",
    desc:"La più grande città del mondo verso il 3200 a.C. Luogo di nascita della scrittura cuneiforme. Patria mitica di Gilgamesh.",
    era:"V – I millennio a.C.", museum:"Museo Nazionale dell'Iraq, Baghdad",
    tags:["sumeria","scrittura","urbanesimo"] },

  { id:"ur", name:"Ur", modern:"Tell el-Muqayyar (Iraq)", lat:30.96, lng:46.10,
    civ:"mesopotamica", start:-3800, end:-500, tipo:"sito_religioso", unesco:true,
    wiki:"Ur",
    desc:"Antica città sumera, uno dei primi centri urbani. Ziggurat di Ur-Nammu e tombe reali del III millennio.",
    era:"IV – I millennio a.C.", museum:"British Museum, Londra — Stendardo di Ur",
    tags:["sumeria","ziggurat","religione"] },

  { id:"nippur", name:"Nippur", modern:"Nuffar (Iraq)", lat:32.12, lng:45.22,
    civ:"mesopotamica", start:-3500, end:-800, tipo:"sito_religioso", unesco:false,
    wiki:"Nippur",
    desc:"Centro religioso sumero-accadico, sede del dio Enlil. Luogo sacro per eccellenza della Mesopotamia.",
    era:"IV – I millennio a.C.", museum:"University of Pennsylvania Museum, Philadelphia",
    tags:["religione","sumeria","accadica"] },

  { id:"akkad", name:"Akkad", modern:"Sito non identificato (Iraq)", lat:33.10, lng:44.10,
    civ:"mesopotamica", start:-2350, end:-2150, tipo:"capitale", unesco:false,
    wiki:"Akkad",
    desc:"Capitale del primo impero semita della storia, fondato da Sargon di Akkad (~2350 a.C.).",
    era:"2350 – 2150 a.C.", museum:"Museo Nazionale dell'Iraq, Baghdad",
    tags:["impero","sargon","accadica"] },

  { id:"mari", name:"Mari", modern:"Tell Hariri (Siria)", lat:34.55, lng:40.89,
    civ:"mesopotamica", start:-2900, end:-1759, tipo:"capitale", unesco:false,
    wiki:"Mari,_Syria",
    desc:"Importante regno sull'Eufrate distrutto da Hammurabi. Archivio di 25.000 tavolette sulla diplomazia del Bronzo Medio.",
    era:"2900 – 1759 a.C.", museum:"Museo Nazionale di Damasco — Louvre, Parigi",
    tags:["diplomazia","commercio","eufrate"] },

  { id:"babilonia", name:"Babilonia", modern:"Al-Hillah (Iraq)", lat:32.54, lng:44.42,
    civ:"mesopotamica", start:-2300, end:-300, tipo:"capitale", unesco:true,
    wiki:"Babylon",
    desc:"Capitale del regno babilonese. Sede dei Giardini Pensili, della Torre di Babele, del Codice di Hammurabi. Massimo splendore sotto Nabucodonosor II.",
    era:"III – I millennio a.C.", museum:"Pergamonmuseum, Berlino — Porta di Ishtar",
    tags:["capitale","diritto","architettura"] },

  // ── ASSIRIA ───────────────────────────────────────────────
  { id:"assur", name:"Assur", modern:"Qal'at Sherqat (Iraq)", lat:35.46, lng:43.26,
    civ:"assira", start:-3000, end:-614, tipo:"sito_religioso", unesco:true,
    wiki:"Assur",
    desc:"Prima capitale e città sacra dell'Assiria. Sede del dio nazionale Assur. UNESCO.",
    era:"III – I millennio a.C.", museum:"Vorderasiatisches Museum, Berlino",
    tags:["religione","capitale","assiria"] },

  { id:"nimrud", name:"Nimrud (Kalhu)", modern:"Nimrud (Iraq)", lat:36.10, lng:43.33,
    civ:"assira", start:-1350, end:-612, tipo:"capitale", unesco:false,
    wiki:"Nimrud",
    desc:"Kalhu, seconda capitale dell'Impero Neoassiro sotto Assurnasirpal II. Favolosi ori reali. Distrutta dall'ISIS nel 2015.",
    era:"XIV – VII sec. a.C.", museum:"British Museum — Iraq Museum, Baghdad",
    tags:["capitale","assiria","arte"] },

  { id:"dur_sharrukin", name:"Dur-Sharrukin", modern:"Khorsabad (Iraq)", lat:36.51, lng:43.23,
    civ:"assira", start:-717, end:-705, tipo:"capitale", unesco:false,
    wiki:"Dur-Sharrukin",
    desc:"Città fondata da Sargon II come nuova capitale. Abbandonata alla sua morte in battaglia. Lamassù colossali.",
    era:"717 – 705 a.C.", museum:"Louvre, Parigi — tori androcefali alati (lamassù)",
    tags:["capitale","sargon","assiria"] },

  { id:"ninive", name:"Ninive", modern:"Mosul (Iraq)", lat:36.36, lng:43.16,
    civ:"assira", start:-3000, end:-612, tipo:"capitale", unesco:false,
    wiki:"Nineveh",
    desc:"Capitale dell'Impero Neoassiro. Biblioteca di Assurbanipal con 30.000 tavolette cuneiformi, incluso il poema di Gilgamesh.",
    era:"III millennio – 612 a.C.", museum:"British Museum — Leoni assiri di Assurbanipal",
    tags:["capitale","biblioteca","assiria"] },

  // ── ITTITI ────────────────────────────────────────────────
  { id:"hattusa", name:"Hattusa", modern:"Boğazköy (Turchia)", lat:40.02, lng:34.61,
    civ:"ittita", start:-2000, end:-1180, tipo:"capitale", unesco:true,
    wiki:"Hattusa",
    desc:"Capitale dell'Impero Ittita. Porta dei Leoni, Grande Tempio, archivio di 30.000 tavolette. UNESCO.",
    era:"2000 – 1180 a.C.", museum:"Museum of Anatolian Civilizations, Ankara",
    tags:["capitale","architettura","ittiti"] },

  { id:"karkemish", name:"Karkemish", modern:"Kargamış (Turchia/Siria)", lat:36.83, lng:38.01,
    civ:"ittita", start:-2400, end:-717, tipo:"capitale", unesco:false,
    wiki:"Carchemish",
    desc:"Importante città sull'Eufrate, capitale del regno neoittita dopo il crollo di Hattusa. Qui Nabucodonosor sconfigge gli Egizi nel 605.",
    era:"2400 – 717 a.C.", museum:"Museum of Anatolian Civilizations, Ankara",
    tags:["eufrate","commercio","ittiti"] },

  { id:"kanesh", name:"Kanesh", modern:"Kültepe (Turchia)", lat:38.85, lng:35.63,
    civ:"ittita", start:-2500, end:-1700, tipo:"porto", unesco:false,
    wiki:"Kanesh",
    desc:"Kültepe. Centro commerciale con colonie di mercanti assiri (karum). Qui la scrittura cuneiforme arriva in Anatolia.",
    era:"2500 – 1700 a.C.", museum:"Museum of Anatolian Civilizations, Ankara",
    tags:["commercio","scrittura","karum"] },

  { id:"qadesh", name:"Qadesh", modern:"Tell Nebi Mend (Siria)", lat:34.55, lng:36.52,
    civ:"ittita", start:-1500, end:-1200, tipo:"fortezza", unesco:false,
    wiki:"Battle_of_Kadesh",
    desc:"Teatro della battaglia del 1274 a.C. tra Ramesse II e Muwatalli II. Il più antico trattato di pace documentato (1259 a.C.).",
    era:"1500 – 1200 a.C.", museum:"Copia del trattato all'ONU, New York",
    tags:["battaglia","trattato","bronzo_tardo"] },

  // ── MITTANI ───────────────────────────────────────────────
  { id:"washukanni", name:"Washukanni", modern:"Tell Fakhariya? (Siria)", lat:36.87, lng:40.75,
    civ:"mittani", start:-1550, end:-1335, tipo:"capitale", unesco:false,
    wiki:"Mitanni",
    desc:"Capitale del regno mittannico, non ancora identificata con certezza. Centro della potenza hurrita nel Bronzo Tardo.",
    era:"XVI – XIV sec. a.C.", museum:"Museo Nazionale di Damasco",
    tags:["capitale","mittani","hurrita"] },

  // ── UGARIT ────────────────────────────────────────────────
  { id:"ugarit", name:"Ugarit", modern:"Ras Shamra (Siria)", lat:35.60, lng:35.78,
    civ:"cananea", start:-6000, end:-1185, tipo:"porto", unesco:false,
    wiki:"Ugarit",
    desc:"Città cosmopolita sulla costa siriana. Qui fu inventato il primo alfabeto consonantico. Distrutta dai Popoli del Mare nel 1185 a.C.",
    era:"6000 – 1185 a.C.", museum:"Museo Nazionale di Damasco — Louvre, Parigi",
    tags:["alfabeto","commercio","porto"] },

  { id:"ebla", name:"Ebla", modern:"Tell Mardikh (Siria)", lat:36.80, lng:36.79,
    civ:"cananea", start:-3000, end:-1600, tipo:"capitale", unesco:false,
    wiki:"Ebla",
    desc:"Potente regno siriano con archivio di 17.000 tavolette cuneiformi. Centro commerciale tra Mesopotamia e Levante.",
    era:"3000 – 1600 a.C.", museum:"Museo Nazionale di Aleppo — Louvre, Parigi",
    tags:["archivio","commercio","siria"] },

  { id:"hazor", name:"Hazor", modern:"Tel Hazor (Israele)", lat:33.02, lng:35.57,
    civ:"cananea", start:-2700, end:-732, tipo:"capitale", unesco:true,
    wiki:"Hazor",
    desc:"La più grande città cananea. Dominava le rotte tra Egitto e Mesopotamia. Conquistata da Thutmosi III e poi da Tiglat-Pileser III.",
    era:"2700 – 732 a.C.", museum:"Museo di Israele, Gerusalemme",
    tags:["commercio","canaan","rotte"] },

  { id:"megiddo", name:"Megiddo", modern:"Tel Megiddo (Israele)", lat:32.58, lng:35.18,
    civ:"cananea", start:-3500, end:-500, tipo:"fortezza", unesco:true,
    wiki:"Megiddo",
    desc:"Armageddon. Nodo strategico cruciale, teatro di battaglie decisive da Thutmosi III (-1457) in poi. 30 strati di occupazione.",
    era:"3500 – 500 a.C.", museum:"Oriental Institute, Chicago",
    tags:["battaglia","strategia","canaan"] },

  { id:"gerico", name:"Gerico", modern:"Ariha (Palestina)", lat:31.87, lng:35.44,
    civ:"cananea", start:-9000, end:200, tipo:"fortezza", unesco:false,
    wiki:"Jericho",
    desc:"Una delle città abitate più antiche del mondo. Torre neolitica dell'8000 a.C. Conquistata secondo la Bibbia da Giosuè.",
    era:"IX millennio a.C.", museum:"Rockefeller Archaeological Museum, Gerusalemme",
    tags:["neolitico","mura","canaan"] },

  // ── FENICI ────────────────────────────────────────────────
  { id:"tiro", name:"Tiro", modern:"Sur (Libano)", lat:33.27, lng:35.20,
    civ:"fenico", start:-2700, end:200, tipo:"porto", unesco:true,
    wiki:"Tyre,_Lebanon",
    desc:"Regina delle città fenicie. Centro del commercio marittimo e della porpora. Resistè sette mesi all'assedio di Alessandro Magno.",
    era:"III millennio – II sec. d.C.", museum:"Museo Nazionale di Beirut",
    tags:["commercio","porto","porpora"] },

  { id:"sidone", name:"Sidone", modern:"Saida (Libano)", lat:33.56, lng:35.37,
    civ:"fenico", start:-2700, end:200, tipo:"porto", unesco:false,
    wiki:"Sidon",
    desc:"Grande metropoli fenicia, celebre per il vetro soffiato e la porpora. Rivale e talvolta alleata di Tiro.",
    era:"III millennio – II sec. d.C.", museum:"Louvre, Parigi — Sarcofago di Esmunazar II",
    tags:["commercio","vetro","porpora"] },

  { id:"biblo", name:"Biblo", modern:"Jbeil (Libano)", lat:34.12, lng:35.65,
    civ:"fenico", start:-3000, end:200, tipo:"porto", unesco:true,
    wiki:"Byblos",
    desc:"Una delle città più antiche del mondo. Il suo nome ha dato origine alla parola Bibbia per il commercio di papiro.",
    era:"III millennio – II sec. d.C.", museum:"Museo Nazionale di Beirut",
    tags:["alfabeto","papiro","commercio"] },

  // ── ISRAELE / GIUDA ───────────────────────────────────────
  { id:"gerusalemme", name:"Gerusalemme", modern:null, lat:31.77, lng:35.23,
    civ:"israelita", start:-2000, end:200, tipo:"capitale", unesco:true,
    wiki:"Jerusalem",
    desc:"Capitale di Davide e Salomone. Sede del Primo Tempio (distrutto da Nabucodonosor nel 586 a.C.) e poi del Secondo Tempio.",
    era:"II millennio a.C. – II sec. d.C.", museum:"Museo di Israele — Tunnel del Muro del Pianto",
    tags:["capitale","religione","tempio"] },

  { id:"samaria", name:"Samaria", modern:"Sebastiyya (Palestina)", lat:32.28, lng:35.19,
    civ:"israelita", start:-880, end:-722, tipo:"capitale", unesco:false,
    wiki:"Samaria",
    desc:"Capitale del regno del Nord di Israele, fondata da Omri. Conquistata e distrutta dagli Assiri nel 722 a.C.",
    era:"IX – VIII sec. a.C.", museum:"Museo Rockefeller, Gerusalemme",
    tags:["capitale","israele","assiria"] },

  // ── ARAMAICI ─────────────────────────────────────────────
  { id:"damasco", name:"Damasco", modern:null, lat:33.51, lng:36.29,
    civ:"aramaica", start:-2000, end:200, tipo:"capitale", unesco:true,
    wiki:"Damascus",
    desc:"Una delle città più antiche continuamente abitate. Capitale del regno aramaico di Aram-Damasco, poi provincia assira, persiana e romana.",
    era:"II millennio a.C.", museum:"Museo Nazionale di Damasco",
    tags:["capitale","aramaica","commercio"] },

  // ── PERSIA ────────────────────────────────────────────────
  { id:"susa", name:"Susa", modern:"Shush (Iran)", lat:32.19, lng:48.24,
    civ:"persiana", start:-4200, end:-330, tipo:"capitale", unesco:true,
    wiki:"Susa",
    desc:"Capitale amministrativa dell'Impero Persiano e già capitale elamita. Sede della stele con il Codice di Hammurabi.",
    era:"V millennio – IV sec. a.C.", museum:"Louvre, Parigi — Codice di Hammurabi",
    tags:["capitale","diritto","elam"] },

  { id:"persepoli", name:"Persepoli", modern:"Takht-e Jamshid (Iran)", lat:29.93, lng:52.89,
    civ:"persiana", start:-518, end:-330, tipo:"capitale", unesco:true,
    wiki:"Persepolis",
    desc:"Capitale cerimoniale dell'Impero Achemenide. Incendiata da Alessandro nel 330 a.C. Uno dei siti più spettacolari del mondo antico.",
    era:"518 – 330 a.C.", museum:"Museo Nazionale dell'Iran, Teheran",
    tags:["capitale","architettura","persia"] },

  { id:"pasargade", name:"Pasargade", modern:"Pasargad (Iran)", lat:30.19, lng:53.18,
    civ:"persiana", start:-550, end:-330, tipo:"capitale", unesco:true,
    wiki:"Pasargadae",
    desc:"Prima capitale di Ciro il Grande. Ospita il suo austero mausoleo, ancora visibile.",
    era:"VI – IV sec. a.C.", museum:"Sito UNESCO in loco",
    tags:["ciro","capitale","mausoleo"] },

  { id:"ecbatana", name:"Ecbatana", modern:"Hamadan (Iran)", lat:34.80, lng:48.51,
    civ:"persiana", start:-700, end:-330, tipo:"capitale", unesco:false,
    wiki:"Ecbatana",
    desc:"Capitale dei Medi, poi residenza estiva degli Achemenidi. Descritta da Erodoto con sette mura concentriche.",
    era:"VII – IV sec. a.C.", museum:"Museo di Hamadan",
    tags:["capitale","medi","persia"] },

  // ── URARTU ────────────────────────────────────────────────
  { id:"tushpa", name:"Tushpa (Tuspa)", modern:"Van (Turchia)", lat:38.50, lng:43.38,
    civ:"urartea", start:-900, end:-585, tipo:"capitale", unesco:false,
    wiki:"Van_Fortress",
    desc:"Capitale del regno di Urartu, sulla riva orientale del lago di Van. Fortezza rupestre imponente.",
    era:"IX – VI sec. a.C.", museum:"Museo di Van",
    tags:["capitale","urartu","fortezza"] }
];
