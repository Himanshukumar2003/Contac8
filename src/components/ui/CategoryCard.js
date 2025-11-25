"use client";

import Image from "next/image";

export default function CategoryCard({ name, image }) {
  return (
    <div
      className="flex items-center justify-between bg-white rounded-xl p-4 md:p-6 
        shadow-sm cursor-pointer border border-transparent 
        hover:border-primary hover:shadow-md transition-all duration-300"
    >
      <p className="text-sm md:text-base font-bold text-black  leading-tight">
        {name}
      </p>

      <Image
        src={image}
        alt={name.replace(/\n/g, " ")}
        width={80}
        height={80}
        className="object-contain ml-4"
      />
    </div>
  );
}
