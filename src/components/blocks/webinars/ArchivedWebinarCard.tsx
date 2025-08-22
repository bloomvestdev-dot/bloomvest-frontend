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
    <div className="bg-white p-8 rounded-4xl border border-gray-200 space-y-10 mt-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <Badge className="bg-white text-black border border-gray-300 p-2 rounded-lg">
          {badge}
        </Badge>
      </div>

      <p className="">{description}</p>

      <div className="flex items-center gap-2 justify-between">
        <p className="flex items-center gap-2 font-medium text-[#00000099]">
          <span className="">
            <CiCalendar color="#8376FF" />
          </span>
          {formattedDate}
        </p>
        <p className="flex items-center gap-2 font-medium text-[#00000099]">
          <span className="">
            <IoTimeOutline color="#8376FF" />
          </span>
          {length}
        </p>
        <p className="flex items-center gap-2 font-medium text-[#00000099]">
          <span className="">
            <GoPeople color="#8376FF" />
          </span>
          {registered}
        </p>
      </div>
      <span className="flex items-center gap-2">
        <span className="text-[#00000099] text-sm font-medium">Speaker:</span>
        {speakers.map((speaker: any, index: number) => (
          <p className="text-sm font-medium" key={index}>
            {speaker.name}
          </p>
        ))}
      </span>

      <div className="p-5">
        <button className="space-x-6 bg-black font-medium cursor-pointer text-white rounded-full flex items-center justify-center py-4 px-8 gap-4 mx-auto">
          {cta.title} <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
