# Nireez Al Sweidan — Full Stack Web Developer Portfolio

A premium, editorial-style personal portfolio website for **Nireez Al Sweidan**, a Computer Science graduate and Full Stack Web Developer. The site is designed as a personal brand website — warm, bright, and distinctive — combining a professional developer portfolio with modern editorial design, hand-drawn doodles, abstract shapes, and subtle animations.

## Project Overview

The portfolio tells Nireez's story across nine connected sections — hero, about, journey timeline, toolkit, skills, experience, projects, value proposition, and contact — wrapped in a cohesive visual system of warm cream tones, terracotta and teal accents, a serif display typeface (Fraunces), and developer-themed details like code windows, browser mockups, and floating tech badges.

## Technologies

- **React 18** — component-based architecture
- **JavaScript (JSX)** — clean, readable components
- **Vite** — fast development and production builds
- **CSS** — hand-crafted design system with custom properties
- **React Hooks** — `useState`, `useEffect`, and `useRef`
- **IntersectionObserver** — scroll-reveal animations (custom, no animation library)
- **Google Fonts** — Fraunces (display), Inter (body), JetBrains Mono (code accents)

The only runtime dependencies are `react` and `react-dom` — no heavy animation or UI libraries.

## Features

- Fully responsive layout (mobile → tablet → desktop)
- Component-based, data-driven architecture
- Sticky navbar with background transition and animated mobile menu
- Scroll-reveal animations with `prefers-reduced-motion` support
- Editorial hero with a live code window, floating tech badges, and decorative doodles
- Alternating, hand-drawn timeline of the personal journey
- Marquee + bento grid technology showcase
- Skills section with custom SVG icons
- Résumé-style experience list
- Featured project showcase (StoreFlow) with an abstract POS dashboard mockup
- Supporting project cards with custom abstract previews
- "Why work with me" value cards
- Contact section with mailto-based action (no fake form)
- Social links (GitHub, LinkedIn, Email)
- Semantic HTML, accessible navigation, visible focus states
- SEO and Open Graph metadata

## Project Structure

```
src/
├── components/          Reusable UI pieces
│   ├── Navbar.jsx       Sticky nav + mobile menu
│   ├── Footer.jsx
│   ├── Reveal.jsx       IntersectionObserver scroll-reveal wrapper
│   ├── Doodles.jsx      Hand-drawn SVG decorative elements
│   ├── ProjectCard.jsx
│   ├── ProjectVisual.jsx  Abstract project previews + featured mockup
│   ├── SkillCard.jsx
│   ├── TechnologyBadge.jsx
│   ├── SectionTitle.jsx
│   └── SocialLinks.jsx
├── sections/            One file per page section
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Journey.jsx
│   ├── Technologies.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── HireMe.jsx
│   └── Contact.jsx
├── pages/
│   └── Home.jsx         Composes all sections
├── data/                Content lives in data files
│   ├── profile.js
│   ├── navigation.js
│   ├── journey.js
│   ├── technologies.js
│   ├── skills.js
│   ├── experience.js
│   ├── projects.js
│   └── reasons.js
├── styles/              Per-area CSS files imported in main.jsx
├── App.jsx
└── main.jsx
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens the Vite dev server (default `http://localhost:5173`).

## Production Build

```bash
npm run build
```

Outputs an optimized build to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Static HTML Preview

A fully self-contained, single-file preview of the finished design is included at:

```
preview/portfolio-preview.html
```

Open it directly in any browser (double-click the file). It contains the real rendered site — inline CSS and JavaScript — with no external asset files required, so it works even without a local server. Regenerate it after any change with:

```bash
npm run build
npm run build:preview
```

## Contact

- Email: `alsweidan.nireez7@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/nireez-al-sweidan`
- GitHub: `https://github.com/nireezalsweidan/`
