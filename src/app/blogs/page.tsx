"use client";

import { BlockRenderer } from "@/components/BlockRenderer";
import { useBlogStore } from "@/store/blogStore";
import React, { useEffect } from "react";

export default function BlogRoute() {
  const { blocks, allBlogs, categories, isLoading, error, fetchBlogData } =
    useBlogStore();

  useEffect(() => {
    fetchBlogData();
  }, [fetchBlogData]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        Loading blogs...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-2xl">
        Error: {error}
      </div>
    );
  }

  return <BlockRenderer blocks={blocks} allBlogs={allBlogs} />;
}
