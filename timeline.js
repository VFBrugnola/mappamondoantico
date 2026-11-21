// ============================================================
//  TIMELINE — Linea del tempo sinottica, sincronizzata con la mappa
//  Righe: per ogni regione la sua periodizzazione (REGIONAL_PERIODS),
//  seguita dai sovrani dei suoi stati (RULERS); in alto le epoche (PERIODS).
//  Il cursore arancione è l'anno della mappa: muoverlo sposta lo slider.
// ============================================================
var Timeline = (function () {
  var CARD = 132, LANE = 34, ERA_H = 18, AXIS_H = 22, LABEL_H = 14;
  var HEAD = ERA_H + 6 + AXIS_H;

  // Ordine delle righe: regione → stati che le appartengono
  var LAYOUT = [
    { region: "Bassa Mesopotamia", stati: ["ur", "babilonia", "elam"] },
    { region: "Alta Mesopotamia", stati: ["assiria", "mitanni", "urartu"] },
    { region: "Siria e Levante", stati: ["ugarit", "amurru", "karkemish", "patina", "samal", "damasco",
                                         "tiro", "biblo", "israele_unito", "israele", "giuda", "moab", "edom"] },
    { region: "Anatolia", stati: ["ittiti", "anatolia_occ"] },
    { region: "Egitto", stati: ["hyksos", "egitto"] },
    { region: null, label: "Persia", stati: ["persiana"] },
    { label: "Eventi", events: true }
  ];
  var ERA_COLORS = ["#7a4f24", "#4f6b3c", "#3f5f80", "#7a3f5c", "#8a6a20", "#5a4a8a", "#2f6f6a", "#8a4a2a"];

  var root, nav, track, labelsEl, info, opts;
  var rows = [], eras = [], lo = -3500, hi = -300;
  var ppy = 0, fitP = 0, off = 10, W = 0, trackW = 0, curY = null, full = false;
  var X = function (t) { return (t - lo) * ppy; };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var fy = function (y) { return y < 0 ? Math.abs(y) + " a.C." : y + " d.C."; };

  function buildRows(stInfo) {
    var used = {};
    var out = [];
    function rulerRow(st) {
      used[st] = true;
      var inf = stInfo[st] || { label: st, colore: "#888" };
      var items = RULERS.filter(function (r) { return r.stato === st; }).map(function (r) {
        return { t: r.inizio, t2: r.fine > r.inizio ? r.fine : null, title: r.nome,
                 sub: r.fine > r.inizio ? fy(r.inizio) + " – " + fy(r.fine) : fy(r.inizio),
                 note: r.note || "", ind: !!r.ind, color: inf.colore, kind: "sovrano", group: inf.label };
      });
      if (items.length) out.push({ label: inf.label + " · sovrani", items: items, kind: "stato" });
    }
    LAYOUT.forEach(function (L) {
      if (L.events) {
        var ev = EVENTS.map(function (e) {
          return { t: e.anno, t2: null, title: e.titolo, sub: fy(e.anno), note: e.desc, color: "#d4a843",
                   kind: "evento", city: e.city, group: "Eventi" };
        }).concat((typeof BATTLES !== "undefined" ? BATTLES : []).filter(function (b) {
          // le battaglie già presenti tra gli eventi (stesso anno, ±2) non si ripetono
          return !EVENTS.some(function (e) { return Math.abs(e.anno - b.anno) <= 2; });
        }).map(function (b) {
          return { t: b.anno, t2: null, title: b.nome, sub: fy(b.anno), note: b.esito || b.desc, color: "#e74c3c",
                   kind: "battaglia", lat: b.lat, lng: b.lng, group: "Battaglie" };
        }));
        out.push({ label: "Eventi e battaglie", items: ev, kind: "eventi" });
        return;
      }
      if (L.region) {
        var it = REGIONAL_PERIODS.filter(function (p) { return p.regione === L.region; }).map(function (p) {
          return { t: p.inizio, t2: p.fine, title: p.nome, sub: p.etichetta, note: p.nota || (p.ind ? "Date indicative: la tabella non le riporta." : ""),
                   ind: !!p.ind, color: "#d4a843", kind: "periodo", group: L.region };
        });
        out.push({ label: L.region, items: it, kind: "regione" });
      }
      L.stati.forEach(rulerRow);
    });
    // stati presenti nei dati ma non previsti nel layout
    RULERS.forEach(function (r) { if (!used[r.stato]) rulerRow(r.stato); });
    out.forEach(function (row) { row.items.sort(function (a, b) { return a.t - b.t; }); });
    return out;
  }

  function fit() {
    W = nav.clientWidth || 800;
    fitP = (W - CARD - 30) / (hi - lo);
    if (fitP <= 0) fitP = 0.1;
    if (!ppy) ppy = fitP;
    ppy = Math.max(ppy, fitP);
  }
  function tickStep() {
    var s = [10, 20, 25, 50, 100, 200, 250, 500, 1000];
    for (var i = 0; i < s.length; i++) if (s[i] * ppy >= 64) return s[i];
    return 1000;
  }

  function layout() {
    var y = HEAD + 6, html = "", lab = "";
    rows.forEach(function (row) {
      var top = y; y += LABEL_H;
      var lanes = [];
      row.items.forEach(function (x) {
        var x0 = X(x.t), x1 = Math.max(x0 + CARD + 6, x.t2 !== null ? X(x.t2) : 0);
        var li = -1;
        for (var k = 0; k < lanes.length; k++) if (lanes[k] <= x0) { li = k; break; }
        if (li < 0) { li = lanes.length; lanes.push(0); }
        lanes[li] = x1;
        var w = x.t2 !== null ? Math.max(3, X(x.t2) - x0) : 0;
        x._id = x._id || ("i" + Math.random().toString(36).slice(2, 9));
        html += "<div class='tl-ev" + (x.ind ? " ind" : "") + "' data-id='" + x._id + "' style='left:" + x0.toFixed(1) + "px;top:" + (y + li * LANE) + "px'>" +
          "<div class='tl-card' style='border-left-color:" + x.color + "'><b>" + esc(x.title) + "</b><span>" + esc(x.sub) + "</span></div>" +
          (w ? "<div class='tl-range' style='width:" + w.toFixed(1) + "px;background:" + x.color + "'></div>" : "") + "</div>";
      });
      y += Math.max(1, lanes.length) * LANE + 4;
      lab += "<div class='tl-gband tl-g-" + row.kind + "' style='top:" + top + "px'><span>" + esc(row.label) + "</span></div>";
    });
    var h = y + 6;
    var head = "", grid = "";
    eras.forEach(function (e, i) {
      head += "<div class='tl-era' title='" + esc(e.label) + "' style='left:" + X(e.min).toFixed(1) + "px;width:" + Math.max(4, X(e.max) - X(e.min)).toFixed(1) +
        "px;background:" + ERA_COLORS[i % ERA_COLORS.length] + "'>" + esc(e.label) + "</div>";
    });
    var st = tickStep();
    for (var a = Math.ceil(lo / st) * st; a <= hi; a += st) {
      head += "<div class='tl-tick' style='left:" + X(a).toFixed(1) + "px;top:" + (ERA_H + 6) + "px'>" + fy(a) + "</div>";
      grid += "<div class='tl-gridl' style='left:" + X(a).toFixed(1) + "px;top:" + HEAD + "px'></div>";
    }
    trackW = X(hi) + CARD;
    track.style.width = trackW + "px";
    track.style.height = Math.max(h, nav.clientHeight) + "px";
    track.innerHTML = grid + html + "<div class='tl-head' style='height:" + HEAD + "px'>" + head + "</div>" +
      (curY !== null ? "<div class='tl-cur' style='left:" + X(curY).toFixed(1) + "px'><div class='tl-cur-h'>" + fy(curY) + "</div></div>" : "");
    labelsEl.innerHTML = lab;
    syncHead();
    apply();
  }
  function syncHead() {
    var s = nav.scrollTop, hd = track.querySelector(".tl-head"), ch = track.querySelector(".tl-cur-h");
    if (hd) hd.style.transform = "translateY(" + s + "px)";
    if (ch) ch.style.top = (s + ERA_H + 5) + "px";
  }
  function clamp() { var minOff = Math.min(10, W - trackW - 10); off = Math.max(minOff, Math.min(10, off)); }
  function apply(anim) {
    clamp();
    track.classList.toggle("anim", !!anim);
    track.style.transform = "translateX(" + off.toFixed(1) + "px)";
    labelsEl.style.transform = "";
  }
  function zoom(f, cx) {
    if (cx == null) cx = W / 2;
    var tAt = (cx - off) / ppy + lo;
    ppy = Math.min(Math.max(ppy * f, fitP), 60);
    off = cx - (tAt - lo) * ppy;
    layout();
  }
  function findItem(id) {
    for (var i = 0; i < rows.length; i++) for (var j = 0; j < rows[i].items.length; j++) if (rows[i].items[j]._id === id) return rows[i].items[j];
    return null;
  }
  function yearAt(clientX) {
    var r = nav.getBoundingClientRect();
    return Math.round(Math.max(lo, Math.min(hi, (clientX - r.left - off) / ppy + lo)));
  }
  function showInfo(x) {
    info.innerHTML = "<div class='tl-info-h'><b style='color:" + x.color + "'>" + esc(x.title) + "</b><button aria-label='Chiudi'>&times;</button></div>" +
      "<div class='tl-info-sub'>" + esc(x.group) + " · " + esc(x.sub) + (x.ind ? " · <i>date indicative</i>" : "") + "</div>" +
      (x.note ? "<div class='tl-info-note'>" + esc(x.note) + "</div>" : "");
    info.hidden = false;
    info.querySelector("button").onclick = function () { info.hidden = true; };
  }

  /* ---------- API pubblica ---------- */
  function init(o) {
    opts = o;
    root = document.getElementById(o.el);
    root.innerHTML = "<div class='tl-tools'>" +
      "<button data-full title='Linea del tempo a tutto schermo (Esc per tornare)'>&#10530;</button>" +
      "<button data-zi title='Ingrandisci'>+</button><button data-zo title='Riduci'>&minus;</button>" +
      "<button data-close title='Chiudi la linea del tempo'>&times;</button></div>" +
      "<div class='tl-nav'><div class='tl-labels'></div><div class='tl-track'></div></div><div class='tl-info' hidden></div>";
    nav = root.querySelector(".tl-nav"); track = root.querySelector(".tl-track");
    labelsEl = root.querySelector(".tl-labels"); info = root.querySelector(".tl-info");
    eras = PERIODS.slice();
    rows = buildRows(o.statoInfo);
    // stesso intervallo dello slider della mappa (gli eventi più antichi, es. Gerico, restano fuori)
    lo = -3530; hi = -280;
    rows.forEach(function (r) { r.items = r.items.filter(function (x) { return x.t >= lo; }); });

    root.querySelector("[data-zi]").onclick = function () { zoom(1.6); };
    root.querySelector("[data-zo]").onclick = function () { zoom(1 / 1.6); };
    root.querySelector("[data-full]").onclick = function () { setFull(!full); };
    root.querySelector("[data-close]").onclick = function () { if (opts.onClose) opts.onClose(); };
    nav.addEventListener("scroll", syncHead);

    var drag = null, moved = false, curDrag = false;
    nav.addEventListener("pointerdown", function (e) {
      if (e.target.closest(".tl-cur-h")) { curDrag = true; moved = true; e.preventDefault(); return; }
      drag = { x: e.clientX, off: off }; moved = false; nav.classList.add("drag");
    });
    window.addEventListener("pointermove", function (e) {
      if (curDrag) { opts.onYear(yearAt(e.clientX)); return; }
      if (!drag) return;
      var dx = e.clientX - drag.x; if (Math.abs(dx) > 4) moved = true;
      off = drag.off + dx; apply();
    });
    window.addEventListener("pointerup", function () { curDrag = false; drag = null; nav.classList.remove("drag"); });
    nav.addEventListener("click", function (e) {
      if (moved) { moved = false; return; }
      var ev = e.target.closest(".tl-ev");
      if (ev) {
        var x = findItem(ev.dataset.id); if (!x) return;
        showInfo(x);
        if (opts.onPick) opts.onPick(x);
        return;
      }
      opts.onYear(yearAt(e.clientX));
    });
    nav.addEventListener("wheel", function (e) {
      if (e.ctrlKey || e.metaKey) { e.preventDefault(); var r = nav.getBoundingClientRect(); zoom(e.deltaY < 0 ? 1.25 : 0.8, e.clientX - r.left); return; }
      var horiz = e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (!horiz && nav.scrollHeight > nav.clientHeight + 1) return;
      e.preventDefault(); off -= (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY); apply();
    }, { passive: false });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && full) setFull(false); });
    var rt; window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(function () { if (!root.hidden) { fit(); layout(); } }, 120); });
  }
  function show() { root.hidden = false; ppy = 0; fit(); layout(); if (curY !== null) center(curY); }
  function hide() { root.hidden = true; if (full) setFull(false); }
  function setFull(on) {
    full = on; document.body.classList.toggle("tl-full", on);
    root.querySelector("[data-full]").classList.toggle("on", on);
    if (opts.onFull) opts.onFull(on);
    ppy = 0; fit(); layout(); if (curY !== null) center(curY);
  }
  function center(y) { off = W / 2 - X(y); apply(true); }
  function setYear(y) {
    curY = y;
    if (!root || root.hidden) return;
    var c = track.querySelector(".tl-cur");
    if (!c) { layout(); return; }
    c.style.left = X(y).toFixed(1) + "px";
    c.firstChild.textContent = fy(y);
    var px = X(y) + off;
    if (px < 40 || px > W - 40) center(y);
  }
  function zoomTo(a, b) {
    if (!root || root.hidden) return;
    ppy = Math.max(fitP, (W - 60) / (b - a)); layout(); off = 30 - X(a); apply(true);
  }
  return { init: init, show: show, hide: hide, setYear: setYear, zoomTo: zoomTo, isOpen: function () { return !root.hidden; } };
})();
