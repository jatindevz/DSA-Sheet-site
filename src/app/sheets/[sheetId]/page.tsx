'use client';

import { use, useEffect, useState, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Terminal, Search, ChevronLeft, Sparkles, Database, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDSAStore } from '@/store/dsa-store';
import { TopicProblems } from '@/components/dsa/TopicProblems';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  getSheetData,
  getSheetMeta,
  isSheetId,
  resolveTopicId,
  type SheetId,
} from '@/lib/sheets';

const SHEETS_NAV = [
  {
    id: 'babbar' as const,
    label: 'Babbar 450',
    shortLabel: 'Babbar',
    icon: Database,
    idle: 'text-muted-foreground hover:text-emerald hover:bg-emerald/10 hover:border-emerald/20',
  },
  {
    id: 'patterns' as const,
    label: 'DSA Patterns',
    shortLabel: 'Patterns',
    icon: Sparkles,
    idle: 'text-muted-foreground hover:text-cyan hover:bg-cyan/10 hover:border-cyan/20',
  },
  {
    id: 'striver' as const,
    label: 'Striver SDE',
    shortLabel: 'Striver',
    icon: Trophy,
    idle: 'text-muted-foreground hover:text-amber hover:bg-amber/10 hover:border-amber/20',
  },
];

export default function SheetPage({ params }: { params: Promise<{ sheetId: string }> }) {
  const resolvedParams = use(params);
  const rawSheetId = resolvedParams.sheetId;
  const router = useRouter();

  const {
    selectedTopicId,
    setSelectedTopicId,
    selectedPatternId,
    setSelectedPatternId,
    selectedStriverTopicId,
    setSelectedStriverTopicId,
    progress,
  } = useDSAStore();

  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const sheetId: SheetId | null = isSheetId(rawSheetId) ? rawSheetId : null;

  useEffect(() => {
    if (!isSheetId(rawSheetId)) {
      router.replace('/sheets/babbar');
    }
  }, [rawSheetId, router]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sheetData = useMemo(() => (sheetId ? getSheetData(sheetId) : []), [sheetId]);
  const sheetMeta = useMemo(() => (sheetId ? getSheetMeta(sheetId) : null), [sheetId]);

  const storedActiveId =
    sheetId === 'patterns'
      ? selectedPatternId
      : sheetId === 'striver'
        ? selectedStriverTopicId
        : selectedTopicId;

  const activeTopicId = useMemo(() => {
    if (!sheetId) return null;
    return resolveTopicId(sheetId, storedActiveId);
  }, [sheetId, storedActiveId]);

  // Keep store in sync when id was null or from another sheet
  useEffect(() => {
    if (!sheetId || !activeTopicId) return;
    if (sheetId === 'babbar' && selectedTopicId !== activeTopicId) {
      setSelectedTopicId(activeTopicId);
    }
    if (sheetId === 'patterns' && selectedPatternId !== activeTopicId) {
      setSelectedPatternId(activeTopicId);
    }
    if (sheetId === 'striver' && selectedStriverTopicId !== activeTopicId) {
      setSelectedStriverTopicId(activeTopicId);
    }
  }, [
    sheetId,
    activeTopicId,
    selectedTopicId,
    selectedPatternId,
    selectedStriverTopicId,
    setSelectedTopicId,
    setSelectedPatternId,
    setSelectedStriverTopicId,
  ]);

  const setActiveTopicId = useCallback(
    (id: string) => {
      if (!sheetId) return;
      if (sheetId === 'patterns') setSelectedPatternId(id);
      else if (sheetId === 'striver') setSelectedStriverTopicId(id);
      else setSelectedTopicId(id);
      setSearchQuery('');
    },
    [sheetId, setSelectedPatternId, setSelectedTopicId, setSelectedStriverTopicId],
  );

  const allProblems = useMemo(() => {
    const arr: any[] = [];
    sheetData.forEach((topic: any) => {
      topic.problems.forEach((p: any) => {
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
          platform: sheetId ?? 'babbar',
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
    return arr;
  }, [sheetData, progress, sheetId]);

  const topics = useMemo(() => {
    return sheetData.map((t: any) => {
      const topicProbs = allProblems.filter((p) => p.topicId === t.name);
      return {
        id: t.name,
        name: t.name,
        icon: t.icon,
        color: t.color,
        total: topicProbs.length,
        solved: topicProbs.filter((p) => p.status === 'solved').length,
      };
    });
  }, [sheetData, allProblems]);

  const activeSelection = topics.find((t) => t.id === activeTopicId);

  const topicProblems = useMemo(() => {
    const list = allProblems.filter((p) => p.topicId === activeTopicId);
    if (!searchQuery) return list;
    return list.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [allProblems, activeTopicId, searchQuery]);

  if (!mounted || !sheetId || !sheetMeta || !activeSelection) {
    return (
      <div className="h-full flex items-center justify-center bg-[#08080a] text-muted-foreground text-sm">
        Loading sheet…
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col overflow-hidden bg-[#08080a] text-[#e2e2e9] font-sans selection:bg-emerald/30 selection:text-white">
      <header className="h-14 shrink-0 border-b border-white/[0.04] bg-[#0a0a0d]/80 backdrop-blur-xl z-50 px-4 sm:px-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2.5 gap-1.5 text-muted-foreground hover:text-white hover:bg-white/[0.04] rounded-lg"
            >
              <ChevronLeft size={15} />
              <span className="hidden sm:inline text-xs">Dashboard</span>
            </Button>
          </Link>
          <div className="w-px h-5 bg-white/[0.06] hidden sm:block" />
          <div className="flex items-center gap-2 min-w-0">
            <div className="p-1.5 rounded-lg bg-emerald/10 border border-emerald/20 text-emerald shrink-0">
              <Terminal size={16} />
            </div>
            <div className="min-w-0">
              <h1 className="text-sm font-bold text-white truncate">{sheetMeta.title}</h1>
              <p className="text-[10px] text-muted-foreground truncate">{sheetMeta.subtitle}</p>
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-1.5 shrink-0" aria-label="Other sheets">
          {SHEETS_NAV.filter((sheet) => sheet.id !== sheetId).map((sheet) => {
            const Icon = sheet.icon;
            return (
              <Link
                key={sheet.id}
                href={`/sheets/${sheet.id}`}
                className={`flex items-center gap-1.5 h-8 px-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] text-[11px] font-semibold transition-all ${sheet.idle}`}
              >
                <Icon size={13} />
                <span className="hidden sm:inline">{sheet.label}</span>
                <span className="sm:hidden">{sheet.shortLabel}</span>
              </Link>
            );
          })}
        </nav>
      </header>

      <div className="flex-1 min-h-0 flex flex-col lg:flex-row overflow-hidden w-full max-w-[1600px] mx-auto">
        {/* Topics — vertical sidebar on desktop, horizontal strip on mobile */}
        <aside className="shrink-0 border-b lg:border-b-0 lg:border-r border-white/[0.04] bg-[#0a0a0d]/40 lg:w-[260px] xl:w-[280px] lg:min-h-0 lg:flex lg:flex-col lg:overflow-hidden">
          <div className="p-2 lg:p-3 lg:flex-1 lg:min-h-0 lg:overflow-y-auto scrollbar-none flex gap-1.5 lg:flex-col lg:gap-1 overflow-x-auto lg:overflow-x-visible">
            {topics.map((t) => {
              const isSelected = activeTopicId === t.id;
              const percent = t.total > 0 ? Math.round((t.solved / t.total) * 100) : 0;

              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTopicId(t.id)}
                  className={`shrink-0 lg:shrink lg:w-full text-left p-2 rounded-lg border transition-all flex items-center justify-between gap-2 group relative overflow-hidden min-w-[140px] lg:min-w-0 ${
                    isSelected
                      ? 'bg-emerald/[0.04] border-emerald/40'
                      : 'bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.02] hover:border-white/[0.08]'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0 z-10">
                    <span className="text-sm shrink-0">{t.icon}</span>
                    <span
                      className={`text-xs font-semibold truncate ${isSelected ? 'text-white' : 'text-[#a6a6b8] group-hover:text-white'}`}
                    >
                      {t.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 z-10">
                    <span className="font-mono text-[10px] text-muted-foreground/80 font-semibold">
                      {t.solved}/{t.total}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.02]">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${percent}%`,
                        backgroundColor: isSelected ? '#10b981' : t.color,
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        <main className="flex-1 min-h-0 flex flex-col overflow-hidden p-3 sm:p-4">
          <div className="shrink-0 glass-card noise-texture p-3 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-white/[0.04] bg-[#0a0a0d]/60 mb-3">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-lg">{activeSelection.icon}</span>
              <div className="min-w-0">
                <h2 className="text-sm font-extrabold text-white truncate">
                  {activeSelection.name}
                </h2>
                <p className="text-[10px] text-muted-foreground">{sheetMeta.subtitle}</p>
              </div>
            </div>
            <div className="relative w-full sm:w-56 shrink-0">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${activeSelection.name}…`}
                className="w-full bg-[#0d0d12] border border-white/[0.08] focus:border-emerald/50 text-xs px-9 py-1.5 rounded-lg text-white placeholder-muted-foreground/50 outline-none"
              />
            </div>
          </div>

          <div className="flex-1 min-h-0 overflow-hidden rounded-lg border border-white/[0.04] bg-[#0a0a0d]/30">
            <AnimatePresence mode="wait">
              <TopicProblems
                key={`${sheetId}-${activeTopicId}`}
                problems={topicProblems}
                isLoading={false}
                topicName={activeSelection.name}
                sheetLabel={sheetMeta.title}
                embedded
              />
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
