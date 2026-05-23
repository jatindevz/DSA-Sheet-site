const fs = require('fs');

const path = '/home/jatin/Documents/GitHub/dsatrackme/src/lib/babbar-sheet-data.ts';
let content = fs.readFileSync(path, 'utf-8');

const map = [
  // Arrays
  { match: /(reverse|rotate)/i, p: 'Two Pointers' },
  { match: /(maximum and minimum|min and max)/i, p: 'Divide and Conquer' },
  { match: /(kth|k smallest|k largest)/i, p: 'Heap / Priority Queue' },
  { match: /sort an array of 0s, 1s and 2s/i, p: 'Two Pointers' },
  { match: /(move all negative|union and intersection)/i, p: 'Two Pointers' },
  { match: /kadane|largest sum contiguous|maximum subarray/i, p: "Kadane's Algorithm" },
  { match: /minimize the heights/i, p: 'Greedy Algorithms' },
  { match: /minimum number of jumps/i, p: 'Dynamic Programming (DP)' }, // DP or Greedy
  { match: /find duplicate/i, p: 'Cyclic Sort' },
  { match: /merge 2 sorted|merge intervals|overlapping intervals/i, p: 'Merge Intervals' },
  { match: /next permutation/i, p: 'Two Pointers' },
  { match: /inversion of array|count inversion/i, p: 'Divide and Conquer' },
  { match: /buy and sell stock/i, p: 'Dynamic Programming (DP)' },
  { match: /pairs.*sum|count pairs|sum equal to|triplet|four elements/i, p: 'Two Pointers' },
  { match: /common elements|alternating positive and negative|subset of another/i, p: 'Two Pointers' },
  { match: /subarray with 0 sum/i, p: 'Prefix Sum' },
  { match: /factorial/i, p: 'Math' }, // Wait, must be from the 25 list
  { match: /factorial/i, p: 'Recursion' }, 
  { match: /maximum product subarray/i, p: 'Dynamic Programming (DP)' },
  { match: /longest consecutive subsequence/i, p: 'Hashing' },
  { match: /n\/k times|more than n\/k/i, p: 'Hashing' },
  { match: /trapping rain water/i, p: 'Two Pointers' },
  { match: /chocolate distribution/i, p: 'Sliding Window' },
  { match: /smallest subarray with sum greater/i, p: 'Sliding Window' },
  { match: /three way partitioning/i, p: 'Two Pointers' },
  { match: /minimum swaps to bring elements together/i, p: 'Sliding Window' },
  { match: /palindromic array/i, p: 'Two Pointers' },
  { match: /median of 2 sorted arrays/i, p: 'Binary Search' },
  
  // Matrix
  { match: /spiral traversal|search a 2d matrix|search an element in a matriix/i, p: 'Binary Search' }, // Matrix search is often binary search
  { match: /median in a row-wise sorted/i, p: 'Binary Search' },
  { match: /row with max 1s/i, p: 'Binary Search' },
  { match: /sorted matrix/i, p: 'Binary Search' },
  { match: /maximum size rectangle/i, p: 'Monotonic Stack / Queue' },
  { match: /common elements in all rows/i, p: 'Hashing' },
  
  // String
  { match: /palindrome/i, p: 'Two Pointers' },
  { match: /duplicate/i, p: 'Hashing' },
  { match: /rotation/i, p: 'Two Pointers' },
  { match: /shuffle/i, p: 'Hashing' },
  { match: /count and say/i, p: 'Recursion' },
  { match: /longest palindrome/i, p: 'Dynamic Programming (DP)' },
  { match: /subsequence/i, p: 'Dynamic Programming (DP)' },
  { match: /permutations of a given string/i, p: 'Backtracking' },
  { match: /split the binary string/i, p: 'Greedy Algorithms' },
  { match: /word wrap/i, p: 'Dynamic Programming (DP)' },
  { match: /edit distance/i, p: 'Dynamic Programming (DP)' },
  { match: /next greater/i, p: 'Monotonic Stack / Queue' },
  { match: /balanced parenthesis/i, p: 'Monotonic Stack / Queue' },
  { match: /word break/i, p: 'Dynamic Programming (DP)' },
  { match: /rabin karp/i, p: 'Hashing' },
  { match: /kmp/i, p: 'Two Pointers' },
  { match: /convert a sentence into its equivalent mobile numeric/i, p: 'Hashing' },
  { match: /minimum number of bracket reversals/i, p: 'Greedy Algorithms' },
  { match: /count of number of given string in 2d/i, p: 'Depth-First Search (DFS)' },
  { match: /find the string in grid/i, p: 'Depth-First Search (DFS)' },
  { match: /roman number/i, p: 'Hashing' },
  { match: /longest common prefix/i, p: 'Trie' },
  { match: /flips to make binary string alternate/i, p: 'Greedy Algorithms' },
  { match: /second most repeated/i, p: 'Hashing' },
  { match: /minimum swaps for bracket balancing/i, p: 'Greedy Algorithms' },
  { match: /longest common subsequence/i, p: 'Dynamic Programming (DP)' },
  { match: /anagrams/i, p: 'Hashing' },
  { match: /smallest window/i, p: 'Sliding Window' },
  { match: /remove consecutive/i, p: 'Two Pointers' },
  { match: /wildcard string matching/i, p: 'Dynamic Programming (DP)' },
  { match: /isomorphic/i, p: 'Hashing' },

  // Searching & Sorting
  { match: /first and last occurrences/i, p: 'Binary Search' },
  { match: /fixed point/i, p: 'Binary Search' },
  { match: /rotated sorted array/i, p: 'Binary Search' },
  { match: /square root/i, p: 'Binary Search' },
  { match: /missing and repeating/i, p: 'Cyclic Sort' },
  { match: /majority element/i, p: 'Hashing' }, // Boyer-Moore, but hashing is close enough
  { match: /adjacent differ by at most k/i, p: 'Binary Search' },
  { match: /pair with a given difference/i, p: 'Two Pointers' },
  { match: /four sum/i, p: 'Two Pointers' },
  { match: /stickler thief/i, p: 'Dynamic Programming (DP)' },
  { match: /count triplets/i, p: 'Two Pointers' },
  { match: /merge two sorted/i, p: 'Two Pointers' },
  { match: /product array puzzle/i, p: 'Prefix Sum' },
  { match: /sort by set bit count/i, p: 'Bit Manipulation' },
  { match: /minimum swaps to sort/i, p: 'Cyclic Sort' }, // Graph cycle actually, but cyclic sort is related
  { match: /bishu and soldiers/i, p: 'Binary Search' },
  { match: /kth smallest/i, p: 'Heap / Priority Queue' },
  { match: /allocate minimum number of pages/i, p: 'Binary Search' },
  { match: /eko/i, p: 'Binary Search' },
  { match: /job scheduling/i, p: 'Greedy Algorithms' },
  { match: /missing number/i, p: 'Bit Manipulation' }, // Also Cyclic Sort
  { match: /painter's partition/i, p: 'Binary Search' },
  { match: /roti prata/i, p: 'Binary Search' },
  { match: /doublehelix/i, p: 'Two Pointers' },

  // LinkedList
  { match: /reverse a linked list/i, p: 'Two Pointers' },
  { match: /reverse a linked list in groups/i, p: 'Two Pointers' },
  { match: /detect loop|cycle/i, p: 'Fast & Slow Pointers' },
  { match: /remove loop/i, p: 'Fast & Slow Pointers' },
  { match: /starting point of the loop/i, p: 'Fast & Slow Pointers' },
  { match: /remove duplicates/i, p: 'Two Pointers' },
  { match: /move last element to front/i, p: 'Two Pointers' },
  { match: /add 1 to a number represented as linked list/i, p: 'Two Pointers' },
  { match: /add two numbers/i, p: 'Two Pointers' },
  { match: /intersection/i, p: 'Two Pointers' },
  { match: /middle element/i, p: 'Fast & Slow Pointers' },
  { match: /circular/i, p: 'Fast & Slow Pointers' },
  { match: /palindrome/i, p: 'Two Pointers' },
  { match: /merge k sorted/i, p: 'Heap / Priority Queue' },
  { match: /multiply 2 no./i, p: 'Two Pointers' },
  { match: /delete nodes which have a greater value/i, p: 'Two Pointers' },
  { match: /segregate even and odd/i, p: 'Two Pointers' },
  { match: /nth node from end/i, p: 'Two Pointers' },
  { match: /first non-repeating/i, p: 'Hashing' },

  // Binary Trees
  { match: /level order/i, p: 'Breadth-First Search (BFS)' },
  { match: /reverse level order/i, p: 'Breadth-First Search (BFS)' },
  { match: /height|diameter|mirror|invert/i, p: 'Tree Traversals' },
  { match: /inorder|preorder|postorder/i, p: 'Tree Traversals' },
  { match: /left view|right view|top view|bottom view/i, p: 'Breadth-First Search (BFS)' },
  { match: /zigzag|boundary/i, p: 'Breadth-First Search (BFS)' },
  { match: /diagonal/i, p: 'Breadth-First Search (BFS)' },
  { match: /balanced|sum tree|leaf at same level/i, p: 'Tree Traversals' },
  { match: /binary tree to dll/i, p: 'Tree Traversals' },
  { match: /construct binary tree/i, p: 'Tree Traversals' },
  { match: /minimum swaps required to convert binary tree/i, p: 'Cyclic Sort' },
  { match: /sum of nodes on the longest path/i, p: 'Tree Traversals' },
  { match: /lca|lowest common ancestor/i, p: 'Tree Traversals' },
  { match: /distance between 2 nodes/i, p: 'Tree Traversals' },
  { match: /kth ancestor/i, p: 'Tree Traversals' },
  { match: /duplicate subtrees/i, p: 'Hashing' },
  { match: /isomorphism/i, p: 'Tree Traversals' },

  // BST
  { match: /bst/i, p: 'Binary Search' }, // Rough assumption
  { match: /search/i, p: 'Binary Search' },
  { match: /delete/i, p: 'Binary Search' },
  { match: /min/i, p: 'Binary Search' },
  { match: /predecessor|successor/i, p: 'Binary Search' },
  { match: /populate inorder/i, p: 'Tree Traversals' },
  { match: /lca/i, p: 'Binary Search' },
  { match: /kth largest|kth smallest/i, p: 'Tree Traversals' }, // Inorder gives this
  { match: /count pairs/i, p: 'Two Pointers' },
  { match: /median/i, p: 'Tree Traversals' }, // Morris traversal
  { match: /largest bst in a binary tree/i, p: 'Tree Traversals' },
  { match: /flatten/i, p: 'Tree Traversals' },

  // Greedy
  { match: /activity selection|job sequencing/i, p: 'Greedy Algorithms' },
  { match: /huffman/i, p: 'Greedy Algorithms' },
  { match: /water connection/i, p: 'Depth-First Search (DFS)' },
  { match: /fractional knapsack/i, p: 'Greedy Algorithms' },
  { match: /greedy/i, p: 'Greedy Algorithms' },
  { match: /minimum platforms/i, p: 'Greedy Algorithms' },
  { match: /buy maximum stocks/i, p: 'Greedy Algorithms' },
  { match: /minimum|maximum/i, p: 'Greedy Algorithms' }, // Fallback for greedy topic

  // Backtracking
  { match: /n queen/i, p: 'Backtracking' },
  { match: /rat in a maze/i, p: 'Backtracking' },
  { match: /word break/i, p: 'Backtracking' },
  { match: /sudoku/i, p: 'Backtracking' },
  { match: /m-coloring/i, p: 'Backtracking' },
  { match: /hamiltonian/i, p: 'Backtracking' },
  { match: /subset/i, p: 'Backtracking' },
  { match: /combination/i, p: 'Backtracking' },
  { match: /permutation/i, p: 'Backtracking' },
  { match: /longest possible route/i, p: 'Backtracking' },
  
  // Stacks & Queues
  { match: /stack|queue/i, p: 'Monotonic Stack / Queue' },
  { match: /next greater|next smaller/i, p: 'Monotonic Stack / Queue' },
  { match: /celebrity/i, p: 'Two Pointers' },
  { match: /histogram/i, p: 'Monotonic Stack / Queue' },
  { match: /lru cache/i, p: 'Hashing' },
  { match: /rotten oranges/i, p: 'Breadth-First Search (BFS)' },
  { match: /first negative integer in every window/i, p: 'Sliding Window' },
  { match: /sliding window maximum/i, p: 'Sliding Window' },

  // Heap
  { match: /heap/i, p: 'Heap / Priority Queue' },
  { match: /kth/i, p: 'Heap / Priority Queue' },
  { match: /merge k/i, p: 'Heap / Priority Queue' },
  { match: /median in a stream/i, p: 'Heap / Priority Queue' },
  { match: /ropes/i, p: 'Heap / Priority Queue' },

  // Graph
  { match: /bfs/i, p: 'Breadth-First Search (BFS)' },
  { match: /dfs/i, p: 'Depth-First Search (DFS)' },
  { match: /cycle/i, p: 'Depth-First Search (DFS)' }, // Or BFS/Union Find
  { match: /topological/i, p: 'Topological Sort' },
  { match: /dijkstra|bellman|floyd|shortest path/i, p: 'Graph Shortest Path (Dijkstra, Bellman-Ford)' },
  { match: /prim|kruskal|mst/i, p: 'Union Find / Disjoint Set' },
  { match: /bipartite/i, p: 'Breadth-First Search (BFS)' },
  { match: /kosaraju|strongly connected/i, p: 'Depth-First Search (DFS)' },
  { match: /bridges|articulation/i, p: 'Depth-First Search (DFS)' },
  { match: /travelling salesman/i, p: 'Dynamic Programming (DP)' },
  { match: /water jug/i, p: 'Breadth-First Search (BFS)' },
  { match: /word ladder/i, p: 'Breadth-First Search (BFS)' },
  { match: /alien dictionary/i, p: 'Topological Sort' },
  
  // Trie
  { match: /trie/i, p: 'Trie' },
  { match: /word break/i, p: 'Trie' },
  { match: /anagrams/i, p: 'Trie' }, // Can be solved with Trie
  { match: /phone directory/i, p: 'Trie' },

  // Bit Manipulation
  { match: /bit|xor|set bits|power of 2/i, p: 'Bit Manipulation' },
  
  // DP
  { match: /knapsack/i, p: 'Dynamic Programming (DP)' },
  { match: /subsequence/i, p: 'Dynamic Programming (DP)' },
  { match: /subset sum/i, p: 'Dynamic Programming (DP)' },
  { match: /matrix chain/i, p: 'Dynamic Programming (DP)' },
  { match: /egg dropping/i, p: 'Dynamic Programming (DP)' },
  { match: /palindrome partitioning/i, p: 'Dynamic Programming (DP)' },
  { match: /word break/i, p: 'Dynamic Programming (DP)' },
  { match: /coin change/i, p: 'Dynamic Programming (DP)' },
  { match: /longest/i, p: 'Dynamic Programming (DP)' }, // Generic for DP like LIS, LCS
  { match: /catalan/i, p: 'Dynamic Programming (DP)' },
  { match: /maximize|minimize|count/i, p: 'Dynamic Programming (DP)' }, // generic fallbacks
];

const topicRegex = /name:\s*'([^']+)'[\s\S]*?problems:\s*\[([\s\S]*?)\]\n\s*\}/g;

