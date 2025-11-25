"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Serives() {
  const categories = [
    {
      title: "B2B",
      subtitle: "Quick Quotes",
      image: "/img/b2b_square_hotkey.webp",
      bg: "bg-blue-600",
    },
    {
      title: "REPAIRS & SERVICES",
      subtitle: "Get Nearest Vendor",
      image: "/img/realestate_square_hotkey.webp",
      bg: "bg-indigo-600",
    },
    {
      title: "REAL ESTATE",
      subtitle: "Finest Agents",
      image: "/img/repair_square_hotkey.webp",
      bg: "bg-purple-600",
    },
    {
      title: "DOCTORS",
      subtitle: "Book Now",
      image: "/img/realestate_square_hotkey.webp",
      bg: "bg-green-600",
    },
  ];

  return (
    <div className="section bg-white">
      <div className=" mx-auto    contanier px-6 ">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 ">
          {/* LEFT BIG CCTV SLIDER */}
          <div className="lg:col-span-5">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="rounded-2xl overflow-hidden"
            >
              <SwiperSlide>
                <div className="relative w-full">
                  <Image
                    src="/img/banner_packersmovers_2024.webp"
                    alt="CCTV"
                    width={500}
                    height={500}
                    className="object-cover w-full h-64"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full">
                  <Image
                    src="/img/banner_packersmovers_2024.webp"
                    alt="CCTV"
                    width={500}
                    height={500}
                    className="object-cover w-full h-64"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full">
                  <Image
                    src="/img/banner_packersmovers_2024.webp"
                    alt="CCTV"
                    width={500}
                    height={500}
                    className="object-cover w-full h-64"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full">
                  <Image
                    src="/img/banner_packersmovers_2024.webp"
                    alt="CCTV"
                    width={500}
                    height={500}
                    className="object-cover w-full h-64"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {categories.map((cat, index) => (
                <div key={index}>
                  <div
                    className={`p-5 rounded-2xl text-white ${cat.bg} h-64 relative`}
                  >
                    <div className="  relative z-2">
                      <h3 className="font-extrabold text-lg">{cat.title}</h3>
                      <p className="mt-1">{cat.subtitle}</p>
                    </div>
                    <div className="absolute z-20 bottom-3 right-3 text-white text-sm">
                      <div
                        className="group flex items-center gap-1 
 backdrop-blur-lg bg-white/20
      px-2 py-1 transition-all duration-700 w-fit"
                      >
                        {/* Hidden Text */}
                        <span
                          className="max-w-0 overflow-hidden group-hover:max-w-xs 
      transition-all duration-700 whitespace-nowrap"
                        >
                          Explore
                        </span>

                        {/* Arrow Icon */}
                        <span className="text-[21px] group-hover:translate-x-1 transition-all duration-700">
                          ›
                        </span>
                      </div>
                    </div>

                    <Image
                      src={cat.image}
                      alt={cat.title}
                      width={200}
                      height={200}
                      className="absolute z-1 bottom-0 right-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
