/* events.js — Terra Tribe Fashion */

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

  /* ── Events Data ────────────────────────────────────────────── */
  var events = [
    { id: '1', name: 'Eko Luxe Season Preview',    date: new Date('2026-04-21T18:00:00') },
    { id: '2', name: 'Lagos Runway Showcase Night', date: new Date('2026-05-15T19:00:00') },
    { id: '3', name: 'Abuja Couture Brunch',        date: new Date('2026-09-12T10:00:00') },
    { id: '4', name: 'Year End Gala & Awards',      date: new Date('2026-12-05T18:00:00') }
  ];

  /* ── Badge Logic ────────────────────────────────────────────── */
  var now = new Date();

  /* Find the nearest upcoming event (first event with date > now) */
  var nearest = null;
  for (var i = 0; i < events.length; i++) {
    if (events[i].date > now) {
      nearest = events[i];
      break;
    }
  }

  events.forEach(function (ev) {
    var card  = document.getElementById('event-' + ev.id);
    var badge = document.getElementById('badge-' + ev.id);
    if (!card || !badge) return;

    if (ev.date < now) {
      /* Past event */
      badge.textContent = 'Past';
      badge.style.background = '#7A6252';
      badge.style.color = '#FAF6EF';
    } else if (nearest && ev.id === nearest.id) {
      /* Next (nearest upcoming) event */
      badge.textContent = 'Next';
      badge.classList.add('badge-next');
      card.classList.add('nearest');
    } else {
      /* Future upcoming event */
      badge.textContent = 'Upcoming';
    }
  });
}());
