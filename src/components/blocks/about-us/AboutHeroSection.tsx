'use client';
import { AboutHeroSectionProps } from "@/types";
import React from "react";
import { motion } from "framer-motion";

export default function AboutHeroSection({
  title,
  description,
  card,
}: AboutHeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    },
    hover: {
      y: -8,
      scale: 1.02
    }
  };

  return (
    <motion.div 
      className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center px-4"
        variants={itemVariants}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h1>
      <motion.p 
        className="max-w-xs sm:max-w-lg md:max-w-2xl text-center text-[#878C91] px-4 text-sm sm:text-base"
        variants={itemVariants}
        transition={{ duration: 0.6 }}
      >
        {description}
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-10 w-full justify-center px-4">
        {card.map((item, index) => (
          <motion.div
            key={index}
            className="mt-5 bg-[#F0F0F0] rounded-2xl sm:rounded-3xl lg:rounded-4xl px-6 sm:px-8 md:px-10 py-8 sm:py-12 md:py-16 text-center space-y-3 sm:space-y-4 md:space-y-5 w-full sm:w-auto min-w-[200px] sm:min-w-[250px] cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{item.title}+</h2>
            <p className="text-[#878C91] text-sm sm:text-base md:text-lg">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
