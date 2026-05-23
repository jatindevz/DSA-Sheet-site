const fs = require('fs');

const tsCode = fs.readFileSync('/home/jatin/Documents/GitHub/dsatrackme/src/lib/babbar-sheet-data.ts', 'utf-8');

// Strip TypeScript interfaces and exports so we can evaluate it
let jsCode = tsCode
  .replace(/export interface [\s\S]*?\n}\n/g, '')
  .replace(/export const BABBAR_SHEET_DATA: RawTopic\[\] =/, 'global.BABBAR_SHEET_DATA =');

// Evaluate the string to get the JS object
eval(jsCode);

const allProblems = [];
global.BABBAR_SHEET_DATA.forEach(topic => {
  topic.problems.forEach(p => {
    allProblems.push(p);
  });
});

const PATTERN_METADATA = [
  { id: 'Two Pointers', icon: '✌️', color: '#3b82f6' },
  { id: 'Sliding Window', icon: '🪟', color: '#10b981' },
  { id: 'Fast & Slow Pointers', icon: '🐢', color: '#06b6d4' },
  { id: 'Merge Intervals', icon: '↔️', color: '#8b5cf6' },
  { id: 'Cyclic Sort', icon: '🔄', color: '#f43f5e' },
  { id: 'Binary Search', icon: '🔍', color: '#eab308' },
  { id: 'Backtracking', icon: '🔙', color: '#ec4899' },
  { id: 'Depth-First Search (DFS)', icon: '🕳️', color: '#84cc16' },
  { id: 'Breadth-First Search (BFS)', icon: '🌊', color: '#0ea5e9' },
  { id: 'Dynamic Programming (DP)', icon: '🧠', color: '#a855f7' },
  { id: 'Greedy Algorithms', icon: '🤑', color: '#f97316' },
  { id: 'Topological Sort', icon: '🕸️', color: '#14b8a6' },
  { id: 'Union Find / Disjoint Set', icon: '🔗', color: '#6366f1' },
  { id: 'Heap / Priority Queue', icon: '🏔️', color: '#fb923c' },
  { id: 'Monotonic Stack / Queue', icon: '📉', color: '#ef4444' },
  { id: 'Trie', icon: '🌲', color: '#22c55e' },
  { id: 'Prefix Sum', icon: '➕', color: '#d946ef' },
  { id: 'Bit Manipulation', icon: '0️⃣', color: '#64748b' },
  { id: "Kadane's Algorithm", icon: '📈', color: '#10b981' },
  { id: 'Graph Shortest Path (Dijkstra, Bellman-Ford)', icon: '🗺️', color: '#3b82f6' },
  { id: 'Tree Traversals', icon: '🌳', color: '#84cc16' },
  { id: 'Divide and Conquer', icon: '⚔️', color: '#f43f5e' },
  { id: 'Recursion', icon: '🪆', color: '#ec4899' },
  { id: 'Hashing', icon: '#️⃣', color: '#f59e0b' },
  { id: 'Segment Tree / Fenwick Tree', icon: '🪵', color: '#8b5cf6' },
  { id: 'Uncategorized', icon: '📁', color: '#71717a' },
];

const patternMap = new Map();
allProblems.forEach(p => {
  const pat = p.pattern || 'Uncategorized';
  if (!patternMap.has(pat)) {
    patternMap.set(pat, []);
  }

  // Clean URLs
  const isValidUrl = (u) => u && (u.includes('leetcode.com') || u.includes('geeksforgeeks.org'));
  
  if (p.url && !isValidUrl(p.url)) p.url = "";
  if (p.leetcodeUrl && !isValidUrl(p.leetcodeUrl)) delete p.leetcodeUrl;
  if (p.articleUrl && !isValidUrl(p.articleUrl)) delete p.articleUrl;

  // Strip pattern property since it will be grouped under it anyway
  const { pattern, ...rest } = p;
  patternMap.get(pat).push(rest);
});

// Load extra problems
let extraProblems = {};
try {
  const extraData = fs.readFileSync('/home/jatin/Downloads/v1/dsatrackme/extra-problems.json', 'utf-8');
  extraProblems = JSON.parse(extraData);
} catch (e) {
  console.log("No extra problems found.");
}

// Load user provided extra problems
try {
  const userExtraData = fs.readFileSync('/home/jatin/Downloads/v1/dsatrackme/user-extra-problems.json', 'utf-8');
  const userExtraProblems = JSON.parse(userExtraData);
  for (const [pat, probs] of Object.entries(userExtraProblems)) {
    if (!extraProblems[pat]) extraProblems[pat] = [];
    // prepend them so they are prioritized
    extraProblems[pat] = [...probs, ...extraProblems[pat]];
  }
} catch (e) {
  console.log("No user extra problems found.");
}

// Merge extra problems
for (const [pat, probs] of Object.entries(extraProblems)) {
  if (!patternMap.has(pat)) {
    patternMap.set(pat, []);
  }
  
  const existingUrls = new Set(patternMap.get(pat).map(p => p.leetcodeUrl).filter(Boolean));
  
  // Add until we have at least 25 problems
  for (const p of probs) {
    if (!existingUrls.has(p.url) && !existingUrls.has(p.leetcodeUrl)) {
      patternMap.get(pat).push(p);
      existingUrls.add(p.url);
    }
  }
}

const PATTERN_SHEET_DATA = PATTERN_METADATA.map((meta, index) => {
  return {
    name: meta.id,
    icon: meta.icon,
    color: meta.color,
    order: index + 1,
    problems: patternMap.get(meta.id) || []
  };
}).filter(p => p.problems.length > 0);

// Generate the output TS file
let outputTS = `export interface RawPatternProblem {
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  url: string;
  articleUrl?: string;
  leetcodeUrl?: string;
}

export interface RawPatternCategory {
  name: string;
  icon: string;
  color: string;
  order: number;
  problems: RawPatternProblem[];
}

export const PATTERN_SHEET_DATA: RawPatternCategory[] = ${JSON.stringify(PATTERN_SHEET_DATA, null, 2)};
`;

fs.writeFileSync('/home/jatin/Documents/GitHub/dsatrackme/src/lib/pattern-data.ts', outputTS, 'utf-8');
console.log('Successfully generated full PATTERN_SHEET_DATA!');






