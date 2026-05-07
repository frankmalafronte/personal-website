# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Production build + type check
npm run lint      # ESLint check
```

There are no tests in this project.

## Architecture

Single-page portfolio. All content is driven by `src/data/resume.json` — update that file to change any resume content on the site. The only exception is `src/components/Projects.tsx`, which holds a hardcoded `PROJECTS` array (YouTube video IDs are not yet in resume.json).

`src/app/page.tsx` is the sole route. It imports `resume.json` directly and passes slices down to each section component.

### Styling

- Global CSS variables (colors, spacing, typography) are defined in `src/app/globals.css` under `:root`.
- Each component has a co-located `ComponentName.module.css` file. Layout utility classes (`.container`, `.section-title`) are global and can be used in any component JSX.
- No Tailwind, no Sass. Dark-only design — there is no light mode.
- Accent color is `--accent: #22d0b2` (teal).

### Adding a YouTube video to a project

In `src/components/Projects.tsx`, change the `videoId` field from `'placeholder-*'` to the real YouTube video ID (the 11-character string after `?v=` in the URL). The component checks `isRealVideoId()` to decide whether to render an `<iframe>` or a placeholder card.

### Next.js version note

This project uses Next.js 16 (App Router). See `AGENTS.md` for important notes on API differences from older versions.
