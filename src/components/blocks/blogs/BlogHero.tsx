"use client";
import { BlogHeroProps } from "@/types";
import React from "react";
import { Search } from "lucide-react";
import { useBlogStore } from "@/store/blogStore";

export default function BlogHero({
  title,
  description,
  categories,
}: BlogHeroProps) {
  const { setSearchTerm, setActiveCategory, activeCategory } = useBlogStore();
  return (
    <div className="w-full bg-white py-8 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4 tracking-tight leading-tight">
          {title}
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#878C91] mb-8 sm:mb-10 md:mb-11 lg:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          {description}
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-6 sm:mb-7 md:mb-7.5 lg:mb-8">
          <div className="relative">
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              placeholder="Search Matches"
              className="w-full pl-10 sm:pl-12 pr-4 sm:pr-6 py-3 sm:py-4 text-gray-700 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 px-2">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeCategory === "All"
                ? "bg-[#8376FF] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.title)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === category.title
                  ? "bg-[#8376FF] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
