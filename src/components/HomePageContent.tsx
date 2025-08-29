"use client";
import { BlockRenderer } from "@/components/BlockRenderer";
import { getHomepageData } from "@/data/loader";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePageContent() {
  const { language } = useLanguage();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const fetchedData = await getHomepageData();
        setData(fetchedData.data);
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
      <BlockRenderer blocks={data?.blocks || []} />
    </div>
  );
}
