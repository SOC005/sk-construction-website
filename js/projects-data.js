/**
 * ==========================================================================
 * SK CONSTRUCTION — PROJECTS DATA & GALLERY CATALOG
 * ==========================================================================
 * 
 * HOW TO ADD OR REPLACE PROJECTS:
 * 1. Place your new project photographs in: /public/images/projects/ (or use direct URLs)
 * 2. Add an entry to the PROJECTS_DATA array below with your project's details.
 * 3. Any field left blank (e.g., completionYear: null) is automatically hidden in the UI!
 * 4. The categories can be: "residential", "modern-homes", "in-progress", "completed", "government".
 */

const PROJECTS_DATA = [
  {
    id: "project-1",
    title: "Contemporary 2-Storey Private Villa",
    category: "residential",
    categoryLabel: "Residential Houses",
    location: "Raipur, Chhattisgarh",
    projectType: "Complete Turnkey House Construction",
    completionYear: "2024",
    status: "Completed",
    shortDescription: "A modern dual-level residential family house featuring an engineered RCC frame, cantilevered balconies, custom exterior louvers, and spacious ventilated interiors.",
    fullDescription: "Constructed with high-strength Portland pozzolana cement and Fe-550 TMT rebar, this residential home exemplifies SK Construction's commitment to clean geometry, solid structural casting, and premium weather-resistant facade plastering.",
    scopeOfWork: [
      "RCC footing, plinth, columns, and cantilevered slab casting",
      "Red clay brickwork with damp-proof chemical membrane",
      "Concealed electrical and plumbing piping integration",
      "Double-coat external plaster with textured acrylic weather finish"
    ],
    // Primary cover photograph:
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    // Gallery of multiple high-res photographs:
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        caption: "Front elevation view showing contemporary lines and balcony profile"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
        caption: "Living space with natural lighting and smooth plaster finish"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
        caption: "Side perspective displaying structural depth and boundary wall"
      }
    ]
  },
  {
    id: "project-2",
    title: "Modern Minimalist Duplex Home",
    category: "modern-homes",
    categoryLabel: "Modern Homes",
    location: "Bhilai, Chhattisgarh",
    projectType: "Residential Building Construction",
    completionYear: "2023",
    status: "Completed",
    shortDescription: "Sleek architectural lines, floor-to-ceiling window apertures, and expansive open-plan living designed for a contemporary urban family.",
    fullDescription: "Constructed under strict supervision with specialized formwork for clean concrete lines. The home integrates an energy-efficient thermal mass design, terrace heat-proofing, and durable Italian marble civil base work.",
    scopeOfWork: [
      "Heavy load-bearing foundation and grade-beam system",
      "Precision shuttering and vibration-compacted RCC slabs",
      "Internal acoustic wall partition civil work",
      "Terrace waterproofing and rainwater drainage channels"
    ],
    coverImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
        caption: "Exterior facade featuring warm lighting and modern geometric volumes"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
        caption: "Courtyard and open garden integration"
      }
    ]
  },
  {
    id: "project-3",
    title: "RCC Frame & Masonry Structure Underway",
    category: "in-progress",
    categoryLabel: "Construction in Progress",
    location: "Bilaspur, Chhattisgarh",
    projectType: "New House Construction",
    completionYear: "2025",
    status: "Under Construction",
    shortDescription: "Active residential construction site showcasing column reinforcement, shuttering inspection, and high-accuracy brickwork currently under execution.",
    fullDescription: "This ongoing residential project showcases our uncompromising quality standards in foundation casting, column reinforcement checks, and water-curing routines. Real-time photographic updates are shared weekly with the property owner.",
    scopeOfWork: [
      "Substructure excavation and anti-termite chemical treatment",
      "Steel rebar tying strictly according to structural engineer drawings",
      "Machine-mixed M25 concrete casting with calibrated slump tests",
      "21-day continuous pond-curing and wet burlap wrapping"
    ],
    coverImage: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1400&q=85",
        caption: "First-floor slab shuttering and reinforcement inspection"
      },
      {
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
        caption: "Precision brick masonry and lintel beam installation"
      }
    ]
  },
  {
    id: "project-4",
    title: "Selected Government Civil & Infrastructure Work",
    category: "government",
    categoryLabel: "Government Projects",
    location: "Chhattisgarh",
    projectType: "Government Civil Contracting",
    completionYear: "2023",
    status: "Completed",
    shortDescription: "Civil and structural execution for designated public department contracts adhering strictly to PWD specifications, scheduled milestones, and material testing norms.",
    fullDescription: "SK Construction has successfully delivered selected government civil works in Chhattisgarh. The projects demand uncompromising compliance with official tender guidelines, third-party lab cube testing, and meticulous measurement documentation.",
    scopeOfWork: [
      "Rigorous adherence to PWD standard specifications & schedule of rates",
      "Certified material testing for cement, sand, aggregates, and steel",
      "On-time stage-wise inspections with department executive engineers",
      "Proper handover protocols with zero audit discrepancies"
    ],
    coverImage: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=1400&q=85",
        caption: "Government civil site construction and reinforced paving"
      },
      {
        url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
        caption: "Public sector boundary infrastructure and structural concrete walls"
      }
    ]
  },
  {
    id: "project-5",
    title: "Classic Multi-Generation Family Residence",
    category: "completed",
    categoryLabel: "Completed Projects",
    location: "Rajnandgaon, Chhattisgarh",
    projectType: "Turnkey Residential Construction",
    completionYear: "2022",
    status: "Completed",
    shortDescription: "A spacious 3,200 sq.ft. private residence built with robust civil construction, custom elevation features, and enduring Indian masonry craftsmanship.",
    fullDescription: "Built for a joint family seeking longevity and spacious community living. Features high ceilings, cross-ventilation corridors, termite-resistant plinth barriers, and custom terrace pergolas.",
    scopeOfWork: [
      "Soil bearing capacity testing and customized isolated footings",
      "Heavy load-bearing columns and seismic-resistant tie beams",
      "Complete sanitary, water tank, and septic civil engineering",
      "Turnkey internal and external plastering and finishing"
    ],
    coverImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85",
        caption: "Completed multi-generation residence facade"
      },
      {
        url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=85",
        caption: "Terrace pergola and parapet finishing"
      }
    ]
  },
  {
    id: "project-6",
    title: "Urban Residential Bungalow Elevation",
    category: "modern-homes",
    categoryLabel: "Modern Homes",
    location: "Raipur, Chhattisgarh",
    projectType: "Elevation & Civil Remodeling",
    completionYear: "2024",
    status: "Completed",
    shortDescription: "Contemporary front elevation remodeling featuring architectural grooves, stone cladding civil accents, and weather-shield acrylic finishing.",
    fullDescription: "An aesthetic transformation of an existing house into a contemporary architectural statement without disturbing structural columns, executed with zero disruption to the residents.",
    scopeOfWork: [
      "Precision scaffolding and structural safety barriers",
      "CNC-cut elevation support framing and civil backing",
      "Specialized textured stone finish and micro-concrete plastering",
      "Energy-efficient facade spotlight civil conduit integration"
    ],
    coverImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
        caption: "Modern bungalow elevation with stone cladding accents"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PROJECTS_DATA;
} else if (typeof window !== 'undefined') {
  window.PROJECTS_DATA = PROJECTS_DATA;
}
