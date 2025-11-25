"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/ui/CategoryCard";

export default function CategoryExplorer() {
  const categories = [
    { name: "BODY\nPARTS", image: "/img/category/collection-1.webp" },
    { name: "ELECTRONICS\nPARTS", image: "/img/category/collection-2.webp" },
    { name: "ENGINE\nPARTS", image: "/img/category/collection-3.webp" },
    { name: "LIGHTING\nPARTS", image: "/img/category/collection-4.webp" },
    { name: "STEERING\nPARTS", image: "/img/category/collection-5.png" },
    { name: "BRAKE\nDISKS &\nPADS", image: "/img/category/collection-6.png" },
    { name: "ENERGY\nPARTS", image: "/img/category/collection-7.webp" },
    { name: "FURNITURE\nPARTS", image: "/img/category/collection-8.webp" },
    { name: "OIL &\nLUBRICANTS", image: "/img/category/collection-9.png" },
    { name: "SUSPENSION\nPARTS", image: "/img/category/collection-1.webp" },
  ];

  const [showAll, setShowAll] = useState(false);
  const initialDisplayLimit = 15;

  return (
    <section className="w-full  section">
      <div className="container px-4 md:px-6">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-extrabold 
            tracking-tight text-black mb-8 md:mb-12"
        >
          EXPLORE BY CATEGORY
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {(showAll
            ? categories
            : categories.slice(0, initialDisplayLimit)
          ).map((cat, index) => (
            <CategoryCard key={index} name={cat.name} image={cat.image} />
          ))}
        </div>

        {/* VIEW MORE BUTTON */}
        {!showAll && categories.length > initialDisplayLimit && (
          <div className="flex justify-center mt-8">
            <Button onClick={() => setShowAll(true)} className="btn">
              View More
            </Button>
          </div>
        )}

        {/* VIEW LESS BUTTON */}
        {showAll && (
          <div className="flex justify-center mt-8">
            <Button
              onClick={() => setShowAll(false)}
              className="bg-black text-white font-bold rounded-full px-8 py-3 
              hover:bg-gray-800 transition-colors"
            >
              View Less
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
