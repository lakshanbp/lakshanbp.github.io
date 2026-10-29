<<<<<<< HEAD
# Lakshan Perera — Developer Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, and Lucide icons.

## Features
- Responsive dark design
- About, skills, projects, GitHub, and contact sections
- Interactive skill filters
- Mobile navigation
- GitHub statistics embeds
- Reduced-motion accessibility support

## Run locally

Install Node.js (LTS), then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

Build for production:

```bash
npm run build
npm run preview
```

## Personalize before publishing

1. In `src/App.tsx`, update the name, bio, skills, and project details.
2. Replace placeholder project links with each real repository URL.
3. Replace `YOUR_EMAIL@example.com` with the email address you want to publish.
4. Replace the LinkedIn homepage URL with your actual LinkedIn profile.
5. Remove any skills you cannot confidently discuss.
6. Update the `base` option in `vite.config.ts` if deploying to a GitHub project subpath. For a username site at `https://lakshanbp.github.io/`, use `base: "/"`.

## Deploy to GitHub Pages

1. Create a GitHub repository for the site. For the root user site, use `lakshanbp.github.io`.
2. Push this project to that repository.
3. In GitHub, open **Settings → Pages** and choose **GitHub Actions** as the build and deployment source.
4. Add a workflow file at `.github/workflows/deploy.yml` (example below).
5. Push to the default branch; the Actions workflow will build and publish the site.

```yaml
name: Deploy portfolio to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```
=======
# lakshanbp.github.io
Personal portfolio website
>>>>>>> de3b8e890bed5b50f2dfc09d0429b155764db962
