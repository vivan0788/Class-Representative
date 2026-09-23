/**
 * Engineering Class Study Vault - Frontend Controller
 * Complete Vanilla JavaScript Implementation
 */

// ============================================================================
// 1. Initial Mock Dataset (6 Core Subjects with Real Academic Structure)
// ============================================================================
const INITIAL_RESOURCES = [
  // 1. Applied Mathematics-I
  {
    id: "mth-001",
    subject: "Applied Mathematics-I",
    category: "Notes",
    title: "Unit 1: Differential Calculus & Curvature Detailed Notes",
    description: "Covers Rolle's Theorem, Mean Value Theorems, Maclaurin's & Taylor's Series, Radius of curvature, and Evolutes with solved derivations.",
    driveUrl: "https://drive.google.com/file/d/demo-maths-unit1/view",
    dateAdded: "2026-09-10"
  },
  {
    id: "mth-002",
    subject: "Applied Mathematics-I",
    category: "Tutorials",
    title: "Eigenvalues, Eigenvectors & Cayley-Hamilton Problem Sheet",
    description: "15 essential problems with step-by-step diagonalization procedure and characteristic polynomial derivations for end-term prep.",
    driveUrl: "https://drive.google.com/file/d/demo-maths-matrices/view",
    dateAdded: "2026-09-14"
  },
  {
    id: "mth-003",
    subject: "Applied Mathematics-I",
    category: "PYQs",
    title: "Applied Maths-I Semester End-Term PYQ Pack (2022-2025)",
    description: "Previous 3 years university question papers with marked weightage and answer keys for Unit 1 through Unit 5.",
    driveUrl: "https://drive.google.com/file/d/demo-maths-pyqs/view",
    dateAdded: "2026-09-18"
  },

  // 2. Applied Chemistry
  {
    id: "chm-001",
    subject: "Applied Chemistry",
    category: "Notes",
    title: "Water Technology, Hardness & Lime-Soda Process",
    description: "Numerical formulas for EDTA titration, Zeolite softening, reverse osmosis, and boiler problems (scale & sludge formation).",
    driveUrl: "https://drive.google.com/file/d/demo-chem-water/view",
    dateAdded: "2026-09-08"
  },
  {
    id: "chm-002",
    subject: "Applied Chemistry",
    category: "Lab Manuals/Images",
    title: "Complete Chemistry Lab Manual with Observation Tables",
    description: "Includes titration curves, conductometric titrations, viscosity index calculation tables, and setup photos.",
    driveUrl: "https://drive.google.com/file/d/demo-chem-lab/view",
    dateAdded: "2026-09-12"
  },
  {
    id: "chm-003",
    subject: "Applied Chemistry",
    category: "PYQs",
    title: "Applied Chemistry Mid-Term & Final PYQs with Solved Numericals",
    description: "Collection of spectroscopic analysis, polymer synthesis, and corrosion protection past examination questions.",
    driveUrl: "https://drive.google.com/file/d/demo-chem-pyqs/view",
    dateAdded: "2026-09-19"
  },

  // 3. Fundamentals of Electronics Engineering
  {
    id: "ele-001",
    subject: "Fundamentals of Electronics Engineering",
    category: "Notes",
    title: "Semiconductor Diodes, Clipper/Clamper & Full-Wave Rectifiers",
    description: "P-N junction characteristics, Zener voltage regulator equations, and full ripple-factor derivation with circuit blueprints.",
    driveUrl: "https://drive.google.com/file/d/demo-electronics-notes/view",
    dateAdded: "2026-09-11"
  },
  {
    id: "ele-002",
    subject: "Fundamentals of Electronics Engineering",
    category: "Tutorials",
    title: "BJT Biasing & Op-Amp Circuit Analysis Solved Problems",
    description: "Inverting/Non-inverting Op-Amp circuits, virtual ground calculations, CE/CB transistor DC load line analysis sheets.",
    driveUrl: "https://drive.google.com/file/d/demo-electronics-tutorial/view",
    dateAdded: "2026-09-15"
  },
  {
    id: "ele-003",
    subject: "Fundamentals of Electronics Engineering",
    category: "Lab Manuals/Images",
    title: "Electronics Hardware Kit Circuit Diagrams & DSO Graphs",
    description: "High-resolution photos of breadboard wiring, cathode-ray/DSO waveforms for half-wave rectifiers, and verification logs.",
    driveUrl: "https://drive.google.com/file/d/demo-electronics-lab/view",
    dateAdded: "2026-09-20"
  },

  // 4. Programming Languages
  {
    id: "prg-001",
    subject: "Programming Languages",
    category: "Notes",
    title: "Pointers, Dynamic Memory Allocation & Structs in C/C++",
    description: "Memory layout diagram, stack vs heap, pointer arithmetic, malloc/free vs new/delete, and linked list foundations.",
    driveUrl: "https://drive.google.com/file/d/demo-prog-pointers/view",
    dateAdded: "2026-09-05"
  },
  {
    id: "prg-002",
    subject: "Programming Languages",
    category: "Tutorials",
    title: "100 DSA & Coding Logic Practice Questions with Test Cases",
    description: "Arrays, String manipulation, Recursion trace trees, Sorting algorithms, and algorithmic complexity (Big-O) exercises.",
    driveUrl: "https://drive.google.com/file/d/demo-prog-exercises/view",
    dateAdded: "2026-09-16"
  },
  {
    id: "prg-003",
    subject: "Programming Languages",
    category: "Lab Manuals/Images",
    title: "Semester Programming Lab Assignments Solutions & Output Screenshots",
    description: "Clean C/C++ source code for 20 mandatory lab assignments along with GCC terminal compilation logs and outputs.",
    driveUrl: "https://drive.google.com/file/d/demo-prog-lab/view",
    dateAdded: "2026-09-21"
  },

  // 5. Artificial Intelligence and Prompt Engineering
  {
    id: "aip-001",
    subject: "Artificial Intelligence and Prompt Engineering",
    category: "Notes",
    title: "Search Algorithms, Heuristics & Transformer Foundations",
    description: "A* search, minimax algorithm with alpha-beta pruning, self-attention mechanics, and generative model concepts.",
    driveUrl: "https://drive.google.com/file/d/demo-ai-notes/view",
    dateAdded: "2026-09-07"
  },
  {
    id: "aip-002",
    subject: "Artificial Intelligence and Prompt Engineering",
    category: "Tutorials",
    title: "Systematic Prompt Engineering: Few-Shot, CoT & ReAct Frameworks",
    description: "Hands-on guide to structured prompt templates, reducing hallucinations, JSON schema formatting, and chain-of-thought prompting.",
    driveUrl: "https://drive.google.com/file/d/demo-prompt-tutorial/view",
    dateAdded: "2026-09-17"
  },
  {
    id: "aip-003",
    subject: "Artificial Intelligence and Prompt Engineering",
    category: "Lab Manuals/Images",
    title: "Python AI & LLM API Integration Lab Notebooks (Jupyter)",
    description: "Jupyter notebooks implementing simple agents, vector similarity embeddings, and token-cost optimization benchmarks.",
    driveUrl: "https://drive.google.com/file/d/demo-ai-lab/view",
    dateAdded: "2026-09-22"
  },

  // 6. Professional Communication and Technical Writing
  {
    id: "eng-001",
    subject: "Professional Communication and Technical Writing",
    category: "Notes",
    title: "Formal Engineering Proposals, Executive Summaries & SRS Formats",
    description: "Detailed style sheets for IEEE citation styles, technical project proposals, email diplomacy, and workplace ethics.",
    driveUrl: "https://drive.google.com/file/d/demo-comm-notes/view",
    dateAdded: "2026-09-09"
  },
  {
    id: "eng-002",
    subject: "Professional Communication and Technical Writing",
    category: "PYQs",
    title: "Technical Writing & Grammar Model Papers (Semester Exam)",
    description: "Solved case studies on barrier-free communication, active vs passive voice in technical papers, and resume drafting samples.",
    driveUrl: "https://drive.google.com/file/d/demo-comm-pyqs/view",
    dateAdded: "2026-09-13"
  }
];

