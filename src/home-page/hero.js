"use client";

import { Button } from "@/components/ui/button";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";

const placeholders = [
  "What's the first rule of Fight Club?",
  "Who is Tyler Durden?",
  "Where is Andrew Laeddis Hiding?",
  "Write a Javascript method to reverse a string",
  "How to assemble your own PC?",
];
export default function Herosection() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <main className="min-h-screen bg-yellow-200">
      <div className="px-6 pt-20 pb-16 lg:py-35 flex justify-center items-center ">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="flex flex-col  col-span-2 justify-center space-y-6">
              {/* Heading */}
              <h1 className="text-6xl lg:text-7xl font-serif text-gray-900 leading-tight text-pretty">
                Your <span className="italic">Smile</span>, Smarter.
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-800 max-w-lg leading-relaxed">
                We don&apos;t believe in one-size-fits-all dentistry. At Smilx,
                every patient receives thoughtful care — built on their goals,
                lifestyle, and comfort.
              </p>

              <div className="relative w-full max-w-lg mx-start">
                <PlaceholdersAndVanishInput
                  placeholders={placeholders}
                  onChange={handleChange}
                  onSubmit={onSubmit}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-[var(--primary-dark)]" />
              </div>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gray-900 text-white hover:bg-gray-800 font-semibold rounded-full px-6"
                >
                  BOOK APPOINTMENT
                </Button>

                {/* Avatar Group */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-300 to-pink-400 border-2 border-yellow-300"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-300 to-purple-400 border-2 border-yellow-300"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-300 to-blue-400 border-2 border-yellow-300"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    1000+ of happy user
                  </span>
                </div>
              </div>
            </div>

            <div className=" flex  justify-center ">
              <Image
                src="/hotel-booking-cuate.svg"
                width={400}
                height={400}
                alt=""
                className="w-100 scale-130"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
