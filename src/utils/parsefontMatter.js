export default function parseFrontmatter(markdown) {
    const match = /^---\n([\s\S]+?)\n---/.exec(markdown);
    if (!match) {
      return { data: {}, content: markdown };
    }

    const frontmatter = match[1];
    const content = markdown.slice(match[0].length);

    const data = {};
    frontmatter.split('\n').forEach(line => {
        const [key, ...rest] = line.split(':');
        data[key.trim()] = rest.join(':').trim();
    });

    return { data, content };
}
  