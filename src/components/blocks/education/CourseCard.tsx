import React from "react";
import { MdOutlineMenuBook } from "react-icons/md";
import { HiOutlineVideoCamera } from "react-icons/hi2";

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
    <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 col-span-1 space-y-4 sm:space-y-6 md:space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IconComponent className="text-base sm:text-lg text-gray-700" />
          <span className="text-xs sm:text-sm text-gray-700">
            {icon === "Book" ? "Book" : "Video"}
          </span>
        </div>
        <p className="text-xs text-[#878C91]">{relatedCourseCount}</p>
      </div>
      <div className="">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">{heading}</h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0">
        <p className="max-w-full sm:max-w-3xs text-[#878C91] text-sm sm:text-base leading-relaxed">{description}</p>
        <button className="py-5 sm:py-4 md:py-5 px-2 sm:px-8 md:px-10 bg-white border border-black rounded-full cursor-pointer hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2 w-1/4 sm:w-auto">
          <FaArrowRight size={14} className="sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5" />
        </button>
      </div>
    </div>
  );
}
