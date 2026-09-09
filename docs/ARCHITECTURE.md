# Architecture

## System overview

DSA Console is a client-heavy Next.js application with a local-first progress model and optional cloud synchronization.

```text
                    Browser
                       |
             +---------+---------+
             |                   |
        App Router          Zustand Store
             |                   |
        UI + routes       persisted local state
             |                   |
        API route handlers       +---- optimistic sync ----+
             |                                        |
      external providers                         Supabase
      (LeetCode / GFG)                       auth + user data
             |
          Resend
       scheduled email
```

## Domain model

Problem-sheet data is static application data. A sheet contains topics, and each topic contains problems. A problem has a stable title plus provider URLs and optional pattern metadata.

User progress is intentionally separate from the sheet definitions. The progress record currently contains:

- `status`
- `marks`
- `notes`
- `revisionStage`
- `nextRevisionDate`
- `solvedAt`

This separation means the same problem can be rendered by multiple views without duplicating user state in every sheet dataset.

## State flow

### Anonymous user

```text
problem interaction
      |
      v
Zustand mutation
      |
      v
persist middleware
      |
      v
browser localStorage
```

The local path is the fast path. It avoids making a study interaction dependent on network availability.

### Authenticated user

```text
interaction
   |
   +--> update local Zustand state
   |
   +--> asynchronous Supabase upsert
              |
              v
        dsa_progress
```

On authentication, the synchronization layer can push local progress to the user's server record and fetch server progress back into the store. This is a pragmatic local-first model rather than treating the database as the source of truth for every click.

## Why not put everything in React component state?

The progress state is shared by the dashboard, problem views, revision queue, and other components. A centralized store avoids prop-drilling and makes persistence possible at the domain boundary. Components consume the state they need rather than owning independent copies.

## Why keep sheet data static?

The curated sheets are content, not user-generated records. Keeping them in versioned TypeScript data has useful properties: changes are code-reviewed, deployment is deterministic, and the application can render the core experience without a database round trip.

Cloud storage is reserved for user-specific state and external profile metadata.

## API boundary

Provider-specific fetching belongs behind Next.js route handlers. The browser asks the application for a normalized response rather than coupling dashboard components to provider APIs.

This boundary is particularly useful when a provider changes its response format. Provider-specific parsing can change without forcing every consuming component to understand the upstream API.

## Authentication and data ownership

Supabase Auth identifies the user. User-specific progress is keyed by the authenticated user ID. Profile handles are stored separately from problem progress.

The service-role credential is used only in server-side scheduled work. Client code uses the public Supabase client configuration.

## Revision model

A solved problem can move through revision stages and receive a `nextRevisionDate`. The dashboard derives the due queue from those fields instead of storing a second “due problems” list. This avoids two pieces of state drifting apart.

The current project uses a bounded revision stage model. Future work can replace the fixed stages with a more explicit scheduling strategy without changing the sheet data model.

## Analytics model

Dashboard statistics are derived from the normalized problem list plus user progress. This keeps derived values such as solved counts, difficulty breakdowns, due revisions, and activity data reproducible from source state.

A key architectural rule is that derived statistics should not become independently persisted state unless there is a measured performance reason to do so.

## Known trade-offs

### Title as progress key

The current progress schema uses `problem_title` as the conflict key. This is convenient because multiple sheets can refer to the same problem, but titles are not ideal permanent identifiers. A future migration should introduce a canonical problem ID, with provider/platform identifiers stored separately.

### Client-heavy dashboard

The main dashboard currently contains more responsibilities than the target architecture should. It performs data aggregation, authentication observation, provider fetching, and substantial rendering in one client component. Splitting these responsibilities is a high-value refactor because it improves testability and makes the data flow easier to explain.

### External provider reliability

LeetCode and GFG data are external dependencies. The product should treat them as eventually available enrichment rather than making the core DSA tracker dependent on their uptime.

## Security boundaries

Never expose `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, or `CRON_SECRET` to the browser.

The scheduled daily-check endpoint validates its authorization header in production before performing privileged Supabase operations.

## Performance considerations

The main current performance risks are repeated derived-array scans, a large client component, and provider data fetching tied to dashboard lifecycle. The intended direction is:

1. normalize and memoize domain data once
2. isolate provider queries
3. use stable IDs rather than title-based joins
4. keep server-only work out of client bundles
5. virtualize large problem lists if the dataset grows substantially
6. measure before adding caching or persistence complexity

## Interview summary

The simplest way to explain the architecture is:

> “The curated problem content is versioned with the application, while user progress is a separate local-first state model. Zustand gives the UI an immediate durable state, and authenticated users synchronize that state to Supabase. Provider integrations sit behind server routes, and analytics/revision queues are derived from the normalized problem-plus-progress model.”

That explanation captures the major boundaries without pretending the system is more complex than it is.
