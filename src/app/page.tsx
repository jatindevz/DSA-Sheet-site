'use client';

import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Plus, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDSAStore } from '@/store/dsa-store';
import { StatsHero } from '@/components/dsa/StatsHero';
import { TopicProgress } from '@/components/dsa/TopicProgress';
import { DifficultyBreakdown } from '@/components/dsa/DifficultyBreakdown';
import { ActivityHeatmap } from '@/components/dsa/ActivityHeatmap';
import { RecentProblems } from '@/components/dsa/RecentProblems';
import { QuickAdd } from '@/components/dsa/QuickAdd';
import { PlatformDistribution } from '@/components/dsa/PlatformDistribution';
import { StreakCard } from '@/components/dsa/StreakCard';

export default function Home() {
  const { quickAddOpen, setQuickAddOpen } = useDSAStore();

  // Seed topics on first load
  useEffect(() => {
    fetch('/api/seed', { method: 'POST' }).catch(console.error);
  }, []);

  // Fetch stats
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ['stats'],
    queryFn: () => fetch('/api/stats').then((r) => r.json()),
  });

  // Fetch problems
  const { data: problems, isLoading: problemsLoading } = useQuery({
    queryKey: ['problems'],
    queryFn: () => fetch('/api/problems').then((r) => r.json()),
  });

  // Fetch topics
  const { data: topics, isLoading: topicsLoading } = useQuery({
    queryKey: ['topics'],
    queryFn: () => fetch('/api/topics').then((r) => r.json()),
  });

  // Fetch activity
  const { data: activity, isLoading: activityLoading } = useQuery({
    queryKey: ['activity'],
    queryFn: () => fetch('/api/activity').then((r) => r.json()),
  });

  return (
    <div className="min-h-screen flex flex-col relative z-10">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0a0c]/80 border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Terminal size={20} className="text-emerald" />
            <h1 className="text-lg font-bold gradient-text">DSA Tracker</h1>
          </div>
          <Button
            onClick={() => {
              setQuickAddOpen(!quickAddOpen);
              if (!quickAddOpen) {
                setTimeout(() => {
                  document.getElementById('quick-add-section')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
                }, 100);
              }
            }}
            size="sm"
            className="bg-emerald hover:bg-emerald/90 text-emerald-foreground gap-1.5 h-8"
          >
            <Plus size={14} />
            <span className="hidden sm:inline">Add Problem</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Row 1: StatsHero (2) + StreakCard (1) + DifficultyBreakdown (1) */}
          <div className="sm:col-span-2 bento-animate">
            <StatsHero stats={stats} isLoading={statsLoading} />
          </div>
          <div className="bento-animate">
            <StreakCard
              stats={stats}
              last7Days={activity?.last7Days}
              isLoading={statsLoading || activityLoading}
            />
          </div>
          <div className="bento-animate">
            <DifficultyBreakdown
              difficulty={stats ? { easy: stats.easy, medium: stats.medium, hard: stats.hard } : undefined}
              isLoading={statsLoading}
            />
          </div>

          {/* Row 2: ActivityHeatmap (2) + TopicProgress (1) + QuickAdd (1) */}
          <div className="sm:col-span-2 bento-animate">
            <ActivityHeatmap activity={activity} isLoading={activityLoading} />
          </div>
          <div className="bento-animate">
            <TopicProgress topics={topics} isLoading={topicsLoading} />
          </div>
          <div id="quick-add-section" className="bento-animate">
            <QuickAdd topics={topics} />
          </div>

          {/* Row 3: RecentProblems (2) + PlatformDistribution (2) */}
          <div className="sm:col-span-2 bento-animate">
            <RecentProblems problems={problems} isLoading={problemsLoading} />
          </div>
          <div className="sm:col-span-2 bento-animate">
            <PlatformDistribution problems={problems} isLoading={problemsLoading} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/[0.04] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs text-muted-foreground/40">
            Built with focus. Track your DSA journey.
          </p>
        </div>
      </footer>
    </div>
  );
}
