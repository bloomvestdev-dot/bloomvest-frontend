import { BlockRenderer } from "@/components/BlockRenderer";
import { getBlogs, getCourses, getPageBySlug } from "@/data/loader";
import { notFound } from "next/navigation";
import React from "react";

async function loader(slug: string) {
  const [pageData, blogData] = await Promise.all([
    getPageBySlug("blogs"),
    getBlogs(),
  ]);

  const page = pageData.data[0];
  if (!page) notFound();

  return { blocks: page.blocks, allBlogs: blogData.data };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogRoute({ params }: PageProps) {
  const slug = (await params).slug;
  const { blocks, allBlogs } = await loader(slug);

  return <BlockRenderer blocks={blocks} allBlogs={allBlogs} />;
}
