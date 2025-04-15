import os
import yaml

TEXTS_DIR = "src/data/texts"

def extract_frontmatter(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        lines = f.readlines()

    if lines[0].strip() != "---":
        return None  # No frontmatter

    frontmatter_lines = []
    # for line in lines[1:]:
    #     if line.strip() == "---":
    #         break
    #     frontmatter_lines.append(line)
    frontmatter_lines.append(lines[1])

    # frontmatter = "".join(frontmatter_lines)
    return frontmatter_lines

def main():
    all_texts = {}
    for filename in os.listdir(TEXTS_DIR):
        filepath = os.path.join(TEXTS_DIR, filename)
        data = extract_frontmatter(filepath)
        all_texts[filename] = data

    print(all_texts)

if __name__ == "__main__":
    main()
