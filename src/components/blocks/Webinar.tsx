import { WebinarProps } from "@/types";
import React from "react";
import { StrapiImage } from "../StrapiImage";
import { FaPlus } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

export default function Webinar({
  heading,
  description,
  subtitle,
  card,
  image,
}: WebinarProps) {
  return (
    <div className="mx-auto w-full px-10 py-12 mt-5 flex flex-col gap-20">
      <div className="flex items-center justify-between gap-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold">{heading}</h1>
          <p className="text-[#878C91]">{subtitle}</p>
        </div>
        <p className="max-w-xl text-[#878C91]">{description}</p>
      </div>
      <div className="grid grid-cols-6 gap-5">
        {/* left card */}
        <div className="bg-black col-span-2 relative rounded-4xl overflow-hidden">
          <StrapiImage
            src={card?.backgroud?.url}
            alt={card?.backgroud?.name}
            width={1000}
            height={1000}
            className="h-full"
          />

          <div className="absolute top-0 p-10 h-full w-full flex flex-col justify-between items-start">
            <div className="space-y-5">
              <p className="text-white text-9xl font-semibold">
                {card.count}
                <span className="text-[#99CF63]">+</span>
              </p>
              <p className="text-[#878C91] text-2xl">Live Recordings</p>
            </div>
            <div className="flex items-center gap-1">
              {card?.avatar?.map((item, index) => (
                <div
                  className="rounded-full overflow-hidden w-20 h-20 border border-white"
                  key={index}
                >
                  <StrapiImage
                    src={item.url}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}{" "}
              <span className="text-white text-6xl">
                <FaPlus />
              </span>
            </div>
          </div>
        </div>

        {/* right card */}
        <div className="col-span-4 w-full   relative">
          <StrapiImage
            src={image?.url}
            alt={image?.name}
            width={1000}
            height={1000}
            className="rounded-4xl"
          />{" "}
          <div className="absolute bg-white rounded-full w-50 flex items-center justify-center h-50 top-75 inset-0 left-195">
            <div className="bg-[#5CF297] rounded-full w-43 h-43 flex items-center jutify-center">
              <FaPlay className="text-black mx-auto text-6xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
