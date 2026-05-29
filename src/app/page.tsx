'use client';

import { useEffect, useState, useMemo } from 'react';
import { Terminal, Database, Sparkles, BookOpen, Flame, Trophy, Award, Search, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useDSAStore } from '@/store/dsa-store';
import { BABBAR_SHEET_DATA } from '@/lib/babbar-sheet-data';
import { PATTERN_SHEET_DATA } from '@/lib/pattern-data';
import { STRIVER_SHEET_DATA } from '@/lib/striver-sheet-data';
import Link from 'next/link';
import { TopicProblems } from '@/components/dsa/TopicProblems';
import { RevisionQueue } from '@/components/dsa/RevisionQueue';
import { AuthDropdown } from '@/components/AuthDropdown';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { CodingStats } from '@/components/dsa/CodingStats';
import { ActivityHeatmap } from '@/components/dsa/ActivityHeatmap';

export interface LeetCodePOTD {
  title: string;
  url: string;
  difficulty: 'easy' | 'medium' | 'hard';
  date: string;
}

export interface GfgPOTD {
  title: string;
  url: string;
  difficulty: string;
}

export default function Home() {
  const {
    viewMode, setViewMode,
    selectedTopicId, setSelectedTopicId,
    selectedPatternId, setSelectedPatternId,
    progress, resetProgress, updateProgress
  } = useDSAStore();
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [globalSearch, setGlobalSearch] = useState('');
  const [globalSearchInput, setGlobalSearchInput] = useState('');
  const [potd, setPotd] = useState<LeetCodePOTD | null>(null);
  const [potdLoading, setPotdLoading] = useState(true);
  const [gfgPotd, setGfgPotd] = useState<GfgPOTD | null>(null);
  const [gfgPotdLoading, setGfgPotdLoading] = useState(true);
  const [onlineCount, setOnlineCount] = useState(14);
  const [lcClicked, setLcClicked] = useState(false);
  const [gfgClicked, setGfgClicked] = useState(false);
  const [potdDone, setPotdDone] = useState(false);
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const savedDoneDate = localStorage.getItem('potdDoneDate');
    if (savedDoneDate === today) {
      setPotdDone(true);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    // Default select Arrays topic if nothing is selected to keep dashboard full and engaging
    if (!selectedTopicId) {
      setSelectedTopicId('Arrays');
    }
    if (!selectedPatternId) {
      setSelectedPatternId('Two Pointers');
    }

    // Fetch live LeetCode POTD
    fetch('/api/leetcode-potd')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch POTD');
        return res.json();
      })
      .then((data) => {
        if (data && data.question) {
          setPotd({
            title: data.question.title,
            url: `https://leetcode.com${data.link}`,
            difficulty: data.question.difficulty.toLowerCase() as any,
            date: data.date,
          });
        }
        setPotdLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching LeetCode POTD:', err);
        setPotdLoading(false);
      });

    // Fetch live GFG POTD
    fetch('/api/gfg-potd')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch GFG POTD');
        return res.json();
      })
      .then((data) => {
        if (data && data.problem_name) {
          setGfgPotd({
            title: data.problem_name,
            url: data.problem_url,
            difficulty: data.difficulty,
          });
        }
        setGfgPotdLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching GFG POTD:', err);
        setGfgPotdLoading(false);
      });
  }, [selectedTopicId, setSelectedTopicId]);

  // Online user count simulated oscillation effect
  useEffect(() => {
    setOnlineCount(Math.floor(Math.random() * (22 - 12 + 1)) + 12);
    const interval = setInterval(() => {
      setOnlineCount((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newCount = prev + change;
        if (newCount < 11) return 11;
        if (newCount > 25) return 25;
        return newCount;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Compute problems array from ALL sheets + progress (deduplicated by title)
  const allProblems = useMemo(() => {
    const seen = new Set<string>();
    const arr: any[] = [];

    const addSheet = (sheetData: any[], sheetLabel: string) => {
      sheetData.forEach((topic: any) => {
        topic.problems.forEach((p: any) => {
          if (seen.has(p.title)) return; // skip duplicates across sheets
          seen.add(p.title);
          const userProg = progress[p.title] || {};
          arr.push({
            id: `${topic.name}-${p.title}`,
            title: p.title,
            difficulty: p.difficulty,
            url: p.url,
            leetcodeUrl: p.leetcodeUrl || null,
            articleUrl: p.articleUrl || null,
            topicId: topic.name,
            topic: { name: topic.name, icon: topic.icon, color: topic.color },
            platform: sheetLabel,
            status: userProg.status || 'todo',
            marks: userProg.marks || 0,
            revisionStage: userProg.revisionStage || 0,
            nextRevisionDate: userProg.nextRevisionDate || null,
            solvedAt: userProg.solvedAt || null,
            notes: userProg.notes || '',
            pattern: p.pattern || 'Uncategorized',
          });
        });
      });
    };

    addSheet(BABBAR_SHEET_DATA, 'babbar');
    addSheet(PATTERN_SHEET_DATA, 'patterns');
    addSheet(STRIVER_SHEET_DATA, 'striver');

    return arr;
  }, [progress]);

  // Compute Topics


  // General Stats
  const stats = useMemo(() => {
    const total = allProblems.length;
    const solved = allProblems.filter(p => p.status === 'solved').length;
    const easySolved = allProblems.filter(p => p.difficulty === 'easy' && p.status === 'solved').length;
    const mediumSolved = allProblems.filter(p => p.difficulty === 'medium' && p.status === 'solved').length;
    const hardSolved = allProblems.filter(p => p.difficulty === 'hard' && p.status === 'solved').length;
    const easyTotal = allProblems.filter(p => p.difficulty === 'easy').length;
    const mediumTotal = allProblems.filter(p => p.difficulty === 'medium').length;
    const hardTotal = allProblems.filter(p => p.difficulty === 'hard').length;

    const dueRevisions = allProblems.filter(p => {
      if (p.status !== 'solved' || !p.nextRevisionDate) return false;
      if (p.revisionStage >= 5) return false;
      const due = new Date(p.nextRevisionDate);
      const today = new Date();
      due.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);
      return due.getTime() <= today.getTime();
    });

    // Estimate streak based on daily count
    const solvedDates = allProblems
      .filter(p => p.status === 'solved' && p.solvedAt)
      .map(p => p.solvedAt!.split('T')[0]);
    const uniqueDates = Array.from(new Set(solvedDates));
    const currentStreak = uniqueDates.length; // Simplified streak calculation

    return {
      total,
      solved,
      easySolved,
      mediumSolved,
      hardSolved,
      easyTotal,
      mediumTotal,
      hardTotal,
      dueRevisionsCount: dueRevisions.length,
      currentStreak,
      accuracy: total > 0 ? Math.round((solved / total) * 100) : 0
    };
  }, [allProblems]);

  const activityData = useMemo(() => {
    const days: { date: string; count: number }[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = new Date(today.getFullYear(), 0, 1);

    const toDateStr = (d: Date) => {
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${y}-${m}-${day}`;
    };

    for (let d = new Date(start); d <= today; d.setDate(d.getDate() + 1)) {
      days.push({ date: toDateStr(new Date(d)), count: 0 });
    }

    allProblems.forEach((p) => {
      if (p.status === 'solved' && p.solvedAt) {
        const solvedDate = p.solvedAt.split('T')[0];
        const day = days.find((d) => d.date === solvedDate);
        if (day) {
          day.count += 1;
        }
      }
    });

    return { days };
  }, [allProblems]);
  // Global search matching problems
  const globalFilteredProblems = useMemo(() => {
    if (!globalSearch) return [];
    return allProblems.filter(p =>
      p.title.toLowerCase().includes(globalSearch.toLowerCase())
    );
  }, [allProblems, globalSearch]);

  // Debounce global search input to avoid heavy filtering on every keystroke
  useEffect(() => {
    const id = setTimeout(() => {
      setGlobalSearch(globalSearchInput);
    }, 300);
    return () => clearTimeout(id);
  }, [globalSearchInput]);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="min-h-screen flex flex-col bg-[#08080a] text-[#e2e2e9] font-sans selection:bg-emerald/30 selection:text-white">
      {/* Header Banner */}
      <header className="h-12 border-b border-white/[0.04] bg-[#0a0a0d]/80 backdrop-blur-xl sticky top-0 z-50 px-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-emerald/10 border border-emerald/20 text-emerald animate-pulse">
            <Terminal size={15} />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              DSA Console
              <span className="text-[9px] font-mono font-medium px-1 py-px rounded bg-emerald/10 text-emerald border border-emerald/20">
                v2.0
              </span>
            </h1>
            <p className="text-[9px] text-muted-foreground">Premium Spaced-Repetition Analytics Dashboard</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Fake Online Active Users */}
          {/* <div className="hidden md:flex items-center gap-1.5 bg-emerald/5 border border-emerald/10 px-2.5 py-1 rounded-full font-mono text-[15px] font-bold text-emerald tracking-wide shrink-0 shadow-lg shadow-emerald/5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald"></span>
              </span>
              {onlineCount} ONLINE
            </div> */}

          {/* Global Search Bar */}
          <div className="relative w-44 sm:w-56">
            <Search size={12} className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-muted-foreground/50" />
            <input
              type="text"
              value={globalSearchInput}
              onChange={(e) => setGlobalSearchInput(e.target.value)}
              placeholder="Search problems......"
              className="w-full bg-[#0d0d12]/60 border border-white/[0.06] focus:border-emerald/40 focus:ring-1 focus:ring-emerald/5 text-[11px] px-7 py-1 rounded-lg text-white placeholder-muted-foreground/40 transition-all outline-none"
            />
          </div>

          <AuthDropdown />
        </div>
      </header>

      {/* Main Workspace Frame */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden w-full mx-auto">
        {/* LEFT COLUMN: Clean Sidebar Nav & Overall Progress */}
        <aside className="w-full lg:w-[260px] border-r border-white/[0.04] bg-[#0a0a0d]/40 p-4 flex flex-col gap-4 shrink-0 overflow-y-auto custom-scrollbar">
          {/* Progress Widget */}
          <div className="glass-card-glow noise-texture p-3.5 rounded-xl flex items-center gap-3.5 border border-emerald/20">
            <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-white/[0.03]"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="transparent"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <motion.path
                  initial={{ strokeDasharray: '0, 100' }}
                  animate={{ strokeDasharray: `${stats.accuracy}, 100` }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="text-emerald"
                  strokeWidth="3.2"
                  strokeDasharray={`${stats.accuracy}, 100`}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-mono text-sm font-bold text-white leading-none">{stats.accuracy}%</span>
                <span className="text-[8px] text-muted-foreground/80 font-medium">accuracy</span>
              </div>
            </div>
            <div className="min-w-0">
              <h3 className="text-[10px] font-semibold uppercase text-muted-foreground/60 tracking-wider">Overall Progress</h3>
              <p className="font-mono text-2xl font-extrabold text-white mt-0.5 leading-none">
                {stats.solved} <span className="text-[10px] text-muted-foreground font-normal">/ {stats.total}</span>
              </p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <Award size={12} className="text-emerald shrink-0" />
                <span className="text-[9px] text-muted-foreground font-medium">Across All Sheets</span>
              </div>
            </div>
          </div>

          {/* Daily Challenges (POTD in Sidebar) */}
          {(!potdLoading || !gfgPotdLoading) && (
            <div className="flex flex-col gap-2">
              <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Terminal size={12} className="text-amber" />
                Daily Challenges
              </h3>
              <div className="flex flex-col gap-1.5">
                {potd && (
                  <a
                    href={potd.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setLcClicked(true)}
                    className="glass-card noise-texture flex items-center justify-between p-2.5 rounded-lg border border-[#ffa116]/10 hover:border-[#ffa116]/30 hover:bg-[#ffa116]/5 transition-all gap-2 group/lc"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="p-1.5 rounded-md bg-[#ffa116]/10 text-[#ffa116] shrink-0 border border-[#ffa116]/20">
                        <Terminal size={12} />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[8px] font-bold text-[#ffa116] tracking-wider uppercase block">LeetCode POTD</span>
                        <span className="text-[11px] font-medium text-white truncate block max-w-[120px]">{potd.title}</span>
                      </div>
                    </div>
                    <div className="shrink-0 bg-[#ffa116]/10 group-hover/lc:bg-[#ffa116]/20 text-[#ffa116] p-1 rounded-md transition-all border border-[#ffa116]/20 flex items-center justify-center">
                      <ExternalLink size={10} />
                    </div>
                  </a>
                )}

                {gfgPotd && (
                  <a
                    href={gfgPotd.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setGfgClicked(true)}
                    className="glass-card noise-texture flex items-center justify-between p-2.5 rounded-lg border border-[#2f8d46]/10 hover:border-[#2f8d46]/30 hover:bg-[#2f8d46]/5 transition-all gap-2 group/gfg"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="p-1.5 rounded-md bg-[#2f8d46]/10 text-[#2f8d46] shrink-0 border border-[#2f8d46]/20">
                        <Terminal size={12} />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[8px] font-bold text-[#2f8d46] tracking-wider uppercase block">GFG POTD</span>
                        <span className="text-[11px] font-medium text-white truncate block max-w-[120px]">{gfgPotd.title}</span>
                      </div>
                    </div>
                    <div className="shrink-0 bg-[#2f8d46]/10 group-hover/gfg:bg-[#2f8d46]/20 text-[#2f8d46] p-1 rounded-md transition-all border border-[#2f8d46]/20 flex items-center justify-center">
                      <ExternalLink size={10} />
                    </div>
                  </a>
                )}
              </div>
            </div>
          )}
        </aside>

        {/* RIGHT COLUMN: Interactive Workspace Grid */}
        <main className="flex-1 overflow-y-auto custom-scrollbar p-4 max-w-[1200px] w-full mx-auto flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">

              {/* Active Streak */}
              <div className="glass-card noise-texture rounded-xl border border-white/[0.04] px-4 py-3.5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber/10 text-amber border border-amber/10 shrink-0">
                  <Flame size={15} />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] uppercase tracking-wider font-bold text-muted-foreground">Active Streak</p>
                  <div className="flex items-end gap-1.5 mt-0.5">
                    <span className="font-mono text-2xl font-extrabold leading-none text-white">{stats.currentStreak}</span>
                    <span className="text-[11px] text-muted-foreground mb-px">Days</span>
                  </div>
                </div>
              </div>

              {/* Due Revisions */}
              <div className="glass-card noise-texture rounded-xl border border-white/[0.04] px-4 py-3.5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-rose/10 text-rose border border-rose/10 shrink-0">
                  <BookOpen size={15} />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] uppercase tracking-wider font-bold text-muted-foreground">Due Revisions</p>
                  <div className="flex items-end gap-1.5 mt-0.5">
                    <span className="font-mono text-2xl font-extrabold leading-none text-white">{stats.dueRevisionsCount}</span>
                    <span className="text-[11px] text-muted-foreground mb-px">Today</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <ActivityHeatmap activity={activityData} />
              </div>
            </div>
          </div>

          {/* ACTIVE DUE REVISIONS QUEUE */}
          <RevisionQueue allProblems={allProblems} />


          {globalSearch ? (
            <div className="flex-1 flex flex-col gap-3 min-h-0">
              <div className="glass-card noise-texture p-3 rounded-lg flex items-center justify-between border border-emerald/20 bg-emerald/[0.01]">
                <div>
                  <h2 className="text-sm font-extrabold text-white flex items-center gap-1.5">
                    <Sparkles size={14} className="text-emerald animate-pulse" />
                    Search Results for "{globalSearch}"
                  </h2>
                  <p className="text-[9px] text-muted-foreground font-medium">
                    Found {globalFilteredProblems.length} matching problems across all categories
                  </p>
                </div>
                <Button
                  onClick={() => {
                    setGlobalSearch('');
                    setGlobalSearchInput('');
                  }}
                  variant="ghost"
                  size="sm"
                  className="h-6 text-[11px] text-muted-foreground hover:text-white"
                >
                  Clear Search
                </Button>
              </div>

              <div className="bento-animate flex-1 flex flex-col min-h-0">
                <TopicProblems
                  problems={globalFilteredProblems}
                  isLoading={false}
                  topicName="Global Search"
                  onBack={() => {
                    setGlobalSearch('');
                    setGlobalSearchInput('');
                  }}
                />
              </div>
            </div>
          ) : (
            <>
              {/* PROBLEM SHEETS BENTO CARDS */}
              <div className="pt-2">
                <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Database size={13} className="text-emerald" />
                  Problem Sheets
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      id: 'babbar',
                      title: 'Love Babbar 450',
                      subtitle: 'Core Data Structures',
                      icon: <Database size={24} className="text-emerald" />,
                      data: BABBAR_SHEET_DATA,
                      classes: {
                        bgIcon: 'bg-emerald/10',
                        borderIcon: 'border-emerald/20',
                        textIcon: 'text-emerald',
                        hoverText: 'group-hover:text-emerald',
                        bgBar: 'bg-emerald',
                        glow: 'bg-emerald/10',
                        glowHover: 'group-hover:bg-emerald/20'
                      }
                    },
                    {
                      id: 'patterns',
                      title: 'DSA Patterns',
                      subtitle: 'Organized by Algorithm',
                      icon: <Sparkles size={24} className="text-cyan" />,
                      data: PATTERN_SHEET_DATA,
                      classes: {
                        bgIcon: 'bg-cyan/10',
                        borderIcon: 'border-cyan/20',
                        textIcon: 'text-cyan',
                        hoverText: 'group-hover:text-cyan',
                        bgBar: 'bg-cyan',
                        glow: 'bg-cyan/10',
                        glowHover: 'group-hover:bg-cyan/20'
                      }
                    },
                    {
                      id: 'striver',
                      title: "Striver's SDE Sheet",
                      subtitle: 'Top Interview Questions',
                      icon: <Trophy size={24} className="text-amber" />,
                      data: STRIVER_SHEET_DATA,
                      classes: {
                        bgIcon: 'bg-amber/10',
                        borderIcon: 'border-amber/20',
                        textIcon: 'text-amber',
                        hoverText: 'group-hover:text-amber',
                        bgBar: 'bg-amber',
                        glow: 'bg-amber/10',
                        glowHover: 'group-hover:bg-amber/20'
                      }
                    }
                  ].map((sheet) => {
                    const sheetTotal = sheet.data.reduce((acc: number, t: any) => acc + t.problems.length, 0);
                    const sheetSolved = sheet.data.reduce((acc: number, t: any) => acc + t.problems.filter((p: any) => progress[p.title]?.status === 'solved').length, 0);
                    const percent = sheetTotal > 0 ? Math.round((sheetSolved / sheetTotal) * 100) : 0;

                    return (
                      <Link href={`/sheets/${sheet.id}`} key={sheet.id} className="block group">
                        <div className="glass-card noise-texture h-full p-4 rounded-xl flex flex-col gap-3 border border-white/[0.04] group-hover:border-white/[0.1] group-hover:bg-white/[0.02] transition-all relative overflow-hidden">
                          <div className="flex items-start justify-between z-10">
                            <div className={`p-2 rounded-lg ${sheet.classes.bgIcon} border ${sheet.classes.borderIcon} ${sheet.classes.textIcon}`}>
                              {sheet.icon}
                            </div>
                            <Badge variant="outline" className={`font-mono text-[9px] bg-white/5 border-white/10`}>
                              {sheetSolved} / {sheetTotal} Solved
                            </Badge>
                          </div>

                          <div className="z-10 mt-1">
                            <h4 className={`text-sm font-bold text-white ${sheet.classes.hoverText} transition-colors`}>{sheet.title}</h4>
                            <p className="text-[11px] text-muted-foreground mt-0.5">{sheet.subtitle}</p>
                          </div>

                          <div className="mt-auto pt-3 z-10">
                            <div className="flex items-center justify-between text-[9px] font-bold font-mono text-muted-foreground mb-1.5">
                              <span>PROGRESS</span>
                              <span className="text-white">{percent}%</span>
                            </div>
                            <div className="h-1 w-full bg-black/40 rounded-full overflow-hidden border border-white/[0.04]">
                              <div className={`h-full ${sheet.classes.bgBar} rounded-full transition-all duration-1000`} style={{ width: `${percent}%` }} />
                            </div>
                          </div>

                          <div className={`absolute -bottom-10 -right-10 w-32 h-32 ${sheet.classes.glow} rounded-full blur-[40px] ${sheet.classes.glowHover} transition-all z-0 pointer-events-none`} />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
              {/* Coding Stats Footer Area */}
              {session && (
                <div className="pt-4 mt-auto border-t border-white/[0.04]">
                  <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-3">Platform Analytics</h3>
                  <CodingStats generalStats={stats} />
                </div>
              )}
            </>
          )}
        </main>
      </div>

      <footer className="h-10 border-t border-white/[0.04] flex items-center justify-center">
        <p className="text-[9px] text-muted-foreground/30 font-medium">
          Hardcoded and Local. Fast and Resilient. Built with focus.
        </p>
      </footer>
    </div >
  );
}
