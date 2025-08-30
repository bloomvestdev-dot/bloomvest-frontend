import { AboutHeroSectionProps } from "@/types";
import React from "react";

export default function AboutHeroSection({
  title,
  description,
  card,
}: AboutHeroSectionProps) {
  return (
    <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center px-4">{title}</h1>
      <p className="max-w-xs sm:max-w-lg md:max-w-2xl text-center text-[#878C91] px-4 text-sm sm:text-base">{description}</p>
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-10 w-full justify-center px-4">
        {card.map((item, index) => (
          <div
            key={index}
            className="mt-5 bg-[#F0F0F0] rounded-2xl sm:rounded-3xl lg:rounded-4xl px-6 sm:px-8 md:px-10 py-8 sm:py-12 md:py-16 text-center space-y-3 sm:space-y-4 md:space-y-5 w-full sm:w-auto min-w-[200px] sm:min-w-[250px]"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{item.title}+</h2>
            <p className="text-[#878C91] text-sm sm:text-base md:text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
