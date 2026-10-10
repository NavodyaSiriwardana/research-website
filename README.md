<div align="center">

<img src="assets/images/idiary-logo-light-1040x840.webp" alt="IDiary logo" width="260" />

# IDiary – Intelligent Diary

**An intelligent diary that turns student diary data into explainable, evidence-based productivity insights.**

Final Year Research Project · Group **R26-IT-125** · Faculty of Computing · Sri Lanka Institute of Information Technology (SLIIT)

🌐 **Live website:** [your-project.vercel.app](https://your-project.vercel.app) <!-- TODO: replace with your Vercel link -->

</div>

---

## 📖 About the Project

University students record their tasks, activities and feelings every day, but most diary and productivity apps only **store** this data. They cannot tell a student *which task to do first and why*, *which habits really affect them*, *whether their self-reflection is accurate*, or *whether an AI summary of their week is true*.

**IDiary** solves this with four integrated AI research components. Students write structured diary entries and add tasks in one Flutter mobile app, and a shared FastAPI backend turns that data into explainable insights that link back to the student's own entries.

**Main objective:** to enhance campus student productivity by turning structured student diary data into explainable, evidence-based insights.

---

## 🧩 Research Components

| # | Component | Member | What it does |
|---|---|---|---|
| 1 | **Temporal Behavioural Pattern Discovery (HTGPS)** | Siriwardana N.N | Stores each student's diary as a personal knowledge graph in Neo4j, finds trigger → outcome patterns across entries, validates them with time order, Louvain community and FFT repetition checks, and links every pattern to its supporting entries. |
| 2 | **Self-Perception Bias Detection** | Rathnayake R.M | Compares what a student claims in the diary with verified evidence (app usage, GPS geofencing, facial stress signal) and uses XGBoost to give a bias type and a 0–100 Perception Accuracy Score. |
| 3 | **Explainable Task Prioritization & Productivity Intelligence** | Perera W.L.J.S | Predicts task cognitive load and energy, learns priorities from human-ranked student tasks with XGBRanker, explains them with SHAP, and builds a feasible daily plan with CP-SAT. |
| 4 | **Evidence-Grounded Diary Summary (RAG)** | Kavindi M.K.H | Creates weekly summaries with retrieval-augmented generation, links every point to the original entries, checks claim support with NLI, and gives feedback using local models. |

---

## 🏗️ System Architecture

<div align="center">
<img src="assets/images/idiary-architecture.png" alt="IDiary system architecture" width="100%" />
</div>

- **Presentation layer:** Flutter mobile app with Firebase Authentication
- **Application layer:** FastAPI (Python) backend serving all four components
- **Data layer:** Cloud Firestore, Neo4j AuraDB (personal knowledge graph) and ChromaDB (semantic index)

---

## 🛠️ Technologies

| Area | Technologies |
|---|---|
| Mobile app | Flutter, Dart, Kotlin, Google Maps SDK |
| Backend | Python, FastAPI, Uvicorn, Pydantic |
| Database & cloud | Neo4j AuraDB, Firebase Authentication, Cloud Firestore, ChromaDB |
| Machine learning | XGBoost / XGBRanker, scikit-learn, SHAP, Louvain, FFT, Google OR-Tools CP-SAT |
| NLP & LLM | Hugging Face Transformers, DistilBART, Sentence-Transformers (MiniLM), DeBERTa NLI, Phi-4 Mini, Llama 3.3 70B |
| Computer vision | MediaPipe, OpenCV, ViT facial-emotion model |

---

## 📅 Milestones

| Milestone | Date | Marks |
|---|---|---|
| Project Proposal | 17 March 2026 | 6% |
| Progress Presentation 1 | 12 May 2026 | 15% |
| Progress Presentation 2 | 1 September 2026 | 18% |
| Final Presentation & Viva | 20 October 2026 | 20% |

---

## 👥 Team

| Name | Student ID | Component |
|---|---|---|
| Siriwardana N.N | IT22298812 | Temporal Pattern Discovery (HTGPS) |
| Rathnayake R.M | IT22285492 | Self-Perception Bias Detection |
| Perera W.L.J.S | IT22283030 | Explainable Task Prioritization |
| Kavindi M.K.H | IT22265524 | Evidence-Grounded Summary (RAG) |

**Supervisor:** Ms. Geethanjali Wimalaratne  
**Co-supervisor:** Prof. Samantha Rajapaksha

---

## 🌐 About This Website

This repository contains the project website. It is built with **plain HTML, CSS and JavaScript**, so there is no build step, and the whole site is under 2 MB.

**Sections:** Home · Domain (literature survey, research gap, problem, objectives, requirements, methodology, technologies) · Milestones · Documents · Presentations · About Us · Contact Us · README

### Folder structure

```
research-website/
├── index.html            # Page layout (all sections)
├── readme.html           # Displays this README as a web page
├── README.md             # This file
├── vercel.json           # Vercel hosting settings
├── css/
│   └── style.css         # Design, colours, dark mode, mobile layout
├── js/
│   ├── data.js           # ★ ALL website content (edit this file)
│   ├── main.js           # Builds the page from data.js
│   └── marked.min.js     # Markdown renderer for readme.html
└── assets/images/
    ├── favicon.svg                        # Browser tab icon
    ├── idiary-logo-light-1040x840.webp    # Logo (light theme)
    ├── idiary-logo-dark-1040x840.webp     # Logo (dark theme)
    ├── idiary-architecture.svg / .png     # System architecture diagram
    └── team/                              # Member photos
```

### Run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>
   ```
2. Open the folder in **VS Code** and click **Go Live** (Live Server extension),
   or run:
   ```bash
   python -m http.server 8000
   ```
   and open <http://localhost:8000>.

### Update the content

All text, links, members and milestones are in **`js/data.js`**. Edit the values, save, and the site updates.
- **Documents & slides:** paste Google Drive links (shared as *Anyone with the link → Viewer*) into the `link` fields.
- **Member photos:** add square images to `assets/images/team/` and set `photo: "assets/images/team/name.jpg"`.

### Deploy

The site is hosted free on **Vercel**. Every push to the `main` branch redeploys it automatically.

```bash
git add .
git commit -m "Update website content"
git push
```

---

<div align="center">

© 2026 IDiary Research Team · SLIIT · Group R26-IT-125

</div>