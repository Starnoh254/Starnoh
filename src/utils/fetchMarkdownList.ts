// src/utils/fetchMarkdownList.ts
import parseFrontmatter from "./parsefontMatter";

export interface MarkdownFileMeta {
  slug: string;
  name: string;
  download_url: string;
}

const GITHUB_OWNER = 'Starnoh254';
const GITHUB_REPO = 'Documentation';

export async function fetchMarkdownList(): Promise<MarkdownFileMeta[]> {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch markdown list');
  }

  const files = await res.json();

  const mdFiles = files.filter(file => file.name.endsWith('.md'));

  const blogPosts = await Promise.all(
    mdFiles.map(async (file) => {
      const raw = await fetch(file.download_url).then(res => res.text());
      const { data } = parseFrontmatter(raw); // 👈 this grabs frontmatter

      return {
        title: data.title || file.name.replace('.md', ''),
        date: data.date || null,
        description: data.description || '',
        tags: data.tags || [],
        slug: file.name.replace('.md', '')
      };
    })
  );

  return blogPosts;
}
