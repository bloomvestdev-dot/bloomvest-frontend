import { WhyChooseProps } from "@/types";
import React from "react";

type Props = {};

export default function WhyChoose({ title, list }: WhyChooseProps) {
  return (
    <div className="mx-auto w-full px-10 py-16 bg-gray-100">
      <div className="w-full flex flex-col justify-center items-center mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>

        {/* List Grid */}
        <div className="grid md:grid-cols-2 w-full px-5 gap-x-30 gap-y-4">
          {list.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
