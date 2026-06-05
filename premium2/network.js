/* =========================================================================
   AURORA — Living connection network (hero canvas)
   Generative, idea-driven: drifting "project" nodes form connections; warm
   "introduction" pulses travel along the links toward brighter hub nodes.
   No hand-drawn art — pure generative motion. Honors reduced-motion.
   ========================================================================= */
(function () {
  function initNetwork(canvas) {
    if (!canvas) return;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      || document.body.classList.contains('no-motion');
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0;
    var nodes = [], hubs = [], pulses = [];
    var mouse = { x: -9999, y: -9999, on: false };
    var LINK = 168;           // link distance
    var C = { blue: '47,107,255', cyan: '34,207,236', violet: '124,92,252' };

    function size() {
      var r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }

    function build() {
      // density scales with area, capped for perf
      var count = Math.max(26, Math.min(60, Math.round((W * H) / 17000)));
      nodes = [];
      for (var i = 0; i < count; i++) {
        var hub = Math.random() < 0.16;
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          r: hub ? 3.4 + Math.random() * 1.6 : 1.3 + Math.random() * 1.4,
          hub: hub,
          tone: hub ? (Math.random() < 0.5 ? C.cyan : C.violet) : C.blue,
          ph: Math.random() * Math.PI * 2
        });
      }
      hubs = nodes.filter(function (n) { return n.hub; });
    }

    function spawnPulse() {
      // connect a random node to its nearest hub, send a traveling dot
      if (!hubs.length) return;
      var a = nodes[(Math.random() * nodes.length) | 0];
      var best = null, bd = 1e9;
      for (var i = 0; i < hubs.length; i++) {
        var h = hubs[i]; if (h === a) continue;
        var d = (h.x - a.x) * (h.x - a.x) + (h.y - a.y) * (h.y - a.y);
        if (d < bd) { bd = d; best = h; }
      }
      if (best && bd < 360 * 360) {
        pulses.push({ a: a, b: best, t: 0, sp: 0.006 + Math.random() * 0.006 });
      }
    }

    var pulseTimer = 0;

    function frame() {
      ctx.clearRect(0, 0, W, H);
      var t = performance.now() * 0.001;

      // move + draw links
      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        n.x += n.vx; n.y += n.vy;
        if (n.x < -20) n.x = W + 20; if (n.x > W + 20) n.x = -20;
        if (n.y < -20) n.y = H + 20; if (n.y > H + 20) n.y = -20;
        // gentle cursor parallax
        if (mouse.on) {
          var mdx = n.x - mouse.x, mdy = n.y - mouse.y;
          var md = Math.sqrt(mdx * mdx + mdy * mdy);
          if (md < 130 && md > 0.1) { var f = (130 - md) / 130 * 0.5; n.x += (mdx / md) * f; n.y += (mdy / md) * f; }
        }
      }

      for (var a = 0; a < nodes.length; a++) {
        for (var b = a + 1; b < nodes.length; b++) {
          var p = nodes[a], q = nodes[b];
          var dx = p.x - q.x, dy = p.y - q.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK) {
            var al = (1 - dist / LINK) * 0.5;
            ctx.strokeStyle = 'rgba(47,107,255,' + al.toFixed(3) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
      }

      // nodes
      for (var k = 0; k < nodes.length; k++) {
        var nd = nodes[k];
        var pulse = nd.hub ? (0.6 + 0.4 * Math.sin(t * 1.4 + nd.ph)) : 1;
        if (nd.hub) {
          var g = ctx.createRadialGradient(nd.x, nd.y, 0, nd.x, nd.y, nd.r * 6);
          g.addColorStop(0, 'rgba(' + nd.tone + ',' + (0.22 * pulse).toFixed(3) + ')');
          g.addColorStop(1, 'rgba(' + nd.tone + ',0)');
          ctx.fillStyle = g;
          ctx.beginPath(); ctx.arc(nd.x, nd.y, nd.r * 6, 0, 6.2832); ctx.fill();
        }
        ctx.fillStyle = 'rgba(' + nd.tone + ',' + (nd.hub ? 0.95 : 0.55) + ')';
        ctx.beginPath(); ctx.arc(nd.x, nd.y, nd.r, 0, 6.2832); ctx.fill();
      }

      // traveling intro pulses
      if (!reduce) {
        pulseTimer++;
        if (pulseTimer > 48 && pulses.length < 5) { spawnPulse(); pulseTimer = 0; }
      }
      for (var pi = pulses.length - 1; pi >= 0; pi--) {
        var pu = pulses[pi];
        pu.t += pu.sp;
        if (pu.t >= 1) { pulses.splice(pi, 1); continue; }
        var ease = pu.t;
        var px = pu.a.x + (pu.b.x - pu.a.x) * ease;
        var py = pu.a.y + (pu.b.y - pu.a.y) * ease;
        // faint trail line
        ctx.strokeStyle = 'rgba(34,207,236,' + (0.28 * (1 - Math.abs(pu.t - 0.5) * 2)).toFixed(3) + ')';
        ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(pu.a.x, pu.a.y); ctx.lineTo(pu.b.x, pu.b.y); ctx.stroke();
        var gg = ctx.createRadialGradient(px, py, 0, px, py, 9);
        gg.addColorStop(0, 'rgba(34,207,236,0.9)');
        gg.addColorStop(1, 'rgba(34,207,236,0)');
        ctx.fillStyle = gg;
        ctx.beginPath(); ctx.arc(px, py, 9, 0, 6.2832); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.95)';
        ctx.beginPath(); ctx.arc(px, py, 2.2, 0, 6.2832); ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    }

    var raf;
    size();
    if (reduce) {
      // single static frame
      frame(); cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(frame);
    }

    window.addEventListener('resize', function () { cancelAnimationFrame(raf); size(); if (!reduce) raf = requestAnimationFrame(frame); });
    var host = canvas.parentElement;
    host.addEventListener('mousemove', function (e) { var r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; mouse.on = true; });
    host.addEventListener('mouseleave', function () { mouse.on = false; mouse.x = mouse.y = -9999; });
  }

  window.initNetwork = initNetwork;
  document.addEventListener('DOMContentLoaded', function () {
    initNetwork(document.getElementById('heroNet'));
  });
})();
