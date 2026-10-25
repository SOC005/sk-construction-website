/**
 * ==========================================================================
 * SK CONSTRUCTION — PROJECT GALLERY & LIGHTBOX MODULE
 * ==========================================================================
 */

let activeFilter = 'all';
let searchQuery = '';
let currentLightboxImages = [];
let currentLightboxIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  initProjectGallery();
  initLightboxEvents();
  initProjectModalEvents();
});

/**
 * Renders the project cards into the DOM
 */
function initProjectGallery() {
  const container = document.getElementById('projects-grid-container');
  if (!container || typeof PROJECTS_DATA === 'undefined') return;

  renderProjects();
  setupFilterTabs();
  setupSearchInput();
}

function renderProjects() {
  const container = document.getElementById('projects-grid-container');
  if (!container) return;

  const filtered = PROJECTS_DATA.filter(project => {
    const matchesCategory = (activeFilter === 'all') || (project.category === activeFilter);
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      project.title.toLowerCase().includes(q) || 
      project.location.toLowerCase().includes(q) || 
      project.shortDescription.toLowerCase().includes(q) ||
      project.categoryLabel.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--color-text-muted);">
        <p style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--color-text-primary);">No projects match your filter.</p>
        <p style="font-size: 0.9rem;">Try selecting another category or clear your search term.</p>
        <button class="btn btn-outline btn-sm" onclick="resetGalleryFilters()" style="margin-top: 1rem;">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(project => {
    const isUnderConstruction = project.status === "Under Construction";
    const photoCount = project.gallery ? project.gallery.length : 1;
    
    return `
      <article class="project-card" data-project-id="${project.id}">
        <div class="project-thumbnail" onclick="openProjectLightbox('${project.id}', 0)">
          <img src="${project.coverImage}" alt="${project.title}" loading="lazy" onerror="this.onerror=null; this.src='public/images/projects/${project.id}.svg';" />
          <div class="project-badges">
            <span class="badge-tag">${project.categoryLabel}</span>
            <span class="badge-status ${isUnderConstruction ? 'in-progress' : ''}">${project.status}</span>
          </div>
          <div class="photo-count-badge">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <span>${photoCount} Photos</span>
          </div>
        </div>
        <div class="project-body">
          <div class="project-meta-strip">
            <span>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              ${project.location}
            </span>
            ${project.completionYear ? `
              <span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                ${project.completionYear}
              </span>
            ` : ''}
          </div>
          <h3>${project.title}</h3>
          <p>${project.shortDescription}</p>
          <div class="project-actions">
            <button class="project-lightbox-btn" onclick="openProjectLightbox('${project.id}', 0)">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              View Photos
            </button>
            <button class="project-details-btn" onclick="openProjectModal('${project.id}')">
              Project Details
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function setupFilterTabs() {
  const tabs = document.querySelectorAll('.filter-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeFilter = tab.getAttribute('data-filter') || 'all';
      renderProjects();
    });
  });
}

function setupSearchInput() {
  const input = document.getElementById('gallery-search-input');
  if (!input) return;

  input.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProjects();
  });
}

window.resetGalleryFilters = function() {
  activeFilter = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('gallery-search-input');
  if (searchInput) searchInput.value = '';
  
  const tabs = document.querySelectorAll('.filter-btn');
  tabs.forEach(t => {
    if (t.getAttribute('data-filter') === 'all') t.classList.add('active');
    else t.classList.remove('active');
  });

  renderProjects();
};

/**
 * --------------------------------------------------------------------------
 * LIGHTBOX IMPLEMENTATION
 * --------------------------------------------------------------------------
 */
window.openProjectLightbox = function(projectId, photoIndex = 0) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  currentLightboxImages = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [{ url: project.coverImage, caption: project.title }];

  currentLightboxIndex = Math.max(0, Math.min(photoIndex, currentLightboxImages.length - 1));
  updateLightboxView();

  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

function updateLightboxView() {
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  const counter = document.getElementById('lightbox-counter');
  
  if (!img || currentLightboxImages.length === 0) return;

  const current = currentLightboxImages[currentLightboxIndex];
  img.src = current.url;
  img.alt = current.caption || "SK Construction Project View";
  if (caption) caption.textContent = current.caption || "";
  if (counter) counter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxImages.length}`;
}

window.prevLightboxImage = function() {
  if (currentLightboxImages.length <= 1) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
  updateLightboxView();
};

window.nextLightboxImage = function() {
  if (currentLightboxImages.length <= 1) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
  updateLightboxView();
};

window.closeLightbox = function() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

function initLightboxEvents() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('lightbox-content-wrapper')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevLightboxImage();
    if (e.key === 'ArrowRight') nextLightboxImage();
  });
}

