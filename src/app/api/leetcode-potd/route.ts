import { NextResponse } from 'next/server';

export async function GET() {
  const query = `
    query questionOfToday {
      activeDailyCodingChallengeQuestion {
        date
        link
        question {
          title
          difficulty
          titleSlug
        }
      }
    }
  `;

  try {
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 } // Cache for 1 hour to prevent rate limiting and keep it blazing fast
    });

    if (!response.ok) {
      throw new Error(`LeetCode GraphQL error: ${response.statusText}`);
    }

    const result = await response.json();
    return NextResponse.json(result.data.activeDailyCodingChallengeQuestion);
  } catch (error: any) {
    console.error('Failed to fetch LeetCode POTD:', error);
    return NextResponse.json(
      { error: 'Failed to fetch LeetCode POTD', message: error.message },
      { status: 500 }
    );
  }
}
