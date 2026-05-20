const fs = require('fs');
const https = require('https');
const stringSimilarity = require('string-similarity');
const path = require('path');

const SHEET_PATH = path.join(__dirname, 'src/lib/babbar-sheet-data.ts');

function fetchLeetCodeProblems() {
  return new Promise((resolve, reject) => {
    https.get('https://leetcode.com/api/problems/algorithms/', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function cleanTitle(title) {
  return title.toLowerCase()
    .replace(/\[.*\]/g, '')
    .replace(/[^a-z0-9]/g, '')
    .trim();
}

async function run() {
  console.log('Fetching LeetCode problems...');
  const lcData = await fetchLeetCodeProblems();
  const lcProblems = lcData.stat_status_pairs.map(p => ({
    title: p.stat.question__title,
    slug: p.stat.question__title_slug,
    clean: cleanTitle(p.stat.question__title)
  }));
  
  console.log(`Loaded ${lcProblems.length} LeetCode problems.`);
  
  let content = fs.readFileSync(SHEET_PATH, 'utf-8');
  
  // Match the problem objects
  const problemRegex = /{[\s\S]*?title:\s*'([^']+)'[\s\S]*?}/g;
  
  let match;
  let matches = [];
  while ((match = problemRegex.exec(content)) !== null) {
    matches.push({ full: match[0], title: match[1], index: match.index });
  }
  
  console.log(`Found ${matches.length} problems in the sheet.`);
  
  let updatedContent = content;
  let added = 0;
  
  // Sort matches descending so replacements don't shift indices
  matches.sort((a, b) => b.index - a.index);
  
  for (const m of matches) {
    // If it already has leetcodeUrl, skip
    if (m.full.includes('leetcodeUrl:')) continue;
    
    const targetClean = cleanTitle(m.title);
    
    // Fuzzy match against Leetcode titles
    const bestMatch = stringSimilarity.findBestMatch(targetClean, lcProblems.map(p => p.clean));
    
    if (bestMatch.bestMatch.rating > 0.85) { // Very confident match
      const matchedLc = lcProblems[bestMatch.bestMatchIndex];
      const lcUrl = `https://leetcode.com/problems/${matchedLc.slug}/`;
      
      // Inject leetcodeUrl into the object. Find url: '...' and insert after.
      const updatedObj = m.full.replace(/(url:\s*'[^']+',)/, `$1 leetcodeUrl: '${lcUrl}',`);
      
      updatedContent = updatedContent.substring(0, m.index) + updatedObj + updatedContent.substring(m.index + m.full.length);
      added++;
      console.log(`Matched: "${m.title}" => "${matchedLc.title}" (${Math.round(bestMatch.bestMatch.rating*100)}%)`);
    } else {
      console.log(`No safe match for: "${m.title}" (Best: ${bestMatch.bestMatch.target} at ${Math.round(bestMatch.bestMatch.rating*100)}%)`);
    }
  }
  
  fs.writeFileSync(SHEET_PATH, updatedContent, 'utf-8');
  console.log(`Successfully added ${added} LeetCode URLs.`);
}

run().catch(console.error);
