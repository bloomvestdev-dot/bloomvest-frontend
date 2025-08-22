import { ExpertArticleProps } from "@/types";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

type Props = {};

export default function ExpertArticle({
  title,
  description,
  cta,
  card,
}: ExpertArticleProps) {
  return (
    <div className="mx-auto w-full px-10 py-12 mt-5 flex flex-col gap-20 bg-[#FAFAFA]">
      <div className="flex items-center justify-between gap-10">
        <h1 className="text-5xl max-w-2xl font-semibold">{title}</h1>
        <div className="space-y-3">
          <p className="max-w-xl text-[#878C91]">{description}</p>
          <button className="border border-black p-4 font-medium rounded-full text-xs mt-5">
            {cta?.text}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {card.map((item) => (
          <div
            className="bg-white rounded-4xl border border-gray-200 py-6 px-8 flex flex-col justify-between h-full gap-6"
            key={item.id}
          >
            <div className="flex items-center justify-between">
              <div className="rounded-full bg-red-500 w-3 h-3"></div>
              <p className="text-sm text-gray-400 font-medium">{item.length}</p>
            </div>
            <h1 className="text-2xl max-w-xs font-semibold">{item.title}</h1>
            <div className="flex items-center justify-between mt-3">
              <p className="max-w-xs">{item.description}</p>
              <button className="py-3 px-5 bg-white border border-black rounded-full cursor-pointer hover:bg-black hover:text-white transition-colors flex items-center gap-2">
                <FaArrowRight size={10} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
