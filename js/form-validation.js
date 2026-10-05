/**
 * MR FIT - Form Validation & Toast Notification System
 */

(function () {
  'use strict';

  // --- Toast Notification Manager ---
  function showToast(message, type = 'success', title = '') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    
    let iconHtml = '<i class="fa-solid fa-circle-check"></i>';
    if (type === 'error') {
      iconHtml = '<i class="fa-solid fa-circle-exclamation"></i>';
    } else if (type === 'info') {
      iconHtml = '<i class="fa-solid fa-circle-info"></i>';
    }

    const defaultTitle = type === 'success' ? 'Success' : type === 'error' ? 'Error' : 'Notification';

    toast.innerHTML = `
      <div class="toast__icon">${iconHtml}</div>
      <div class="toast__content">
        <b>${title || defaultTitle}</b>
        <p>${message}</p>
      </div>
      <button class="toast__close" aria-label="Close notification">&times;</button>
    `;

    const closeBtn = toast.querySelector('.toast__close');
    const closeToast = () => {
      toast.classList.add('toast--closing');
      setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 300);
    };

    closeBtn.addEventListener('click', closeToast);
    setTimeout(closeToast, 4500);

    container.appendChild(toast);
  }

  // Export to window
  window.showToast = showToast;

  // --- Helpers ---
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return /^[0-9+\s\-()]{8,15}$/.test(phone.trim());
  }

  function setFieldError(input, message) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    let errEl = input.parentElement.querySelector('.field-error-msg');
    if (!errEl) {
      errEl = document.createElement('span');
      errEl.className = 'field-error-msg text-xs text-rose-500 font-medium block mt-1';
      input.parentElement.appendChild(errEl);
    }
    errEl.textContent = message;
  }

  function clearFieldError(input) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    const errEl = input.parentElement.querySelector('.field-error-msg');
    if (errEl) {
      errEl.remove();
    }
  }

  // --- Form Handlers ---
  function initFormValidation() {
    // 1. Contact Form
    const contactForm = document.getElementById('contactForm') || document.querySelector('form[data-form="contact"]');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        const name = contactForm.querySelector('[name="name"], #name');
        const email = contactForm.querySelector('[name="email"], #email');
        const phone = contactForm.querySelector('[name="phone"], #phone');
        const message = contactForm.querySelector('[name="message"], #message');

        if (name) {
          if (!name.value.trim() || name.value.trim().length < 2) {
            setFieldError(name, 'Please enter your full name (minimum 2 characters)');
            isValid = false;
          } else {
            clearFieldError(name);
          }
        }

        if (email) {
          if (!validateEmail(email.value)) {
            setFieldError(email, 'Please provide a valid email address');
            isValid = false;
          } else {
            clearFieldError(email);
          }
        }

        if (phone && phone.value.trim()) {
          if (!validatePhone(phone.value)) {
            setFieldError(phone, 'Please enter a valid phone number');
            isValid = false;
          } else {
            clearFieldError(phone);
          }
        }

        if (message) {
          if (!message.value.trim() || message.value.trim().length < 10) {
            setFieldError(message, 'Message must be at least 10 characters long');
            isValid = false;
          } else {
            clearFieldError(message);
          }
        }

        if (isValid) {
          const btn = contactForm.querySelector('button[type="submit"]');
          if (btn) {
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Transmitting...';
            btn.disabled = true;

            setTimeout(() => {
              btn.innerHTML = originalText;
              btn.disabled = false;
              contactForm.reset();
              contactForm.querySelectorAll('.is-valid, .is-invalid').forEach(el => {
                el.classList.remove('is-valid', 'is-invalid');
              });
              showToast('Thank you! Your message has been routed to our head coach. We will reach out within 2 hours.', 'success', 'Message Received');
            }, 800);
          }
        } else {
          showToast('Please fix the highlighted errors before submitting.', 'error', 'Incomplete Form');
        }
      });
    }

    // 2. Newsletter Subscription Form
    document.querySelectorAll('#newsletterForm, form[data-form="newsletter"]').forEach(form => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]');
        if (!email || !validateEmail(email.value)) {
          showToast('Please enter a valid email address.', 'error', 'Subscription Failed');
          if (email) setFieldError(email, 'Valid email required');
          return;
        }

        clearFieldError(email);
        const btn = form.querySelector('button[type="submit"]');
        if (btn) {
          const orig = btn.innerHTML;
          btn.innerHTML = '<i class="fa-solid fa-check"></i>';
          btn.disabled = true;
          setTimeout(() => {
            btn.innerHTML = orig;
            btn.disabled = false;
            form.reset();
            showToast('You are now subscribed to the Mr Fit Iron & Conditioning dispatch!', 'success', 'VIP Newsletter');
          }, 600);
        }
      });
    });

    // 3. Login Form
    const loginForm = document.getElementById('loginForm') || document.querySelector('form[data-form="login"]');
    if (loginForm) {
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const idInput = loginForm.querySelector('#memberId, [name="memberId"]');
        const passInput = loginForm.querySelector('#password, [name="password"]');
        let valid = true;

        if (idInput && !idInput.value.trim()) {
          setFieldError(idInput, 'Enter your Member ID or registered email');
          valid = false;
        } else if (idInput) {
          clearFieldError(idInput);
        }

        if (passInput && (!passInput.value || passInput.value.length < 4)) {
          setFieldError(passInput, 'Password must be at least 4 characters');
          valid = false;
        } else if (passInput) {
          clearFieldError(passInput);
        }

        if (valid) {
          const btn = loginForm.querySelector('button[type="submit"]');
          if (btn) {
            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Authenticating...';
            btn.disabled = true;
          }

          setTimeout(() => {
            const enteredId = (idInput ? idInput.value : '').toLowerCase();
            showToast('Authentication successful! Welcome to Mr Fit.', 'success', 'Access Granted');
            
            setTimeout(() => {
              if (enteredId.includes('admin') || enteredId.includes('staff') || enteredId.includes('001')) {
                window.location.href = (window.location.pathname.includes('/pages/') || window.location.pathname.includes('/auth/')) 
                  ? '../auth/admin/admin-dashboard.html' 
                  : 'auth/admin/admin-dashboard.html';
              } else {
                window.location.href = (window.location.pathname.includes('/pages/') || window.location.pathname.includes('/auth/')) 
                  ? '../auth/user/user-dashboard.html' 
                  : 'auth/user/user-dashboard.html';
              }
            }, 600);
          }, 800);
        }
      });
    }

    // 4. Signup Form
    const signupForm = document.getElementById('signupForm') || document.querySelector('form[data-form="signup"]');
    if (signupForm) {
      signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;

        const fullName = signupForm.querySelector('#fullName, [name="fullName"]');
        const email = signupForm.querySelector('#email, [name="email"]');
        const phone = signupForm.querySelector('#phone, [name="phone"]');
        const pass = signupForm.querySelector('#password, [name="password"]');
        const agree = signupForm.querySelector('#agreeTerms');

        if (fullName && fullName.value.trim().length < 3) {
          setFieldError(fullName, 'Please enter your full name');
          valid = false;
        } else if (fullName) clearFieldError(fullName);

        if (email && !validateEmail(email.value)) {
          setFieldError(email, 'Please enter a valid email address');
          valid = false;
        } else if (email) clearFieldError(email);

        if (phone && !validatePhone(phone.value)) {
          setFieldError(phone, 'Please enter a valid 10-digit mobile number');
          valid = false;
        } else if (phone) clearFieldError(phone);

        if (pass && pass.value.length < 6) {
          setFieldError(pass, 'Password must be at least 6 characters');
          valid = false;
        } else if (pass) clearFieldError(pass);

        if (agree && !agree.checked) {
          showToast('Please accept the Terms of Service and Gym Rules to proceed.', 'error', 'Consent Required');
          valid = false;
        }

        if (valid) {
          const btn = signupForm.querySelector('button[type="submit"]');
          if (btn) {
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Creating Membership...';
            btn.disabled = true;
          }

          setTimeout(() => {
            showToast('Account created successfully! Your Member ID is NG-0891.', 'success', 'Welcome to the Tribe');
            setTimeout(() => {
              window.location.href = (window.location.pathname.includes('/pages/') || window.location.pathname.includes('/auth/')) 
                ? '../auth/user/user-dashboard.html' 
                : 'auth/user/user-dashboard.html';
            }, 800);
          }, 900);
        }
      });
    }

    // 5. Coming Soon Waitlist Form
    const waitlistForm = document.getElementById('comingSoonForm');
    if (waitlistForm) {
      waitlistForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = waitlistForm.querySelector('input[type="email"]');
        if (!email || !validateEmail(email.value)) {
          showToast('Please enter a valid email for the VIP launch waitlist.', 'error', 'Invalid Email');
          return;
        }

        const btn = waitlistForm.querySelector('button[type="submit"]');
        if (btn) {
          btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Reserved';
          btn.disabled = true;
        }
        showToast('You are on the VIP waitlist! Early bird discount voucher will be delivered prior to launch.', 'success', 'Priority Locked');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', initFormValidation);
})();
