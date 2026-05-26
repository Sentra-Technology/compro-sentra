# Claude Code Handoff — Sentra Technology Website

## TL;DR
Convert the React + Babel **prototype** in `.ref/Website.html` into a production website (Next.js or Vite + React recommended). The current file is a **single‑page, in‑browser Babel build** — fine for design review, not for production. Reuse all the **content, layout, CSS, and component logic**; replace the build/runtime layer.

---

## What to IMPLEMENT (sources of truth)

These are the files that define the production website. Read them carefully and port them 1:1.

### Entry point
- **`.ref/Website.html`** — the canonical, current design. Mirrors the `<App>` composition, section order, and bootstrap effects (scroll progress bar, mouse‑follow gradient, reveal‑on‑scroll observer). Port the `App()` body into your root layout/page component.

### Styles
- **`.ref/website.css`** — full stylesheet (~4300 lines). All design tokens (CSS variables), section styles, animations, responsive rules. **Copy this verbatim** into your app's global stylesheet. Do not refactor into CSS modules unless requested — class names are referenced across many JSX files.
- Fonts come from Google Fonts (Inter, Space Grotesk, JetBrains Mono). Keep the `<link>` tags or use `next/font` equivalents.

### Components (all under `.ref/components/`)
Port each `.jsx` file to a real React component file (`.tsx` or `.jsx`). They currently rely on **implicit globals** (Babel in‑browser puts every top‑level `function` on `window`). When porting:
- Add explicit `import React from "react"` at the top of each file.
- Add explicit `export` for each component, `import` it where it's consumed.
- Replace shared globals from `primitives.jsx` (`SentraLogo`, `Icon`, etc.) with named exports.

Component file list and what they render:

| File | Components | Used in |
|---|---|---|
| `.ref/components/primitives.jsx` | `SentraLogo`, `Icon` set | shared by everything |
| `.ref/components/web-nav-hero.jsx` | `Nav`, `Hero` | top of page |
| `.ref/components/web-clients.jsx` | `ClientLogos` | logo strip |
| `.ref/components/web-about-services.jsx` | `About`, `AboutVisual`, `AboutValues`, `AboutHeadVisuals`, `AboutStats`, `Services` | about + services sections |
| `.ref/components/web-cctv.jsx` | `CCTV`, `CCTVPreview` | flagship CCTV section |
| `.ref/components/web-product-previews.jsx` | product preview cards | used inside products |
| `.ref/components/web-products.jsx` | `ProductShowcase`, `Portfolio` | product carousel + portfolio grid |
| `.ref/components/web-partnerships.jsx` | `Partnership` | brand/partner logos |
| `.ref/components/web-team-projects.jsx` | `Team`, `TeamBlock`, `FAQ` | team + accordion FAQ |
| `.ref/components/web-contact-footer.jsx` | `Contact`, `Footer` | contact form + footer |
| `.ref/components/web-whatsapp-widget.jsx` | `WhatsAppWidget` | floating chat widget (mount separately) |

### Section order (from `.ref/Website.html`)
```
<Nav />
<Hero />
<ClientLogos />
<About />
<CCTV />
<Services />
<ProductShowcase />
<Partnership />
<Portfolio />
<Team />
<FAQ />
<Contact />
<Footer />
+ <WhatsAppWidget /> (mounted to its own root, fixed-position)
```

### Assets to keep
- `.ref/assets/sentra-logo.png`, `.ref/assets/sentra-mark.png`, `.ref/assets/team-photo.jpg` — real brand/team imagery, move to `public/assets/`.
- `.ref/assets/team/`, `.ref/assets/timeline/` — keep, referenced by team and portfolio sections.

---

## What to IGNORE

These files are **not part of the website**. Do not port them.

