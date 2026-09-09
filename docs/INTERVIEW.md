# Interview Walkthrough

This document is a study guide for explaining DSA Console in an SDE interview.

## 30-second summary

“DSA Console is a DSA preparation workspace that combines curated problem sheets with personal progress, spaced revision, and coding-platform analytics. I designed it as a local-first application: study actions update a persisted Zustand store immediately, while authenticated users synchronize progress to Supabase. Third-party platform data is isolated behind application API routes, and dashboard analytics are derived from the shared problem/progress model.”

## 1. Why local-first?

A user marking a problem solved should not wait for a database round trip. The mutation updates the local store first. Persistence keeps the experience usable across refreshes, and synchronization happens asynchronously for authenticated users.

Trade-off: local and server state can temporarily diverge. The application therefore needs explicit synchronization rules and should eventually record mutation timestamps/version information if conflict resolution becomes important.

## 2. Why Zustand?

Progress is cross-cutting state. The dashboard, problem list, revision queue, and related components all need access to it. Zustand provides a small centralized state layer without forcing the entire component tree to re-render through a large React context.

The persist middleware also makes the local-first strategy straightforward.

## 3. Why is sheet data in TypeScript?

The curated sheets are application content. They change through code rather than through individual user actions. Versioning them with the repository makes deployments deterministic and avoids a database request before the core study experience can render.

User-specific state is the part that belongs in Supabase.

## 4. How does synchronization work?

There are two important paths.

```text
local mutation -> Zustand -> local persistence
                         \
                          -> Supabase upsert (authenticated user)

login -> read local progress -> server upsert
     -> fetch server progress -> hydrate local store
```

The current implementation is intentionally optimistic. A production-hardening pass would add mutation timestamps, conflict policy, retry/backoff, and better observability.

## 5. Why API routes for LeetCode/GFG?

The dashboard should not know the details of every upstream provider. Route handlers create an application boundary where provider responses can be normalized and failures can be isolated.

This also keeps privileged server integrations separate from browser code.

## 6. How does the revision queue work?

A problem stores its current revision stage and next scheduled revision date. The queue is derived by selecting solved problems whose next revision date is due.

The important design point is that the queue is derived data. There is no reason to persist a second list saying “these problems are due” because that list can become stale.

## 7. What was the hardest engineering problem?

A good answer is the local/cloud synchronization boundary. The UI needs immediate updates, but authenticated users also expect their progress to survive devices and sessions. That creates a consistency problem: local state can exist before a user signs in, while server state can already exist when they sign in.

The current approach merges through explicit synchronization functions. A stronger future version would formalize the merge strategy and use canonical problem IDs.

## 8. What would you improve next?

The highest-value technical improvements are:

1. Replace problem-title identifiers with canonical problem IDs.
2. Split the large dashboard client component into data hooks and presentational components.
3. Formalize local/server conflict resolution.
4. Add automated tests for revision scheduling, streak calculation, synchronization, and data normalization.
5. Add provider response validation with Zod at API boundaries.
6. Add structured error handling and observability for external provider failures.
7. Measure client bundle and rendering cost before optimizing further.

## 9. Questions an interviewer may ask

### Why not use Redux?

The state model is relatively small and mostly consists of a single domain store. Zustand provides the required centralized state and persistence with less ceremony. Redux would be reasonable if the application developed many independently evolving state domains or needed a larger middleware ecosystem.

### Why not put progress directly in Supabase?

That would make every interaction network-dependent. The local-first approach prioritizes responsiveness and resilience. Supabase remains useful as the synchronized account-level store.

### Isn't localStorage insecure?

LocalStorage is appropriate for non-sensitive study progress, but it should not be treated as a secure credential store. Authentication tokens and privileged credentials must not be placed there by application code. The server-only Supabase service role key remains on the server.

### What happens if LeetCode is unavailable?

The core tracker should still work. Daily platform data is enrichment, not the source of truth for local DSA progress. The UI should represent provider failure as unavailable data rather than making the entire application unusable.

### Why use static datasets instead of a database?

The sheets are curated content and benefit from source control, code review, deterministic builds, and no runtime dependency. If the product later needs community-created sheets, editing, moderation, or analytics over sheet versions, that would justify moving some content into a database.

## 10. What not to say

Avoid presenting decorative UI as the core engineering achievement. The technically meaningful parts are state ownership, synchronization, data boundaries, derived analytics, external API isolation, and revision scheduling.

Also avoid claiming features are “real-time,” “AI-powered,” or “production-grade” unless the implementation actually provides those guarantees.
