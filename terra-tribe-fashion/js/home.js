/* home.js — Terra Tribe Fashion */

(function () {
  'use strict';

  /* ── Hamburger Menu ─────────────────────────────────────────── */
  var hamburger = document.getElementById('hamburger');
  var mainNav   = document.getElementById('main-nav');

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Product Image Error Handler (featured on home page) ────── */
  window.handleProductImgError = function (img) {
    var wrap = img.parentElement;
    var card = img.closest ? img.closest('.product-card') : null;
    var name = card ? (card.querySelector('.product-name') || {}).textContent || 'Product' : 'Product';
    var placeholder = document.createElement('div');
    placeholder.className = 'img-placeholder';
    placeholder.textContent = name;
    if (wrap) wrap.replaceChild(placeholder, img);
  };

  /* ── Back to Top ────────────────────────────────────────────── */
  var backToTop = document.getElementById('back-to-top');

  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}());