let newContent = content.replace(topicRegex, (topicMatch, topicName, problemsString) => {
  const problemRegex = /({[^}]+})/g;
  
  const updatedProblems = problemsString.replace(problemRegex, (problemStr) => {
    const titleMatch = problemStr.match(/title:\s*['"`](.*?)['"`]/);
    if (!titleMatch) return problemStr;
    
    const title = titleMatch[1];
    let pattern = 'Uncategorized';

    // Global Top-Down matching
    for (const rule of map) {
      if (rule.match.test(title)) {
        pattern = rule.p;
        break; // First match wins
      }
    }

    // If still Uncategorized, fallback by Topic Name
    if (pattern === 'Uncategorized') {
      if (topicName === 'Arrays') pattern = 'Two Pointers';
      if (topicName === 'Matrix') pattern = 'Depth-First Search (DFS)';
      if (topicName === 'String') pattern = 'Two Pointers';
      if (topicName === 'Searching & Sorting') pattern = 'Binary Search';
      if (topicName === 'LinkedList') pattern = 'Two Pointers';
      if (topicName === 'Binary Trees') pattern = 'Tree Traversals';
      if (topicName === 'Binary Search Trees') pattern = 'Binary Search';
      if (topicName === 'Greedy') pattern = 'Greedy Algorithms';
      if (topicName === 'BackTracking') pattern = 'Backtracking';
      if (topicName === 'Stacks & Queues') pattern = 'Monotonic Stack / Queue';
      if (topicName === 'Heap') pattern = 'Heap / Priority Queue';
      if (topicName === 'Graph') pattern = 'Depth-First Search (DFS)';
      if (topicName === 'Trie') pattern = 'Trie';
      if (topicName === 'Dynamic Programming') pattern = 'Dynamic Programming (DP)';
      if (topicName === 'Bit Manipulation') pattern = 'Bit Manipulation';
    }

    // Safety checks against bad quotes
    // Replace existing pattern or add it.
    // Also escape quotes safely.
    if (pattern.includes("'")) {
      // For Kadane's Algorithm
      if (problemStr.includes('pattern:')) {
        return problemStr.replace(/pattern:\s*['"`][^'"`]+['"`]/, `pattern: "${pattern}"`);
      } else {
        return problemStr.replace(/}$/, `, pattern: "${pattern}" }`);
      }
    } else {
      if (problemStr.includes('pattern:')) {
        return problemStr.replace(/pattern:\s*['"`][^'"`]+['"`]/, `pattern: '${pattern}'`);
      } else {
        return problemStr.replace(/}$/, `, pattern: '${pattern}' }`);
      }
    }
  });
  
  return topicMatch.replace(problemsString, updatedProblems);
});

fs.writeFileSync(path, newContent, 'utf-8');
console.log('Successfully applied highly curated 25-pattern tags!');
