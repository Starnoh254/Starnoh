import React from "react";

export default function ProjectCard({
  title,
  description,
  tech,
  role,
  value,
  status,
  testimonial,
  client
}) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
      <h2 className="text-xl font-bold text-teal-400 mb-2">{title}</h2>
      <p className="text-gray-300 mb-2">{description}</p>
      <p className="text-sm text-gray-400 mb-2">
        <strong>Role:</strong> {role}
      </p>
      <p className="text-sm text-gray-400 mb-2">
        <strong>Impact:</strong> {value}
      </p>
      <p className="text-sm text-gray-400 mb-2">
        <strong>Status:</strong> {status}
      </p>
      <div className="flex flex-wrap gap-2 mt-3">
        {tech.map((stack, i) => (
          <span key={i} className="bg-teal-700 px-3 py-1 rounded-full text-sm">
            {stack}
          </span>
        ))}
      </div>
      {testimonial && (
        <div className="mt-4 bg-gray-700 p-3 rounded-lg">
          <p className="italic text-gray-300">"{testimonial}"</p>
          <p className="text-teal-400 font-bold mt-2">— {client}</p>
        </div>
      )}
    </div>
  );
}
