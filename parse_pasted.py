import bs4
import json
import re

with open("Pasted text.txt", "r") as f:
    soup = bs4.BeautifulSoup(f, "html.parser")

PATTERN_METADATA = [
  { "id": "Two Pointers", "icon": "✌️", "color": "#3b82f6" },
  { "id": "Sliding Window", "icon": "🪟", "color": "#10b981" },
  { "id": "Fast & Slow Pointers", "icon": "🐢", "color": "#06b6d4" },
  { "id": "Merge Intervals", "icon": "↔️", "color": "#8b5cf6" },
  { "id": "Cyclic Sort", "icon": "🔄", "color": "#f43f5e" },
  { "id": "Binary Search", "icon": "🔍", "color": "#eab308" },
  { "id": "Backtracking", "icon": "🔙", "color": "#ec4899" },
  { "id": "Depth-First Search (DFS)", "icon": "🕳️", "color": "#84cc16" },
  { "id": "Breadth-First Search (BFS)", "icon": "🌊", "color": "#0ea5e9" },
  { "id": "Dynamic Programming (DP)", "icon": "🧠", "color": "#a855f7" },
  { "id": "Greedy Algorithms", "icon": "🤑", "color": "#f97316" },
  { "id": "Topological Sort", "icon": "🕸️", "color": "#14b8a6" },
  { "id": "Union Find / Disjoint Set", "icon": "🔗", "color": "#6366f1" },
  { "id": "Heap / Priority Queue", "icon": "🏔️", "color": "#fb923c" },
  { "id": "Monotonic Stack / Queue", "icon": "📉", "color": "#ef4444" },
  { "id": "Trie", "icon": "🌲", "color": "#22c55e" },
  { "id": "Prefix Sum", "icon": "➕", "color": "#d946ef" },
  { "id": "Bit Manipulation", "icon": "0️⃣", "color": "#64748b" },
  { "id": "Kadane's Algorithm", "icon": "📈", "color": "#10b981" },
  { "id": "Graph Shortest Path (Dijkstra, Bellman-Ford)", "icon": "🗺️", "color": "#3b82f6" },
  { "id": "Tree Traversals", "icon": "🌳", "color": "#84cc16" },
  { "id": "Divide and Conquer", "icon": "⚔️", "color": "#f43f5e" },
  { "id": "Recursion", "icon": "🪆", "color": "#ec4899" },
  { "id": "Hashing", "icon": "#️⃣", "color": "#f59e0b" },
  { "id": "Matrix Manipulation", "icon": "🔳", "color": "#0ea5e9" },
  { "id": "Reversal of Linked List", "icon": "↩️", "color": "#f43f5e" },
  { "id": "Segment Tree / Fenwick Tree", "icon": "🪵", "color": "#8b5cf6" },
  { "id": "Uncategorized", "icon": "📁", "color": "#71717a" },
]

def get_closest_pattern(name):
    name_lower = name.lower()
    if "fast and slow pointer" in name_lower: return "Fast & Slow Pointers"
    if "overlapping interval" in name_lower: return "Merge Intervals"
    if "prefix sum" in name_lower: return "Prefix Sum"
    if "sliding window" in name_lower: return "Sliding Window"
    if "two pointer" in name_lower: return "Two Pointers"
    if "cyclic sort" in name_lower: return "Cyclic Sort"
    if "reversal of linked list" in name_lower: return "Reversal of Linked List"
    if "matrix manipulation" in name_lower: return "Matrix Manipulation"
    if "breadth first search" in name_lower: return "Breadth-First Search (BFS)"
    if "depth first search" in name_lower: return "Depth-First Search (DFS)"
    if "topological sort" in name_lower: return "Topological Sort"
    if "trie" in name_lower: return "Trie"
    if "heap" in name_lower or "priority queue" in name_lower or "top 'k'" in name_lower or "k-way" in name_lower: return "Heap / Priority Queue"
    if "union find" in name_lower or "disjoint set" in name_lower: return "Union Find / Disjoint Set"
    if "dynamic programming" in name_lower: return "Dynamic Programming (DP)"
    if "greedy" in name_lower: return "Greedy Algorithms"
    if "backtracking" in name_lower: return "Backtracking"
    if "binary search" in name_lower: return "Binary Search"
    if "monotonic" in name_lower: return "Monotonic Stack / Queue"
    if "bit manipulation" in name_lower or "bitwise" in name_lower: return "Bit Manipulation"
    if "kadane" in name_lower: return "Kadane's Algorithm"
    if "tree traversal" in name_lower: return "Tree Traversals"
    if "divide" in name_lower: return "Divide and Conquer"
    if "recursion" in name_lower: return "Recursion"
    if "hashing" in name_lower: return "Hashing"
    if "segment tree" in name_lower: return "Segment Tree / Fenwick Tree"
    if "graph" in name_lower: return "Graph Shortest Path (Dijkstra, Bellman-Ford)"
    
    return "Uncategorized"

problems_by_pattern = {m["id"]: [] for m in PATTERN_METADATA}
seen_urls = set()

for h2 in soup.find_all("h2"):
    name = h2.text
    name = re.sub(r"^\d+\.\s*", "", name)
    current_pattern_id = get_closest_pattern(name)
    
    if current_pattern_id:
        for node in h2.find_next_siblings():
            if getattr(node, "name", None) == "h2":
                break
            if getattr(node, "name", None) in ["ul", "ol"]:
                for li in node.find_all("li"):
                    a = li.find("a")
                    if a and a.get("href"):
                        url = a.get("href")
                        if "leetcode.com" in url:
                            if url in seen_urls:
                                continue
                            seen_urls.add(url)
                            
                            title = a.text.strip()
                            if not title or title.startswith("http"):
                                match = re.search(r"problems/([^/]+)/?", url)
                                if match:
                                    title = match.group(1).replace("-", " ").title()
                                else:
                                    title = "Unknown Problem"
                            
                            problems_by_pattern[current_pattern_id].append({
                                "title": title,
                                "difficulty": "medium",
                                "url": url,
                                "leetcodeUrl": url
                            })

PATTERN_SHEET_DATA = []
order = 1
for m in PATTERN_METADATA:
    probs = problems_by_pattern[m["id"]]
    if len(probs) > 0:
        PATTERN_SHEET_DATA.append({
            "name": m["id"],
            "icon": m["icon"],
            "color": m["color"],
            "order": order,
            "problems": probs
        })
        order += 1

output_ts = """export interface RawPatternProblem {
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

export const PATTERN_SHEET_DATA: RawPatternCategory[] = """

output_ts += json.dumps(PATTERN_SHEET_DATA, indent=2)
output_ts += ";\n"

with open("src/lib/pattern-data.ts", "w") as f:
    f.write(output_ts)

print("Parsed patterns:", len(PATTERN_SHEET_DATA))
