import { BlockRenderer } from "@/components/BlockRenderer";
import { getHomepageData } from "@/data/loader";

async function loader() {
  const data = await getHomepageData();
  if (!data) {
    throw new Error("Failed to fetch homepage data");
  }
  return { ...data.data };
}

export default async function HomeRoute() {
  const data = await loader();
  const blocks = data?.blocks || [];

  return <BlockRenderer blocks={blocks} />;
}