| File / folder | Why ignore |
|---|---|
| `.ref/Sentra Compro.html`, `.ref/Sentra Compro-print.html` | Separate **company‑profile slide deck** — unrelated artifact. |
| `.ref/Website v1.html`, `.ref/Website v2.html`, `.ref/Website v3.html` | Older website iterations kept for design history. `.ref/Website.html` is current. |
| `.ref/styles.css` | Stylesheet for the compro deck, **not** the website. The website uses `.ref/website.css`. |
| `.ref/tweaks-panel.jsx` | Editor‑only tweak panel used in our design environment. Not for production. |
| `.ref/components/pages-*.jsx` (`pages-intro`, `pages-products-1`, `pages-products-2`, `pages-team`, `pages-finale`) | Slides from the compro deck. Skip. |
| `.ref/uploads/` (numbered PNGs, `pasted-…png`, `logo sentra new upscale (1).png`) | Raw design‑review uploads. Don't ship. The clean assets are in `.ref/assets/`. |

---

## Bootstrap effects to port (from `<App>` in `.ref/Website.html`)

Three `useEffect` hooks in the inline script need to live in your root client component:

1. **Scroll progress bar** — updates `#scrollBar`'s width on scroll.
2. **Mouse‑follow gradient** — writes `--mx`/`--my` CSS vars on `<html>` from `mousemove`, throttled with `requestAnimationFrame`.
3. **Reveal‑on‑scroll** — `IntersectionObserver` adds `.in` to `.reveal` elements; includes an initial sync pass and a 1.2s fallback pass.

Also keep the three `<div class="bg-orb">` ambient orbs and the `<div class="scroll-bar">` at the top of `<body>`.

---

## Recommended stack

- **Next.js (App Router)** or **Vite + React**. Either is fine.
- Mark every section component with `"use client"` if using Next App Router — they all use hooks/state/effects.
- Replace the unpkg React/Babel `<script>` tags with the framework's bundler.
- Replace `<script type="text/babel" src="...">` with proper imports.
- Drop the in‑browser Babel — no more JSX transpile at runtime.

---

## Migration checklist

- [ ] Scaffold app (Next.js or Vite)
- [ ] Copy `.ref/website.css` to global stylesheet, import once at root
- [ ] Add Google Fonts (Inter, Space Grotesk, JetBrains Mono)
- [ ] Port `.ref/components/primitives.jsx` first (everything depends on it)
- [ ] Port each `web-*.jsx` component, adding explicit imports/exports
- [ ] Build root page composing the section order above
- [ ] Move the 3 `useEffect` bootstrap hooks into a `RootEffects` client component
- [ ] Copy `.ref/assets/` to `public/assets/`; update image paths
- [ ] Mount `<WhatsAppWidget />` at the page root (it's `position: fixed`)
- [ ] Wire the contact form to a real endpoint (currently just `setSent(true)`)
- [ ] Verify responsive breakpoints in `.ref/website.css` still work
- [ ] Run Lighthouse — keep CLS low; the orbs/animations should not cause layout shift
- [ ] Add proper `<head>` meta (already in `.ref/Website.html` — port it)

---

## Gotchas

- **No `import` statements in current JSX** — every component is a top‑level function that Babel attaches to `window`. When porting you'll need to manually trace which file owns each function (see table above) and add imports.
- **`Icon` is a namespace object** in `primitives.jsx` (e.g. `Icon.cam`, `Icon.cog`). Export it as a single object.
- **Class names in `.ref/website.css` are global.** Don't rename them or wrap them in CSS modules — many JSX files reference the same classes.
- **Indonesian copy** — content is in Bahasa Indonesia (`lang="id"`). Don't translate.
- **Form submission** in `Contact` is currently a no‑op (`setSent(true)` only). Wire to your backend / email service.
- **Reveal animations** depend on the `.reveal` class being on elements at render time. If you SSR, make sure the IntersectionObserver hydration pass runs client‑side only.

---

## Quick start prompt for Claude Code

> Read `INSTRUCTION.MD`. Scaffold a Next.js App Router project. Port `.ref/Website.html` and all website files under `.ref/components/` and `.ref/website.css` into it following the handoff doc. Ignore the files listed in the "IGNORE" section. When done, run the dev server and report any console errors.
