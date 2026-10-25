/**
 * ==========================================================================
 * SK CONSTRUCTION — CONTACT & ENQUIRY FORM HANDLER
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
});

function initContactForm() {
  const form = document.getElementById('construction-enquiry-form');
  if (!form) return;

  const nameInput = document.getElementById('client-name');
  const phoneInput = document.getElementById('client-phone');
  const locationInput = document.getElementById('project-location');
  const typeSelect = document.getElementById('project-type');
  const budgetSelect = document.getElementById('approx-budget');
  const requirementsInput = document.getElementById('project-requirements');
  const emailInput = document.getElementById('client-email');

  const whatsappDirectBtn = document.getElementById('btn-whatsapp-direct');
  const formSuccessCard = document.getElementById('form-success-card');

  // Direct WhatsApp Button: reads current inputs and opens WhatsApp immediately
  if (whatsappDirectBtn) {
    whatsappDirectBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = nameInput.value.trim() || "Prospective Client";
      const phone = phoneInput.value.trim() || "Not specified";
      const location = locationInput.value.trim();
      const projectType = typeSelect.value;
      const budget = budgetSelect.value;
      const details = requirementsInput.value.trim();

      const encodedMsg = SITE_CONFIG.whatsapp.getConsultationMessage(
        name, phone, location, projectType, budget, details
      );

      window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodedMsg}`, '_blank');
    });
  }

  // Standard Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Please enter your full name');
      isValid = false;
    } else {
      clearError(nameInput);
    }

    // Validate Phone (10-digit Indian standard)
    const cleanPhone = phoneInput.value.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      showError(phoneInput, 'Please provide a valid 10-digit contact number');
      isValid = false;
    } else {
      clearError(phoneInput);
    }

    // Validate Location
    if (!locationInput.value.trim()) {
      showError(locationInput, 'Please specify your project city or location in Chhattisgarh');
      isValid = false;
    } else {
      clearError(locationInput);
    }

    if (!isValid) return;

    // Build Enquiry Payload
    const enquiry = {
      id: 'ENQ-' + Date.now(),
      date: new Date().toISOString(),
      name: nameInput.value.trim(),
      phone: phoneInput.value.trim(),
      email: emailInput ? emailInput.value.trim() : '',
      location: locationInput.value.trim(),
      projectType: typeSelect.value,
      budget: budgetSelect.value,
      requirements: requirementsInput.value.trim()
    };

    // Store in localStorage for fail-safe persistence
    saveEnquiryLocally(enquiry);

    // Show Confirmation Feedback Card
    if (formSuccessCard) {
      formSuccessCard.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 1rem;">
          <div style="width: 40px; height: 40px; background: rgba(16, 185, 129, 0.2); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #10B981;">
            ✓
          </div>
          <div style="flex-grow: 1;">
            <h4 style="color: #FFFFFF; margin-bottom: 0.35rem; font-size: 1.15rem;">Thank You, ${enquiry.name}!</h4>
            <p style="color: var(--color-text-secondary); font-size: 0.92rem; margin-bottom: 1rem;">
              Your project enquiry has been logged successfully. For the fastest response, click below to forward this summary directly to our WhatsApp.
            </p>
            <div style="display: flex; gap: 0.8rem; flex-wrap: wrap;">
              <a href="https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${SITE_CONFIG.whatsapp.getConsultationMessage(enquiry.name, enquiry.phone, enquiry.location, enquiry.projectType, enquiry.budget, enquiry.requirements)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
                Open in WhatsApp Now
              </a>
              <a href="tel:+${SITE_CONFIG.contact.rawPhone}" class="btn btn-outline btn-sm">
                Call Us Directly
              </a>
            </div>
          </div>
        </div>
      `;
      formSuccessCard.classList.add('active');
      form.reset();
    }
  });

  function showError(inputEl, msg) {
    inputEl.classList.add('error');
    const errEl = inputEl.parentElement.querySelector('.form-error-msg');
    if (errEl) {
      errEl.textContent = msg;
      errEl.classList.add('active');
    }
  }

  function clearError(inputEl) {
    inputEl.classList.remove('error');
    const errEl = inputEl.parentElement.querySelector('.form-error-msg');
    if (errEl) {
      errEl.classList.remove('active');
    }
  }
}

function saveEnquiryLocally(enquiry) {
  try {
    const existing = JSON.parse(localStorage.getItem('sk_construction_enquiries') || '[]');
    existing.unshift(enquiry);
    localStorage.setItem('sk_construction_enquiries', JSON.stringify(existing.slice(0, 50)));
  } catch (err) {
    console.warn('Local storage write skipped:', err);
  }
}
