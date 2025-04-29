import React from "react";
import ProjectCard from "../components/ProjectCard"; // Adjust path based on your file structure
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "JengaAI",
    description:
      "An intelligent e-learning platform designed to help users learn Data Science, ML, and more — think Duolingo for all subjects.",
    tech: ["React", "Node.js", "MongoDB", "Docker"],
    role: "Fullstack + Backend Dev",
    value:
      "Delivers engaging learning experiences and improves user retention through gamification.",
    status: "Ongoing",
    testimonial:
      "He handled full-stack roles, backend logic, and deployment like a pro.",
    client: "Lead Dev, JengaAI",
  },
  {
    title: "Linkarp",
    description:
      "A networking tool that helps attendees connect better during events and conferences.",
    tech: ["Angular", "Node.js", "MongoDB"],
    role: "Fullstack Dev",
    value:
      "Improves user engagement and networking outcomes at professional events.",
    status: "Delivered",
    testimonial:
      "Starnoh took ownership and delivered even when the team was down. Super dependable dev!",
    client: "Co-founder, Linkarp",
  },
];

export default function Home() {
  return (
    <div className="bg-gray-900 text-teal-400 w-full min-h-screen px-6 md:px-16 py-12">
      {/* HERO */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 font-heading">
          Hi, I’m <span className="text-teal-400">Starnoh John</span> 👋
        </h1>
        <p className="text-2xl text-gray-300 mt-4 font-body">
          Software Developer | Problem Solver | Business-focused Tech Builder
        </p>
        <p className="mt-6 text-lg text-gray-200">
          I build fast, scalable, and user-friendly applications that solve real
          business problems and help companies grow.
        </p>
        <a
          href="#contact"
          className="inline-block mt-6 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Let’s work together
        </a>
      </section>

      {/* ABOUT */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-teal-400">About Me</h2>
        <p className="text-gray-100">
          I help businesses turn ideas into powerful, scalable digital
          solutions. Whether it’s optimizing operations, creating
          revenue-driving apps, or building websites that convert — I deliver
          results that matter.
        </p>
        <ul className="list-disc ml-6 mt-4 text-gray-300">
          <li>Improve customer satisfaction</li>
          <li>Streamline operations</li>
          <li>Boost sales and growth</li>
          <li>Strengthen brand presence</li>
        </ul>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-teal-400 mb-6">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
        <Link
          to="/projects"
          className="mt-6 inline-block text-teal-300 underline hover:text-teal-100"
        >
          See all projects →
        </Link>
      </section>

      {/* TESTIMONIALS */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-teal-400 mb-6">
          What People Say
        </h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <p className="italic text-gray-300">
            "Starnoh was a game changer for our project. He’s fast, reliable,
            and truly understands business needs."
          </p>
          <p className="text-teal-400 mt-4 font-bold">— CEO, TechStart Co.</p>
        </div>
      </section>

      {/* CONNECT */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-teal-400 mb-4">Let’s Connect</h2>
        <p className="text-gray-300 mb-4">
          Want to chat or collaborate? Hit me up on any of these platforms:
        </p>
        <div className="flex justify-center gap-6 text-3xl text-teal-400">
          <a
            href="mailto:youremail@example.com"
            title="Email"
            className="hover:text-teal-200"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://linkedin.com/in/starnoh"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className="hover:text-teal-200"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/starnoh"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="hover:text-teal-200"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
