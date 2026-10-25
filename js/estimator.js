/**
 * ==========================================================================
 * SK CONSTRUCTION — INTERACTIVE RESIDENTIAL COST ESTIMATOR
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initCostEstimator();
});

function initCostEstimator() {
  const areaSlider = document.getElementById('estimator-area-slider');
  const areaInput = document.getElementById('estimator-area-input');
  const tierOptions = document.querySelectorAll('.tier-option');
  const resultDisplay = document.getElementById('estimate-price-display');
  const rateDisplay = document.getElementById('estimate-rate-display');
  const areaDisplay = document.getElementById('estimate-area-display');
  const whatsappQuoteBtn = document.getElementById('btn-estimator-whatsapp');

  if (!areaSlider || !areaInput || !resultDisplay) return;

  let currentArea = parseInt(areaSlider.value, 10) || 1500;
  let currentRate = 1850; // Default: Premium tier
  let currentTierName = "Premium Quality";

  function calculateAndRender() {
    const totalEstimate = currentArea * currentRate;
    
    // Format to Indian Currency (Lakhs & Crores)
    let formattedEstimate = "";
    if (totalEstimate >= 10000000) {
      formattedEstimate = `₹ ${(totalEstimate / 10000000).toFixed(2)} Crores`;
    } else {
      formattedEstimate = `₹ ${(totalEstimate / 100000).toFixed(2)} Lakhs`;
    }

    resultDisplay.textContent = formattedEstimate;
    if (rateDisplay) rateDisplay.textContent = `₹ ${currentRate.toLocaleString('en-IN')} / sq.ft.`;
    if (areaDisplay) areaDisplay.textContent = `${currentArea.toLocaleString('en-IN')} sq.ft.`;

    // Update WhatsApp Button Link
    if (whatsappQuoteBtn && typeof SITE_CONFIG !== 'undefined') {
      const msg = `*Estimated House Construction Enquiry — SK Construction*\n\n` +
                  `📐 *Built-up Area:* ${currentArea.toLocaleString('en-IN')} sq.ft.\n` +
                  `⭐ *Specification Tier:* ${currentTierName} (@ ₹${currentRate}/sq.ft.)\n` +
                  `💰 *Estimated Budget Range:* ${formattedEstimate}\n` +
                  `📍 *Location:* Chhattisgarh\n\n` +
                  `Hello SK Construction, I used your website estimator and would like to request an on-site consultation and detailed BOQ proposal.`;
      
      whatsappQuoteBtn.href = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
      whatsappQuoteBtn.target = "_blank";
      whatsappQuoteBtn.rel = "noopener noreferrer";
    }
  }

  // Slider change
  areaSlider.addEventListener('input', (e) => {
    currentArea = parseInt(e.target.value, 10);
    areaInput.value = currentArea;
    calculateAndRender();
  });

  // Numeric input change
  areaInput.addEventListener('input', (e) => {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val)) val = 500;
    val = Math.max(500, Math.min(10000, val));
    currentArea = val;
    areaSlider.value = val;
    calculateAndRender();
  });

  // Tier selection
  tierOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      tierOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      currentRate = parseInt(opt.getAttribute('data-rate'), 10) || 1850;
      currentTierName = opt.getAttribute('data-tier-name') || "Standard";
      calculateAndRender();
    });
  });

  calculateAndRender();
}