// Master Authentication PIN for Class Representative
const MASTER_ADMIN_PIN = "cr2026";
const STORAGE_KEY = "cr_vault_resources_v1";

// ============================================================================
// 2. State Management
// ============================================================================
let state = {
  resources: [],
  selectedCategory: "All",
  selectedSubject: "All",
  searchQuery: "",
  isAdminLoggedIn: false
};

// ============================================================================
// 3. DOM Elements Cache
// ============================================================================
const dom = {
  // Portal Display
  resourceGrid: document.getElementById("resourceGrid"),
  emptyState: document.getElementById("emptyState"),
  totalCount: document.getElementById("totalResourcesCount"),
  resultsCount: document.getElementById("resultsCount"),
  searchInput: document.getElementById("searchInput"),
  clearSearchBtn: document.getElementById("clearSearchBtn"),
  categoryFilters: document.getElementById("categoryFilters"),
  subjectSelect: document.getElementById("subjectSelectFilter"),
  resetFiltersBtn: document.getElementById("resetFiltersBtn"),

  // Modals & Triggers
  openAdminBtn: document.getElementById("openAdminBtn"),
  authModal: document.getElementById("authModal"),
  authForm: document.getElementById("authForm"),
  adminPinInput: document.getElementById("adminPinInput"),
  authErrorMsg: document.getElementById("authErrorMsg"),
  adminDashboardModal: document.getElementById("adminDashboardModal"),
  adminLogoutBtn: document.getElementById("adminLogoutBtn"),

  // Admin Dashboard Tabs & Forms
  addResourceForm: document.getElementById("addResourceForm"),
  adminManageList: document.getElementById("adminManageList"),
  adminTotalItems: document.getElementById("adminTotalItems"),
  downloadJsonBtn: document.getElementById("downloadJsonBtn"),
  copyCodeBtn: document.getElementById("copyCodeBtn"),
  resetDefaultBtn: document.getElementById("resetDefaultBtn"),
  jsonCodePreview: document.getElementById("jsonCodePreview"),

  // Toast Container
  toastContainer: document.getElementById("toastContainer")
};

