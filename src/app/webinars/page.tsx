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

export default async function WebinarRoute({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params; // ✅ no await needed
  const { blocks, webinars } = await loader(slug);

  console.log("Blocks:", blocks);
  console.log("Webinars:", webinars);

  return <BlockRenderer blocks={blocks} webinars={webinars} />;
}
