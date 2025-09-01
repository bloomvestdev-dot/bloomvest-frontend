import { BlockRenderer } from "@/components/BlockRenderer";
import { getBlogs, getPageBySlug } from "@/data/loader";
import { notFound } from "next/navigation";
import React from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

async function loader(lang: "en" | "fa") {
  try {
    const [pageData, blogsData] = await Promise.all([
      getPageBySlug("blogs", lang),
      getBlogs(lang),
    ]);

    const page = pageData.data[0];
    if (!page) notFound();

    return { blocks: page.blocks, allBlogs: blogsData.data };
  } catch (error) {
    console.error('Error loading blogs data:', error);
    throw error;
  }
}

type PageProps = {
  params: Promise<{ lang: "en" | "fa" }>;
};

export default async function BlogsPage({ params }: PageProps) {
  const { lang } = await params;
  const { blocks, allBlogs } = await loader(lang);

  return (
    <div dir={lang === "fa" ? "rtl" : "ltr"}>
      <ErrorBoundary>
        <BlockRenderer blocks={blocks || []} allBlogs={allBlogs} />
      </ErrorBoundary>
    </div>
  );
}
