// ============================================================
//  BATTAGLIE E ASSEDI SIGNIFICATIVI DEL VICINO ORIENTE ANTICO
//  Fonti: Cline, Giusfredi, Liverani, Galil
// ============================================================

var BATTLES = [

  // ── ETÀ DEL BRONZO MEDIO / NUOVO REGNO ──────────────────────────

  {
    id: "megiddo_thutmosi",
    nome: "Battaglia di Megiddo",
    anno: -1457,
    lat: 32.58, lng: 35.18,
    tipo: "battaglia",
    fazioni: [
      { nome: "Egitto (Thutmosi III)", ruolo: "vincitore" },
      { nome: "Coalizione cananea (re di Qadesh)", ruolo: "sconfitto" }
    ],
    esito: "Vittoria egiziana, presa di Megiddo dopo 7 mesi di assedio",
    desc: "Prima battaglia documentata con dettaglio tattico nella storia. Thutmosi III guidò l'esercito attraverso il pericoloso passo di Meghiddo sorprendendo la coalizione cananea. «Prendere Megiddo vale prendere mille città» — annali di Thutmosi III.",
    significato: "Establishes Egypt's dominion over Canaan for a century. The name 'Armageddon' derives from 'Har Megiddo' (Mount Megiddo).",
    fonte: "Annali di Thutmosi III, Karnak"
  },

  {
    id: "qadesh",
    nome: "Battaglia di Qadesh",
    anno: -1274,
    lat: 34.55, lng: 36.52,
    tipo: "battaglia",
    fazioni: [
      { nome: "Egitto (Ramses II)", ruolo: "contendente" },
      { nome: "Ittiti (Muwattalli II)", ruolo: "contendente" }
    ],
    esito: "Pareggio strategico. Trattato di pace (-1259), il più antico trattato internazionale conservato.",
    desc: "La più grande battaglia di carri dell'antichità: oltre 5.000 carri sul campo. Ramses II cadde in un'imboscata ma resistette; nessuno vinse. Seguì il primo trattato internazionale di pace documentato, firmato da Ramses II e Hattusili III.",
    significato: "Segna l'equilibrio tra le due grandi potenze del Bronzo Tardo. Il testo del trattato è esposto all'ONU come simbolo della diplomazia.",
    fonte: "Poema di Pentaur; archivi di Hattusa; Cline 1177 a.C."
  },

  {
    id: "delta_popoli_mare",
    nome: "Battaglia del Delta (Popoli del Mare)",
    anno: -1175,
    lat: 31.0, lng: 32.3,
    tipo: "battaglia",
    fazioni: [
      { nome: "Egitto (Ramses III)", ruolo: "vincitore" },
      { nome: "Popoli del Mare", ruolo: "sconfitto" }
    ],
    esito: "Vittoria egiziana: blocco dell'invasione dei Popoli del Mare per via terrestre e navale",
    desc: "Ramses III respinse la grande ondata migratoria dei Popoli del Mare con una doppia battaglia: terrestre in Canaan e navale nel Delta. Il tempio di Medinet Habu mostra la battaglia navale con remi, rampini e fanti. L'Egitto sopravvisse ma uscì esausto.",
    significato: "L'unica grande potenza a resistere ai Popoli del Mare. La loro sconfitta parziale li stabili in Canaan (Filistei) e sulla costa siriana.",
    fonte: "Tempio di Medinet Habu (Ramses III); Cline 1177 a.C."
  },

  // ── ETÀ DEL FERRO – ASSIRO ───────────────────────────────────────

  {
    id: "qarqar",
    nome: "Battaglia di Qarqar",
    anno: -853,
    lat: 35.12, lng: 36.72,
    tipo: "battaglia",
    fazioni: [
      { nome: "Assiria (Salmanassar III)", ruolo: "contendente" },
      { nome: "Coalizione siro-palestinese (Damasco, Israele/Acab, Hamat, Tiro…)", ruolo: "contendente" }
    ],
    esito: "Risultato incerto; l'Assiria non sfondò verso il Mediterraneo per un decennio",
    desc: "La coalizione più grande mai assemblata contro l'Assiria: 12 re tra cui Acab di Israele con 2.000 carri e 10.000 fanti. Gli annali assiri proclamano vittoria ma Salmanassar non tornò ad ovest per anni. Prima menzione extrabiblica di Israele come stato militare.",
    significato: "Rallentò l'espansione assira verso il Mediterraneo per una generazione. Unica coalizione levantina efficace.",
    fonte: "Monolite di Kurkh (Salmanassar III); Cline, La sopravvivenza"
  },

  {
    id: "samaria_caduta",
    nome: "Caduta di Samaria",
    anno: -722,
    lat: 32.27, lng: 35.19,
    tipo: "assedio",
    fazioni: [
      { nome: "Assiria (Sargon II)", ruolo: "vincitore" },
      { nome: "Regno di Israele (Hoshea)", ruolo: "sconfitto" }
    ],
    esito: "Distruzione di Samaria; deportazione di 27.290 israeliti in Mesopotamia e Media",
    desc: "Dopo tre anni di assedio Sargon II distrusse Samaria, capitale del regno del Nord. Le deportazioni assire (già iniziate da Tiglat-Pileser III nel -732) cancellarono l'identità etnica delle '10 tribù perdute'. L'area fu ripopolata con popolazioni straniere.",
    significato: "Fine del regno di Israele. Origine del problema delle '10 tribù perdute' e dei Samaritani.",
    fonte: "Annali di Sargon II; 2 Re 17; Cline, La sopravvivenza"
  },

  {
    id: "lachish",
    nome: "Assedio di Lachish",
    anno: -701,
    lat: 31.56, lng: 34.85,
    tipo: "assedio",
    fazioni: [
      { nome: "Assiria (Sennacherib)", ruolo: "vincitore" },
      { nome: "Giuda (Ezechia)", ruolo: "sconfitto" }
    ],
    esito: "Lachish conquistata e distrutta; Gerusalemme non fu presa (Ezechia pagò tributo)",
    desc: "Sennacherib conquistò 46 città di Giuda. L'assedio di Lachish è documentato con straordinario dettaglio nei rilievi del palazzo di Ninive (oggi al British Museum): rampe d'assalto, arieti, deportati. La campagna fece eccezione per Gerusalemme: 2 Re parla di un 'angelo' che decimò l'esercito assiro.",
    significato: "Giuda sopravvisse pagando tributo enorme. I rilievi di Lachish sono il documento iconografico più dettagliato di un assedio antico.",
    fonte: "Prisma di Sennacherib; 2 Re 18-19; rilievi di Ninive (BM)"
  },

  {
    id: "ninive_caduta",
    nome: "Caduta di Ninive",
    anno: -612,
    lat: 36.36, lng: 43.16,
    tipo: "assedio",
    fazioni: [
      { nome: "Babilonia (Nabopolassar) + Medi (Ciassare)", ruolo: "vincitore" },
      { nome: "Assiria (Sin-sharra-ishkun)", ruolo: "sconfitto" }
    ],
    esito: "Ninive rasa al suolo; fine dell'impero neoassiro",
    desc: "La città più potente del mondo antico distrutta in poche settimane. La coalizione babilonese-meda sfruttò la piena del Tigri per abbattere le mura (secondo Diodoro e la Cronaca Babilonese). La profezia di Nahum la celebra come vendetta. «Ninive è una vasca d'acqua» — Nahum 2,9.",
    significato: "Fine dell'impero neoassiro. Il profeta Nahum la celebra. Avvia il dominio neobabilonese.",
    fonte: "Cronaca Babilonese; Nahum 2-3; Giusfredi"
  },

  // ── ETÀ NEOBABILONESE ────────────────────────────────────────────

  {
    id: "karkemish_605",
    nome: "Battaglia di Karkemish",
    anno: -605,
    lat: 36.83, lng: 38.00,
    tipo: "battaglia",
    fazioni: [
      { nome: "Babilonia (Nabucodonosor II, principe ereditario)", ruolo: "vincitore" },
      { nome: "Egitto (Necao II) + resti assiri", ruolo: "sconfitto" }
    ],
    esito: "Vittoria babilonese decisiva; fine della presenza egiziana in Asia",
    desc: "La battaglia più importante dell'inizio del VI sec. a.C.: Nabucodonosor distrusse l'esercito egiziano di Necao II a Karkemish, eliminando l'ultimo alleato assiro. La Bibbia cita la vittoria (Ger 46). Da quel momento Babilonia domina il Levante.",
    significato: "Spartiacque tra egemonia egiziana e babilonese nel Levante. Geremia lo annuncia come punizione divina.",
    fonte: "Cronaca Babilonese; Geremia 46; Giusfredi"
  },

  {
    id: "gerusalemme_587",
    nome: "Distruzione di Gerusalemme",
    anno: -587,
    lat: 31.78, lng: 35.23,
    tipo: "assedio",
    fazioni: [
      { nome: "Babilonia (Nabucodonosor II)", ruolo: "vincitore" },
      { nome: "Giuda (Sedecia)", ruolo: "sconfitto" }
    ],
    esito: "Gerusalemme distrutta; Tempio bruciato; deportazione in Babilonia",
    desc: "Dopo 18 mesi di assedio Nabucodonosor II abbatté le mura di Gerusalemme, bruciò il Tempio di Salomone, accecò il re Sedecia dopo avergli fatto assistere all'esecuzione dei figli. Circa 20.000 ebrei deportati a Babilonia: inizio dell'Esilio.",
    significato: "Evento fondante dell'identità ebraica. L'Esilio babilonese fissa la Torah e trasforma il culto. La data è ancora commemorata nel digiuno del 9 di Av.",
    fonte: "2 Re 25; Geremia 52; Lamentazioni; Cronaca Babilonese"
  },

  // ── ETÀ PERSIANA ─────────────────────────────────────────────────

  {
    id: "babilonia_ciro",
    nome: "Presa di Babilonia (Ciro il Grande)",
    anno: -539,
    lat: 32.54, lng: 44.42,
    tipo: "assedio",
    fazioni: [
      { nome: "Persia achemenide (Ciro il Grande)", ruolo: "vincitore" },
      { nome: "Babilonia (Nabonedo)", ruolo: "sconfitto" }
    ],
    esito: "Babilonia presa quasi senza combattimento; Ciro entra come liberatore",
    desc: "Secondo Erodoto e il Cilindro di Ciro, le truppe persiane entrarono a Babilonia attraverso il letto del fiume Eufrate dopo averlo deviato. La città era ostile a Nabonedo (che aveva spostato le statue degli dei) e accolse Ciro come liberatore. Il Cilindro di Ciro è spesso citato come il primo documento sui diritti umani.",
    significato: "Fine dell'impero neobabilonese; inizio dell'era achemenide. Ciro permise il ritorno degli ebrei dall'Esilio (Editto di Ciro).",
    fonte: "Cilindro di Ciro (BM); Erodoto I,189; Esdra 1"
  },

  {
    id: "pelusio",
    nome: "Battaglia di Pelusio",
    anno: -525,
    lat: 31.1, lng: 32.55,
    tipo: "battaglia",
    fazioni: [
      { nome: "Persia (Cambise II)", ruolo: "vincitore" },
      { nome: "Egitto (Psammetico III)", ruolo: "sconfitto" }
    ],
    esito: "Vittoria persiana; Egitto diventa satrapia dell'impero achemenide",
    desc: "Cambise II conquistò l'Egitto in una sola battaglia. La leggenda vuole che usasse gatti come scudi (sacri agli Egizi) o li dipingesse sugli scudi. In realtà fu una vittoria rapida facilitata dalla defezione dei mercenari greci e fenici. L'Egitto rimase persiano per 120 anni.",
    significato: "L'Egitto entra nell'orbita persiana per la prima volta. Prima di due occupazioni persiane (la seconda: -343).",
    fonte: "Erodoto III,10-15; Polieno VII,9"
  },

  // ── CONQUISTA MACEDONE ───────────────────────────────────────────

  {
    id: "isso",
    nome: "Battaglia di Isso",
    anno: -333,
    lat: 36.8, lng: 36.4,
    tipo: "battaglia",
    fazioni: [
      { nome: "Macedonia (Alessandro Magno)", ruolo: "vincitore" },
      { nome: "Persia (Dario III)", ruolo: "sconfitto" }
    ],
    esito: "Vittoria macedone decisiva; Dario III fugge; famiglia reale catturata",
    desc: "Alessandro con 35.000 uomini sconfisse l'esercito persiano di oltre 100.000. La Battaglia di Isso (oggi pittura al Museo di Napoli) mostra Alessandro in carica verso Dario in fuga. La famiglia di Dario fu catturata ma trattata con rispetto.",
    significato: "Apre il Levante, l'Egitto e la Mesopotamia alla conquista macedone. Il Mosaico di Isso è uno dei capolavori dell'arte antica.",
    fonte: "Arriano, Anabasi II; Plutarco, Vita di Alessandro"
  },

  {
    id: "gaugamela",
    nome: "Battaglia di Gaugamela",
    anno: -331,
    lat: 36.5, lng: 43.4,
    tipo: "battaglia",
    fazioni: [
      { nome: "Macedonia (Alessandro Magno)", ruolo: "vincitore" },
      { nome: "Persia (Dario III)", ruolo: "sconfitto" }
    ],
    esito: "Vittoria macedone definitiva; fine dell'impero achemenide",
    desc: "La battaglia finale tra Alessandro e Dario III. I Persiani avevano livellato il terreno per i carri falcati ma Alessandro ruppe la linea con la carica della cavalleria dei Compagni. Dario fuggì e fu poi assassinato dai suoi satrapi. Seguì la presa di Persepoli.",
    significato: "Fine dell'impero achemenide dopo 220 anni. Alessandro diventa 'Re dell'Asia'.",
    fonte: "Arriano, Anabasi III; Plutarco, Vita di Alessandro"
  }

];
