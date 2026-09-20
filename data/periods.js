// ============================================================
//  PERIODS
//  Ogni periodo ha: id, label, short, min, max, mid
//  min/max/mid in anni (negativi = a.C.)
// ============================================================
var PERIODS = [
  { id: "neolitico",    label: "Neolitico / Calcolitico",  short: "Neolitico",   min: -9000, max: -3500, mid: -6000 },
  { id: "bronzo_antico",label: "Bronzo Antico",            short: "Br. Antico",  min: -3500, max: -2000, mid: -2750 },
  { id: "bronzo_medio", label: "Bronzo Medio",             short: "Br. Medio",   min: -2000, max: -1550, mid: -1775 },
  { id: "bronzo_tardo", label: "Bronzo Tardo",             short: "Br. Tardo",   min: -1550, max: -1200, mid: -1375 },
  { id: "ferro_i",      label: "Prima Età del Ferro",      short: "Ferro I",     min: -1200, max: -800,  mid: -1000 },
  { id: "arcaica",      label: "Età Arcaica",              short: "Arcaica",     min: -800,  max: -500,  mid: -650  },
  { id: "classica",     label: "Età Classica",             short: "Classica",    min: -500,  max: -323,  mid: -415  },
  { id: "ellenistica",  label: "Età Ellenistica",          short: "Ellenistica", min: -323,  max: -31,   mid: -175  },
  { id: "imperiale",    label: "Età Imperiale",            short: "Imperiale",   min: -31,   max: 476,   mid: 200   }
];
