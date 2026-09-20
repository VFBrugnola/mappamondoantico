// ============================================================
//  CIVILIZATIONS
//  Ogni civiltà ha: label, color, regione, desc
// ============================================================
var CIVS = {
  greca: {
    label: "Greca",
    color: "#4a9fd4",
    regione: "Mediterraneo orientale e occidentale",
    desc: "Insieme di poleis indipendenti accomunate da lingua, religione e cultura. Culla della filosofia, della democrazia e del teatro."
  },
  romana: {
    label: "Romana",
    color: "#c0392b",
    regione: "Mediterraneo, Europa, Vicino Oriente",
    desc: "Dalla piccola città sul Tevere a un impero che abbracciò tre continenti. Sintesi e trasmissione della civiltà antica al mondo medievale."
  },
  ellenistica: {
    label: "Ellenistica",
    color: "#2980b9",
    regione: "Mediterraneo orientale, Vicino Oriente, Asia centrale",
    desc: "Fase della civiltà greca successiva ad Alessandro Magno: fusione tra cultura greca e orientale, grande fioritura scientifica e artistica."
  },
  egizia: {
    label: "Egizia",
    color: "#f1c40f",
    regione: "Valle del Nilo",
    desc: "Una delle civiltà più longeve della storia: oltre tremila anni di continuità culturale, artistica e religiosa lungo il Nilo."
  },
  fenico: {
    label: "Fenicia",
    color: "#e67e22",
    regione: "Levante, Mediterraneo",
    desc: "Popolo di navigatori e commercianti del Levante, inventori dell'alfabeto consonantico. Fondatori di colonie da Cartagine a Cadice."
  },
  cartaginese: {
    label: "Cartaginese",
    color: "#d35400",
    regione: "Nord Africa, Mediterraneo occidentale",
    desc: "Potenza commerciale e militare erede della tradizione fenicia. Per secoli rivale di Roma per il dominio del Mediterraneo."
  },
  mesopotamica: {
    label: "Sumero-Babilonese",
    color: "#8e44ad",
    regione: "Mesopotamia meridionale",
    desc: "Culla della scrittura cuneiforme, delle prime città e dei primi codici di legge. Sumer, Akkad e Babilonia si succedono in questa regione per millenni."
  },
  assira: {
    label: "Assira",
    color: "#c07030",
    regione: "Mesopotamia settentrionale",
    desc: "L'impero militarmente più potente del Vicino Oriente antico. Le sue campagne di conquista e deportazione segnarono secoli di storia mesopotamica."
  },
  persiana: {
    label: "Persiana/Achemenide",
    color: "#27ae60",
    regione: "Iran, Vicino Oriente, Asia centrale",
    desc: "Il primo grande impero universale: da Ciro il Grande a Dario e Serse, il dominio achemenide si estese dall'Indo all'Egeo."
  },
  ittita: {
    label: "Ittita",
    color: "#a0522d",
    regione: "Anatolia",
    desc: "Grande potenza dell'Età del Bronzo anatolica. Pionieri nella lavorazione del ferro e artefici del primo trattato di pace documentato (Qadesh, 1259 a.C.)."
  },
  micenea: {
    label: "Micenea",
    color: "#9b59b6",
    regione: "Grecia continentale e Egeo",
    desc: "Prima civiltà palatina del mondo greco. Usa la scrittura lineare B e domina il Mediterraneo orientale nel Bronzo Tardo, prima del collasso del 1200 a.C."
  },
  minoica: {
    label: "Minoica",
    color: "#1abc9c",
    regione: "Creta e isole dell'Egeo",
    desc: "La più antica civiltà palatina europea. Domina il commercio egeo nel III e II millennio a.C. con grandi palazzi, affreschi e una scrittura ancora non decifrata."
  },
  cananea: {
    label: "Cananea/Ugaritica",
    color: "#c8a000",
    regione: "Levante meridionale e Siria costiera",
    desc: "Insieme di città-stato nel Levante. Ugarit inventa il primo alfabeto. Ebla è un grande centro commerciale. Megiddo e Hazor dominano le rotte del Vicino Oriente."
  },
  etrusca: {
    label: "Etrusca",
    color: "#16a085",
    regione: "Italia centrale",
    desc: "Civiltà pre-romana dell'Italia centrale. Maestri nell'arte della tomba dipinta, nella metallurgia e nella divinazione. Trasmisero molto della loro cultura a Roma."
  },
  iberica: {
    label: "Iberica/Celtiberica",
    color: "#7f8c8d",
    regione: "Penisola iberica",
    desc: "Popolazioni pre-romane della penisola iberica: Iberi sulla costa orientale e meridionale, Celtiberi nell'interno. Resistenza tenace all'espansione romana."
  }
};
