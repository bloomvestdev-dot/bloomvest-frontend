import BlogDetailsComponent from "@/components/blocks/blogs/BlogDetailsComponent";
import { getContentBySlug } from "@/data/loader";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const { data } = await getContentBySlug(slug);
  const blog = data[0];
  if (!blog) notFound();

  return <BlogDetailsComponent blog={blog} />;
}
