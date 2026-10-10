# Research Project Website

Plain HTML/CSS/JS, so there is no build step. It works on Vercel and on the SLIIT course web (≈100 KB, far under the 20 MB limit).

## 1. Add your content (≈30 min)
Edit **only `js/data.js`**:
- Project name, tagline, abstract and the 4 component cards
- Domain: literature survey, research gap table, problem, objectives, methodology, technologies, references
- Milestones: date, marks and status (`completed` / `upcoming` / `pending`)
- Documents and presentations: paste Google Drive links (share as *Anyone with the link → Viewer*). If you leave a link as `""`, the site shows "Not available yet".
- Members, supervisors and contact details

Images:
- Put member photos in `assets/images/team/` (square, WebP/JPG, under 150 KB) and set `photo: "assets/images/team/name.webp"`. Without a photo, the person's initials are shown.
- Replace `assets/images/hero.svg` and `assets/images/architecture.svg` with your own images.

## 2. Preview locally
Open `index.html` in a browser, or run `python -m http.server` in this folder and go to http://localhost:8000.

## 3. Deploy to Vercel (free, stays live)
1. Create a GitHub repo and upload this folder's contents.
2. Go to vercel.com and sign in with GitHub.
3. Click **Add New → Project**, import the repo and click **Deploy** (Framework: *Other*, no build command).
4. Your live URL is `your-repo.vercel.app`. Every push to GitHub updates the site automatically.

## 4. Upload to the course web
Zip this folder (without `README.md` if you like) and upload it. `index.html` is the entry page.

## Features
- Sticky navbar with active-section highlight
- Mobile menu
- Ctrl+K search
- Domain tabs
- Milestone dropdown and timeline
- Document filter tabs
- Contact form (opens the visitor's email app)
- Copyable email template
- Back-to-top button
- Dark mode
