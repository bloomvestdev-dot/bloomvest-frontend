"use client";
import { BlockRenderer } from "@/components/BlockRenderer";
import { getBlogs } from "@/data/loader";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function HomePageContent({ data }: { data: any }) {
  const { language, t } = useLanguage();
  const [allBlogs, setAllBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        setLoading(true);
        const fetchedBlogData = await getBlogs(language);
        setAllBlogs(fetchedBlogData.data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, [language]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse">
          <Image
            src="/icon.svg"
            alt={t("loading")}
            width={64}
            height={64}
            className="animate-bounce"
          />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-2xl">
        {t("error")}: {error}
      </div>
    );
  }

  return (
    <div dir={language === "fa" ? "rtl" : "ltr"}>
      <ErrorBoundary>
        <BlockRenderer blocks={data?.blocks || []} allBlogs={allBlogs} />
      </ErrorBoundary>
    </div>
  );
}
