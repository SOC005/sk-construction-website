/**
 * ==========================================================================
 * SK CONSTRUCTION — SERVICES DATA
 * ==========================================================================
 * 
 * Edit this file to add, modify, or disable services offered by SK Construction.
 */

const SERVICES_DATA = [
  {
    id: "new-house-construction",
    title: "New House Construction",
    category: "Residential",
    shortDescription: "Complete residential house construction from initial site layout to structural completion and final handover, executed strictly according to your architectural drawings and agreed scope.",
    fullDescription: "Building a new home is one of life's most significant investments. SK Construction manages the complete construction journey with meticulous planning, quality material sourcing, seasoned masons, and continuous on-site supervision. We focus on solid foundations, durable RCC frames, and precision execution to create a home that stands strong for generations.",
    highlights: [
      "Site demarcation, foundation & plinth beam execution",
      "Robust RCC column, beam, and slab casting",
      "First-grade brickwork and structural masonry",
      "Transparent material updates and scheduled milestone reviews"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    icon: "home"
  },
  {
    id: "residential-building-construction",
    title: "Residential Building Construction",
    category: "Residential",
    shortDescription: "Full-scale construction contracting for independent houses, duplex homes, and multi-unit residential structures with end-to-end site management.",
    fullDescription: "From independent luxury duplex villas to multi-storey private residential dwellings, we deliver tailored building construction tailored to site conditions and urban municipal guidelines in Chhattisgarh. Our 10+ years of local execution experience ensures smooth coordination, disciplined timelines, and structural reliability.",
    highlights: [
      "Independent family bungalows and modern duplexes",
      "Multi-level residential frame construction",
      "High load-bearing foundations engineered for regional soil",
      "Comprehensive site logistics and utility coordination"
    ],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    icon: "building"
  },
  {
    id: "structural-civil-work",
    title: "Structural & Civil Work",
    category: "Civil Engineering",
    shortDescription: "Specialized civil and structural construction work—including robust foundations, reinforced concrete frames, retaining walls, and precision masonry.",
    fullDescription: "Structural integrity is the backbone of every enduring building. SK Construction handles heavy civil works, structural retrofitting, deep footings, and RCC works following standard civil engineering practices. We prioritize high-grade cement, tested reinforcement steel, and proper curing protocols at every phase.",
    highlights: [
      "Footing, pile foundation & plinth beam construction",
      "RCC slab reinforcement and precision vibration compaction",
      "Load-bearing boundary walls, retaining walls & compound structures",
      "Strict curing compliance and quality material batching"
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80",
    icon: "hammer"
  },
  {
    id: "renovation-remodeling",
    title: "Renovation & Remodeling",
    category: "Improvement",
    shortDescription: "Structural modifications, vertical house expansions, room additions, and exterior facade remodeling for existing residential properties.",
    fullDescription: "Upgrade and modernize your current residence with thoughtful structural alterations. Whether you need to add an additional floor, reconfigure living areas, reinforce older masonry, or upgrade the elevation aesthetic, SK Construction applies its decade of residential experience to renovate safely without compromising structural stability.",
    highlights: [
      "Additional floor construction & vertical expansions",
      "Structural wall alterations, lintels, and beam reinforcements",
      "Modern exterior elevation revamps and parapet rebuilding",
      "Waterproofing treatments and structural crack restorations"
    ],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    icon: "wrench"
  },
  {
    id: "government-projects",
    title: "Government Construction Projects",
    category: "Institutional",
    shortDescription: "Civil and public works construction contracting for eligible government projects in Chhattisgarh, executed according to tender specifications and official standards.",
    fullDescription: "With proven capability in executing selected government civil projects, SK Construction participates in eligible public tenders and department contracts. We maintain strict compliance with public works department (PWD) specifications, material testing norms, and transparent project milestone reporting.",
    highlights: [
      "Execution strictly following departmental tender specifications",
      "Compliance with government safety and quality benchmarks",
      "Accurate measurement books, billing, and progress documentation",
      "Experienced on-site civil supervisory personnel"
    ],
    image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=1200&q=80",
    icon: "landmark"
  },
  {
    id: "finishing-interior-civil",
    title: "Finishing & Interior-Related Civil Work",
    category: "Finishing",
    shortDescription: "Essential finishing civil works including internal & external plastering, premium tile/marble flooring, precision paint applications, and waterproofing.",
    fullDescription: "The beauty and longevity of a home depends on the quality of its civil finishes. We provide smooth wall plastering, damp-proof waterproofing for roofs and bathrooms, durable flooring installations, and weather-resistant exterior protective coatings to ensure a refined finish.",
    highlights: [
      "Double-coat external plastering & smooth internal wall finishing",
      "Vitrified tile, granite, and marble floor laying",
      "Comprehensive terrace and wet-area waterproofing",
      "Premium exterior weather-shield painting & putty base works"
    ],
    image: "https://images.unsplash.com/photo-1581858779951-46d5c58ef69c?auto=format&fit=crop&w=1200&q=80",
    icon: "paint-roller"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SERVICES_DATA;
} else if (typeof window !== 'undefined') {
  window.SERVICES_DATA = SERVICES_DATA;
}
