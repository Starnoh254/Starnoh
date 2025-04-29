import React from 'react'

export default function Contact() {
  return (
    <div className="bg-gray-900 w-screen text-teal-400 min-h-screen px-10 pt-10 pb-10">
      {/* CONTACT */}
      <section id="contact" className="bg-gray-800 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-teal-400 mb-4">Contact Me</h2>
        <p className="text-gray-100 mb-4">
          Let’s build something awesome together. Reach out via email or find me
          on LinkedIn.
        </p>
        <ul className="text-teal-300 space-y-2">
          <li>
            Email:{" "}
            <a href="mailto:youremail@example.com" className="underline">
              youremail@example.com
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/starnoh"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/starnoh
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/starnoh"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              github.com/starnoh
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
