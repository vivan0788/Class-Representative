/**
 * Engineering Class Study Vault - script.js
 * Connected with Google Firebase Realtime Cloud Database
 */

// 1. Firebase Configuration (Aapke project ki exact keys)
const firebaseConfig = {
  apiKey: "AIzaSyDy54r8Wv4fTLUwMQqYCeqXd1cZiTrfcic",
  authDomain: "class-representative-1f3f3.firebaseapp.com",
  databaseURL: "https://class-representative-1f3f3-default-rtdb.firebaseio.com",
  projectId: "class-representative-1f3f3",
  storageBucket: "class-representative-1f3f3.firebasestorage.app",
  messagingSenderId: "211962177584",
  appId: "1:211962177584:web:a94c377ed840a98ac4ad85"
};

// Initialize Firebase App & Database Reference
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const resourcesRef = db.ref("study_resources");

// 2. Default Academic Resources Seed
const INITIAL_RESOURCES = [
  {
    subject: "Applied Mathematics-I",
    category: "Notes",
    title: "Unit 1: Differential Calculus & Curvature Detailed Notes",
    description: "Covers Rolle's Theorem, Mean Value Theorems, Maclaurin's & Taylor's Series, Radius of curvature, and Evolutes with solved derivations.",
    driveUrl: "https://drive.google.com/file/d/demo-maths-unit1/view",
    dateAdded: "2026-09-10"
  },
  {
    subject: "Applied Mathematics-I",
    category: "Tutorials",
    title: "Eigenvalues, Eigenvectors & Cayley-Hamilton Problem Sheet",
    description: "15 essential problems with step-by-step diagonalization procedure and characteristic polynomial derivations for end-term prep.",
    driveUrl: "https://drive.google.com/file/d/demo-maths-matrices/view",
    dateAdded: "2026-09-14"
  },
  {
    subject: "Applied Mathematics-I",
    category: "PYQs",
    title: "Applied Maths-I Semester End-Term PYQ Pack (2022-2025)",
    description: "Previous 3 years university question papers with marked weightage and answer keys for Unit 1 through Unit 5.",
    driveUrl: "https://drive.google.com/file/d/demo-maths-pyqs/view",
    dateAdded: "2026-09-18"
  },
  {
    subject: "Applied Chemistry",
    category: "Notes",
    title: "Water Technology, Hardness & Lime-Soda Process",
    description: "Numerical formulas for EDTA titration, Zeolite softening, reverse osmosis, and boiler problems (scale & sludge formation).",
    driveUrl: "https://drive.google.com/file/d/demo-chem-water/view",
    dateAdded: "2026-09-08"
  },
  {
    subject: "Applied Chemistry",
    category: "Lab Manuals/Images",
    title: "Complete Chemistry Lab Manual with Observation Tables",
    description: "Includes titration curves, conductometric titrations, viscosity index calculation tables, and setup photos.",
    driveUrl: "https://drive.google.com/file/d/demo-chem-lab/view",
    dateAdded: "2026-09-12"
  },
  {
    subject: "Applied Chemistry",
    category: "PYQs",
    title: "Applied Chemistry Mid-Term & Final PYQs with Solved Numericals",
    description: "Collection of spectroscopic analysis, polymer synthesis, and corrosion protection past examination questions.",
    driveUrl: "https://drive.google.com/file/d/demo-chem-pyqs/view",
    dateAdded: "2026-09-19"
  },
  {
    subject: "Fundamentals of Electronics Engineering",
    category: "Notes",
    title: "Semiconductor Diodes, Clipper/Clamper & Full-Wave Rectifiers",
    description: "P-N junction characteristics, Zener voltage regulator equations, and full ripple-factor derivation with circuit blueprints.",
    driveUrl: "https://drive.google.com/file/d/demo-electronics-notes/view",
    dateAdded: "2026-09-11"
  },
  {
    subject: "Fundamentals of Electronics Engineering",
    category: "Tutorials",
    title: "BJT Biasing & Op-Amp Circuit Analysis Solved Problems",
    description: "Inverting/Non-inverting Op-Amp circuits, virtual ground calculations, CE/CB transistor DC load line analysis sheets.",
    driveUrl: "https://drive.google.com/file/d/demo-electronics-tutorial/view",
    dateAdded: "2026-09-15"
  },
  {
    subject: "Fundamentals of Electronics Engineering",
    category: "Lab Manuals/Images",
    title: "Electronics Hardware Kit Circuit Diagrams & DSO Graphs",
    description: "High-resolution photos of breadboard wiring, cathode-ray/DSO waveforms for half-wave rectifiers, and verification logs.",
    driveUrl: "https://drive.google.com/file/d/demo-electronics-lab/view",
    dateAdded: "2026-09-20"
  },
  {
    subject: "Programming Languages",
    category: "Notes",
    title: "Pointers, Dynamic Memory Allocation & Structs in C/C++",
    description: "Memory layout diagram, stack vs heap, pointer arithmetic, malloc/free vs new/delete, and linked list foundations.",
    driveUrl: "https://drive.google.com/file/d/demo-prog-pointers/view",
    dateAdded: "2026-09-05"
  },
  {
    subject: "Programming Languages",
    category: "Tutorials",
    title: "100 DSA & Coding Logic Practice Questions with Test Cases",
    description: "Arrays, String manipulation, Recursion trace trees, Sorting algorithms, and algorithmic complexity (Big-O) exercises.",
    driveUrl: "https://drive.google.com/file/d/demo-prog-exercises/view",
    dateAdded: "2026-09-16"
  },
  {
    subject: "Programming Languages",
    category: "Lab Manuals/Images",
    title: "Semester Programming Lab Assignments Solutions & Output Screenshots",
    description: "Clean C/C++ source code for 20 mandatory lab assignments along with GCC terminal compilation logs and outputs.",
    driveUrl: "https://drive.google.com/file/d/demo-prog-lab/view",
    dateAdded: "2026-09-21"
  },
  {
    subject: "Artificial Intelligence and Prompt Engineering",
    category: "Notes",
    title: "Search Algorithms, Heuristics & Transformer Foundations",
    description: "A* search, minimax algorithm with alpha-beta pruning, self-attention mechanics, and generative model concepts.",
    driveUrl: "https://drive.google.com/file/d/demo-ai-notes/view",
    dateAdded: "2026-09-07"
  },
  {
    subject: "Artificial Intelligence and Prompt Engineering",
    category: "Tutorials",
    title: "Systematic Prompt Engineering: Few-Shot, CoT & ReAct Frameworks",
    description: "Hands-on guide to structured prompt templates, reducing hallucinations, JSON schema formatting, and chain-of-thought prompting.",
    driveUrl: "https://drive.google.com/file/d/demo-prompt-tutorial/view",
    dateAdded: "2026-09-17"
  },
  {
    subject: "Artificial Intelligence and Prompt Engineering",
    category: "Lab Manuals/Images",
    title: "Python AI & LLM API Integration Lab Notebooks (Jupyter)",
    description: "Jupyter notebooks implementing simple agents, vector similarity embeddings, and token-cost optimization benchmarks.",
    driveUrl: "https://drive.google.com/file/d/demo-ai-lab/view",
    dateAdded: "2026-09-22"
  },
  {
    subject: "Professional Communication and Technical Writing",
    category: "Notes",
    title: "Formal Engineering Proposals, Executive Summaries & SRS Formats",
    description: "Detailed style sheets for IEEE citation styles, technical project proposals, email diplomacy, and workplace ethics.",
    driveUrl: "https://drive.google.com/file/d/demo-comm-notes/view",
    dateAdded: "2026-09-09"
  },
  {
    subject: "Professional Communication and Technical Writing",
    category: "PYQs",
    title: "Technical Writing & Grammar Model Papers (Semester Exam)",
    description: "Solved case studies on barrier-free communication, active vs passive voice in technical papers, and resume drafting samples.",
    driveUrl: "https://drive.google.com/file/d/demo-comm-pyqs/view",
    dateAdded: "2026-09-13"
  }
];

