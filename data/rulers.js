// ============================================================
//  RULERS — Sovrani del Vicino Oriente Antico
//  Fonti:
//    - Cline, "1177 a.C." (Bronzo Tardo, XVIII-XII sec.)
//    - Cline, "La sopravvivenza delle civiltà" (Ferro, XIII-VIII sec.)
//    - Giusfredi, "Il Vicino Oriente antico" (Carocci)
//  Struttura: { stato, nome, inizio, fine, note }
//  inizio/fine in anni a.C. (negativi)
//  "ca." indica datazione approssimativa
// ============================================================
var RULERS = [

  // ── EGITTO ────────────────────────────────────────────────
  // Bronzo Tardo (Cline 1177)
  { stato:"egitto", nome:"Seqenenra",         inizio:-1560, fine:-1555, note:"XVI sec., lotta contro gli Hyksos" },
  { stato:"egitto", nome:"Kahmose",           inizio:-1555, fine:-1550, note:"XVI sec." },
  { stato:"egitto", nome:"Ahmose I",          inizio:-1550, fine:-1525, note:"Fondatore del Nuovo Regno, espulsione degli Hyksos" },
  { stato:"egitto", nome:"Thutmose I",        inizio:-1506, fine:-1493, note:"XV sec." },
  { stato:"egitto", nome:"Thutmose II",       inizio:-1493, fine:-1479, note:"XV sec." },
  { stato:"egitto", nome:"Hatshepsut",        inizio:-1479, fine:-1458, note:"XV sec., faraone donna" },
  { stato:"egitto", nome:"Thutmose III",      inizio:-1458, fine:-1425, note:"XV sec., massima espansione egiziana" },
  { stato:"egitto", nome:"Amenofi III",       inizio:-1390, fine:-1352, note:"XIV sec., apogeo diplomatico" },
  { stato:"egitto", nome:"Akhenaton",         inizio:-1352, fine:-1336, note:"XIV sec., rivoluzione religiosa monoteista" },
  { stato:"egitto", nome:"Tutankhamon",       inizio:-1336, fine:-1327, note:"XIV sec." },
  { stato:"egitto", nome:"Ay",                inizio:-1327, fine:-1323, note:"XIV sec." },
  { stato:"egitto", nome:"Ramses II",         inizio:-1279, fine:-1213, note:"XIII sec., battaglia di Qadesh, trattato con gli Ittiti" },
  { stato:"egitto", nome:"Merenptah",         inizio:-1213, fine:-1203, note:"XIII sec., prima menzione di Israele" },
  { stato:"egitto", nome:"Seti II",           inizio:-1203, fine:-1197, note:"XII sec." },
  { stato:"egitto", nome:"Ramses III",        inizio:-1186, fine:-1155, note:"XII sec., vittoria sui Popoli del Mare" },
  { stato:"egitto", nome:"Ramses IV-X",       inizio:-1155, fine:-1098, note:"XII-XI sec., declino del Nuovo Regno" },
  // Ferro (Cline La sopravvivenza)
  { stato:"egitto", nome:"Ramses XI",         inizio:-1098, fine:-1070, note:"Fine Nuovo Regno" },
  { stato:"egitto", nome:"Smendes",           inizio:-1077, fine:-1043, note:"XXI dinastia" },
  { stato:"egitto", nome:"Herihor",           inizio:-1080, fine:-1074, note:"Sommo sacerdote di Amon, co-regnante" },
  { stato:"egitto", nome:"Panedjem I",        inizio:-1074, fine:-1036, note:"XXI dinastia" },
  { stato:"egitto", nome:"Psusennes I",       inizio:-1039, fine:-991,  note:"XXI dinastia" },
  { stato:"egitto", nome:"Amenemope",         inizio:-991,  fine:-982,  note:"XXI dinastia" },
  { stato:"egitto", nome:"Siamon",            inizio:-979,  fine:-958,  note:"XXI dinastia" },
  { stato:"egitto", nome:"Psusennes II",      inizio:-958,  fine:-945,  note:"Fine XXI dinastia" },
  { stato:"egitto", nome:"Sheshonq I",        inizio:-945,  fine:-924,  note:"XXII dinastia, campagna in Canaan" },
  { stato:"egitto", nome:"Osorkon I",         inizio:-924,  fine:-889,  note:"XXII dinastia" },
  { stato:"egitto", nome:"Takelot I",         inizio:-889,  fine:-872,  note:"XXII dinastia" },
  { stato:"egitto", nome:"Sheshonq IIa",      inizio:-890,  fine:-890,  note:"Breve co-regnanza" },
  { stato:"egitto", nome:"Osorkon II",        inizio:-872,  fine:-831,  note:"XXII dinastia" },
  { stato:"egitto", nome:"Sheshonq III",      inizio:-831,  fine:-791,  note:"XXII dinastia" },
  { stato:"egitto", nome:"Takelot II",        inizio:-834,  fine:-810,  note:"XXII dinastia" },
  { stato:"egitto", nome:"Sheshonq IV",       inizio:-791,  fine:-782,  note:"XXII dinastia" },

  // ── ITTITI ────────────────────────────────────────────────
  // Bronzo Medio
  { stato:"ittiti", nome:"Hattušili I",       inizio:-1650, fine:-1620, note:"XVII sec., fondatore del regno antico ittita" },
  { stato:"ittiti", nome:"Muršili I",         inizio:-1620, fine:-1590, note:"XVII sec., saccheggio di Babilonia (1595 ca.)" },
  // Bronzo Tardo (Cline 1177)
  { stato:"ittiti", nome:"Tudhaliya I/II",    inizio:-1430, fine:-1400, note:"XV sec." },
  { stato:"ittiti", nome:"Šuppiluliuma I",    inizio:-1344, fine:-1322, note:"XIV sec., massima potenza ittita" },
  { stato:"ittiti", nome:"Muršili II",        inizio:-1321, fine:-1295, note:"XIV-XIII sec." },
  { stato:"ittiti", nome:"Muwattalli II",     inizio:-1295, fine:-1272, note:"XIII sec., battaglia di Qadesh contro Ramses II" },
  { stato:"ittiti", nome:"Hattušili III",     inizio:-1267, fine:-1237, note:"XIII sec., trattato con Ramses II (1259)" },
  { stato:"ittiti", nome:"Tudhaliya IV",      inizio:-1237, fine:-1209, note:"XIII sec." },
  { stato:"ittiti", nome:"Šuppiluliuma II",   inizio:-1207, fine:-1185, note:"XII sec., ultimo re ittita, collasso ~1185" },

  // ── ASSIRIA ───────────────────────────────────────────────
  // Bronzo Tardo (Cline 1177)
  { stato:"assiria", nome:"Adad-nirari I",    inizio:-1307, fine:-1275, note:"XIV sec., espansione assira" },
  { stato:"assiria", nome:"Tukulti-Ninurta I",inizio:-1244, fine:-1208, note:"XIII sec., conquista di Babilonia" },
  { stato:"assiria", nome:"Assur-dan I",      inizio:-1179, fine:-1133, note:"XII-XI sec." },
  { stato:"assiria", nome:"Assur-reša-iši I", inizio:-1133, fine:-1116, note:"XII sec." },
  { stato:"assiria", nome:"Tiglatpileser I",  inizio:-1115, fine:-1076, note:"XII-XI sec., grande conquista" },
  // Ferro (Cline La sopravvivenza)
  { stato:"assiria", nome:"Assur-bel-kala",   inizio:-1074, fine:-1057, note:"XI sec." },
  { stato:"assiria", nome:"Aššurnasirpal I",  inizio:-1049, fine:-1031, note:"XI sec." },
  { stato:"assiria", nome:"Salmanassar II",   inizio:-1030, fine:-1019, note:"XI sec." },
  { stato:"assiria", nome:"Assur-dan II",     inizio:-934,  fine:-912,  note:"X-IX sec., ripresa assira" },
  { stato:"assiria", nome:"Adad-nirari II",   inizio:-911,  fine:-891,  note:"IX sec." },
  { stato:"assiria", nome:"Tukulti-Ninurta II",inizio:-890, fine:-884,  note:"IX sec." },
  { stato:"assiria", nome:"Aššurnasirpal II", inizio:-883,  fine:-859,  note:"IX sec., espansione neoassira" },
  { stato:"assiria", nome:"Salmanassar III",  inizio:-858,  fine:-824,  note:"IX sec., battaglia di Qarqar 853" },
  { stato:"assiria", nome:"Shamši-Adad V",    inizio:-823,  fine:-811,  note:"IX-VIII sec." },
  { stato:"assiria", nome:"Adad-nirari III",  inizio:-810,  fine:-783,  note:"IX-VIII sec." },

  // ── BABILONIA ─────────────────────────────────────────────
  // Bronzo Tardo (Cline 1177)
  { stato:"babilonia", nome:"Hammurabi",      inizio:-1792, fine:-1750, note:"XVIII sec., codice di leggi" },
  { stato:"babilonia", nome:"Zimri-Lim (Marī)",inizio:-1775,fine:-1761, note:"XVIII sec., re di Marī contemporaneo di Hammurabi" },
  { stato:"babilonia", nome:"Kurigalzu I",    inizio:-1375, fine:-1350, note:"XIV sec., dinastia cassita" },
  { stato:"babilonia", nome:"Kadashman-Enlil I",inizio:-1374,fine:-1360,note:"XIV sec." },
  { stato:"babilonia", nome:"Burna-Buriash II",inizio:-1359,fine:-1333, note:"XIV sec., trattato con Egitto" },
  { stato:"babilonia", nome:"Kurigalzu II",   inizio:-1332, fine:-1308, note:"XIV sec." },
  { stato:"babilonia", nome:"Kashtiliashu",   inizio:-1232, fine:-1225, note:"XIII sec., sconfitta da Tukulti-Ninurta I" },
  // Ferro (Cline La sopravvivenza)
  { stato:"babilonia", nome:"Nabucodonosor I",inizio:-1125, fine:-1104, note:"XII sec., II dinastia di Isin" },
  { stato:"babilonia", nome:"Marduk-nadin-ahhe",inizio:-1099,fine:-1082,note:"XII sec. ca." },
  { stato:"babilonia", nome:"Marduk-sapik-zeri",inizio:-1082,fine:-1069,note:"XI sec." },
  { stato:"babilonia", nome:"Adad-apla-iddina",inizio:-1067,fine:-1046, note:"XI sec." },
  { stato:"babilonia", nome:"Kaššu-nadin-ahhe",inizio:-1007,fine:-1005, note:"X sec. ca." },
  { stato:"babilonia", nome:"Nabu-mukin-apli", inizio:-978,  fine:-943,  note:"X sec. ca." },
  { stato:"babilonia", nome:"Shamas-mudammiq", inizio:-900,  fine:-900,  note:"IX sec. ca." },
  { stato:"babilonia", nome:"Nabu-apla-iddina",inizio:-887,  fine:-855,  note:"IX sec. ca." },
  { stato:"babilonia", nome:"Marduk-zakir-sumi",inizio:-855, fine:-819,  note:"IX sec." },
  { stato:"babilonia", nome:"Marduk-balatsu-iqbi",inizio:-819,fine:-813, note:"IX sec." },
  { stato:"babilonia", nome:"Baba-aha-iddina", inizio:-812,  fine:-812,  note:"VIII sec. ca." },
  // ── BABILONIA NEOBABILONESE (Dinastia caldea) ───────────────
  { stato:"babilonia", nome:"Nabopolassar",     inizio:-626,  fine:-605,  note:"Fondatore della dinastia neobabilonese; distrugge Ninive (-612) con i Medi" },
  { stato:"babilonia", nome:"Nabucodonosor II", inizio:-605,  fine:-562,  note:"Il più grande re di Babilonia: Karkemish (-605), distrugge Gerusalemme (-587), costruisce i Giardini Pensili" },
  { stato:"babilonia", nome:"Amel-Marduk",      inizio:-562,  fine:-560,  note:"Figlio di Nabucodonosor II; liberò Jehoiachin di Giuda dalla prigione (2 Re 25,27)" },
  { stato:"babilonia", nome:"Neriglissar",      inizio:-560,  fine:-556,  note:"Generale di Nabucodonosor; usurpatore" },
  { stato:"babilonia", nome:"Labashi-Marduk",   inizio:-556,  fine:-556,  note:"Regnò pochi mesi; ucciso in una congiura" },
  { stato:"babilonia", nome:"Nabonedo",         inizio:-556,  fine:-539,  note:"Ultimo re di Babilonia; devoto del dio Sin, assente dalla città per anni; sconfitto da Ciro il Grande (-539)" },

  // ── MITANNI ───────────────────────────────────────────────
  { stato:"mitanni", nome:"Saushtatar",       inizio:-1450, fine:-1420, note:"XV sec., apogeo del Mitanni" },
  { stato:"mitanni", nome:"Shuttarna II",     inizio:-1390, fine:-1360, note:"XIV sec." },
  { stato:"mitanni", nome:"Tushratta",        inizio:-1360, fine:-1335, note:"XIV sec., lettere di Amarna" },
  { stato:"mitanni", nome:"Shattiwaza",       inizio:-1335, fine:-1310, note:"XIV sec., vassallo degli Ittiti" },

  // ── UGARIT ────────────────────────────────────────────────
  { stato:"ugarit", nome:"Ammistamru I",      inizio:-1375, fine:-1350, note:"XIV sec." },
  { stato:"ugarit", nome:"Niqmaddu II",       inizio:-1350, fine:-1315, note:"XIV sec., trattato con Šuppiluliuma I" },
  { stato:"ugarit", nome:"Niqmepa",           inizio:-1313, fine:-1260, note:"XIV-XIII sec." },
  { stato:"ugarit", nome:"Ammistamru II",     inizio:-1260, fine:-1230, note:"XIII sec." },
  { stato:"ugarit", nome:"Niqmaddu III",      inizio:-1230, fine:-1215, note:"XIII sec." },
  { stato:"ugarit", nome:"Ammurapi",          inizio:-1215, fine:-1185, note:"XIII-XII sec., ultimo re di Ugarit, collasso ~1185" },

  // ── ELAM ──────────────────────────────────────────────────
  { stato:"elam", nome:"Shutruk-Nahhunte",    inizio:-1190, fine:-1155, note:"XII sec., saccheggio di Babilonia" },
  { stato:"elam", nome:"Kutur-Nahhunte",      inizio:-1155, fine:-1150, note:"XII sec. ca." },
  { stato:"elam", nome:"Hutelutush-Inshushinak",inizio:-1120,fine:-1110,note:"XII sec. ca." },
  { stato:"elam", nome:"Shutruk-Nakhunte",    inizio:-1185, fine:-1185, note:"XII sec." },

  // ── KARKEMISH (grande re) ─────────────────────────────────
  { stato:"karkemish", nome:"Kuzi-Tešub",     inizio:-1200, fine:-1180, note:"XII sec. ca., neoittita" },
  { stato:"karkemish", nome:"Ini-Tešub",      inizio:-1200, fine:-1180, note:"Fine XII sec. ca." },
  { stato:"karkemish", nome:"Sapaziti",       inizio:-1050, fine:-1050, note:"Fine XI sec. ca." },
  { stato:"karkemish", nome:"Ura-Tarhunta",   inizio:-1050, fine:-1050, note:"Fine XI sec. ca." },
  { stato:"karkemish", nome:"Tuthaliya II",   inizio:-1050, fine:-1050, note:"Fine XI sec. ca." },
  { stato:"karkemish", nome:"Suhi I",         inizio:-1000, fine:-980,  note:"X sec. ca." },
  { stato:"karkemish", nome:"Astuwalamanza(s)",inizio:-980, fine:-960,  note:"X sec." },
  { stato:"karkemish", nome:"Suhi II",        inizio:-960,  fine:-940,  note:"X sec." },
  { stato:"karkemish", nome:"Katuwa(s)",      inizio:-940,  fine:-920,  note:"Fine X sec." },
  { stato:"karkemish", nome:"Suhi III",       inizio:-900,  fine:-880,  note:"IX sec. ca." },
  { stato:"karkemish", nome:"Sangara",        inizio:-875,  fine:-848,  note:"IX sec. ca." },
  { stato:"karkemish", nome:"Isarwila-muwa",  inizio:-848,  fine:-830,  note:"II metà IX sec." },
  { stato:"karkemish", nome:"Kuwalana-muwa",  inizio:-830,  fine:-815,  note:"II metà IX sec." },
  { stato:"karkemish", nome:"Astiru(wa) I",   inizio:-810,  fine:-800,  note:"IX sec. ca." },
  { stato:"karkemish", nome:"Kamani",         inizio:-790,  fine:-780,  note:"VIII sec. ca." },

  // ── URARTU ────────────────────────────────────────────────
  { stato:"urartu", nome:"Arame",             inizio:-859,  fine:-844,  note:"IX sec." },
  { stato:"urartu", nome:"Sarduri I",         inizio:-834,  fine:-828,  note:"IX sec. ca." },
  { stato:"urartu", nome:"Ishpuini",          inizio:-828,  fine:-810,  note:"IX sec. ca." },
  { stato:"urartu", nome:"Menua",             inizio:-810,  fine:-786,  note:"IX-VIII sec. ca." },
  { stato:"urartu", nome:"Inushpua",          inizio:-810,  fine:-806,  note:"Co-regnante con Menua" },
  { stato:"urartu", nome:"Argishti I",        inizio:-786,  fine:-764,  note:"VIII sec. ca." },

  // ── TIRO ──────────────────────────────────────────────────
  { stato:"tiro", nome:"Hiram I",             inizio:-970,  fine:-936,  note:"X sec., alleato di Davide e Salomone" },
  { stato:"tiro", nome:"Baal-ma'zer I",       inizio:-935,  fine:-920,  note:"Fine X sec." },
  { stato:"tiro", nome:"Abdi-Aštart (Abdastratos)",inizio:-920,fine:-910,note:"Fine X sec." },
  { stato:"tiro", nome:"Methusastratos",      inizio:-910,  fine:-906,  note:"Fine X sec." },
  { stato:"tiro", nome:"Iš-Aštart",          inizio:-906,  fine:-897,  note:"Inizio IX sec." },
  { stato:"tiro", nome:"Aštar(o)-imn",       inizio:-897,  fine:-890,  note:"Inizio IX sec." },
  { stato:"tiro", nome:"Pilles",             inizio:-890,  fine:-880,  note:"IX sec." },
  { stato:"tiro", nome:"Ethbaal",            inizio:-880,  fine:-847,  note:"IX sec., padre di Gezabele" },
  { stato:"tiro", nome:"Baal-ma'zer II",     inizio:-847,  fine:-831,  note:"IX sec." },
  { stato:"tiro", nome:"Mattan I",           inizio:-831,  fine:-820,  note:"Fine IX sec." },
  { stato:"tiro", nome:"Pumiyaton (Pigmalione)",inizio:-820,fine:-774,  note:"IX-VIII sec." },

  // ── BIBLO ─────────────────────────────────────────────────
  { stato:"biblo", nome:"Tjekkerbaal/Zakarbaal",inizio:-1075,fine:-1070,note:"XI sec. ca." },
  { stato:"biblo", nome:"Ahiram",             inizio:-1000, fine:-980,  note:"Inizio X sec." },
  { stato:"biblo", nome:"Ethbaal",            inizio:-980,  fine:-965,  note:"X sec." },
  { stato:"biblo", nome:"Yehimilk",          inizio:-965,  fine:-950,  note:"Metà X sec." },
  { stato:"biblo", nome:"Abibaal",            inizio:-950,  fine:-935,  note:"Metà-fine X sec." },
  { stato:"biblo", nome:"Elibaal",           inizio:-935,  fine:-920,  note:"Metà-fine X sec." },
  { stato:"biblo", nome:"Shipitbaal",        inizio:-920,  fine:-900,  note:"Fine X sec." },

  // ── DAMASCO ───────────────────────────────────────────────
  { stato:"damasco", nome:"Hadad-ezer",       inizio:-858,  fine:-843,  note:"IX sec." },
  { stato:"damasco", nome:"Hazael",           inizio:-843,  fine:-796,  note:"IX sec., espansione aramaica" },

  // ── SAM'AL (ZINCIRLI) ─────────────────────────────────────
  { stato:"samal", nome:"Hayya",              inizio:-870,  fine:-840,  note:"IX sec. ca." },
  { stato:"samal", nome:"Sha'il",             inizio:-850,  fine:-840,  note:"Co-governante ca." },
  { stato:"samal", nome:"Kulamuwa",           inizio:-840,  fine:-810,  note:"IX sec." },
  { stato:"samal", nome:"Qurila",             inizio:-810,  fine:-790,  note:"VIII sec. ca." },
  { stato:"samal", nome:"Panamuwa I",         inizio:-790,  fine:-745,  note:"VIII sec. ca." },

  // ── MONARCHIA UNITA DI ISRAELE ────────────────────────────
  { stato:"israele_unito", nome:"Davide",     inizio:-1000, fine:-970,  note:"X sec., re di Israele e Giuda" },
  { stato:"israele_unito", nome:"Salomone",   inizio:-970,  fine:-930,  note:"X sec., costruzione del Tempio" },

  // ── ISRAELE (REGNO DEL NORD) ──────────────────────────────
  { stato:"israele", nome:"Omri",             inizio:-884,  fine:-873,  note:"IX sec., fondatore di Samaria" },
  { stato:"israele", nome:"Acab",             inizio:-871,  fine:-852,  note:"IX sec., battaglia di Qarqar" },
  { stato:"israele", nome:"Ioram",            inizio:-850,  fine:-840,  note:"IX sec. ca." },
  { stato:"israele", nome:"Ieu",              inizio:-841,  fine:-814,  note:"IX sec." },
  { stato:"israele", nome:"Ioas (Joash)",     inizio:-804,  fine:-789,  note:"VIII sec. ca." },

  // ── GIUDA (REGNO DEL SUD) ─────────────────────────────────
  { stato:"giuda", nome:"Ieoram",             inizio:-849,  fine:-842,  note:"IX sec. ca." },
  { stato:"giuda", nome:"Acazia",             inizio:-842,  fine:-841,  note:"IX sec. ca." },

  // ── MOAB ──────────────────────────────────────────────────
  { stato:"moab", nome:"Mesha",               inizio:-860,  fine:-840,  note:"Metà IX sec., stele di Mesha" },

  // ── EDOM ──────────────────────────────────────────────────
  { stato:"edom", nome:"Hadad",               inizio:-1000, fine:-980,  note:"Inizio X sec." },

  // ── PERSIA ACHEMENIDE ─────────────────────────────────────
  { stato:"persiana", nome:"Ciro II (il Grande)",   inizio:-559, fine:-530, note:"Fondatore dell'impero achemenide; conquista Lidia (-547), Babilonia (-539); Editto di Ciro: ritorno degli ebrei dall'esilio" },
  { stato:"persiana", nome:"Cambise II",            inizio:-530, fine:-522, note:"Conquista l'Egitto a Pelusio (-525); muore in Siria durante la rivolta di Gaumata" },
  { stato:"persiana", nome:"Dario I (il Grande)",   inizio:-522, fine:-486, note:"Riorganizza l'impero in satrapie; Persepoli; sconfitto a Maratona (-490)" },
  { stato:"persiana", nome:"Serse I",               inizio:-486, fine:-465, note:"Invade la Grecia; brucia Atene (-480); sconfitto a Salamina e Platea" },
  { stato:"persiana", nome:"Artaserse I",           inizio:-465, fine:-424, note:"Pace di Callia con Atene (-449); favorisce Neemia e Esdra" },
  { stato:"persiana", nome:"Dario II",              inizio:-424, fine:-404, note:"Sostiene Sparta nella guerra del Peloponneso" },
  { stato:"persiana", nome:"Artaserse II",          inizio:-404, fine:-358, note:"Il più lungo regno achemenide; respinge i Diecimila di Senofonte" },
  { stato:"persiana", nome:"Artaserse III",         inizio:-358, fine:-338, note:"Riconquista l'Egitto (-343); assassinato da Bagoa" },
  { stato:"persiana", nome:"Dario III",             inizio:-336, fine:-330, note:"Ultimo re achemenide; sconfitto da Alessandro a Isso (-333) e Gaugamela (-331); assassinato da Besso" }
];
