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

## Collaboration

Mitchell (`mitchelljhorrocks-lgtm`) and Tommy (`Toomiiverse`) both work in this repo.

- Edit in the browser: press `.` on the GitHub page, or open [github.dev](https://github.dev/mitchelljhorrocks-lgtm/thepcproject-site)
- Push to `main` (or open a PR). GitHub Actions runs `npm run build` — you do not need Node on your PC
- Shop hosting and DNS are separate. Do not put secrets in this repo