const MASTER_ADMIN_PIN = "cr2026";

let state = {
  resources: [],
  selectedCategory: "All",
  selectedSubject: "All",
  searchQuery: "",
  isAdminLoggedIn: false
};

let dom = {};

function initDOM() {
  dom = {
    resourceGrid: document.getElementById("resourceGrid"),
    emptyState: document.getElementById("emptyState"),
    totalCount: document.getElementById("totalResourcesCount"),
    resultsCount: document.getElementById("resultsCount"),
    searchInput: document.getElementById("searchInput"),
    clearSearchBtn: document.getElementById("clearSearchBtn"),
    categoryFilters: document.getElementById("categoryFilters"),
    subjectSelect: document.getElementById("subjectSelectFilter"),
    resetFiltersBtn: document.getElementById("resetFiltersBtn"),

    openAdminBtn: document.getElementById("openAdminBtn"),
    authModal: document.getElementById("authModal"),
    authForm: document.getElementById("authForm"),
    adminPinInput: document.getElementById("adminPinInput"),
    authErrorMsg: document.getElementById("authErrorMsg"),
    adminDashboardModal: document.getElementById("adminDashboardModal"),
    adminLogoutBtn: document.getElementById("adminLogoutBtn"),

    addResourceForm: document.getElementById("addResourceForm"),
    adminManageList: document.getElementById("adminManageList"),
    adminTotalItems: document.getElementById("adminTotalItems"),
    downloadJsonBtn: document.getElementById("downloadJsonBtn"),
    copyCodeBtn: document.getElementById("copyCodeBtn"),
    resetDefaultBtn: document.getElementById("resetDefaultBtn"),
    jsonCodePreview: document.getElementById("jsonCodePreview"),
    toastContainer: document.getElementById("toastContainer")
  };
}

