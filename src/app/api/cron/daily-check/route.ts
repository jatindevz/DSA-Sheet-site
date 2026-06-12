import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { StreakSaverEmail } from '@/emails/StreakSaverEmail';
import { InactivityEmail } from '@/emails/InactivityEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function GET(request: Request) {
  try {
    // 1. Verify cron secret to prevent unauthorized hits
    const authHeader = request.headers.get('authorization');
    if (
      process.env.NODE_ENV === 'production' &&
      authHeader !== `Bearer ${process.env.CRON_SECRET}`
    ) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // 2. Fetch all users who have email notifications enabled
    const { data: profiles, error: profilesError } = await supabase
      .from('user_profiles')
      .select('user_id, last_active_at, email_notifications_enabled');

    if (profilesError || !profiles) {
      throw new Error(`Error fetching profiles: ${profilesError?.message}`);
    }

    const emailPromises: Promise<any>[] = [];

    // 3. Process each user
    for (const profile of profiles) {
      if (!profile.email_notifications_enabled) continue;

      const userId = profile.user_id;

      // Fetch user's email address using the Admin Auth API
      const { data: { user }, error: userError } = await supabase.auth.admin.getUserById(userId);
      if (userError || !user?.email) continue; // Skip if we can't find the email

      const userEmail = user.email;
      // Get the username from email prefix (e.g. jatin@example.com -> Jatin)
      const username = userEmail.split('@')[0].charAt(0).toUpperCase() + userEmail.split('@')[0].slice(1);

      // Check inactivity
      const lastActiveAt = profile.last_active_at ? new Date(profile.last_active_at) : null;
      const today = new Date();
      
      if (lastActiveAt) {
        const diffTime = Math.abs(today.getTime() - lastActiveAt.getTime());
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        // If inactive for exactly 5 days (don't spam them every day after 5 days)
        if (diffDays === 5) {
          emailPromises.push(
            resend.emails.send({
              from: 'DSA Console <onboarding@resend.dev>', // Update this when you have a verified domain
              to: [userEmail],
              subject: 'We miss you on the DSA Console!',
              react: InactivityEmail({ username, daysInactive: diffDays }),
            })
          );
          continue; // Don't send multiple emails to the same person on the same day
        }
      }

      // Check streak status
      // We calculate the streak by getting all solved_at dates
      const { data: progress } = await supabase
        .from('dsa_progress')
        .select('solved_at')
        .eq('user_id', userId)
        .eq('status', 'solved')
        .not('solved_at', 'is', null);

      if (progress && progress.length > 0) {
        const solvedDates = progress.map(p => new Date(p.solved_at!).toISOString().split('T')[0]);
        const uniqueDates = Array.from(new Set(solvedDates)).sort().reverse();
        
        let streak = 0;
        let currentDate = new Date();
        // Check if solved today
        const solvedToday = uniqueDates.includes(currentDate.toISOString().split('T')[0]);
        
        // Count backwards
        for (let i = solvedToday ? 0 : 1; i < 365; i++) {
          const d = new Date();
          d.setDate(currentDate.getDate() - i);
          const dateStr = d.toISOString().split('T')[0];
          
          if (uniqueDates.includes(dateStr)) {
            streak++;
          } else {
            break;
          }
        }

        // If user has a decent streak (> 3) but hasn't solved anything today, send a Streak Saver email
        if (streak >= 3 && !solvedToday) {
          emailPromises.push(
            resend.emails.send({
              from: 'DSA Console <onboarding@resend.dev>', // Update this when you have a verified domain
              to: [userEmail],
              subject: '🚨 Keep your streak alive!',
              react: StreakSaverEmail({ username, streakDays: streak }),
            })
          );
        }
      }
    }

    await Promise.all(emailPromises);

    return NextResponse.json({ success: true, emailsSent: emailPromises.length });
  } catch (error: any) {
    console.error('Cron job error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
