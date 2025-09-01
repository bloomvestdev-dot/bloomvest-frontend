import HomePageContent from "@/components/HomePageContent";
import { getHomepageData } from "@/data/loader";

async function loader(lang: "en" | "fa") {
  try {
    const { data } = await getHomepageData(lang);
    if (!data) {
      throw new Error('No homepage data found');
    }
    return data;
  } catch (error) {
    console.error('Error loading homepage data:', error);
    throw error;
  }
}

export default async function HomeRoute({
  params,
}: {
  params: Promise<{ lang: "en" | "fa" }>;
}) {
  const { lang } = await params;
  const data = await loader(lang);
  return <HomePageContent data={data} />;
}
