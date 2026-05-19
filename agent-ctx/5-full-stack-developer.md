# Task 5: Backend API Routes - Work Record

## Task
Build backend API routes for DSA tracking app CRUD operations

## Files Created
1. `/src/app/api/topics/route.ts` - GET (topics + counts), POST (create topic)
2. `/src/app/api/problems/route.ts` - GET (problems + filters), POST (create problem + daily activity tracking)
3. `/src/app/api/problems/[id]/route.ts` - PATCH (update + status transition handling), DELETE
4. `/src/app/api/stats/route.ts` - GET (comprehensive stats: counts, streak, breakdowns, recent, activity)
5. `/src/app/api/seed/route.ts` - POST (seed 20 default DSA topics)
6. `/src/app/api/activity/route.ts` - GET (daily activity for last N days)

## Key Design Decisions
- DailyActivity upsert pattern: increments count if date exists, creates with count=1 if not
- Streak calculation: checks today first, then counts consecutive days backwards
- Status transitions: solved→other clears solvedAt, other→solved sets solvedAt and updates DailyActivity
- Input validation: validates difficulty, status, platform against allowed values
- Duplicate topic prevention: unique name check before creation

## Testing
All endpoints tested via curl and verified working correctly.
