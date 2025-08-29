import { BlockRenderer } from "@/components/BlockRenderer";
import { getCourses, getPageBySlug } from "@/data/loader";
import { notFound } from "next/navigation";
import React from "react";
interface PageProps {
  params: { slug: string };
}
async function loader(slug: string) {
  const [pageData, coursesData] = await Promise.all([
    getPageBySlug(slug),
    getCourses(),
  ]);

  const page = pageData.data[0];
  if (!page) notFound();

  return { blocks: page.blocks, latestCourses: coursesData.data };
}

export default async function page({ params }: PageProps) {
  const slug = (await params).slug;
  const { blocks, latestCourses } = await loader(slug);

  return <BlockRenderer blocks={blocks} latestCourses={latestCourses} />;
}
