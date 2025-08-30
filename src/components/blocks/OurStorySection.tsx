"use client";

import { OurStoryProps } from "@/types";
import React from "react";
import Markdown from "react-markdown";
import { StrapiImage } from "../StrapiImage";
import { motion } from "framer-motion";

export default function OurStorySection({
  heading,
  description,
  image,
}: OurStoryProps) {
  return (
    <motion.div
      className="w-full bg-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <StrapiImage
              src={image?.url}
              alt={image?.name || "Stock market analysis"}
              width={500}
              height={500}
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] rounded-4xl"
            />
          </motion.div>

          <motion.div
            className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 order-1 lg:order-2 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-black uppercase tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              {heading}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <Markdown
                components={{
                  p: ({ node, ...props }) => (
                    <p
                      className="mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-lg md:max-w-2xl text-base sm:text-lg leading-relaxed text-[#878C91]"
                      {...props}
                    />
                  ),
                }}
              >
                {description}
              </Markdown>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