/**
 * --------------------------------------------------------------------------
 * PROJECT DETAIL MODAL IMPLEMENTATION
 * --------------------------------------------------------------------------
 */
window.openProjectModal = function(projectId) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  const modal = document.getElementById('project-detail-modal');
  const body = document.getElementById('project-modal-body');
  if (!project || !modal || !body) return;

  body.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="badge-tag">${project.categoryLabel}</span>
      <h2 style="margin-top: 0.8rem; margin-bottom: 0.5rem; font-size: 1.8rem;">${project.title}</h2>
      <p style="color: var(--color-gold-light); font-size: 0.95rem; font-weight: 500;">
        📍 ${project.location} • 📅 ${project.completionYear || 'In Progress'} • ${project.status}
      </p>
    </div>

    <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.8rem; border: 1px solid var(--color-border);">
      <img src="${project.coverImage}" alt="${project.title}" style="width: 100%; max-height: 380px; object-fit: cover;" />
    </div>

    <div style="margin-bottom: 2rem;">
      <h4 style="color: var(--color-text-primary); margin-bottom: 0.6rem;">About This Project</h4>
      <p style="color: var(--color-text-secondary); line-height: 1.7;">${project.fullDescription || project.shortDescription}</p>
    </div>

    ${project.scopeOfWork && project.scopeOfWork.length > 0 ? `
      <div style="margin-bottom: 2rem;">
        <h4 style="color: var(--color-text-primary); margin-bottom: 0.8rem;">Construction Scope & Execution Highlights</h4>
        <ul style="display: flex; flex-direction: column; gap: 0.6rem;">
          ${project.scopeOfWork.map(item => `
            <li style="display: flex; align-items: flex-start; gap: 0.6rem; color: var(--color-text-muted); font-size: 0.92rem;">
              <span style="color: var(--color-gold); font-size: 1.1rem; line-height: 1;">✓</span>
              <span>${item}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    ` : ''}

    ${project.gallery && project.gallery.length > 1 ? `
      <div style="margin-bottom: 2.2rem;">
        <h4 style="color: var(--color-text-primary); margin-bottom: 0.8rem;">Project Photography Gallery</h4>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem;">
          ${project.gallery.map((img, idx) => `
            <div style="cursor: pointer; border-radius: var(--radius-sm); overflow: hidden; height: 90px; border: 1px solid var(--color-border);" onclick="closeProjectModal(); openProjectLightbox('${project.id}', ${idx});">
              <img src="${img.url}" alt="${img.caption}" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; padding-top: 1.5rem; border-top: 1px solid var(--color-border);">
      <a href="https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(`Hello SK Construction, I am interested in building a house similar to your project: "${project.title}" in ${project.location}.`)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
        <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.586 1.761.884 2.791.884h.005c3.179 0 5.766-2.587 5.767-5.766.001-3.18-2.585-5.77-5.772-5.77zm0-2.172c4.418 0 8 3.582 8 8 0 4.418-3.582 8-8 8-1.42 0-2.75-.37-3.904-1.019L2 21l2.05-5.968C3.385 13.864 3 12.482 3 11.001c0-4.419 3.582-8 8.031-8.001z"/></svg>
        Discuss Similar Project on WhatsApp
      </a>
      <button class="btn btn-outline" onclick="closeProjectModal()">Close</button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeProjectModal = function() {
  const modal = document.getElementById('project-detail-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

function initProjectModalEvents() {
  const modal = document.getElementById('project-detail-modal');
  if (!modal) return;

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProjectModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeProjectModal();
    }
  });
}
