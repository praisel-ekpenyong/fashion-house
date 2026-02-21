/* products.js — Terra Tribe Fashion */

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

  /* ── Image Error Handler ────────────────────────────────────── */
  window.handleProductImgError = function (img) {
    var wrap = img.parentElement;
    var card = img.closest ? img.closest('.product-card') : null;
    var name = card ? (card.getAttribute('data-name') || 'Product') : 'Product';
    var placeholder = document.createElement('div');
    placeholder.className = 'img-placeholder';
    placeholder.textContent = name;
    if (wrap) wrap.replaceChild(placeholder, img);
  };

  /* ── Live Product Filter ────────────────────────────────────── */
  var searchInput = document.getElementById('search-input');
  var noResults   = document.getElementById('no-results');
  var cards       = document.querySelectorAll('#product-grid .product-card');

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      var query   = searchInput.value.trim().toLowerCase();
      var visible = 0;

      cards.forEach(function (card) {
        var name = (card.getAttribute('data-name') || '').toLowerCase();
        if (name.indexOf(query) !== -1) {
          card.style.display = '';
          visible++;
        } else {
          card.style.display = 'none';
        }
      });

      if (noResults) {
        if (visible === 0) {
          noResults.classList.add('visible');
        } else {
          noResults.classList.remove('visible');
        }
      }
    });
  }
}());
