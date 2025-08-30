'use client';

import { TestimonialsPageProps } from "@/types";
import React from "react";
import { Button } from "../ui/button";
import { StrapiImage } from "../StrapiImage";
import { motion } from "framer-motion";

export default function Testimonials({
  title,
  description,
  cta,
  card,
}: TestimonialsPageProps) {
  return (
    <motion.div 
      className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-14 lg:py-16 mt-5 bg-[#1E1E1E] flex flex-col lg:flex-row items-center justify-around gap-8 sm:gap-10 md:gap-12 lg:gap-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="flex flex-col gap-6 sm:gap-8 md:gap-9 lg:gap-10 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl max-w-lg text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.p 
          className="max-w-lg text-white text-sm sm:text-base md:text-lg lg:text-base"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <Button className="max-w-xs p-4 sm:p-5 md:p-6 lg:p-8 text-sm sm:text-base md:text-lg lg:text-lg rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-2xl">
            {cta.title}
          </Button>
        </motion.div>
      </motion.div>
      <motion.div 
        className="flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-5 w-full lg:w-auto"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {card?.map((item, index) => (
          <motion.div
            className="flex flex-col sm:flex-row items-center bg-[#FFFFFF0A] justify-between px-4 sm:px-4 md:px-5 lg:px-5 py-6 sm:py-8 md:py-9 lg:py-10 rounded-2xl sm:rounded-3xl md:rounded-4xl lg:rounded-4xl gap-3 sm:gap-4 md:gap-4 lg:gap-5"
            key={item.id}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.6, 
              delay: 0.1 * index + 0.3, 
              ease: "easeOut" 
            }}
            whileHover={{ 
              x: -5, 
              transition: { duration: 0.2 } 
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
            >
              <StrapiImage
                src={item?.image?.url}
                alt={item?.image?.name || "Stock market analysis"}
                width={100}
                height={100}
                className="rounded-full object-cover w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"
              />
            </motion.div>
            <motion.div 
              className="flex flex-col gap-2 sm:gap-2 md:gap-3 lg:gap-3 text-center sm:text-center md:text-left lg:text-left"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.7 }}
            >
              <motion.span 
                className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 md:gap-3 lg:gap-3"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.8 }}
              >
                <p className="text-[#FFFFFF] font-bold text-sm sm:text-base md:text-base lg:text-base">{item.name}</p>
                <p className="text-[#FFFFFF] text-sm sm:text-base md:text-base lg:text-base">\</p>
                <p className="text-[#d5d5d5] text-sm sm:text-base md:text-base lg:text-base">{item.profession}</p>
              </motion.span>
              <motion.p 
                className="text-white max-w-xs text-sm sm:text-sm md:text-sm lg:text-sm"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.9 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
