# Trekwise Adventure Blueprint

Trekwise Adventure Blueprint is a Vite-powered React + TypeScript single-page application that showcases sustainable adventure travel packages, detailed trip itineraries, and supporting brand pages.

## Features
- Hero-driven landing page with curated adventures and story-led value props.
- Route-based pages for FAQs, sustainability messaging, and individual trip details using React Router.
- UI built on shadcn/ui primitives, Tailwind CSS theming, and lucide-react iconography.
- Toast notifications, responsive navigation, and query-ready data layer via TanStack Query.
- Site-wide AI concierge powered by OpenAI ChatKit for itinerary support, gear questions, and sustainability tips.

## Quick Start
1. Install Node.js 18+ and npm.
2. Install dependencies with `npm install`.
3. Launch the dev server: `npm run dev` (defaults to `http://localhost:5173`).
4. Create a production build with `npm run build`, then preview locally using `npm run preview`.

## Project Structure
```text
src/
  App.tsx           # Router + providers
  main.tsx          # Vite entry point
  pages/            # Route-aligned views (Home, Trips, TripDetail, etc.)
  components/       # Layout + UI primitives (shadcn-derived under components/ui)
  hooks/            # Reusable React hooks (e.g., mobile detection, toast helpers)
  lib/              # Cross-cutting utilities
  assets/           # Hero imagery and trip photography
public/             # Static assets served verbatim
```

## Available Scripts
- `npm run dev` – Start Vite in development mode with hot module replacement.
- `npm run build` – Produce an optimized bundle in `dist/`.
- `npm run build:dev` – Output a development-mode bundle for lighter-weight QA snapshots.
- `npm run preview` – Serve the build output locally for final checks.
- `npm run lint` – Run ESLint with the configured TypeScript + React Hooks rules.

## Styling & Components
- Tailwind CSS drives layout and design tokens; extend utilities in `tailwind.config.ts`.
- Reusable UI components live in `src/components/ui`, generated from shadcn/ui recipes and adapted for this project.
- Favor the `@/` path alias defined in `tsconfig.json` for internal imports.

## Contribution & Guidelines
- Follow the contributor playbook in `AGENTS.md` for coding style, testing expectations, and PR etiquette.
- Example environment variables belong in `.env.local`; never commit secrets. Add new variables with the `VITE_` prefix so Vite exposes them to the client.

## Deployment
- Run `npm run build` and serve the `dist/` directory using a static host or Vite-friendly platform (e.g., Netlify, Vercel). For Lovable-managed deployments, publish via the associated project dashboard.

## Retrieval Augementation Generation

This is the link to the sample Notion page: https://www.notion.so/Trekwise-Adventure-28bdc0b7129780968c8dc01850e3d8a6?source=copy_link
