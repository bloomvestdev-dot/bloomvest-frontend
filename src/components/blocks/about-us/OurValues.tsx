import { StrapiImage } from "@/components/StrapiImage";
import { OurValuesProps } from "@/types";
import React from "react";

export default function OurValues({
  title,
  cards,
  icons,
  background,
}: OurValuesProps) {
  console.log("icon", icons[1]);
  return (
    <div className="mx-auto w-full px-10 py-16">
      <div className="bg-black rounded-4xl overflow-hidden relative w-full">
        <StrapiImage
          src={background.url}
          alt={background.name}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-around items-center p-10">
          <h1 className="text-6xl text-white font-bold">{title}</h1>
          <div className="flex justify-center items-center gap-10 ">
            {cards.length > 0 &&
              cards.map((card, index) => (
                <div
                  className="flex flex-col justify-center items-center gap-3 bg-white/4 p-10 rounded-4xl"
                  key={index}
                >
                  <StrapiImage
                    src={icons[index].url}
                    alt={icons[index].name}
                    width={100}
                    height={100}
                    className="w-8 h-8 mb-4"
                  />
                  <h2 className="text-white text-3xl">{card.title}</h2>
                  <p className="text-white text-center max-w-xs">
                    {card.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
