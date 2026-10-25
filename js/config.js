/**
 * ==========================================================================
 * SK CONSTRUCTION — CENTRAL CONFIGURATION FILE
 * ==========================================================================
 * 
 * UPDATE THIS FILE to customize your contact details, service locations,
 * social links, and business metadata. All pages automatically reflect
 * the changes made here!
 */

const SITE_CONFIG = {
  // --- BRAND & BUSINESS BASICS ---
  companyName: "SK Construction",
  tagline: "Building Your Vision. Creating Your Future.",
  shortDescription: "With over 10 years of trusted experience, SK Construction specializes in high-quality private residential house construction and selected government civil works across Chhattisgarh.",
  experienceYears: "10+",
  
  // --- CONTACT & COMMUNICATION (EDIT HERE) ---
  // When ready, replace the placeholder numbers with your actual phone & WhatsApp numbers:
  contact: {
    primaryPhone: "+91 9685856215",       // Display format for phone
    rawPhone: "919876543210",             // Digits only for tel: link (with country code 91)
    whatsappNumber: "9685856215",       // WhatsApp number with country code (e.g., 91XXXXXXXXXX)
    email: "contact@skconstruction.in",   // Business email address
    
    // Physical Office Location (Configurable)
    office: {
      addressLine1: "Babakuti",
      addressLine2: "Kayaghat",
      city: "Raigarh",                     // Configurable primary city
      state: "Chhattisgarh",
      pincode: "496001",
      fullAddress: "Babakuti, Kayaghat, Raigarh, chhattisgarh"
    },
    
    // Service Coverage Areas in Chhattisgarh
    serviceAreas: [
      "Raigarh"
      "Across Chhattisgarh Depending On Contract"
    ],
    
    // Business Working Hours
    hours: {
      days: "Monday – Saturday",
      time: "9:00 AM – 7:30 PM",
      sunday: "By Prior Call"
    },
    
    // Google Maps Embed URL or Place URL (Editable)
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118990.22849045766!2d81.5670868!3d21.2513844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda23be28229%3A0x163ee1204ff9e240!2sRaipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsLink: "https://maps.google.com/?q=Raipur,+Chhattisgarh"
  },
  
  // --- PRE-POPULATED WHATSAPP MESSAGE TEMPLATES ---
  whatsapp: {
    defaultMessage: "Hello SK Construction, I am interested in discussing a residential house construction project in Chhattisgarh.",
    getConsultationMessage: (name, phone, location, projectType, budget, details) => {
      let msg = `*New Construction Enquiry — SK Construction*\n\n`;
      msg += `👤 *Client Name:* ${name}\n`;
      msg += `📞 *Phone:* ${phone}\n`;
      if (location) msg += `📍 *Location:* ${location}\n`;
      if (projectType) msg += `🏗️ *Project Type:* ${projectType}\n`;
      if (budget) msg += `💰 *Approx Budget:* ${budget}\n`;
      if (details) msg += `📝 *Requirements:* ${details}\n\n`;
      msg += `Sent via SK Construction Website.`;
      return encodeURIComponent(msg);
    }
  },

  // --- LOCAL SEO & METADATA ---
  seo: {
    siteUrl: "https://skconstruction.in",
    metaTitle: "SK Construction | Premium Residential & Government Construction in Chhattisgarh",
    metaDescription: "Over 10 years of trusted construction experience in Chhattisgarh. Specializing in private residential houses, modern villas, and selected government civil projects. Quality workmanship and transparent execution.",
    keywords: [
      "House construction contractor Chhattisgarh",
      "Residential construction company Raipur",
      "Home builders Chhattisgarh",
      "Civil contractor Bhilai Raipur Bilaspur",
      "House construction contractor Raipur",
      "Turnkey home construction Chhattisgarh",
      "Building contractors in Chhattisgarh"
    ]
  }
};

// Export for module systems or attach to window for static HTML browser execution
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
} else if (typeof window !== 'undefined') {
  window.SITE_CONFIG = SITE_CONFIG;
}
