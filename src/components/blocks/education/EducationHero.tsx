import { StrapiImage } from "@/components/StrapiImage";
import { EducationHeriProps } from "@/types";
import React from "react";

export default function EducationHero({
  title,
  description,
  stats,
  background,
}: EducationHeriProps) {
  return (
    <div className="mx-auto w-full relative top-0 -mt-32 -z-10">
      <StrapiImage
        src={background?.url}
        alt={background?.name || "Education Background"}
        width={1920}
        height={1080}
        className="w-full h-screen object-cover object-top opacity-75"
      />
      <div className="bg-black w-full h-[829px] absolute -mt-32 inset-0 opacity-40"></div>
      <div className="absolute inset-0 flex gap-3 flex-col items-center justify-center text-white z-5">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="text-2xl font-semibold">{description}</p>

        <div className="flex gap-30 mt-30 justify-center w-full px-20">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <h2 className="text-6xl font-bold text-[#5CF297BF]">
                {stat.title}
              </h2>
              <p className="text-lg">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
