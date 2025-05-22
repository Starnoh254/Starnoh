import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";

export default function PriceCard({ name, price, features, popular }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (popular && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [popular]);

  return (
    <div
      ref={cardRef}
      className={`relative bg-gray-800 text-white p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105
        ${popular ? "border-4 border-teal-500 animate-pulse" : ""}
      `}
    >
      {/* "Most Popular" Badge */}
      {popular && (
        <div className="absolute -top-3 right-3 bg-teal-500 text-sm px-3 py-1 rounded-full font-semibold text-white shadow-md">
          ⭐ Most Popular
        </div>
      )}

      <h3 className="text-xl font-bold text-teal-400 mb-2">{name}</h3>
      <p className="text-2xl font-bold text-gray-300 mb-4">{price}</p>

      <ul className="mb-6 space-y-2 text-gray-300">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <FiCheck className="text-teal-400" /> {feature}
          </li>
        ))}
      </ul>

      <button className="w-full text-white py-2 rounded-xl bg-teal-600 hover:bg-teal-700 transition">
        <Link to="/contact">Get This Package</Link>
      </button>
    </div>
  );
}