// ============================================================================
// 4. Initialization & LocalStorage Engine
// ============================================================================
function initApp() {
  loadData();
  setupEventListeners();
  render();
}

function loadData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      state.resources = JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse localStorage data. Resetting to mock data.", e);
      state.resources = [...INITIAL_RESOURCES];
      saveData();
    }
  } else {
    state.resources = [...INITIAL_RESOURCES];
    saveData();
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.resources));
  updateExportPreview();
}

// ============================================================================
// 5. Filtering & Rendering Logic
// ============================================================================
function getFilteredResources() {
  return state.resources.filter(item => {
    // Category match
    const categoryMatch = (state.selectedCategory === "All") || 
      (state.selectedCategory === "Lab Manuals/Images" ? item.category.includes("Lab") : item.category === state.selectedCategory);

    // Subject match
    const subjectMatch = (state.selectedSubject === "All") || (item.subject === state.selectedSubject);

    // Keyword Search match (Title, description, or subject)
    const query = state.searchQuery.trim().toLowerCase();
    const searchMatch = !query || 
      item.title.toLowerCase().includes(query) || 
      item.description.toLowerCase().includes(query) ||
      item.subject.toLowerCase().includes(query);

    return categoryMatch && subjectMatch && searchMatch;
  });
}

function render() {
  const filtered = getFilteredResources();

  // Update counters
  dom.totalCount.textContent = state.resources.length;
  dom.resultsCount.textContent = `Showing ${filtered.length} of ${state.resources.length} resources`;

  // Toggle Clear & Reset buttons
  if (state.searchQuery.trim() !== "") {
    dom.clearSearchBtn.classList.remove("hidden");
  } else {
    dom.clearSearchBtn.classList.add("hidden");
  }

  const isFiltered = state.selectedCategory !== "All" || state.selectedSubject !== "All" || state.searchQuery.trim() !== "";
  if (isFiltered) {
    dom.resetFiltersBtn.classList.remove("hidden");
  } else {
    dom.resetFiltersBtn.classList.add("hidden");
  }

  // Render Grid Cards
  if (filtered.length === 0) {
    dom.resourceGrid.innerHTML = "";
    dom.emptyState.classList.remove("hidden");
  } else {
    dom.emptyState.classList.add("hidden");
    dom.resourceGrid.innerHTML = filtered.map(item => createCardHTML(item)).join("");
  }

  // Update Admin Management Table if open
  renderAdminTable();
}

