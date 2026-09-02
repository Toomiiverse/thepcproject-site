# Design System — The PC Project

## Stack
- framework: Astro 5 (static output)
- styling: Tailwind 4 (@tailwindcss/vite, CSS-first @theme — no tailwind.config)
- components: .astro components, no UI library
- animation: CSS transitions + one IntersectionObserver (no GSAP unless proven needed)
- icons: none yet

## Tokens (single source: src/styles/global.css @theme block)
- ink: #090909 (ground) / ink-2: #111111
- paper: #fafafa (text)
- muted: #8a8a8a
- accent: #ff4000 — THE one orange. The old Wix site had three; never add a second.
- font-display: Archivo Black (free stand-in for Lulo Clean, which is paid)
- font-mono: JetBrains Mono (the old site mixed JetBrains + IBM Plex — one mono only)
- font-sans: Inter (stand-in for Neue Haas Unica)

## Voice
Mono labels use the Word-Word.// register everywhere: `Signature-Builds;`,
`Now-Open.//`. Either every label wears it or none — the old site broke voice
halfway down the page.

## Decisions
- 2026-08-27 — init: greenfield Astro scaffold replacing Wix. Numbered sections
  01–06 with fixed rail (stolen from zenless.hoyoverse.com), one strong image
  per section, minimal body copy. No cart — sales motion is in-person quotes;
  add Snipcart/Shopify Buy Button per-page if online sales ever start.
- 2026-08-27 — content fixes vs Wix site: "Northbrdige" typo corrected,
  stale "based in Murdoch University" copy dropped (store is Northbridge).
- 2026-08-27 — image slots are dashed placeholders until real build photos are
  shot. Photography is the highest-value remaining task, not code.
- 2026-08-29 — pulled real photos from the live Wix site (thepcproject.com.au)
  into public/images/ and filled 4 of the placeholder slots: home Section 02
  (custom-build.jpg), home Section 03 (storefront.jpg), /gaming-lounge
  (gaming-lounge.jpg), /workshops (workshop-bench.jpg). /custom-pc and
  /qa-assessed have no photo slots in their current layout, so nothing to fill
  there. Source images downscaled/re-encoded with ImageMagick, originals not
  kept in the repo.
- 2026-08-27 — signature-builds page removed at owner's request; home sections
  renumbered 01–05, hero CTA points to /custom-pc.
- 2026-08-28 — added /configurator tab. Long-term it iframes the standalone
  PC-config app (`?embed=1`) per its locked deploy topology
  (../PC-config/deploy/README.md) rather than merging the React/Vite codebase
  in — that app's CSP already allowlists this domain as a frame-ancestor.
  build.thepcproject.com.au isn't live yet (gated on DNS owner D2, SMTP D4,
  real legal copy D5), so for now the tab links out to the GitHub repo
  instead (GitHub can't be iframed anyway — sends X-Frame-Options: deny).
  Swap the page body for the iframe once the domain is live.
- 2026-08-30 — pre-live one-site: /configurator iframes the shop builder
  (`:8091` on shop preview, `/builder/` once nginx is applied). GitHub
  placeholder gone. Mobile menu, favicon, Wix warranty/terms pages, $50
  fee on /custom-pc, IG/FB footer, old Wix path redirects. Quote POST
  still needs the builder API on the shop box after merge.

- 2026-09-02 — home 02 is a scroll journey: the page pins, a side-on line
  drawing of a PC assembles part by part and the build sheet beside it ticks
  off. Still no GSAP — one scroll listener writes --p, everything else is
  CSS calc()/clamp() off that number. Sections renumbered 01–06.

## Components
- Base.astro — layout: header, footer, fonts, reveal + rail scripts
- Section.astro — numbered section (num, id, label, heading, image, flip)
- BuildJourney.astro — home 02: pinned stage, scroll assembles a PC part by
  part (one --p custom property from a 10-line script; choreography in CSS)
- PageHero.astro — subpage hero (label, heading, intro slot)

## Pages
- / — numbered sections 01–06 with fixed rail
- /custom-pc — 4-step process (consult → design → build → deliver)
- /configurator — iframe embed of the standalone PC builder (build.thepcproject.com.au)
- /qa-assessed — 4-stage QA process for pre-owned parts + per-component checklists (CPU/mobo/RAM/GPU)
- /gaming-lounge — lounge photo slot + 3 facts
- /workshops — guided builds / tech support / events
- /contact — address, email, hours, map; mailto CTA (no form backend — add
  Formspree/Web3Forms only if mailto proves insufficient)

## Non-Goals
- No cart / e-commerce
- No CMS (markdown content collections if update frequency ever demands it)
- No GSAP, no Figma sync, no image generation
