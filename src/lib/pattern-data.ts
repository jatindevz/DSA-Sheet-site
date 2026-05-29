export interface RawPatternProblem {
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

export const PATTERN_SHEET_DATA: RawPatternCategory[] = [
  {
    "name": "Two Pointers",
    "icon": "\u270c\ufe0f",
    "color": "#3b82f6",
    "order": 1,
    "problems": [
      {
        "title": "Two Sum II - Input Array is Sorted",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
        "leetcodeUrl": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"
      },
      {
        "title": "Dutch National Flag: Sort Colors",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/sort-colors/",
        "leetcodeUrl": "https://leetcode.com/problems/sort-colors/"
      },
      {
        "title": "Next Permutation",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/next-permutation/",
        "leetcodeUrl": "https://leetcode.com/problems/next-permutation/"
      },
      {
        "title": "Bag of Tokens",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/bag-of-tokens/",
        "leetcodeUrl": "https://leetcode.com/problems/bag-of-tokens/"
      },
      {
        "title": "Container with most water",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/container-with-most-water/",
        "leetcodeUrl": "https://leetcode.com/problems/container-with-most-water/"
      },
      {
        "title": "Trapping Rain Water",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/trapping-rain-water/",
        "leetcodeUrl": "https://leetcode.com/problems/trapping-rain-water/"
      }
    ]
  },
  {
    "name": "Sliding Window",
    "icon": "\ud83e\ude9f",
    "color": "#10b981",
    "order": 2,
    "problems": [
      {
        "title": "Maximum Sum Subarray of Size K",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/"
      },
      {
        "title": "Number of Subarrays having Average Greater or Equal to Threshold",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/"
      },
      {
        "title": "Repeated DNA sequences",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/repeated-dna-sequences/",
        "leetcodeUrl": "https://leetcode.com/problems/repeated-dna-sequences/"
      },
      {
        "title": "Permutation in String",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/permutation-in-string/",
        "leetcodeUrl": "https://leetcode.com/problems/permutation-in-string/"
      },
      {
        "title": "Sliding Subarray Beauty",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/sliding-subarray-beauty/",
        "leetcodeUrl": "https://leetcode.com/problems/sliding-subarray-beauty/"
      },
      {
        "title": "Sliding Window Maximum",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/sliding-window-maximum/",
        "leetcodeUrl": "https://leetcode.com/problems/sliding-window-maximum/"
      },
      {
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        "leetcodeUrl": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
      },
      {
        "title": "Minimum Size Subarray Sum",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/minimum-size-subarray-sum/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-size-subarray-sum/"
      },
      {
        "title": "Subarray Product Less Than K",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/subarray-product-less-than-k/",
        "leetcodeUrl": "https://leetcode.com/problems/subarray-product-less-than-k/"
      },
      {
        "title": "Max Consecutive Ones",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/max-consecutive-ones-iii/",
        "leetcodeUrl": "https://leetcode.com/problems/max-consecutive-ones-iii/"
      },
      {
        "title": "Fruits Into Baskets",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/fruit-into-baskets/",
        "leetcodeUrl": "https://leetcode.com/problems/fruit-into-baskets/"
      },
      {
        "title": "Count Number of Nice Subarrays",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/count-number-of-nice-subarrays",
        "leetcodeUrl": "https://leetcode.com/problems/count-number-of-nice-subarrays"
      },
      {
        "title": "Minimum Window Substring: Minimum Window Substring",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/minimum-window-substring/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-window-substring/"
      }
    ]
  },
  {
    "name": "Fast & Slow Pointers",
    "icon": "\ud83d\udc22",
    "color": "#06b6d4",
    "order": 3,
    "problems": [
      {
        "title": "Linked List Cycle II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/linked-list-cycle-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle-ii/"
      },
      {
        "title": "Remove nth Node from the End of List",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        "leetcodeUrl": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
      },
      {
        "title": "Find the Duplicate Number",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/find-the-duplicate-number/",
        "leetcodeUrl": "https://leetcode.com/problems/find-the-duplicate-number/"
      },
      {
        "title": "Palindrome Linked List",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/palindrome-linked-list/",
        "leetcodeUrl": "https://leetcode.com/problems/palindrome-linked-list/"
      }
    ]
  },
  {
    "name": "Merge Intervals",
    "icon": "\u2194\ufe0f",
    "color": "#8b5cf6",
    "order": 4,
    "problems": [
      {
        "title": "Basic Merge: Merge Intervals",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/merge-intervals/",
        "leetcodeUrl": "https://leetcode.com/problems/merge-intervals/"
      },
      {
        "title": "Interval Insertion: Insert Interval",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/insert-interval/",
        "leetcodeUrl": "https://leetcode.com/problems/insert-interval/"
      },
      {
        "title": "My Calendar ii",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/my-calendar-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/my-calendar-ii/"
      },
      {
        "title": "Minimum Number of Arrows to Burst Balloons",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/"
      },
      {
        "title": "Non-overlapping Intervals",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/non-overlapping-intervals/",
        "leetcodeUrl": "https://leetcode.com/problems/non-overlapping-intervals/"
      }
    ]
  },
  {
    "name": "Cyclic Sort",
    "icon": "\ud83d\udd04",
    "color": "#f43f5e",
    "order": 5,
    "problems": [
      {
        "title": "Missing Number",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/missing-number/",
        "leetcodeUrl": "https://leetcode.com/problems/missing-number/"
      },
      {
        "title": "Find Missing Numbers",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
        "leetcodeUrl": "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/"
      },
      {
        "title": "Set Mismatch",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/set-mismatch/",
        "leetcodeUrl": "https://leetcode.com/problems/set-mismatch/"
      },
      {
        "title": "First Missing Positive",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/first-missing-positive/",
        "leetcodeUrl": "https://leetcode.com/problems/first-missing-positive/"
      }
    ]
  },
  {
    "name": "Binary Search",
    "icon": "\ud83d\udd0d",
    "color": "#eab308",
    "order": 6,
    "problems": [
      {
        "title": "Search in Rotated Sorted Array",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/"
      },
      {
        "title": "Find Minimum in Rotated Sorted Array",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
        "leetcodeUrl": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
      },
      {
        "title": "Find Peak Element",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/find-peak-element/",
        "leetcodeUrl": "https://leetcode.com/problems/find-peak-element/"
      },
      {
        "title": "Single element in a sorted array",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/single-element-in-a-sorted-array/",
        "leetcodeUrl": "https://leetcode.com/problems/single-element-in-a-sorted-array/"
      },
      {
        "title": "Minimum Time to Arrive on Time",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/minimum-speed-to-arrive-on-time/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-speed-to-arrive-on-time/"
      },
      {
        "title": "Capacity to Ship Packages within 'd' Days",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
        "leetcodeUrl": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/"
      },
      {
        "title": "Koko Eating Bananas",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/koko-eating-bananas",
        "leetcodeUrl": "https://leetcode.com/problems/koko-eating-bananas"
      },
      {
        "title": "Find in Mountain Array",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/find-in-mountain-array/",
        "leetcodeUrl": "https://leetcode.com/problems/find-in-mountain-array/"
      },
      {
        "title": "Median of Two Sorted Arrays",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        "leetcodeUrl": "https://leetcode.com/problems/median-of-two-sorted-arrays/"
      }
    ]
  },
  {
    "name": "Backtracking",
    "icon": "\ud83d\udd19",
    "color": "#ec4899",
    "order": 7,
    "problems": [
      {
        "title": "Permutation ii",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/permutations-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/permutations-ii/"
      },
      {
        "title": "Combination Sum",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/combination-sum/",
        "leetcodeUrl": "https://leetcode.com/problems/combination-sum/"
      },
      {
        "title": "Generate Parenthesis",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/generate-parentheses/",
        "leetcodeUrl": "https://leetcode.com/problems/generate-parentheses/"
      },
      {
        "title": "N-Queens",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/n-queens/",
        "leetcodeUrl": "https://leetcode.com/problems/n-queens/"
      },
      {
        "title": "Sudoku Solver",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/sudoku-solver/",
        "leetcodeUrl": "https://leetcode.com/problems/sudoku-solver/"
      },
      {
        "title": "Palindrome Partitioning",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/palindrome-partitioning/",
        "leetcodeUrl": "https://leetcode.com/problems/palindrome-partitioning/"
      },
      {
        "title": "Word Search: Word Search",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/word-search/",
        "leetcodeUrl": "https://leetcode.com/problems/word-search/"
      }
    ]
  },
  {
    "name": "Depth-First Search (DFS)",
    "icon": "\ud83d\udd73\ufe0f",
    "color": "#84cc16",
    "order": 8,
    "problems": [
      {
        "title": "Number of Closed Islands",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/number-of-closed-islands/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-closed-islands/"
      },
      {
        "title": "Coloring a Border",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/coloring-a-border/",
        "leetcodeUrl": "https://leetcode.com/problems/coloring-a-border/"
      },
      {
        "title": "DFS from boundary: Number of Enclaves",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/number-of-enclaves/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-enclaves/"
      },
      {
        "title": "Shortest time: Time Needed to Inform all Employees",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/time-needed-to-inform-all-employees/",
        "leetcodeUrl": "https://leetcode.com/problems/time-needed-to-inform-all-employees/"
      },
      {
        "title": "Cyclic Find: Find Eventual Safe States",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/find-eventual-safe-states/",
        "leetcodeUrl": "https://leetcode.com/problems/find-eventual-safe-states/"
      }
    ]
  },
  {
    "name": "Breadth-First Search (BFS)",
    "icon": "\ud83c\udf0a",
    "color": "#0ea5e9",
    "order": 9,
    "problems": [
      {
        "title": "Shortest Path in Binary Matrix",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
        "leetcodeUrl": "https://leetcode.com/problems/shortest-path-in-binary-matrix/"
      },
      {
        "title": "Rotten Oranges",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/rotting-oranges/",
        "leetcodeUrl": "https://leetcode.com/problems/rotting-oranges/"
      },
      {
        "title": "As Far From Land as Possible",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/as-far-from-land-as-possible/",
        "leetcodeUrl": "https://leetcode.com/problems/as-far-from-land-as-possible/"
      },
      {
        "title": "Word Ladder: Word Ladder",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/word-ladder/",
        "leetcodeUrl": "https://leetcode.com/problems/word-ladder/"
      }
    ]
  },
  {
    "name": "Greedy Algorithms",
    "icon": "\ud83e\udd11",
    "color": "#f97316",
    "order": 10,
    "problems": [
      {
        "title": "Jump Game ii",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/jump-game-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/jump-game-ii/"
      },
      {
        "title": "Gas Station",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/gas-station/",
        "leetcodeUrl": "https://leetcode.com/problems/gas-station/"
      },
      {
        "title": "Boats to Save People",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/boats-to-save-people/",
        "leetcodeUrl": "https://leetcode.com/problems/boats-to-save-people/"
      },
      {
        "title": "Wiggle Subsequence",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/wiggle-subsequence/",
        "leetcodeUrl": "https://leetcode.com/problems/wiggle-subsequence/"
      },
      {
        "title": "Car Pooling",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/car-pooling/",
        "leetcodeUrl": "https://leetcode.com/problems/car-pooling/"
      },
      {
        "title": "Candy",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/candy/",
        "leetcodeUrl": "https://leetcode.com/problems/candy/"
      }
    ]
  },
  {
    "name": "Heap / Priority Queue",
    "icon": "\ud83c\udfd4\ufe0f",
    "color": "#fb923c",
    "order": 11,
    "problems": [
      {
        "title": "Top K Frequent Elements",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/top-k-frequent-elements/",
        "leetcodeUrl": "https://leetcode.com/problems/top-k-frequent-elements/"
      },
      {
        "title": "Kth Largest Element",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
        "leetcodeUrl": "https://leetcode.com/problems/kth-largest-element-in-an-array/"
      },
      {
        "title": "Ugly Number ii",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/ugly-number-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/ugly-number-ii/"
      },
      {
        "title": "K Closest Points to Origin",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/k-closest-points-to-origin/",
        "leetcodeUrl": "https://leetcode.com/problems/k-closest-points-to-origin/"
      },
      {
        "title": "Find K Pairs with Smallest Sums",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
        "leetcodeUrl": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/"
      },
      {
        "title": "Kth Smallest Element in a Sorted Matrix",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
        "leetcodeUrl": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/"
      },
      {
        "title": "Merge K Sorted Lists",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/merge-k-sorted-lists/",
        "leetcodeUrl": "https://leetcode.com/problems/merge-k-sorted-lists/"
      },
      {
        "title": "Smallest Range: Smallest Range Covering Elements from K Lists",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
        "leetcodeUrl": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/"
      },
      {
        "title": "Find Median from Data Stream",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/find-median-from-data-stream/",
        "leetcodeUrl": "https://leetcode.com/problems/find-median-from-data-stream/"
      },
      {
        "title": "Sliding Window Median",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/sliding-window-median/",
        "leetcodeUrl": "https://leetcode.com/problems/sliding-window-median/"
      },
      {
        "title": "IPO",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/ipo/",
        "leetcodeUrl": "https://leetcode.com/problems/ipo/"
      }
    ]
  },
  {
    "name": "Monotonic Stack / Queue",
    "icon": "\ud83d\udcc9",
    "color": "#ef4444",
    "order": 12,
    "problems": [
      {
        "title": "Next Greater Element II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/next-greater-element-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/next-greater-element-ii/"
      },
      {
        "title": "Next Greater Node in Linked List",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/next-greater-node-in-linked-list/",
        "leetcodeUrl": "https://leetcode.com/problems/next-greater-node-in-linked-list/"
      },
      {
        "title": "Daily Temperatures",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/daily-temperatures/",
        "leetcodeUrl": "https://leetcode.com/problems/daily-temperatures/"
      },
      {
        "title": "Online Stock Span",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/online-stock-span/",
        "leetcodeUrl": "https://leetcode.com/problems/online-stock-span/"
      },
      {
        "title": "Maximum Width Ramp",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/maximum-width-ramp/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-width-ramp/"
      },
      {
        "title": "Largest Rectangle in Histogram",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        "leetcodeUrl": "https://leetcode.com/problems/largest-rectangle-in-histogram/"
      },
      {
        "title": "Level order Traversal",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-level-order-traversal/"
      },
      {
        "title": "Zigzag Level order Traversal",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"
      },
      {
        "title": "Even Odd Tree",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/even-odd-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/even-odd-tree/"
      },
      {
        "title": "Reverse odd Levels",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/"
      },
      {
        "title": "Deepest Leaves Sum",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/deepest-leaves-sum/",
        "leetcodeUrl": "https://leetcode.com/problems/deepest-leaves-sum/"
      },
      {
        "title": "Add one row to Tree",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/add-one-row-to-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/add-one-row-to-tree/"
      },
      {
        "title": "Maximum width of Binary Tree",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/maximum-width-of-binary-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-width-of-binary-tree/"
      },
      {
        "title": "All Nodes Distance K in Binary tree",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/"
      },
      {
        "title": "Construct BT from Preorder and Inorder",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        "leetcodeUrl": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"
      },
      {
        "title": "Construct BT from Postorder and Inorder",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
        "leetcodeUrl": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/"
      },
      {
        "title": "Maximum Binary Tree",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/maximum-binary-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-binary-tree/"
      },
      {
        "title": "Construct BST from Preorder",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/",
        "leetcodeUrl": "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/"
      },
      {
        "title": "Maximum Depth of BT",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
      },
      {
        "title": "Balanced Binary Tree",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/balanced-binary-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/balanced-binary-tree/"
      },
      {
        "title": "Diameter of Binary Tree",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/diameter-of-binary-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/diameter-of-binary-tree/"
      },
      {
        "title": "Minimum Depth of BT",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-depth-of-binary-tree/"
      },
      {
        "title": "Binary Tree Paths",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/binary-tree-paths/",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-paths/"
      },
      {
        "title": "Path Sum ii",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/path-sum-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/path-sum-ii/"
      },
      {
        "title": "Sum Root to Leaf numbers",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
        "leetcodeUrl": "https://leetcode.com/problems/sum-root-to-leaf-numbers/"
      },
      {
        "title": "Smallest string starting from Leaf",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/smallest-string-starting-from-leaf",
        "leetcodeUrl": "https://leetcode.com/problems/smallest-string-starting-from-leaf"
      },
      {
        "title": "Insufficient nodes in root to Leaf",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/",
        "leetcodeUrl": "https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/"
      },
      {
        "title": "Pseudo-Palindromic Paths in a Binary Tree",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/"
      },
      {
        "title": "Binary Tree Maximum Path Sum",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-maximum-path-sum/"
      },
      {
        "title": "LCA of Binary Tree",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"
      },
      {
        "title": "Maximum difference between node and ancestor",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/"
      },
      {
        "title": "LCA of deepest leaves",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/",
        "leetcodeUrl": "https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/"
      },
      {
        "title": "Kth Ancestor of a Tree Node",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/kth-ancestor-of-a-tree-node/",
        "leetcodeUrl": "https://leetcode.com/problems/kth-ancestor-of-a-tree-node/"
      },
      {
        "title": "Validate BST",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/validate-binary-search-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/validate-binary-search-tree/"
      },
      {
        "title": "Range Sum of BST",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/range-sum-of-bst/",
        "leetcodeUrl": "https://leetcode.com/problems/range-sum-of-bst/"
      },
      {
        "title": "Minimum Absolute Difference in BST",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/minimum-absolute-difference-in-bst/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-absolute-difference-in-bst/"
      },
      {
        "title": "Insert into a BST",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/insert-into-a-binary-search-tree/"
      },
      {
        "title": "LCA of BST",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
      },
      {
        "title": "House Robber ii",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/house-robber-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/house-robber-ii/"
      },
      {
        "title": "Target Sum",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/target-sum/",
        "leetcodeUrl": "https://leetcode.com/problems/target-sum/"
      },
      {
        "title": "Partition Equal Subset Sum",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/partition-equal-subset-sum/",
        "leetcodeUrl": "https://leetcode.com/problems/partition-equal-subset-sum/"
      },
      {
        "title": "Ones and Zeroes",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/ones-and-zeroes/",
        "leetcodeUrl": "https://leetcode.com/problems/ones-and-zeroes/"
      },
      {
        "title": "Last Stone Weight ii",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/last-stone-weight-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/last-stone-weight-ii/"
      },
      {
        "title": "Coin Change",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/coin-change/",
        "leetcodeUrl": "https://leetcode.com/problems/coin-change/"
      },
      {
        "title": "Coin Change II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/coin-change-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/coin-change-ii/"
      },
      {
        "title": "Perfect Squares",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/perfect-squares/",
        "leetcodeUrl": "https://leetcode.com/problems/perfect-squares/"
      },
      {
        "title": "Minimum Cost For Tickets",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/minimum-cost-for-tickets/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-cost-for-tickets/"
      },
      {
        "title": "Longest Increasing Subsequence",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/longest-increasing-subsequence",
        "leetcodeUrl": "https://leetcode.com/problems/longest-increasing-subsequence"
      },
      {
        "title": "Largest Divisible Subset",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/largest-divisible-subset/",
        "leetcodeUrl": "https://leetcode.com/problems/largest-divisible-subset/"
      },
      {
        "title": "Maximum Length of Pair Chain",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/maximum-length-of-pair-chain/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-length-of-pair-chain/"
      },
      {
        "title": "Number of LIS",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/number-of-longest-increasing-subsequence/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-longest-increasing-subsequence/"
      },
      {
        "title": "Longest String Chain",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/longest-string-chain/",
        "leetcodeUrl": "https://leetcode.com/problems/longest-string-chain/"
      },
      {
        "title": "Unique Paths ii",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/unique-paths-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/unique-paths-ii/"
      },
      {
        "title": "Minimum Path Sum",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/minimum-path-sum/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-path-sum/"
      },
      {
        "title": "Triangle",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/triangle/",
        "leetcodeUrl": "https://leetcode.com/problems/triangle/"
      },
      {
        "title": "Minimum Falling Path Sum",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/minimum-falling-path-sum/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-falling-path-sum/"
      },
      {
        "title": "Maximal Square",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/maximal-square/",
        "leetcodeUrl": "https://leetcode.com/problems/maximal-square/"
      },
      {
        "title": "Cherry Pickup",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/cherry-pickup/",
        "leetcodeUrl": "https://leetcode.com/problems/cherry-pickup/"
      },
      {
        "title": "Dungeon Game: Dungeon Game",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/dungeon-game/",
        "leetcodeUrl": "https://leetcode.com/problems/dungeon-game/"
      },
      {
        "title": "Longest Common Subsequence",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/longest-common-subsequence/",
        "leetcodeUrl": "https://leetcode.com/problems/longest-common-subsequence/"
      },
      {
        "title": "Longest Palindromic Subsequence",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/longest-palindromic-subsequence/",
        "leetcodeUrl": "https://leetcode.com/problems/longest-palindromic-subsequence/"
      },
      {
        "title": "Palindromic Substrings",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/palindromic-substrings/",
        "leetcodeUrl": "https://leetcode.com/problems/palindromic-substrings/"
      },
      {
        "title": "Longest Palindromic Substrings",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/longest-palindromic-substring/",
        "leetcodeUrl": "https://leetcode.com/problems/longest-palindromic-substring/"
      },
      {
        "title": "Edit Distance",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/edit-distance/",
        "leetcodeUrl": "https://leetcode.com/problems/edit-distance/"
      },
      {
        "title": "Minimum ASCII Delete Sum for Two Strings",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/"
      },
      {
        "title": "Distinct Subsequences",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/distinct-subsequences/",
        "leetcodeUrl": "https://leetcode.com/problems/distinct-subsequences/"
      },
      {
        "title": "Shortest Common Supersequence",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/shortest-common-supersequence/",
        "leetcodeUrl": "https://leetcode.com/problems/shortest-common-supersequence/"
      },
      {
        "title": "Wildcard Matching",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/wildcard-matching/",
        "leetcodeUrl": "https://leetcode.com/problems/wildcard-matching/"
      },
      {
        "title": "Buy and Sell Stocks ii",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/"
      },
      {
        "title": "Buy and Sell Stocks iii",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
        "leetcodeUrl": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/"
      },
      {
        "title": "Buy and Sell Stocks iv",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
        "leetcodeUrl": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/"
      },
      {
        "title": "Buy and Sell Stocks with Cooldown",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
        "leetcodeUrl": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/"
      },
      {
        "title": "Buy and Sell Stocks with Transaction fee",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",
        "leetcodeUrl": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/"
      },
      {
        "title": "Partition array for Maximum Sum",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/partition-array-for-maximum-sum/",
        "leetcodeUrl": "https://leetcode.com/problems/partition-array-for-maximum-sum/"
      },
      {
        "title": "Burst Balloons",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/burst-balloons/",
        "leetcodeUrl": "https://leetcode.com/problems/burst-balloons/"
      },
      {
        "title": "Minimum Cost to Cut a Stick",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/"
      },
      {
        "title": "Palindrome Partitioning ii",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/palindrome-partitioning-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/palindrome-partitioning-ii/"
      },
      {
        "title": "Course Schedule",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/course-schedule/",
        "leetcodeUrl": "https://leetcode.com/problems/course-schedule/"
      },
      {
        "title": "Course Schedule II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/course-schedule-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/course-schedule-ii/"
      },
      {
        "title": "Strange Printer ii",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/strange-printer-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/strange-printer-ii/"
      },
      {
        "title": "Sequence Reconstruction",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/sequence-reconstruction/",
        "leetcodeUrl": "https://leetcode.com/problems/sequence-reconstruction/"
      },
      {
        "title": "Alien Dictionary",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/alien-dictionary/",
        "leetcodeUrl": "https://leetcode.com/problems/alien-dictionary/"
      },
      {
        "title": "Number of Operations to Make Network Connected",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/number-of-operations-to-make-network-connected/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-operations-to-make-network-connected/"
      },
      {
        "title": "Redundant Connection",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/redundant-connection/",
        "leetcodeUrl": "https://leetcode.com/problems/redundant-connection/"
      },
      {
        "title": "Accounts Merge",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/accounts-merge/",
        "leetcodeUrl": "https://leetcode.com/problems/accounts-merge/"
      },
      {
        "title": "Satisfiability of Equality Equations",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/satisfiability-of-equality-equations/",
        "leetcodeUrl": "https://leetcode.com/problems/satisfiability-of-equality-equations/"
      },
      {
        "title": "Kruskal's Algorithm: Minimum Cost to connect all Points",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/min-cost-to-connect-all-points/",
        "leetcodeUrl": "https://leetcode.com/problems/min-cost-to-connect-all-points/"
      },
      {
        "title": "Dijkstra's Algorithm: Cheapest Flights Within K Stops",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
        "leetcodeUrl": "https://leetcode.com/problems/cheapest-flights-within-k-stops/"
      },
      {
        "title": "Floyd-Warshall: Find the City with Smallest Number of Neighbours at a Threshold Distance",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/",
        "leetcodeUrl": "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/"
      },
      {
        "title": "Bellman Ford: Network Delay time",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/network-delay-time",
        "leetcodeUrl": "https://leetcode.com/problems/network-delay-time"
      }
    ]
  },
  {
    "name": "Prefix Sum",
    "icon": "\u2795",
    "color": "#d946ef",
    "order": 13,
    "problems": [
      {
        "title": "Find the middle index in array",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/find-the-middle-index-in-array/",
        "leetcodeUrl": "https://leetcode.com/problems/find-the-middle-index-in-array/"
      },
      {
        "title": "Product of array except self",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/product-of-array-except-self/",
        "leetcodeUrl": "https://leetcode.com/problems/product-of-array-except-self/"
      },
      {
        "title": "Maximum product subarray",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/maximum-product-subarray/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-product-subarray/"
      },
      {
        "title": "Number of ways to split array",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/number-of-ways-to-split-array/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-ways-to-split-array/"
      },
      {
        "title": "Range Sum Query 2D",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/range-sum-query-2d-immutable/",
        "leetcodeUrl": "https://leetcode.com/problems/range-sum-query-2d-immutable/"
      }
    ]
  },
  {
    "name": "Bit Manipulation",
    "icon": "0\ufe0f\u20e3",
    "color": "#64748b",
    "order": 14,
    "problems": [
      {
        "title": "Single Number ||",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/single-number-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/single-number-ii/"
      },
      {
        "title": "Single Number III",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/single-number-iii/",
        "leetcodeUrl": "https://leetcode.com/problems/single-number-iii/"
      },
      {
        "title": "Find the Original array of Prefix XOR",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/find-the-original-array-of-prefix-xor/",
        "leetcodeUrl": "https://leetcode.com/problems/find-the-original-array-of-prefix-xor/"
      },
      {
        "title": "XOR Queries of a Subarray",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/xor-queries-of-a-subarray/",
        "leetcodeUrl": "https://leetcode.com/problems/xor-queries-of-a-subarray/"
      }
    ]
  },
  {
    "name": "Matrix Manipulation",
    "icon": "\ud83d\udd33",
    "color": "#0ea5e9",
    "order": 15,
    "problems": [
      {
        "title": "Rotate Image",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/rotate-image/",
        "leetcodeUrl": "https://leetcode.com/problems/rotate-image/"
      },
      {
        "title": "Spiral Matrix",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/spiral-matrix/",
        "leetcodeUrl": "https://leetcode.com/problems/spiral-matrix/"
      },
      {
        "title": "Set Matrix Zeroes",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/set-matrix-zeroes/",
        "leetcodeUrl": "https://leetcode.com/problems/set-matrix-zeroes/"
      },
      {
        "title": "Game of Life",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/game-of-life/",
        "leetcodeUrl": "https://leetcode.com/problems/game-of-life/"
      }
    ]
  },
  {
    "name": "Reversal of Linked List",
    "icon": "\u21a9\ufe0f",
    "color": "#f43f5e",
    "order": 16,
    "problems": [
      {
        "title": "Reverse Linked List",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/reverse-linked-list/",
        "leetcodeUrl": "https://leetcode.com/problems/reverse-linked-list/"
      },
      {
        "title": "Reverse Nodes in k-Group",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        "leetcodeUrl": "https://leetcode.com/problems/reverse-nodes-in-k-group/"
      },
      {
        "title": "Swap Nodes in Pairs",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/swap-nodes-in-pairs/",
        "leetcodeUrl": "https://leetcode.com/problems/swap-nodes-in-pairs/"
      }
    ]
  },
  {
    "name": "Uncategorized",
    "icon": "\ud83d\udcc1",
    "color": "#71717a",
    "order": 17,
    "problems": [
      {
        "title": "Design Twitter",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/design-twitter/",
        "leetcodeUrl": "https://leetcode.com/problems/design-twitter/"
      },
      {
        "title": "Design Browser History",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/design-browser-history/",
        "leetcodeUrl": "https://leetcode.com/problems/design-browser-history/"
      },
      {
        "title": "Design Circular Deque",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/design-circular-deque/",
        "leetcodeUrl": "https://leetcode.com/problems/design-circular-deque/"
      },
      {
        "title": "Snapshot Array",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/snapshot-array/",
        "leetcodeUrl": "https://leetcode.com/problems/snapshot-array/"
      },
      {
        "title": "LRU Cache",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/lru-cache/",
        "leetcodeUrl": "https://leetcode.com/problems/lru-cache/"
      },
      {
        "title": "LFU Cache",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/lfu-cache/",
        "leetcodeUrl": "https://leetcode.com/problems/lfu-cache/"
      },
      {
        "title": "Solved all Two Pointers problems in 100 days",
        "difficulty": "medium",
        "url": "https://leetcode.com/discuss/study-guide/1688903/Solved-all-two-pointers-problems-in-100-days",
        "leetcodeUrl": "https://leetcode.com/discuss/study-guide/1688903/Solved-all-two-pointers-problems-in-100-days"
      },
      {
        "title": "Sliding Window Technique and Question Bank",
        "difficulty": "medium",
        "url": "https://leetcode.com/discuss/study-guide/1773891/Sliding-Window-Technique-and-Question-Bank",
        "leetcodeUrl": "https://leetcode.com/discuss/study-guide/1773891/Sliding-Window-Technique-and-Question-Bank"
      },
      {
        "title": "C++ Maximum Sliding Window Cheatsheet Template!",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/1175088/C++-Maximum-Sliding-Window-Cheatsheet-Template/",
        "leetcodeUrl": "https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/1175088/C++-Maximum-Sliding-Window-Cheatsheet-Template/"
      },
      {
        "title": "Greedy for Beginners: Problems & Sample Solutions",
        "difficulty": "medium",
        "url": "https://leetcode.com/discuss/general-discussion/669996/greedy-for-beginners-problems-sample-solutions",
        "leetcodeUrl": "https://leetcode.com/discuss/general-discussion/669996/greedy-for-beginners-problems-sample-solutions"
      },
      {
        "title": "Top Greedy Questions",
        "difficulty": "medium",
        "url": "https://leetcode.com/discuss/interview-question/3972722/Top-Greedy-Questions-helpful-for-OA-and-Interviews",
        "leetcodeUrl": "https://leetcode.com/discuss/interview-question/3972722/Top-Greedy-Questions-helpful-for-OA-and-Interviews"
      },
      {
        "title": "Become Master In Linked List",
        "difficulty": "medium",
        "url": "https://leetcode.com/discuss/study-guide/1800120/become-master-in-linked-list",
        "leetcodeUrl": "https://leetcode.com/discuss/study-guide/1800120/become-master-in-linked-list"
      },
      {
        "title": "Tree Question Pattern | 2021 Placement",
        "difficulty": "medium",
        "url": "https://leetcode.com/discuss/study-guide/1337373/Tree-question-pattern-oror2021-placement",
        "leetcodeUrl": "https://leetcode.com/discuss/study-guide/1337373/Tree-question-pattern-oror2021-placement"
      },
      {
        "title": "Master Tree Patterns",
        "difficulty": "medium",
        "url": "https://leetcode.com/discuss/study-guide/5020529/Master-Tree-Patterns/",
        "leetcodeUrl": "https://leetcode.com/discuss/study-guide/5020529/Master-Tree-Patterns/"
      },
      {
        "title": "5 Variations of Binary Search",
        "difficulty": "medium",
        "url": "https://leetcode.com/discuss/interview-question/1322500/5-variations-of-Binary-search-(A-Self-Note)",
        "leetcodeUrl": "https://leetcode.com/discuss/interview-question/1322500/5-variations-of-Binary-search-(A-Self-Note)"
      },
      {
        "title": "Binary Search for Beginners: Problems & Patterns",
        "difficulty": "medium",
        "url": "https://leetcode.com/discuss/general-discussion/691825/Binary-Search-for-Beginners-Problems-or-Patterns-or-Sample-solutions",
        "leetcodeUrl": "https://leetcode.com/discuss/general-discussion/691825/Binary-Search-for-Beginners-Problems-or-Patterns-or-Sample-solutions"
      },
      {
        "title": "Dynamic Programming Patterns",
        "difficulty": "medium",
        "url": "https://leetcode.com/discuss/general-discussion/458695/Dynamic-Programming-Patterns",
        "leetcodeUrl": "https://leetcode.com/discuss/general-discussion/458695/Dynamic-Programming-Patterns"
      },
      {
        "title": "DP for Beginners: Problems & Patterns",
        "difficulty": "medium",
        "url": "https://leetcode.com/discuss/general-discussion/662866/DP-for-Beginners-Problems-or-Patterns-or-Sample-Solutions",
        "leetcodeUrl": "https://leetcode.com/discuss/general-discussion/662866/DP-for-Beginners-Problems-or-Patterns-or-Sample-Solutions"
      },
      {
        "title": "Graph For Beginners",
        "difficulty": "medium",
        "url": "https://leetcode.com/discuss/general-discussion/655708/graph-for-beginners-problems-pattern-sample-solutions/",
        "leetcodeUrl": "https://leetcode.com/discuss/general-discussion/655708/graph-for-beginners-problems-pattern-sample-solutions/"
      },
      {
        "title": "Become Master In Graph",
        "difficulty": "medium",
        "url": "https://leetcode.com/discuss/study-guide/2360573/become-master-in-graph",
        "leetcodeUrl": "https://leetcode.com/discuss/study-guide/2360573/become-master-in-graph"
      },
      {
        "title": "Graph algorithms + problems to practice",
        "difficulty": "medium",
        "url": "https://leetcode.com/discuss/study-guide/1326900/graph-algorithms-problems-to-practice",
        "leetcodeUrl": "https://leetcode.com/discuss/study-guide/1326900/graph-algorithms-problems-to-practice"
      },
      {
        "title": "Bit Manipulation Problem solving",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/sum-of-two-integers/solutions/84278/A-summary:-how-to-use-bit-manipulation-to-solve-problems-easily-and-efficiently/",
        "leetcodeUrl": "https://leetcode.com/problems/sum-of-two-integers/solutions/84278/A-summary:-how-to-use-bit-manipulation-to-solve-problems-easily-and-efficiently/"
      },
      {
        "title": "All Types of Patterns for Bits Manipulations and How to use it",
        "difficulty": "medium",
        "url": "https://leetcode.com/discuss/interview-question/3695233/all-types-of-patterns-for-bits-manipulations-and-how-to-use-it",
        "leetcodeUrl": "https://leetcode.com/discuss/interview-question/3695233/all-types-of-patterns-for-bits-manipulations-and-how-to-use-it"
      }
    ]
  }
];