function getCategoryBadgeClass(category) {
  if (category.includes("Notes")) return "Notes";
  if (category.includes("Tutorial")) return "Tutorials";
  if (category.includes("Lab")) return "Lab";
  if (category.includes("PYQ")) return "PYQs";
  return "Notes";
}

function getCategoryIcon(category) {
  if (category.includes("Notes")) return "fa-book-open";
  if (category.includes("Tutorial")) return "fa-laptop-code";
  if (category.includes("Lab")) return "fa-flask";
  if (category.includes("PYQ")) return "fa-clock-rotate-left";
  return "fa-file";
}

function createCardHTML(item) {
  const catClass = getCategoryBadgeClass(item.category);
  const catIcon = getCategoryIcon(item.category);

  return `
    <article class="card">
      <div>
        <div class="card-top">
          <span class="subject-badge" title="${escapeHtml(item.subject)}">
            <i class="fa-solid fa-graduation-cap"></i> ${escapeHtml(item.subject)}
          </span>
          <span class="cat-badge ${catClass}">
            <i class="fa-solid ${catIcon}"></i> ${escapeHtml(item.category)}
          </span>
        </div>
        <h2 class="card-title">${escapeHtml(item.title)}</h2>
        <p class="card-desc">${escapeHtml(item.description || "No description provided for this academic resource.")}</p>
      </div>

      <div class="card-footer">
        <div class="date-meta">
          <i class="fa-regular fa-calendar-check"></i>
          <span>${item.dateAdded || "Recent"}</span>
        </div>
        <a href="${escapeHtml(item.driveUrl)}" target="_blank" rel="noopener noreferrer" class="btn-drive">
          <i class="fa-brands fa-google-drive"></i> Open / Download
        </a>
      </div>
    </article>
  `;
}

// ============================================================================
// 6. Admin Panel Management
// ============================================================================
function renderAdminTable() {
  dom.adminTotalItems.textContent = state.resources.length;
  
  if (state.resources.length === 0) {
    dom.adminManageList.innerHTML = `<tr><td colspan="4" style="text-align:center; color: var(--text-dim);">No resources stored yet.</td></tr>`;
    return;
  }

  dom.adminManageList.innerHTML = state.resources.map((item, index) => `
    <tr>
      <td>
        <strong>${escapeHtml(item.title)}</strong>
        <div style="font-size:0.75rem; color:var(--text-dim);">${escapeHtml(item.subject)}</div>
      </td>
      <td>
        <span class="cat-badge ${getCategoryBadgeClass(item.category)}">${escapeHtml(item.category)}</span>
      </td>
      <td>
        <a href="${escapeHtml(item.driveUrl)}" target="_blank" style="color:#818cf8; text-decoration:none;">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Open
        </a>
      </td>
      <td style="text-align: right;">
        <button class="btn btn-outline-danger btn-sm" onclick="deleteResource('${item.id}')" title="Delete Resource">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </tr>
  `).join("");
}

