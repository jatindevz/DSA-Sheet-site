import re
import html

def extract_links(file_path):
    print(f"Reading file: {file_path}")
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            html_content = f.read()
    except Exception as e:
        print(f"Error reading file: {e}")
        return

    # Regex pattern to find anchor links
    link_pattern = re.compile(r'href="([^"]+)"', re.IGNORECASE)
    matches = link_pattern.findall(html_content)
    
    print(f"Found {len(matches)} total links in the HTML file:")
    unique_links = sorted(list(set(matches)))
    
    gfg_problems = [l for l in unique_links if "geeksforgeeks.org/problems" in l]
    gfg_articles = [l for l in unique_links if "geeksforgeeks.org/" in l and "problems" not in l]
    
    print(f"\nGeeksforGeeks Practice Links ({len(gfg_problems)}):")
    for link in gfg_problems[:10]:
        print(f"  - {html.unescape(link)}")
    if len(gfg_problems) > 10:
        print("  ...")

    print(f"\nGeeksforGeeks Article Links ({len(gfg_articles)}):")
    for link in gfg_articles[:10]:
        print(f"  - {html.unescape(link)}")
    if len(gfg_articles) > 10:
        print("  ...")

if __name__ == "__main__":
    extract_links("Pasted text.txt")
