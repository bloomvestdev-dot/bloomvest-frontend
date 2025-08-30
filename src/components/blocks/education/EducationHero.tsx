"use client";
import { StrapiImage } from "@/components/StrapiImage";
import { EducationHeriProps } from "@/types";
import React from "react";
import { motion } from "framer-motion";

export default function EducationHero({
  title,
  description,
  stats,
  background,
}: EducationHeriProps) {
  return (
    <div className="mx-auto w-full relative top-0 -mt-32 -z-10">
      <StrapiImage
        src={background?.url}
        alt={background?.name || "Education Background"}
        width={1920}
        height={1080}
        className="w-full h-screen object-cover object-top opacity-75"
      />
      <div className="bg-black w-full h-[863px] absolute -mt-32 inset-0 opacity-30"></div>
      <div className="absolute inset-0 flex gap-3 flex-col items-center justify-center text-white z-5 px-4 sm:px-6 md:px-8 lg:px-0 pt-32 sm:pt-20 md:pt-12 lg:pt-0">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-semibold text-center max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {description}
        </motion.p>

        <div className="grid grid-cols-2 sm:flex sm:flex-row gap-8 sm:gap-16 md:gap-20 lg:gap-30 mt-8 sm:mt-16 md:mt-20 lg:mt-30 justify-center w-full px-4 sm:px-8 md:px-12 lg:px-20">
          {stats?.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center space-y-2 sm:space-y-3 lg:space-y-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#5CF297BF] leading-none">
                {stat.title}
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
