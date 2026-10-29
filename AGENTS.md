<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Stack snapshot

- Next.js **16.4.3** App Router (`src/app`) with React 19.3 and `reactCompiler: true` — React Compiler handles memoization; don't add manual `memo`/`useMemo` workarounds.
- Tailwind CSS **v4**, CSS-first: there is no `tailwind.config`; theme tokens live in `src/app/globals.css` (shadcn imports a shared stylesheet from `shadcn/tailwind.css`).
- shadcn/ui uses the **`base-nova` style**: primitives come from **Base UI** (`@base-ui/react`), not Radix. Class merging is `cn` from the `"cn"` package (tailwind-merge drop-in); `src/lib/utils.ts` only re-exports it — UI components import `cn` from `"cn"` directly.

## Commands (`package-lock.json` → use npm)

- Dev server: `npm run dev`. Next 16 binds `next dev` to the checkout — a second instance **fails with "Another next dev server is already running", even on a different port**. If one is already up (usually `:3000`), hot-reload happens there: curl/smoke-test that instance instead of starting another.
- Typecheck: `npx tsc --noEmit` (no dedicated typecheck script). Lint: `npm run lint` (flat config). Build: `npm run build`. No tests are configured.
- On this machine plain `npx` is blocked by PowerShell's execution policy — use `npx.cmd` (e.g. `npx.cmd shadcn@latest add <component>`).

## Architecture gotchas

- `next.config.ts` enables **`cacheComponents`** (+ `partialPrefetching`): prerendering is on by default and uncached server-side I/O must live inside a `<Suspense>` boundary or behind `"use cache"` (or the route errors). Existing example: `TravelersList` reads `public/travelers.json` with `node:fs/promises` inside a Suspense boundary — keep such boundaries intact around new async server components.
- Data layer: content is read from local JSON in `public/` at request time via `process.cwd()` file reads in async Server Components — no backend API is wired up yet. Loading keeps working only in the Node/server runtime.
- `next/image` remote hosts are pinned by `images.remotePatterns` in `next.config.ts` (currently only `plus.unsplash.com`). Add a pattern there before using any new image host.

## Housekeeping

- `README.md` is untouched create-next-app boilerplate and partly wrong (claims Geist font and `app/page.tsx`; actual: Roboto via `next/font` in `src/app/layout.tsx`). Trust config and code over it.
- The `<!-- BEGIN:nextjs-agent-rules -->` block at the top of this file is managed by `next dev`, which only replaces content between the markers — everything else here survives regeneration. Keep this file committed with your changes.
