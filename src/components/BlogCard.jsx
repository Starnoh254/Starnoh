import React from "react";

export default function BlogCard({ title, date, description, tags, slug }) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
      <h2 className="text-xl font-bold text-teal-400 mb-2">{title}</h2>
      <p className="text-gray-300 mb-2">{description}</p>
      <p className="text-sm text-gray-400 mb-2">
        <strong>Date:</strong> {date}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((stack, i) => (
          <span key={i} className="bg-teal-700 px-3 py-1 rounded-full text-sm">
            {stack}
          </span>
        ))}
      </div>

      {/* Add Read More link only if slug is passed */}
      {slug && (
        <a
          href={`/blog/${slug}`}
          className="inline-block mt-4 text-teal-400 hover:underline text-sm"
        >
          📖 Read More
        </a>
      )}
    </div>
  );
}
