const fs = require('fs');

const path = '/home/jatin/Documents/GitHub/dsatrackme/src/lib/babbar-sheet-data.ts';
let content = fs.readFileSync(path, 'utf-8');

// Match the entire problems array for each topic
const topicRegex = /name:\s*'([^']+)'[\s\S]*?problems:\s*\[([\s\S]*?)\]\n\s*\}/g;

let newContent = content.replace(topicRegex, (match, topicName, problemsString) => {
  // Regex to match individual problem objects
  const problemRegex = /({[^}]+})/g;
  
  const updatedProblems = problemsString.replace(problemRegex, (problemMatch) => {
    // If it already has a pattern (from my previous manual edit), keep it unless we want to override.
    // Actually, let's just override or add if missing, but we'll prioritize keeping existing ones if they are good.
    // Wait, let's just parse the title to be safe.
    const titleMatch = problemMatch.match(/title:\s*['"`](.*?)['"`]/);
    if (!titleMatch) return problemMatch;
    
    const title = titleMatch[1].toLowerCase();
    let pattern = 'Uncategorized';

    // Exact Patterns List
    const patterns = [
      'Two Pointers', 'Sliding Window', 'Fast & Slow Pointers', 'Merge Intervals', 
      'Cyclic Sort', 'Binary Search', 'Backtracking', 'Depth-First Search (DFS)', 
      'Breadth-First Search (BFS)', 'Dynamic Programming (DP)', 'Greedy Algorithms', 
      'Topological Sort', 'Union Find / Disjoint Set', 'Heap / Priority Queue', 
      'Monotonic Stack / Queue', 'Trie', 'Prefix Sum', 'Bit Manipulation', 
      'Kadane’s Algorithm', 'Graph Shortest Path (Dijkstra, Bellman-Ford)', 
      'Tree Traversals', 'Divide and Conquer', 'Recursion', 'Hashing', 
      'Segment Tree / Fenwick Tree', 'Uncategorized'
    ];

    // Heuristics based on Topic and Title
    if (topicName === 'Dynamic Programming') {
      pattern = 'Dynamic Programming (DP)';
    } else if (topicName === 'Backtracking') {
      pattern = 'Backtracking';
    } else if (topicName === 'Bit Manipulation') {
      pattern = 'Bit Manipulation';
    } else if (topicName === 'Trie') {
      pattern = 'Trie';
    } else if (topicName === 'Greedy') {
      pattern = 'Greedy Algorithms';
    } else if (topicName === 'Heap') {
      pattern = 'Heap / Priority Queue';
    } else if (topicName === 'Binary Trees' || topicName === 'Binary Search Trees') {
      pattern = 'Tree Traversals'; // Default for trees
      if (title.includes('bst') || title.includes('search')) pattern = 'Binary Search';
    } else if (topicName === 'Graphs') {
      if (title.includes('bfs')) {
        pattern = 'Breadth-First Search (BFS)';
      } else if (title.includes('topological')) {
        pattern = 'Topological Sort';
      } else if (title.includes('dijkstra') || title.includes('bellman') || title.includes('shortest')) {
        pattern = 'Graph Shortest Path (Dijkstra, Bellman-Ford)';
      } else if (title.includes('mst') || title.includes('kruskal') || title.includes('prim') || title.includes('disjoint') || title.includes('union')) {
        pattern = 'Union Find / Disjoint Set';
      } else {
        pattern = 'Depth-First Search (DFS)';
      }
    } else if (topicName === 'Linked Lists') {
      if (title.includes('loop') || title.includes('cycle') || title.includes('circular') || title.includes('middle')) {
        pattern = 'Fast & Slow Pointers';
      } else {
        pattern = 'Two Pointers';
      }
    } else if (topicName === 'Stack & Queue') {
      if (title.includes('next greater') || title.includes('histogram') || title.includes('smaller')) {
        pattern = 'Monotonic Stack / Queue';
      } else if (title.includes('lru')) {
        pattern = 'Hashing';
      } else {
        pattern = 'Two Pointers'; // Fallback for some stack
      }
    } else {
      // Arrays, Strings, Matrix, Searching & Sorting
      if (title.includes('kadane') || title.includes('largest sum contiguous') || title.includes('maximum subarray')) {
        pattern = 'Kadane’s Algorithm';
      } else if (title.includes('subarray') || title.includes('window') || title.includes('longest substring') || title.includes('smallest window')) {
        pattern = 'Sliding Window';
      } else if (title.includes('sort') || title.includes('search') || title.includes('median') || title.includes('rotated')) {
        pattern = 'Binary Search';
        if (title.includes('cyclic') || title.includes('missing positive')) pattern = 'Cyclic Sort';
        if (title.includes('merge sort') || title.includes('inversion')) pattern = 'Divide and Conquer';
      } else if (title.includes('interval') || title.includes('overlap')) {
        pattern = 'Merge Intervals';
      } else if (title.includes('sum') && (title.includes('prefix') || title.includes('sub array sum zero'))) {
        pattern = 'Prefix Sum';
      } else if (title.includes('sum') || title.includes('pair') || title.includes('triplet') || title.includes('reverse') || title.includes('palindrome') || title.includes('water')) {
        pattern = 'Two Pointers';
      } else if (title.includes('kth') || title.includes('k largest') || title.includes('k smallest')) {
        pattern = 'Heap / Priority Queue';
      } else if (title.includes('hash') || title.includes('frequency') || title.includes('duplicate') || title.includes('anagram')) {
        pattern = 'Hashing';
      } else if (title.includes('segment tree') || title.includes('fenwick')) {
        pattern = 'Segment Tree / Fenwick Tree';
      } else if (title.includes('recursion') || title.includes('recursive')) {
        pattern = 'Recursion';
      } else if (title.includes('matrix') || title.includes('grid') || title.includes('spiral')) {
        pattern = 'Depth-First Search (DFS)'; // Often DFS/BFS used in matrix
      } else {
        // Fallback for remaining array/string stuff
        pattern = 'Two Pointers'; 
      }
    }

    // If pattern property already exists, let's update it or leave it?
    // Let's replace it to ensure uniformity, or if it doesn't exist, inject it.
    if (problemMatch.includes('pattern:')) {
      return problemMatch.replace(/pattern:\s*['"`][^'"`]+['"`]/, `pattern: '${pattern}'`);
    } else {
      return problemMatch.replace(/}$/, `, pattern: '${pattern}' }`);
    }
  });
  
  return match.replace(problemsString, updatedProblems);
});

fs.writeFileSync(path, newContent, 'utf-8');
console.log('Successfully tagged all 450 problems!');
