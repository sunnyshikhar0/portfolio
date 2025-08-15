# Portfolio — Sunny Shikhar

A developer portfolio built with React + Vite + styled-components showcasing real projects (driven by JSON data), light/dark theming, and a contact form powered by EmailJS.

## 🚀 Features
- Dynamic project listing from `src/data/projects.json`
- Featured projects section (first 3 by default)
- Light / Dark theme (CSS variables + persisted in localStorage)
- Responsive layout & accessible semantics
- Downloadable resume link
- Contact form using EmailJS (no server needed)
- Centralized skill list via `src/data/skillList.json`
- Clean component architecture and styled-components usage
- Framer Motion animations (hero + future extensibility)

## 🧱 Tech Stack
Frontend: React 19, Vite, styled-components, Framer Motion  
State / Patterns: React Router, React hooks, context (Theme)  
Styling: CSS variables, styled-components, responsive grid  
Forms: react-hook-form + EmailJS  
Tooling: ESLint (modern flat config), Vite build

## 📁 Folder Structure
```
src/
  components/
    Home.jsx
    About.jsx
    Projects.jsx
    ProjectCard.jsx
    Contact.jsx
  context/
    ThemeContext.jsx
  data/
    projects.json
    skillList.json
  pages/
    AppLayout.jsx
    Navbar.jsx
    Footer.jsx
  main.jsx
  App.jsx
  index.css
public/
  _redirects
  Sunny_Shikhar_ReactJs_Latest_Resume.pdf
  (images / favicon etc.)
```

## 🗂 Project Data (projects.json)
Each entry follows:
```json
{
  "title": "Cloudinary MERN Image Upload",
  "description": "A full-stack image upload and management app...",
  "tech": ["React", "Express", "MongoDB", "Cloudinary"],
  "link": "https://live-app-url",
  "github": "https://github.com/..."
}
```

## 🎨 Theming
- Variables declared in `src/index.css`
- Body `data-theme` toggled by `ThemeContext`
- Color tokens under both `:root` and `[data-theme="dark"]`
- Toggle button in `Navbar.jsx` (`🌙` / `☀️`)

## 🧪 Accessibility & UX
- Semantic headings (`h1`, `h2`)
- Buttons/links include `aria-label` where context may be ambiguous
- Focusable interactive elements only
- Responsive grid down to small mobile widths (cards stack, action buttons fill width)

## ✉ Contact Form (EmailJS)
Environment variables (create `.env`):
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
Then restart dev server if needed.

## 🧾 Scripts
```
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview build output
npm run lint      # Lint (ESLint)
```

## 📦 Performance
- Vite’s dev server + optimized production build
- Lightweight dependencies (no heavy UI library)
- Tree-shake friendly styled-components usage


## 📬 Contact
Feel free to reach out via the contact form or LinkedIn:
https://www.linkedin.com/in/sunny-shikhar-54972aba/
