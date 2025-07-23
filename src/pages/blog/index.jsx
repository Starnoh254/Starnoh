import React from "react";
import SEOHelmet from "../../components/SEOHelmet";
import BlogsSection from "../../components/BlogsSection";
import ComingSoon from "../../components/ComingSoon";

export default function Blog() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Starnoh Dev Blog",
    description:
      "Technical blog about software development, React, Node.js, and full-stack development insights",
    url: "https://starnohdev.com/blog",
    author: {
      "@type": "Person",
      name: "Starnoh John",
    },
    publisher: {
      "@type": "Organization",
      name: "Starnoh Dev",
    },
  };

  return (
    <>
      <SEOHelmet
        title="Blog - Technical Insights | Starnoh John"
        description="Read technical articles and insights about software development, React, Node.js, and full-stack development best practices from Starnoh John."
        keywords="software development blog, react tutorials, nodejs articles, fullstack development insights, programming tips, web development blog"
        url="https://starnohdev.com/blog"
        schema={blogSchema}
      />
      <div className="bg-gray-900 w-screen text-teal-400 min-h-screen px-10 pt-10 pb-10">
        <BlogsSection />
        {/* <ComingSoon /> */}
      </div>
    </>
  );
}
