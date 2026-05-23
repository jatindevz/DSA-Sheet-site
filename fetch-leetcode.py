import requests
import json
import time

URL = "https://leetcode.com/graphql"

PATTERNS = {
    "Sliding Window": "sliding-window",
    "Fast & Slow Pointers": "two-pointers", # approximation
    "Merge Intervals": "intervals",
    "Cyclic Sort": "sorting",
    "Backtracking": "backtracking",
    "Depth-First Search (DFS)": "depth-first-search",
    "Breadth-First Search (BFS)": "breadth-first-search",
    "Topological Sort": "topological-sort",
    "Union Find / Disjoint Set": "union-find",
    "Monotonic Stack / Queue": "monotonic-stack",
    "Trie": "trie",
    "Prefix Sum": "prefix-sum",
    "Bit Manipulation": "bit-manipulation",
    "Graph Shortest Path (Dijkstra, Bellman-Ford)": "shortest-path",
    "Tree Traversals": "tree"
}

def get_problems_by_tag(tag, limit=25):
    query = """
    query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
      problemsetQuestionList: questionList(
        categorySlug: $categorySlug
        limit: $limit
        skip: $skip
        filters: $filters
      ) {
        total: totalNum
        questions: data {
          difficulty
          title
          titleSlug
        }
      }
    }
    """
    
    variables = {
        "categorySlug": "",
        "skip": 0,
        "limit": limit,
        "filters": {"tags": [tag]}
    }
    
    headers = {
        "Content-Type": "application/json"
    }
    
    try:
        response = requests.post(URL, json={"query": query, "variables": variables}, headers=headers)
        data = response.json()
        questions = data['data']['problemsetQuestionList']['questions']
        
        result = []
        for q in questions:
            result.append({
                "title": q["title"],
                "difficulty": q["difficulty"].lower(),
                "url": f"https://leetcode.com/problems/{q['titleSlug']}/",
                "leetcodeUrl": f"https://leetcode.com/problems/{q['titleSlug']}/"
            })
        return result
    except Exception as e:
        print(f"Error fetching {tag}: {e}")
        return []

results = {}
for pattern_name, tag in PATTERNS.items():
    print(f"Fetching {pattern_name} ({tag})...")
    probs = get_problems_by_tag(tag)
    results[pattern_name] = probs
    time.sleep(1) # be nice to API

with open("extra-problems.json", "w") as f:
    json.dump(results, f, indent=2)

print("Done generating extra-problems.json!")
