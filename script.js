document.addEventListener('DOMContentLoaded', function () {

  // Sticky header
  var header = document.getElementById('header');
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile menu
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    nav.classList.toggle('open');
    toggle.classList.toggle('active');
  });

  // Close mobile menu on link click
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.classList.remove('active');
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

  // Form submission
  var form = document.getElementById('quoteForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var data = new FormData(form);
    var values = {};
    data.forEach(function (v, k) { values[k] = v; });

    // Replace this with your actual form endpoint (Formspree, Netlify Forms, etc.)
    var btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(function () {
      form.innerHTML = '<div class="form-success"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><h3>Thank You!</h3><p>We\'ve received your request and will get back to you within a few hours.</p></div>';
    }, 1000);
  });

  // Intersection Observer for animations
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
});
