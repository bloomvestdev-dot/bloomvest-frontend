import { BlockRenderer } from "@/components/BlockRenderer";
import { getPageBySlug, getWebinars } from "@/data/loader";
import { notFound } from "next/navigation";
import React from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

async function loader(lang: "en" | "fa") {
  try {
    const [pageData, webinarData] = await Promise.all([
      getPageBySlug("webinars", lang),
      getWebinars(lang),
    ]);

    const page = pageData.data[0];
    if (!page) notFound();

    return { blocks: page.blocks, webinars: webinarData.data };
  } catch (error) {
    console.error('Error loading webinars data:', error);
    throw error;
  }
}

type PageProps = {
  params: Promise<{ lang: "en" | "fa" }>;
};

export default async function WebinarRoute({ params }: PageProps) {
  const { lang } = await params;
  const { blocks, webinars } = await loader(lang);

  console.log("Blocks:", blocks);
  console.log("Webinars:", webinars);

  return (
    <div dir={lang === "fa" ? "rtl" : "ltr"}>
      <ErrorBoundary>
        <BlockRenderer blocks={blocks} webinars={webinars} />
      </ErrorBoundary>
    </div>
  );
}