// Real-Time Cloud Listener
function setupFirebaseRealtimeSync() {
  resourcesRef.on("value", (snapshot) => {
    const data = snapshot.val();

    if (!data) {
      INITIAL_RESOURCES.forEach((res) => {
        resourcesRef.push(res);
      });
      return;
    }

    const list = [];
    Object.keys(data).forEach((key) => {
      list.push({
        id: key,
        ...data[key]
      });
    });

    state.resources = list.reverse();
    render();
    updateExportPreview();
  });
}

function initApp() {
  initDOM();
  setupEventListeners();
  setupFirebaseRealtimeSync();
}

function getFilteredResources() {
  return state.resources.filter(item => {
    const categoryMatch = (state.selectedCategory === "All") || 
      (state.selectedCategory === "Lab Manuals/Images" ? item.category.includes("Lab") : item.category === state.selectedCategory);

    const subjectMatch = (state.selectedSubject === "All") || (item.subject === state.selectedSubject);

    const query = state.searchQuery.trim().toLowerCase();
    const searchMatch = !query || 
      item.title.toLowerCase().includes(query) || 
      (item.description && item.description.toLowerCase().includes(query)) ||
      item.subject.toLowerCase().includes(query);

    return categoryMatch && subjectMatch && searchMatch;
  });
}

