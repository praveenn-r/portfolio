# Praveen R Tippimani — Portfolio

A React + JavaScript (Vite) recreation of the portfolio design, built with plain CSS
(no Tailwind/UI kit dependency) and react-icons.

## Getting started

```bash
npm install
npm run dev       # start the Vite frontend
npm run server    # in a second terminal, start the Gemini chat API
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

Copy `.env.example` to `.env` and set `GEMINI_API_KEY` in `.env` before
starting the chat API. Keep `.env` private; it is excluded from Git.

## Project structure

```
src/
  components/       Navbar, Hero, Stats, About, TechStack, Projects, CTA
                     (each component ships with its own .css file)
  data/
    portfolioData.js  All editable content: name, bio, stats, tech stack,
                       projects, contact info, nav links
  index.css          Design tokens (colors, fonts, spacing) + base styles
  App.jsx            Assembles all sections
  main.jsx           React entry point
```

## Customizing

- **Your info / copy**: edit `src/data/portfolioData.js` — no need to touch
  any component to change name, email, links, stats, or project details.
- **Colors / fonts**: edit the CSS variables at the top of `src/index.css`.
- **Photo**: replace the placeholder block in `src/components/Hero.jsx`
  (`.hero__photo-placeholder`) with an `<img src="..." />` — drop your image
  in `src/assets/` and import it, or place it in `public/` and reference by path.
- **Project screenshots**: same idea in `src/components/Projects.jsx`
  (`.project-card__preview`).

## Notes

- Icons come from `react-icons` (Feather, Font Awesome, Simple Icons, Phosphor sets).
- Layout is fully responsive (stacks on tablet/mobile, hamburger nav below 900px).
- No backend — the contact section links to `mailto:` and the resume button
  points to `profile.resumeUrl` in `portfolioData.js` (add your PDF to `public/`
  and point the URL there, e.g. `/resume.pdf`).
