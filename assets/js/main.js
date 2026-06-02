// --- engagement-log typing effect (homepage only) ---
(function () {
  var term = document.getElementById('term');
  if (term) {
    var lines = [
      { t: '$ ', c: 'p',   x: 'recon --target acme-bank.example' },
      { t: '  ', c: 'dim', x: 'mapping attack surface ...' },
      { t: '  ', c: 'ok',  x: '[+] 14 hosts, 3 web apps, 2 APIs' },
      { t: '$ ', c: 'p',   x: 'authz --check session-handling' },
      { t: '  ', c: 'ok',  x: '[!] privilege escalation path found' },
      { t: '  ', c: 'dim', x: 'documenting impact + remediation ...' },
      { t: '$ ', c: 'p',   x: 'report --deliver --severity-ranked' },
      { t: '  ', c: 'ok',  x: '[done] findings handed to client team' }
    ];
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var i = 0;
    function row(L) {
      var el = document.createElement('span');
      el.className = 'l';
      el.innerHTML = '<span class="p">' + L.t + '</span><span class="' + L.c + '">' + L.x + '</span>';
      return el;
    }
    if (reduce) {
      lines.forEach(function (L) { var e = row(L); e.style.opacity = 1; term.appendChild(e); });
    } else {
      (function next() {
        if (i >= lines.length) {
          var cur = document.createElement('span'); cur.className = 'cursor'; term.appendChild(cur); return;
        }
        term.appendChild(row(lines[i])); i++; setTimeout(next, 520);
      })();
    }
  }
})();

// --- staggered reveal on scroll ---
(function () {
  var items = [].slice.call(document.querySelectorAll('.reveal'));
  if (!items.length || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el, idx) {
    el.style.transitionDelay = (Math.min(idx, 6) * 60) + 'ms';
    io.observe(el);
  });
})();

// --- mobile menu toggle ---
(function () {
  var btn = document.getElementById('menuBtn');
  var top = document.querySelector('header.top');
  if (btn && top) {
    btn.addEventListener('click', function () { top.classList.toggle('open'); });
    top.querySelectorAll('nav.links a').forEach(function (a) {
      a.addEventListener('click', function () { top.classList.remove('open'); });
    });
  }
})();
