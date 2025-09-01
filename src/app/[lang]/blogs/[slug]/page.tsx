import BlogDetailsComponent from "@/components/blocks/blogs/BlogDetailsComponent";
import { getContentBySlug } from "@/data/loader";
import { notFound } from "next/navigation";
import React from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

async function loader(slug: string, lang: "en" | "fa") {
  try {
    const blogData = await getContentBySlug(slug, lang);
    const blog = blogData.data[0];
    if (!blog) notFound();
    return blog;
  } catch (error) {
    console.error(`Error loading blog data for slug: ${slug}`, error);
    throw error;
  }
}

type PageProps = {
  params: Promise<{ slug: string; lang: "en" | "fa" }>;
};

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug, lang } = await params;
  const blog = await loader(slug, lang);

  return (
    <div dir={lang === "fa" ? "rtl" : "ltr"}>
      <ErrorBoundary>
        <BlogDetailsComponent blog={blog} />
      </ErrorBoundary>
    </div>
  );
}
