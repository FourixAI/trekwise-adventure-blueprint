# Repository Guidelines

## Project Structure & Module Organization
- `src/` holds the application code. Pages under `src/pages` map to React Router routes; `src/components` houses layout pieces and shadcn-derived UI primitives under `src/components/ui`. Shared hooks live in `src/hooks`, helpers in `src/lib/utils.ts`, and imagery in `src/assets`. Vite starts from `src/main.tsx` and `src/App.tsx`.
- `public/` serves static assets unchanged. Place favicons, metadata, or downloadable collateral here.
- Tooling configs (`vite.config.ts`, `tailwind.config.ts`, `eslint.config.js`, and the `tsconfig*.json` set) define the build pipeline; update them together when introducing new tech.
- Serverless logic for the global chat assistant lives in `functions/api/chatkit/session.ts`, designed for Cloudflare Pages Functions.

## Build, Test, and Development Commands
- `npm install` installs dependencies (Node 18+ recommended).
- `npm run dev` launches the Vite dev server on http://localhost:5173 for local work.
- `npm run build` creates an optimized production bundle in `dist/`.
- `npm run build:dev` produces a development-mode bundle for quicker QA.
- `npm run preview` serves the latest build locally.
- `npm run lint` runs ESLint with the TypeScript + React Hooks rule set.

## Coding Style & Naming Conventions
- Keep TypeScript pervasive; declare React components with arrow functions and PascalCase names.
- Stick to two-space indentation and match the existing preference for double quotes in JSX/TSX.
- Use the `@/` import alias for modules inside `src/` instead of long relative paths.
- Tailwind utility classes drive styling; promote repeated patterns into helpers (e.g., `class-variance-authority`) before duplicating markup.

## Testing Guidelines
- No automated tests exist yet. When adding them, colocate specs beside their subjects using a `*.test.tsx` suffix and adopt Vitest to stay aligned with Vite.
- Cover critical flows (navigation, hooks, data transforms) and record any remaining gaps in the PR description until tests are in place.

## Commit & Pull Request Guidelines
- Follow the existing imperative, concise commit style (for example, `Add expedition detail route`).
- Reference related issues or tasks within the commit body when applicable.
- Pull requests must outline changes, list verification steps (`npm run lint`, manual journeys), and attach UI screenshots or gifs for visual updates.
- Keep PRs scoped; surface follow-up work explicitly if it exceeds the current change set.

## Environment & Configuration
- Manage secrets with Vite environment files such as `.env.local`; never commit real tokens. Example: `VITE_MAPBOX_TOKEN=...`.
- Configure the chatbot session endpoint with `VITE_CHATKIT_SESSION_URL` if your API is hosted anywhere other than `/api/chatkit/session`.
- For Cloudflare deployments set `OPENAI_API_KEY` and `WORKFLOW_ID` as Pages Function environment variables; the serverless handler reads them at runtime.
- Register new routes in `src/App.tsx` above the catch-all `*` entry to preserve 404 handling.
- Update `tailwind.config.ts` content globs if you add new top-level directories so Tailwind does not purge required classes.
