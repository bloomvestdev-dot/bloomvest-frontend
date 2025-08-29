import { TestimonialsPageProps } from "@/types";
import React from "react";
import { Button } from "../ui/button";
import { StrapiImage } from "../StrapiImage";

export default function Testimonials({
  title,
  description,
  cta,
  card,
}: TestimonialsPageProps) {
  return (
    <div className="mx-auto w-full px-10 py-16 mt-5 bg-[#1E1E1E] flex items-center justify-around">
      <div className="flex flex-col gap-10">
        <h1 className="text-8xl max-w-lg text-white">{title}</h1>
        <p className="max-w-lg text-white">{description}</p>
        <Button className="max-w-xs p-8 text-lg rounded-2xl">
          {cta.title}
        </Button>
      </div>
      <div className="flex flex-col gap-5 ">
        {card?.map((item) => (
          <div
            className="flex items-center bg-[#FFFFFF0A] justify-between px-5 py-10 rounded-4xl gap-5"
            key={item.id}
          >
            <StrapiImage
              src={item?.image?.url}
              alt={item?.image?.name || "Stock market analysis"}
              width={100}
              height={100}
              className="rounded-full object-cover w-[100px] h-[100px]"
            />
            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-3">
                <p className="text-[#FFFFFF] font-bold">{item.name}</p>
                <p className="text-[#FFFFFF]">\</p>
                <p className="text-[#d5d5d5]">{item.profession}</p>
              </span>
              <p className="text-white max-w-xs">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
