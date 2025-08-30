'use client';
import { WhyChooseProps } from "@/types";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function WhyChoose({ title, list }: WhyChooseProps) {
  return (
    <motion.div 
      className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 bg-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full flex flex-col justify-center items-center mx-auto">
        {/* Title */}
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-10 md:mb-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h2>

        {/* List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 w-full px-4 sm:px-5 gap-x-8 sm:gap-x-16 md:gap-x-30 gap-y-3 sm:gap-y-4">
          {list.map((item, index) => (
            <motion.div 
              key={index} 
              className="flex items-start gap-2 sm:gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
