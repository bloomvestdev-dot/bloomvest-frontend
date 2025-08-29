import { BlockRenderer } from "@/components/BlockRenderer";
import { getCourses, getPageBySlug } from "@/data/loader";
import { notFound } from "next/navigation";
import React from "react";

async function loader(slug: string) {
  const [pageData, coursesData] = await Promise.all([
    getPageBySlug(slug),
    getCourses(),
  ]);

  const page = pageData.data[0];
  if (!page) notFound();

  return { blocks: page.blocks, latestCourses: coursesData.data };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function page({ params }: PageProps) {
  const { slug } = await params;
  const { blocks, latestCourses } = await loader(slug);

  return <BlockRenderer blocks={blocks} latestCourses={latestCourses} />;
}
