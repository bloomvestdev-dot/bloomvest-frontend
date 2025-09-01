import { BlockRenderer } from "@/components/BlockRenderer";
import { getCourses, getPageBySlug } from "@/data/loader";
import { notFound } from "next/navigation";
import React from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

async function loader(slug: string, lang: "en" | "fa") {
  try {
    const [pageData, coursesData] = await Promise.all([
      getPageBySlug(slug, lang),
      getCourses(lang),
    ]);

    const page = pageData.data[0];
    if (!page) notFound();

    return { blocks: page.blocks, latestCourses: coursesData.data };
  } catch (error) {
    console.error(`Error loading page data for slug: ${slug}`, error);
    throw error;
  }
}

type PageProps = {
  params: Promise<{ slug: string; lang: "en" | "fa" }>;
};

export default async function Page({ params }: PageProps) {
  const { slug, lang } = await params;
  const { blocks, latestCourses } = await loader(slug, lang);

  return (
    <div dir={lang === "fa" ? "rtl" : "ltr"}>
      <ErrorBoundary>
        <BlockRenderer blocks={blocks || []} latestCourses={latestCourses} />
      </ErrorBoundary>
    </div>
  );
}
