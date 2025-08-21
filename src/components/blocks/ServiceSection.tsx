import { ServiceSectionProps } from "@/types";
import React from "react";
import { StrapiImage } from "../StrapiImage";

export default function ServiceSection({
  heading,
  description,
  cards,
  background,
}: ServiceSectionProps) {
  console.log("bg", background);

  return (
    <div className="mx-auto w-full px-10 py-8">
      <div className="relative w-full bg-black h-[602px] rounded-4xl overflow-hidden">
        <StrapiImage
          src={background?.url}
          alt={background?.name || "Stock market analysis"}
          fill
        />
        <div className="absolute flex flex-col items-center justify-around gap-20 h-full py-20 px-10">
          <div className="flex flex-col items-center justify-center w-full  gap-5">
            <h1 className="text-white text-5xl font-semibold">{heading}</h1>
            <p className="text-white text-xl">{description}</p>
          </div>
          <div className="flex items-center gap-5">
            {cards?.map((card, index) => (
              <div
                className="bg-white/5 rounded-4xl p-10 space-y-6"
                key={index}
              >
                <p className="text-white font-semibold text-2xl">
                  {card.title}
                </p>
                <p className="text-white">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
