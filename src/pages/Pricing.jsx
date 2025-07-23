import React from "react";
import SEOHelmet from "../components/SEOHelmet";
import PriceSection from "../components/PriceSection";

export default function Pricing() {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Software Development Services - Pricing",
    description:
      "Professional software development pricing for React, Node.js, and full-stack development services",
    url: "https://starnohdev.com/pricing",
    provider: {
      "@type": "Person",
      name: "Starnoh John",
    },
    serviceType: "Software Development",
    areaServed: "Worldwide",
  };

  return (
    <>
      <SEOHelmet
        title="Pricing - Software Development Services | Starnoh John"
        description="Affordable and competitive pricing for professional software development services. Get quotes for React, Node.js, and full-stack development projects."
        keywords="software development pricing, react developer rates, nodejs developer cost, fullstack development price, freelance developer pricing"
        url="https://starnohdev.com/pricing"
        schema={pricingSchema}
      />
      <div className="bg-gray-900 w-screen text-teal-400 min-h-screen px-10 pt-10 pb-10">
        <PriceSection />
      </div>
    </>
  );
}
