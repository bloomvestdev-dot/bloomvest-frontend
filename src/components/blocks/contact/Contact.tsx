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
    <div className="mx-auto w-full bg-white space-y-10 flex flex-col justify-center">
      <div className="">
        <StrapiImage
          src={bg?.url}
          alt={bg?.name || "Education Background"}
          width={1920}
          height={100}
          className="w-full h-full object-cover object-top -mt-25 "
        />
        <div className="bg-black/75 w-full h-[740px] absolute -mt-32 inset-0 "></div>
        <div className="absolute inset-0 flex gap-3 flex-col items-center justify-center text-white z-5 px-4 sm:px-6 md:px-8 lg:px-0 pt-32 sm:pt-20 md:pt-12 lg:pt-0 lg:gap-20">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-medium text-center max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {description}
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-medium text-center max-w-4xl"
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
