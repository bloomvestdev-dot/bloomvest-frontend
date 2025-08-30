import { Badge } from "@/components/ui/badge";
import { ArchivedWebinarsProps } from "@/types";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { IoTimeOutline } from "react-icons/io5";

type Props = {
  webinar: {
    webinar: {
      title: string;
      description: string;
      date: string;
      length: string;
      registered: string;
      speakers: { id: number; name: string }[];
      cta: any;
      badge: string;
    };
  };
};

export default function ArchivedWebinarCard({ webinar }: Props) {
  const { title, description, date, length, registered, speakers, cta, badge } =
    webinar.webinar;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="bg-white p-4 sm:p-6 md:p-7 lg:p-8 rounded-4xl border border-gray-200 space-y-6 sm:space-y-8 md:space-y-9 lg:space-y-10 mt-6 sm:mt-8 md:mt-9 lg:mt-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">{title}</h1>
        <Badge className="bg-white text-black border border-gray-300 p-1.5 sm:p-2 rounded-lg text-xs sm:text-sm w-fit">
          {badge}
        </Badge>
      </div>

      <p className="text-sm sm:text-base leading-relaxed">{description}</p>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-2 sm:justify-between">
        <p className="flex items-center gap-2 font-medium text-[#00000099] text-sm sm:text-base">
          <span className="">
            <CiCalendar color="#8376FF" className="w-4 h-4 sm:w-5 sm:h-5" />
          </span>
          {formattedDate}
        </p>
        <p className="flex items-center gap-2 font-medium text-[#00000099] text-sm sm:text-base">
          <span className="">
            <IoTimeOutline color="#8376FF" className="w-4 h-4 sm:w-5 sm:h-5" />
          </span>
          {length}
        </p>
        <p className="flex items-center gap-2 font-medium text-[#00000099] text-sm sm:text-base">
          <span className="">
            <GoPeople color="#8376FF" className="w-4 h-4 sm:w-5 sm:h-5" />
          </span>
          {registered}
        </p>
      </div>
      <span className="flex items-center gap-2">
        <span className="text-[#00000099] text-xs sm:text-sm font-medium">Speaker:</span>
        {speakers.map((speaker: any, index: number) => (
          <p className="text-xs sm:text-sm font-medium" key={index}>
            {speaker.name}
          </p>
        ))}
      </span>

      <div className="p-3 sm:p-4 md:p-5">
        <button className="space-x-3 sm:space-x-4 md:space-x-6 bg-black font-medium cursor-pointer text-white rounded-full flex items-center justify-center py-3 sm:py-3.5 md:py-4 px-6 sm:px-7 md:px-8 gap-3 sm:gap-4 mx-auto text-sm sm:text-base">
          {cta.title} <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}
