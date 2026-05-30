import { NextResponse } from 'next/server';

const UPSTREAM_BASE = 'https://leetcode-api-faisalshohag.vercel.app';
const CACHE_MS = 15 * 60 * 1000; // 15 minutes

type CacheEntry = { data: unknown; at: number };

const profileCache = new Map<string, CacheEntry>();

function getStale(username: string): unknown | null {
  return profileCache.get(username)?.data ?? null;
}

function setCache(username: string, data: unknown) {
  profileCache.set(username, { data, at: Date.now() });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username')?.trim();

  if (!username) {
    return NextResponse.json({ error: 'username is required' }, { status: 400 });
  }

  const fresh = profileCache.get(username);
  if (fresh && Date.now() - fresh.at < CACHE_MS) {
    return NextResponse.json(fresh.data, {
      headers: { 'X-Cache': 'hit' },
    });
  }

  try {
    const response = await fetch(`${UPSTREAM_BASE}/${encodeURIComponent(username)}`, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 900 },
    });

    if (!response.ok) {
      const stale = getStale(username);
      if (response.status === 429 && stale) {
        return NextResponse.json(stale, {
          headers: { 'X-Cache': 'stale' },
        });
      }

      return NextResponse.json(
        {
          error: response.status === 429 ? 'rate_limited' : 'upstream_error',
          message:
            response.status === 429
              ? 'LeetCode stats API is rate limited. Try again in a few minutes.'
              : `LeetCode API returned ${response.status}`,
        },
        { status: response.status },
      );
    }

    const data = await response.json();
    if (data?.errors) {
      return NextResponse.json({ error: 'invalid_user', message: 'User not found' }, { status: 404 });
    }

    setCache(username, data);
    return NextResponse.json(data, { headers: { 'X-Cache': 'miss' } });
  } catch (error) {
    console.error('LeetCode profile proxy error:', error);
    const stale = getStale(username);
    if (stale) {
      return NextResponse.json(stale, { headers: { 'X-Cache': 'stale' } });
    }
    return NextResponse.json({ error: 'fetch_failed', message: 'Failed to fetch LeetCode profile' }, { status: 502 });
  }
}
