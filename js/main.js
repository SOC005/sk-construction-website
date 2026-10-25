/**
 * ==========================================================================
 * SK CONSTRUCTION — MAIN APPLICATION LOGIC & UI BEHAVIORS
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initSiteConfigData();
  initStickyHeader();
  initMobileNavigation();
  initDynamicYear();
  initFloatingActionPill();
  highlightActiveNavLink();
});

/**
 * Injects values from SITE_CONFIG into DOM elements with data-config attributes
 */
function initSiteConfigData() {
  if (typeof SITE_CONFIG === 'undefined') return;

  // Update dynamic text elements
  document.querySelectorAll('[data-config-text]').forEach(el => {
    const key = el.getAttribute('data-config-text');
    const val = getNestedValue(SITE_CONFIG, key);
    if (val !== undefined && val !== null) {
      el.textContent = val;
    }
  });

  // Update phone links (tel:)
  document.querySelectorAll('[data-config-phone-link]').forEach(el => {
    el.href = `tel:+${SITE_CONFIG.contact.rawPhone}`;
  });

  // Update WhatsApp links
  document.querySelectorAll('[data-config-whatsapp-link]').forEach(el => {
    const customMsg = el.getAttribute('data-whatsapp-msg') || SITE_CONFIG.whatsapp.defaultMessage;
    el.href = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(customMsg)}`;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });

  // Update email links
  document.querySelectorAll('[data-config-email-link]').forEach(el => {
    el.href = `mailto:${SITE_CONFIG.contact.email}`;
  });

  // Update Maps link
  document.querySelectorAll('[data-config-maps-link]').forEach(el => {
    el.href = SITE_CONFIG.contact.googleMapsLink;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

/**
 * Sticky Header on Scroll
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile Navigation Drawer
 */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const closeBtn = document.querySelector('.mobile-drawer-close');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const drawer = document.querySelector('.mobile-drawer');
  const links = document.querySelectorAll('.mobile-drawer-link');

  if (!toggleBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  links.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/**
 * Active Nav Link Highlighter based on current path
 */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  document.querySelectorAll('.nav-link, .mobile-drawer-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Normalize comparison
    const linkPath = href.split('/').pop();
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Dynamic Current Year in Footer
 */
function initDynamicYear() {
  const yearEls = document.querySelectorAll('.current-year');
  const year = new Date().getFullYear();
  yearEls.forEach(el => el.textContent = year);
}

/**
 * Floating Action Pill behaviors
 */
function initFloatingActionPill() {
  const pill = document.querySelector('.floating-actions-pill');
  const contactSection = document.getElementById('contact');
  if (!pill || !contactSection) return;

  // Hide floating pill when near the actual contact form so it doesn't overlap inputs
  window.addEventListener('scroll', () => {
    const rect = contactSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      pill.style.opacity = '0';
      pill.style.pointerEvents = 'none';
    } else {
      pill.style.opacity = '1';
      pill.style.pointerEvents = 'all';
    }
  }, { passive: true });
}
