import { BABBAR_SHEET_DATA } from '@/lib/babbar-sheet-data';
import { PATTERN_SHEET_DATA } from '@/lib/pattern-data';
import { STRIVER_SHEET_DATA } from '@/lib/striver-sheet-data';

export const SHEET_IDS = ['babbar', 'patterns', 'striver'] as const;
export type SheetId = (typeof SHEET_IDS)[number];

export function isSheetId(id: string): id is SheetId {
  return SHEET_IDS.includes(id as SheetId);
}

export function getSheetData(sheetId: SheetId) {
  switch (sheetId) {
    case 'patterns':
      return PATTERN_SHEET_DATA;
    case 'striver':
      return STRIVER_SHEET_DATA;
    default:
      return BABBAR_SHEET_DATA;
  }
}

export function getSheetMeta(sheetId: SheetId) {
  switch (sheetId) {
    case 'patterns':
      return {
        title: 'DSA Patterns',
        subtitle: 'Organized by Algorithmic Pattern',
        defaultTopic: PATTERN_SHEET_DATA[0]?.name ?? 'Two Pointers',
      };
    case 'striver':
      return {
        title: "Striver's SDE Sheet",
        subtitle: 'Top Interview Questions',
        defaultTopic: STRIVER_SHEET_DATA[0]?.name ?? 'Arrays',
      };
    default:
      return {
        title: 'Love Babbar 450',
        subtitle: 'Core Problem Sheet',
        defaultTopic: BABBAR_SHEET_DATA[0]?.name ?? 'Arrays',
      };
  }
}

/** Pick a valid topic id for this sheet (fixes null / stale ids after sheet switch). */
export function resolveTopicId(sheetId: SheetId, activeId: string | null): string {
  const data = getSheetData(sheetId);
  const names = data.map((t) => t.name);
  if (activeId && names.includes(activeId)) return activeId;
  return getSheetMeta(sheetId).defaultTopic;
}
