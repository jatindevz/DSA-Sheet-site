import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

const RATE_LIMIT = 8;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

const quickSurveySchema = z.object({
  survey_type: z.literal('quick'),
  wanted_sheet: z.string().max(2000).optional(),
  wanted_feature: z.string().max(2000).optional(),
  frustration: z.string().max(2000).optional(),
  extra: z.string().max(2000).optional(),
  pathname: z.string().max(512).optional(),
});

const fullSurveySchema = z.object({
  survey_type: z.literal('full').optional(),
  heard_from: z.string().min(1).max(64),
  heard_from_other: z.string().max(200).optional(),
  helpfulness: z.number().int().min(1).max(5),
  frequency: z.string().min(1).max(64),
  use_cases: z.array(z.string().min(1).max(64)).min(1).max(3),
  sheets_used: z.array(z.string().min(1).max(64)).min(1).max(8),
  wanted_sheet: z.string().max(2000).optional(),
  wanted_feature: z.string().max(2000).optional(),
  frustration: z.string().max(2000).optional(),
  extra: z.string().max(2000).optional(),
  pathname: z.string().max(512).optional(),
});

function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]?.trim() || 'unknown';
  return request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (bucket.count >= RATE_LIMIT) return true;
  bucket.count += 1;
  return false;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'rate_limited', message: 'Too many submissions. Try again later.' }, { status: 429 });
  }

  const admin = getSupabaseAdmin();
  if (!admin) {
    return NextResponse.json(
      { error: 'not_configured', message: 'Survey storage is not configured on the server.' },
      { status: 503 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  let userId: string | null = null;
  const authHeader = request.headers.get('authorization');
  if (authHeader?.startsWith('Bearer ')) {
    const token = authHeader.slice(7);
    const { data: userData, error } = await admin.auth.getUser(token);
    if (!error && userData.user) {
      userId = userData.user.id;
    }
  }

  const optionalText = (value?: string) => {
    const t = value?.trim();
    return t ? t : null;
  };

  const body = json as { survey_type?: string };
  if (body.survey_type === 'quick') {
    const parsed = quickSurveySchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: 'validation_failed', details: parsed.error.flatten() }, { status: 400 });
    }
    const data = parsed.data;

    const { error: insertError } = await admin.from('survey_responses').insert({
      user_id: userId,
      heard_from: 'profile_quick',
      helpfulness: 3,
      frequency: 'profile_quick',
      use_cases: ['profile_quick'],
      sheets_used: ['profile_quick'],
      wanted_sheet: data.wanted_sheet?.trim() || '',
      wanted_feature: data.wanted_feature?.trim() || '',
      frustration: optionalText(data.frustration),
      extra: optionalText(data.extra),
      pathname: data.pathname || null,
    });

    if (insertError) {
      console.error('Survey insert error:', insertError);
      return NextResponse.json({ error: 'insert_failed', message: 'Could not save your response.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  }

  const parsed = fullSurveySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: 'validation_failed', details: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;

  const { error: insertError } = await admin.from('survey_responses').insert({
    user_id: userId,
    heard_from: data.heard_from,
    heard_from_other: optionalText(data.heard_from_other),
    helpfulness: data.helpfulness,
    frequency: data.frequency,
    use_cases: data.use_cases,
    sheets_used: data.sheets_used,
    wanted_sheet: data.wanted_sheet?.trim() || '',
    wanted_feature: data.wanted_feature?.trim() || '',
    frustration: optionalText(data.frustration),
    extra: optionalText(data.extra),
    pathname: data.pathname || null,
  });

  if (insertError) {
    console.error('Survey insert error:', insertError);
    return NextResponse.json({ error: 'insert_failed', message: 'Could not save your response.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
