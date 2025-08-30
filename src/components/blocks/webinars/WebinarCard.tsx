import { Badge } from "@/components/ui/badge";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";

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

export default function WebinarCard({ webinar }: Props) {
  const { title, description, date, length, registered, speakers, cta, badge } =
    webinar.webinar;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="bg-white p-4 sm:p-6 md:p-7 lg:p-8 rounded-4xl border border-gray-200 space-y-3 sm:space-y-4 md:space-y-5">
      <Badge className="bg-[#8376FF] border border-gray-300 p-1.5 sm:p-2 rounded-lg text-xs sm:text-sm">
        {badge}
      </Badge>
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">{title}</h1>
      <p className="font-medium max-w-lg text-sm sm:text-base leading-relaxed">{description}</p>
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
