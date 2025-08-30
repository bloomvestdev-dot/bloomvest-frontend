"use client";

import { HeroSectionProps } from "@/types";
import Link from "next/link";
import { StrapiImage } from "../StrapiImage";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function HeroSection({
  heading,
  description,
  trustedByTiltle,
  cta,
  logos,
  imageOne,
  imageTwo,
  imageThree,
}: HeroSectionProps) {
  return (
    <section className="mx-auto w-full px-5 lg:px-10 py-12 mt-5">
      <div className="flex flex-col gap-12 lg:flex-row">
        <motion.div
          className="flex w-full flex-col justify-between gap-10 lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="lg:space-y-8 space-y-4">
            <motion.h1
              className="lg:text-5xl text-xl font-bold md:text-6xl max-w-6xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              {heading}
            </motion.h1>
            <motion.p
              className="lg:text-lg text-[#878C91] text-xs max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              {description}
            </motion.p>
            {cta?.href && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                <Link
                  href={cta.href}
                  className="rounded-full bg-black px-6 py-3 text-white text-xs lg:text-base flex items-center justify-between w-1/2 lg:w-[30%]"
                >
                  {cta.text}
                  <FaArrowRight />
                </Link>
              </motion.div>
            )}
          </div>
          <motion.div
            className="lg:flex items-center gap-10 hidden "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-semibold text-black max-w-50">
              {trustedByTiltle}
            </h2>
            <div className="flex flex-wrap items-center gap-6">
              {logos?.map((logo, index) => (
                <motion.div
                  key={logo.id}
                  className="relative h-8 w-24"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: "easeOut",
                  }}
                >
                  <StrapiImage
                    src={logo.image.url}
                    alt={logo.image.name}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex w-full flex-col gap-4 lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex gap-4">
            <motion.div
              className="w-1/2 relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="absolute bg-black rounded-full p-5 lg:p-10 lg:right-5 lg:-top-10 right-2 -top-5 shadow-2xl shadow-black"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                <FaArrowTrendUp
                  color="#5CF297"
                  size={50}
                  className="lg:w-full lg:h-full w-5 h-5"
                />
              </motion.div>
              <StrapiImage
                src={imageOne?.url}
                alt={imageOne?.name || "Stock market analysis"}
                width={1000}
                height={1000}
                className="lg:w-full lg:h-full "
              />
            </motion.div>

            <motion.div
              className="lg:flex flex flex-col gap-3 px-3 py-4 items-start w-1/2 lg:flex-col lg:justify-center lg:gap-5 rounded-2xl bg-[#F0F0F0] lg:p-7"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            >
              <motion.p
                className="lg:text-7xl text-xl font-bold md:text-[7rem]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              >
                230+
              </motion.p>
              <p className="leading-tight text-xs lg:text-xl text-[#5C5D5F]">
                some big companies that we work with, and trust us very much
              </p>
              <motion.div
                className="relative h-[5px] w-full bg-[#D9D9D9]"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              >
                <div className="absolute top-0 h-[5px] w-[60%] bg-gray-900"></div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="relative flex h-[150px] lg:h-[200px] gap-4 rounded-3xl bg-black overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          >
            <div className="left-0">
              <StrapiImage
                src={imageTwo?.url}
                alt={imageTwo?.name}
                width={300}
                height={300}
                className=""
              />
            </div>

            <div className="absolute w-full flex lg:h-[200px] items-basline justify-between px-8">
              <motion.div
                className="flex flex-col justify-center gap-5"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
              >
                <div className="flex items-center text-white">
                  <div className="h-[1px] w-10 lg:w-14 bg-white mr-2"></div>
                  <p className="lg:text-base text-xs w-full">
                    Trade the Future, today.
                  </p>
                </div>

                <p className="text-white lg:text-4xl max-w-xs">
                  Empower Your Financial Future
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
              >
                <StrapiImage
                  src={imageThree?.url}
                  alt={imageThree?.name}
                  width={200}
                  height={200}
                  className="lg:mt-10 mt-20 lg:w-full lg:h-full w-30"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
