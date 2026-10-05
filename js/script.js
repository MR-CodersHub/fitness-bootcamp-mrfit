/* ============================================================
   MR FIT · Main Global Interactions & Utility Initializer
   ============================================================ */

(function () {
  'use strict';

  /* ----- Smooth scroll for in-page anchors ----- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id && id.length > 1 && !id.startsWith('#/')) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const offset = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }
    });
  });

  /* ----- Single-open Accordion for FAQ lists ----- */
  const faqs = document.querySelectorAll('.faq details, .faq-accordion details');
  faqs.forEach(d => {
    d.addEventListener('toggle', () => {
      if (d.open) {
        faqs.forEach(other => { if (other !== d) other.open = false; });
      }
    });
  });

  /* ----- Pricing Switcher (Monthly vs Annual) ----- */
  const pricingToggles = document.querySelectorAll('.pricing-billing-toggle');
  pricingToggles.forEach(toggle => {
    toggle.addEventListener('change', (e) => {
      const isAnnual = e.target.checked;
      document.querySelectorAll('[data-price-monthly]').forEach(priceEl => {
        const monthlyVal = priceEl.dataset.priceMonthly;
        const annualVal = priceEl.dataset.priceAnnual;
        const periodEl = priceEl.parentElement.querySelector('.price-period');

        if (isAnnual && annualVal) {
          priceEl.textContent = annualVal;
          if (periodEl) periodEl.textContent = '/ year';
        } else if (monthlyVal) {
          priceEl.textContent = monthlyVal;
          if (periodEl) periodEl.textContent = '/ month';
        }
      });
    });
  });

  /* ----- Coming Soon Countdown Timer ----- */
  function initCountdown() {
    const timerDays = document.getElementById('timer-days');
    const timerHours = document.getElementById('timer-hours');
    const timerMins = document.getElementById('timer-mins');
    const timerSecs = document.getElementById('timer-secs');

    if (!timerDays || !timerHours) return;

    // Set launch date 45 days from today
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 45);

    function update() {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) return;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      timerDays.textContent = String(days).padStart(2, '0');
      timerHours.textContent = String(hours).padStart(2, '0');
      timerMins.textContent = String(minutes).padStart(2, '0');
      timerSecs.textContent = String(seconds).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  }

  /* ----- Interactive direct chat form on User Dashboard ----- */
  const threadForm = document.querySelector('.thread__form');
  if (threadForm) {
    const body = document.querySelector('.thread__body');
    const input = threadForm.querySelector('input');
    threadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text || !body) return;
      const now = new Date();
      const stamp = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

      const b = document.createElement('div');
      b.className = 'bubble bubble--out';
      b.innerHTML = `<p></p><time></time>`;
      b.querySelector('p').textContent = text;
      b.querySelector('time').textContent = `Today · ${stamp}`;
      body.appendChild(b);
      body.scrollTop = body.scrollHeight;
      input.value = '';

      setTimeout(() => {
        const reply = document.createElement('div');
        reply.className = 'bubble bubble--in';
        reply.innerHTML = `<p></p><time></time>`;
        reply.querySelector('p').textContent = 'Coach Vikram: Got your note! Increasing your working set loads by 2.5kg for Wednesday squat block.';
        reply.querySelector('time').textContent = `Today · ${stamp}`;
        body.appendChild(reply);
        body.scrollTop = body.scrollHeight;
      }, 800);
    });
  }

  /* ----- Reveal on Scroll (Smooth visual transitions) ----- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'none';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fac, .trainer, .plan, .sched__day, .wo, .stat, .card, .service-catalog-card, .blog-article-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = 'opacity .35s ease, transform .35s ease';
    io.observe(el);
  });

  document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
  });

})();
