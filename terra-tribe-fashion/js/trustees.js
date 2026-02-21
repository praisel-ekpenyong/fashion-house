/* trustees.js — Terra Tribe Fashion */

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

  /* ── Trustees Data ──────────────────────────────────────────── */
  var trustees = [
    { name: 'NAME 01', photo: 'images/trustee01.jpg' },
    { name: 'NAME 02', photo: 'images/trustee02.jpg' },
    { name: 'NAME 03', photo: 'images/trustee03.jpg' },
    { name: 'NAME 04', photo: 'images/trustee04.jpg' },
    { name: 'NAME 05', photo: 'images/trustee05.jpg' },
    { name: 'NAME 06', photo: 'images/trustee06.jpg' },
    { name: 'NAME 07', photo: 'images/trustee07.jpg' },
    { name: 'NAME 08', photo: 'images/trustee08.jpg' },
    { name: 'NAME 09', photo: 'images/trustee09.jpg' },
    { name: 'NAME 10', photo: 'images/trustee10.jpg' },
    { name: 'NAME 11', photo: 'images/trustee11.jpg' },
    { name: 'NAME 12', photo: 'images/trustee12.jpg' },
    { name: 'NAME 13', photo: 'images/trustee13.jpg' },
    { name: 'NAME 14', photo: 'images/trustee14.jpg' },
    { name: 'NAME 15', photo: 'images/trustee15.jpg' }
  ];

  /* ── Render Trustees ────────────────────────────────────────── */
  var grid = document.getElementById('trustee-grid');

  if (grid) {
    trustees.forEach(function (trustee) {
      var card = document.createElement('div');
      card.className = 'trustee-card';

      var photoWrap = document.createElement('div');
      photoWrap.className = 'trustee-photo';

      var img = document.createElement('img');
      img.src = trustee.photo;
      img.alt = trustee.name;
      img.addEventListener('error', function () {
        var placeholder = document.createElement('div');
        placeholder.className = 'img-placeholder';
        placeholder.textContent = 'No Photo';
        photoWrap.replaceChild(placeholder, img);
      });

      photoWrap.appendChild(img);

      var nameEl = document.createElement('p');
      nameEl.className = 'trustee-name';
      nameEl.textContent = trustee.name;

      card.appendChild(photoWrap);
      card.appendChild(nameEl);
      grid.appendChild(card);
    });
  }
}());
