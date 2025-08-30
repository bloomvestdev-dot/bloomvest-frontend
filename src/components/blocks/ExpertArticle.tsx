import { ExpertArticleProps } from "@/types";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function ExpertArticle({
  title,
  description,
  cta,

  blogs,
}: ExpertArticleProps) {
  console.log("expert article: ", blogs);
  return (
    <div className="mx-auto w-full px-10 py-12 mt-5 flex flex-col gap-20 bg-[#FAFAFA]">
      <div className="flex items-center justify-between gap-10">
        <h1 className="text-5xl max-w-2xl font-semibold">{title}</h1>
        <div className="space-y-3">
          <p className="max-w-xl text-[#878C91]">{description}</p>
          <Link href={`${cta?.href}`}>
            <button className="border border-black p-4 font-medium rounded-full text-xs mt-5 hover:bg-black hover:text-white transition-colors cursor-pointer">
              {cta?.text}
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {blogs?.slice(0, 3).map((item) => (
          <div
            className="bg-white rounded-4xl border border-gray-200 py-6 px-8 flex flex-col justify-between h-full gap-6"
            key={item.id}
          >
            <div className="flex items-center justify-between">
              <div className="rounded-full bg-red-500 w-3 h-3"></div>
              <p className="text-sm text-gray-400 font-medium">
                {item.blog.readTime}
              </p>
            </div>
            <h1 className="text-2xl max-w-xs font-semibold">
              {item.blog.title}
            </h1>
            <div className="flex items-center justify-between mt-3">
              <p className="max-w-xs text-[#878C91]">
                {item.blog.description.split(" ").slice(0, 14).join(" ") +
                  "..."}
              </p>
              <Link href={`/blogs/${item.slug}`}>
                <button className="py-3 px-5 bg-white border border-black rounded-full cursor-pointer hover:bg-black hover:text-white transition-colors flex items-center gap-2">
                  <FaArrowRight size={10} />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
