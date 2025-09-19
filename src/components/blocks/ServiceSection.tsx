"use client";

import { ServiceSectionProps } from "@/types";
import React from "react";
import { StrapiImage } from "../StrapiImage";
import { motion } from "framer-motion";

export default function ServiceSection({
  heading,
  description,
  cards,
  background,
}: ServiceSectionProps) {
  console.log("bg", background);

  return (
    <motion.div
      className="mx-auto w-full px-5 lg:px-10 lg:py-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative w-full bg-black h-[1200px] lg:h-[602px] rounded-4xl overflow-hidden">
        <StrapiImage
          src={background?.url}
          alt={background?.name || "Stock market analysis"}
          fill
          className="lg:w-full lg:h-full "
          loading="eager"
        />
        <div className="absolute flex flex-col items-center justify-around gap-10 lg:gap-20 h-full py-20 px-10">
          <motion.div
            className="flex flex-col items-center justify-center w-full gap-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              className="text-white lg:text-5xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              {heading}
            </motion.h1>
            <motion.p
              className="text-white text-xs text-center lg:text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              {description}
            </motion.p>
          </motion.div>
          <motion.div
            className="flex flex-col lg:flex-row items-center lg:gap-5 gap-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {cards?.map((card, index) => (
              <motion.div
                className="bg-white/5 rounded-4xl p-10 space-y-6"
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index + 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.p
                  className="text-white font-semibold lg:text-2xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 * index + 0.8 }}
                >
                  {card.title}
                </motion.p>
                <motion.p
                  className="text-white text-sm lg:text-base"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 * index + 1.0 }}
                >
                  {card.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
