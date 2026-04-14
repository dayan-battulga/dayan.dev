# dayan.dev 🌐

My personal corner of the internet — a portfolio and blog built to be minimal, fast, and actually mine.

Found a template I really liked as a base from [here](https://github.com/timlrx/tailwind-nextjs-starter-blog).

Live at **[dayan-battulga.github.io/dayan.dev](https://dayan-battulga.github.io/dayan.dev)**

---

## Stack

| Layer | Tool |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| Content | [Contentlayer](https://contentlayer.dev/) — MDX-powered blog |
| Styling | CSS (custom) |
| Linting | ESLint |
| Git hooks | Husky |
| Package manager | Yarn |
| Deployment | GitHub Actions → GitHub Pages |

The blog is powered by **Contentlayer**, which lets me write posts in Markdown and have them automatically typed and imported as data — no CMS, no database, just files.

---

## Project Structure

```
├── app/              # Next.js App Router pages
├── components/       # Reusable UI components
├── css/              # Global styles
├── data/             # Static data (projects, etc.)
├── faq/              # FAQ content
├── public/           # Static assets (images, avatar)
├── scripts/          # Utility scripts
└── contentlayer.config.ts  # Blog/MDX configuration
```

---

## Running Locally

```bash
git clone https://github.com/dayan-battulga/dayan.dev.git
cd dayan.dev
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Features

- **Blog** — markdown posts with Contentlayer, no CMS needed
- **Projects** — showcase of things I've built
- **Visitors** — a little guest book page
- **About** — photo grid of places and things I care about

---

## Deployment

Pushed to `main` → GitHub Actions builds and deploys to GitHub Pages automatically.

---

*Built by [Dayan Battulga](https://github.com/dayan-battulga)*
