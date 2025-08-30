import { WebinarHeroProps } from "@/types";
import React from "react";

export default function WebinarHero({ title, description }: WebinarHeroProps) {
  return (
    <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-11 lg:py-12 mt-6 sm:mt-8 md:mt-9 lg:mt-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-center text-black mb-3 sm:mb-4 tracking-tight leading-tight">
        {title}
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-[#878C91] mb-8 sm:mb-10 md:mb-11 lg:mb-12 max-w-2xl mt-6 sm:mt-8 md:mt-9 lg:mt-10 text-center mx-auto leading-relaxed px-2">
        {description}
      </p>
    </div>
  );
}
