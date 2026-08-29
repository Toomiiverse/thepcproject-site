# thepcproject-site

The PC Project website. Tommy (`Toomiiverse`) owns this repo. Mitchell opens PRs. Merge on GitHub updates the shop preview.

```
npm install
npm run dev      # http://localhost:4321
```

## Pages

`/` · `/custom-pc` · `/configurator` · `/qa-assessed` · `/gaming-lounge` · `/workshops` · `/contact` · `/warranty-and-returns` · `/terms-and-conditions`

Configurator is the live builder (PC-config), not a GitHub link.

## How a change goes live in the shop

1. Open a pull request into `main` (or press `.` on GitHub to edit).
2. GitHub builds the site. You do not need Node on your PC.
3. Merge the PR. GitHub publishes the files to the `live` branch.
4. The shop box pulls `live` and serves **http://192.168.50.200:8090**

Public www is a separate switch. A git merge does not replace Wix.

Do not put secrets in this repo. Do not commit `dist/` on `main`.
