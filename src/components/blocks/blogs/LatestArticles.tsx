"use client";
import { LatestArticlesProps } from "@/types";
import React, { useState } from "react";
import BlogCard from "./BlogCard";
import { Button } from "@/components/ui/button";
import { useBlogStore } from "@/store/blogStore";

export default function LatestArticles({
  title,
  description,
}: LatestArticlesProps) {
  const { allBlogs, searchTerm, activeCategory } = useBlogStore();
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  const filteredBlogs = allBlogs?.filter((blog) => {
    const blogData = blog?.blog;
    if (!blogData || !blogData.title) {
      return false;
    }

    const titleMatches = blogData.title
      .toLowerCase()
      .includes(searchTerm?.toLowerCase() || "");
    const categoryMatches =
      activeCategory === "All" ||
      blogData.category?.toLowerCase() === activeCategory?.toLowerCase();

    return titleMatches && categoryMatches;
  });

  const blogsLength = filteredBlogs?.length || 0;

  const handleLoadMore = () => {
    setVisibleBlogs((prev) => prev + 3);
  };

  return (
    <div className="bg-[#FAFAFA] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-11 lg:py-12">
      <div className="text-center space-y-3 sm:space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">{title}</h1>
        <p className="text-[#878C91] text-base sm:text-lg md:text-xl leading-relaxed px-2">{description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8 md:mt-9 lg:mt-10">
        {filteredBlogs &&
          filteredBlogs
            .slice(0, visibleBlogs)
            .map((blog) => <BlogCard blog={blog} key={blog.id} />)}
      </div>

      {visibleBlogs < blogsLength && (
        <Button
          onClick={handleLoadMore}
          className="w-40 sm:w-44 md:w-48 lg:w-50 mx-auto text-sm sm:text-base md:text-md cursor-pointer p-4 sm:p-5 md:p-6 bg-black rounded-full"
        >
          Load More
        </Button>
      )}
    </div>
  );
}
