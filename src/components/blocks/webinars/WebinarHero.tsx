'use client';
import { WebinarHeroProps } from "@/types";
import React from "react";
import { motion } from "framer-motion";

export default function WebinarHero({ title, description }: WebinarHeroProps) {
  return (
    <motion.div 
      className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-11 lg:py-12 mt-6 sm:mt-8 md:mt-9 lg:mt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-center text-black mb-3 sm:mb-4 tracking-tight leading-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h1>
      <motion.p 
        className="text-base sm:text-lg md:text-xl text-[#878C91] mb-8 sm:mb-10 md:mb-11 lg:mb-12 max-w-2xl mt-6 sm:mt-8 md:mt-9 lg:mt-10 text-center mx-auto leading-relaxed px-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
