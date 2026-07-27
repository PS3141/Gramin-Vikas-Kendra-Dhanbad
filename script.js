/* ================================================================
   SCRIPT.JS — HopeForward NGO Website Template
   ================================================================
   This file handles all interactive behaviors:
   - Sticky navbar + hamburger menu
   - Smooth scrolling & active link highlighting
   - Tab switching (Mission/Vision/Objectives)
   - Animated number counters
   - Scroll-to-top button
   - Gallery lightbox
   - Scroll-reveal animations
   ================================================================ */

'use strict';

/* ================================================================
   HELPER: Wait for DOM to load before running scripts
   ================================================================ */
document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------------------------
     1. NAVBAR — Sticky behaviour + hamburger toggle
     ---------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navLinkItems = document.querySelectorAll('.nav-link');

  /**
   * Toggle mobile navigation menu open/closed
   */
  function toggleMobileMenu() {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');

    // Accessibility: update aria-expanded
    hamburger.setAttribute('aria-expanded', isOpen.toString());

    // Prevent body scrolling when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  /**
   * Close mobile navigation menu
   */
  function closeMobileMenu() {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Hamburger button click
  hamburger.addEventListener('click', toggleMobileMenu);

  // Close menu when a nav link is clicked (mobile)
  navLinkItems.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMobileMenu();
    });
  });

  // Close menu when clicking outside of it
  document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target)) {
      closeMobileMenu();
    }
  });

  // Add scrolled class to navbar for extra shadow when user scrolls
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  /* ----------------------------------------------------------
     2. ACTIVE NAV LINK — Highlight link for current section
     ---------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');

  function highlightActiveNavLink() {
    const scrollY = window.pageYOffset;
    const navbarHeight = navbar.offsetHeight;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - navbarHeight - 20;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (correspondingLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinkItems.forEach(function (link) { link.classList.remove('active'); });
          correspondingLink.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', highlightActiveNavLink, { passive: true });
  highlightActiveNavLink(); // Run once on load


  /* ----------------------------------------------------------
     3. SMOOTH SCROLLING — All anchor links
     ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      // Skip empty anchors
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        const navbarHeight = navbar ? navbar.offsetHeight : 70;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });


  /* ----------------------------------------------------------
     4. TABS — Mission / Vision / Objectives switcher
     ---------------------------------------------------------- */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const targetTab = this.getAttribute('data-tab');

      // Deactivate all tabs
      tabButtons.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabContents.forEach(function (c) { c.classList.remove('active'); });

      // Activate clicked tab
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');

      const targetContent = document.getElementById('content-' + targetTab);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });


  /* ----------------------------------------------------------
     5. ANIMATED COUNTER — Number count-up in hero stats
     ---------------------------------------------------------- */
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  let countersStarted = false;

  /**
   * Animate a number from 0 to its target value
   * @param {HTMLElement} element - The element to animate
   * @param {number} target - The final number to count to
   * @param {number} duration - Animation duration in ms
   */
  function animateCounter(element, target, duration) {
    const startTime = performance.now();
    const startValue = 0;

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic for natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(startValue + (target - startValue) * eased);

      element.textContent = currentValue.toLocaleString('en-IN');

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  /**
   * Start counters when the hero section is visible
   */
  function startCountersIfVisible() {
    if (countersStarted) return;

    const heroSection = document.getElementById('home');
    if (!heroSection) return;

    const rect = heroSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      countersStarted = true;
      statNumbers.forEach(function (el) {
        const target = parseInt(el.getAttribute('data-target'), 10);
        if (!isNaN(target)) {
          // Delay slightly so the page renders first
          setTimeout(function () {
            animateCounter(el, target, 2000);
          }, 500);
        }
      });
    }
  }

  window.addEventListener('scroll', startCountersIfVisible, { passive: true });
  startCountersIfVisible(); // Try immediately on load


  /* ----------------------------------------------------------
     6. SCROLL-TO-TOP BUTTON
     ---------------------------------------------------------- */
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  if (scrollTopBtn) {
    // Show button after scrolling down 300px
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    // Scroll to top when clicked
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  /* ----------------------------------------------------------
     7. GALLERY LIGHTBOX
     ---------------------------------------------------------- */
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxOverlay = document.getElementById('lightboxOverlay');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxContent = document.getElementById('lightboxContent');

  /**
   * Open the lightbox with image or placeholder content
   */
  function openLightbox(galleryItem) {
    if (!lightboxOverlay) return;

    const img = galleryItem.querySelector('img');
    const overlaySpan = galleryItem.querySelector('.gallery-overlay span');
    const caption = overlaySpan ? overlaySpan.textContent : 'Gallery Image';

    lightboxContent.innerHTML = '';

    if (img) {
      // Show the actual image
      const lightboxImg = document.createElement('img');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || caption;
      lightboxContent.appendChild(lightboxImg);
    } else {
      // Show a placeholder message
      const placeholderMsg = document.createElement('div');
      placeholderMsg.style.cssText = `
        background: rgba(255,255,255,0.05);
        border: 2px dashed rgba(255,255,255,0.2);
        border-radius: 12px;
        padding: 60px 80px;
        color: rgba(255,255,255,0.7);
        font-size: 1rem;
      `;
      placeholderMsg.innerHTML = `<i class="fas fa-image" style="font-size:3rem;display:block;margin-bottom:16px;"></i>${caption}`;
      lightboxContent.appendChild(placeholderMsg);
    }

    // Add caption
    const captionEl = document.createElement('p');
    captionEl.textContent = caption;
    lightboxContent.appendChild(captionEl);

    // Show overlay
    lightboxOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus the close button for accessibility
    if (lightboxClose) lightboxClose.focus();
  }

  /**
   * Close the lightbox
   */
  function closeLightbox() {
    if (!lightboxOverlay) return;
    lightboxOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Click on gallery items to open lightbox
  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      openLightbox(this);
    });

    // Keyboard accessibility
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(this);
      }
    });
  });

  // Close lightbox on button click
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  // Close lightbox on overlay background click
  if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', function (e) {
      if (e.target === lightboxOverlay) {
        closeLightbox();
      }
    });
  }

  // Close lightbox on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightboxOverlay && lightboxOverlay.classList.contains('active')) {
      closeLightbox();
    }
  });


  /* ----------------------------------------------------------
     8. SCROLL REVEAL ANIMATIONS
     Sections fade in as they scroll into view
     ---------------------------------------------------------- */
  const revealElements = document.querySelectorAll(
    '.activity-card, .team-card, .contact-info-card, ' +
    '.bank-details-card, .qr-card, .volunteer-cta-card, ' +
    '.gallery-item, .benefit-item, ' +
    '.cert-card, .faq-item, .feedback-info-item'
  );

  // Add base styles for reveal
  revealElements.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  /**
   * Check if an element is in the viewport and reveal it
   */
  function revealOnScroll() {
    revealElements.forEach(function (el, index) {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 60) {
        // Stagger the animation delay
        const delay = (index % 6) * 80;
        setTimeout(function () {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, delay);
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  revealOnScroll(); // Run once immediately


  /* ----------------------------------------------------------
     9. DYNAMIC COPYRIGHT YEAR in Footer
     ---------------------------------------------------------- */
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


  /* ----------------------------------------------------------
     10. PAYMENT BUTTONS — Placeholder alert messages
     REPLACE: Remove these alerts and connect your actual payment gateway
     ---------------------------------------------------------- */
  const upiBtn = document.getElementById('upi-pay-btn');
  const netBankingBtn = document.getElementById('netbanking-btn');
  const cardBtn = document.getElementById('card-pay-btn');

  if (upiBtn) {
    upiBtn.addEventListener('click', function (e) {
      e.preventDefault();
      // REPLACE: Open your UPI payment link or deep link here
      // Example: window.open('upi://pay?pa=GVK@bankname&pn=Gramin+Vikas+Kendra', '_blank');
      var lang = localStorage.getItem('gvk-language') || 'hi';
      var msg = (typeof translations !== 'undefined' && translations[lang])
        ? translations[lang]['alert-upi-msg']
        : 'Please open your UPI app and scan the QR code, or transfer to the UPI ID shown above.';
      showPaymentAlert('UPI Pay', msg);
    });
  }

  if (netBankingBtn) {
    netBankingBtn.addEventListener('click', function (e) {
      e.preventDefault();
      // REPLACE: Redirect to your net banking / payment gateway
      var lang = localStorage.getItem('gvk-language') || 'hi';
      var msg = (typeof translations !== 'undefined' && translations[lang])
        ? translations[lang]['alert-bank-msg']
        : 'Please use the bank details above to make an NEFT/RTGS transfer.';
      showPaymentAlert('Net Banking', msg);
    });
  }

  if (cardBtn) {
    cardBtn.addEventListener('click', function (e) {
      e.preventDefault();
      // REPLACE: Redirect to your card payment gateway (Razorpay, CCAvenue, etc.)
      var lang = localStorage.getItem('gvk-language') || 'hi';
      var msg = (typeof translations !== 'undefined' && translations[lang])
        ? translations[lang]['alert-card-msg']
        : 'Credit/Debit card payment gateway.';
      showPaymentAlert('Card Payment', msg);
    });
  }

  /**
   * Show a styled notification for payment (replace with real gateway in production)
   * @param {string} method - Payment method name
   * @param {string} message - Message to display
   */
  function showPaymentAlert(method, message) {
    // Create a simple toast notification
    const toast = document.createElement('div');
    toast.style.cssText = `
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%) translateY(0);
      background: #1a3a5c;
      color: white;
      padding: 16px 28px;
      border-radius: 12px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.3);
      z-index: 9999;
      font-size: 0.9rem;
      max-width: 400px;
      text-align: center;
      animation: slideUp 0.3s ease;
      line-height: 1.5;
    `;
    toast.innerHTML = `<strong>${method}</strong><br><span style="color:rgba(255,255,255,0.8);font-size:0.82rem;">${message.replace(/\n/g, '<br>')}</span>`;
    document.body.appendChild(toast);

    setTimeout(function () {
      toast.style.transition = 'opacity 0.3s ease';
      toast.style.opacity = '0';
      setTimeout(function () { toast.remove(); }, 300);
    }, 4000);
  }


  /* ----------------------------------------------------------
     11. VOLUNTEER FORM BUTTON — Placeholder check
     ---------------------------------------------------------- */
  const volunteerBtn = document.getElementById('volunteer-form-btn');

  if (volunteerBtn) {
    volunteerBtn.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      // Check if the link is still a placeholder
      if (!href || href.includes('YOUR_FORM_LINK_HERE')) {
        e.preventDefault();
        showPaymentAlert('Volunteer Form', 'REPLACE: Add your Google Form link to the volunteer button in index.html.\n\nLook for the comment: "REPLACE: Update href with your actual Google Form link"');
      }
      // If it's a real link, it will open normally
    });
  }


  /* ----------------------------------------------------------
     12. NAVBAR KEYBOARD NAVIGATION
     Trap focus in mobile menu when open for accessibility
     ---------------------------------------------------------- */
  document.addEventListener('keydown', function (e) {
    // Close mobile menu with Escape
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMobileMenu();
      hamburger.focus();
    }
  });


  /* ----------------------------------------------------------
     END OF DOMCONTENTLOADED
     ---------------------------------------------------------- */
  console.log(
    '%c🌱 HopeForward NGO Website Template\n%cTemplate loaded successfully. Remember to replace all placeholder content!',
    'color: #1a3a5c; font-size: 16px; font-weight: bold;',
    'color: #4a4a68; font-size: 12px;'
  );

});


