# SK Construction — Premium Construction Company Website

A modern, high-end architectural and construction company website built for **SK Construction**, specializing in private residential house construction and selected government civil projects across **Chhattisgarh**.

---

## 🏛️ Website Architecture & Key Pages

The website is crafted with a clean, responsive architectural design system (deep charcoal, warm concrete slate, and refined construction gold accents):

- **[Home (index.html)](file:///c:/Users/VIKRAM/Desktop/skconstruction/index.html)**:
  - Sticky glassmorphism header with logo & wordmark
  - Hero section: *"Building Your Vision. Creating Your Future."* with 10+ Years experience badge and dual CTAs
  - Trust and experience strip (10+ Years Experience, Residential Construction, Government Projects, Quality-Focused Execution)
  - About SK Construction: *"Experience You Can Build On"*
  - 6 Core Construction Services with dedicated scope cards
  - Featured Projects Showcase: *"Built with Experience. Made to Last."* with live category filters, search, and full-screen lightbox
  - 6-Step Construction Process Timeline
  - 7 Core Differentiators ("Why Choose Us")
  - Authentic Client Trust & Reference request section (no fabricated testimonials)
  - Interactive Residential Construction Cost Estimator calculator
  - Direct WhatsApp & Phone consultation enquiry form
  - Persistent Floating Action Pill (Call & WhatsApp)
- **[About Us (about.html)](file:///c:/Users/VIKRAM/Desktop/skconstruction/about.html)**:
  - Decade-long civil execution story in Chhattisgarh
  - Engineering principles: soil-adapted footings, Fe-550D TMT rebar, 21-day curing routines, and structural integrity
- **[Services (services.html)](file:///c:/Users/VIKRAM/Desktop/skconstruction/services.html)**:
  - Technical breakdowns of all 6 services with scope checklists
  - Embedded Construction Cost Estimator widget
  - Pre-construction consultation FAQ
- **[Projects (projects.html)](file:///c:/Users/VIKRAM/Desktop/skconstruction/projects.html)**:
  - Complete filterable gallery (Residential Houses, Modern Homes, In Progress, Completed, Government Projects)
  - Live search filter by city or type
  - Image lightbox with next/prev/keyboard/touch navigation
  - Detailed project specification modal
- **[Contact (contact.html)](file:///c:/Users/VIKRAM/Desktop/skconstruction/contact.html)**:
  - Direct phone, WhatsApp, office address, and business hours
  - Interactive enquiry form with instant WhatsApp message formatting and local lead storage
  - Chhattisgarh coverage area tags (Raipur, Bhilai, Bilaspur, Rajnandgaon, Dhamtari, etc.)

---

## 📸 1. How to Replace Placeholder Images with Real Project Photos

All photography is centralized in clean, dedicated directories with an easy-to-edit JavaScript catalog:

### Step 1: Add your real photographs
Drop your photos into the appropriate folders:
- **Project Photos:** `public/images/projects/` (e.g., `villa-raipur-1.jpg`, `slab-casting.jpg`)
- **Hero Background:** `public/images/hero/`
- **Service Photos:** `public/images/services/`
- **Site/About Photos:** `public/images/about/`

### Step 2: Update the project catalog
Open **[`js/projects-data.js`](file:///c:/Users/VIKRAM/Desktop/skconstruction/js/projects-data.js)** in any text editor. Each project looks like this:

```javascript
{
  id: "project-1",
  title: "Contemporary 2-Storey Private Villa",
  category: "residential",          // Options: "residential", "modern-homes", "in-progress", "completed", "government"
  categoryLabel: "Residential Houses",
  location: "Raipur, Chhattisgarh",
  projectType: "Complete Turnkey House Construction",
  completionYear: "2024",           // If unknown, leave as null to automatically hide in the UI
  status: "Completed",              // Or "Under Construction"
  shortDescription: "A modern dual-level residential family house...",
  coverImage: "public/images/projects/your-photo-1.jpg", // Path to your main photo
  gallery: [
    {
      url: "public/images/projects/your-photo-1.jpg",
      caption: "Front elevation view"
    },
    {
      url: "public/images/projects/your-photo-2.jpg",
      caption: "Balcony profile and boundary wall"
    }
  ]
}
```

> **Tip:** You can add as many projects as you like by simply copying and pasting one of the blocks. Any field you leave blank or delete is automatically hidden without breaking the layout.

---

## ⚙️ 2. How to Update Phone Number, WhatsApp, Address & Services

You do **NOT** need to edit multiple HTML files! All contact information, office locations, and phone numbers are managed in **ONE central file**:

👉 Open **[`js/config.js`](file:///c:/Users/VIKRAM/Desktop/skconstruction/js/config.js)**:

```javascript
const SITE_CONFIG = {
  companyName: "SK Construction",
  
  contact: {
    primaryPhone: "+91 98765 43210",       // Display phone on website
    rawPhone: "919876543210",             // Digits only for click-to-call link
    whatsappNumber: "919876543210",       // WhatsApp number with country code (no '+' or spaces)
    email: "contact@skconstruction.in",   // Business email
    
    office: {
      addressLine1: "Civil Lines / Main Road",
      city: "Raipur",                     // Primary city
      state: "Chhattisgarh",
      pincode: "492001",
      fullAddress: "Main Road, Civil Lines, Raipur, Chhattisgarh 492001"
    },
    
    serviceAreas: [
      "Raipur",
      "Durg - Bhilai",
      "Bilaspur",
      "Rajnandgaon",
      "Across Chhattisgarh"
    ],
    
    hours: {
      days: "Monday – Saturday",
      time: "9:00 AM – 7:30 PM"
    }
  }
};
```

Whenever you save changes in `js/config.js`, **all 5 pages update their phone links, WhatsApp links, addresses, and working hours automatically!**

---

## 🚀 3. Simplest Reliable Deployment Methods

Since the website is built with clean, modern standard web technologies (HTML5, modern CSS3, ES modules), it requires **zero complex database configuration or server runtime**. You can publish it online in under 3 minutes using any of these free, ultra-fast hosting providers:

### Method A: Vercel (Recommended — Free & 1-Minute Setup)
1. Push this folder to a GitHub repository (e.g., `skconstruction`).
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New" > "Project"**, select your `skconstruction` repository.
4. Click **"Deploy"**. The site is instantly live with a free SSL certificate (`https://skconstruction.vercel.app`)!
5. Connect your custom domain (e.g. `skconstruction.in`) in Vercel's Project Settings > Domains.

### Method B: Netlify (Drag-and-Drop — No Coding Required)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Simply drag and drop this entire `skconstruction` folder into the browser window.
3. Your website is instantly online with a secure `https://...netlify.app` URL!

### Method C: GitHub Pages (Free Hosting)
1. Push the code to a GitHub repository.
2. In GitHub, go to **Settings > Pages**.
3. Under **Build and deployment**, select **Source: Deploy from a branch**, choose `main` branch and `/ (root)` folder, then click **Save**.
4. Your website is live at `https://<your-username>.github.io/skconstruction/`.

---

## 💻 Local Testing & Inspection

To run and preview the website on your computer:

```bash
# Option 1: Double click index.html
# Simply open 'index.html' directly in Chrome, Edge, Safari, or Firefox!

# Option 2: Python HTTP Server
python -m http.server 3000

# Then open in your browser:
http://localhost:3000
```
