
# Akarsh P. Gupta — Portfolio

React and Vite portfolio exported from the original
[Figma design](https://www.figma.com/design/aBNkQnGvPpOkiUD2ufkL9g/Portfolio-website-design).

## Run locally

Requires Node.js 22 or later.

```bash
cd "Portfolio website design"
npm ci
npm run dev
```

Create and inspect a production build with:

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

The repository includes `.github/workflows/deploy-pages.yml`. Every push to
`main` builds this directory and deploys the result to GitHub Pages.

In the GitHub repository, open **Settings → Pages** and set **Source** to
**GitHub Actions**. Push the repository to `main`, then follow the deployment
in the repository's **Actions** tab.
