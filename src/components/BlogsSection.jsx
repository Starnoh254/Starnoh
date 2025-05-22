import React from 'react'
import BlogCard from './BlogCard';

export default function BlogsSection() {
  const blogs = [
    {
      title: "Fixing NGINX for APK Download",
      date: "2025-05-14",
      description:
        "How I solved an issue where NGINX blocked APK downloads on mobile.",
      tags: ["nginx", "deployment"],
      slug: "fixing-nginx",
    },
    {
      title: "Fixing NGINX for APK Download",
      date: "2025-05-14",
      description:
        "How I solved an issue where NGINX blocked APK downloads on mobile.",
      tags: ["nginx", "deployment"],
      slug: "fixing-nginx",
    },
  ];

  return (
    <section className="px-1 py-10 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold text-teal-400 mb-6">📰 Blogs</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, i) => (
          <BlogCard key={i} {...blog} />
        ))}
      </div>
    </section>
  );
}
