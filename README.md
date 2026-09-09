# DSA Console

A personal DSA practice workspace built around structured problem sheets, progress tracking, spaced revision, and coding-platform analytics.

This project started as a DSA sheet viewer and evolved into a stateful study application. The current architecture combines a local-first progress store with optional Supabase synchronization, platform profile integration, daily problem feeds, revision queues, and analytics.

## Why this project exists

Most DSA trackers answer one question: “Which problems have I solved?”

DSA Console is designed around the harder question: “What should I solve or revise next, and how do I know whether my preparation is actually progressing?”

The application therefore keeps four concerns together:

- curated problem sets organized by topic and algorithmic pattern
- per-problem progress, notes, marks, and revision state
- a revision queue driven by the next scheduled review date
- external coding-platform signals from LeetCode and GeeksForGeeks

## Core features

### Problem sheets

The dashboard supports multiple study views:

- Love Babbar 450
- DSA Patterns
- Striver's SDE Sheet
- Revision Sheet

Problems are normalized into a common view so progress can be aggregated across sheets while avoiding duplicate problem titles.

### Progress and revision

Each problem can carry a status, marks, notes, revision stage, next revision date, and solved timestamp. Progress is persisted locally and can be synchronized to Supabase for signed-in users.

### Platform analytics

Authenticated users can connect LeetCode and GeeksForGeeks handles. The application exposes platform-specific statistics alongside the local DSA progress model.

### Daily challenges

The dashboard fetches the current LeetCode and GeeksForGeeks problem of the day through server-side API routes rather than embedding third-party requests directly into the UI.

### Search and analytics

The dashboard supports global problem search, difficulty breakdowns, activity visualization, recent problems, streak information, and a revision queue.

## Architecture

```text
Next.js App Router
        |
        +-- Pages / route handlers
        |
        +-- UI components
        |     +-- DSA dashboard
        |     +-- problem views
        |     +-- analytics
        |     +-- authentication / onboarding
        |
        +-- Zustand store
        |     +-- local persistence
        |     +-- optimistic progress updates
        |
        +-- Domain/data layer
        |     +-- problem-sheet datasets
        |     +-- sheet metadata / routing
        |     +-- synchronization helpers
        |
        +-- API layer
        |     +-- LeetCode POTD
        |     +-- GFG POTD
        |     +-- LeetCode profile
        |     +-- GFG profile
        |     +-- scheduled daily check
        |     +-- survey
        |
        +-- Supabase
        |     +-- authentication
        |     +-- user profiles
        |     +-- DSA progress
        |
        +-- Resend
              +-- optional study/reminder email workflows
```

A more detailed architecture and the reasoning behind the important boundaries are documented in [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Engineering decisions worth discussing

### Local-first progress

The UI should remain responsive even when the network is unavailable. Zustand persistence provides the immediate local state, while authenticated users receive background synchronization to Supabase. This makes local interaction independent of round-trip database latency.

### Optimistic synchronization

A progress mutation updates local state first and then attempts an asynchronous server upsert. The server representation uses the authenticated user and problem title as the conflict key for the current schema.

### Server-side integrations

External platform data is accessed through Next.js API routes. This gives the application a place to validate responses, isolate provider-specific behavior, and keep provider details out of the main dashboard component.

### Scheduled engagement

The daily-check route is protected by a cron secret in production and can send reminder emails through Resend. The job uses stored activity and solved dates rather than relying on client-side state.

## Technology

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui / Radix primitives
- Zustand
- Supabase
- Framer Motion
- TanStack Query / Table
- Recharts
- React Hook Form + Zod
- Resend / React Email

The dependency set is intentionally broad because the application includes both product UI and data/analytics workflows; it is documented here rather than hidden behind a generic starter-project description.

## Local development

```bash
npm install
npm run dev
```

The project runs on port `3000` in development.

For a production build:

```bash
npm run build
npm run start
```

Database helpers are available through Prisma scripts retained by the project tooling:

```bash
npm run db:push
npm run db:generate
npm run db:migrate
npm run db:reset
```

## Environment configuration

The application expects provider configuration through environment variables. Do not commit secrets.

Typical configuration includes:

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
CRON_SECRET=
RESEND_API_KEY=
```

Server-only credentials such as the Supabase service role key and cron secret must never be exposed to client components.

## Portfolio notes

This repository is intentionally documented as an engineering project rather than a tutorial. The interesting parts are the trade-offs between local state and server state, synchronization semantics, third-party data boundaries, revision scheduling, and the evolution from a static sheet into a stateful product.

For an interview, start with the system boundaries rather than the visual design. A useful walkthrough is:

1. how a problem enters the normalized model
2. how a user mutation flows through Zustand and Supabase
3. how revision state is calculated
4. how platform APIs are isolated behind route handlers
5. how authentication changes the synchronization path
6. which parts are intentionally local versus server-backed

See [`docs/INTERVIEW.md`](docs/INTERVIEW.md) for a prepared technical walkthrough and questions to be able to answer without reading from the README.

## Current technical debt

The repository is an actively evolving personal project. Some older dashboard logic is more coupled than the desired architecture, and some statistics historically used simplified calculations. The portfolio branch is being used to make those boundaries explicit and to replace misleading/demo-style behavior with measurable product behavior.

That is deliberate: the goal is not to present a fictional “perfect” codebase, but a real system with clear engineering decisions, known trade-offs, and an auditable path to improvement.

## License

See the repository license for the current terms.
