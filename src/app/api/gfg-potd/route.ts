import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://practiceapi.geeksforgeeks.org/api/vr/problems-of-day/problem/today/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`GFG API error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Failed to fetch GFG POTD:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GFG POTD', message: error.message },
      { status: 500 }
    );
  }
}
