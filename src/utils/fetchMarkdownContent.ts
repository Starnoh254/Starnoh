// src/utils/fetchMarkdownContent.ts

const GITHUB_OWNER = 'Starnoh254';
const GITHUB_REPO = 'Documentation';

export async function fetchMarkdownContent(slug: string): Promise<string> {
  const rawUrl = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/${slug}.md`;

  const res = await fetch(rawUrl);
  if (!res.ok) {
    throw new Error(`Failed to fetch markdown content for ${slug}`);
  }

  return res.text(); // returns the .md content as plain string
}
