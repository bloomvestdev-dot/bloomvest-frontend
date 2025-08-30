'use client';

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
      className="mx-auto w-full px-10 py-12 mt-5 flex flex-col gap-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="flex items-center justify-between gap-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            {heading}
          </motion.h1>
          <motion.p 
            className="text-[#878C91]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
        <motion.p 
          className="max-w-xl text-[#878C91]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          {description}
        </motion.p>
      </motion.div>
      <motion.div 
        className="grid grid-cols-6 gap-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* left card */}
        <motion.div 
          className="bg-black col-span-2 relative rounded-4xl overflow-hidden"
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

          <div className="absolute top-0 p-10 h-full w-full flex flex-col justify-between items-start">
            <motion.div 
              className="space-y-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <motion.p 
                className="text-white text-9xl font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              >
                {card.count}
                <span className="text-[#99CF63]">+</span>
              </motion.p>
              <motion.p 
                className="text-[#878C91] text-2xl"
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
                  className="rounded-full overflow-hidden w-20 h-20 border border-white"
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 0.1 * index + 1.0, ease: "easeOut" }}
                  whileHover={{ 
                    scale: 1.05, 
                    transition: { duration: 0.2 } 
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
                className="text-white text-6xl"
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
          className="col-span-4 w-full relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          <StrapiImage
            src={image?.url}
            alt={image?.name}
            width={1000}
            height={1000}
            className="rounded-4xl"
          />{" "}
          <motion.div 
            className="absolute bg-white rounded-full w-50 flex items-center justify-center h-50 top-75 inset-0 left-195"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.1, 
              transition: { duration: 0.2 } 
            }}
          >
            <div className="bg-[#5CF297] rounded-full w-43 h-43 flex items-center jutify-center">
              <FaPlay className="text-black mx-auto text-6xl" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
