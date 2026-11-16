// ============================================================
//  EVENTS — Vicino Oriente Antico
//  Solo eventi relativi a Egitto, Mesopotamia, Levante, Anatolia, Persia
// ============================================================
var EVENTS = [
  // ── GLOBALI ───────────────────────────────────────────────
  { id:"gerico_primi", anno:-9000, titolo:"Prime strutture permanenti",
    desc:"A Gerico sorgono torre e mura in pietra tra le più antiche al mondo: uno dei primissimi insediamenti stabili dell'umanità.",
    tipo:"fondazione", livello:"globale", civ:["cananea"], city:null,
    tags:["neolitico","architettura"] },

  { id:"scrittura_uruk", anno:-3200, titolo:"Invenzione della scrittura",
    desc:"A Uruk nasce la scrittura cuneiforme, inizialmente usata per registrare scambi commerciali su tavolette d'argilla. Primo documento scritto della storia.",
    tipo:"culturale", livello:"globale", civ:["mesopotamica"], city:"uruk",
    tags:["scrittura","commercio"] },

  { id:"unificazione_egitto", anno:-3100, titolo:"Unificazione dell'Egitto",
    desc:"Il faraone Narmer unifica Alto e Basso Egitto, fondando la prima dinastia e lo stato egizio. Menfi diventa la prima capitale.",
    tipo:"politico", livello:"globale", civ:["egizia"], city:"menfi",
    tags:["egitto","politico"] },

  { id:"piramide_giza", anno:-2560, titolo:"Grande Piramide di Giza",
    desc:"Cheope fa costruire la Grande Piramide: per millenni resterà la struttura più alta del mondo. Con la Sfinge e le piramidi di Chefren e Micerino forma la necropoli di Giza.",
    tipo:"culturale", livello:"globale", civ:["egizia"], city:null,
    tags:["architettura","egitto"] },

  { id:"sargon_akkad", anno:-2350, titolo:"Impero di Akkad",
    desc:"Sargon di Akkad fonda il primo impero della storia, unificando la Mesopotamia sotto un unico potere politico. L'aramaico e l'accadico si diffondono come lingue di cultura.",
    tipo:"politico", livello:"globale", civ:["mesopotamica"], city:"akkad",
    tags:["impero","mesopotamia"] },

  { id:"ziggurat_ur", anno:-2100, titolo:"Ziggurat di Ur",
    desc:"Ur-Nammu costruisce la grande Ziggurat di Ur e fonda la terza dinastia sumera. Ur diventa il centro politico e religioso della Mesopotamia.",
    tipo:"culturale", livello:"globale", civ:["mesopotamica"], city:"ur",
    tags:["architettura","religione"] },

  { id:"karum_kanesh", anno:-1900, titolo:"Karum di Kanesh",
    desc:"Mercanti assiri fondano la loro colonia commerciale (karum) a Kanesh in Anatolia, diffondendo la scrittura cuneiforme. Primo contatto documentato tra Mesopotamia e Anatolia.",
    tipo:"culturale", livello:"globale", civ:["assira","ittita"], city:"kanesh",
    tags:["commercio","scrittura","anatolia"] },

  { id:"codice_hammurabi", anno:-1750, titolo:"Codice di Hammurabi",
    desc:"Hammurabi promulga il suo celebre codice di leggi, inciso su una stele di diorite. Uno dei primi sistemi giuridici scritti della storia: 282 articoli su commercio, proprietà, famiglia.",
    tipo:"politico", livello:"globale", civ:["mesopotamica"], city:"babilonia",
    tags:["diritto","leggi"] },

  { id:"hyksos_egitto", anno:-1800, titolo:"Hyksos in Egitto",
    desc:"I popoli Hyksos penetrano nel delta del Nilo e fondano la loro capitale ad Avaris, introducendo il carro da guerra e nuove tecnologie militari.",
    tipo:"politico", livello:"globale", civ:["egizia"], city:"avaris",
    tags:["invasione","egitto"] },

  { id:"nuovo_regno", anno:-1550, titolo:"Inizio del Nuovo Regno Egizio",
    desc:"Ahmose I caccia gli Hyksos dall'Egitto e fonda il Nuovo Regno, il periodo di massimo splendore militare e artistico. L'Egitto si espande nel Levante e in Nubia.",
    tipo:"politico", livello:"globale", civ:["egizia"], city:"menfi",
    tags:["egitto","conquista"] },

  { id:"megiddo_thutmosi", anno:-1457, titolo:"Battaglia di Megiddo",
    desc:"Thutmosi III sconfigge una coalizione cananea a Megiddo: la prima battaglia dettagliatamente documentata della storia. L'Egitto consolida il controllo del Levante.",
    tipo:"battaglia", livello:"globale", civ:["egizia","cananea"], city:"megiddo",
    tags:["battaglia","egitto","canaan"] },

  { id:"amarna_akhenaton", anno:-1346, titolo:"Rivoluzione di Amarna",
    desc:"Akhenaton fonda Amarna e impone il culto del solo Aton: il primo monoteismo documentato della storia. Le Lettere di Amarna testimoniano la diplomazia internazionale dell'epoca.",
    tipo:"politico", livello:"globale", civ:["egizia"], city:"amarna",
    tags:["religione","monoteismo","egitto"] },

  { id:"qadesh_battaglia", anno:-1274, titolo:"Battaglia di Qadesh",
    desc:"Ramesse II e Muwatalli II degli Ittiti si scontrano a Qadesh. La battaglia è un pareggio: nel 1259 a.C. nasce il primo trattato di pace documentato, inciso in egiziano e accadico.",
    tipo:"battaglia", livello:"globale", civ:["egizia","ittita"], city:"qadesh",
    tags:["battaglia","trattato","bronzo_tardo"] },

  { id:"ugarit_distrutta", anno:-1185, titolo:"Distruzione di Ugarit",
    desc:"Ugarit viene distrutta dai Popoli del Mare. L'archivio contiene ancora le tavolette dell'ultimo re che chiede aiuto. Fine di un grande centro culturale e commerciale.",
    tipo:"distruzione", livello:"globale", civ:["cananea"], city:"ugarit",
    tags:["popoli_del_mare","distruzione"] },

  { id:"crollo_bronzo", anno:-1200, titolo:"Crollo dell'Età del Bronzo",
    desc:"I Popoli del Mare devastano il Mediterraneo orientale. Crollano gli Ittiti, i Micenei, Ugarit. Fine di un intero sistema di civiltà interconnesse. Cause ancora dibattute: invasioni, siccità, terremoti, rivolte interne.",
    tipo:"disastro", livello:"globale", civ:["ittita","cananea","egizia"], city:null,
    tags:["collasso","popoli_del_mare","bronzo_tardo"] },

  { id:"hattusa_caduta", anno:-1180, titolo:"Caduta di Hattusa",
    desc:"La capitale ittita Hattusa viene abbandonata e bruciata. L'Impero Ittita cessa di esistere come potenza centrale; sopravvivono regni neoittiti nella Siria settentrionale.",
    tipo:"distruzione", livello:"globale", civ:["ittita"], city:"hattusa",
    tags:["collasso","ittiti"] },

  { id:"ninive_assira", anno:-700, titolo:"Ninive capitale assira",
    desc:"Sennacherib fa di Ninive la capitale dell'Impero Neoassiro, abbellendola con il Grande Palazzo e i celebri rilievi dei leoni. L'Assiria domina tutto il Vicino Oriente.",
    tipo:"politico", livello:"globale", civ:["assira"], city:"ninive",
    tags:["assiria","capitale"] },

  { id:"ninive_caduta", anno:-612, titolo:"Caduta di Ninive",
    desc:"Babilonesi e Medi distruggono Ninive. Fine dell'Impero Assiro, per secoli la potenza più temuta del mondo antico. I commentatori biblici la celebrano come la caduta del 'grande oppressore'.",
    tipo:"distruzione", livello:"globale", civ:["assira","mesopotamica"], city:"ninive",
    tags:["distruzione","assiria"] },

  { id:"gerusalemme_distrutta", anno:-586, titolo:"Distruzione di Gerusalemme",
    desc:"Nabucodonosor II distrugge il Tempio di Salomone e deporta gli Ebrei a Babilonia: l'esilio babilonese. Evento fondante per il giudaismo e le religioni abramitiche.",
    tipo:"distruzione", livello:"globale", civ:["mesopotamica","israelita"], city:"gerusalemme",
    tags:["deportazione","giudea"] },

  { id:"ciro_babilonia", anno:-539, titolo:"Ciro conquista Babilonia",
    desc:"Ciro il Grande entra a Babilonia accolto come liberatore. Autorizza il ritorno degli Ebrei in Palestina. Fine dell'Impero Neobabilonese; nasce l'Impero Achemenide.",
    tipo:"politico", livello:"globale", civ:["persiana","mesopotamica"], city:"babilonia",
    tags:["ciro","persia","conquista"] },

  { id:"persepoli_dario", anno:-518, titolo:"Costruzione di Persepoli",
    desc:"Dario I inizia la costruzione di Persepoli come capitale cerimoniale dell'Impero. I lavori proseguono per decenni. Rappresentazione del potere universale achemenide.",
    tipo:"culturale", livello:"globale", civ:["persiana"], city:"persepoli",
    tags:["architettura","persia","dario"] },

  // ── LOCALI ────────────────────────────────────────────────
  { id:"babilonia_hammurabi", anno:-1792, titolo:"Hammurabi re di Babilonia",
    desc:"Hammurabi sale al trono di Babilonia e avvia la conquista della Mesopotamia. In 35 anni costruisce il più grande impero del suo tempo, da Ur a Mari.",
    tipo:"politico", livello:"locale", civ:["mesopotamica"], city:"babilonia",
    tags:["hammurabi","impero","mesopotamia"] },

  { id:"babilonia_sennacherib", anno:-689, titolo:"Sennacherib distrugge Babilonia",
    desc:"Il re assiro Sennacherib rasa al suolo Babilonia come punizione per la sua ribellione. Redirige il corso dell'Eufrate sulla città. Ricostruita dal figlio Esarhaddon.",
    tipo:"distruzione", livello:"locale", civ:["assira","mesopotamica"], city:"babilonia",
    tags:["distruzione","assiria","mesopotamia"] },

  { id:"babilonia_nabucodonosor", anno:-605, titolo:"Nabucodonosor II al trono",
    desc:"Nabucodonosor II inizia il suo lungo regno e fa di Babilonia la città più grande del mondo antico: Giardini Pensili, Porta di Ishtar, processione di Marduk.",
    tipo:"politico", livello:"locale", civ:["mesopotamica"], city:"babilonia",
    tags:["nabucodonosor","architettura","mesopotamia"] },

  { id:"assurbanipal_biblioteca", anno:-668, titolo:"Biblioteca di Assurbanipal",
    desc:"Il re assiro Assurbanipal raccoglie a Ninive oltre 30.000 tavolette cuneiformi: la più grande biblioteca del mondo antico. Include il poema di Gilgamesh, rituale, matematica.",
    tipo:"culturale", livello:"locale", civ:["assira"], city:"ninive",
    tags:["biblioteca","scrittura","assiria"] },

  { id:"alfabeto_ugarit", anno:-1400, titolo:"Alfabeto di Ugarit",
    desc:"A Ugarit si sviluppa il primo alfabeto consonantico della storia, con 30 segni cuneiformi. Progenitore diretto degli alfabeti fenicio, greco, latino e arabo.",
    tipo:"culturale", livello:"locale", civ:["cananea"], city:"ugarit",
    tags:["alfabeto","scrittura","canaan"] },

  { id:"egitto_quartier_amarna", anno:-1350, titolo:"Lettere di Amarna",
    desc:"L'archivio di Amarna rivela una fitta rete diplomatica: 382 tavolette in accadico scambiate tra Egitto, Mittani, Assiria, Babilonia, Hittiti, re cananei. Prima 'globalizzazione' documentata.",
    tipo:"culturale", livello:"locale", civ:["egizia","mittani","mesopotamica","ittita"], city:"amarna",
    tags:["diplomazia","amarna","bronzo_tardo"] },

  { id:"qarqar", anno:-853, titolo:"Battaglia di Qarqar",
    desc:"Salmanassar III affronta una grande coalizione di dodici re (tra cui Acab d'Israele e Hadad-ezer di Damasco) sul fiume Oronte. Prima menzione biblica degli Assiri.",
    tipo:"battaglia", livello:"locale", civ:["assira","fenico","israelita","aramaica"], city:"damasco",
    tags:["battaglia","assiria","coalizione"] }
];
