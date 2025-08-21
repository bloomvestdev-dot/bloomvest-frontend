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
    <div className="mx-auto w-full px-10 py-16 bg-gray-50 flex items-center justify-center gap-10">
      <div className="bg-black rounded-4xl overflow-hidden relative w-full">
        <StrapiImage
          src={missionBg.url}
          alt={missionBg.name}
          width={1000}
          height={1000}
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 flex flex-col justify-center gap-10 items-center p-10">
          <h1 className="text-white text-6xl font-bold mb-4 text-center">
            {missionCard.title}
          </h1>
          <p className="text-white text-center max-w-md">
            {missionCard.description}
          </p>
        </div>
      </div>
      <div className="bg-black rounded-4xl overflow-hidden relative w-full">
        <StrapiImage
          src={visionBg.url}
          alt={visionBg.name}
          width={1000}
          height={1000}
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 flex flex-col justify-center gap-10 items-center p-10">
          <h1 className="text-white text-6xl font-bold mb-4 text-center">
            {visionCard.title}
          </h1>
          <p className="text-white text-center max-w-md">
            {visionCard.description}
          </p>
        </div>
      </div>
    </div>
  );
}
