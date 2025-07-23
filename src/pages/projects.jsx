import React from "react";
import SEOHelmet from "../components/SEOHelmet";
import ProjectsSection from "../components/ProjectsSection";

export default function Projects() {
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects by Starnoh John",
    description:
      "Portfolio of software development projects including JengaAI, Linkarp, and other full-stack applications",
    url: "https://starnohdev.com/projects",
    creator: {
      "@type": "Person",
      name: "Starnoh John",
    },
  };

  return (
    <>
      <SEOHelmet
        title="Projects - Portfolio | Starnoh John"
        description="Explore my portfolio of software development projects including JengaAI e-learning platform, Linkarp networking tool, and other innovative full-stack applications."
        keywords="software development portfolio, react projects, nodejs projects, fullstack applications, JengaAI, Linkarp, web development projects"
        url="https://starnohdev.com/projects"
        schema={projectsSchema}
      />
      <div className="bg-gray-900 w-screen text-teal-400 min-h-screen px-10 pt-10 pb-10">
        <ProjectsSection />
      </div>
    </>
  );
}
