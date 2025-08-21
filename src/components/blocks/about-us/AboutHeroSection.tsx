import { AboutHeroSectionProps } from "@/types";
import React from "react";

export default function AboutHeroSection({
  title,
  description,
  card,
}: AboutHeroSectionProps) {
  return (
    <div className="mx-auto w-full px-10 py-12 flex flex-col justify-center items-center gap-10">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="max-w-2xl text-center text-[#878C91]">{description}</p>
      <div className="flex items-center gap-10 w-full justify-center">
        {card.map((item, index) => (
          <div
            key={index}
            className="mt-5 bg-[#F0F0F0] rounded-4xl px-10 py-16 text-center space-y-5"
          >
            <h2 className="text-5xl font-bold">{item.title}+</h2>
            <p className="text-[#878C91] text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
