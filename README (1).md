# 🎓 CR Study Vault (Class-Representative Portal)

A centralized, responsive, and lightweight academic resource portal built for the Engineering Batch. This platform allows students to easily search, filter, and access lecture notes, tutorial sheets, lab manuals, and previous year questions (PYQs) via direct Google Drive links.

🔗 **Live Demo:** [https://class-representative.vercel.app](https://class-representative.vercel.app)

---

## ✨ Features

- **Resource Categorization:** Filter materials by type (Notes, Tutorials, Lab Manuals/Images, PYQs).
- **Subject-wise Filtering:** Filter resources by specific core engineering subjects.
- **Instant Search:** Dynamic search bar to find materials by topic, unit, or keyword (e.g., *Calculus*, *Op-Amp*, *Prompting*).
- **Direct Access:** Quick "Open / Download" links connecting directly to organized Google Drive storage.
- **CR Admin Panel:** Protected portal access for the Class Representative to manage batch resources.
- **Client-Side Architecture:** Fast, decentralized, lightweight client-side setup.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic structure and interface layout.
- **CSS3:** Modern dark-mode UI, glassmorphism accents, and responsive layout.
- **JavaScript (ES6+):** Dynamic DOM rendering, instant search, and category filtering.
- **Deployment:** Vercel & GitHub Pages.

---

## 📂 Project Structure

```text
Class-Representative/
├── index.html       # Main landing page & UI layout
├── style.css        # Styling, dark mode theme & responsive design
├── script.js        # Search, filter logic & resource handling
└── README.md        # Project documentation
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/vivan0708/Class-Representative.git
cd Class-Representative
```

### 2. Run Locally
Simply open `index.html` in any web browser, or launch it with the **Live Server** extension in VS Code.

---

## 🔐 Admin Configuration

The portal includes an administrative section reserved for the Class Representative:
- Admin actions are authenticated using a client-side PIN check managed in `script.js`.
- Resources can be updated or added directly inside the resource dataset in `script.js`.

---

## 🤝 Contributing

Contributions, feedback, and study material suggestions are always welcome!
1. Fork the project
2. Create your feature branch (`git checkout -b feature/NewResource`)
3. Commit your changes (`git commit -m 'Add new subject notes'`)
4. Push to the branch (`git push origin feature/NewResource`)
5. Open a Pull Request

---

## 👤 Author

- **Avinash Sahani** ([@vivan0708](https://github.com/vivan0708))