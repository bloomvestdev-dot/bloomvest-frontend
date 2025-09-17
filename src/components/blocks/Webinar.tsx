"use client";

import { WebinarProps } from "@/types";
import React from "react";
import { StrapiImage } from "../StrapiImage";
import { FaPlus } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Webinar({
  heading,
  description,
  subtitle,
  card,
  image,
}: WebinarProps) {
  return (
    <motion.div
      className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-11 lg:py-12 mt-5 flex flex-col gap-10 sm:gap-14 md:gap-16 lg:gap-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 md:gap-9 lg:gap-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="space-y-3 sm:space-y-3 md:space-y-4 lg:space-y-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            {heading}
          </motion.h1>
          <motion.p
            className="text-[#878C91] text-sm sm:text-base lg:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
        <motion.p
          className="max-w-xl text-[#878C91] text-sm sm:text-base lg:text-base"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          {description}
        </motion.p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-6 gap-4 sm:gap-4 md:gap-5 lg:gap-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* left card */}
        <motion.div
          className="bg-black col-span-1 lg:col-span-2 relative rounded-2xl sm:rounded-3xl md:rounded-4xl lg:rounded-4xl overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] lg:h-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <StrapiImage
            src={card?.backgroud?.url}
            alt={card?.backgroud?.name}
            width={1000}
            height={1000}
            className="h-full"
          />

          <div className="absolute top-0 p-6 sm:p-8 md:p-9 lg:p-10 h-full w-full flex flex-col justify-between items-start">
            <motion.div
              className="space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <motion.p
                className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              >
                {card.count}
                <span className="text-[#99CF63]">+</span>
              </motion.p>
              <motion.p
                className="text-[#878C91] text-lg sm:text-xl md:text-xl lg:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              >
                Live Recordings
              </motion.p>
            </motion.div>
            <motion.div
              className="flex items-center gap-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            >
              {card?.avatar?.map((item, index) => (
                <motion.div
                  className="rounded-full overflow-hidden w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 border border-white"
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 * index + 1.0,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <StrapiImage
                    src={item.url}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}{" "}
              <motion.span
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
              >
                <FaPlus />
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

        {/* right card */}
        <motion.div
          className="col-span-1 lg:col-span-4 w-full relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          <StrapiImage
            src={image?.formats?.large?.url}
            alt={image?.name}
            width={1000}
            height={1000}
            className="rounded-2xl  lg:h-[470px] sm:rounded-3xl md:rounded-4xl lg:rounded-4xl"
          />{" "}
          <motion.div
            className="absolute bg-white rounded-full lg:w-50 w-20 h-20 flex items-center justify-center top-50 left-76 lg:h-50 lg:top-75 inset-0 lg:left-195"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
          >
            <div className="bg-[#5CF297] rounded-full h-15 w-15 lg:w-43 lg:h-43 flex items-center jutify-center">
              <FaPlay className="text-black mx-auto lg:text-6xl" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