function render() {
  const filtered = getFilteredResources();

  if (dom.totalCount) dom.totalCount.textContent = state.resources.length;
  if (dom.resultsCount) dom.resultsCount.textContent = `Showing ${filtered.length} of ${state.resources.length} resources`;

  if (dom.clearSearchBtn) {
    dom.clearSearchBtn.classList.toggle("hidden", state.searchQuery.trim() === "");
  }

  const isFiltered = state.selectedCategory !== "All" || state.selectedSubject !== "All" || state.searchQuery.trim() !== "";
  if (dom.resetFiltersBtn) {
    dom.resetFiltersBtn.classList.toggle("hidden", !isFiltered);
  }

  if (dom.resourceGrid) {
    if (filtered.length === 0) {
      dom.resourceGrid.innerHTML = "";
      if (dom.emptyState) dom.emptyState.classList.remove("hidden");
    } else {
      if (dom.emptyState) dom.emptyState.classList.add("hidden");
      dom.resourceGrid.innerHTML = filtered.map(item => createCardHTML(item)).join("");
    }
  }

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
        <p class="card-desc">${escapeHtml(item.description || "No description provided.")}</p>
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

function renderAdminTable() {
  if (!dom.adminManageList) return;
  if (dom.adminTotalItems) dom.adminTotalItems.textContent = state.resources.length;

  if (state.resources.length === 0) {
    dom.adminManageList.innerHTML = `<tr><td colspan="4" style="text-align:center; color: var(--text-dim);">No resources found in Cloud.</td></tr>`;
    return;
  }

  dom.adminManageList.innerHTML = state.resources.map(item => `
    <tr>
      <td>
        <strong>${escapeHtml(item.title)}</strong>
        <div style="font-size:0.75rem; color:var(--text-dim);">${escapeHtml(item.subject)}</div>
      </td>
      <td>
        <span class="cat-badge ${getCategoryBadgeClass(item.category)}">${escapeHtml(item.category)}</span>
      </td>
      <td>
        <a href="${escapeHtml(item.driveUrl)}" target="_blank" rel="noopener noreferrer" style="color:#818cf8; text-decoration:none;">
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

// Delete item permanently from Firebase Cloud for everyone
window.deleteResource = function(id) {
  const item = state.resources.find(r => r.id === id);
  const confirmMsg = `Are you sure you want to permanently delete "${item ? item.title : 'this resource'}" from Cloud for everyone?`;

  if (confirm(confirmMsg)) {
    resourcesRef.child(id).remove()
      .then(() => {
        showToast("Deleted from Cloud for all students!", "success");
      })
      .catch((error) => {
        showToast("Error deleting: " + error.message, "error");
      });
  }
};

function updateExportPreview() {
  if (dom.jsonCodePreview) {
    dom.jsonCodePreview.textContent = JSON.stringify(state.resources, null, 2);
  }
}

function setupEventListeners() {
  // CR Admin Modal
  if (dom.openAdminBtn) {
    dom.openAdminBtn.addEventListener("click", () => {
      if (state.isAdminLoggedIn) {
        openModal(dom.adminDashboardModal);
        updateExportPreview();
      } else {
        openModal(dom.authModal);
        if (dom.adminPinInput) dom.adminPinInput.value = "";
        if (dom.authErrorMsg) dom.authErrorMsg.classList.add("hidden");
        setTimeout(() => dom.adminPinInput && dom.adminPinInput.focus(), 150);
      }
    });
  }

  // Admin PIN Auth
  if (dom.authForm) {
    dom.authForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const enteredPin = dom.adminPinInput ? dom.adminPinInput.value.trim() : "";

      if (enteredPin === MASTER_ADMIN_PIN) {
        state.isAdminLoggedIn = true;
        closeModal(dom.authModal);
        openModal(dom.adminDashboardModal);
        updateExportPreview();
        showToast("Welcome CR! Cloud access granted.", "success");
      } else {
        if (dom.authErrorMsg) dom.authErrorMsg.classList.remove("hidden");
        if (dom.adminPinInput) dom.adminPinInput.select();
      }
    });
  }

  // Logout
  if (dom.adminLogoutBtn) {
    dom.adminLogoutBtn.addEventListener("click", () => {
      state.isAdminLoggedIn = false;
      closeModal(dom.adminDashboardModal);
      showToast("Logged out of Admin Dashboard.", "success");
    });
  }

  // Search
  if (dom.searchInput) {
    dom.searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      render();
    });
  }

  if (dom.clearSearchBtn) {
    dom.clearSearchBtn.addEventListener("click", () => {
      if (dom.searchInput) dom.searchInput.value = "";
      state.searchQuery = "";
      render();
      if (dom.searchInput) dom.searchInput.focus();
    });
  }

  // Categories
  if (dom.categoryFilters) {
    dom.categoryFilters.addEventListener("click", (e) => {
      const pill = e.target.closest(".pill");
      if (!pill) return;

      dom.categoryFilters.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      state.selectedCategory = pill.dataset.category;
      render();
    });
  }

  // Subject
  if (dom.subjectSelect) {
    dom.subjectSelect.addEventListener("change", (e) => {
      state.selectedSubject = e.target.value;
      render();
    });
  }

  // Reset
  if (dom.resetFiltersBtn) {
    dom.resetFiltersBtn.addEventListener("click", () => {
      state.selectedCategory = "All";
      state.selectedSubject = "All";
      state.searchQuery = "";

      if (dom.searchInput) dom.searchInput.value = "";
      if (dom.subjectSelect) dom.subjectSelect.value = "All";
      if (dom.categoryFilters) {
        dom.categoryFilters.querySelectorAll(".pill").forEach(p => {
          p.classList.toggle("active", p.dataset.category === "All");
        });
      }

      render();
      showToast("All filters have been reset.", "success");
    });
  }

  // Add Resource to Firebase Cloud
  if (dom.addResourceForm) {
    dom.addResourceForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const subject = document.getElementById("resSubject").value;
      const category = document.getElementById("resCategory").value;
      const title = document.getElementById("resTitle").value.trim();
      const description = document.getElementById("resDesc").value.trim();
      const driveUrl = document.getElementById("resDriveUrl").value.trim();

      if (!driveUrl.startsWith("http://") && !driveUrl.startsWith("https://")) {
        showToast("Please enter a valid URL starting with https://", "error");
        return;
      }

      const newResource = {
        subject,
        category,
        title,
        description,
        driveUrl,
        dateAdded: new Date().toISOString().split("T")[0]
      };

      resourcesRef.push(newResource)
        .then(() => {
          dom.addResourceForm.reset();
          showToast("Uploaded to Cloud! Visible to all students immediately.", "success");
          switchAdminTab("manageResourcesTab");
        })
        .catch((error) => {
          showToast("Upload failed: " + error.message, "error");
        });
    });
  }

  // Tabs
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      switchAdminTab(btn.dataset.tab);
    });
  });

  // Export JSON
  if (dom.downloadJsonBtn) {
    dom.downloadJsonBtn.addEventListener("click", () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.resources, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `study_vault_cloud_${new Date().toISOString().split("T")[0]}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast("data.json downloaded.", "success");
    });
  }

  if (dom.copyCodeBtn) {
    dom.copyCodeBtn.addEventListener("click", () => {
      const code = JSON.stringify(state.resources, null, 2);
      navigator.clipboard.writeText(code).then(() => {
        showToast("Data array copied to clipboard!", "success");
      });
    });
  }

  if (dom.resetDefaultBtn) {
    dom.resetDefaultBtn.addEventListener("click", () => {
      if (confirm("Reset cloud database back to default sample data for all students?")) {
        resourcesRef.set(null).then(() => {
          INITIAL_RESOURCES.forEach((res) => {
            resourcesRef.push(res);
          });
          showToast("Cloud Database reset to initial factory data.", "success");
        });
      }
    });
  }

  // Modals
  document.querySelectorAll("[data-close]").forEach(el => {
    el.addEventListener("click", () => {
      const targetModal = document.getElementById(el.dataset.close);
      if (targetModal) closeModal(targetModal);
    });
  });

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      closeModal(e.target);
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (dom.authModal) closeModal(dom.authModal);
      if (dom.adminDashboardModal) closeModal(dom.adminDashboardModal);
    }
  });
}

function openModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove("active");
  document.body.style.overflow = "";
}

function switchAdminTab(targetTabId) {
  document.querySelectorAll(".tab-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.tab === targetTabId);
  });
  document.querySelectorAll(".tab-panel").forEach(panel => {
    panel.classList.toggle("active", panel.id === targetTabId);
  });
  if (targetTabId === "exportDataTab") {
    updateExportPreview();
  }
}

function showToast(message, type = "success") {
  if (!dom.toastContainer) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const icon = type === "success" 
    ? '<i class="fa-solid fa-circle-check"></i>' 
    : '<i class="fa-solid fa-circle-exclamation"></i>';

  toast.innerHTML = `${icon} <span>${escapeHtml(message)}</span>`;
  dom.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
