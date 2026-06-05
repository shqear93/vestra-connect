/* =========================================================================
   AURORA — interactions: nav, reveals, counters, ring, dims, chart
   Motion is enhancement. If rAF/transitions are unavailable (export,
   reduced-motion, throttled preview) the page finalizes to end-state.
   ========================================================================= */
(function () {
  function ready(fn) { if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }

  ready(function () {
    var docEl = document.documentElement;
    if (window.lucide) lucide.createIcons();

    /* nav scrolled state */
    var nav = document.querySelector('.nav');
    function onScroll() { if (nav) nav.classList.toggle('nav--scrolled', window.scrollY > 12); }
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

    function fmt(el, v) {
      var pre = el.getAttribute('data-pre') || '', suf = el.getAttribute('data-suf') || '', dec = el.getAttribute('data-dec');
      var s = dec ? v.toFixed(parseInt(dec)) : Math.round(v).toLocaleString();
      return pre + s + suf;
    }
    function countUp(el, to, dur) {
      var start = performance.now();
      function step(now) {
        var p = Math.min(1, (now - start) / dur), e = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(el, to * e);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    function setRing(circle, num, val, dur, animate) {
      var len = circle.getTotalLength();
      circle.style.strokeDasharray = len;
      if (!animate) { circle.style.transition = 'none'; circle.style.strokeDashoffset = len * (1 - val / 100); if (num) num.textContent = Math.round(val); return; }
      circle.style.strokeDashoffset = len;
      circle.getBoundingClientRect();
      circle.style.transition = 'stroke-dashoffset ' + dur + 'ms cubic-bezier(0.22,1,0.36,1)';
      circle.style.strokeDashoffset = len * (1 - val / 100);
      if (num) countUp(num, val, dur);
    }

    /* build the dark area chart */
    function buildChart(svg) {
      var data = JSON.parse(svg.getAttribute('data-points'));
      var w = 520, h = 200, pad = 8, max = Math.max.apply(null, data) * 1.12, n = data.length;
      var X = function (i) { return pad + (i / (n - 1)) * (w - pad * 2); };
      var Y = function (v) { return h - pad - (v / max) * (h - pad * 2 - 16); };
      var line = '';
      for (var i = 0; i < n; i++) line += (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(data[i]).toFixed(1) + ' ';
      var area = line + 'L' + X(n - 1).toFixed(1) + ' ' + (h - pad) + ' L' + X(0).toFixed(1) + ' ' + (h - pad) + ' Z';
      svg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
      svg.innerHTML =
        '<defs><linearGradient id="auroraStroke" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3F7BFF"/><stop offset="1" stop-color="#22D3EE"/></linearGradient>' +
        '<linearGradient id="auroraFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2F6BFF" stop-opacity="0.34"/><stop offset="1" stop-color="#22D3EE" stop-opacity="0"/></linearGradient></defs>' +
        '<path class="ch-area" d="' + area + '" fill="url(#auroraFill)" opacity="0"/>' +
        '<path class="ch-line" d="' + line + '" fill="none" stroke="url(#auroraStroke)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<circle class="ch-dot" cx="' + X(n - 1).toFixed(1) + '" cy="' + Y(data[n - 1]).toFixed(1) + '" r="4.5" fill="#fff" stroke="#22D3EE" stroke-width="2.5" opacity="0"/>';
      var lineEl = svg.querySelector('.ch-line'), areaEl = svg.querySelector('.ch-area'), dotEl = svg.querySelector('.ch-dot');
      var L = lineEl.getTotalLength();
      lineEl.style.strokeDasharray = L; lineEl.style.strokeDashoffset = L;
      svg._play = function () {
        lineEl.getBoundingClientRect();
        lineEl.style.transition = 'stroke-dashoffset 1500ms cubic-bezier(0.22,1,0.36,1)'; lineEl.style.strokeDashoffset = 0;
        areaEl.style.transition = 'opacity 900ms ease 500ms'; areaEl.style.opacity = 1;
        dotEl.style.transition = 'opacity 400ms ease 1400ms'; dotEl.style.opacity = 1;
      };
      svg._final = function () { lineEl.style.transition = 'none'; lineEl.style.strokeDashoffset = 0; areaEl.style.opacity = 1; dotEl.style.opacity = 1; };
    }
    document.querySelectorAll('[data-chart]').forEach(buildChart);

    /* ---- ANIMATED trigger (used when motion is live) ---- */
    function trigger(el) {
      if (el.__seen) return; el.__seen = true;
      el.classList.add('in');
      if (el.hasAttribute('data-count')) countUp(el, parseFloat(el.getAttribute('data-count')), 1600);
      el.querySelectorAll('[data-count]').forEach(function (c) { if (!c.__seen) { c.__seen = true; countUp(c, parseFloat(c.getAttribute('data-count')), 1600); } });
      el.querySelectorAll('[data-ring]').forEach(function (c) { setRing(c, c.parentElement.parentElement.querySelector('[data-ringnum]'), parseFloat(c.getAttribute('data-ring')), 1500, true); });
      el.querySelectorAll('[data-fill]').forEach(function (f) { f.style.width = f.getAttribute('data-fill') + '%'; });
      if (el.hasAttribute('data-chart')) el._play && el._play();
      el.querySelectorAll('[data-chart]').forEach(function (s) { s._play && s._play(); });
    }
    var watched = Array.prototype.slice.call(document.querySelectorAll('.reveal, [data-count], [data-ring], [data-fill], [data-chart]'));
    function checkReveals() {
      var vh = window.innerHeight || docEl.clientHeight;
      for (var i = watched.length - 1; i >= 0; i--) {
        var r = watched[i].getBoundingClientRect();
        if (r.top < vh * 0.9 && r.bottom > -40) { trigger(watched[i]); watched.splice(i, 1); }
      }
    }

    /* ---- STATIC finalize (used when motion is frozen/unavailable) ---- */
    function finalize() {
      document.body.classList.add('no-motion'); /* forces reveal end-state, transition:none */
      docEl.classList.remove('preanim');
      document.querySelectorAll('.reveal').forEach(function (e) { e.classList.add('in'); });
      document.querySelectorAll('[data-count]').forEach(function (c) { c.textContent = fmt(c, parseFloat(c.getAttribute('data-count'))); });
      document.querySelectorAll('[data-ring]').forEach(function (c) { setRing(c, c.parentElement.parentElement.querySelector('[data-ringnum]'), parseFloat(c.getAttribute('data-ring')), 0, false); });
      document.querySelectorAll('[data-fill]').forEach(function (f) { f.style.transition = 'none'; f.style.width = f.getAttribute('data-fill') + '%'; });
      document.querySelectorAll('[data-chart]').forEach(function (s) { s._final && s._final(); });
    }

    /* detect whether the frame loop actually runs; if not, finalize statically */
    var painted = false;
    requestAnimationFrame(function () { painted = true; });
    checkReveals();
    window.addEventListener('scroll', checkReveals, { passive: true });
    window.addEventListener('resize', checkReveals);
    setTimeout(function () {
      if (painted && !document.body.classList.contains('no-motion')) {
        checkReveals(); // live motion path
        setTimeout(checkReveals, 300);
      } else {
        finalize();     // frozen / reduced-motion path
      }
    }, 250);
  });
})();
