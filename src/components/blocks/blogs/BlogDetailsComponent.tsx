import { StrapiImage } from "@/components/StrapiImage";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { CiBookmark, CiCalendarDate, CiShare2 } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import Markdown from "react-markdown";
import Link from "next/link";

type Props = {
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

export default function BlogDetailsComponent({ blog }: Props) {
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

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="mx-auto w-full px-10 py-12 flex flex-col gap-10">
      <div className="flex items-center gap-5 w-full">
        <Link href={"/blogs"} className="flex items-center gap-5">
          <FaArrowLeft />
          <p className="font-semibold">Blogs</p>
        </Link>
        <IoIosArrowForward />
        <p className="font-semibold">{slug}</p>
      </div>

      <StrapiImage
        src={image.url}
        alt={image.name}
        width={1000}
        height={1000}
        className="w-full h-full object-cover rounded-lg mt-10"
      />

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-10">
          <Badge className="bg-white border border-gray-400 text-black p-1">
            {category}
          </Badge>
          <span className="flex items-center gap-1 font-medium">
            <CiCalendarDate size={20} color="#00000099" />
            <span className="text-gray-500 font-medium text-sm">
              {formattedDate}
            </span>
          </span>
          <p className="text-gray-500 text-[10px] flex items-center gap-1">
            <GoClock size={20} />
            <span className="font-medium text-sm">{readTime}</span>
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center text-gray-500 gap-2">
            <BiLike size={20} />
            <p className="font-medium text-sm">{likeCount}</p>
          </div>
          <div className="text-gray-500 flex items-center gap-2">
            <GoComment size={20} />
            <p className="font-medium text-sm">{commentCount}</p>
          </div>
          <div className="text-gray-500 flex items-center gap-2">
            <CiBookmark size={20} />
          </div>
          <div className="text-gray-500 flex items-center gap-2">
            <CiShare2 size={20} />
          </div>
        </div>
      </div>

      <h1 className="text-4xl font-medium">{title}</h1>

      <div className="">
        <Markdown
          components={{
            p: ({ node, ...props }) => (
              <p
                className="mb-10 w-full text-lg leading-tight text-black"
                {...props}
              />
            ),
          }}
        >
          {description}
        </Markdown>
      </div>
    </div>
  );
}
