"use client";
import { BlockRenderer } from "@/components/BlockRenderer";
import { getBlogs, getHomepageData } from "@/data/loader";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePageContent() {
  const { language } = useLanguage();
  const [data, setData] = useState<any>(null);
  const [allBlogs, setAllBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [fetchedHomepageData, fetchedBlogData] = await Promise.all([
          getHomepageData(),
          getBlogs(),
        ]);
        setData(fetchedHomepageData.data);
        setAllBlogs(fetchedBlogData.data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [language]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-2xl">
        Error: {error}
      </div>
    );
  }

  return (
    <div dir={language === "fa" ? "rtl" : "ltr"}>
      <BlockRenderer blocks={data?.blocks || []} allBlogs={allBlogs} />
    </div>
  );
}
