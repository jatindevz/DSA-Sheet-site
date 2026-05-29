'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { fetchUserProfile } from '@/lib/sync'; // saveUserProfile no longer needed
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Trophy, Flame, BookOpen, Loader2 } from 'lucide-react';

// ── Hooks & Sub-components ──

const useAnimatedCounter = (end: number, duration = 2000, shouldAnimate = false) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!shouldAnimate || end === 0) {
            setCount(end);
            return;
        }
        let startTime: number | null = null;
        let raf: number;
        const step = (ts: number) => {
            if (!startTime) startTime = ts;
            const p = Math.min((ts - startTime) / duration, 1);
            setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
            if (p < 1) raf = requestAnimationFrame(step);
            else setCount(end);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [end, duration, shouldAnimate]);
    return count;
};

const ProgressRing = ({ percentage, size = 80, strokeWidth = 5, color, children }: any) => {
    const r = (size - strokeWidth) / 2,
        c = 2 * Math.PI * r,
        o = c - (percentage / 100) * c;
    return (
        <div className="relative shrink-0" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="transform -rotate-90">
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={r}
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth={strokeWidth}
                />
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={r}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={c}
                    initial={{ strokeDashoffset: c }}
                    whileInView={{ strokeDashoffset: o }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">{children}</div>
        </div>
    );
};

const DifficultyBar = ({ label, solved, total, color, delay = 0 }: any) => {
    const pct = total > 0 ? (solved / total) * 100 : 0;
    return (
        <div className="flex items-center gap-3 w-full">
            <span
                className="text-[10px] uppercase font-bold w-12 text-right tracking-wider"
                style={{ color }}
            >
                {label}
            </span>
            <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    className="h-full rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)]"
                    style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}40` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay }}
                />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground w-12">{solved}</span>
        </div>
    );
};

const StatPill = ({ label, value, color = '#a1a1aa' }: any) => (
    <motion.div
        className="flex flex-col items-center justify-center gap-0.5 px-2 py-2 rounded-xl bg-white/[0.02] border border-white/[0.04]"
        whileHover={{
            scale: 1.05,
            backgroundColor: 'rgba(255,255,255,0.04)',
            borderColor: 'rgba(255,255,255,0.1)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
        <span className="text-sm font-mono font-bold" style={{ color }}>
            {value}
        </span>
        <span className="text-[8px] text-muted-foreground uppercase tracking-wider font-semibold">
            {label}
        </span>
    </motion.div>
);

// ── Guest Stats Row (unchanged) ──

const GuestStatsRow = ({ generalStats }: { generalStats: any }) => (
    <div className="w-full bg-zinc-950 border border-white/[0.04] rounded-xl p-6 flex flex-col items-center justify-center text-center gap-2">
        <Trophy size={24} className="text-muted-foreground opacity-50" />
        <h4 className="text-sm font-bold text-white">Platform Analytics Unavailable</h4>
        <p className="text-xs text-muted-foreground max-w-sm">
            Please sign in to connect your LeetCode and GeeksForGeeks profiles and sync your live problem-solving statistics.
        </p>
    </div>
);

// ── Individual platform connection card ──

const ConnectPlatformCard = ({
    platform,
    userId,
    onConnected,
    className = "",
}: {
    platform: 'leetcode' | 'gfg';
    userId: string;
    onConnected: (username: string) => void;
    className?: string;
}) => {
    const [username, setUsername] = useState('');
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const isLC = platform === 'leetcode';
    const label = isLC ? 'LeetCode Username' : 'GFG Handle';

    const handleSave = async () => {
        if (!username.trim()) {
            setError('Username required');
            return;
        }
        setSaving(true);
        setError(null);

        if (!supabase) {
            setError('Database not configured');
            setSaving(false);
            return;
        }

        // Fetch existing row first so we don't overwrite the other platform
        const { data: existing } = await supabase
            .from('user_profiles')
            .select('lc_username, gfg_username')
            .eq('user_id', userId)
            .maybeSingle();

        const payload = {
            user_id: userId,
            lc_username: isLC ? username.trim() : (existing?.lc_username ?? null),
            gfg_username: isLC ? (existing?.gfg_username ?? null) : username.trim(),
        };

        const { error: upsertError } = await supabase
            .from('user_profiles')
            .upsert(payload, { onConflict: 'user_id' });

        setSaving(false);
        if (upsertError) {
            setError(upsertError.message);
            return;
        }
        onConnected(username.trim());
    };

    return (
        <motion.div
            className={`glass-card noise-texture rounded-2xl border border-white/[0.04] bg-[#0a0a0d]/80 p-5 flex flex-col justify-center h-full ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="flex items-center gap-2 mb-1.5">
                {isLC ? (
                    <div className="w-6 h-6 rounded bg-amber-500/10 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="#ffa116">
                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l.272.219a1.38 1.38 0 0 0 1.945-.072 1.386 1.386 0 0 0-.075-1.952l-.271-.219A5.37 5.37 0 0 0 13.483 0zM20.5 9.5a1.38 1.38 0 0 0-.975.404l-5.108 5.108a1.38 1.38 0 0 0 1.95 1.95l5.108-5.108A1.38 1.38 0 0 0 20.5 9.5z" />
                        </svg>
                    </div>
                ) : (
                    <div className="w-6 h-6 rounded bg-green-500/10 flex items-center justify-center">
                        <svg viewBox="0 0 50 50" width="14" height="14">
                            <text x="5" y="38" fontFamily="Arial Black" fontSize="38" fontWeight="900" fill="#2db54a">
                                G
                            </text>
                        </svg>
                    </div>
                )}
                <span className="text-white font-bold text-sm">{isLC ? 'LeetCode' : 'GeeksForGeeks'}</span>
            </div>
            <label className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 block ${isLC ? 'text-amber-400' : 'text-green-400'}`}>
                {label}
            </label>
            <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={isLC ? 'e.g. JatinPatil_lc' : 'e.g. jatinpatwz7p'}
                className={`bg-black/40 border-white/[0.08] text-xs h-9 mb-3 ${isLC ? 'focus-visible:ring-amber-500/20 focus-visible:border-amber-500/40' : 'focus-visible:ring-green-500/20 focus-visible:border-green-500/40'}`}
            />
            {error && <p className="text-[10px] text-rose mb-2">{error}</p>}
            <Button
                type="button"
                onClick={handleSave}
                disabled={saving}
                className={`w-full h-9 text-xs font-bold border ${isLC ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border-amber-500/20' : 'bg-green-500/10 hover:bg-green-500/20 text-green-400 border-green-500/20'}`}
            >
                {saving ? (
                    <>
                        <Loader2 size={14} className="animate-spin mr-2" /> Saving...
                    </>
                ) : (
                    'Connect'
                )}
            </Button>
        </motion.div>
    );
};

// ── Full Stats Dashboard (unchanged) ──

const FullStatsDashboard = ({
    lcUsername,
    gfgUsername,
    generalStats,
    userId,
    onConnectedLC,
    onConnectedGFG,
}: {
    lcUsername: string | null;
    gfgUsername: string | null;
    generalStats: any;
    userId: string;
    onConnectedLC: (username: string) => void;
    onConnectedGFG: (username: string) => void;
}) => {
    const [lcData, setLcData] = useState<any>(null);
    const [gfgData, setGfgData] = useState<any>(null);
    const [loadingLc, setLoadingLc] = useState(false);
    const [loadingGfg, setLoadingGfg] = useState(false);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

    useEffect(() => {
        if (lcUsername) {
            setLoadingLc(true);
            fetch(`https://leetcode-api-faisalshohag.vercel.app/${lcUsername}`)
                .then(async (r) => {
                    if (!r.ok) throw new Error(`HTTP ${r.status}`);
                    return JSON.parse(await r.text());
                })
                .then((d) => {
                    if (d && !d.errors) setLcData(d);
                })
                .catch((e) => console.error('LeetCode fetch error:', e))
                .finally(() => setLoadingLc(false));
        }
    }, [lcUsername]);

    useEffect(() => {
        if (gfgUsername) {
            setLoadingGfg(true);
            fetch(`/api/gfg-profile?handle=${gfgUsername}`)
                .then(async (r) => {
                    if (!r.ok) throw new Error(`HTTP ${r.status}`);
                    return JSON.parse(await r.text());
                })
                .then((d) => {
                    if (d?.data) setGfgData(d.data);
                })
                .catch((e) => console.error('GFG fetch error:', e))
                .finally(() => setLoadingGfg(false));
        }
    }, [gfgUsername]);

    const lc = lcData || {
        totalSolved: 0,
        easySolved: 0,
        mediumSolved: 0,
        hardSolved: 0,
        totalQuestions: 3943,
        ranking: 0,
    };
    const gfg = gfgData || {
        total_problems_solved: 0,
        score: 0,
        institute_rank: 0,
        pod_solved_longest_streak: 0,
    };
    const lcTotal = lc.totalSolved || 0;
    const lcPct = lc.totalQuestions > 0 ? ((lcTotal / lc.totalQuestions) * 100).toFixed(1) : 0;
    const lcAcc = lc.matchedUserStats?.acSubmissionNum?.[0]?.submissions || 0;
    const lcAllSubs = lc.matchedUserStats?.totalSubmissionNum?.[0]?.submissions || 0;
    const lcAccRate = lcAllSubs > 0 ? ((lcAcc / lcAllSubs) * 100).toFixed(1) : 0;

    const animLcTotal = useAnimatedCounter(lcTotal, 1800, isInView && !!lcData);
    const animGfgTotal = useAnimatedCounter(gfg.total_problems_solved || 0, 1800, isInView && !!gfgData);
    const animGfgScore = useAnimatedCounter(gfg.score || 0, 1800, isInView && !!gfgData);
    const animLcRank = useAnimatedCounter(lc.ranking || 0, 2200, isInView && !!lcData);

    return (
        <div ref={sectionRef} className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    {lcUsername ? (
                        <motion.div
                            className="relative group rounded-xl border border-white/[0.08] bg-zinc-950 p-5 flex flex-col justify-between"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: 'spring', delay: 0.1 }}
                        >
                            {/* ... unchanged LeetCode card content ... */}
                            <div className="flex items-center justify-between mb-4 z-10">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded bg-amber-500/10 flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" width="14" height="14" fill="#ffa116">
                                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l.272.219a1.38 1.38 0 0 0 1.945-.072 1.386 1.386 0 0 0-.075-1.952l-.271-.219A5.37 5.37 0 0 0 13.483 0zM20.5 9.5a1.38 1.38 0 0 0-.975.404l-5.108 5.108a1.38 1.38 0 0 0 1.95 1.95l5.108-5.108A1.38 1.38 0 0 0 20.5 9.5z" />
                                        </svg>
                                    </div>
                                    <span className="text-white font-bold text-sm">LeetCode</span>
                                </div>
                                <a
                                    href={`https://leetcode.com/u/${lcUsername}/`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[10px] font-bold text-muted-foreground hover:text-amber-400 transition-colors uppercase tracking-wider"
                                >
                                    View
                                </a>
                            </div>
                            <div className="flex items-center gap-4 mb-4 z-10">
                                <ProgressRing percentage={parseFloat(lcPct as string)} size={72} strokeWidth={4} color="#ffa116">
                                    <div className="text-center mt-1">
                                        {loadingLc ? (
                                            <div className="w-4 h-4 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin mx-auto" />
                                        ) : (
                                            <span className="text-lg font-black font-mono text-white leading-none">{animLcTotal}</span>
                                        )}
                                    </div>
                                </ProgressRing>
                                <div className="flex-1 space-y-2.5">
                                    <DifficultyBar label="Easy" solved={lc.easySolved || 0} total={lc.totalEasy || 1} color="#00b8a3" delay={0.1} />
                                    <DifficultyBar label="Med" solved={lc.mediumSolved || 0} total={lc.totalMedium || 1} color="#ffc01e" delay={0.2} />
                                    <DifficultyBar label="Hard" solved={lc.hardSolved || 0} total={lc.totalHard || 1} color="#ef4743" delay={0.3} />
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 z-10">
                                <StatPill label="Acc." value={`${lcAccRate}%`} color="#00b8a3" />
                                <StatPill label="Rank" value={animLcRank === 0 ? '--' : `#${animLcRank.toLocaleString()}`} color="#ffa116" />
                                <StatPill label="Subs" value={lcAllSubs === 0 ? '--' : lcAllSubs.toLocaleString()} color="#a78bfa" />
                            </div>
                        </motion.div>
                    ) : (
                        <ConnectPlatformCard
                            platform="leetcode"
                            userId={userId}
                            onConnected={onConnectedLC}
                            className="w-full" // ensure full width inside flex-1
                        />
                    )}
                </div>

                {/* GFG Card / Connect */}
                <div className="flex-1">
                    {gfgUsername ? (
                        <motion.div
                            className="relative group rounded-xl border border-white/[0.08] bg-zinc-950 p-5 flex flex-col justify-between"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: 'spring', delay: 0.2 }}
                        >
                            {/* ... unchanged GFG card content ... */}
                            <div className="flex items-center justify-between mb-4 z-10">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded bg-green-500/10 flex items-center justify-center">
                                        <svg viewBox="0 0 50 50" width="14" height="14">
                                            <text x="5" y="38" fontFamily="Arial Black" fontSize="38" fontWeight="900" fill="#2db54a">
                                                G
                                            </text>
                                        </svg>
                                    </div>
                                    <span className="text-white font-bold text-sm">GeeksForGeeks</span>
                                </div>
                                <a
                                    href={`https://www.geeksforgeeks.org/profile/${gfgUsername}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[10px] font-bold text-muted-foreground hover:text-green-400 transition-colors uppercase tracking-wider"
                                >
                                    View
                                </a>
                            </div>
                            <div className="flex items-center gap-4 mb-4 z-10">
                                <ProgressRing
                                    percentage={loadingGfg ? 0 : Math.min((gfg.total_problems_solved || 0) / 3, 100)}
                                    size={72}
                                    strokeWidth={4}
                                    color="#2db54a"
                                >
                                    <div className="text-center mt-1">
                                        {loadingGfg ? (
                                            <div className="w-4 h-4 border-2 border-green-500/30 border-t-green-500 rounded-full animate-spin mx-auto" />
                                        ) : (
                                            <span className="text-lg font-black font-mono text-white leading-none">{animGfgTotal}</span>
                                        )}
                                    </div>
                                </ProgressRing>
                                <div className="flex-1 space-y-3 w-full">
                                    <div>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Score</span>
                                            <span className="text-[10px] font-mono font-bold text-green-400">{animGfgScore}</span>
                                        </div>
                                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full rounded-full shadow-[0_0_8px_rgba(45,181,74,0.4)]"
                                                style={{ backgroundColor: '#2db54a' }}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${Math.min(((gfg.score || 0) / 1000) * 100, 100)}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.1 }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Rank</span>
                                            <span className="text-[10px] font-mono font-bold text-amber-400">#{gfg.institute_rank || 0}</span>
                                        </div>
                                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full rounded-full shadow-[0_0_8px_rgba(251,191,36,0.4)]"
                                                style={{ backgroundColor: '#fbbf24' }}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${Math.max(100 - (gfg.institute_rank || 80), 20)}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.2 }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 z-10">
                                <StatPill label="Max Streak" value={gfg.pod_solved_longest_streak || 0} color="#f97316" />
                                <StatPill label="POTD Solved" value={gfg.pod_correct_submissions_count || 0} color="#facc15" />
                            </div>
                        </motion.div>
                    ) : (
                        <ConnectPlatformCard
                            platform="gfg"
                            userId={userId}
                            onConnected={onConnectedGFG}
                            className="w-full"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

// ── Main Export: CodingStats ──

export const CodingStats = ({ generalStats }: { generalStats: any }) => {
    const [session, setSession] = useState<any>(null);
    const [sessionLoading, setSessionLoading] = useState(true);
    const [profile, setProfile] = useState<{ lc_username: string | null; gfg_username: string | null } | null>(null);
    const [profileLoading, setProfileLoading] = useState(false);

    // Listen to auth state
    useEffect(() => {
        if (!supabase) {
            setSessionLoading(false);
            return;
        }
        supabase.auth.getSession().then(({ data: { session: s } }) => {
            setSession(s);
            setSessionLoading(false);
        });
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, s) => {
            setSession(s);
            if (!s) setProfile(null);
        });
        return () => subscription.unsubscribe();
    }, []);

    // Fetch profile when session exists
    useEffect(() => {
        if (!session?.user?.id) {
            setProfile(null);
            return;
        }
        setProfileLoading(true);
        fetchUserProfile(session.user.id).then((p) => {
            setProfile(p);
            setProfileLoading(false);
        });
    }, [session?.user?.id]);


    if (sessionLoading) return null
    if (!session) return null
    // Profile loading spinner
    if (profileLoading) {
        return (
            <div className="flex items-center justify-center gap-3 py-8">
                <Loader2 size={20} className="animate-spin text-emerald" />
                <span className="text-xs text-muted-foreground">Loading your coding profiles...</span>
            </div>
        );
    }

    const refetchProfile = async () => {
        if (!session?.user?.id) return;
        const p = await fetchUserProfile(session.user.id);
        setProfile(p);
    };

    return (
        <FullStatsDashboard
            lcUsername={profile?.lc_username || null}
            gfgUsername={profile?.gfg_username || null}
            generalStats={generalStats}
            userId={session.user.id}
            onConnectedLC={async (username) => {
                setProfile((prev) => (prev ? { ...prev, lc_username: username } : { lc_username: username, gfg_username: null }));
                await refetchProfile();
            }}
            onConnectedGFG={async (username) => {
                setProfile((prev) => (prev ? { ...prev, gfg_username: username } : { lc_username: null, gfg_username: username }));
                await refetchProfile();
            }}
        />
    );
};


