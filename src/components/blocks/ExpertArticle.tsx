"use client";

import { ExpertArticleProps } from "@/types";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function ExpertArticle({
  title,
  description,
  cta,

  blogs,
}: ExpertArticleProps) {
  console.log("expert article: ", blogs);
  return (
    <motion.div
      className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-11 lg:py-12 mt-5 flex flex-col gap-10 sm:gap-14 md:gap-16 lg:gap-20 bg-[#FAFAFA]"
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
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl font-semibold"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <motion.p
            className="max-w-xl text-[#878C91] text-sm sm:text-base lg:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          >
            <Link href={`${cta?.href}`}>
              <button className="border border-black p-3 sm:p-3 md:p-4 lg:p-4 font-medium rounded-full text-xs mt-3 sm:mt-4 md:mt-4 lg:mt-5 hover:bg-black hover:text-white transition-colors cursor-pointer">
                {cta?.text}
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 md:gap-5 lg:gap-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {blogs?.slice(0, 3).map((item, index) => (
          <motion.div
            className="bg-white rounded-2xl sm:rounded-3xl md:rounded-4xl lg:rounded-4xl border border-gray-200 py-4 sm:py-5 md:py-6 lg:py-6 px-6 sm:px-7 md:px-8 lg:px-8 flex flex-col justify-between h-full gap-4 sm:gap-5 md:gap-6 lg:gap-6"
            key={item.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.1 * index + 0.3,
              ease: "easeOut",
            }}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
            >
              <motion.div
                className="rounded-full bg-red-500 w-3 h-3"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.6 }}
              ></motion.div>
              <motion.p
                className="text-sm text-gray-400 font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.7 }}
              >
                {item.blog.readTime}
              </motion.p>
            </motion.div>
            <motion.h1
              className="text-lg sm:text-xl md:text-xl lg:text-2xl max-w-xs font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.8 }}
            >
              {item.blog.title}
            </motion.h1>
            <motion.div
              className="flex items-center justify-between mt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.9 }}
            >
              <motion.p
                className="max-w-xs text-[#878C91] text-sm sm:text-sm md:text-sm lg:text-sm line-clamp-2"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.1 * index + 1.0 }}
              >
                {item.blog.description}
              </motion.p>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <Link href={`/blogs/${item.slug}`}>
                  <button className="py-2 sm:py-2 md:py-3 lg:py-3 px-4 sm:px-4 md:px-5 lg:px-5 bg-white border border-black rounded-full cursor-pointer hover:bg-black hover:text-white transition-colors flex items-center gap-2">
                    <FaArrowRight size={10} />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
