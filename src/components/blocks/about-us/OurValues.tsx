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
    <div className="mx-auto w-full lg:px-10 lg:py-16 px-4">
      <div className="bg-black lg:h-full h-screen lg:rounded-4xl rounded-2xl overflow-hidden relative w-full">
        <StrapiImage
          src={background.url}
          alt={background.name}
          width={1000}
          height={1000}
          className="lg:w-full lg:h-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-around items-center p-10">
          <h1 className="lg:text-6xl text-md mb-2 lg:mb-0 text-white font-bold">
            {title}
          </h1>
          <div className="flex justify-center lg:flex-row flex-col mt-2 items-center gap-4 lg:gap-10 ">
            {cards.length > 0 &&
              cards.map((card, index) => (
                <div
                  className="flex flex-col justify-center lg:items-center p-5 gap-2 lg:gap-3 bg-white/4 lg:p-10 rounded-4xl"
                  key={index}
                >
                  <StrapiImage
                    src={icons[index].url}
                    alt={icons[index].name}
                    width={100}
                    height={100}
                    className="w-4 h-4 lg:w-8 lg:h-8 lg:mb-4"
                  />
                  <h2 className="text-white font-bold text-xs lg:text-3xl">
                    {card.title}
                  </h2>
                  <p className="text-white lg:text-center max-w-xs text-xs lg:text-base lg:max-w-xs">
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
