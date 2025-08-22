import { BlockRenderer } from "@/components/BlockRenderer";
import { getPageBySlug, getWebinars } from "@/data/loader";
import { notFound } from "next/navigation";
import React from "react";

async function loader(slug: string) {
  const [pageData, webinarData] = await Promise.all([
    getPageBySlug("webinars"),
    getWebinars(),
  ]);

  const page = pageData.data[0];
  if (!page) notFound();

  return { blocks: page.blocks, webinars: webinarData.data };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function WebinarRoute({ params }: PageProps) {
  const slug = (await params).slug;
  const { blocks, webinars } = await loader(slug);

  console.log("Blocks:", blocks);
  console.log("Webinars:", webinars);

  return <BlockRenderer blocks={blocks} webinars={webinars} />;
}
