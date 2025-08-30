"use client";

import { BlockRenderer } from "@/components/BlockRenderer";
import { useBlogStore } from "@/store/blogStore";
import Image from "next/image";
import React, { useEffect } from "react";

export default function BlogRoute() {
  const { blocks, allBlogs, categories, isLoading, error, fetchBlogData } =
    useBlogStore();

  useEffect(() => {
    fetchBlogData();
  }, [fetchBlogData]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse">
          <Image
            src="/icon.svg"
            alt="Loading..."
            width={64}
            height={64}
            className="animate-bounce"
          />
        </div>
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
