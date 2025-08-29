import BlogDetailsComponent from "@/components/blocks/blogs/BlogDetailsComponent";
import { getContentBySlug } from "@/data/loader";
import { notFound } from "next/navigation";

export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { data } = await getContentBySlug(params.slug);
  const blog = data[0];

  if (!blog) notFound();

  return <BlogDetailsComponent blog={blog} />;
}
