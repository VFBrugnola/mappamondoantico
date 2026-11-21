# 🗺️ Vicino Oriente antico

Dashboard di studio personale sul Vicino Oriente antico nell'Età del Bronzo e del Ferro (3500 – 300 a.C.): una mappa interattiva e una linea del tempo sinottica che si muovono insieme.

## Funzionalità

- **Mappa** delle città con filtro per civiltà, epoche, slider temporale, scoperte archeologiche, battaglie e rotte commerciali
- **Sovrani attivi** nell'anno scelto, raggruppati per stato
- **Linea del tempo sinottica**: in alto le epoche, sotto per ogni regione (Bassa e Alta Mesopotamia, Siria e Levante, Anatolia, Egitto) la sua periodizzazione seguita dai sovrani dei suoi stati, poi eventi e battaglie
  - il cursore arancione è l'anno della mappa: trascinalo o tocca un punto vuoto per cambiare anno
  - tocca una scheda per leggerne i dettagli e portare la mappa a quell'anno (e alla città, per gli eventi)
  - ⤢ a tutto schermo (Esc per tornare), + e − o Ctrl + rotellina per lo zoom, Shift + rotellina per scorrere nel tempo
  - bordo tratteggiato = date indicative (il libro dà solo il secolo, o nessuna data)

## Come usare

👉 **[vfbrugnola.github.io/vicino_oriente_antico](https://vfbrugnola.github.io/vicino_oriente_antico/)**

## Fonti

- G. Giusfredi, *Il Vicino Oriente antico* (Carocci): periodizzazione per regione (Tabella 1), sovrani di Ur III e della casata di Hammurapi (Tabelle 2 e 3)
- E.H. Cline, *1177 a.C.*: sovrani della tarda Età del Bronzo
- E.H. Cline, *La sopravvivenza delle civiltà*: sovrani dell'area settentrionale e meridionale, XIII – VIII sec. a.C.

I dati stanno in `data/` (`periods.js`, `regional_periods.js`, `rulers.js`, `events.js`, …): mappa e linea del tempo leggono gli stessi file.

## Tecnologie

- [Leaflet.js](https://leafletjs.com/) per la mappa
- `timeline.js` per la linea del tempo, senza dipendenze
- Immagini via [Wikimedia Commons](https://commons.wikimedia.org/)

## Licenza

© 2026 Vito Fabrizio Brugnola — [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
Libero utilizzo con citazione dell'autore.
