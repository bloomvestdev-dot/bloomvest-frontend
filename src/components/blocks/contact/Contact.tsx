"use client";
import { ContactHeroProps } from "@/types";
import React from "react";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { messageAction } from "@/data/action";
import { StrapiImage } from "@/components/StrapiImage";
import Broker from "./Broker";
import BrokerForm from "./BrokerForm";
import GetInTouch from "./GetInTouch";

export default function Contact({
  title,
  description,
  subtitle,
  register,
  bg,
}: ContactHeroProps) {
  return (
    <div className="mx-auto w-full bg-white space-y-6 sm:space-y-8 md:space-y-10 flex flex-col justify-center">
      <div className="relative">
        <StrapiImage
          src={bg?.url}
          alt={bg?.name || "Education Background"}
          width={1920}
          height={100}
          className="lg:w-full lg:h-full h-[600px] object-cover object-top -mt-25"
        />
        <div className="bg-black/75 w-full h-[630px] md:h-[640px]  absolute -mt-32 inset-0"></div>
        <div className="absolute inset-0 flex gap-3 flex-col items-center justify-center text-white z-5 px-4 sm:px-6 md:px-8 lg:px-0 pt-32 sm:pt-20 md:pt-12 lg:pt-0 lg:gap-20">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center leading-tight px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-center max-w-4xl px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {description}
          </motion.p>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-center max-w-4xl px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
      <div className="">
        <Broker />
        <BrokerForm register={register} />
      </div>
      <GetInTouch />
    </div>
  );
}
