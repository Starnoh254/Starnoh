import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-teal-400 w-full px-6 py-4 fixed top-0 z-50 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="font-heading font-bold text-2xl">
          <Link to="/">
            Starnoh
          </Link>
        </h1>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 font-heading list-none">
          <li>
            <Link to="/" className="hover:text-indigo-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-indigo-400 transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-indigo-400 transition-colors"
            >
              Contact Me
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav with animation */}
      <ul
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "max-h-60 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        } mt-4 space-y-4 font-heading list-none text-center`}
      >
        <li>
          <Link
            to="/"
            onClick={() => setIsOpen((prev) => !prev)}
            className="hover:text-indigo-400 transition-colors block"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            onClick={() => setIsOpen((prev) => !prev)}
            className="hover:text-indigo-400 transition-colors block"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => setIsOpen((prev) => !prev)}
            className="hover:text-indigo-400 transition-colors block"
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}
