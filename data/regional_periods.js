// ============================================================
//  REGIONAL_PERIODS — Periodizzazione per regione
//  Fonte: Giusfredi, "Il Vicino Oriente antico" (Carocci), Tabella 1
//  I secoli della tabella sono convertiti in anni tondi; "etichetta"
//  riporta la datazione del libro. ind:true = date stimate, non del libro.
//  fine:null = evento puntuale.
// ============================================================
var REGIONAL_PERIODS = [

  // ── BASSA MESOPOTAMIA ──
  { regione:"Bassa Mesopotamia", nome:"Protodinastico", inizio:-3000, fine:-2400, etichetta:"date indicative", ind:true },
  { regione:"Bassa Mesopotamia", nome:"Età di Akkad", inizio:-2400, fine:-2200, etichetta:"XXIV–XXIII sec. a.C." },
  { regione:"Bassa Mesopotamia", nome:"Interregno Gutium", inizio:-2200, fine:-2100, etichetta:"XXII sec. a.C." },
  { regione:"Bassa Mesopotamia", nome:"III dinastia di Ur", inizio:-2112, fine:-2004, etichetta:"2112–2004 a.C.", nota:"Date dalla Tabella 2 (la Tabella 1 dice XXI secolo)." },
  { regione:"Bassa Mesopotamia", nome:"Età di Isin e Larsa", inizio:-2000, fine:-1800, etichetta:"XX–XIX sec. a.C." },
  { regione:"Bassa Mesopotamia", nome:"Casata di Hammurapi a Babilonia", inizio:-1900, fine:-1595, etichetta:"XIX–XVII sec. a.C." },
  { regione:"Bassa Mesopotamia", nome:"Saccheggio ittita di Babilonia", inizio:-1595, fine:null, etichetta:"1595 a.C.", nota:"Samsu-ditana, ultimo membro della dinastia, viene spodestato dalla spedizione ittita del re Murshili I, giunta a Babilonia al termine di una lunghissima campagna militare partita dall'Anatolia." },
  { regione:"Bassa Mesopotamia", nome:"Dinastia cassita a Babilonia", inizio:-1600, fine:-1100, etichetta:"XVI–XII sec. a.C.", nota:"L'ultimo sovrano cassita nelle tabelle dei sovrani, Enlil-nadin-ahi, regna fino al 1155 circa." },
  { regione:"Bassa Mesopotamia", nome:"II dinastia di Isin (Nabucodonosor I)", inizio:-1150, fine:-1025, etichetta:"date indicative", ind:true },
  { regione:"Bassa Mesopotamia", nome:"Tarde dinastie babilonesi", inizio:-1025, fine:-750, etichetta:"date indicative", ind:true },
  { regione:"Bassa Mesopotamia", nome:"Egemonia assira su Babilonia", inizio:-750, fine:-612, etichetta:"dalla metà dell'VIII sec. a.C.", nota:"Controllo diretto dalla metà dell'VIII secolo. Fine indicativa." },
  { regione:"Bassa Mesopotamia", nome:"Impero neobabilonese", inizio:-600, fine:-539, etichetta:"VI sec. a.C." },
  { regione:"Bassa Mesopotamia", nome:"Conquista persiana di Babilonia", inizio:-539, fine:null, etichetta:"539 a.C." },

  // ── ALTA MESOPOTAMIA ──
  { regione:"Alta Mesopotamia", nome:"Fase formativa", inizio:-3000, fine:-2025, etichetta:"date indicative", ind:true },
  { regione:"Alta Mesopotamia", nome:"Età paleoassira", inizio:-2025, fine:-1800, etichetta:"dalla fine del XXI sec. a.C.", nota:"Inizio alla fine del XXI secolo. La fine è indicativa." },
  { regione:"Alta Mesopotamia", nome:"Shamshi-Adad", inizio:-1800, fine:-1700, etichetta:"XVIII sec. a.C." },
  { regione:"Alta Mesopotamia", nome:"Breve egemonia babilonese", inizio:-1760, fine:-1700, etichetta:"date indicative", ind:true },
  { regione:"Alta Mesopotamia", nome:"Fioritura di Mittani", inizio:-1600, fine:-1300, etichetta:"XVI–XIV sec. a.C." },
  { regione:"Alta Mesopotamia", nome:"Età medioassira", inizio:-1400, fine:-1000, etichetta:"dal XIV sec. a.C.", nota:"Inizio nel XIV secolo. La fine è indicativa." },
  { regione:"Alta Mesopotamia", nome:"Fasi formative dell'impero", inizio:-1000, fine:-900, etichetta:"date indicative", ind:true },
  { regione:"Alta Mesopotamia", nome:"Impero neoassiro", inizio:-900, fine:-612, etichetta:"date indicative", ind:true },
  { regione:"Alta Mesopotamia", nome:"Crescita di Urartu", inizio:-900, fine:-700, etichetta:"IX–VIII sec. a.C." },
  { regione:"Alta Mesopotamia", nome:"Apogeo dell'impero neoassiro", inizio:-800, fine:-612, etichetta:"VIII–VII sec. a.C." },
  { regione:"Alta Mesopotamia", nome:"Caduta di Ninive", inizio:-612, fine:null, etichetta:"613/612 a.C." },

  // ── SIRIA E LEVANTE ──
  { regione:"Siria e Levante", nome:"Fase formativa ed Età di Ebla e Mari", inizio:-3000, fine:-2300, etichetta:"date indicative", ind:true },
  { regione:"Siria e Levante", nome:"Dinastia degli Shakkanakku a Mari", inizio:-2300, fine:-2000, etichetta:"dal XXIII sec. a.C.", nota:"Inizio nel XXIII secolo. La fine è indicativa." },
  { regione:"Siria e Levante", nome:"Dinastia dei Lim a Mari", inizio:-2000, fine:-1761, etichetta:"XX–XVIII sec. a.C." },
  { regione:"Siria e Levante", nome:"Conquista babilonese di Mari", inizio:-1761, fine:null, etichetta:"date indicative", ind:true },
  { regione:"Siria e Levante", nome:"Vari regni locali e città-Stato", inizio:-1600, fine:-1300, etichetta:"XVI–XIV sec. a.C.", nota:"Con crescente influenza da parte di Egitto e regno di Mittani." },
  { regione:"Siria e Levante", nome:"Vicereami ittiti", inizio:-1300, fine:-1200, etichetta:"XIII sec. a.C." },
  { regione:"Siria e Levante", nome:"Regni locali (primi Stati neoittiti e aramaici)", inizio:-1200, fine:-900, etichetta:"date indicative", ind:true },
  { regione:"Siria e Levante", nome:"Regni locali (neoittiti, aramaici, fenici)", inizio:-900, fine:-700, etichetta:"date indicative", ind:true },
  { regione:"Siria e Levante", nome:"Conquista assira", inizio:-800, fine:-600, etichetta:"VIII–VII sec. a.C." },

  // ── ANATOLIA ──
  { regione:"Anatolia", nome:"Fase formativa", inizio:-3000, fine:-2000, etichetta:"date indicative", ind:true },
  { regione:"Anatolia", nome:"Mercati paleoassiri e fase formativa ittita", inizio:-2000, fine:-1600, etichetta:"XX–XVII sec. a.C." },
  { regione:"Anatolia", nome:"Antico regno ittita", inizio:-1650, fine:-1500, etichetta:"fine XVII–XVI sec. a.C." },
  { regione:"Anatolia", nome:"Fase preimperiale ittita", inizio:-1500, fine:-1300, etichetta:"XV–XIV sec. a.C." },
  { regione:"Anatolia", nome:"Impero ittita", inizio:-1400, fine:-1200, etichetta:"XIV–XIII sec. a.C." },
  { regione:"Anatolia", nome:"Sviluppo dei regni neoittiti d'Anatolia", inizio:-1200, fine:-900, etichetta:"date indicative", ind:true },
  { regione:"Anatolia", nome:"Regni neoittiti, regno dei Frigi e regno di Lidia", inizio:-900, fine:-546, etichetta:"date indicative", ind:true },
  { regione:"Anatolia", nome:"Impero dei Medi", inizio:-700, fine:-550, etichetta:"VII–VI sec. a.C." },
  { regione:"Anatolia", nome:"Conquista persiana dell'Anatolia", inizio:-546, fine:null, etichetta:"546 a.C." },

  // ── EGITTO ──
  { regione:"Egitto", nome:"Protodinastico", inizio:-3000, fine:-2700, etichetta:"date indicative", ind:true },
  { regione:"Egitto", nome:"Antico Regno", inizio:-2700, fine:-2100, etichetta:"XXVII–XXII sec. a.C." },
  { regione:"Egitto", nome:"I Periodo intermedio", inizio:-2200, fine:-2000, etichetta:"XXII–XXI sec. a.C." },
  { regione:"Egitto", nome:"Medio Regno", inizio:-2100, fine:-1600, etichetta:"XXI–XVII sec. a.C." },
  { regione:"Egitto", nome:"II Periodo intermedio", inizio:-1700, fine:-1500, etichetta:"XVII–XVI sec. a.C." },
  { regione:"Egitto", nome:"Nuovo Regno", inizio:-1600, fine:-1000, etichetta:"XVI–XI sec. a.C.", nota:"Nelle tabelle dei sovrani l'ultimo faraone ramesside, Ramses XI, regna fino al 1070." },
  { regione:"Egitto", nome:"III Periodo intermedio", inizio:-1100, fine:-600, etichetta:"XI–VII sec. a.C." },
  { regione:"Egitto", nome:"Età tarda", inizio:-700, fine:-525, etichetta:"VII–VI sec. a.C." },
  { regione:"Egitto", nome:"Conquista persiana dell'Egitto", inizio:-525, fine:null, etichetta:"525 a.C.", nota:"Fine dell'Età tarda." },
];
