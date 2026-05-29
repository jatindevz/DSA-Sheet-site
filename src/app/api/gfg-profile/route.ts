import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const handle = searchParams.get('handle');

    if (!handle) {
        return NextResponse.json({ error: 'Handle is required' }, { status: 400 });
    }

    try {
        const response = await fetch(`https://authapi.geeksforgeeks.org/api-get/user-profile-info/?handle=${handle}`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'application/json, text/plain, */*',
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('GFG API Error Response:', errorText);
            return NextResponse.json({ error: `GFG API returned status ${response.status}` }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching GFG profile:', error);
        return NextResponse.json({ error: 'Failed to fetch GFG profile' }, { status: 500 });
    }
}
