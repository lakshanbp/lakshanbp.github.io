# Lakshan Perera — Developer Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, and Lucide icons.

## Features

- Responsive dark design
- About, skills, projects, GitHub, and contact sections
- Interactive skill filters
- Mobile navigation
- GitHub statistics embeds
- Reduced-motion accessibility support

## Run Locally

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

## Personalize Before Publishing

1. In `src/App.tsx`, update your name, bio, skills, and project details.
2. Replace placeholder project links with real repository URLs.
3. Replace `YOUR_EMAIL@example.com` with the email address you want to publish.
4. Replace the LinkedIn homepage URL with your actual LinkedIn profile.
5. Remove any skills you cannot confidently discuss.
6. Ensure `vite.config.ts` uses `base: "/"` for `https://lakshanbp.github.io/`.

## Deploy to GitHub Pages

1. Push the project to the `lakshanbp.github.io` repository.
2. Open **Settings → Pages** on GitHub.
3. Set the deployment source to **GitHub Actions**.
4. Ensure `.github/workflows/deploy.yml` contains the correct deployment workflow.
5. Push to `main` and check the **Actions** tab for a successful deployment.

