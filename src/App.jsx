import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import NavBar from "./components/NavBarTemp";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Blog from "./pages/blog";
import Pricing from "./pages/Pricing";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <NavBar />
        {/* Push content down so it's not hidden behind fixed navbar */}
        <div className="mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
