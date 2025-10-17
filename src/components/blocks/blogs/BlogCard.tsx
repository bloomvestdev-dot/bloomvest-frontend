import { StrapiImage } from "@/components/StrapiImage";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";

type BlogProps = {
  blog: {
    blog: {
      category: string;
      title: string;
      date: string;
      description: string;
      readTime: string;
      likeCount: string;
      commentCount: string;
      image: {
        id: number;
        documentId: string;
        url: string;
        name: string;
      };
    };
    slug: string;
  };
};
export default function BlogCard({ blog }: BlogProps) {
  const {
    category,
    title,
    date,
    description,
    readTime,
    likeCount,
    commentCount,
    image,
  } = blog.blog;

  const { slug } = blog;
  const { t, language } = useLanguage();

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="col-span-1">
      <div className="shadow-md border border-gray-200  rounded-2xl px-5 py-5 flex flex-col gap-8 h-[600px]">
        <StrapiImage
          src={image.url}
          alt={image.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="flex items-center justify-between text-sm ">
          <Badge className="bg-white border border-gray-400 text-black">
            {category}
          </Badge>
          <span className="flex items-center gap-1 font-medium">
            <CiCalendarDate size={15} color="#00000099" />
            <span className="text-gray-500 text-[10px]">{formattedDate}</span>
          </span>
        </div>

        <div className="space-y-5">
          <p className="text-2xl font-medium">{title}</p>
          <p className="text-lg text-gray-600">
            {description.split(" ").slice(0, 15).join(" ") + "."}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm font-medium text-gray-500 mt-auto">
          <p className="">{readTime}</p>
          <Link href={`/${language}/blogs/${slug}`}>
            <p className="flex items-center gap-1 cursor-pointer ">
              {t("read-more")} <FaArrowRight />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
