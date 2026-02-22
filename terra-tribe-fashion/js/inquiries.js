/* inquiries.js — Terra Tribe Fashion */

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

  /* ── Helpers ────────────────────────────────────────────────── */
  function setError(fieldId, errId, show) {
    var field = document.getElementById(fieldId);
    var err   = document.getElementById(errId);
    if (!field || !err) return;
    if (show) {
      field.classList.add('input-error');
      err.classList.add('visible');
    } else {
      field.classList.remove('input-error');
      err.classList.remove('visible');
    }
  }

  function showSuccess(id, seconds) {
    var el = document.getElementById(id);
    if (!el) return;
    el.classList.add('visible');
    setTimeout(function () {
      el.classList.remove('visible');
    }, seconds * 1000);
  }

  /* ── Inquiry Form ───────────────────────────────────────────── */
  var inqForm = document.getElementById('inquiry-form');

  if (inqForm) {
    inqForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name    = document.getElementById('inq-name').value.trim();
      var email   = document.getElementById('inq-email').value.trim();
      var message = document.getElementById('inq-message').value.trim();
      var valid   = true;

      if (!name) {
        setError('inq-name', 'err-inq-name', true);
        valid = false;
      } else {
        setError('inq-name', 'err-inq-name', false);
      }

      if (!email || email.indexOf('@') === -1) {
        setError('inq-email', 'err-inq-email', true);
        valid = false;
      } else {
        setError('inq-email', 'err-inq-email', false);
      }

      if (!message) {
        setError('inq-message', 'err-inq-message', true);
        valid = false;
      } else {
        setError('inq-message', 'err-inq-message', false);
      }

      if (valid) {
        inqForm.reset();
        showSuccess('inq-success', 6);
      }
    });
  }

  /* ── Appointment Form ───────────────────────────────────────── */
  var apptForm  = document.getElementById('appt-form');
  var apptCity  = document.getElementById('appt-city');
  var apptTime  = document.getElementById('appt-time');
  var apptDate  = document.getElementById('appt-date');

  var lagosSlots = ['09:00 AM','10:00 AM','11:00 AM','12:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM'];
  var abujaSlots = ['10:00 AM','11:00 AM','12:00 PM','01:00 PM','03:00 PM','04:00 PM'];

  /* Set date minimum to today */
  if (apptDate) {
    var today = new Date();
    var yyyy  = today.getFullYear();
    var mm    = String(today.getMonth() + 1).padStart(2, '0');
    var dd    = String(today.getDate()).padStart(2, '0');
    apptDate.min = yyyy + '-' + mm + '-' + dd;
  }

  function populateTimeSlots(slots) {
    if (!apptTime) return;
    apptTime.innerHTML = '<option value="">— Select time slot —</option>';
    slots.forEach(function (slot) {
      var opt = document.createElement('option');
      opt.value = slot;
      opt.textContent = slot;
      apptTime.appendChild(opt);
    });
  }

  if (apptCity) {
    apptCity.addEventListener('change', function () {
      if (apptCity.value === 'lagos') {
        populateTimeSlots(lagosSlots);
      } else if (apptCity.value === 'abuja') {
        populateTimeSlots(abujaSlots);
      } else {
        if (apptTime) {
          apptTime.innerHTML = '<option value="">— Select time slot —</option>';
        }
      }
    });
  }

  if (apptForm) {
    apptForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name  = document.getElementById('appt-name').value.trim();
      var email = document.getElementById('appt-email').value.trim();
      var phone = document.getElementById('appt-phone').value.trim();
      var city  = apptCity ? apptCity.value : '';
      var date  = apptDate ? apptDate.value : '';
      var time  = apptTime ? apptTime.value : '';
      var valid = true;

      if (!name) {
        setError('appt-name', 'err-appt-name', true);
        valid = false;
      } else {
        setError('appt-name', 'err-appt-name', false);
      }

      if (!email || email.indexOf('@') === -1) {
        setError('appt-email', 'err-appt-email', true);
        valid = false;
      } else {
        setError('appt-email', 'err-appt-email', false);
      }

      var digits = phone.replace(/\D/g, '');
      if (digits.length < 10) {
        setError('appt-phone', 'err-appt-phone', true);
        valid = false;
      } else {
        setError('appt-phone', 'err-appt-phone', false);
      }

      if (!city) {
        setError('appt-city', 'err-appt-city', true);
        valid = false;
      } else {
        setError('appt-city', 'err-appt-city', false);
      }

      if (!date) {
        setError('appt-date', 'err-appt-date', true);
        valid = false;
      } else {
        setError('appt-date', 'err-appt-date', false);
      }

      if (!time) {
        setError('appt-time', 'err-appt-time', true);
        valid = false;
      } else {
        setError('appt-time', 'err-appt-time', false);
      }

      if (valid) {
        apptForm.reset();
        if (apptTime) {
          apptTime.innerHTML = '<option value="">— Select time slot —</option>';
        }
        showSuccess('appt-success', 8);
      }
    });
  }
}());
