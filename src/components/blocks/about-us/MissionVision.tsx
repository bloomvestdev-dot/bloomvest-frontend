import { StrapiImage } from "@/components/StrapiImage";
import { MissionVisionProps } from "@/types";
import React from "react";

type Props = {};

export default function MissionVision({
  missionCard,
  visionCard,
  missionBg,
  visionBg,
}: MissionVisionProps) {
  return (
    <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 bg-gray-50 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10">
      <div className="bg-black rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto">
        <StrapiImage
          src={missionBg.url}
          alt={missionBg.name}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center gap-6 sm:gap-8 md:gap-10 items-center p-4 sm:p-6 md:p-8 lg:p-10">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 text-center">
            {missionCard.title}
          </h1>
          <p className="text-white text-center max-w-xs sm:max-w-sm md:max-w-md text-sm sm:text-base">
            {missionCard.description}
          </p>
        </div>
      </div>
      <div className="bg-black rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto">
        <StrapiImage
          src={visionBg.url}
          alt={visionBg.name}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center gap-6 sm:gap-8 md:gap-10 items-center p-4 sm:p-6 md:p-8 lg:p-10">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 text-center">
            {visionCard.title}
          </h1>
          <p className="text-white text-center max-w-xs sm:max-w-sm md:max-w-md text-sm sm:text-base">
            {visionCard.description}
          </p>
        </div>
      </div>
    </div>
  );
}
