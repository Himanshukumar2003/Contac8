"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export default function OurServices() {
  const categories = [
    {
      title: "Travel",
      desc: "Curabitur dictum vitae nisi et posuere. Aenean maximus urna.",
      img: "/img/imgi_12_img-47.jpg",
    },
    {
      title: "Adventure",
      desc: "Sit facilisi vitae venenatis amet posuere turpis sed turpis.",
      img: "/img/imgi_18_image-3.jpg",
    },
    {
      title: "Gear",
      desc: "Imperdiet felis a tempus bibendum lorem accumsan commodo.",
      img: "/img/imgi_35_testi-7.jpg",
    },
    {
      title: "Gear",
      desc: "Imperdiet felis a tempus bibendum lorem accumsan commodo.",
      img: "/img/imgi_35_testi-7.jpg",
    },
  ];

  return (
    <div className="section bg-white p-0">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-black mb-8 md:mb-12">
            Article categories
          </h2>

          <button className="border rounded-full px-4 py-1 text-sm hover:bg-gray-100 transition">
            Browse all articles
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <Card
              key={index}
              className="
                relative bg-gray-50 overflow-hidden rounded-3xl group cursor-pointer 
                border-none shadow-sm hover:shadow-xl transition-all duration-500
                hover:-translate-y-1 p-0
              "
            >
              {/* Image with hover scale */}
              <div className="overflow-hidden h-60">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="
                    object-cover w-full h-60 
                    transition-all duration-700 
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Hover Icon */}
              <div
                className="
                  absolute top-4 right-4 bg-white/90 backdrop-blur-md 
                  rounded-full w-10 h-10 flex items-center justify-center 
                  transition-all duration-500
                  group-hover:-translate-y-1 group-hover:translate-x-1
                "
              >
                <ArrowUpRight className="w-5 h-5" />
              </div>

              {/* Text */}
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm max-w-xs leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
