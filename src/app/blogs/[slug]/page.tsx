import BlogDetailsComponent from "@/components/blocks/blogs/BlogDetailsComponent";
import { getContentBySlug } from "@/data/loader";
import { notFound } from "next/navigation";
import React from "react";

interface PageProps {
  params: { slug: string };
}

async function loader(slug: string) {
  const { data } = await getContentBySlug(slug);
  const blog = data[0];
  if (!blog) throw notFound();
  return { blog: blog };
}

export default async function BlogDetails({ params }: PageProps) {
  const { blog } = await loader(params.slug);
  console.log("blog content:", blog);
  return <BlogDetailsComponent blog={blog} />;
}
