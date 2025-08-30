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
      className="mx-auto w-full px-10 py-16 mt-5 bg-[#1E1E1E] flex items-center justify-around"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="flex flex-col gap-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-8xl max-w-lg text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.p 
          className="max-w-lg text-white"
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
          <Button className="max-w-xs p-8 text-lg rounded-2xl">
            {cta.title}
          </Button>
        </motion.div>
      </motion.div>
      <motion.div 
        className="flex flex-col gap-5"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {card?.map((item, index) => (
          <motion.div
            className="flex items-center bg-[#FFFFFF0A] justify-between px-5 py-10 rounded-4xl gap-5"
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
                className="rounded-full object-cover w-[100px] h-[100px]"
              />
            </motion.div>
            <motion.div 
              className="flex flex-col gap-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.7 }}
            >
              <motion.span 
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.8 }}
              >
                <p className="text-[#FFFFFF] font-bold">{item.name}</p>
                <p className="text-[#FFFFFF]">\</p>
                <p className="text-[#d5d5d5]">{item.profession}</p>
              </motion.span>
              <motion.p 
                className="text-white max-w-xs"
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
