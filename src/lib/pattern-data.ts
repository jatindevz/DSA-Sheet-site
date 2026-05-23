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
    "icon": "✌️",
    "color": "#3b82f6",
    "order": 1,
    "problems": [
      {
        "title": "Reverse an Array/String",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/reverse-a-string/1",
        "leetcodeUrl": "https://leetcode.com/problems/reverse-string/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/program-to-reverse-an-array/"
      },
      {
        "title": "Find the \"Kth\" max and min element of an array",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1",
        "leetcodeUrl": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/kth-smallest-largest-element-in-unsorted-array-expected-linear-time/"
      },
      {
        "title": "Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1",
        "leetcodeUrl": "https://leetcode.com/problems/sort-colors/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/sort-an-array-of-0s-1s-and-2s/"
      },
      {
        "title": "Move all the negative elements to one side of the array",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/move-all-negative-elements-to-end1813/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/move-negative-numbers-beginning-positive-end-constant-extra-space/"
      },
      {
        "title": "Find the Union and Intersection of the two sorted arrays.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/union-of-two-arrays3538/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-union-and-intersection-of-two-unsorted-arrays/"
      },
      {
        "title": "Write a program to cyclically rotate an array by one.",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/c-program-cyclically-rotate-array-one/"
      },
      {
        "title": "Next Permutation",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/next-permutation5226/1",
        "leetcodeUrl": "https://leetcode.com/problems/next-permutation/",
        "articleUrl": "https://www.geeksforgeeks.org/cpp/lexicographically-next-permutation-in-cpp/"
      },
      {
        "title": "Find all pairs on integer array whose sum is equal to given number",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/count-pairs-with-given-sum/"
      },
      {
        "title": "Find common elements In 3 sorted arrays",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/common-elements1132/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-common-elements-three-sorted-arrays/"
      },
      {
        "title": "Rearrange the array in alternating positive and negative items with O(1) extra space",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/-rearrange-array-alternately-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/rearrange-array-alternating-positive-negative-items-o1-extra-space/"
      },
      {
        "title": "Find if there is any subarray with sum equal to 0",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/subarray-with-0-sum-1587115621/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-if-there-is-a-subarray-with-0-sum/"
      },
      {
        "title": "Given an array of size n and a number k, fin all elements that appear more than \" n/k \" times.",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/count-element-occurences/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/given-an-array-of-of-size-n-finds-all-the-elements-that-appear-more-than-nk-times/"
      },
      {
        "title": "Find whether an array is a subset of another array",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/array-subset-of-another-array2317/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-whether-an-array-is-subset-of-another-array-set-1/"
      },
      {
        "title": "Find the triplet that sum to a given value",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/triplet-sum-in-array-1587115621/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-a-triplet-that-sum-to-a-given-value/"
      },
      {
        "title": "Trapping Rain water problem",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/trapping-rain-water/"
      },
      {
        "title": "Three way partitioning of an array around a given value",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/three-way-partitioning/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/three-way-partitioning-of-an-array-around-a-given-range/"
      },
      {
        "title": "Minimum no. of operations required to make an array palindrome",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/palindromic-array-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/check-if-all-elements-of-the-array-are-palindrome-or-not/"
      },
      {
        "title": "Equal to Product",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/equal-to-product3836/1",
        "articleUrl": "https://www.geeksforgeeks.org/find-if-there-is-a-pair-in-arr-whose-product-is-equal-to-x/"
      },
      {
        "title": "Rotate matrix by 90 degrees",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/rotate-by-90-degree0356/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/"
      },
      {
        "title": "Common elements in all rows of a given matrix",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/common-elements1132/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/common-elements-in-all-rows-of-a-given-matrix/"
      },
      {
        "title": "Reverse a String",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/reverse-a-string/1",
        "leetcodeUrl": "https://leetcode.com/problems/reverse-string/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/reverse-a-string/"
      },
      {
        "title": "Check whether a String is Palindrome or not",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/palindrome-string0817/1",
        "articleUrl": "https://www.geeksforgeeks.org/c/c-program-check-given-string-palindrome/"
      },
      {
        "title": "Write a Code to check whether one string is a rotation of another",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/check-if-strings-are-rotations-of-each-other-or-not-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/a-program-to-check-if-strings-are-rotations-of-each-other/"
      },
      {
        "title": "Write a program to find the longest Palindrome in a string.[ Longest palindromic Substring]",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/longest-palindrome-in-a-string3411/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/longest-palindromic-substring-using-dynamic-programming-2/"
      },
      {
        "title": "KMP Algorithm",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/longest-prefix-suffix2527/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/longest-prefix-also-suffix/"
      },
      {
        "title": "Minimum characters to be added at front to make string palindrome",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/form-a-palindrome1455/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-characters-added-front-make-string-palindrome/"
      },
      {
        "title": "Search in a rotated sorted array",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/search-in-a-rotated-array0959/1?category=",
        "leetcodeUrl": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/search-an-element-in-a-sorted-and-pivoted-array/"
      },
      {
        "title": "Find a pair with a given difference",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/find-pair-given-difference1559/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-a-pair-with-the-given-difference/"
      },
      {
        "title": "Find four elements that sum to a given value",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/find-all-four-sum-numbers1732/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-four-numbers-with-sum-equal-to-given-sum/"
      },
      {
        "title": "Count triplet with sum smaller than a given value",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/count-triplets-with-sum-smaller-than-a-given-value/"
      },
      {
        "title": "Find Minimum in Rotated Sorted Array (Pivot element)",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/minimum-element-in-a-sorted-and-rotated-array3611/1",
        "leetcodeUrl": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-minimum-element-in-a-sorted-and-rotated-array/"
      },
      {
        "title": "Search in Rotated Sorted Array II",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/search-in-rotated-array-2/1",
        "leetcodeUrl": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/search-an-element-in-a-sorted-and-pivoted-array/"
      },
      {
        "title": "DoubleHelix SPOJ",
        "difficulty": "medium",
        "url": ""
      },
      {
        "title": "Count Reverse Pairs",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/count-reverse-pairs/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/count-reverse-pairs/"
      },
      {
        "title": "Write a Program to reverse the Linked List. (Both Iterative and recursive)",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/reverse-a-linked-list/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/reverse-a-linked-list/"
      },
      {
        "title": "Reverse a Linked List in group of Given Size. [Very Imp]",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/reverse-a-linked-list-in-groups-of-given-size/"
      },
      {
        "title": "Add two numbers represented by linked lists.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/add-two-numbers-represented-by-linked-list-without-any-extra-space/"
      },
      {
        "title": "Intersection of two Sorted Linked List.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/intersection-of-two-sorted-linked-lists/"
      },
      {
        "title": "Intersection Point of two Linked Lists.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1",
        "leetcodeUrl": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/write-a-function-to-get-the-intersection-point-of-two-linked-lists/"
      },
      {
        "title": "Write a Program to check whether the Singly Linked list is a palindrome or not.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/function-to-check-if-a-singly-linked-list-is-palindrome/"
      },
      {
        "title": "Reverse a Doubly Linked list.",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/reverse-a-doubly-linked-list/"
      },
      {
        "title": "Find pairs with a given sum in a DLL.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/find-pairs-with-given-sum-in-doubly-linked-list/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-pairs-given-sum-doubly-linked-list/"
      },
      {
        "title": "Count triplets in a sorted DLL whose sum is equal to given value “X”.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/count-triplets-sorted-doubly-linked-list-whose-sum-equal-given-value-x/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/count-triplets-sorted-doubly-linked-list-whose-sum-equal-given-value-x/"
      },
      {
        "title": "Rotate Doubly Linked list by N nodes.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/rotate-doubly-linked-list-n-nodes/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/rotate-doubly-linked-list-n-nodes/"
      },
      {
        "title": "Rotate a Doubly Linked list in group of Given Size.[Very IMP]",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/reverse-doubly-linked-list-groups-given-size/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/reverse-doubly-linked-list-groups-given-size/"
      },
      {
        "title": "Can we reverse a linked list in less than O(n) ?",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/reverse-a-linked-list/1"
      },
      {
        "title": "Multiply 2 no. represented by LL",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/multiply-two-linked-lists/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/multiply-two-numbers-represented-linked-lists/"
      },
      {
        "title": "Delete nodes which have a greater value on right side",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/delete-nodes-having-greater-value-on-right/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/delete-nodes-which-have-a-greater-value-on-right-side/"
      },
      {
        "title": "Segregate even and odd nodes in a Linked List",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/segregate-even-and-odd-nodes-in-a-linked-list5035/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/segregate-even-and-odd-elements-in-a-linked-list/"
      },
      {
        "title": "Palindrome Partitioning Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/palindromic-patitioning4845/1",
        "leetcodeUrl": "https://leetcode.com/problems/palindrome-partitioning/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/palindrome-partitioning-dp-17/"
      },
      {
        "title": "Reverse a String using Stack",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/reverse-a-string-using-stack/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/reverse-the-sentence-using-stack/"
      },
      {
        "title": "The celebrity Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/the-celebrity-problem/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/the-celebrity-problem/"
      },
      {
        "title": "Reverse a stack using recursion",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/reverse-a-stack/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/reverse-a-stack-using-recursion/"
      },
      {
        "title": "Reverse a Queue using recursion",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/queue-reversal/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/reversing-a-queue/"
      },
      {
        "title": "Reverse the first “K” elements of a queue",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/reversing-first-k-elements-queue/"
      },
      {
        "title": "Reverse Level Order traversal",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/reverse-level-order-traversal/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/reverse-level-order-traversal/"
      },
      {
        "title": "Count pairs from 2 BST whose sum is equal to given value \"X\"",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/brothers-from-different-root/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/count-pairs-from-two-bsts-whose-sum-is-equal-to-a-given-value-x/"
      },
      {
        "title": "Minimum edges to reverse to make path from source to destination",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/dsa/minimum-edges-reverse-make-path-source-destination/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-edges-reverse-make-path-source-destination/"
      }
    ]
  },
  {
    "name": "Sliding Window",
    "icon": "🪟",
    "color": "#10b981",
    "order": 2,
    "problems": [
      {
        "title": "Chocolate Distribution problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/chocolate-distribution-problem3825/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/chocolate-distribution-problem/"
      },
      {
        "title": "Smallest Subarray with sum greater than a given value",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/smallest-subarray-with-sum-greater-than-x5651/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-length-subarray-sum-greater-given-value/"
      },
      {
        "title": "Write a program to find the smallest window that contains all characters of string itself.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/smallest-distant-window3132/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/smallest-window-contains-characters-string/"
      },
      {
        "title": "Find the smallest window in a string containing all characters of another string",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string-1587115621/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/"
      },
      {
        "title": "Chocolate Distribution Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/chocolate-distribution-problem3825/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/chocolate-distribution-problem/"
      },
      {
        "title": "First negative integer in every window of size “k”",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/first-negative-integer-every-window-size-k/"
      },
      {
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        "leetcodeUrl": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
      },
      {
        "title": "Substring with Concatenation of All Words",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
        "leetcodeUrl": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/"
      },
      {
        "title": "Minimum Window Substring",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/minimum-window-substring/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-window-substring/"
      },
      {
        "title": "Longest Substring with At Most Two Distinct Characters",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/",
        "leetcodeUrl": "https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/"
      },
      {
        "title": "Repeated DNA Sequences",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/repeated-dna-sequences/",
        "leetcodeUrl": "https://leetcode.com/problems/repeated-dna-sequences/"
      },
      {
        "title": "Minimum Size Subarray Sum",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/minimum-size-subarray-sum/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-size-subarray-sum/"
      },
      {
        "title": "Contains Duplicate II",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/contains-duplicate-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/contains-duplicate-ii/"
      },
      {
        "title": "Contains Duplicate III",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/contains-duplicate-iii/",
        "leetcodeUrl": "https://leetcode.com/problems/contains-duplicate-iii/"
      },
      {
        "title": "Sliding Window Maximum",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/sliding-window-maximum/",
        "leetcodeUrl": "https://leetcode.com/problems/sliding-window-maximum/"
      },
      {
        "title": "Longest Substring with At Most K Distinct Characters",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
        "leetcodeUrl": "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/"
      },
      {
        "title": "Longest Substring with At Least K Repeating Characters",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/",
        "leetcodeUrl": "https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/"
      },
      {
        "title": "Arithmetic Slices",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/arithmetic-slices/",
        "leetcodeUrl": "https://leetcode.com/problems/arithmetic-slices/"
      },
      {
        "title": "Longest Repeating Character Replacement",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/longest-repeating-character-replacement/",
        "leetcodeUrl": "https://leetcode.com/problems/longest-repeating-character-replacement/"
      },
      {
        "title": "Find All Anagrams in a String",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
        "leetcodeUrl": "https://leetcode.com/problems/find-all-anagrams-in-a-string/"
      },
      {
        "title": "Sliding Window Median",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/sliding-window-median/",
        "leetcodeUrl": "https://leetcode.com/problems/sliding-window-median/"
      },
      {
        "title": "Max Consecutive Ones II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/max-consecutive-ones-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/max-consecutive-ones-ii/"
      },
      {
        "title": "Permutation in String",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/permutation-in-string/",
        "leetcodeUrl": "https://leetcode.com/problems/permutation-in-string/"
      },
      {
        "title": "Longest Harmonious Subsequence",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/longest-harmonious-subsequence/",
        "leetcodeUrl": "https://leetcode.com/problems/longest-harmonious-subsequence/"
      },
      {
        "title": "Smallest Range Covering Elements from K Lists",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
        "leetcodeUrl": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/"
      },
      {
        "title": "Maximum Average Subarray I",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/maximum-average-subarray-i/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-average-subarray-i/"
      },
      {
        "title": "Find K Closest Elements",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/find-k-closest-elements/",
        "leetcodeUrl": "https://leetcode.com/problems/find-k-closest-elements/"
      },
      {
        "title": "K Empty Slots",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/k-empty-slots/",
        "leetcodeUrl": "https://leetcode.com/problems/k-empty-slots/"
      },
      {
        "title": "Maximum Sum of 3 Non-Overlapping Subarrays",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/"
      },
      {
        "title": "Subarray Product Less Than K",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/subarray-product-less-than-k/",
        "leetcodeUrl": "https://leetcode.com/problems/subarray-product-less-than-k/"
      },
      {
        "title": "Maximum Length of Repeated Subarray",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/maximum-length-of-repeated-subarray/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-length-of-repeated-subarray/"
      }
    ]
  },
  {
    "name": "Fast & Slow Pointers",
    "icon": "🐢",
    "color": "#06b6d4",
    "order": 3,
    "problems": [
      {
        "title": "Write a program to Detect loop in a linked list.",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/detect-loop-in-linked-list/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/detect-loop-in-a-linked-list/"
      },
      {
        "title": "Find the starting point of the loop.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/find-the-first-node-of-loop-in-linked-list--170645/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-first-node-of-loop-in-a-linked-list/"
      },
      {
        "title": "Find the middle Element of a linked list.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/write-a-c-function-to-print-the-middle-of-the-linked-list/"
      },
      {
        "title": "Check if a linked list is a circular linked list.",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/circular-linked-list/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/check-if-a-linked-list-is-circular-linked-list/"
      },
      {
        "title": "Split a Circular linked list into two halves.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/split-a-circular-linked-list-into-two-halves/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/split-a-circular-linked-list-into-two-halves/"
      },
      {
        "title": "Deletion from a Circular Linked List.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/deletion-and-reverse-in-linked-list/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/deletion-circular-linked-list/"
      },
      {
        "title": "Maximize sum of consecutive differences in a circular array",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/swap-and-maximize5859/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximize-sum-consecutive-differences-circular-array/"
      },
      {
        "title": "Find the middle element of a stack",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/design-a-stack-with-find-middle-operation/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/design-a-stack-with-find-middle-operation/"
      },
      {
        "title": "Implement a Circular queue",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/introduction-to-circular-queue/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/introduction-to-circular-queue/"
      },
      {
        "title": "Find the first circular tour that visits all Petrol Pumps",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/circular-tour-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-a-tour-that-visits-all-stations/"
      },
      {
        "title": "Detect Cycle in Directed Graph using BFS/DFS Algo",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/detect-cycle-in-a-graph/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/detect-cycle-in-a-graph/"
      },
      {
        "title": "Detect Cycle in UnDirected Graph using BFS/DFS Algo",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/detect-cycle-in-an-undirected-graph-using-bfs/#:~:text=We%20do%20a%20BFS%20traversal,that%20there%20is%20no%20cycle."
      },
      {
        "title": "Detect Negative cycle in a graph",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/negative-weight-cycle3504/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/detect-negative-cycle-graph-bellman-ford/"
      },
      {
        "title": "Longest Palindromic Substring",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/longest-palindromic-substring/",
        "leetcodeUrl": "https://leetcode.com/problems/longest-palindromic-substring/"
      },
      {
        "title": "Container With Most Water",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/container-with-most-water/",
        "leetcodeUrl": "https://leetcode.com/problems/container-with-most-water/"
      },
      {
        "title": "3Sum",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/3sum/",
        "leetcodeUrl": "https://leetcode.com/problems/3sum/"
      },
      {
        "title": "3Sum Closest",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/3sum-closest/",
        "leetcodeUrl": "https://leetcode.com/problems/3sum-closest/"
      },
      {
        "title": "4Sum",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/4sum/",
        "leetcodeUrl": "https://leetcode.com/problems/4sum/"
      },
      {
        "title": "Remove Nth Node From End of List",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        "leetcodeUrl": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
      },
      {
        "title": "Remove Duplicates from Sorted Array",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        "leetcodeUrl": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/"
      },
      {
        "title": "Remove Element",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/remove-element/",
        "leetcodeUrl": "https://leetcode.com/problems/remove-element/"
      },
      {
        "title": "Find the Index of the First Occurrence in a String",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
        "leetcodeUrl": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/"
      },
      {
        "title": "Next Permutation",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/next-permutation/",
        "leetcodeUrl": "https://leetcode.com/problems/next-permutation/"
      },
      {
        "title": "Trapping Rain Water",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/trapping-rain-water/",
        "leetcodeUrl": "https://leetcode.com/problems/trapping-rain-water/"
      },
      {
        "title": "Rotate List",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/rotate-list/",
        "leetcodeUrl": "https://leetcode.com/problems/rotate-list/"
      },
      {
        "title": "Sort Colors",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/sort-colors/",
        "leetcodeUrl": "https://leetcode.com/problems/sort-colors/"
      },
      {
        "title": "Remove Duplicates from Sorted Array II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/"
      },
      {
        "title": "Remove Duplicates from Sorted List II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/"
      },
      {
        "title": "Partition List",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/partition-list/",
        "leetcodeUrl": "https://leetcode.com/problems/partition-list/"
      },
      {
        "title": "Merge Sorted Array",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/merge-sorted-array/",
        "leetcodeUrl": "https://leetcode.com/problems/merge-sorted-array/"
      },
      {
        "title": "Valid Palindrome",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/valid-palindrome/",
        "leetcodeUrl": "https://leetcode.com/problems/valid-palindrome/"
      },
      {
        "title": "Linked List Cycle",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/linked-list-cycle/",
        "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle/"
      },
      {
        "title": "Linked List Cycle II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/linked-list-cycle-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle-ii/"
      },
      {
        "title": "Reorder List",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/reorder-list/",
        "leetcodeUrl": "https://leetcode.com/problems/reorder-list/"
      },
      {
        "title": "Sort List",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/sort-list/",
        "leetcodeUrl": "https://leetcode.com/problems/sort-list/"
      },
      {
        "title": "Reverse Words in a String",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/reverse-words-in-a-string/",
        "leetcodeUrl": "https://leetcode.com/problems/reverse-words-in-a-string/"
      },
      {
        "title": "Intersection of Two Linked Lists",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
        "leetcodeUrl": "https://leetcode.com/problems/intersection-of-two-linked-lists/"
      },
      {
        "title": "One Edit Distance",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/one-edit-distance/",
        "leetcodeUrl": "https://leetcode.com/problems/one-edit-distance/"
      }
    ]
  },
  {
    "name": "Merge Intervals",
    "icon": "↔️",
    "color": "#8b5cf6",
    "order": 4,
    "problems": [
      {
        "title": "Merge 2 sorted arrays without using Extra space.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/merge-two-sorted-arrays/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/overlapping-intervals--170633/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/merging-intervals/"
      },
      {
        "title": "Merge 2 sorted arrays",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1",
        "leetcodeUrl": "https://leetcode.com/problems/merge-sorted-array/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/merge-two-sorted-arrays-o1-extra-space/"
      },
      {
        "title": "Merge Overlapping Intervals",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/overlapping-intervals/0",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/merging-intervals/"
      },
      {
        "title": "Two Sum",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/two-sum/",
        "leetcodeUrl": "https://leetcode.com/problems/two-sum/"
      },
      {
        "title": "Add Two Numbers",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/add-two-numbers/",
        "leetcodeUrl": "https://leetcode.com/problems/add-two-numbers/"
      },
      {
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        "leetcodeUrl": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
      },
      {
        "title": "Median of Two Sorted Arrays",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        "leetcodeUrl": "https://leetcode.com/problems/median-of-two-sorted-arrays/"
      },
      {
        "title": "Longest Palindromic Substring",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/longest-palindromic-substring/",
        "leetcodeUrl": "https://leetcode.com/problems/longest-palindromic-substring/"
      },
      {
        "title": "Zigzag Conversion",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/zigzag-conversion/",
        "leetcodeUrl": "https://leetcode.com/problems/zigzag-conversion/"
      },
      {
        "title": "Reverse Integer",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/reverse-integer/",
        "leetcodeUrl": "https://leetcode.com/problems/reverse-integer/"
      },
      {
        "title": "String to Integer (atoi)",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/string-to-integer-atoi/",
        "leetcodeUrl": "https://leetcode.com/problems/string-to-integer-atoi/"
      },
      {
        "title": "Palindrome Number",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/palindrome-number/",
        "leetcodeUrl": "https://leetcode.com/problems/palindrome-number/"
      },
      {
        "title": "Regular Expression Matching",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/regular-expression-matching/",
        "leetcodeUrl": "https://leetcode.com/problems/regular-expression-matching/"
      },
      {
        "title": "Container With Most Water",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/container-with-most-water/",
        "leetcodeUrl": "https://leetcode.com/problems/container-with-most-water/"
      },
      {
        "title": "Integer to Roman",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/integer-to-roman/",
        "leetcodeUrl": "https://leetcode.com/problems/integer-to-roman/"
      },
      {
        "title": "Roman to Integer",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/roman-to-integer/",
        "leetcodeUrl": "https://leetcode.com/problems/roman-to-integer/"
      },
      {
        "title": "Longest Common Prefix",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/longest-common-prefix/",
        "leetcodeUrl": "https://leetcode.com/problems/longest-common-prefix/"
      },
      {
        "title": "3Sum",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/3sum/",
        "leetcodeUrl": "https://leetcode.com/problems/3sum/"
      },
      {
        "title": "3Sum Closest",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/3sum-closest/",
        "leetcodeUrl": "https://leetcode.com/problems/3sum-closest/"
      },
      {
        "title": "Letter Combinations of a Phone Number",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        "leetcodeUrl": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/"
      },
      {
        "title": "4Sum",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/4sum/",
        "leetcodeUrl": "https://leetcode.com/problems/4sum/"
      },
      {
        "title": "Remove Nth Node From End of List",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        "leetcodeUrl": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
      },
      {
        "title": "Valid Parentheses",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/valid-parentheses/",
        "leetcodeUrl": "https://leetcode.com/problems/valid-parentheses/"
      },
      {
        "title": "Merge Two Sorted Lists",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/merge-two-sorted-lists/",
        "leetcodeUrl": "https://leetcode.com/problems/merge-two-sorted-lists/"
      },
      {
        "title": "Generate Parentheses",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/generate-parentheses/",
        "leetcodeUrl": "https://leetcode.com/problems/generate-parentheses/"
      },
      {
        "title": "Merge k Sorted Lists",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/merge-k-sorted-lists/",
        "leetcodeUrl": "https://leetcode.com/problems/merge-k-sorted-lists/"
      },
      {
        "title": "Swap Nodes in Pairs",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/swap-nodes-in-pairs/",
        "leetcodeUrl": "https://leetcode.com/problems/swap-nodes-in-pairs/"
      },
      {
        "title": "Reverse Nodes in k-Group",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        "leetcodeUrl": "https://leetcode.com/problems/reverse-nodes-in-k-group/"
      }
    ]
  },
  {
    "name": "Cyclic Sort",
    "icon": "🔄",
    "color": "#f43f5e",
    "order": 5,
    "problems": [
      {
        "title": "Find duplicate in an array of N+1 Integers",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/find-duplicates-in-an-array/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-duplicates-in-on-time-and-constant-extra-space/"
      },
      {
        "title": "Find Duplicate characters in a string",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/print-all-the-duplicates-in-the-input-string/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/print-all-the-duplicates-in-the-input-string/"
      },
      {
        "title": "3Sum",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/3sum/",
        "leetcodeUrl": "https://leetcode.com/problems/3sum/"
      },
      {
        "title": "3Sum Closest",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/3sum-closest/",
        "leetcodeUrl": "https://leetcode.com/problems/3sum-closest/"
      },
      {
        "title": "4Sum",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/4sum/",
        "leetcodeUrl": "https://leetcode.com/problems/4sum/"
      },
      {
        "title": "Permutations II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/permutations-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/permutations-ii/"
      },
      {
        "title": "Group Anagrams",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/group-anagrams/",
        "leetcodeUrl": "https://leetcode.com/problems/group-anagrams/"
      },
      {
        "title": "Merge Intervals",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/merge-intervals/",
        "leetcodeUrl": "https://leetcode.com/problems/merge-intervals/"
      },
      {
        "title": "Sort Colors",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/sort-colors/",
        "leetcodeUrl": "https://leetcode.com/problems/sort-colors/"
      },
      {
        "title": "Merge Sorted Array",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/merge-sorted-array/",
        "leetcodeUrl": "https://leetcode.com/problems/merge-sorted-array/"
      },
      {
        "title": "Insertion Sort List",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/insertion-sort-list/",
        "leetcodeUrl": "https://leetcode.com/problems/insertion-sort-list/"
      },
      {
        "title": "Sort List",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/sort-list/",
        "leetcodeUrl": "https://leetcode.com/problems/sort-list/"
      },
      {
        "title": "Maximum Gap",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/maximum-gap/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-gap/"
      },
      {
        "title": "Majority Element",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/majority-element/",
        "leetcodeUrl": "https://leetcode.com/problems/majority-element/"
      },
      {
        "title": "Largest Number",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/largest-number/",
        "leetcodeUrl": "https://leetcode.com/problems/largest-number/"
      },
      {
        "title": "Kth Largest Element in an Array",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
        "leetcodeUrl": "https://leetcode.com/problems/kth-largest-element-in-an-array/"
      },
      {
        "title": "Contains Duplicate",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/contains-duplicate/",
        "leetcodeUrl": "https://leetcode.com/problems/contains-duplicate/"
      },
      {
        "title": "The Skyline Problem",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/the-skyline-problem/",
        "leetcodeUrl": "https://leetcode.com/problems/the-skyline-problem/"
      },
      {
        "title": "Contains Duplicate III",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/contains-duplicate-iii/",
        "leetcodeUrl": "https://leetcode.com/problems/contains-duplicate-iii/"
      },
      {
        "title": "Majority Element II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/majority-element-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/majority-element-ii/"
      },
      {
        "title": "Valid Anagram",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/valid-anagram/",
        "leetcodeUrl": "https://leetcode.com/problems/valid-anagram/"
      },
      {
        "title": "Meeting Rooms",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/meeting-rooms/",
        "leetcodeUrl": "https://leetcode.com/problems/meeting-rooms/"
      },
      {
        "title": "Meeting Rooms II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/meeting-rooms-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/meeting-rooms-ii/"
      },
      {
        "title": "3Sum Smaller",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/3sum-smaller/",
        "leetcodeUrl": "https://leetcode.com/problems/3sum-smaller/"
      },
      {
        "title": "Missing Number",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/missing-number/",
        "leetcodeUrl": "https://leetcode.com/problems/missing-number/"
      },
      {
        "title": "H-Index",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/h-index/",
        "leetcodeUrl": "https://leetcode.com/problems/h-index/"
      },
      {
        "title": "Wiggle Sort",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/wiggle-sort/",
        "leetcodeUrl": "https://leetcode.com/problems/wiggle-sort/"
      }
    ]
  },
  {
    "name": "Binary Search",
    "icon": "🔍",
    "color": "#eab308",
    "order": 6,
    "problems": [
      {
        "title": "Minimum no. of Jumps to reach end of an array",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-number-jumps-reach-endset-2on-solution/"
      },
      {
        "title": "Minimum swaps required bring elements less equal K together",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/minimum-swaps-required-to-bring-all-elements-less-than-or-equal-to-k-together4847/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-swaps-required-bring-elements-less-equal-k-together/"
      },
      {
        "title": "Median of 2 sorted arrays of equal size",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/find-the-median0527/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/median-of-two-sorted-arrays/"
      },
      {
        "title": "Median of 2 sorted arrays of different size",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/median-of-2-sorted-arrays-of-different-sizes/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/median-of-two-sorted-arrays-of-different-sizes/"
      },
      {
        "title": "Spiral traversal on a Matrix",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/print-a-given-matrix-in-spiral-form/"
      },
      {
        "title": "Search an element in a Matrix",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/search-in-a-matrix-1587115621/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/search-in-row-wise-and-column-wise-sorted-matrix/"
      },
      {
        "title": "Find median in a row wise sorted matrix",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-median-row-wise-sorted-matrix/"
      },
      {
        "title": "Print elements in sorted order using row-column wise sorted matrix",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/sorted-matrix2333/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/print-elements-sorted-order-row-column-wise-sorted-matrix/"
      },
      {
        "title": "Search a Word in a 2D Grid of characters.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/find-the-string-in-grid0111/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/search-a-word-in-a-2d-grid-of-characters/"
      },
      {
        "title": "Boyer Moore Algorithm for Pattern Searching.",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/pattern-searching5231/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/boyer-moore-algorithm-for-pattern-searching/"
      },
      {
        "title": "Minimum number of swaps for bracket balancing.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/minimum-swaps-for-bracket-balancing2704/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-swaps-bracket-balancing/"
      },
      {
        "title": "Transform One String to Another using Minimum Number of Given Operation",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/transform-string5648/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/transform-one-string-to-another-using-minimum-number-of-given-operation/"
      },
      {
        "title": "Find first and last positions of an element in a sorted array",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/first-and-last-occurrences-of-x3116/1",
        "leetcodeUrl": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-first-and-last-positions-of-an-element-in-a-sorted-array/"
      },
      {
        "title": "Find a Fixed Point (Value equal to index) in a given array",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/value-equal-to-index-value1330/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-a-fixed-point-in-a-given-array/"
      },
      {
        "title": "Square root of an integer",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/count-squares3649/1",
        "leetcodeUrl": "https://leetcode.com/problems/sqrtx/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/square-root-of-an-integer/"
      },
      {
        "title": "Optimum location of point to minimize total distance",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/optimum-location-of-point-to-minimize-total-distance/0",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/optimum-location-point-minimize-total-distance/#:~:text=We%20need%20to%20find%20a,set%20of%20points%20is%20minimum.&text=In%20above%20figure%20optimum%20location,is%20minimum%20obtainable%20total%20distance."
      },
      {
        "title": "Find the repeating and the missing",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-a-repeating-and-a-missing-number/"
      },
      {
        "title": "Searching in an array where adjacent differ by at most k",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/searching-in-an-array-where-adjacent-differ-by-at-most-k0456/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/searching-array-adjacent-differ-k/"
      },
      {
        "title": "Minimum no. of swaps required to sort the array",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/minimum-swaps/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-number-swaps-required-sort-array/"
      },
      {
        "title": "Rasta and Kheshtak",
        "difficulty": "medium",
        "url": ""
      },
      {
        "title": "Find Peak Element",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/find-the-peak-element/1",
        "leetcodeUrl": "https://leetcode.com/problems/find-peak-element/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/peak-element/"
      },
      {
        "title": "Single Element in a Sorted Array",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/find-the-element-that-appears-once-in-sorted-array0624/1",
        "leetcodeUrl": "https://leetcode.com/problems/single-element-in-a-sorted-array/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/single-element-in-sorted-array/"
      },
      {
        "title": "K-th Element of Two Sorted Arrays",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/k-th-element-two-sorted-arrays/"
      },
      {
        "title": "Aggressive cows",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/aggressive-cows/1"
      },
      {
        "title": "Book Allocation Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/allocate-minimum-number-pages/"
      },
      {
        "title": "EKOSPOJ:",
        "difficulty": "medium",
        "url": ""
      },
      {
        "title": "Painters Partition Problem:",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/the-painters-partition-problem1535/1"
      },
      {
        "title": "ROTI-Prata SPOJ",
        "difficulty": "medium",
        "url": ""
      },
      {
        "title": "Implement Merge-sort in-place",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/in-place-merge-sort/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/in-place-merge-sort/"
      },
      {
        "title": "Write a program to Delete loop in a linked list.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/remove-loop-in-linked-list/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/detect-and-remove-loop-in-a-linked-list/"
      },
      {
        "title": "Greedy Algorithm to find Minimum number of Coins",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/choose-and-swap0531/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/greedy-algorithm-to-find-minimum-number-of-coins/"
      },
      {
        "title": "Minimum Platforms Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-number-platforms-required-railwaybus-station/"
      },
      {
        "title": "Find the minimum and maximum amount to buy all N candies",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/shop-in-candy-store1145/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-minimum-maximum-amount-buy-n-candies/"
      },
      {
        "title": "Minimize Cash Flow among a given set of friends who have borrowed money from each other",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/minimize-cash-flow/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimize-cash-flow-among-given-set-friends-borrowed-money/"
      },
      {
        "title": "Minimum Cost to cut a board into squares",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/minimum-cost-to-cut-a-board-into-squares/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-cost-cut-board-squares/"
      },
      {
        "title": "Minimum sum of absolute difference of pairs of two arrays",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/minimum-sum-of-absolute-differences-of-pairs/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-sum-absolute-difference-pairs-two-arrays/#:~:text=It%20consists%20of%20two%20steps,result%20to%20the%20sum%20S."
      },
      {
        "title": "Minimum Cost of ropes",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/connect-n-ropes-minimum-cost/"
      },
      {
        "title": "Find shortest safe route in a path with landmines",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/find-shortest-safe-route-in-a-matrix/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-shortest-safe-route-in-a-path-with-landmines/"
      },
      {
        "title": "Gold Mine Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/gold-mine-problem2608/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/gold-mine-problem/"
      },
      {
        "title": "Min Cost Path Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/path-in-matrix3805/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/min-cost-path-dp-6/"
      },
      {
        "title": "Minimum cost to fill given weight in a bag",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/minimum-cost-to-fill-given-weight-in-a-bag1956/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-cost-to-fill-given-weight-in-a-bag/"
      },
      {
        "title": "Minimum removals from array to make max –min <= K",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/array-removals/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-removals-array-make-max-min-k/"
      },
      {
        "title": "Longest Common Substring",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/longest-common-substring1452/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/longest-common-substring-dp-29/"
      },
      {
        "title": "Longest Palindromic Substring",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/longest-palindrome-in-a-string1956/1",
        "leetcodeUrl": "https://leetcode.com/problems/longest-palindromic-substring/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/longest-palindromic-substring/"
      },
      {
        "title": "Optimal Binary Search Tree",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/optimal-binary-search-tree2214/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/optimal-binary-search-tree-dp-24/"
      },
      {
        "title": "Design a Stack that supports getMin() in O(1) time and O(1) extra space.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/special-stack/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/design-a-stack-that-supports-getmin-in-o1-time-and-o1-extra-space/"
      },
      {
        "title": "Length of the Longest Valid Substring",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/valid-substring0624/1",
        "leetcodeUrl": "https://leetcode.com/problems/length-of-the-longest-valid-substring/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/length-of-the-longest-valid-substring/"
      },
      {
        "title": "Minimum time required to rot all oranges",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/rotten-oranges2536/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-time-required-so-that-all-oranges-become-rotten/"
      },
      {
        "title": "Sum of minimum and maximum elements of all subarrays of size “k”.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/sum-minimum-maximum-elements-subarrays-size-k/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/sum-minimum-maximum-elements-subarrays-size-k/"
      },
      {
        "title": "Minimum sum of squares of character counts in a given string after removing “k” characters.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/game-with-string4100/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-sum-squares-characters-counts-given-string-removing-k-characters/"
      },
      {
        "title": "Find minimum swaps required to convert a Binary tree into BST",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/minimum-swap-required-to-convert-binary-tree-to-binary-search-tree/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-swap-required-convert-binary-tree-binary-search-tree/#:~:text=Given%20the%20array%20representation%20of,it%20into%20Binary%20Search%20Tree.&text=Swap%201%3A%20Swap%20node%208,node%209%20with%20node%2010."
      },
      {
        "title": "Find a value in a BST",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/binary-search-tree-set-1-search-and-insertion/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/binary-search-tree-set-1-search-and-insertion/"
      },
      {
        "title": "Deletion of a node in a BST",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/delete-a-node-from-bst/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/deletion-in-binary-search-tree/"
      },
      {
        "title": "Check if a tree is a BST or not",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/check-for-bst/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/a-program-to-check-if-a-binary-tree-is-bst-or-not/"
      },
      {
        "title": "Convert Binary tree into BST",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/binary-tree-to-bst/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/binary-tree-to-binary-search-tree-conversion/"
      },
      {
        "title": "Merge two BST [ V.V.V>IMP ]",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/merge-two-bst-s/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/merge-two-balanced-binary-search-trees/"
      },
      {
        "title": "Find the median of BST in O(n) time and O(1) space",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/median-of-bst/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-median-bst-time-o1-space/"
      },
      {
        "title": "Count BST nodes that lie in a given range",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1"
      },
      {
        "title": "Replace every element with the least greater element on its right",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/replace-every-element-with-the-least-greater-element-on-its-right/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/replace-every-element-with-the-least-greater-element-on-its-right/"
      },
      {
        "title": "Given \"n\" appointments, find the conflicting appointments",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/given-n-appointments-find-conflicting-appointments/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/given-n-appointments-find-conflicting-appointments/"
      },
      {
        "title": "Check whether BST contains Dead end",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/check-whether-bst-contains-dead-end/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/check-whether-bst-contains-dead-end-not/"
      },
      {
        "title": "Largest BST in a Binary Tree [ V.V.V.V.V IMP ]",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/largest-bst/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-the-largest-subtree-in-a-tree-that-is-also-a-bst/"
      },
      {
        "title": "Flatten BST to sorted list",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/flatten-bst-to-sorted-list-increasing-order/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/flatten-bst-to-sorted-list-increasing-order/"
      },
      {
        "title": "Search in a Maze",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/rat-in-a-maze/"
      },
      {
        "title": "Minimum Step by Knight",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/steps-by-knight5927/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-steps-reach-target-knight/"
      },
      {
        "title": "Minimum time taken by each job to be completed given by a Directed Acyclic Graph",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/minimum-time-taken-by-each-job-to-be-completed-given-by-a-directed-acyclic-graph/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-time-taken-by-each-job-to-be-completed-given-by-a-directed-acyclic-graph/"
      },
      {
        "title": "Minimise the cashflow among a given set of friends who have borrowed money from each other",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/minimize-cash-flow/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimize-cash-flow-among-given-set-friends-borrowed-money/"
      },
      {
        "title": "Implement a Maxheap/MinHeap using arrays and recursion.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/building-heap-from-array/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/building-heap-from-array/"
      },
      {
        "title": "Connect “n” ropes with minimum cost",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/connect-n-ropes-minimum-cost/"
      },
      {
        "title": "Convert BST to Min Heap",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/convert-bst-min-heap/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/convert-bst-min-heap/"
      },
      {
        "title": "Convert min heap to max heap",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/convert-min-heap-to-max-heap-1666385109/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/convert-min-heap-to-max-heap/"
      },
      {
        "title": "Minimum sum of two numbers formed from digits of an array",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/minimum-sum4058/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-sum-two-numbers-formed-digits-array/"
      }
    ]
  },
  {
    "name": "Backtracking",
    "icon": "🔙",
    "color": "#ec4899",
    "order": 7,
    "problems": [
      {
        "title": "Print all the permutations of the given string",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/permutations-of-a-given-string2041/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/write-a-c-program-to-print-all-permutations-of-a-given-string/"
      },
      {
        "title": "Subset Sums",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1"
      },
      {
        "title": "Smallest subset with sum greater than all other elements",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/smallest-subset-with-greater-sum/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/smallest-subset-sum-greater-elements/"
      },
      {
        "title": "Rat in a maze Problem",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/rat-in-a-maze-problem-when-movement-in-all-possible-directions-is-allowed/"
      },
      {
        "title": "Sudoku Solver",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/solve-the-sudoku-1587115621/1",
        "leetcodeUrl": "https://leetcode.com/problems/sudoku-solver/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/sudoku-backtracking-7/"
      },
      {
        "title": "Subset Sum Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/subset-sum-problem2014/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/subset-sum-problem-osum-space/"
      },
      {
        "title": "Combinational Sum",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/combination-sum-1587115620/1",
        "leetcodeUrl": "https://leetcode.com/problems/combination-sum/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/combinational-sum/"
      },
      {
        "title": "Print all permutations of a string",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/permutations-of-a-given-string2041/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/write-a-c-program-to-print-all-permutations-of-a-given-string/"
      },
      {
        "title": "Longest Possible Route in a Matrix with Hurdles",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/longest-possible-route-in-a-matrix-with-hurdles/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/longest-possible-route-in-a-matrix-with-hurdles/"
      },
      {
        "title": "Partition of a set into K subsets with equal sum",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/partition-array-to-k-subsets/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/partition-set-k-subsets-equal-sum/"
      },
      {
        "title": "Find the K-th Permutation Sequence of first N natural numbers",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/find-kth-permutation-0932/0?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-the-k-th-permutation-sequence-of-first-n-natural-numbers/"
      },
      {
        "title": "Permutation Coefficient Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/permutation-coefficient/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/permutation-coefficient/"
      },
      {
        "title": "Subset Sum Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/subset-sum-problem2014/1",
        "articleUrl": "https://www.geeksforgeeks.org/problems/subset-sum-problem2014/1"
      },
      {
        "title": "Count Derangements (Permutation such that no element appears in its original position) [ IMPORTANT ]",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/count-derangements-permutation-such-that-no-element-appears-in-its-original-position/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/count-derangements-permutation-such-that-no-element-appears-in-its-original-position/"
      },
      {
        "title": "Stack Permutations (Check if an array is stack permutation of other)",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/stack-permutations/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/stack-permutations-check-if-an-array-is-stack-permutation-of-other/"
      },
      {
        "title": "Letter Combinations of a Phone Number",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        "leetcodeUrl": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/"
      },
      {
        "title": "Generate Parentheses",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/generate-parentheses/",
        "leetcodeUrl": "https://leetcode.com/problems/generate-parentheses/"
      },
      {
        "title": "Combination Sum II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/combination-sum-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/combination-sum-ii/"
      },
      {
        "title": "Permutations",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/permutations/",
        "leetcodeUrl": "https://leetcode.com/problems/permutations/"
      },
      {
        "title": "Permutations II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/permutations-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/permutations-ii/"
      },
      {
        "title": "N-Queens",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/n-queens/",
        "leetcodeUrl": "https://leetcode.com/problems/n-queens/"
      },
      {
        "title": "N-Queens II",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/n-queens-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/n-queens-ii/"
      },
      {
        "title": "Combinations",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/combinations/",
        "leetcodeUrl": "https://leetcode.com/problems/combinations/"
      },
      {
        "title": "Subsets",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/subsets/",
        "leetcodeUrl": "https://leetcode.com/problems/subsets/"
      },
      {
        "title": "Word Search",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/word-search/",
        "leetcodeUrl": "https://leetcode.com/problems/word-search/"
      },
      {
        "title": "Gray Code",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/gray-code/",
        "leetcodeUrl": "https://leetcode.com/problems/gray-code/"
      },
      {
        "title": "Subsets II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/subsets-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/subsets-ii/"
      },
      {
        "title": "Restore IP Addresses",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/restore-ip-addresses/",
        "leetcodeUrl": "https://leetcode.com/problems/restore-ip-addresses/"
      },
      {
        "title": "Unique Binary Search Trees II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/unique-binary-search-trees-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/unique-binary-search-trees-ii/"
      },
      {
        "title": "Path Sum II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/path-sum-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/path-sum-ii/"
      },
      {
        "title": "Word Ladder II",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/word-ladder-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/word-ladder-ii/"
      },
      {
        "title": "Palindrome Partitioning",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/palindrome-partitioning/",
        "leetcodeUrl": "https://leetcode.com/problems/palindrome-partitioning/"
      },
      {
        "title": "Word Break II",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/word-break-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/word-break-ii/"
      },
      {
        "title": "Word Search II",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/word-search-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/word-search-ii/"
      },
      {
        "title": "Combination Sum III",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/combination-sum-iii/",
        "leetcodeUrl": "https://leetcode.com/problems/combination-sum-iii/"
      },
      {
        "title": "Factor Combinations",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/factor-combinations/",
        "leetcodeUrl": "https://leetcode.com/problems/factor-combinations/"
      },
      {
        "title": "Binary Tree Paths",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/binary-tree-paths/",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-paths/"
      },
      {
        "title": "Palindrome Permutation II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/palindrome-permutation-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/palindrome-permutation-ii/"
      }
    ]
  },
  {
    "name": "Depth-First Search (DFS)",
    "icon": "🕳️",
    "color": "#84cc16",
    "order": 8,
    "problems": [
      {
        "title": "Find a specific pair in matrix",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/find-a-specific-pair-in-matrix/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-a-specific-pair-in-matrix/"
      },
      {
        "title": "1s Surrounded by 0s",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/1s-surrounded-by-0s/1",
        "articleUrl": "https://www.geeksforgeeks.org/problems/1s-surrounded-by-0s/1"
      },
      {
        "title": "Count of number of given string in 2D character array",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/count-occurences-of-a-given-word-in-a-2-d-array/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-count-number-given-string-present-2d-character-array/"
      },
      {
        "title": "Water Connection Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/water-connection-problem5822/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/water-connection-problem/"
      },
      {
        "title": "Implement DFS Algo",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/depth-first-search-or-dfs-for-a-graph/"
      },
      {
        "title": "Count Strongly connected Components(Kosaraju Algo)",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/strongly-connected-components/"
      },
      {
        "title": "Paths to travel each nodes using each edge(Seven Bridges)",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/paths-travel-nodes-using-edgeseven-bridges-konigsberg/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/paths-travel-nodes-using-edgeseven-bridges-konigsberg/"
      },
      {
        "title": "Word Search",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/word-search/",
        "leetcodeUrl": "https://leetcode.com/problems/word-search/"
      },
      {
        "title": "Binary Tree Inorder Traversal",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-inorder-traversal/"
      },
      {
        "title": "Validate Binary Search Tree",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/validate-binary-search-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/validate-binary-search-tree/"
      },
      {
        "title": "Recover Binary Search Tree",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/recover-binary-search-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/recover-binary-search-tree/"
      },
      {
        "title": "Same Tree",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/same-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/same-tree/"
      },
      {
        "title": "Symmetric Tree",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/symmetric-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/symmetric-tree/"
      },
      {
        "title": "Maximum Depth of Binary Tree",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
      },
      {
        "title": "Balanced Binary Tree",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/balanced-binary-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/balanced-binary-tree/"
      },
      {
        "title": "Minimum Depth of Binary Tree",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-depth-of-binary-tree/"
      },
      {
        "title": "Path Sum",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/path-sum/",
        "leetcodeUrl": "https://leetcode.com/problems/path-sum/"
      },
      {
        "title": "Path Sum II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/path-sum-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/path-sum-ii/"
      },
      {
        "title": "Flatten Binary Tree to Linked List",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
        "leetcodeUrl": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/"
      },
      {
        "title": "Populating Next Right Pointers in Each Node",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
        "leetcodeUrl": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/"
      },
      {
        "title": "Populating Next Right Pointers in Each Node II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/"
      },
      {
        "title": "Binary Tree Maximum Path Sum",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-maximum-path-sum/"
      },
      {
        "title": "Sum Root to Leaf Numbers",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
        "leetcodeUrl": "https://leetcode.com/problems/sum-root-to-leaf-numbers/"
      },
      {
        "title": "Surrounded Regions",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/surrounded-regions/",
        "leetcodeUrl": "https://leetcode.com/problems/surrounded-regions/"
      },
      {
        "title": "Clone Graph",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/clone-graph/",
        "leetcodeUrl": "https://leetcode.com/problems/clone-graph/"
      },
      {
        "title": "Binary Tree Preorder Traversal",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/binary-tree-preorder-traversal/",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-preorder-traversal/"
      },
      {
        "title": "Binary Tree Postorder Traversal",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/binary-tree-postorder-traversal/",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-postorder-traversal/"
      },
      {
        "title": "Binary Tree Upside Down",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/binary-tree-upside-down/",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-upside-down/"
      },
      {
        "title": "Binary Tree Right Side View",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/binary-tree-right-side-view/",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-right-side-view/"
      },
      {
        "title": "Number of Islands",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/number-of-islands/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-islands/"
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
      }
    ]
  },
  {
    "name": "Breadth-First Search (BFS)",
    "icon": "🌊",
    "color": "#0ea5e9",
    "order": 9,
    "problems": [
      {
        "title": "Level order traversal",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/level-order-traversal/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/level-order-tree-traversal/"
      },
      {
        "title": "Left View of a tree",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/left-view-of-binary-tree/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/print-left-view-binary-tree/"
      },
      {
        "title": "Right View of Tree",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/right-view-of-binary-tree/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/print-right-view-binary-tree-2/"
      },
      {
        "title": "Top View of a tree",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/print-nodes-top-view-binary-tree/"
      },
      {
        "title": "Bottom View of a tree",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/bottom-view-binary-tree/"
      },
      {
        "title": "Diagonal Traversal of a Binary tree",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/diagonal-traversal-of-binary-tree/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/diagonal-traversal-of-binary-tree/"
      },
      {
        "title": "Boundary traversal of a Binary tree",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/boundary-traversal-of-binary-tree/"
      },
      {
        "title": "Implement BFS algorithm",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/breadth-first-search-or-bfs-for-a-graph/"
      },
      {
        "title": "Word Ladder",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/word-ladder/0?category%5B%5D=BFS&%3Bpage=1&%3Bquery=category%5B%5DBFSpage1",
        "leetcodeUrl": "https://leetcode.com/problems/word-ladder/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/word-ladder-length-of-shortest-chain-to-reach-a-target-word/"
      },
      {
        "title": "Check whether a graph is Bipartite or Not",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/bipartite-graph/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/bipartite-graph/"
      },
      {
        "title": "Water Jug problem using BFS",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/two-water-jug-problem3402/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/water-jug-problem-using-bfs/"
      },
      {
        "title": "Same Tree",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/same-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/same-tree/"
      },
      {
        "title": "Symmetric Tree",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/symmetric-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/symmetric-tree/"
      },
      {
        "title": "Binary Tree Level Order Traversal",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-level-order-traversal/"
      },
      {
        "title": "Binary Tree Zigzag Level Order Traversal",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"
      },
      {
        "title": "Maximum Depth of Binary Tree",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
      },
      {
        "title": "Binary Tree Level Order Traversal II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/"
      },
      {
        "title": "Minimum Depth of Binary Tree",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-depth-of-binary-tree/"
      },
      {
        "title": "Path Sum",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/path-sum/",
        "leetcodeUrl": "https://leetcode.com/problems/path-sum/"
      },
      {
        "title": "Populating Next Right Pointers in Each Node",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
        "leetcodeUrl": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/"
      },
      {
        "title": "Populating Next Right Pointers in Each Node II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/"
      },
      {
        "title": "Word Ladder II",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/word-ladder-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/word-ladder-ii/"
      },
      {
        "title": "Surrounded Regions",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/surrounded-regions/",
        "leetcodeUrl": "https://leetcode.com/problems/surrounded-regions/"
      },
      {
        "title": "Clone Graph",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/clone-graph/",
        "leetcodeUrl": "https://leetcode.com/problems/clone-graph/"
      },
      {
        "title": "Binary Tree Right Side View",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/binary-tree-right-side-view/",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-right-side-view/"
      },
      {
        "title": "Number of Islands",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/number-of-islands/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-islands/"
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
        "title": "Invert Binary Tree",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/invert-binary-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/invert-binary-tree/"
      },
      {
        "title": "Graph Valid Tree",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/graph-valid-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/graph-valid-tree/"
      },
      {
        "title": "Alien Dictionary",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/alien-dictionary/",
        "leetcodeUrl": "https://leetcode.com/problems/alien-dictionary/"
      },
      {
        "title": "Perfect Squares",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/perfect-squares/",
        "leetcodeUrl": "https://leetcode.com/problems/perfect-squares/"
      },
      {
        "title": "Walls and Gates",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/walls-and-gates/",
        "leetcodeUrl": "https://leetcode.com/problems/walls-and-gates/"
      },
      {
        "title": "Serialize and Deserialize Binary Tree",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"
      },
      {
        "title": "Remove Invalid Parentheses",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/remove-invalid-parentheses/",
        "leetcodeUrl": "https://leetcode.com/problems/remove-invalid-parentheses/"
      }
    ]
  },
  {
    "name": "Dynamic Programming (DP)",
    "icon": "🧠",
    "color": "#a855f7",
    "order": 10,
    "problems": [
      {
        "title": "Best time to buy and Sell stock",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/stock-buy-and-sell-1587115621/1",
        "leetcodeUrl": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/best-time-to-buy-and-sell-stock/"
      },
      {
        "title": "Find maximum product subarray",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/maximum-product-subarray3604/1",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-product-subarray/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximum-product-subarray-set-3/"
      },
      {
        "title": "Find Longest Recurring Subsequence in String",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/longest-repeating-subsequence2004/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/longest-repeating-subsequence/"
      },
      {
        "title": "Print all Subsequences of a string.",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/power-set4302/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/print-subsequences-string/"
      },
      {
        "title": "Word Wrap Problem [VERY IMP].",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/word-wrap1646/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/word-wrap-problem-dp-19/"
      },
      {
        "title": "EDIT Distance [Very Imp]",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/edit-distance3702/1",
        "leetcodeUrl": "https://leetcode.com/problems/edit-distance/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/edit-distance-dp-5/"
      },
      {
        "title": "Word break Problem[ Very Imp]",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/word-break1352/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/word-break-problem-dp-32/"
      },
      {
        "title": "Count All Palindromic Subsequence in a given String.",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/count-palindromic-subsequences/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/count-palindromic-subsequence-given-string/"
      },
      {
        "title": "Find the longest common subsequence between two strings.",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/longest-common-subsequence-dp-4/"
      },
      {
        "title": "Find the inversion count",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/inversion-count-in-array-using-merge-sort/"
      },
      {
        "title": "Maximize array sum after K negations",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/maximize-sum-after-k-negations1149/1",
        "leetcodeUrl": "https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximize-array-sum-after-k-negations-using-sorting/"
      },
      {
        "title": "Maximize the sum of arr[i]*i",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/maximize-arrii-of-an-array0026/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximize-sum-arrii/"
      },
      {
        "title": "Word Break Problem using Backtracking",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/word-break-part-23249/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/word-break-problem-using-backtracking/"
      },
      {
        "title": "Coin Change Problem",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/coin-change2448/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/coin-change-dp-7/"
      },
      {
        "title": "Knapsack Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/0-1-knapsack-problem-dp-10/"
      },
      {
        "title": "Binomial Coefficient Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/ncr1019/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/binomial-coefficient-dp-9/"
      },
      {
        "title": "Program for nth Catalan Number",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/nth-catalan-number0817/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/program-nth-catalan-number/"
      },
      {
        "title": "Matrix Chain Multiplication",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/matrix-chain-multiplication-dp-8/"
      },
      {
        "title": "Edit Distance",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/edit-distance3702/1",
        "leetcodeUrl": "https://leetcode.com/problems/edit-distance/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/edit-distance-dp-5/"
      },
      {
        "title": "Friends Pairing Problem",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/friends-pairing-problem5425/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/friends-pairing-problem/"
      },
      {
        "title": "Assembly Line Scheduling Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/assembly-line-scheduling/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/assembly-line-scheduling-dp-34/"
      },
      {
        "title": "Painting the Fence problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/painting-the-fence3727/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/painting-fence-algorithm/"
      },
      {
        "title": "Maximize The Cut Segments",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/cutted-segments1642/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximize-the-number-of-segments-of-length-p-q-and-r/"
      },
      {
        "title": "Longest Common Subsequence",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1",
        "leetcodeUrl": "https://leetcode.com/problems/longest-common-subsequence/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/longest-common-subsequence-dp-4/"
      },
      {
        "title": "Longest Repeated Subsequence",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/longest-repeating-subsequence2004/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/longest-repeated-subsequence/"
      },
      {
        "title": "Longest Increasing Subsequence",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/longest-increasing-subsequence-1587115620/1",
        "leetcodeUrl": "https://leetcode.com/problems/longest-increasing-subsequence/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/longest-increasing-subsequence-dp-3/"
      },
      {
        "title": "Space Optimized Solution of LCS",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/dsa/space-optimized-solution-lcs/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/space-optimized-solution-lcs/"
      },
      {
        "title": "LCS (Longest Common Subsequence) of three strings",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/lcs-of-three-strings0028/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/lcs-longest-common-subsequence-three-strings/"
      },
      {
        "title": "Maximum Sum Increasing Subsequence",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximum-sum-increasing-subsequence-dp-14/"
      },
      {
        "title": "Count all subsequences having product less than K",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/count-the-subarrays-having-product-less-than-k1708/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/count-subsequences-product-less-k/"
      },
      {
        "title": "Longest subsequence such that difference between adjacent is one",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/longest-subsequence-such-that-difference-between-adjacents-is-one4724/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/longest-subsequence-such-that-difference-between-adjacents-is-one/"
      },
      {
        "title": "Maximum subsequence sum such that no three are consecutive",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/maximum-subsequence-sum-such-that-no-three-are-consecutive/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximum-subsequence-sum-such-that-no-three-are-consecutive/"
      },
      {
        "title": "Egg Dropping Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/egg-dropping-puzzle-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/egg-dropping-puzzle-dp-11/"
      },
      {
        "title": "Minimum number of jumps to reach end",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-number-of-jumps-to-reach-end-of-a-given-array/"
      },
      {
        "title": "Count number of ways to reach a given score in a game",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/reach-a-given-score-1587115621/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/count-number-ways-reach-given-score-game/"
      },
      {
        "title": "LargestSum Contiguous Subarray [V>V>V>V IMP ]",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/largest-sum-contiguous-subarray/"
      },
      {
        "title": "Smallest sum contiguous subarray",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/smallest-sum-contiguous-subarray/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/smallest-sum-contiguous-subarray/"
      },
      {
        "title": "Unbounded Knapsack (Repetition of items allowed)",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/unbounded-knapsack-repetition-items-allowed/"
      },
      {
        "title": "Word Break Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/word-break1352/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/word-break-problem-dp-32/"
      },
      {
        "title": "Largest Independent Set Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/largest-independent-set-problem/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/largest-independent-set-problem-using-dynamic-programming/"
      },
      {
        "title": "Partition problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/subset-sum-problem2014/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/partition-problem-dp-18/"
      },
      {
        "title": "Longest Palindromic Subsequence",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/longest-palindromic-subsequence-1612327878/1",
        "leetcodeUrl": "https://leetcode.com/problems/longest-palindromic-subsequence/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/longest-palindromic-subsequence-dp-12/"
      },
      {
        "title": "Count All Palindromic Subsequence in a given String",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/count-palindromic-subsequences/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/count-palindromic-subsequence-given-string/"
      },
      {
        "title": "Longest alternating subsequence",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/longest-alternating-subsequence5951/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/longest-alternating-subsequence/"
      },
      {
        "title": "Coin game winner where every player has three choices",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/coin-game-winner-every-player-three-choices/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/coin-game-winner-every-player-three-choices/"
      },
      {
        "title": "Optimal Strategy for a Game",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/optimal-strategy-for-a-game-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/optimal-strategy-for-a-game-dp-31/"
      },
      {
        "title": "Word Wrap Problem",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/word-wrap1646/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/word-wrap-problem-dp-19/"
      },
      {
        "title": "Mobile Numeric Keypad Problem [ IMP ]",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/mobile-numeric-keypad5456/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/mobile-numeric-keypad-problem/"
      },
      {
        "title": "Boolean Parenthesization Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/boolean-parenthesization5610/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/boolean-parenthesization-problem-dp-37/"
      },
      {
        "title": "Largest rectangular sub-matrix whose sum is 0",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/largest-rectangular-sub-matrix-whose-sum-is-0/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/largest-rectangular-sub-matrix-whose-sum-0/"
      },
      {
        "title": "Largest area rectangular sub-matrix with equal number of 1’s and 0’s [ IMP ]",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/largest-area-rectangular-sub-matrix-equal-number-1s-0s/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/largest-area-rectangular-sub-matrix-equal-number-1s-0s/"
      },
      {
        "title": "Find if a string is interleaved of two other strings",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/interleaved-strings/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-if-a-string-is-interleaved-of-two-other-strings-dp-33/"
      },
      {
        "title": "Travelling Salesman Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/travelling-salesman-problem2732/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/travelling-salesman-problem-using-dynamic-programming/"
      },
      {
        "title": "Longest path in a Directed Acyclic Graph",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/find-longest-path-directed-acyclic-graph/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-longest-path-directed-acyclic-graph/"
      },
      {
        "title": "Word Break Problem | (Trie solution)",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/word-break-trie--141631/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/word-break-problem-trie-solution/"
      }
    ]
  },
  {
    "name": "Greedy Algorithms",
    "icon": "🤑",
    "color": "#f97316",
    "order": 11,
    "problems": [
      {
        "title": "Maximum profit by buying and selling a share at most twice",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/maximum-profit4657/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximum-profit-by-buying-and-selling-a-share-at-most-twice/"
      },
      {
        "title": "Find row with maximum no. of 1's",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/row-with-max-1s0023/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-the-row-with-maximum-number-1s/"
      },
      {
        "title": "Split the Binary string into two substring with equal 0’s and 1’s",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/split-the-binary-string-into-substrings-with-equal-number-of-0s-and-1s/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/split-the-binary-string-into-substrings-with-equal-number-of-0s-and-1s/"
      },
      {
        "title": "Minimum number of bracket reversals needed to make an expression balanced.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/count-the-reversals0401/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-number-of-bracket-reversals-needed-to-make-an-expression-balanced/"
      },
      {
        "title": "Number of flips to make binary string alternate",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/min-number-of-flips3210/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/number-flips-make-binary-string-alternate/"
      },
      {
        "title": "Maximum sum such that no 2 elements are adjacent",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/stickler-theif-1587115621/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximum-sum-such-that-no-two-elements-are-adjacent/"
      },
      {
        "title": "Job Scheduling Algo",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/weighted-job-scheduling-log-n-time/"
      },
      {
        "title": "Activity Selection Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/activity-selection-problem-greedy-algo-1/"
      },
      {
        "title": "Job Sequencing Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/weighted-job-scheduling/"
      },
      {
        "title": "Huffman Coding",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/huffman-encoding3345/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/huffman-coding-greedy-algo-3/"
      },
      {
        "title": "Fractional Knapsack Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/fractional-knapsack-problem/"
      },
      {
        "title": "Maximum trains for which stoppage can be provided",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/maximum-trains-for-which-stoppage-can-be-provided/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximum-trains-stoppage-can-provided/"
      },
      {
        "title": "Buy Maximum Stocks if i stocks can be bought on i-th day",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/buy-maximum-stocks-if-i-stocks-can-be-bought-on-i-th-day/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/buy-maximum-stocks-stocks-can-bought-th-day/"
      },
      {
        "title": "Check if it is possible to survive on Island",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/check-if-it-is-possible-to-survive-on-island4922/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/survival/"
      },
      {
        "title": "Find maximum meetings in one room",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-maximum-meetings-in-one-room/"
      },
      {
        "title": "Maximum product subset of an array",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/maximum-product-subset-of-an-array/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximum-product-subset-array/"
      },
      {
        "title": "Maximum sum of absolute difference of an array",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/maximum-product-subset-of-an-array/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-sum-absolute-difference-pairs-two-arrays/#:~:text=It%20consists%20of%20two%20steps,result%20to%20the%20sum%20S."
      },
      {
        "title": "Program for Shortest Job First (or SJF) CPU Scheduling",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/calculate-the-average-waiting-time-and-turnaround-time-using-shortest-job-first/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/program-for-shortest-job-first-or-sjf-cpu-scheduling-set-1-non-preemptive/"
      },
      {
        "title": "Program for Least Recently Used (LRU) Page Replacement algorithm",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/page-faults-in-lru5603/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/program-for-least-recently-used-lru-page-replacement-algorithm/"
      },
      {
        "title": "DEFKIN -Defense of a Kingdom",
        "difficulty": "medium",
        "url": ""
      },
      {
        "title": "DIEHARD -DIE HARD",
        "difficulty": "hard",
        "url": ""
      },
      {
        "title": "GERGOVIA -Wine trading in Gergovia",
        "difficulty": "medium",
        "url": ""
      },
      {
        "title": "Picking Up Chicks",
        "difficulty": "medium",
        "url": ""
      },
      {
        "title": "CHOCOLA –Chocolate",
        "difficulty": "medium",
        "url": ""
      },
      {
        "title": "ARRANGE -Arranging Amplifiers",
        "difficulty": "medium",
        "url": ""
      },
      {
        "title": "K Centers Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/k-centers-problem/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/greedy-approximate-algorithm-for-k-centers-problem/"
      },
      {
        "title": "Find smallest number with given number of digits and sum of digits",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/smallest-number5829/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-smallest-number-with-given-number-of-digits-and-digit-sum/"
      },
      {
        "title": "Rearrange characters in a string such that no two adjacent are same",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/rearrange-characters4649/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/rearrange-characters-string-no-two-adjacent/"
      },
      {
        "title": "Find maximum sum possible equal sum of three stacks",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/find-maximum-equal-sum-of-three-stacks/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-maximum-sum-possible-equal-sum-three-stacks/"
      },
      {
        "title": "Find Maximum number possible by doing at-most K swaps",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/largest-number-in-k-swaps-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-maximum-number-possible-by-doing-at-most-k-swaps/"
      },
      {
        "title": "Maximum Length Chain of Pairs",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/max-length-chain/1",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-length-of-pair-chain/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximum-length-chain-of-pairs-dp-20/"
      },
      {
        "title": "Maximum size square sub-matrix with all 1s",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/largest-square-formed-in-a-matrix0806/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximum-size-sub-matrix-with-all-1s-in-a-binary-matrix/"
      },
      {
        "title": "Maximum sum of pairs with specific difference",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/pairs-with-specific-difference1533/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximum-sum-pairs-specific-difference/"
      },
      {
        "title": "Maximum difference of zeros and ones in binary string",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/maximum-difference-of-zeros-and-ones-in-binary-string4111/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximum-difference-zeros-ones-binary-string/"
      },
      {
        "title": "Weighted Job Scheduling",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/weighted-job-scheduling/"
      },
      {
        "title": "Maximum profit by buying and selling a share at most twice [ IMP ]",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/maximum-profit4657/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximum-profit-by-buying-and-selling-a-share-at-most-twice/"
      },
      {
        "title": "Maximum sum rectangle in a 2D matrix",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/maximum-sum-rectangle2948/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximum-sum-rectangle-in-a-2d-matrix-dp-27/"
      },
      {
        "title": "Maximum profit by buying and selling a share at most k times",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/maximum-profit4657/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximum-profit-by-buying-and-selling-a-share-at-most-k-times/"
      },
      {
        "title": "Maximum Length of Pair Chain",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/max-length-chain/1",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-length-of-pair-chain/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximum-length-chain-of-pairs-dp-20/"
      },
      {
        "title": "Maximum Sum of nodes in Binary tree such that no two are adjacent",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/maximum-sum-of-non-adjacent-nodes/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximum-sum-nodes-binary-tree-no-two-adjacent/"
      },
      {
        "title": "Maximum of all subarrays of size k.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/"
      }
    ]
  },
  {
    "name": "Topological Sort",
    "icon": "🕸️",
    "color": "#14b8a6",
    "order": 12,
    "problems": [
      {
        "title": "Implement Topological Sort",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/topological-sort/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/topological-sorting/"
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
        "title": "Alien Dictionary",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/alien-dictionary/",
        "leetcodeUrl": "https://leetcode.com/problems/alien-dictionary/"
      },
      {
        "title": "Minimum Height Trees",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/minimum-height-trees/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-height-trees/"
      },
      {
        "title": "Longest Increasing Path in a Matrix",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
        "leetcodeUrl": "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/"
      },
      {
        "title": "Sequence Reconstruction",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/sequence-reconstruction/",
        "leetcodeUrl": "https://leetcode.com/problems/sequence-reconstruction/"
      },
      {
        "title": "Design Excel Sum Formula",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/design-excel-sum-formula/",
        "leetcodeUrl": "https://leetcode.com/problems/design-excel-sum-formula/"
      },
      {
        "title": "Find Eventual Safe States",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/find-eventual-safe-states/",
        "leetcodeUrl": "https://leetcode.com/problems/find-eventual-safe-states/"
      },
      {
        "title": "Loud and Rich",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/loud-and-rich/",
        "leetcodeUrl": "https://leetcode.com/problems/loud-and-rich/"
      },
      {
        "title": "Cat and Mouse",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/cat-and-mouse/",
        "leetcodeUrl": "https://leetcode.com/problems/cat-and-mouse/"
      },
      {
        "title": "All Paths from Source Lead to Destination",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/all-paths-from-source-lead-to-destination/",
        "leetcodeUrl": "https://leetcode.com/problems/all-paths-from-source-lead-to-destination/"
      },
      {
        "title": "Parallel Courses",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/parallel-courses/",
        "leetcodeUrl": "https://leetcode.com/problems/parallel-courses/"
      },
      {
        "title": "Sort Items by Groups Respecting Dependencies",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/",
        "leetcodeUrl": "https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/"
      },
      {
        "title": "Tree Diameter",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/tree-diameter/",
        "leetcodeUrl": "https://leetcode.com/problems/tree-diameter/"
      },
      {
        "title": "Course Schedule IV",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/course-schedule-iv/",
        "leetcodeUrl": "https://leetcode.com/problems/course-schedule-iv/"
      },
      {
        "title": "Strange Printer II",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/strange-printer-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/strange-printer-ii/"
      },
      {
        "title": "Rank Transform of a Matrix",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/rank-transform-of-a-matrix/",
        "leetcodeUrl": "https://leetcode.com/problems/rank-transform-of-a-matrix/"
      },
      {
        "title": "Cat and Mouse II",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/cat-and-mouse-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/cat-and-mouse-ii/"
      },
      {
        "title": "Number of Restricted Paths From First to Last Node",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/"
      },
      {
        "title": "Largest Color Value in a Directed Graph",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/largest-color-value-in-a-directed-graph/",
        "leetcodeUrl": "https://leetcode.com/problems/largest-color-value-in-a-directed-graph/"
      },
      {
        "title": "Count Ways to Build Rooms in an Ant Colony",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/",
        "leetcodeUrl": "https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/"
      },
      {
        "title": "Number of Ways to Arrive at Destination",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/"
      },
      {
        "title": "Parallel Courses III",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/parallel-courses-iii/",
        "leetcodeUrl": "https://leetcode.com/problems/parallel-courses-iii/"
      },
      {
        "title": "Find All Possible Recipes from Given Supplies",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/",
        "leetcodeUrl": "https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/"
      },
      {
        "title": "Maximum Employees to Be Invited to a Meeting",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/"
      }
    ]
  },
  {
    "name": "Union Find / Disjoint Set",
    "icon": "🔗",
    "color": "#6366f1",
    "order": 13,
    "problems": [
      {
        "title": "Implement Prim’s Algorithm",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/prims-minimum-spanning-tree-mst-greedy-algo-5/"
      },
      {
        "title": "Longest Consecutive Sequence",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/longest-consecutive-sequence/",
        "leetcodeUrl": "https://leetcode.com/problems/longest-consecutive-sequence/"
      },
      {
        "title": "Surrounded Regions",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/surrounded-regions/",
        "leetcodeUrl": "https://leetcode.com/problems/surrounded-regions/"
      },
      {
        "title": "Number of Islands",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/number-of-islands/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-islands/"
      },
      {
        "title": "Graph Valid Tree",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/graph-valid-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/graph-valid-tree/"
      },
      {
        "title": "Number of Islands II",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/number-of-islands-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-islands-ii/"
      },
      {
        "title": "Number of Connected Components in an Undirected Graph",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/"
      },
      {
        "title": "Data Stream as Disjoint Intervals",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/data-stream-as-disjoint-intervals/",
        "leetcodeUrl": "https://leetcode.com/problems/data-stream-as-disjoint-intervals/"
      },
      {
        "title": "Evaluate Division",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/evaluate-division/",
        "leetcodeUrl": "https://leetcode.com/problems/evaluate-division/"
      },
      {
        "title": "Number of Provinces",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/number-of-provinces/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-provinces/"
      },
      {
        "title": "Redundant Connection",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/redundant-connection/",
        "leetcodeUrl": "https://leetcode.com/problems/redundant-connection/"
      },
      {
        "title": "Redundant Connection II",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/redundant-connection-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/redundant-connection-ii/"
      },
      {
        "title": "Number of Distinct Islands",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/number-of-distinct-islands/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-distinct-islands/"
      },
      {
        "title": "Max Area of Island",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/max-area-of-island/",
        "leetcodeUrl": "https://leetcode.com/problems/max-area-of-island/"
      },
      {
        "title": "Number of Distinct Islands II",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/number-of-distinct-islands-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-distinct-islands-ii/"
      },
      {
        "title": "Accounts Merge",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/accounts-merge/",
        "leetcodeUrl": "https://leetcode.com/problems/accounts-merge/"
      },
      {
        "title": "Sentence Similarity II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/sentence-similarity-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/sentence-similarity-ii/"
      },
      {
        "title": "Couples Holding Hands",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/couples-holding-hands/",
        "leetcodeUrl": "https://leetcode.com/problems/couples-holding-hands/"
      },
      {
        "title": "Swim in Rising Water",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/swim-in-rising-water/",
        "leetcodeUrl": "https://leetcode.com/problems/swim-in-rising-water/"
      },
      {
        "title": "Is Graph Bipartite?",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/is-graph-bipartite/",
        "leetcodeUrl": "https://leetcode.com/problems/is-graph-bipartite/"
      },
      {
        "title": "Bricks Falling When Hit",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/bricks-falling-when-hit/",
        "leetcodeUrl": "https://leetcode.com/problems/bricks-falling-when-hit/"
      },
      {
        "title": "Making A Large Island",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/making-a-large-island/",
        "leetcodeUrl": "https://leetcode.com/problems/making-a-large-island/"
      },
      {
        "title": "Similar String Groups",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/similar-string-groups/",
        "leetcodeUrl": "https://leetcode.com/problems/similar-string-groups/"
      },
      {
        "title": "Possible Bipartition",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/possible-bipartition/",
        "leetcodeUrl": "https://leetcode.com/problems/possible-bipartition/"
      },
      {
        "title": "Minimize Malware Spread",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/minimize-malware-spread/",
        "leetcodeUrl": "https://leetcode.com/problems/minimize-malware-spread/"
      },
      {
        "title": "Minimize Malware Spread II",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/minimize-malware-spread-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/minimize-malware-spread-ii/"
      }
    ]
  },
  {
    "name": "Heap / Priority Queue",
    "icon": "🏔️",
    "color": "#fb923c",
    "order": 14,
    "problems": [
      {
        "title": "Kth smallest element in a row-column wise sorted matrix",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/kth-element-in-matrix/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/kth-smallest-element-in-a-row-wise-and-column-wise-sorted-2d-array/"
      },
      {
        "title": "Kth smallest number again",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/find-k-th-smallest-element-in-given-n-ranges/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-k-th-smallest-element-in-given-n-ranges/"
      },
      {
        "title": "Merge K sorted Linked list",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/merge-k-sorted-linked-lists-set-2-using-min-heap/"
      },
      {
        "title": "Kth Ancestor of node in a Binary tree",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/kth-ancestor-in-a-tree/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/kth-ancestor-node-binary-tree-set-2/"
      },
      {
        "title": "Find Kth largest element in a BST",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/kth-largest-element-in-bst/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/kth-largest-element-in-bst-when-modification-to-bst-is-not-allowed/"
      },
      {
        "title": "Find Kth smallest element in a BST",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/find-k-th-smallest-element-in-bst/1",
        "leetcodeUrl": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-k-th-smallest-element-in-bst-order-statistics-in-bst/"
      },
      {
        "title": "Cheapest Flights Within K Stops",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/cheapest-flights-within-k-stops/description/",
        "leetcodeUrl": "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/shortest-path-exactly-k-edges-directed-weighted-graph/"
      },
      {
        "title": "Sort an Array using heap. (HeapSort)",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/heap-sort/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/heap-sort/"
      },
      {
        "title": "“K” largest element in an array",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/k-largest-elements4206/1",
        "leetcodeUrl": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/k-largestor-smallest-elements-in-an-array/"
      },
      {
        "title": "Kth smallest and largest element in an unsorted array",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/kth-smallest-largest-element-in-unsorted-array/"
      },
      {
        "title": "Merge “K” sorted arrays. [ IMP ]",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/merge-k-sorted-arrays/1",
        "leetcodeUrl": "https://leetcode.com/problems/merge-sorted-array/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/merge-k-sorted-arrays/"
      },
      {
        "title": "Merge 2 Binary Max Heaps",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/merge-two-binary-max-heap0144/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/merge-two-binary-max-heaps/"
      },
      {
        "title": "Kth largest sum continuous subarrays",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/k-th-largest-sum-contiguous-subarray/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/k-th-largest-sum-contiguous-subarray/"
      },
      {
        "title": "Leetcode- reorganize strings",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/rearrange-characters-string-no-two-adjacent/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/rearrange-characters-string-no-two-adjacent/"
      },
      {
        "title": "Merge “K” Sorted Linked Lists [V.IMP]",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/merge-k-sorted-linked-lists/"
      },
      {
        "title": "Smallest range in “K” Lists",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/find-smallest-range-containing-elements-from-k-lists/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-smallest-range-containing-elements-from-k-lists/"
      },
      {
        "title": "Check if a Binary Tree is Heap",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/is-binary-tree-heap/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/check-if-a-given-binary-tree-is-heap/"
      },
      {
        "title": "Rearrange characters in a string such that no two adjacent are same.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/rearrange-characters4649/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/rearrange-characters-string-no-two-adjacent/"
      }
    ]
  },
  {
    "name": "Monotonic Stack / Queue",
    "icon": "📉",
    "color": "#ef4444",
    "order": 15,
    "problems": [
      {
        "title": "Maximum size rectangle",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/max-rectangle/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximum-size-rectangle-binary-sub-matrix-1s/"
      },
      {
        "title": "Find next greater number with same set of digits. [Very Very IMP]",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/next-permutation5226/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-next-greater-number-set-digits/"
      },
      {
        "title": "Balanced Parenthesis problem.[Imp]",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/parenthesis-checker2744/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/check-for-balanced-parentheses-in-an-expression/"
      },
      {
        "title": "Implement Stack from Scratch",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/implement-stack-using-array/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/introduction-to-stack-data-structure-and-algorithm-tutorials/"
      },
      {
        "title": "Implement Queue from Scratch",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/implement-queue-using-array/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/introduction-and-array-implementation-of-queue/"
      },
      {
        "title": "Implement 2 stack in an array",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/implement-two-stacks-in-an-array/"
      },
      {
        "title": "Check the expression has valid or Balanced parenthesis or not.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/parenthesis-checker2744/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/check-for-balanced-parentheses-in-an-expression/"
      },
      {
        "title": "Find the next Greater element",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/next-greater-element/"
      },
      {
        "title": "Sort a Stack using recursion",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/sort-a-stack/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/sort-a-stack-using-recursion/"
      },
      {
        "title": "Largest rectangular Area in Histogram",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/largest-rectangular-area-in-a-histogram-using-stack/"
      },
      {
        "title": "Implement Stack using Queue",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/stack-using-two-queues/1",
        "leetcodeUrl": "https://leetcode.com/problems/implement-stack-using-queues/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/implement-stack-using-queue/"
      },
      {
        "title": "Implement Stack using Deque",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/dsa/implement-stack-queue-using-deque/",
        "leetcodeUrl": "https://leetcode.com/problems/implement-stack-using-queues/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/implement-stack-queue-using-deque/"
      },
      {
        "title": "Implement Queue using Stack",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/queue-using-two-stacks/1",
        "leetcodeUrl": "https://leetcode.com/problems/implement-queue-using-stacks/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/queue-using-stacks/"
      },
      {
        "title": "Interleave the first half of the queue with second half",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/interleave-the-first-half-of-the-queue-with-second-half/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/interleave-first-half-queue-second-half/"
      },
      {
        "title": "Next Smaller Element",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/next-smaller-element/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/next-smaller-element/"
      },
      {
        "title": "Trapping Rain Water",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/trapping-rain-water/",
        "leetcodeUrl": "https://leetcode.com/problems/trapping-rain-water/"
      },
      {
        "title": "Largest Rectangle in Histogram",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        "leetcodeUrl": "https://leetcode.com/problems/largest-rectangle-in-histogram/"
      },
      {
        "title": "Maximal Rectangle",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/maximal-rectangle/",
        "leetcodeUrl": "https://leetcode.com/problems/maximal-rectangle/"
      },
      {
        "title": "Verify Preorder Sequence in Binary Search Tree",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/"
      },
      {
        "title": "Remove Duplicate Letters",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/remove-duplicate-letters/",
        "leetcodeUrl": "https://leetcode.com/problems/remove-duplicate-letters/"
      },
      {
        "title": "Create Maximum Number",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/create-maximum-number/",
        "leetcodeUrl": "https://leetcode.com/problems/create-maximum-number/"
      },
      {
        "title": "Remove K Digits",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/remove-k-digits/",
        "leetcodeUrl": "https://leetcode.com/problems/remove-k-digits/"
      },
      {
        "title": "132 Pattern",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/132-pattern/",
        "leetcodeUrl": "https://leetcode.com/problems/132-pattern/"
      },
      {
        "title": "Next Greater Element I",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/next-greater-element-i/",
        "leetcodeUrl": "https://leetcode.com/problems/next-greater-element-i/"
      },
      {
        "title": "Next Greater Element II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/next-greater-element-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/next-greater-element-ii/"
      },
      {
        "title": "Shortest Unsorted Continuous Subarray",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/shortest-unsorted-continuous-subarray/",
        "leetcodeUrl": "https://leetcode.com/problems/shortest-unsorted-continuous-subarray/"
      },
      {
        "title": "Maximum Binary Tree",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/maximum-binary-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-binary-tree/"
      },
      {
        "title": "Daily Temperatures",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/daily-temperatures/",
        "leetcodeUrl": "https://leetcode.com/problems/daily-temperatures/"
      },
      {
        "title": "Max Chunks To Make Sorted II",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/max-chunks-to-make-sorted-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/max-chunks-to-make-sorted-ii/"
      },
      {
        "title": "Max Chunks To Make Sorted",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/max-chunks-to-make-sorted/",
        "leetcodeUrl": "https://leetcode.com/problems/max-chunks-to-make-sorted/"
      },
      {
        "title": "Car Fleet",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/car-fleet/",
        "leetcodeUrl": "https://leetcode.com/problems/car-fleet/"
      },
      {
        "title": "Online Stock Span",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/online-stock-span/",
        "leetcodeUrl": "https://leetcode.com/problems/online-stock-span/"
      },
      {
        "title": "Sum of Subarray Minimums",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/sum-of-subarray-minimums/",
        "leetcodeUrl": "https://leetcode.com/problems/sum-of-subarray-minimums/"
      },
      {
        "title": "Maximum Width Ramp",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/maximum-width-ramp/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-width-ramp/"
      },
      {
        "title": "Odd Even Jump",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/odd-even-jump/",
        "leetcodeUrl": "https://leetcode.com/problems/odd-even-jump/"
      },
      {
        "title": "Construct Binary Search Tree from Preorder Traversal",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/",
        "leetcodeUrl": "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/"
      },
      {
        "title": "Next Greater Node In Linked List",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/next-greater-node-in-linked-list/",
        "leetcodeUrl": "https://leetcode.com/problems/next-greater-node-in-linked-list/"
      },
      {
        "title": "Number of Valid Subarrays",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/number-of-valid-subarrays/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-valid-subarrays/"
      },
      {
        "title": "Smallest Subsequence of Distinct Characters",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/",
        "leetcodeUrl": "https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/"
      },
      {
        "title": "Longest Well-Performing Interval",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/longest-well-performing-interval/",
        "leetcodeUrl": "https://leetcode.com/problems/longest-well-performing-interval/"
      }
    ]
  },
  {
    "name": "Trie",
    "icon": "🌲",
    "color": "#22c55e",
    "order": 16,
    "problems": [
      {
        "title": "Longest Common Prefix",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/longest-common-prefix-in-an-array5129/1",
        "leetcodeUrl": "https://leetcode.com/problems/longest-common-prefix/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/longest-common-prefix-using-word-by-word-matching/"
      },
      {
        "title": "Partitioning and Sorting Arrays with Many Repeated Entries",
        "difficulty": "easy",
        "url": ""
      },
      {
        "title": "Construct a trie from scratch",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/trie-insert-and-search/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/trie-insert-and-search/"
      },
      {
        "title": "Find shortest unique prefix for every word in a given list",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/shortest-unique-prefix-for-every-word/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-all-shortest-unique-prefixes-to-represent-each-word-in-a-given-list/"
      },
      {
        "title": "Implement a Phone Directory",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/phone-directory4628/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/implement-a-phone-directory/#:~:text=Phone%20Directory%20can%20be%20efficiently,each%20prefix%20of%20'str'."
      },
      {
        "title": "Print unique rows in a given boolean matrix",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/unique-rows-in-boolean-matrix/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/print-unique-rows/"
      },
      {
        "title": "Word Break",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/word-break/",
        "leetcodeUrl": "https://leetcode.com/problems/word-break/"
      },
      {
        "title": "Word Break II",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/word-break-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/word-break-ii/"
      },
      {
        "title": "Implement Trie (Prefix Tree)",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/implement-trie-prefix-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/implement-trie-prefix-tree/"
      },
      {
        "title": "Design Add and Search Words Data Structure",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
        "leetcodeUrl": "https://leetcode.com/problems/design-add-and-search-words-data-structure/"
      },
      {
        "title": "Word Search II",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/word-search-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/word-search-ii/"
      },
      {
        "title": "Palindrome Pairs",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/palindrome-pairs/",
        "leetcodeUrl": "https://leetcode.com/problems/palindrome-pairs/"
      },
      {
        "title": "Lexicographical Numbers",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/lexicographical-numbers/",
        "leetcodeUrl": "https://leetcode.com/problems/lexicographical-numbers/"
      },
      {
        "title": "Maximum XOR of Two Numbers in an Array",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/"
      },
      {
        "title": "Word Squares",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/word-squares/",
        "leetcodeUrl": "https://leetcode.com/problems/word-squares/"
      },
      {
        "title": "K-th Smallest in Lexicographical Order",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/",
        "leetcodeUrl": "https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/"
      },
      {
        "title": "Concatenated Words",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/concatenated-words/",
        "leetcodeUrl": "https://leetcode.com/problems/concatenated-words/"
      },
      {
        "title": "Word Abbreviation",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/word-abbreviation/",
        "leetcodeUrl": "https://leetcode.com/problems/word-abbreviation/"
      },
      {
        "title": "Design In-Memory File System",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/design-in-memory-file-system/",
        "leetcodeUrl": "https://leetcode.com/problems/design-in-memory-file-system/"
      },
      {
        "title": "Add Bold Tag in String",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/add-bold-tag-in-string/",
        "leetcodeUrl": "https://leetcode.com/problems/add-bold-tag-in-string/"
      },
      {
        "title": "Design Search Autocomplete System",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/design-search-autocomplete-system/",
        "leetcodeUrl": "https://leetcode.com/problems/design-search-autocomplete-system/"
      },
      {
        "title": "Replace Words",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/replace-words/",
        "leetcodeUrl": "https://leetcode.com/problems/replace-words/"
      },
      {
        "title": "Implement Magic Dictionary",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/implement-magic-dictionary/",
        "leetcodeUrl": "https://leetcode.com/problems/implement-magic-dictionary/"
      },
      {
        "title": "Map Sum Pairs",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/map-sum-pairs/",
        "leetcodeUrl": "https://leetcode.com/problems/map-sum-pairs/"
      },
      {
        "title": "Top K Frequent Words",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/top-k-frequent-words/",
        "leetcodeUrl": "https://leetcode.com/problems/top-k-frequent-words/"
      },
      {
        "title": "Longest Word in Dictionary",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/longest-word-in-dictionary/",
        "leetcodeUrl": "https://leetcode.com/problems/longest-word-in-dictionary/"
      },
      {
        "title": "Prefix and Suffix Search",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/prefix-and-suffix-search/",
        "leetcodeUrl": "https://leetcode.com/problems/prefix-and-suffix-search/"
      },
      {
        "title": "Bold Words in String",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/bold-words-in-string/",
        "leetcodeUrl": "https://leetcode.com/problems/bold-words-in-string/"
      },
      {
        "title": "Number of Matching Subsequences",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/number-of-matching-subsequences/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-matching-subsequences/"
      },
      {
        "title": "Short Encoding of Words",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/short-encoding-of-words/",
        "leetcodeUrl": "https://leetcode.com/problems/short-encoding-of-words/"
      }
    ]
  },
  {
    "name": "Prefix Sum",
    "icon": "➕",
    "color": "#d946ef",
    "order": 17,
    "problems": [
      {
        "title": "Product array Puzzle",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/product-array-puzzle4525/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/product-array-puzzle-set-2-o1-space/"
      },
      {
        "title": "Minimum Size Subarray Sum",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/minimum-size-subarray-sum/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-size-subarray-sum/"
      },
      {
        "title": "Product of Array Except Self",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/product-of-array-except-self/",
        "leetcodeUrl": "https://leetcode.com/problems/product-of-array-except-self/"
      },
      {
        "title": "Meeting Rooms II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/meeting-rooms-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/meeting-rooms-ii/"
      },
      {
        "title": "Range Sum Query - Immutable",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/range-sum-query-immutable/",
        "leetcodeUrl": "https://leetcode.com/problems/range-sum-query-immutable/"
      },
      {
        "title": "Range Sum Query 2D - Immutable",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/range-sum-query-2d-immutable/",
        "leetcodeUrl": "https://leetcode.com/problems/range-sum-query-2d-immutable/"
      },
      {
        "title": "Maximum Size Subarray Sum Equals k",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/"
      },
      {
        "title": "Max Sum of Rectangle No Larger Than K",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/",
        "leetcodeUrl": "https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/"
      },
      {
        "title": "Range Addition",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/range-addition/",
        "leetcodeUrl": "https://leetcode.com/problems/range-addition/"
      },
      {
        "title": "Split Array Largest Sum",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/split-array-largest-sum/",
        "leetcodeUrl": "https://leetcode.com/problems/split-array-largest-sum/"
      },
      {
        "title": "Random Point in Non-overlapping Rectangles",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/",
        "leetcodeUrl": "https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/"
      },
      {
        "title": "Continuous Subarray Sum",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/continuous-subarray-sum/",
        "leetcodeUrl": "https://leetcode.com/problems/continuous-subarray-sum/"
      },
      {
        "title": "Contiguous Array",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/contiguous-array/",
        "leetcodeUrl": "https://leetcode.com/problems/contiguous-array/"
      },
      {
        "title": "Random Pick with Weight",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/random-pick-with-weight/",
        "leetcodeUrl": "https://leetcode.com/problems/random-pick-with-weight/"
      },
      {
        "title": "Split Array with Equal Sum",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/split-array-with-equal-sum/",
        "leetcodeUrl": "https://leetcode.com/problems/split-array-with-equal-sum/"
      },
      {
        "title": "Subarray Sum Equals K",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/subarray-sum-equals-k/",
        "leetcodeUrl": "https://leetcode.com/problems/subarray-sum-equals-k/"
      },
      {
        "title": "Maximum Average Subarray II",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/maximum-average-subarray-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-average-subarray-ii/"
      },
      {
        "title": "Maximum Sum of 3 Non-Overlapping Subarrays",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/"
      },
      {
        "title": "Subarray Product Less Than K",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/subarray-product-less-than-k/",
        "leetcodeUrl": "https://leetcode.com/problems/subarray-product-less-than-k/"
      },
      {
        "title": "Find Pivot Index",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/find-pivot-index/",
        "leetcodeUrl": "https://leetcode.com/problems/find-pivot-index/"
      },
      {
        "title": "My Calendar II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/my-calendar-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/my-calendar-ii/"
      },
      {
        "title": "My Calendar III",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/my-calendar-iii/",
        "leetcodeUrl": "https://leetcode.com/problems/my-calendar-iii/"
      },
      {
        "title": "Smallest Rotation with Highest Score",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/smallest-rotation-with-highest-score/",
        "leetcodeUrl": "https://leetcode.com/problems/smallest-rotation-with-highest-score/"
      },
      {
        "title": "Largest Sum of Averages",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/largest-sum-of-averages/",
        "leetcodeUrl": "https://leetcode.com/problems/largest-sum-of-averages/"
      },
      {
        "title": "Shifting Letters",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/shifting-letters/",
        "leetcodeUrl": "https://leetcode.com/problems/shifting-letters/"
      },
      {
        "title": "Shortest Subarray with Sum at Least K",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/",
        "leetcodeUrl": "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/"
      }
    ]
  },
  {
    "name": "Bit Manipulation",
    "icon": "0️⃣",
    "color": "#64748b",
    "order": 18,
    "problems": [
      {
        "title": "Sort array according to count of set bits",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/sort-by-set-bit-count1153/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/sort-array-according-count-set-bits/"
      },
      {
        "title": "Missing Number in AP",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/arithmetic-number2815/1",
        "leetcodeUrl": "https://leetcode.com/problems/missing-number/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-missing-number-arithmetic-progression/"
      },
      {
        "title": "Count set bits in an integer",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/set-bits0143/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/count-set-bits-in-an-integer/"
      },
      {
        "title": "Find the two non-repeating elements in an array of repeating elements",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/finding-the-numbers0215/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-two-non-repeating-elements-in-an-array-of-repeating-elements/"
      },
      {
        "title": "Count number of bits to be flipped to convert A to B",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/bit-difference-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/count-number-of-bits-to-be-flipped-to-convert-a-to-b/"
      },
      {
        "title": "Count total set bits in all numbers from 1 to n",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/count-total-set-bits-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/count-total-set-bits-in-all-numbers-from-1-to-n/"
      },
      {
        "title": "Program to find whether a no is power of two",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/power-of-2-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/program-to-find-whether-a-given-number-is-power-of-2/"
      },
      {
        "title": "Find position of the only set bit",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/find-position-of-set-bit3706/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-position-of-the-only-set-bit/"
      },
      {
        "title": "Copy set bits in a range",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/set-all-the-bits-in-given-range-of-a-number4538/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/copy-set-bits-in-a-range/"
      },
      {
        "title": "Divide two integers without using multiplication, division and mod operator",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/division-without-using-multiplication-division-and-mod-operator/0",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/divide-two-integers-without-using-multiplication-division-mod-operator/"
      },
      {
        "title": "Calculate square of a number without using *, / and pow()",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/square-root/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/calculate-square-of-a-number-without-using-and-pow/#:~:text=Given%20an%20integer%20n%2C%20calculate,*%2C%20%2F%20and%20pow().&text=A%20Simple%20Solution%20is%20to%20repeatedly%20add%20n%20to%20result."
      },
      {
        "title": "Power Set",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/power-set4302/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/power-set/"
      },
      {
        "title": "Divide Two Integers",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/divide-two-integers/",
        "leetcodeUrl": "https://leetcode.com/problems/divide-two-integers/"
      },
      {
        "title": "Add Binary",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/add-binary/",
        "leetcodeUrl": "https://leetcode.com/problems/add-binary/"
      },
      {
        "title": "Subsets",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/subsets/",
        "leetcodeUrl": "https://leetcode.com/problems/subsets/"
      },
      {
        "title": "Gray Code",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/gray-code/",
        "leetcodeUrl": "https://leetcode.com/problems/gray-code/"
      },
      {
        "title": "Subsets II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/subsets-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/subsets-ii/"
      },
      {
        "title": "Single Number",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/single-number/",
        "leetcodeUrl": "https://leetcode.com/problems/single-number/"
      },
      {
        "title": "Single Number II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/single-number-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/single-number-ii/"
      },
      {
        "title": "Repeated DNA Sequences",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/repeated-dna-sequences/",
        "leetcodeUrl": "https://leetcode.com/problems/repeated-dna-sequences/"
      },
      {
        "title": "Reverse Bits",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/reverse-bits/",
        "leetcodeUrl": "https://leetcode.com/problems/reverse-bits/"
      },
      {
        "title": "Number of 1 Bits",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/number-of-1-bits/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-1-bits/"
      },
      {
        "title": "Bitwise AND of Numbers Range",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/bitwise-and-of-numbers-range/",
        "leetcodeUrl": "https://leetcode.com/problems/bitwise-and-of-numbers-range/"
      },
      {
        "title": "Count Complete Tree Nodes",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/count-complete-tree-nodes/",
        "leetcodeUrl": "https://leetcode.com/problems/count-complete-tree-nodes/"
      },
      {
        "title": "Power of Two",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/power-of-two/",
        "leetcodeUrl": "https://leetcode.com/problems/power-of-two/"
      },
      {
        "title": "Single Number III",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/single-number-iii/",
        "leetcodeUrl": "https://leetcode.com/problems/single-number-iii/"
      },
      {
        "title": "Palindrome Permutation",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/palindrome-permutation/",
        "leetcodeUrl": "https://leetcode.com/problems/palindrome-permutation/"
      },
      {
        "title": "Find the Duplicate Number",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/find-the-duplicate-number/",
        "leetcodeUrl": "https://leetcode.com/problems/find-the-duplicate-number/"
      },
      {
        "title": "Maximum Product of Word Lengths",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/maximum-product-of-word-lengths/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-product-of-word-lengths/"
      },
      {
        "title": "Generalized Abbreviation",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/generalized-abbreviation/",
        "leetcodeUrl": "https://leetcode.com/problems/generalized-abbreviation/"
      },
      {
        "title": "Counting Bits",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/counting-bits/",
        "leetcodeUrl": "https://leetcode.com/problems/counting-bits/"
      },
      {
        "title": "Power of Four",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/power-of-four/",
        "leetcodeUrl": "https://leetcode.com/problems/power-of-four/"
      },
      {
        "title": "Android Unlock Patterns",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/android-unlock-patterns/",
        "leetcodeUrl": "https://leetcode.com/problems/android-unlock-patterns/"
      },
      {
        "title": "Sum of Two Integers",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/sum-of-two-integers/",
        "leetcodeUrl": "https://leetcode.com/problems/sum-of-two-integers/"
      },
      {
        "title": "Find the Difference",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/find-the-difference/",
        "leetcodeUrl": "https://leetcode.com/problems/find-the-difference/"
      },
      {
        "title": "UTF-8 Validation",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/utf-8-validation/",
        "leetcodeUrl": "https://leetcode.com/problems/utf-8-validation/"
      }
    ]
  },
  {
    "name": "Graph Shortest Path (Dijkstra, Bellman-Ford)",
    "icon": "🗺️",
    "color": "#3b82f6",
    "order": 20,
    "problems": [
      {
        "title": "Dijkstra algo",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/dijkstras-shortest-path-algorithm-greedy-algo-7/"
      },
      {
        "title": "Implement Bellman Ford Algorithm",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/negative-weight-cycle3504/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/bellman-ford-algorithm-dp-23/"
      },
      {
        "title": "Implement Floyd warshall Algorithm",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/floyd-warshall-algorithm-dp-16/"
      },
      {
        "title": "Evaluate Division",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/evaluate-division/",
        "leetcodeUrl": "https://leetcode.com/problems/evaluate-division/"
      },
      {
        "title": "The Maze III",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/the-maze-iii/",
        "leetcodeUrl": "https://leetcode.com/problems/the-maze-iii/"
      },
      {
        "title": "The Maze II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/the-maze-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/the-maze-ii/"
      },
      {
        "title": "Network Delay Time",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/network-delay-time/",
        "leetcodeUrl": "https://leetcode.com/problems/network-delay-time/"
      },
      {
        "title": "Cheapest Flights Within K Stops",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
        "leetcodeUrl": "https://leetcode.com/problems/cheapest-flights-within-k-stops/"
      },
      {
        "title": "Reachable Nodes In Subdivided Graph",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/",
        "leetcodeUrl": "https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/"
      },
      {
        "title": "Find the City With the Smallest Number of Neighbors at a Threshold Distance",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/",
        "leetcodeUrl": "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/"
      },
      {
        "title": "Minimum Cost to Make at Least One Valid Path in a Grid",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/"
      },
      {
        "title": "Path with Maximum Probability",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/path-with-maximum-probability/",
        "leetcodeUrl": "https://leetcode.com/problems/path-with-maximum-probability/"
      },
      {
        "title": "Number of Restricted Paths From First to Last Node",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/"
      },
      {
        "title": "Minimum Path Cost in a Hidden Grid",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/minimum-path-cost-in-a-hidden-grid/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-path-cost-in-a-hidden-grid/"
      },
      {
        "title": "Number of Ways to Arrive at Destination",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/"
      },
      {
        "title": "Second Minimum Time to Reach Destination",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/second-minimum-time-to-reach-destination/",
        "leetcodeUrl": "https://leetcode.com/problems/second-minimum-time-to-reach-destination/"
      },
      {
        "title": "Minimum Cost to Reach City With Discounts",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/"
      },
      {
        "title": "Minimum Weighted Subgraph With the Required Paths",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/"
      },
      {
        "title": "Minimum Obstacle Removal to Reach Corner",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/"
      },
      {
        "title": "Jump Game VIII",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/jump-game-viii/",
        "leetcodeUrl": "https://leetcode.com/problems/jump-game-viii/"
      },
      {
        "title": "Minimum Cost to Buy Apples",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/minimum-cost-to-buy-apples/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-cost-to-buy-apples/"
      },
      {
        "title": "Minimum Time to Visit a Cell In a Grid",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/"
      },
      {
        "title": "Design Graph With Shortest Path Calculator",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/design-graph-with-shortest-path-calculator/",
        "leetcodeUrl": "https://leetcode.com/problems/design-graph-with-shortest-path-calculator/"
      },
      {
        "title": "Minimum Cost of a Path With Special Roads",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/"
      },
      {
        "title": "Modify Graph Edge Weights",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/modify-graph-edge-weights/",
        "leetcodeUrl": "https://leetcode.com/problems/modify-graph-edge-weights/"
      },
      {
        "title": "Find Shortest Path with K Hops",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/find-shortest-path-with-k-hops/",
        "leetcodeUrl": "https://leetcode.com/problems/find-shortest-path-with-k-hops/"
      },
      {
        "title": "Find the Closest Marked Node",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/find-the-closest-marked-node/",
        "leetcodeUrl": "https://leetcode.com/problems/find-the-closest-marked-node/"
      },
      {
        "title": "Number of Possible Sets of Closing Branches",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/"
      }
    ]
  },
  {
    "name": "Tree Traversals",
    "icon": "🌳",
    "color": "#84cc16",
    "order": 21,
    "problems": [
      {
        "title": "Minimize the maximum difference between heights [V.IMP]",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/minimize-the-heights3351/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimize-the-maximum-difference-between-the-heights/"
      },
      {
        "title": "Flatten a Linked List",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/flattening-a-linked-list/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/flattening-a-linked-list/"
      },
      {
        "title": "Count Balanced Binary Trees of Height h",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/bbt-counter4914/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/count-balanced-binary-trees-height-h/"
      },
      {
        "title": "Height of a tree",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/height-of-binary-tree/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-the-maximum-depth-or-height-of-a-tree/"
      },
      {
        "title": "Diameter of a tree",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/diameter-of-binary-tree/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/diameter-of-a-binary-tree/"
      },
      {
        "title": "Mirror of a tree",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/mirror-tree/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/create-a-mirror-tree-from-the-given-binary-tree/"
      },
      {
        "title": "Inorder Traversal of a tree both using recursion and Iteration",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/tree-traversals-inorder-preorder-and-postorder/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/tree-traversals-inorder-preorder-and-postorder/"
      },
      {
        "title": "Preorder Traversal of a tree both using recursion and Iteration",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/iterative-preorder-traversal/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/iterative-preorder-traversal/"
      },
      {
        "title": "Postorder Traversal of a tree both using recursion and Iteration",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/tree-traversals-inorder-preorder-and-postorder/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/tree-traversals-inorder-preorder-and-postorder/"
      },
      {
        "title": "Zig-Zag traversal of a binary tree",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/zigzag-tree-traversal/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/zigzag-tree-traversal/"
      },
      {
        "title": "Check if a tree is balanced or not",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/check-for-balanced-tree/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/how-to-determine-if-a-binary-tree-is-balanced/"
      },
      {
        "title": "Construct Binary Tree from String with Bracket Representation",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/construct-binary-tree-from-string-with-bracket-representation/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/construct-binary-tree-string-bracket-representation/"
      },
      {
        "title": "Convert Binary tree into Doubly Linked List",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/binary-tree-to-dll/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/convert-binary-tree-to-doubly-linked-list-by-fixing-left-and-right-pointers/"
      },
      {
        "title": "Convert Binary tree into Sum tree",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/transform-to-sum-tree/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/convert-a-given-tree-to-sum-tree/"
      },
      {
        "title": "Construct Binary tree from Inorder and preorder traversal",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/construct-tree-1/1",
        "leetcodeUrl": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/construct-tree-from-given-inorder-and-preorder-traversal/"
      },
      {
        "title": "Check if Binary tree is Sum tree or not",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/sum-tree/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/check-if-a-given-binary-tree-is-sumtree/"
      },
      {
        "title": "Check if all leaf nodes are at same level or not",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/leaf-at-same-level/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/check-leaves-level/"
      },
      {
        "title": "Check if 2 trees are mirror or not",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/check-mirror-in-n-ary-tree1528/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/check-mirror-n-ary-tree/"
      },
      {
        "title": "Sum of Nodes on the Longest path from root to leaf node",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/sum-of-the-longest-bloodline-of-a-tree/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/sum-nodes-longest-path-root-leaf-node/"
      },
      {
        "title": "Check if given graph is tree or not. [ IMP ]",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/dsa/check-given-graph-tree/#:~:text=Since%20the%20graph%20is%20undirected,graph%20is%20connected%2C%20otherwise%20not.",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/check-given-graph-tree/#:~:text=Since%20the%20graph%20is%20undirected,graph%20is%20connected%2C%20otherwise%20not."
      },
      {
        "title": "Find Largest subtree sum in a tree",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/largest-subtree-sum-in-a-tree/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-largest-subtree-sum-tree/"
      },
      {
        "title": "Print all \"K\" Sum paths in a Binary tree",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/k-sum-paths/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/print-k-sum-paths-binary-tree/"
      },
      {
        "title": "Find LCA in a Binary tree",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/lowest-common-ancestor-binary-tree-set-1/"
      },
      {
        "title": "Find distance between 2 nodes in a Binary tree",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/min-distance-between-two-given-nodes-of-a-binary-tree/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-distance-between-two-nodes-of-a-binary-tree/"
      },
      {
        "title": "Tree Isomorphism Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/check-if-tree-is-isomorphic/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/tree-isomorphism-problem/"
      },
      {
        "title": "Find inorder successor and inorder predecessor in a BST",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/predecessor-and-successor/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/inorder-predecessor-successor-given-key-bst/"
      },
      {
        "title": "Populate Inorder successor of all nodes",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/populate-inorder-successor-for-all-nodes/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/populate-inorder-successor-for-all-nodes/"
      },
      {
        "title": "Find LCA of 2 nodes in a BST",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/lowest-common-ancestor-in-a-binary-search-tree/"
      },
      {
        "title": "Construct BST from preorder traversal",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/construct-bst-from-given-preorder-traversa/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/construct-bst-from-given-preorder-traversa/"
      },
      {
        "title": "Convert a normal BST into a Balanced BST",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/normal-bst-to-balanced-bst/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/convert-normal-bst-balanced-bst/"
      },
      {
        "title": "Check preorder is valid or not",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/preorder-to-postorder4423/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/check-if-a-given-array-can-represent-preorder-traversal-of-binary-search-tree/"
      },
      {
        "title": "Median in a stream of Integers",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/find-median-in-a-stream-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/median-of-stream-of-integers-running-integers/"
      },
      {
        "title": "Binary Tree Inorder Traversal",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-inorder-traversal/"
      },
      {
        "title": "Unique Binary Search Trees II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/unique-binary-search-trees-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/unique-binary-search-trees-ii/"
      },
      {
        "title": "Unique Binary Search Trees",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/unique-binary-search-trees/",
        "leetcodeUrl": "https://leetcode.com/problems/unique-binary-search-trees/"
      },
      {
        "title": "Validate Binary Search Tree",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/validate-binary-search-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/validate-binary-search-tree/"
      },
      {
        "title": "Recover Binary Search Tree",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/recover-binary-search-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/recover-binary-search-tree/"
      },
      {
        "title": "Same Tree",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/same-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/same-tree/"
      },
      {
        "title": "Symmetric Tree",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/symmetric-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/symmetric-tree/"
      },
      {
        "title": "Binary Tree Level Order Traversal",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-level-order-traversal/"
      },
      {
        "title": "Binary Tree Zigzag Level Order Traversal",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"
      },
      {
        "title": "Maximum Depth of Binary Tree",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
      },
      {
        "title": "Construct Binary Tree from Inorder and Postorder Traversal",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
        "leetcodeUrl": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/"
      },
      {
        "title": "Binary Tree Level Order Traversal II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/"
      },
      {
        "title": "Convert Sorted Array to Binary Search Tree",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/"
      },
      {
        "title": "Convert Sorted List to Binary Search Tree",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/"
      },
      {
        "title": "Balanced Binary Tree",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/balanced-binary-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/balanced-binary-tree/"
      },
      {
        "title": "Minimum Depth of Binary Tree",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-depth-of-binary-tree/"
      },
      {
        "title": "Path Sum",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/path-sum/",
        "leetcodeUrl": "https://leetcode.com/problems/path-sum/"
      },
      {
        "title": "Path Sum II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/path-sum-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/path-sum-ii/"
      },
      {
        "title": "Flatten Binary Tree to Linked List",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
        "leetcodeUrl": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/"
      },
      {
        "title": "Populating Next Right Pointers in Each Node",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
        "leetcodeUrl": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/"
      },
      {
        "title": "Populating Next Right Pointers in Each Node II",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
        "leetcodeUrl": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/"
      },
      {
        "title": "Binary Tree Maximum Path Sum",
        "difficulty": "hard",
        "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-maximum-path-sum/"
      },
      {
        "title": "Sum Root to Leaf Numbers",
        "difficulty": "medium",
        "url": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
        "leetcodeUrl": "https://leetcode.com/problems/sum-root-to-leaf-numbers/"
      },
      {
        "title": "Binary Tree Preorder Traversal",
        "difficulty": "easy",
        "url": "https://leetcode.com/problems/binary-tree-preorder-traversal/",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-preorder-traversal/"
      }
    ]
  },
  {
    "name": "Divide and Conquer",
    "icon": "⚔️",
    "color": "#f43f5e",
    "order": 22,
    "problems": [
      {
        "title": "Find the maximum and minimum element in an array",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-and-maximum-of-an-array/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximum-and-minimum-in-an-array/"
      },
      {
        "title": "Count Inversion",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/inversion-count-in-array-using-merge-sort/"
      },
      {
        "title": "Maximum and minimum of an array using minimum number of comparisons",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/middle-of-three2926/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/maximum-and-minimum-in-an-array/"
      },
      {
        "title": "Find min and max value in a BST",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/minimum-element-in-bst/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-the-minimum-element-in-a-binary-search-tree/"
      }
    ]
  },
  {
    "name": "Recursion",
    "icon": "🪆",
    "color": "#ec4899",
    "order": 23,
    "problems": [
      {
        "title": "Count and Say problem",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/decode-the-pattern1138/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/look-and-say-sequence/"
      }
    ]
  },
  {
    "name": "Hashing",
    "icon": "#️⃣",
    "color": "#f59e0b",
    "order": 24,
    "problems": [
      {
        "title": "Find longest consecutive subsequence",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/longest-consecutive-subsequence2449/1",
        "leetcodeUrl": "https://leetcode.com/problems/longest-consecutive-sequence/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/longest-consecutive-subsequence/"
      },
      {
        "title": "Write a Program to check whether a string is a valid shuffle of two strings or not",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/check-if-the-given-string-is-shuffled-substring-of-another-string/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/check-if-the-given-string-is-shuffled-substring-of-another-string/"
      },
      {
        "title": "Rabin Karp Algorithm",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/search-pattern-rabin-karp-algorithm--141631/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/rabin-karp-algorithm-for-pattern-searching/"
      },
      {
        "title": "Convert a Sentence into its equivalent mobile numeric keypad sequence.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/convert-a-sentence-into-its-equivalent-mobile-numeric-keypad-sequence0547/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/convert-sentence-equivalent-mobile-numeric-keypad-sequence/"
      },
      {
        "title": "Given a sequence of words, print all anagrams together",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/print-anagrams-together/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/given-a-sequence-of-words-print-all-anagrams-together-using-stl/"
      },
      {
        "title": "Recursively remove all adjacent duplicates",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/consecutive-elements2306/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/remove-consecutive-duplicates-string/"
      },
      {
        "title": "Check if two given strings are isomorphic to each other",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/isomorphic-strings-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/check-if-two-given-strings-are-isomorphic-to-each-other/"
      },
      {
        "title": "Find majority element",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/majority-element-1587115620/1",
        "leetcodeUrl": "https://leetcode.com/problems/majority-element/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/majority-element/"
      },
      {
        "title": "Remove Duplicates in a sorted Linked List.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/remove-duplicate-element-from-sorted-linked-list/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/remove-duplicates-from-a-sorted-linked-list/"
      },
      {
        "title": "Remove Duplicates in a Un-sorted Linked List.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/remove-duplicates-from-an-unsorted-linked-list/1",
        "leetcodeUrl": "https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/remove-duplicates-from-an-unsorted-linked-list/"
      },
      {
        "title": "LRU Cache Implementation",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/lru-cache/1",
        "articleUrl": "https://www.geeksforgeeks.org/system-design/lru-cache-implementation/"
      },
      {
        "title": "Check if all levels of two trees are anagrams or not.",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/check-if-all-levels-of-two-trees-are-anagrams-or-not/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/check-if-all-levels-of-two-trees-are-anagrams-or-not/"
      },
      {
        "title": "Queue based approach or first non-repeating character in a stream.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream1216/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/queue-based-approach-for-first-non-repeating-character-in-a-stream/"
      },
      {
        "title": "Check if a Binary Tree contains duplicate subtrees of size 2 or more [ IMP ]",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/duplicate-subtree-in-binary-tree/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/check-binary-tree-contains-duplicate-subtrees-size-2/"
      },
      {
        "title": "Find all Duplicate subtrees in a Binary tree [ IMP ]",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/duplicate-subtrees/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-duplicate-subtrees/"
      },
      {
        "title": "Given a sequence of words, print all anagrams together",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/print-anagrams-together/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/given-a-sequence-of-words-print-all-anagrams-together-set-2/"
      }
    ]
  },
  {
    "name": "Uncategorized",
    "icon": "📁",
    "color": "#71717a",
    "order": 26,
    "problems": [
      {
        "title": "Why strings are immutable in Java?",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/java/java-string-is-immutable-what-exactly-is-the-meaning/",
        "articleUrl": "https://www.geeksforgeeks.org/java/java-string-is-immutable-what-exactly-is-the-meaning/"
      },
      {
        "title": "Converting Roman Numerals to Decimal",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/roman-number-to-integer3201/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/roman-number-to-integer/"
      },
      {
        "title": "Find the first repeated word in string.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/find-first-repeated-character4108/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-first-repeated-word-string/"
      },
      {
        "title": "Program to generate all possible valid IP addresses from given string.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/generate-ip-addresses/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/program-generate-possible-valid-ip-addresses-given-string/"
      },
      {
        "title": "Rearrange characters in a string such that no two adjacent are same",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/rearrange-characters4649/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/rearrange-characters-string-no-two-adjacent/"
      },
      {
        "title": "String matching where one string contains wildcard characters",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/wildcard-string-matching1126/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/wildcard-character-matching/"
      },
      {
        "title": "Function to find Number of customers who could not get a computer",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/unoccupied-computers-1646661078/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/function-to-find-number-of-customers-who-could-not-get-a-computer/"
      },
      {
        "title": "Recursively print all sentences that can be formed from list of word lists",
        "difficulty": "easy",
        "url": "https://www.geeksforgeeks.org/problems/recursively-print-all-sentences-that-can-be-formed-from-list-of-word-lists/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/recursively-print-all-sentences-that-can-be-formed-from-list-of-word-lists/"
      },
      {
        "title": "Write a Program to Move the last element to Front in a Linked List.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/move-last-element-to-front-of-a-given-linked-list/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/move-last-element-to-front-of-a-given-linked-list/"
      },
      {
        "title": "Add “1” to a number represented as a Linked List.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/add-1-number-represented-linked-list/"
      },
      {
        "title": "Merge Sort For Linked lists.[Very Important]",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/sort-a-linked-list/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/merge-sort-for-linked-list/"
      },
      {
        "title": "Quicksort for Linked Lists.[Very Important]",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/quick-sort-on-linked-list/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/quicksort-on-singly-linked-list/"
      },
      {
        "title": "Sort a “k”sorted Doubly Linked list.[Very IMP]",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/sort-k-sorted-doubly-linked-list/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/sort-k-sorted-doubly-linked-list/"
      },
      {
        "title": "Sort a LL of 0's, 1's and 2's",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/sort-a-linked-list-of-0s-1s-or-2s/"
      },
      {
        "title": "Clone a linked list with next and random pointer",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/a-linked-list-with-next-and-arbit-pointer/"
      },
      {
        "title": "Program for n’th node from the end of a Linked List",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/nth-node-from-the-end-of-a-linked-list/"
      },
      {
        "title": "Printing all solutions in N-Queen",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/n-queen-problem0315/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/printing-solutions-n-queen-problem/"
      },
      {
        "title": "Remove Invalid Parentheses",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/remove-invalid-parentheses/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "leetcodeUrl": "https://leetcode.com/problems/remove-invalid-parentheses/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/remove-invalid-parentheses/"
      },
      {
        "title": "M Coloring Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/m-coloring-problem/"
      },
      {
        "title": "Print all palindromic partitions of a string",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/find-all-possible-palindromic-partitions-of-a-string/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/given-a-string-print-all-possible-palindromic-partition/"
      },
      {
        "title": "The Knight’s tour problem",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/dsa/the-knights-tour-problem/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/the-knights-tour-problem/"
      },
      {
        "title": "Tug of War",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/tug-of-war/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/tug-of-war/"
      },
      {
        "title": "Find if there is a path of more than k length from a source",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/path-of-greater-than-equal-to-k-length1034/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-if-there-is-a-path-of-more-than-k-length-from-a-source/"
      },
      {
        "title": "Print all possible paths from top left to bottom right of a mXn matrix",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/find-all-possible-paths-from-top-to-bottom/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/print-all-possible-paths-from-top-left-to-bottom-right-of-a-mxn-matrix/"
      },
      {
        "title": "Implement \"N\" stacks in an Array",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/efficiently-implement-k-stacks-single-array/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/efficiently-implement-k-stacks-single-array/"
      },
      {
        "title": "Arithmetic Expression evaluation",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/arithmetic-expression-evalution/#:~:text=The%20stack%20organization%20is%20very,i.e.%2C%20A%20%2B%20B).",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/arithmetic-expression-evalution/#:~:text=The%20stack%20organization%20is%20very,i.e.%2C%20A%20%2B%20B)."
      },
      {
        "title": "Evaluation of Postfix expression",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/evaluation-of-postfix-expression1735/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/evaluation-of-postfix-expression/"
      },
      {
        "title": "Implement a method to insert an element at its bottom without using any other data structure.",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/insert-an-element-at-the-bottom-of-a-stack/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/program-to-insert-an-element-at-the-bottom-of-a-stack/"
      },
      {
        "title": "Expression contains redundant bracket or not",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/expression-contains-redundant-bracket-or-not/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/expression-contains-redundant-bracket-not/"
      },
      {
        "title": "Implement \"n\" queue in an array",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/efficiently-implement-k-queues-single-array/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/efficiently-implement-k-queues-single-array/"
      },
      {
        "title": "Distance of nearest cell having 1 in a binary matrix",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/distance-nearest-cell-1-binary-matrix/"
      },
      {
        "title": "Create a Graph, print it",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/dsa/graph-and-its-representations/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/graph-and-its-representations/"
      },
      {
        "title": "Flood fill algo",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/flood-fill-algorithm1856/0?category%5B%5D=Matrix&%3Bpage=1&%3BsortBy=accuracy&%3Bquery=category%5B%5DMatrixpage1sortByaccuracy",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/flood-fill-algorithm-implement-fill-paint/"
      },
      {
        "title": "Clone a graph",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/clone-graph/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/clone-an-undirected-graph/"
      },
      {
        "title": "Making wired Connections",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/minimize-count-of-connections-required-to-be-rearranged-to-make-all-the-computers-connected/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/minimize-count-of-connections-required-to-be-rearranged-to-make-all-the-computers-connected/"
      },
      {
        "title": "Find whether it is possible to finish all tasks or not from given dependencies",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/"
      },
      {
        "title": "Find the no. of Islands",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/find-the-number-of-islands/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-the-number-of-islands-using-dfs/"
      },
      {
        "title": "Given a sorted Dictionary of an Alien Language, find order of characters",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/alien-dictionary/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/given-sorted-dictionary-find-precedence-characters/"
      },
      {
        "title": "Implement Kruksal’sAlgorithm",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/"
      },
      {
        "title": "Total no. of Spanning tree in a graph",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/total-number-spanning-trees-graph/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/total-number-spanning-trees-graph/"
      },
      {
        "title": "Graph Colouring Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/graph-coloring-applications/#:~:text=Graph%20coloring%20problem%20is%20to,are%20colored%20using%20same%20color.",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/graph-coloring-applications/#:~:text=Graph%20coloring%20problem%20is%20to,are%20colored%20using%20same%20color."
      },
      {
        "title": "Snake and Ladders Problem",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/snake-and-ladder-problem4816/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/snake-ladder-problem-2/"
      },
      {
        "title": "Find bridge in a graph",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/bridge-edge-in-graph/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/bridge-in-a-graph/"
      },
      {
        "title": "Journey to the Moon",
        "difficulty": "medium",
        "url": ""
      },
      {
        "title": "Oliver and the Game",
        "difficulty": "hard",
        "url": ""
      },
      {
        "title": "Find if there is a path of more thank length from a source",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/find-if-there-is-a-path-of-more-than-k-length-from-a-source/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/find-if-there-is-a-path-of-more-than-k-length-from-a-source/"
      },
      {
        "title": "M-Colouring Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/m-coloring-problem/"
      },
      {
        "title": "Vertex Cover Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/problems/vertex-cover/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/introduction-and-approximate-solution-for-vertex-cover-problem/"
      },
      {
        "title": "Chinese Postman or Route Inspection",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/chinese-postman-route-inspection-set-1-introduction/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/chinese-postman-route-inspection-set-1-introduction/"
      },
      {
        "title": "Number of Triangles in a Directed and Undirected Graph",
        "difficulty": "hard",
        "url": "https://www.geeksforgeeks.org/problems/number-of-triangles/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/number-of-triangles-in-directed-and-undirected-graphs/"
      },
      {
        "title": "Two Clique Problem",
        "difficulty": "medium",
        "url": "https://www.geeksforgeeks.org/dsa/two-clique-problem-check-graph-can-divided-two-cliques/",
        "articleUrl": "https://www.geeksforgeeks.org/dsa/two-clique-problem-check-graph-can-divided-two-cliques/"
      }
    ]
  }
];
