'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import { syncLocalDataToServer, fetchServerDataToLocal } from '@/lib/sync';
import { Cloud, LogOut, Loader2, User as UserIcon, RefreshCw, MessageCircleHeart, Mail, MailX } from 'lucide-react';
import { User } from '@supabase/supabase-js';
import { useDSAStore } from '@/store/dsa-store';
import { SurveyModal } from '@/components/survey/SurveyModal';
import { useSurveyEligible } from '@/hooks/use-survey-eligible';

export function AuthDropdown() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [surveyOpen, setSurveyOpen] = useState(false);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const surveyEligible = useSurveyEligible();

  const resetProgress = useDSAStore((state) => state.resetProgress);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    // Check active session on load
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user && supabase) {
        // We sync local -> server, then server -> local to merge
        syncLocalDataToServer(session.user.id).then(() => {
          fetchServerDataToLocal(session.user.id);
        });
        // Fetch email preferences
        supabase.from('user_profiles').select('email_notifications_enabled').eq('user_id', session.user.id).single().then(({ data }) => {
          if (data) setEmailEnabled(data.email_notifications_enabled);
        });
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      
      if (event === 'SIGNED_IN' && session?.user && supabase) {
        syncLocalDataToServer(session.user.id).then(() => {
          fetchServerDataToLocal(session.user.id);
        });
        supabase.from('user_profiles').select('email_notifications_enabled').eq('user_id', session.user.id).single().then(({ data }) => {
          if (data) setEmailEnabled(data.email_notifications_enabled);
        });
      }
      
      if (event === 'SIGNED_OUT') {
        resetProgress();
      }
    });

    return () => subscription.unsubscribe();
  }, [resetProgress]);

  const handleLogin = async () => {
    if (!supabase) return;
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    });
  };

  const handleLogout = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    setDropdownOpen(false);
  };

  const handleResetConsole = async () => {
    if (confirm('Are you sure you want to reset your console? This will wipe ALL progress locally and in the cloud.')) {
      resetProgress();
      if (user && supabase) {
        // Wipe cloud data
        await supabase.from('dsa_progress').delete().eq('user_id', user.id);
      }
      setDropdownOpen(false);
    }
  };

  const toggleEmailPreferences = async () => {
    if (!user || !supabase) return;
    const newValue = !emailEnabled;
    setEmailEnabled(newValue);
    await supabase.from('user_profiles').update({ email_notifications_enabled: newValue }).eq('user_id', user.id);
  };

  if (loading) {
    return (
      <Button variant="ghost" size="sm" disabled className="h-8 w-8 p-0 bg-white/[0.03]">
        <Loader2 className="w-4 h-4 animate-spin text-emerald" />
      </Button>
    );
  }

  if (user) {
    return (
      <div className="relative">
        <Button 
          onClick={() => setDropdownOpen(!dropdownOpen)}
          variant="ghost" 
          size="sm" 
          className="h-8 gap-2 bg-emerald/10 border border-emerald/20 text-emerald hover:bg-emerald/20 hover:text-emerald px-2"
        >
          <div className="w-5 h-5 rounded-full bg-emerald/20 flex items-center justify-center overflow-hidden">
            {user.user_metadata?.avatar_url ? (
              <img src={user.user_metadata.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <UserIcon size={12} className="text-emerald" />
            )}
          </div>
          <span className="text-xs font-medium hidden sm:inline-block">
            {user.user_metadata?.full_name?.split(' ')[0] || 'User'}
          </span>
        </Button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-xl border border-white/[0.08] bg-black/80 backdrop-blur-xl shadow-xl overflow-hidden z-50">
            <div className="p-3 border-b border-white/[0.04]">
              <p className="text-xs font-medium text-foreground truncate">{user.user_metadata?.full_name || 'User'}</p>
              <p className="text-[10px] text-muted-foreground truncate">{user.email}</p>
            </div>
            <div className="p-1">
              {surveyEligible && (
                <button
                  type="button"
                  onClick={() => {
                    setDropdownOpen(false);
                    setSurveyOpen(true);
                  }}
                  className="w-full flex items-center gap-2 px-2 py-2 text-xs text-emerald hover:bg-emerald/10 rounded-lg transition-colors text-left"
                >
                  <MessageCircleHeart size={14} />
                  Help us improve
                </button>
              )}
              <button
                onClick={handleResetConsole}
                className="w-full flex items-center gap-2 px-2 py-2 text-xs text-rose hover:bg-rose/10 rounded-lg transition-colors text-left"
              >
                <RefreshCw size={14} />
                Reset Console
              </button>
              <button
                onClick={toggleEmailPreferences}
                className="w-full flex items-center gap-2 px-2 py-2 text-xs text-muted-foreground hover:bg-white/[0.05] hover:text-white rounded-lg transition-colors text-left"
              >
                {emailEnabled ? <Mail size={14} className="text-emerald" /> : <MailX size={14} />}
                {emailEnabled ? 'Emails: ON' : 'Emails: OFF'}
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-2 py-2 text-xs text-muted-foreground hover:bg-white/[0.05] hover:text-white rounded-lg transition-colors text-left"
              >
                <LogOut size={14} />
                Sign Out
              </button>
            </div>
          </div>
        )}
        <SurveyModal variant="quick" open={surveyOpen} onOpenChange={setSurveyOpen} />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={handleResetConsole}
        variant="ghost"
        size="sm"
        className="h-8 border border-white/[0.06] bg-white/[0.02] text-xs text-muted-foreground hover:text-foreground hover:bg-white/[0.04] gap-1.5 rounded-lg px-3 hidden sm:flex"
      >
        <RefreshCw size={13} />
        Reset Console
      </Button>
      <Button 
        onClick={handleLogin}
        variant="outline" 
        size="sm" 
        className="h-8 bg-emerald/10 border-emerald/30 text-emerald hover:bg-emerald/20 hover:text-emerald text-xs gap-1.5 font-medium shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]"
      >
        <Cloud size={14} />
        <span className="hidden sm:inline-block">Save your progress</span>
        <span className="sm:hidden">Save</span>
      </Button>
    </div>
  );
}
