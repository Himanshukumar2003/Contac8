// import Image from "next/image";

// export default function ProductPage(params) {
//   return (
//     <>
//       <div className="  container max-w-7xl shadow-lg mx-auto p-5 bg-white">
//         <Image
//           src="/img/banner.jpg"
//           width={500}
//           height={500}
//           alt="pages Banner"
//           className="w-full"
//         ></Image>

//       </div>
//     </>
//   );
// }

"use client";

import { useState } from "react";
import {
  ChevronDown,
  Phone,
  MessageCircle,
  Send,
  Star,
  MapPin,
  Check,
  Search,
  Zap,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function BeautyParlourListing() {
  const [filters, setFilters] = useState({
    sortBy: "popularity",
    type: "all",
    topRated: false,
    verified: false,
    quickResponse: false,
    openNow: false,
    minRating: 0,
  });

  const [activeDropdown, setActiveDropdown] = useState(null);

  const parlours = [
    {
      id: 1,
      name: "Red Rose Beauty Parlour",
      rating: 4.3,
      reviews: 28,
      trending: true,
      address: "Shopping Centre Tagore Garden, Delhi",
      tags: ["Beauty Parlours"],
      phone: "08518881705",
      verified: true,
      image: "/img/imgi_44_testi-8.jpg",
      type: "parlour",
      responseTime: "2 hours",
    },
    {
      id: 2,
      name: "The Hair Magic Unisex Salon",
      rating: 5.0,
      reviews: 26,
      topSearch: true,
      address: "Rajouri Garden Main Market Rajouri Garden, Delhi",
      tags: ["Home Services Offered", "Bridal Makeup"],
      suggestions: '"Hygienic salon" 11 Suggestions',
      phone: "07418137734",
      image: "/img/imgi_18_image-3.jpg",
      type: "salon",
      responseTime: "1 hour",
      verified: true,
    },
    {
      id: 3,
      name: "The Elegant By Prachi Makeover",
      rating: 5.0,
      reviews: 23,
      trending: true,
      address: "DL Road Mohan Garden, Delhi",
      tags: ["Facial"],
      suggestions: '"Hygienic salon" 8 Suggestions',
      phone: "08518882309",
      image: "/img/imgi_35_testi-7.jpg",
      type: "spa",
      responseTime: "30 mins",
    },
  ];

  const filteredParlours = parlours
    .filter((p) => {
      if (filters.topRated && p.rating < 4.5) return false;
      if (filters.verified && !p.verified) return false;
      if (filters.minRating && p.rating < filters.minRating) return false;
      if (filters.type !== "all" && p.type !== filters.type) return false;
      return true;
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "reviews":
          return b.reviews - a.reviews;
        case "popularity":
        default:
          return 0;
      }
    });

  const relatedServices = [
    { name: "Women Beauty Parlours", count: "2590+ Listings" },
    { name: "Body Massage Centres", count: "818+ Listings" },
    { name: "Beauty Spas", count: "3680+ Listings" },
  ];

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setActiveDropdown(null);
  };

  const toggleFilter = (key) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-gray-100">
      <div className="  container max-w-7xl shadow-lg mx-auto p-4 bg-white">
        <Image
          src="/img/banner.jpg"
          width={500}
          height={500}
          alt="pages Banner"
          className="w-full rounded-lg"
        ></Image>

        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-2 sm:mb-3">
              <span>Delhi</span>
              <span className="text-primary">/</span>
              <span>Beauty Parlours in Delhi</span>
              <span className="text-primary">/</span>
              <span className="font-semibold text-slate-900">
                6342+ Listings
              </span>
            </div>
            <h1 className="text-2xl   italic sm:text-4xl font-medium  leading-tight">
              Popular Beauty Parlours in Delhi
            </h1>
          </div>
        </header>

        {/* Filters Bar */}
        <div className="border-b border-slate-200 bg-white sticky top-16 sm:top-20 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex gap-2 flex-wrap items-center">
              {/* Sort By Dropdown */}
              <div className="relative">
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === "sort" ? null : "sort")
                  }
                  className="flex items-center gap-1.5 px-3 sm:px-4 py-2 border border-primary text-slate-700 bg-white hover:border-slate-400 hover:bg-slate-50 rounded-lg text-sm font-medium transition"
                >
                  Sort by
                  <ChevronDown
                    className={`w-4 h-4 transition ${
                      activeDropdown === "sort" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "sort" && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg z-50 min-w-max">
                    {[
                      { value: "popularity", label: "Popularity" },
                      { value: "rating", label: "Rating: High to Low" },
                      { value: "reviews", label: "Most Reviews" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => updateFilter("sortBy", option.value)}
                        className={`w-full text-left px-4 py-2.5 hover:bg-slate-100 text-sm transition ${
                          filters.sortBy === option.value
                            ? "bg-blue-50 text-blue-700 font-semibold"
                            : "text-slate-700"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Type Dropdown */}
              <div className="relative">
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === "type" ? null : "type")
                  }
                  className="flex items-center gap-1.5 px-3 sm:px-4 py-2 border border-primary text-slate-700 bg-white hover:border-slate-400 hover:bg-slate-50 rounded-lg text-sm font-medium transition"
                >
                  Type
                  <ChevronDown
                    className={`w-4 h-4 transition ${
                      activeDropdown === "type" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "type" && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg z-50 min-w-max">
                    {[
                      { value: "all", label: "All Types" },
                      { value: "parlour", label: "Beauty Parlour" },
                      { value: "salon", label: "Salon" },
                      { value: "spa", label: "Spa" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => updateFilter("type", option.value)}
                        className={`w-full text-left px-4 py-2.5 hover:bg-slate-100 text-md transition ${
                          filters.type === option.value
                            ? "bg-blue-50 text-blue-700 font-semibold"
                            : "text-slate-700"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Open Now Toggle */}
              <button
                onClick={() => toggleFilter("openNow")}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 border rounded-lg text-md font-medium transition ${
                  filters.openNow
                    ? "bg-blue-50 border-blue-300 text-blue-700"
                    : "border-primary text-slate-700 bg-white hover:border-slate-400 hover:bg-slate-50"
                }`}
              >
                Open Now
              </button>

              {/* Top Rated Toggle */}
              <button
                onClick={() => toggleFilter("topRated")}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 border rounded-lg text-md font-medium transition ${
                  filters.topRated
                    ? "bg-amber-50 border-amber-300 text-amber-700"
                    : "border-primary text-slate-700 bg-white hover:border-slate-400 hover:bg-slate-50"
                }`}
              >
                <Star className="w-4 h-4" />
                Top Rated
              </button>

              {/* Quick Response Toggle */}
              <button
                onClick={() => toggleFilter("quickResponse")}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 border rounded-lg text-md font-medium transition ${
                  filters.quickResponse
                    ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                    : "border-primary text-slate-700 bg-white hover:border-slate-400 hover:bg-slate-50"
                }`}
              >
                <Zap className="w-4 h-4" />
                Quick Response
              </button>

              {/* Verified Toggle */}
              <button
                onClick={() => toggleFilter("verified")}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 border rounded-lg text-md font-medium transition ${
                  filters.verified
                    ? "bg-green-50 border-green-300 text-green-700"
                    : "border-primary text-slate-700 bg-white hover:border-slate-400 hover:bg-slate-50"
                }`}
              >
                <Check className="w-4 h-4" />
                Verified
              </button>

              {/* Rating Dropdown */}
              <div className="relative">
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "rating" ? null : "rating"
                    )
                  }
                  className="flex items-center gap-1.5 px-3 sm:px-4 py-2 border border-primary text-slate-700 bg-white hover:border-slate-400 hover:bg-slate-50 rounded-lg text-md font-medium transition"
                >
                  Rating
                  <ChevronDown
                    className={`w-4 h-4 transition ${
                      activeDropdown === "rating" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "rating" && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg z-50 min-w-max">
                    {[
                      { value: 0, label: "All Ratings" },
                      { value: 4, label: "4.0 & Above" },
                      { value: 4.5, label: "4.5 & Above" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => updateFilter("minRating", option.value)}
                        className={`w-full text-left px-4 py-2.5 hover:bg-slate-100 text-md transition ${
                          filters.minRating === option.value
                            ? "bg-blue-50 text-blue-700 font-semibold"
                            : "text-slate-700"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Listings */}
            <div className="lg:col-span-2 space-y-4">
              {filteredParlours.length > 0 ? (
                filteredParlours.map((parlour) => (
                  <Card
                    key={parlour.id}
                    className="overflow-hidden shadow-lg border-0 bg-white p-4 hover:shadow-xl transition-all duration-300 "
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Image */}
                      <div className="flex-shrink-0 relative group">
                        <div className="relative w-full sm:w-40 h-52 rounded-xl overflow-hidden bg-slate-100">
                          <Image
                            src={parlour.image || "/placeholder.svg"}
                            alt={parlour.name}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <button className="absolute top-2 right-2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition">
                            <Heart className="w-4 h-4 text-slate-400 hover:text-red-500" />
                          </button>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          {/* Title & Verification */}
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="flex items-start gap-2 flex-1">
                              <h3 className="text-lg sm:text-xl  italic font-medium leading-snug">
                                {parlour.name}
                              </h3>
                              {parlour.verified && (
                                <span className="flex-shrink-0 inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-1 rounded-full">
                                  <Check className="w-3.5 h-3.5" />
                                  Verified
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Rating & Badges */}
                          <div className="flex items-center gap-2 mb-3 flex-wrap">
                            <div className="inline-flex items-center gap-1 bg-yellow-400 text-white rounded-lg px-2.5 py-1 text-sm font-bold shadow-sm">
                              <Star className="w-3.5 h-3.5 fill-white" />
                              {parlour.rating}
                            </div>
                            <span className="text-xs sm:text-sm text-slate-600 font-medium">
                              {parlour.reviews} Ratings
                            </span>
                            {parlour.trending && (
                              <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-bold px-2.5 py-1 rounded-full">
                                <Zap className="w-3 h-3" />
                                Trending
                              </span>
                            )}
                            {parlour.topSearch && (
                              <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full">
                                <Search className="w-3 h-3" />
                                Top Search
                              </span>
                            )}
                          </div>

                          {/* Address */}
                          <div className="flex items-start gap-2 mb-3 text-sm text-slate-600">
                            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-400" />
                            <span className="line-clamp-2">
                              {parlour.address}
                            </span>
                          </div>

                          {/* Tags */}
                          <div className="flex gap-2 flex-wrap mb-2">
                            {parlour.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full font-medium hover:bg-slate-200 transition"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {parlour.suggestions && (
                            <p className="text-xs text-slate-500 italic">
                              {parlour.suggestions}
                            </p>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 mt-4 flex-wrap">
                          <button className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3 sm:px-4 py-2 rounded-lg hover:shadow-md transition text-sm font-semibold">
                            <Phone className="w-4 h-4" />
                            <span className="hidden sm:inline">
                              {parlour.phone}
                            </span>
                            <span className="sm:hidden">Call</span>
                          </button>
                          <button className="flex items-center justify-center gap-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 px-3 sm:px-4 py-2 rounded-lg hover:shadow-md transition text-sm font-semibold">
                            <MessageCircle className="w-4 h-4" />
                            <span className="hidden sm:inline">WhatsApp</span>
                            <span className="sm:hidden">Chat</span>
                          </button>
                          <button className="flex items-center justify-center gap-2 bg-primary text-dark px-3 sm:px-4 py-2 rounded-lg hover:shadow-md transition text-sm font-semibold">
                            <Send className="w-4 h-4" />
                            <span className="hidden sm:inline">Enquiry</span>
                            <span className="sm:hidden">Ask</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <Card className="p-8 text-center">
                  <p className="text-slate-600 font-medium">
                    No parlours match your filters. Try adjusting your search.
                  </p>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-5">
              {/* Lead Form */}
              <Card className="p-6 sm:p-7 border border-slate-200 bg-white shadow-md rounded-xl">
                <div className="mb-6">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Get the list of best{" "}
                    <span className="font-semibold text-blue-600">
                      Beauty Parlours
                    </span>
                  </p>
                </div>

                <form className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Name*"
                    className="bg-white border border-primary rounded-lg 
        focus:border-blue-500 focus:ring-blue-500 text-sm py-2.5
        placeholder:text-slate-400"
                  />

                  <Input
                    type="tel"
                    placeholder="Mobile Number*"
                    className="bg-white border border-primary rounded-lg 
        focus:border-blue-500 focus:ring-blue-500 text-sm py-2.5
        placeholder:text-slate-400"
                  />

                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 
        text-white font-semibold py-2.5 rounded-lg shadow-sm 
        hover:shadow transition text-sm"
                  >
                    Send Enquiry
                  </Button>
                </form>
              </Card>

              {/* Related Services */}
              <Card className="p-6 sm:p-7 border border-slate-200 bg-white shadow-sm rounded-xl">
                <h3 className="font-semibold text-lg text-slate-900 mb-4">
                  People Also Search For
                </h3>

                <div className="space-y-4">
                  {relatedServices.map((service) => (
                    <div
                      key={service.name}
                      className="   shadow-md rounded-lg  overflow-hidden
          hover:border-blue-400 hover:bg-blue-50 cursor-pointer 
          transition group"
                    >
                      <div className="flex gap-4  items-center">
                        <div>
                          <Image
                            src="/img/imgi_44_testi-8.jpg"
                            alt=""
                            width={200}
                            height={200}
                            className="w-25 "
                          ></Image>
                        </div>
                        <div className="py-2">
                          <p
                            className="font-medium text-sm text-slate-900 
            group-hover:text-blue-700 transition"
                          >
                            {service.name}
                          </p>

                          <p className="text-xs text-slate-500 mt-1">
                            {service.count}
                          </p>

                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-3 w-full text-xs bg-white border border-primary 
            rounded-md hover:bg-blue-50 hover:text-blue-700 
            hover:border-blue-400 transition"
                          >
                            Get Best Deal
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
