# 🗺️ Vicino Oriente antico

Dashboard di studio personale sul Vicino Oriente antico nell'Età del Bronzo e del Ferro (3500 – 300 a.C.): una mappa interattiva e una linea del tempo sinottica che si muovono insieme.

## Funzionalità

- **Confini dei regni** che cambiano con l’anno scelto, su una cartina piatta (terre, fiumi e laghi da Natural Earth 1:10m, senza confini moderni)
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

- [Cliopatria](https://github.com/Seshat-Global-History-Databank/cliopatria) (Seshat Global History Databank), CC BY 4.0: confini dei regni. Modifiche: estratto 3500–300 a.C. per il Vicino Oriente, geometrie semplificate, nomi tradotti in italiano. I confini sono indicativi e hanno lacune (per esempio Urartu e Giuda dopo il 701 a.C.)
- [Natural Earth](https://www.naturalearthdata.com/) (pubblico dominio): terre, fiumi e laghi della cartina piatta (1:10m; mancano alcuni fiumi minori come Oronte, Khabur, Zab e Diyala)

I dati stanno in `data/` (`periods.js`, `regional_periods.js`, `borders.js`, `basemap.js`, `rulers.js`, `events.js`, …): mappa e linea del tempo leggono gli stessi file.

## Tecnologie

- [Leaflet.js](https://leafletjs.com/) per la mappa
- `timeline.js` per la linea del tempo, senza dipendenze
- Immagini via [Wikimedia Commons](https://commons.wikimedia.org/)

## Licenza

© Vito Fabrizio Brugnola — [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.it) (Attribuzione – Non commerciale). Testo completo nel file [LICENSE](LICENSE).

Puoi usare, condividere e modificare questi materiali **citando l'autore** e indicando le eventuali modifiche. **Non è consentito l'uso a scopo commerciale.** I materiali di terzi eventualmente inclusi (dati, immagini, librerie) restano soggetti alle rispettive licenze.
