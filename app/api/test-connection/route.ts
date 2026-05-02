import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.BEY_API_KEY;

  if (!apiKey || apiKey === 'your_api_key_here') {
    return NextResponse.json(
      { error: 'BEY_API_KEY is not configured properly in .env.local' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch('https://api.bey.dev/v1/avatars', {
      method: 'GET',
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch avatars from Beyond Presence API', details: data },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
