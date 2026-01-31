# High Vibes

Marketing site for High Vibes — a local-first AI assistant.

## Development

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # outputs to ./dist
npm run preview    # preview the build locally
```

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

## Stack

- [Astro](https://astro.build) — static site generator
- CSS scroll-driven animations (no JS animation libraries)
- DM Sans + DM Mono typography via Google Fonts
