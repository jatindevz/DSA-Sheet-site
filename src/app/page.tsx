'use client';

import { useEffect, useState, useMemo } from 'react';
import { Terminal, Database, Sparkles, BookOpen, Flame, Trophy, Award, Search, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useDSAStore } from '@/store/dsa-store';
import { BABBAR_SHEET_DATA } from '@/lib/babbar-sheet-data';
import { TopicProblems } from '@/components/dsa/TopicProblems';
import { RevisionQueue } from '@/components/dsa/RevisionQueue';
import { motion, AnimatePresence } from 'framer-motion';

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
  const { selectedTopicId, setSelectedTopicId, progress, resetProgress } = useDSAStore();
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [globalSearch, setGlobalSearch] = useState('');
  const [potd, setPotd] = useState<LeetCodePOTD | null>(null);
  const [potdLoading, setPotdLoading] = useState(true);
  const [gfgPotd, setGfgPotd] = useState<GfgPOTD | null>(null);
  const [gfgPotdLoading, setGfgPotdLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Default select Arrays topic if nothing is selected to keep dashboard full and engaging
    if (!selectedTopicId) {
      setSelectedTopicId('Arrays');
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

  // Compute problems array from BABBAR_SHEET_DATA + progress
  const allProblems = useMemo(() => {
    const arr: any[] = [];
    BABBAR_SHEET_DATA.forEach(topic => {
      topic.problems.forEach(p => {
        const userProg = progress[p.title] || {};
        arr.push({
          id: p.title,
          title: p.title,
          difficulty: p.difficulty,
          url: p.url,
          articleUrl: p.articleUrl,
          topicId: topic.name,
          topic: { name: topic.name, icon: topic.icon, color: topic.color },
          platform: 'gfg',
          status: userProg.status || 'todo',
          marks: userProg.marks || 0,
          revisionStage: userProg.revisionStage || 0,
          nextRevisionDate: userProg.nextRevisionDate || null,
          solvedAt: userProg.solvedAt || null,
          notes: userProg.notes || '',
        });
      });
    });
    return arr;
  }, [progress]);

  // Compute Topics
  const topics = useMemo(() => {
    return BABBAR_SHEET_DATA.map(t => {
      const topicProbs = allProblems.filter(p => p.topicId === t.name);
      return {
        id: t.name,
        name: t.name,
        icon: t.icon,
        color: t.color,
        total: topicProbs.length,
        solved: topicProbs.filter(p => p.status === 'solved').length,
      };
    });
  }, [allProblems]);

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

  const selectedTopic = topics.find(t => t.id === selectedTopicId);
  const rawTopicProblems = allProblems.filter(p => p.topicId === selectedTopicId);

  // Filter problems by search query if any
  const topicProblems = useMemo(() => {
    if (!searchQuery) return rawTopicProblems;
    return rawTopicProblems.filter(p =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [rawTopicProblems, searchQuery]);

  // Global search matching problems
  const globalFilteredProblems = useMemo(() => {
    if (!globalSearch) return [];
    return allProblems.filter(p =>
      p.title.toLowerCase().includes(globalSearch.toLowerCase())
    );
  }, [allProblems, globalSearch]);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="min-h-screen flex flex-col bg-[#08080a] text-[#e2e2e9] font-sans selection:bg-emerald/30 selection:text-white">
      {/* Header Banner */}
      <header className="h-16 border-b border-white/[0.04] bg-[#0a0a0d]/80 backdrop-blur-xl sticky top-0 z-50 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald/10 border border-emerald/20 text-emerald animate-pulse">
            <Terminal size={18} />
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-white flex items-center gap-1.5">
              Love Babbar DSA Console
              <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-emerald/10 text-emerald border border-emerald/20">
                v2.0
              </span>
            </h1>
            <p className="text-[10px] text-muted-foreground">Premium Spaced-Repetition Analytics Dashboard</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Global Search Bar */}
          <div className="relative w-48 sm:w-64">
            <Search size={13} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground/50" />
            <input
              type="text"
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              placeholder="Search all 443 problems..."
              className="w-full bg-[#0d0d12]/60 border border-white/[0.06] focus:border-emerald/40 focus:ring-1 focus:ring-emerald/5 text-xs px-8 py-1.5 rounded-lg text-white placeholder-muted-foreground/40 transition-all outline-none"
            />
          </div>

          <Button
            onClick={() => {
              if (confirm('Reset tracker? All your custom solving status, confidence ratings, and notes will be permanently deleted.')) {
                resetProgress();
              }
            }}
            variant="ghost"
            size="sm"
            className="h-8 border border-white/[0.06] bg-white/[0.02] text-xs text-muted-foreground hover:text-foreground hover:bg-white/[0.04] gap-1.5 rounded-lg px-3"
          >
            <Database size={13} />
            Reset Console
          </Button>
        </div>
      </header>

      {/* Main Workspace Frame */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden max-w-[1600px] w-full mx-auto">
        {/* LEFT COLUMN: Clean Sidebar Nav & Overall Progress */}
        <aside className="w-full lg:w-[360px] border-r border-white/[0.04] bg-[#0a0a0d]/40 p-5 flex flex-col gap-5 shrink-0 overflow-y-auto custom-scrollbar">
          {/* Main Progress Ring widget */}
          <div className="glass-card-glow noise-texture p-4 rounded-2xl flex items-center gap-4 border border-emerald/20">
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
              <h3 className="text-xs font-semibold uppercase text-muted-foreground/60 tracking-wider">Overall Progress</h3>
              <p className="font-mono text-xl font-extrabold text-white mt-0.5 leading-none">
                {stats.solved} <span className="text-xs text-muted-foreground font-normal">/ {stats.total} Solved</span>
              </p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <Award size={12} className="text-emerald shrink-0" />
                <span className="text-[10px] text-muted-foreground font-medium">Love Babbar 450 Sheet</span>
              </div>
            </div>
          </div>

          {/* POTD in Sidebar */}
          {(!potdLoading || !gfgPotdLoading) && (
            <div className="glass-card-glow noise-texture p-4 rounded-2xl flex flex-col gap-3 border border-amber/20 bg-amber/[0.01]">
              <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-amber/10 text-amber animate-pulse">
                    <Sparkles size={14} />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase text-amber tracking-wider font-bold">Daily Challenges</span>
                </div>
                <span className="text-[8px] font-mono font-medium px-1.5 py-0.5 rounded bg-white/5 border border-white/[0.06] text-muted-foreground">
                  {potd?.date || new Date().toISOString().split('T')[0]}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                {/* LeetCode Row */}
                {potd && (
                  <a
                    href={potd.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-black/20 border border-white/[0.03] hover:bg-[#ffa116]/5 hover:border-[#ffa116]/20 transition-all gap-2 group/lc"
                  >
                    <span className="text-[10px] font-extrabold text-[#ffa116] tracking-wide uppercase ml-4">LeetCode POTD</span>
                    <div className="shrink-0 bg-[#ffa116]/10 group-hover/lc:bg-[#ffa116]/20 text-[#ffa116] p-1.5 rounded-md transition-all border border-[#ffa116]/20 flex items-center justify-center">
                      <ExternalLink size={12} />
                    </div>
                  </a>
                )}

                {/* GFG Row */}
                {gfgPotd && (
                  <a
                    href={gfgPotd.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-black/20 border border-white/[0.03] hover:bg-[#2f8d46]/5 hover:border-[#2f8d46]/20 transition-all gap-2 group/gfg"
                  >
                    <span className="text-[10px] font-extrabold text-[#2f8d46] tracking-wide uppercase ml-4">GeeksforGeeks POTD</span>
                    <div className="shrink-0 bg-[#2f8d46]/10 group-hover/gfg:bg-[#2f8d46]/20 text-[#2f8d46] p-1.5 rounded-md transition-all border border-[#2f8d46]/20 flex items-center justify-center">
                      <ExternalLink size={12} />
                    </div>
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Topics List Navigation Menu */}
          <div className="flex-1 flex flex-col min-h-[300px]">
            <h3 className="text-[10px] font-bold uppercase text-muted-foreground tracking-wider mb-2.5 px-1">
              Select DSA Topic ({topics.length})
            </h3>
            <div className="space-y-1.5 overflow-y-auto pr-1 flex-1 custom-scrollbar max-h-[420px] lg:max-h-none">
              {topics.map((t) => {
                const isSelected = selectedTopicId === t.id;
                const percent = t.total > 0 ? Math.round((t.solved / t.total) * 100) : 0;

                return (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTopicId(t.id)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between gap-3 group relative overflow-hidden ${isSelected
                      ? 'bg-emerald/[0.04] border-emerald/40 shadow-lg shadow-emerald/[0.02]'
                      : 'bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.02] hover:border-white/[0.08]'
                      }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 z-10">
                      <span className="text-base shrink-0">{t.icon}</span>
                      <span className={`text-xs font-semibold truncate ${isSelected ? 'text-white' : 'text-[#a6a6b8] group-hover:text-white'}`}>
                        {t.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 z-10">
                      <span className="font-mono text-[10px] text-muted-foreground/80 font-semibold">
                        {t.solved}/{t.total}
                      </span>
                      {percent > 0 && (
                        <span className={`text-[8px] font-bold font-mono px-1 rounded ${percent === 100 ? 'bg-emerald/20 text-emerald' : 'bg-white/10 text-[#a6a6b8]'
                          }`}>
                          {percent}%
                        </span>
                      )}
                    </div>

                    {/* Minimal Progress Line Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.02]">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${percent}%`,
                          backgroundColor: isSelected ? '#10b981' : t.color
                        }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* RIGHT COLUMN: Interactive Workspace Grid */}
        <main className="flex-1 p-6 overflow-y-auto custom-scrollbar flex flex-col gap-6">
          {/* TOP METRIC BANNER ROW: Highly aesthetic summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card noise-texture p-4 rounded-xl flex items-center gap-3 border border-white/[0.04]">
              <div className="p-2 rounded-lg bg-emerald/10 text-emerald">
                <Trophy size={18} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-muted-foreground">Total Solved</span>
                <p className="font-mono text-lg font-extrabold text-white mt-0.5">{stats.solved} Problems</p>
              </div>
            </div>

            <div className="glass-card noise-texture p-4 rounded-xl flex items-center gap-3 border border-white/[0.04]">
              <div className="p-2 rounded-lg bg-amber/10 text-amber animate-pulse">
                <Flame size={18} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-muted-foreground">Active Streak</span>
                <p className="font-mono text-lg font-extrabold text-white mt-0.5">{stats.currentStreak} Days</p>
              </div>
            </div>

            <div className="glass-card noise-texture p-4 rounded-xl flex items-center gap-3 border border-white/[0.04]">
              <div className="p-2 rounded-lg bg-rose/10 text-rose">
                <BookOpen size={18} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-muted-foreground">Due Revisions</span>
                <p className="font-mono text-lg font-extrabold text-white mt-0.5">{stats.dueRevisionsCount} Today</p>
              </div>
            </div>
          </div>

          {/* ACTIVE DUE REVISIONS QUEUE (Notification Banner Alert style) */}
          <RevisionQueue allProblems={allProblems} />

          {/* CORE PROBLEMS GRID WORKSPACE */}
          <div className="flex-1 flex flex-col gap-4 min-h-0">
            {globalSearch ? (
              // GLOBAL SEARCH RESULTS VIEW
              <>
                <div className="glass-card noise-texture p-4 rounded-xl flex items-center justify-between border border-emerald/20 bg-emerald/[0.01]">
                  <div>
                    <h2 className="text-base font-extrabold text-white flex items-center gap-2">
                      <Sparkles size={16} className="text-emerald animate-pulse" />
                      Search Results for "{globalSearch}"
                    </h2>
                    <p className="text-[10px] text-muted-foreground font-medium">
                      Found {globalFilteredProblems.length} matching problems across all categories
                    </p>
                  </div>
                  <Button
                    onClick={() => setGlobalSearch('')}
                    variant="ghost"
                    size="sm"
                    className="h-7 text-xs text-muted-foreground hover:text-white"
                  >
                    Clear Search
                  </Button>
                </div>

                <div className="bento-animate flex-1 flex flex-col min-h-0">
                  <TopicProblems
                    problems={globalFilteredProblems}
                    isLoading={false}
                    topicName="Global Search"
                  />
                </div>
              </>
            ) : (
              // STANDARD TOPIC VIEW
              <>
                {selectedTopic && (
                  <div className="glass-card noise-texture p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 border border-white/[0.04] bg-[#0a0a0d]/60">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{selectedTopic.icon}</span>
                      <div>
                        <h2 className="text-base font-extrabold text-white">{selectedTopic.name} Problems</h2>
                        <p className="text-[10px] text-muted-foreground font-medium">Love Babbar 450 Sheet Core Section</p>
                      </div>
                    </div>

                    {/* Topic-specific local search bar */}
                    <div className="relative w-full md:w-64">
                      <Search size={14} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground/60" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={`Search ${selectedTopic.name} problems...`}
                        className="w-full bg-[#0d0d12] border border-white/[0.08] focus:border-emerald/50 focus:ring-1 focus:ring-emerald/10 text-xs px-9 py-2 rounded-xl text-white placeholder-muted-foreground/50 transition-all outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* Interactive Problems list when a topic is selected */}
                <AnimatePresence mode="wait">
                  {selectedTopicId && selectedTopic && (
                    <div className="bento-animate flex-1 flex flex-col min-h-0">
                      <TopicProblems
                        problems={topicProblems}
                        isLoading={false}
                        topicName={selectedTopic.name}
                      />
                    </div>
                  )}
                </AnimatePresence>
              </>
            )}
          </div>
        </main>
      </div>

      <footer className="h-10 border-t border-white/[0.04] flex items-center justify-center">
        <p className="text-[9px] text-muted-foreground/30 font-medium">
          Hardcoded and Local. Fast and Resilient. Built with focus.
        </p>
      </footer>
    </div>
  );
}
