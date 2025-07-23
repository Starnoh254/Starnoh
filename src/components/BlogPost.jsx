// uses react-markdown
// BlogPost.tsx
import React from "react";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SEOHelmet from "./SEOHelmet";
import { createBlogPostSchema } from "../utils/seoConfig";
import { fetchMarkdownContent } from "../utils/fetchMarkdownContent";

export default function BlogPost() {
  const { slug } = useParams(); // 🏷️ get the slug from the route
  const [content, setContent] = useState("Loading...");
  const [metadata, setMetadata] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadContent() {
      try {
        const markdown = await fetchMarkdownContent(slug);
        setContent(markdown);

        // Set basic metadata for SEO (you can extend this to parse frontmatter)
        setMetadata({
          title: slug
            ? slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
            : "Blog Post",
          description: `Read about ${
            slug ? slug.replace(/-/g, " ") : "this topic"
          } on Starnoh Dev blog`,
          date: new Date().toISOString(),
          slug: slug,
        });
      } catch (err) {
        setError("Could not load blog content.");
        console.error(err);
      }
    }

    loadContent();
  }, [slug]);

  if (error) {
    return <div>{error}</div>;
  }
  if (!content || !metadata) {
    return <div>Loading...</div>;
  }

  const blogPostSchema = createBlogPostSchema(metadata);

  return (
    <>
      <SEOHelmet
        title={`${metadata.title} | Starnoh Dev Blog`}
        description={metadata.description}
        keywords={`${slug}, software development, programming, tech blog, starnoh john`}
        url={`https://starnohdev.com/blog/${slug}`}
        type="article"
        schema={blogPostSchema}
      />
      <div className="prose max-w-none bg-gray-900 w-screen text-teal-400 min-h-screen px-10 pt-10 pb-10">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </>
  );
}
