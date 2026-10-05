/**
 * MR FIT - Unified Navbar & Footer Injector, Theme & RTL Manager
 */

(function () {
  'use strict';

  // --- Path Resolver Helper ---
  function getAssetPrefix() {
    const pathname = window.location.pathname.replace(/\\/g, '/').toLowerCase();
    if (pathname.includes('/auth/user/') || pathname.includes('/auth/admin/')) {
      return '../../';
    }
    if (pathname.includes('/pages/') || pathname.includes('/auth/')) {
      return '../';
    }
    return '';
  }

  function getActivePage() {
    const pathname = window.location.pathname.replace(/\\/g, '/').toLowerCase();
    if (pathname.includes('home-2.html')) return 'home-2';
    if (pathname.includes('about.html')) return 'about';
    if (pathname.includes('services.html') || pathname.includes('service-details.html')) return 'services';
    if (pathname.includes('blog.html') || pathname.includes('blog-details.html')) return 'blog';
    if (pathname.includes('contact.html')) return 'contact';
    if (pathname.includes('pricing.html')) return 'pricing';
    if (pathname.includes('faq.html')) return 'faq';
    return 'home';
  }

  // --- Render Unified Navbar ---
  function renderUnifiedNavbar() {
    const headerEl = document.querySelector('header.hdr:not(.hdr--dashboard), #site-header, #app-navbar');
    if (!headerEl) return;

    // Only inject if it doesn't have custom inner content or user wants unified navbar
    const isDashboard = headerEl.classList.contains('hdr--dashboard');
    if (isDashboard) return;

    const prefix = getAssetPrefix();
    const active = getActivePage();

    const homeActive = active === 'home' ? ' class="is-active"' : '';
    const home2Active = active === 'home-2' ? ' class="is-active"' : '';
    const aboutActive = active === 'about' ? ' class="is-active"' : '';
    const servicesActive = active === 'services' ? ' class="is-active"' : '';
    const blogActive = active === 'blog' ? ' class="is-active"' : '';
    const contactActive = active === 'contact' ? ' class="is-active"' : '';

    headerEl.innerHTML = `
      <div class="hdr__row">
        <a class="hdr__brand" href="${prefix}index.html">
          <span class="hdr__mark">
            <img src="${prefix}assets/logo.png" alt="Mr Fit Logo" />
          </span>
          <span class="hdr__name">MR FIT</span>
        </a>

        <nav class="hdr__nav" aria-label="Primary">
          <a href="${prefix}index.html"${homeActive}>Home</a>
          <a href="${prefix}pages/home-2.html"${home2Active}>Home 2</a>
          <a href="${prefix}pages/about.html"${aboutActive}>About</a>
          <a href="${prefix}pages/services.html"${servicesActive}>Services</a>
          <a href="${prefix}pages/blog.html"${blogActive}>Blog</a>
          <a href="${prefix}pages/contact.html"${contactActive}>Contact</a>
        </nav>

        <div class="hdr__cta">
          <button type="button" class="theme-toggle-btn" aria-label="Toggle Theme" title="Switch Light/Dark Mode"><i class="fa-solid fa-sun"></i></button>
          <button type="button" class="rtl-toggle-btn" aria-label="Toggle RTL layout" title="Switch LTR/RTL">RTL</button>

          <!-- Profile Dropdown -->
          <div class="profile-dropdown-wrap">
            <button type="button" class="profile-btn" aria-label="User account and portals" title="Member &amp; Admin Portals"><i class="fa-solid fa-user"></i></button>
            <div class="profile-menu">
              <div class="profile-menu__header">
                <b>Mr Fit Portals</b>
                <span>Member &amp; Management Access</span>
              </div>
              <ul class="profile-menu__links">
                <li><a href="${prefix}auth/login.html"><i class="fa-solid fa-arrow-right-to-bracket text-orange-500"></i><span>Login</span></a></li>
                <li><a href="${prefix}auth/signup.html"><i class="fa-solid fa-user-plus text-amber-400"></i><span>Signup</span></a></li>
                <li><a href="${prefix}auth/user/user-dashboard.html"><i class="fa-solid fa-id-card text-emerald-400"></i><span>User Dashboard</span></a></li>
                <li><a href="${prefix}auth/admin/admin-dashboard.html"><i class="fa-solid fa-shield-halved text-rose-400"></i><span>Admin Dashboard</span></a></li>
              </ul>
            </div>
          </div>

          <button class="hdr__burger" aria-label="Open menu" aria-expanded="false">&#9776;</button>
        </div>
      </div>
    `;

    // Ensure mobile nav drawer exists
    let drawer = document.querySelector('.mobile-nav-drawer');
    if (!drawer) {
      drawer = document.createElement('div');
      drawer.className = 'mobile-nav-drawer';
      headerEl.parentNode.insertBefore(drawer, headerEl.nextSibling);
    }

    drawer.innerHTML = `
      <div class="mobile-nav-header">
        <a class="hdr__brand mobile-nav-brand" href="${prefix}index.html">
          <span class="hdr__mark">
            <img src="${prefix}assets/logo.png" alt="Mr Fit Logo" />
          </span>
          <span class="hdr__name">MR FIT</span>
        </a>
        <button class="mobile-nav-close" aria-label="Close menu">&times;</button>
      </div>
      <div class="mobile-nav-links">
        <a href="${prefix}index.html"${homeActive}>Home</a>
        <a href="${prefix}pages/home-2.html"${home2Active}>Home 2</a>
        <a href="${prefix}pages/about.html"${aboutActive}>About</a>
        <a href="${prefix}pages/services.html"${servicesActive}>Services</a>
        <a href="${prefix}pages/blog.html"${blogActive}>Blog</a>
        <a href="${prefix}pages/contact.html"${contactActive}>Contact</a>
      </div>
    `;
  }

  // --- Render Unified Footer ---
  function renderUnifiedFooter() {
    const footerEl = document.querySelector('footer.ftr, #site-footer, #app-footer');
    if (!footerEl) return;

    const prefix = getAssetPrefix();

    footerEl.innerHTML = `
      <!-- Main Footer Body -->
      <div class="ftr__body">
        <div class="ftr__main">

          <!-- Brand Block -->
          <div class="ftr__brand">
            <a class="hdr__brand" href="${prefix}index.html">
              <span class="hdr__mark">
                <img src="${prefix}assets/logo.png" alt="Mr Fit Logo" />
              </span>
              <span class="hdr__name">MR FIT</span>
            </a>
            <p class="ftr__brand-tagline">Indiranagar's neighbourhood gym since 2014. No shiny lobby. Just iron, grit, and community.</p>
            
            <div class="ftr__socials">
              <a href="#" class="ftr__social-btn" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
              <a href="#" class="ftr__social-btn" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
              <a href="#" class="ftr__social-btn" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
              <a href="#" class="ftr__social-btn" aria-label="Strava"><i class="fa-brands fa-strava"></i></a>
            </div>
          </div>

          <!-- Explore Column -->
          <div class="ftr__col">
            <h4>Explore</h4>
            <ul>
              <li><a href="${prefix}index.html">Home</a></li>
              <li><a href="${prefix}pages/home-2.html">Home 2</a></li>
              <li><a href="${prefix}pages/about.html">About Us</a></li>
              <li><a href="${prefix}pages/contact.html">Contact</a></li>
            </ul>
          </div>

          <!-- Members Column -->
          <div class="ftr__col">
            <h4>Members</h4>
            <ul>
              <li><a href="${prefix}pages/services.html">Services</a></li>
              <li><a href="${prefix}pages/faq.html">FAQ</a></li>
              <li><a href="${prefix}pages/blog.html">Blog</a></li>
              <li><a href="${prefix}pages/pricing.html">Pricing</a></li>
            </ul>
          </div>

          <!-- Contact Column -->
          <div class="ftr__col">
            <h4>Contact</h4>
            <ul class="ftr__contact-list">
              <li class="ftr__contact-item">
                <i class="fa-solid fa-location-dot ftr__contact-icon"></i>
                <span class="ftr__contact-text">12th Main Road, 100ft Road,<br>Bengaluru, Karnataka 560038</span>
              </li>
              <li class="ftr__contact-item">
                <i class="fa-solid fa-phone ftr__contact-icon"></i>
                <a class="ftr__contact-text" href="tel:+918012345678">+91 80 1234 5678</a>
              </li>
              <li class="ftr__contact-item">
                <i class="fa-solid fa-envelope ftr__contact-icon"></i>
                <a class="ftr__contact-text" href="mailto:hello@mrfitbootcamp.com">hello@mrfitbootcamp.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <!-- Bottom bar -->
      <div class="ftr__strip">
        <span>© 2026 Mr Fit Pvt. Ltd. · Bengaluru, Karnataka</span>
        <span style="font-family: var(--ff-head); letter-spacing: .1em; font-size: 10px; color: rgba(255,255,255,.12); text-transform: uppercase;">SQUAT · BENCH · DEADLIFT</span>
        <span><a href="${prefix}pages/Privacy-policy.html">Privacy</a> &nbsp;·&nbsp; <a href="${prefix}pages/Terms-of-service.html">Terms</a></span>
      </div>
    `;

    // Setup newsletter listener
    const newsletterForm = document.getElementById('footerNewsletterForm');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('footerEmailInput');
        if (input && input.value.trim()) {
          input.value = '';
          if (window.showToast) {
            window.showToast('You are now subscribed to The Iron Dispatch!', 'success', 'Newsletter Subscription');
          } else {
            alert('Thank you for subscribing to The Iron Dispatch!');
          }
        }
      });
    }
  }

  // --- Theme Management ---
  const THEME_KEY = 'mrfit_theme';
  const RTL_KEY = 'mrfit_rtl';

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'dark'); // Default to athletic dark
    setTheme(theme, false);
  }

  function setTheme(theme, save = true) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    if (save) localStorage.setItem(THEME_KEY, theme);
    updateThemeToggleIcons(theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next, true);
  }

  function updateThemeToggleIcons(theme) {
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.innerHTML = theme === 'dark' 
        ? '<i class="fa-solid fa-sun" title="Switch to Light Mode"></i>' 
        : '<i class="fa-solid fa-moon" title="Switch to Dark Mode"></i>';
      btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`);
    });
  }

  // --- RTL Management ---
  function initRTL() {
    const savedRTL = localStorage.getItem(RTL_KEY);
    if (savedRTL === 'true') {
      setRTL(true, false);
    }
  }

  function setRTL(isRTL, save = true) {
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    if (save) localStorage.setItem(RTL_KEY, String(isRTL));
    updateRTLToggleIcons(isRTL);
  }

  function toggleRTL() {
    const current = document.documentElement.getAttribute('dir') === 'rtl';
    const next = !current;
    setRTL(next, true);
  }

  function updateRTLToggleIcons(isRTL) {
    document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
      btn.innerHTML = isRTL 
        ? '<i class="fa-solid fa-align-left" title="Switch to LTR"></i>' 
        : '<i class="fa-solid fa-align-right" title="Switch to RTL"></i>';
      btn.setAttribute('aria-label', `Switch to ${isRTL ? 'LTR' : 'RTL'} layout`);
    });
  }

  // --- Profile Dropdown Setup ---
  function setupProfileDropdown() {
    const profileBtns = document.querySelectorAll('.profile-btn');
    profileBtns.forEach(btn => {
      const menu = btn.parentElement.querySelector('.profile-menu');
      if (!menu) return;

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = menu.classList.contains('is-open');
        document.querySelectorAll('.profile-menu.is-open').forEach(m => m.classList.remove('is-open'));
        if (!isOpen) {
          menu.classList.add('is-open');
          btn.classList.add('active');
        } else {
          menu.classList.remove('is-open');
          btn.classList.remove('active');
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.profile-dropdown-wrap')) {
        document.querySelectorAll('.profile-menu.is-open').forEach(m => m.classList.remove('is-open'));
        document.querySelectorAll('.profile-btn.active').forEach(b => b.classList.remove('active'));
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.profile-menu.is-open').forEach(m => m.classList.remove('is-open'));
        document.querySelectorAll('.profile-btn.active').forEach(b => b.classList.remove('active'));
      }
    });
  }

  // --- Sticky Header Scroll ---
  function setupStickyHeader() {
    const hdr = document.querySelector('.hdr');
    if (!hdr) return;
    const onScroll = () => {
      if (window.scrollY > 20) {
        hdr.classList.add('is-scrolled');
      } else {
        hdr.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Mobile Drawer Menu ---
  function setupMobileMenu() {
    const burgers = document.querySelectorAll('.hdr__burger');
    const drawer = document.querySelector('.mobile-nav-drawer');

    if (!drawer) return;

    burgers.forEach(b => {
      b.addEventListener('click', () => {
        drawer.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      });
    });

    drawer.addEventListener('click', (e) => {
      if (e.target.closest('.mobile-nav-close') || e.target.closest('a')) {
        drawer.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('is-active')) {
        drawer.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    });
  }

  // --- Event Listeners for Theme & RTL buttons ---
  function setupControlButtons() {
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTheme();
      });
    });

    document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleRTL();
      });
    });
  }

  // Initialize on DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    renderUnifiedNavbar();
    renderUnifiedFooter();
    initTheme();
    initRTL();
    setupProfileDropdown();
    setupStickyHeader();
    setupMobileMenu();
    setupControlButtons();
  });

  // Global helper exports
  window.mrfit = window.mrfit || {};
  window.mrfit.setTheme = setTheme;
  window.mrfit.toggleTheme = toggleTheme;
  window.mrfit.setRTL = setRTL;
  window.mrfit.toggleRTL = toggleRTL;
  window.mrfit.renderNavbar = renderUnifiedNavbar;
  window.mrfit.renderFooter = renderUnifiedFooter;

})();
