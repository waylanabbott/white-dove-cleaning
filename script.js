document.addEventListener('DOMContentLoaded', function () {

  // Sticky header
  var header = document.getElementById('header');
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile menu with aria-expanded
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = header.offsetHeight + 10;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // Form submission via Formsubmit.co
  var form = document.getElementById('quoteForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var consent = document.getElementById('consent');
    if (!consent.checked) {
      consent.focus();
      return;
    }

    var btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    var data = new FormData(form);
    data.delete('consent');

    fetch('https://formsubmit.co/ajax/whitedovecleaningco@gmail.com', {
      method: 'POST',
      body: data
    })
    .then(function (response) { return response.json(); })
    .then(function () {
      form.innerHTML = '<div class="form-success"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><h3>Thank You!</h3><p>We\'ve received your request and will get back to you within a few hours.</p></div>';
    })
    .catch(function () {
      btn.textContent = 'Send Request';
      btn.disabled = false;
      alert('Something went wrong. Please call us at (317) 793-2172 or try again.');
    });
  });

  // Intersection Observer for animations
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .why-item, .testimonial-card, .about-inner').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.service-card, .why-item, .testimonial-card, .about-inner').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // Cookie consent banner
  var banner = document.getElementById('cookieBanner');
  var acceptBtn = document.getElementById('cookieAccept');
  var declineBtn = document.getElementById('cookieDecline');

  if (localStorage.getItem('cookie-consent')) {
    banner.classList.add('hidden');
  }

  acceptBtn.addEventListener('click', function () {
    localStorage.setItem('cookie-consent', 'accepted');
    banner.classList.add('hidden');
    if (typeof loadGTM === 'function') { loadGTM(); }
  });

  declineBtn.addEventListener('click', function () {
    localStorage.setItem('cookie-consent', 'declined');
    banner.classList.add('hidden');
  });
});
