import React from "react";
import { MdOutlineMenuBook } from "react-icons/md";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";

type Props = {
  course: {
    courseCard: {
      heading: string;
      description: string;
      icon: string;
      relatedCourseCount: string;
      cta: {
        href: string;
        id: string;
        text: string;
      };
    };
  };
};

export default function CourseCard({ course }: Props) {
  const { courseCard } = course;
  const { heading, description, icon, relatedCourseCount, cta } = courseCard;

  const IconComponent =
    icon === "Book" ? MdOutlineMenuBook : HiOutlineVideoCamera;

  return (
    <div className="bg-white rounded-3xl p-10 col-span-1 space-y-8">
      <div className="flex items-center justify-between">
        <IconComponent className="text-lg text-gray-700" />
        <p className="text-xs text-[#878C91]">{relatedCourseCount}</p>
      </div>
      <div className="">
        <h1 className="text-4xl font-bold">{heading}</h1>
      </div>
      <div className="flex justify-between">
        <p className="max-w-3xs text-[#878C91]">{description}</p>
        <button className="py-5 px-10 bg-white border border-black rounded-full cursor-pointer hover:bg-black hover:text-white transition-colors flex items-center gap-2">
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
