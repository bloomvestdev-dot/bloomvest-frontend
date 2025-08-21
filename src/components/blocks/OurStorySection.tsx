import { OurStoryProps } from "@/types";
import React from "react";
import Markdown from "react-markdown";
import { StrapiImage } from "../StrapiImage";

export default function OurStorySection({
  heading,
  description,
  image,
}: OurStoryProps) {
  return (
    <div className="w-full bg-gray-100">
      <div className="mx-auto w-full px-8 py-20">
        <div className="flex items-center justify-center gap-20">
          <div className="">
            <StrapiImage
              src={image?.url}
              alt={image?.name || "Stock market analysis"}
              width={500}
              height={500}
              className=""
            />
          </div>

          <div className="space-y-20">
            <h2 className="text-5xl font-bold text-black uppercase tracking-wide">
              {heading}
            </h2>

            <Markdown
              components={{
                p: ({ node, ...props }) => (
                  <p
                    className="mb-10 max-w-2xl text-lg leading-relaxed text-[#878C91]"
                    {...props}
                  />
                ),
              }}
            >
              {description}
            </Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}
