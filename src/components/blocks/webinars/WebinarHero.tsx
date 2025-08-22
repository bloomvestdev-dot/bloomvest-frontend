import { WebinarHeroProps } from "@/types";
import React from "react";

export default function WebinarHero({ title, description }: WebinarHeroProps) {
  return (
    <div className="mx-auto w-full px-10 py-12 mt-10">
      <h1 className="text-8xl font-bold text-center text-black mb-4 tracking-tight">
        {title}
      </h1>
      <p className="text-xl text-[#878C91] mb-12 max-w-2xl mt-10 text-center mx-auto">
        {description}
      </p>
    </div>
  );
}
