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
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">
          {title}
        </h1>

        {/* Description */}
        <p className="text-lg text-[#878C91] mb-12 max-w-2xl mx-auto">
          {description}
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search Matches"
              className="w-full pl-12 pr-6 py-4 text-gray-700 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center items-center gap-3">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
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
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
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
