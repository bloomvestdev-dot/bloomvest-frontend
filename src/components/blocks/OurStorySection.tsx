'use client';

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
      <div className="mx-auto w-full px-8 py-20">
        <div className="flex items-center justify-center gap-20">
          <motion.div 
            className=""
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
              className=""
            />
          </motion.div>

          <motion.div 
            className="space-y-20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-5xl font-bold text-black uppercase tracking-wide"
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
                      className="mb-10 max-w-2xl text-lg leading-relaxed text-[#878C91]"
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
