(function () {
  'use strict';

  var PHONE = '(317) 793-2172';
  var PHONE_HREF = 'tel:+13177932172';
  var EMAIL = 'whitedovecleaningco@gmail.com';
  var DOMAIN = 'https://www.whitedovecleaningservices.com';

  var DOVE_SVG = '<svg class="logo-icon logo-icon-white" width="30" height="30" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">' +
    '<path d="M6 20c-1-2-1-4 0-6l3-4c0-2 1-4 3-5 2 0 3 1 4 3 1-2 2-3 4-3 2 1 3 3 3 5l3 4c1 2 1 4 0 6l-4 4c-2 2-3 3-5 3h-2c-2 0-3-1-5-3l-4-4z"/>' +
    '<path d="M16 11l-5-6c3-1 5 0 5 2 0-2 2-3 5-2l-5 6z"/>' +
    '</svg>';

  var DOVE_SVG_FOOTER = DOVE_SVG.replace('width="30" height="30"', 'width="36" height="36"');

  var isHome = (location.pathname === '/' || location.pathname === '/index.html' || location.pathname.endsWith('/White%20Dove%20Cleaning/index.html') || location.pathname.endsWith('/White%20Dove%20Cleaning/'));

  function href(hash) {
    return isHome ? hash : '/' + hash;
  }

  function renderSkipLink() {
    var el = document.getElementById('site-skip-link');
    if (!el) return;
    el.outerHTML = '<a href="#main" class="skip-link">Skip to main content</a>';
  }

  function renderCookieBanner() {
    var el = document.getElementById('site-cookie-banner');
    if (!el) return;
    el.outerHTML =
      '<div id="cookieBanner" class="cookie-banner" role="dialog" aria-label="Cookie consent">' +
        '<p>We use cookies to analyze site traffic and improve your experience. By clicking &ldquo;Accept,&rdquo; you consent to our use of cookies. See our <a href="/privacy/">Privacy Policy</a> for details.</p>' +
        '<div class="cookie-actions">' +
          '<button id="cookieAccept" class="btn btn-primary btn-sm">Accept</button>' +
          '<button id="cookieDecline" class="btn btn-outline-dark btn-sm">Decline</button>' +
        '</div>' +
      '</div>';
  }

  function renderHeader() {
    var el = document.getElementById('site-header');
    if (!el) return;
    el.outerHTML =
      '<header class="header" id="header">' +
        '<div class="container header-inner">' +
          '<a href="/" class="logo" aria-label="White Dove Cleaning Services — Home">' +
            DOVE_SVG +
            '<span class="logo-text">White Dove</span>' +
          '</a>' +
          '<nav class="nav" id="nav" role="navigation" aria-label="Main navigation">' +
            '<a href="' + href('#services') + '">Services</a>' +
            '<a href="/service-areas/">Service Areas</a>' +
            '<a href="' + href('#about') + '">About</a>' +
            '<a href="' + href('#testimonials') + '">Reviews</a>' +
            '<a href="/blog/">Blog</a>' +
            '<a href="' + href('#contact') + '">Contact</a>' +
          '</nav>' +
          '<div class="header-right">' +
            '<a href="' + PHONE_HREF + '" class="phone-link">' +
              '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>' +
              PHONE +
            '</a>' +
            '<a href="' + href('#quote') + '" class="btn btn-primary btn-sm">Request Estimate</a>' +
          '</div>' +
          '<button class="menu-toggle" id="menuToggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav">' +
            '<span></span><span></span><span></span>' +
          '</button>' +
        '</div>' +
      '</header>';
  }

  function renderFooter() {
    var el = document.getElementById('site-footer');
    if (!el) return;
    el.outerHTML =
      '<footer class="footer">' +
        '<div class="container footer-inner">' +
          '<div class="footer-brand">' +
            '<div class="footer-logo-mark" aria-hidden="true">' +
              DOVE_SVG_FOOTER +
              '<span class="footer-logo-text">White Dove Cleaning Services</span>' +
            '</div>' +
            '<p>Professional residential and commercial cleaning services for the Indianapolis metro area.</p>' +
          '</div>' +
          '<div class="footer-links">' +
            '<a href="' + href('#services') + '">Services</a>' +
            '<a href="/service-areas/">Service Areas</a>' +
            '<a href="' + href('#about') + '">About</a>' +
            '<a href="' + href('#testimonials') + '">Reviews</a>' +
            '<a href="/blog/">Blog</a>' +
            '<a href="' + href('#quote') + '">Request Estimate</a>' +
            '<a href="' + href('#contact') + '">Contact</a>' +
            '<a href="/privacy/">Privacy Policy</a>' +
          '</div>' +
          '<div class="footer-bottom">' +
            '<p>&copy; ' + new Date().getFullYear() + ' White Dove Cleaning Services. All rights reserved.</p>' +
          '</div>' +
        '</div>' +
      '</footer>';
  }

  function initHeader() {
    var header = document.getElementById('header');
    var toggle = document.getElementById('menuToggle');
    var nav = document.getElementById('nav');
    if (!header || !toggle || !nav) return;

    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });

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
  }

  function initSmoothScroll() {
    var header = document.getElementById('header');
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          var offset = header ? header.offsetHeight + 10 : 80;
          var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }

  function initCookieConsent() {
    var banner = document.getElementById('cookieBanner');
    var acceptBtn = document.getElementById('cookieAccept');
    var declineBtn = document.getElementById('cookieDecline');
    if (!banner || !acceptBtn || !declineBtn) return;

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
  }

  function initAnimations() {
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var targets = document.querySelectorAll('.service-card, .why-item, .testimonial-card, .about-inner, .city-card, .blog-card');

    if (!prefersReducedMotion) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      targets.forEach(function (el) { observer.observe(el); });
    } else {
      targets.forEach(function (el) { el.classList.add('visible'); });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderSkipLink();
    renderCookieBanner();
    renderHeader();
    renderFooter();

    initHeader();
    initSmoothScroll();
    initCookieConsent();
    initAnimations();
  });
})();