/* ================================================================
   UTILITY: Debounce function (prevents excessive scroll event firing)
   ================================================================ */
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn.apply.bind(fn, this, arguments), delay);
  };
}


/* ================================================================
   UTILITY: Check if element is in viewport
   ================================================================ */
function isInViewport(element, offset) {
  offset = offset || 0;
  const rect = element.getBoundingClientRect();
  return (
    rect.top < (window.innerHeight - offset) &&
    rect.bottom > 0
  );
}


/* ================================================================
   NEW SECTION JS — EVENTS & ACHIEVEMENTS SLIDER
   Auto-plays every 5 seconds. Prev/Next buttons and dot indicators.
   Touch/swipe supported on mobile.
   ================================================================ */
(function () {
  var slider      = document.getElementById('eventsSlider');
  var prevBtn     = document.getElementById('eventsPrev');
  var nextBtn     = document.getElementById('eventsNext');
  var dotsWrap    = document.getElementById('eventsDots');

  if (!slider) return; // Safety: don't run if section is missing

  var slides      = slider.querySelectorAll('.event-slide');
  var total       = slides.length;
  var current     = 0;
  var autoTimer   = null;
  var touchStartX = 0;

  /* Build dot buttons */
  for (var i = 0; i < total; i++) {
    var dot = document.createElement('button');
    dot.className    = 'event-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to event ' + (i + 1));
    dot.setAttribute('role', 'tab');
    dot.setAttribute('data-index', i);
    dotsWrap.appendChild(dot);
  }

  function goTo(index) {
    current = (index + total) % total; // wrap around
    slider.style.transition = 'transform 0.5s ease';
    slider.style.transform  = 'translateX(-' + (current * 100) + '%)';

    /* Update dots */
    var dots = dotsWrap.querySelectorAll('.event-dot');
    dots.forEach(function (d, idx) {
      d.classList.toggle('active', idx === current);
    });

    /* Update aria */
    slides.forEach(function (s, idx) {
      s.setAttribute('aria-hidden', idx !== current ? 'true' : 'false');
    });
  }

  function startAuto() {
    autoTimer = setInterval(function () { goTo(current + 1); }, 5000);
  }

  function stopAuto() {
    clearInterval(autoTimer);
  }

  /* Initial state */
  goTo(0);
  startAuto();

  /* Prev / Next buttons */
  if (prevBtn) prevBtn.addEventListener('click', function () {
    stopAuto(); goTo(current - 1); startAuto();
  });
  if (nextBtn) nextBtn.addEventListener('click', function () {
    stopAuto(); goTo(current + 1); startAuto();
  });

  /* Dot clicks */
  dotsWrap.addEventListener('click', function (e) {
    var idx = parseInt(e.target.getAttribute('data-index'), 10);
    if (!isNaN(idx)) { stopAuto(); goTo(idx); startAuto(); }
  });

  /* Touch / swipe support */
  slider.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  slider.addEventListener('touchend', function (e) {
    var diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      stopAuto();
      goTo(diff > 0 ? current + 1 : current - 1);
      startAuto();
    }
  }, { passive: true });

  /* Keyboard navigation */
  slider.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { stopAuto(); goTo(current - 1); startAuto(); }
    if (e.key === 'ArrowRight') { stopAuto(); goTo(current + 1); startAuto(); }
  });
}());


