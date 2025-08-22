"use client";
import { LatestArticlesProps } from "@/types";
import React, { useState } from "react";
import BlogCard from "./BlogCard";
import { Button } from "@/components/ui/button";

export default function LatestArticles({
  title,
  description,
  allBlogs,
}: LatestArticlesProps) {
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const blogsLength = allBlogs?.length || 0;

  const handleLoadMore = () => {
    setVisibleBlogs((prev) => prev + 3);
  };

  return (
    <div className="bg-[#FAFAFA] mx-auto w-full px-10 py-12">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-medium">{title}</h1>
        <p className="text-[#878C91] text-xl">{description}</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-10">
        {allBlogs &&
          allBlogs
            .slice(0, visibleBlogs)
            .map((blog) => <BlogCard blog={blog} key={blog.id} />)}
      </div>

      {visibleBlogs < blogsLength && (
        <Button
          onClick={handleLoadMore}
          className="w-50 mx-auto text-md cursor-pointer p-6 bg-black rounded-full"
        >
          Load More
        </Button>
      )}
    </div>
  );
}
