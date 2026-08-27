# thepcproject-site

Static rebuild of thepcproject.com.au, moving off Wix.

- **Astro 5** (static output) + **Tailwind 4** (CSS-first `@theme`, no config file)
- Zero runtime JS except ~20 lines for scroll reveals and section rails
- Design tokens and decisions live in [DESIGN.md](DESIGN.md)

## Run it

```
npm install
npm run dev      # http://localhost:4321
```

`npm run build` outputs static HTML to `dist/`.

## Pages

`/` · `/custom-pc` · `/qa-assessed` · `/gaming-lounge` · `/workshops` · `/contact`

## Before launch

- Real photos into the `PHOTO-SLOT.//` placeholders
- Deploy to Cloudflare Pages, add `_redirects` for old Wix URLs, point DNS
