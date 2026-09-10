# Pratik Modi — 3D Isometric Room Portfolio

An interactive 3D portfolio website for **Pratik Modi** (Software Engineer Intern & Data Analyst | SQL, Python, Business Intelligence)

---

## 🌟 Key Features

- **3D Isometric Room Experience**: Built with Three.js and high-performance WebGL rendering.
- **Scroll-Linked Camera Choreography**: Smoothly moves through the 3D room, focusing on workspace elements as you scroll down through sections.
- **Interactive Day / Night Mode**: Toggle in the top-right corner dynamically modulates lighting, shadows, colors, and desk lamp effects.
- **Modern Cyber Sapphire & Tech Slate Theme**: High-contrast, clean color palette designed for a software engineer & data analyst profile.
- **Modern Tech Typography**: Distinctive **Space Grotesk** and **Outfit** headings paired with readable **Montserrat** sans-serif font for technical content and resume bullets.
- **Zero Emojis**: Clean, professional software engineer presentation with sleek typographic bullets and badges.
- **Dedicated Sections**:
  - **Hero**: Welcoming greeting (*"hi i am pratik"* on loading screen, *"Welcome to my 3D space"*), personal branding, and *PORTFOLIO* tag.
  - **Section 01: About Me & Skills Matrix**: Professional summary, education (B.Tech IT, MGM University, CGPA 7.9), and comprehensive technical skills breakdown across Languages, Data & BI, Databases, Tools & Platforms, and Soft Skills.
  - **Section 02: Featured Projects**: E-Commerce Data Analyst (Python & MySQL) & Green Hash Transparent Waste Management System (Supabase & PostgreSQL).
  - **Section 03: Professional Experience & Honors**: Dedicated experience at **Yardi Systems India** and **The Startup Mentor**, followed by high-contrast **Honors & Key Achievements** (2× State-Level Hackathon Winner, TEDx MGMU Organizer, GDSC Technical Committee, Academic Distinction).
  - **Section 04: Contact**: Direct links to Email, Phone, Location, [LinkedIn](https://www.linkedin.com/in/pratik-modi-11ba02283), and [GitHub](https://github.com/PratikModi22).
  - **Section 05: Finally**: Closing note, credentials badges, and copyright.

---

## 🚀 How to Run & Preview Locally

### Option 1: One-Click Windows Launcher
Double-click `run_portfolio.bat` in this folder. It will start the local server on `http://localhost:3000`.

### Option 2: Command Line (Python)
Run:
```bash
python serve.py
```
Then open your browser and navigate to:
```
http://localhost:3000
```

---

## 🌐 Deploy to GitHub Pages

A `.nojekyll` file is included in the root directory so GitHub Pages serves `_assets` and `_resources` without 404 errors.

### Step 1: Set Up Remote & Push Code
Configure your GitHub repository:
```bash
git remote set-url origin https://github.com/PratikModi22/pratikmodi22.github.io.git
git add .
git commit -m "Update portfolio for Pratik Modi"
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository settings on GitHub:
   `https://github.com/PratikModi22/pratikmodi22.github.io/settings/pages`
2. Under **Build and deployment > Source**, select **Deploy from a branch**.
3. Under **Branch**, select `main` and folder `/(root)`.
4. Click **Save**.

Your portfolio will be live at:
👉 **`https://pratikmodi22.github.io/`**

---

## ✏️ How to Update or Edit Content

All portfolio text, links, projects, and experiences are centralized in:
`portfolio.config.json`

To change any information:
1. Open `portfolio.config.json` in your editor.
2. Edit any field (projects, skills, links, phone, email, bio).
3. Run the compiler script:
   ```bash
   python update_content.py
   ```
4. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