// Accessible globally for the inline onclick handler
window.deleteResource = function(id) {
  const item = state.resources.find(r => r.id === id);
  const confirmMsg = `Are you sure you want to remove "${item ? item.title : 'this resource'}"?`;
  
  if (confirm(confirmMsg)) {
    state.resources = state.resources.filter(r => r.id !== id);
    saveData();
    render();
    showToast("Resource successfully removed.", "success");
  }
};

function updateExportPreview() {
  if (dom.jsonCodePreview) {
    dom.jsonCodePreview.textContent = JSON.stringify(state.resources, null, 2);
  }
}

// ============================================================================
// 7. Event Listeners Hub
// ============================================================================
function setupEventListeners() {
  
  // Real-time Keyword Search
  dom.searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    render();
  });

  // Clear Search Field
  dom.clearSearchBtn.addEventListener("click", () => {
    dom.searchInput.value = "";
    state.searchQuery = "";
    render();
    dom.searchInput.focus();
  });

  // Category Pill Filter Tabs
  dom.categoryFilters.addEventListener("click", (e) => {
    const pill = e.target.closest(".pill");
    if (!pill) return;

    dom.categoryFilters.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
    pill.classList.add("active");

    state.selectedCategory = pill.dataset.category;
    render();
  });

  // Subject Dropdown Filter
  dom.subjectSelect.addEventListener("change", (e) => {
    state.selectedSubject = e.target.value;
    render();
  });

  // Reset Filters Button
  dom.resetFiltersBtn.addEventListener("click", () => {
    state.selectedCategory = "All";
    state.selectedSubject = "All";
    state.searchQuery = "";
    
    dom.searchInput.value = "";
    dom.subjectSelect.value = "All";
    dom.categoryFilters.querySelectorAll(".pill").forEach(p => {
      p.classList.toggle("active", p.dataset.category === "All");
    });

    render();
    showToast("All filters have been reset.", "success");
  });

  // Open Admin Authentication / Dashboard
  dom.openAdminBtn.addEventListener("click", () => {
    if (state.isAdminLoggedIn) {
      openModal(dom.adminDashboardModal);
      updateExportPreview();
    } else {
      openModal(dom.authModal);
      dom.adminPinInput.value = "";
      dom.authErrorMsg.classList.add("hidden");
      setTimeout(() => dom.adminPinInput.focus(), 150);
    }
  });

  // Admin PIN Auth Form Submission
  dom.authForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const enteredPin = dom.adminPinInput.value.trim();

    if (enteredPin === MASTER_ADMIN_PIN) {
      state.isAdminLoggedIn = true;
      closeModal(dom.authModal);
      openModal(dom.adminDashboardModal);
      updateExportPreview();
      showToast("Access Granted! Welcome, Class Representative.", "success");
    } else {
      dom.authErrorMsg.classList.remove("hidden");
      dom.adminPinInput.select();
    }
  });

  // Admin Logout
  dom.adminLogoutBtn.addEventListener("click", () => {
    state.isAdminLoggedIn = false;
    closeModal(dom.adminDashboardModal);
    showToast("Logged out of CR Admin Dashboard.", "success");
  });

  // Add Resource Form Submission
  dom.addResourceForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const subject = document.getElementById("resSubject").value;
    const category = document.getElementById("resCategory").value;
    const title = document.getElementById("resTitle").value.trim();
    const description = document.getElementById("resDesc").value.trim();
    const driveUrl = document.getElementById("resDriveUrl").value.trim();

    // Simple URL validation
    if (!driveUrl.startsWith("http://") && !driveUrl.startsWith("https://")) {
      showToast("Please enter a valid Google Drive URL starting with https://", "error");
      return;
    }

    const newResource = {
      id: "cr-" + Date.now().toString(36) + Math.random().toString(36).substring(2, 5),
      subject,
      category,
      title,
      description,
      driveUrl,
      dateAdded: new Date().toISOString().split("T")[0]
    };

    // Prepend to top
    state.resources.unsh