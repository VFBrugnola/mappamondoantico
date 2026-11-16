// ============================================================
//  PERIODS — Vicino Oriente Antico
//  Fonte: Giusfredi, "Il Vicino Oriente antico" (Carocci)
//  min/max in anni (negativi = a.C.)
// ============================================================
var PERIODS = [
  {
    id: "bronzo_antico",
    label: "Antica Età del Bronzo",
    short: "Br. Antico",
    min: -3500, max: -2000, mid: -2750,
    desc: "Prime città-stato in Mesopotamia (periodo protodinastico), nascita della scrittura cuneiforme, Akkad e Ur III. In Egitto: Antico Regno e prime piramidi. In Siria: fioritura di Ebla e Marī."
  },
  {
    id: "bronzo_medio",
    label: "Media Età del Bronzo",
    short: "Br. Medio",
    min: -2000, max: -1550, mid: -1775,
    desc: "Età di Isin, Larsa e Hammurabi a Babilonia. In Alta Mesopotamia: commercio paleoassiro e Shamshi-Adad. In Anatolia: primi Ittiti. In Egitto: Medio Regno. A Marī: dinastia dei Lim."
  },
  {
    id: "bronzo_tardo",
    label: "Tarda Età del Bronzo",
    short: "Br. Tardo",
    min: -1550, max: -1200, mid: -1375,
    desc: "Sistema internazionale delle grandi potenze: Egitto (Nuovo Regno), Ittiti, Mitanni, Babilonia cassita, Ugarit. Reti di commercio e diplomazia su scala mediterranea. Collasso sistemico attorno al 1177 a.C."
  },
  {
    id: "eta_oscura",
    label: "Età Oscura / Prima Età del Ferro",
    short: "Età Oscura",
    min: -1200, max: -900, mid: -1050,
    desc: "Collasso del sistema del Bronzo Tardo. Scomparsa degli Ittiti, crisi dei Popoli del Mare, declino di Ugarit. Emergono i regni neoittiti e aramaici in Siria, e le monarchie di Israele e Giuda."
  },
  {
    id: "neoassiro",
    label: "Età Neoassira",
    short: "Neoassiro",
    min: -900, max: -612, mid: -750,
    desc: "L'Assiria diventa la prima superpotenza militare del mondo antico. Campagne di Assurnasirpal II, Salmanassar III, Tiglat-Pileser III, Sargon II, Sennacherib. Caduta di Ninive nel 612 a.C."
  },
  {
    id: "neobabilonese",
    label: "Età Neobabilonese",
    short: "Neobab.",
    min: -612, max: -539, mid: -575,
    desc: "Nabopolassar e Nabucodonosor II riportano Babilonia al centro del mondo. Deportazione degli Ebrei, costruzione dei Giardini pensili. Termina con la conquista persiana di Ciro (539 a.C.)."
  },
  {
    id: "persiano",
    label: "Età Persiana (Achemenidi)",
    short: "Persiano",
    min: -539, max: -330, mid: -435,
    desc: "Il primo impero universale: da Ciro il Grande a Dario e Serse. Il dominio achemenide si estende dall'Indo all'Egeo."
  },
  {
    id: "macedone",
    label: "Conquista Macedone",
    short: "Macedone",
    min: -330, max: -300, mid: -320,
    desc: "Alessandro Magno conquista l'intero Vicino Oriente tra il 334 e il 323 a.C. Fine degli Achemenidi, inizio dell'età ellenistica."
  }
];
