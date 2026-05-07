# Personal Website Rebuild Plan

## Goal
Rebuild frankamalafronte.com from Gatsby 2 (2019) to Next.js 15 (App Router). The site is a personal portfolio for a Software Engineer in Test & AI Developer role.

## Current Stack (to be replaced)
- Gatsby 2.2.11 + React 16.8
- Bulma CSS + SCSS
- Deprecated: gatsby-image, node-sass, class components

## Target Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel (or Netlify)
- **Content:** resume.json as single source of truth for resume data

---

## Site Structure

### Pages
- `/` — Single-page portfolio (hero, about, projects, contact)
- `/resume` — Rendered resume view (pulls from resume.json)
- Project detail pages (optional — could consolidate to cards on homepage)

### Sections (homepage)
1. **Hero** — Name, title, tagline, CTA buttons (resume download, email)
2. **About** — Brief bio, updated tech stack summary
3. **AI Agent Work** — Highlight the Claude/AI work prominently (from resume.json)
4. **Projects** — Cards for DFS Charts, Settlers of Fullstack, Coding Books, Stack Timer
5. **Contact / Footer** — GitHub, LinkedIn, email

---

## Content Updates (from resume.json)

### Updated tagline
> "Software Engineer in Test & AI Developer — building Claude-powered agents and automation tools."

### Updated tech stack to feature
- Claude Code, LangChain, PyTorch, Agent Workflows
- Playwright, Selenium, WebdriverIO, Puppeteer
- React Native, React, TypeScript, Python

### AI Agent Work section (new, prominent)
Pull directly from `resume.json.aiAgentWork` array.

---

## Migration Checklist

### Phase 1: Setup
- [ ] `npx create-next-app@latest personal-website-next --typescript --tailwind --app`
- [ ] Copy resume.json into new project
- [ ] Set up project structure: `app/`, `components/`, `data/`

### Phase 2: Core Components
- [ ] Layout (header + footer)
- [ ] Navbar (sticky, minimal)
- [ ] Hero section
- [ ] AI Agent Work section (new)
- [ ] Projects section (cards)
- [ ] Resume page (renders resume.json)
- [ ] Contact / Footer

### Phase 3: Content
- [ ] Update bio/tagline to match 2026 resume
- [ ] Verify all project links (many Heroku links are dead)
- [ ] Add resume.json-driven resume page
- [ ] Add resume PDF download (link to Google Drive or host in /public)
- [ ] Update social links

### Phase 4: Polish
- [ ] Mobile responsive
- [ ] SEO metadata (Next.js Metadata API)
- [ ] Open Graph image
- [ ] Favicon
- [ ] Performance audit (Lighthouse)

### Phase 5: Deploy
- [ ] Deploy to Vercel
- [ ] Connect custom domain
- [ ] Redirect old routes if needed

---

## Notes
- Keep `resume.json` as the canonical source — update it whenever the resume changes
- The AI Agent Work section should be above Projects — it's the most differentiating content
- Project links to verify: DFS Charts, Settlers of Fullstack, Coding Books, Stack Timer (most Heroku free-tier links died Nov 2022)
- Color scheme: keep the teal accent (#22d0b2) or choose a new one
