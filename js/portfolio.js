// ── CURSOR ──
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

if (dot && ring) {
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
  });

  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .work-item, .service-card, .polaroid, .interest-tag').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

// ── NAV + PROGRESS ──
const navbar = document.getElementById('navbar');
const progressBar = document.getElementById('progressBar');

// ── HAMBURGER ──
const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('mobileDrawer');

if (hamburger && drawer) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    drawer.classList.toggle('open');
  });

  document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      drawer.classList.remove('open');
    });
  });
}

// ── SCROLL REVEAL (IntersectionObserver) ──
const reveals = document.querySelectorAll('.reveal');
if (reveals.length > 0) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => revealObserver.observe(el));
}

const heroEl = document.getElementById('hero');

// ── PARALLAX HEADINGS ──
const parallaxHeadings = document.querySelectorAll('.parallax-heading');

function getParallaxOffset(el) {
  const rect = el.getBoundingClientRect();
  const center = rect.top + rect.height / 2;
  const vCenter = window.innerHeight / 2;
  return (center - vCenter) * 0.04;
}

// ── ACTIVE NAV BY URL ──
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .drawer-link').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPath || (currentPath === 'index.html' && href === 'index.html') || (currentPath === '' && href === 'index.html')) {
    a.classList.add('active');
  } else {
    a.classList.remove('active');
  }
});

// ── UNIFIED RAF LOOP ──
let ticking = false;

function onFrame() {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  // Nav scroll styling
  if (navbar) {
    if (scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }

  // Progress bar
  if (progressBar) {
    const pct = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
    progressBar.style.width = pct + '%';
  }

  // Hero scroll fade
  if (heroEl) {
    const heroH = heroEl.offsetHeight;
    const fadeStart = heroH * 0.15;
    const fadeEnd   = heroH * 0.75;
    let fadeVal = 0;
    if (scrollY > fadeStart) {
      fadeVal = Math.min(1, (scrollY - fadeStart) / (fadeEnd - fadeStart));
      fadeVal = fadeVal < 0.5
        ? 2 * fadeVal * fadeVal
        : 1 - Math.pow(-2 * fadeVal + 2, 2) / 2;
    }
    heroEl.style.setProperty('--hero-fade', fadeVal.toFixed(4));
  }

  // Parallax headings
  parallaxHeadings.forEach(el => {
    const offset = getParallaxOffset(el);
    el.style.transform = `translateY(${offset.toFixed(2)}px)`;
  });

  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(onFrame);
    ticking = true;
  }
}, { passive: true });

// Run once on load
onFrame();

// ── FORM ──
const submitBtn = document.getElementById('submitBtn');
if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    const nameEl    = document.getElementById('contactName');
    const emailEl   = document.getElementById('contactEmail');
    const messageEl = document.getElementById('contactMessage');
    const msg       = document.getElementById('formMsg');

    const name    = nameEl    ? nameEl.value.trim()    : '';
    const email   = emailEl   ? emailEl.value.trim()   : '';
    const message = messageEl ? messageEl.value.trim() : '';

    if (!name || !email || !message) {
      if (msg) {
        msg.textContent = '— Please fill in all fields before sending.';
        msg.style.color = '#e05555';
        msg.style.opacity = '1';
        setTimeout(() => { msg.style.opacity = '0'; }, 3500);
      }
      return;
    }

    // Configure your Google Sheets Web App URL here
    const scriptURL = 'YOUR_GOOGLE_SHEET_WEB_APP_URL';

    if (!scriptURL || scriptURL === 'YOUR_GOOGLE_SHEET_WEB_APP_URL') {
      if (msg) {
        msg.textContent = '— Please set your Google Sheets Script URL in portfolio.js.';
        msg.style.color = '#e05555';
        msg.style.opacity = '1';
        setTimeout(() => { msg.style.opacity = '0'; }, 6000);
      }
      return;
    }

    // Show sending state
    if (msg) {
      msg.textContent = '— Sending message...';
      msg.style.color = 'var(--accent)';
      msg.style.opacity = '1';
    }
    submitBtn.disabled = true;

    // Use FormData to send to Google Sheets
    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Email', email);
    formData.append('Message', message);

    fetch(scriptURL, {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Google Sheets submission failed');
    })
    .then(data => {
      if (msg) {
        msg.textContent = '— Message sent successfully! Saved to Sheets.';
        msg.style.color = 'var(--accent)';
        msg.style.opacity = '1';
      }
      if (nameEl) nameEl.value    = '';
      if (emailEl) emailEl.value   = '';
      if (messageEl) messageEl.value = '';
    })
    .catch(error => {
      console.error('Error:', error);
      if (msg) {
        msg.textContent = '— Failed to send. Please check your script configuration.';
        msg.style.color = '#e05555';
        msg.style.opacity = '1';
      }
    })
    .finally(() => {
      submitBtn.disabled = false;
      if (msg) {
        setTimeout(() => { msg.style.opacity = '0'; }, 4000);
      }
    });
  });
}

// ── HERO PARTICLES ──
(function() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let w, h;

  function resize() {
    w = canvas.width  = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * (w || 1400),
      y: Math.random() * (h || 900),
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      o: Math.random() * 0.5 + 0.1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(79,195,247,${p.o})`;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

// ── MOUSE GLOW ──
(function() {
  const glow = document.getElementById('heroGlow');
  const hero = document.getElementById('hero');
  if (!glow || !hero) return;
  hero.addEventListener('mousemove', e => {
    const r = hero.getBoundingClientRect();
    glow.style.left = (e.clientX - r.left) + 'px';
    glow.style.top  = (e.clientY - r.top) + 'px';
  });
})();