/* ================================================================
   NEW SECTION JS — CERTIFICATES LIGHTBOX
   Uses the existing gallery lightbox. Clicking a cert card opens
   its image (data-cert-img attribute) in the same lightbox overlay.
   ================================================================ */
(function () {
  var certCards = document.querySelectorAll('.cert-card');
  if (!certCards.length) return;

  certCards.forEach(function (card) {
    card.addEventListener('click', function () {
      var imgSrc = card.getAttribute('data-cert-img');
      if (!imgSrc || imgSrc === '') {
        /* No image set yet — skip lightbox */
        return;
      }
      /* Reuse existing gallery lightbox */
      var overlay = document.getElementById('lightboxOverlay');
      var img     = document.getElementById('lightboxImage');
      var caption = document.getElementById('lightboxCaption');
      if (overlay && img) {
        img.src = imgSrc;
        img.alt = card.querySelector('h4') ? card.querySelector('h4').textContent : 'Certificate';
        if (caption) caption.textContent = img.alt;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });

    /* Keyboard */
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
    });
  });
}());


/* ================================================================
   NEW SECTION JS — FAQ ACCORDION
   One item open at a time. Accessible (aria-expanded, aria-controls).
   ================================================================ */
(function () {
  var faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(function (item) {
    var btn    = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');

      /* Close all items */
      faqItems.forEach(function (fi) {
        fi.classList.remove('open');
        var fb = fi.querySelector('.faq-question');
        if (fb) fb.setAttribute('aria-expanded', 'false');
      });

      /* Open clicked item if it was closed */
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}());


/* ================================================================
   NEW SECTION JS — FEEDBACK FORM VALIDATION
   Validates required fields. Shows inline errors and a status banner.
   Ready for EmailJS integration — see data-emailjs-* attributes on
   the <form> element. Uncomment the EmailJS block below when ready.
   ================================================================ */
(function () {
  var form       = document.getElementById('feedbackForm');
  var statusEl   = document.getElementById('feedbackStatus');
  var submitBtn  = document.getElementById('feedbackSubmitBtn');

  if (!form) return;

  /* Helper: show/clear field error */
  function showError(fieldId, errorId, msg) {
    var field = document.getElementById(fieldId);
    var err   = document.getElementById(errorId);
    if (field) field.classList.toggle('error', !!msg);
    if (err)   err.textContent = msg || '';
  }

  function clearAllErrors() {
    ['feedback-name', 'feedback-email', 'feedback-subject', 'feedback-message'].forEach(function (id) {
      var f = document.getElementById(id);
      if (f) f.classList.remove('error');
    });
    ['error-name', 'error-email', 'error-subject', 'error-message'].forEach(function (id) {
      var e = document.getElementById(id);
      if (e) e.textContent = '';
    });
    if (statusEl) { statusEl.className = 'form-status'; statusEl.textContent = ''; }
  }

  /* Validate and return true if all OK */
  function validate() {
    var ok = true;
    var name    = document.getElementById('feedback-name');
    var email   = document.getElementById('feedback-email');
    var subject = document.getElementById('feedback-subject');
    var message = document.getElementById('feedback-message');

    if (!name || !name.value.trim()) {
      showError('feedback-name', 'error-name', 'Please enter your full name.');
      ok = false;
    }
    if (!email || !email.value.trim()) {
      showError('feedback-email', 'error-email', 'Please enter your email address.');
      ok = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      showError('feedback-email', 'error-email', 'Please enter a valid email address.');
      ok = false;
    }
    if (!subject || !subject.value.trim()) {
      showError('feedback-subject', 'error-subject', 'Please enter a subject.');
      ok = false;
    }
    if (!message || !message.value.trim()) {
      showError('feedback-message', 'error-message', 'Please write your message.');
      ok = false;
    }
    return ok;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearAllErrors();

    if (!validate()) return;

    /* -------------------------------------------------------
       EMAILJS INTEGRATION — Uncomment when ready:

       var serviceId   = form.getAttribute('data-emailjs-service');
       var templateId  = form.getAttribute('data-emailjs-template');
       var publicKey   = form.getAttribute('data-emailjs-public-key');

       submitBtn.disabled = true;
       submitBtn.querySelector('span').textContent = 'Sending...';

       emailjs.sendForm(serviceId, templateId, form, publicKey)
         .then(function () {
           statusEl.className  = 'form-status success';
           statusEl.textContent = '✓ Your message has been sent! We will get back to you soon.';
           form.reset();
         })
         .catch(function (err) {
           statusEl.className  = 'form-status error';
           statusEl.textContent = '✗ Something went wrong. Please try again or email us directly.';
           console.error('EmailJS error:', err);
         })
         .finally(function () {
           submitBtn.disabled = false;
           submitBtn.querySelector('span').textContent = 'Send Message';
         });
    ------------------------------------------------------- */

    /* Placeholder success response (remove when EmailJS is live) */
    if (statusEl) {
      statusEl.className  = 'form-status success';
      statusEl.textContent = '✓ Thank you! Your message has been received. We will respond within 2–3 working days.';
    }
    form.reset();
    if (submitBtn) submitBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  /* Clear field error on input */
  form.querySelectorAll('.form-control').forEach(function (input) {
    input.addEventListener('input', function () {
      input.classList.remove('error');
      var errId = 'error-' + input.id.replace('feedback-', '');
      var err = document.getElementById(errId);
      if (err) err.textContent = '';
    });
  });
}());
