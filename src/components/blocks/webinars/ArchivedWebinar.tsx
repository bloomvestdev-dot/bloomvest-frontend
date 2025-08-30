"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";

import { CiCalendar } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { ArchivedWebinarsProps } from "@/types";
import ArchivedWebinarCard from "./ArchivedWebinarCard";
import { motion } from "framer-motion";

type Props = {
  webinars: any[];
};

export default function ArchivedWebinar({
  title,
  description,
  webinars,
}: ArchivedWebinarsProps & {
  webinars?: any[];
}) {
  const archivedWebinars = webinars?.filter(
    (webinar) => webinar.webinar?.isArchived === false
  );

  const [visibleWebinar, setVisibleWebinar] = useState(2);

  const webinarsLength = webinars?.length || 0;

  const handleLoadMore = () => {
    setVisibleWebinar((prev) => prev + 3);
  };
  return (
    <motion.div 
      className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-11 lg:py-12 bg-white space-y-6 sm:space-y-8 md:space-y-9 lg:space-y-10 flex flex-col justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center space-y-3 sm:space-y-4">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        <motion.p 
          className="text-[#878C91] text-base sm:text-lg md:text-xl leading-relaxed px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8 md:mt-9 lg:mt-10">
        {archivedWebinars &&
          archivedWebinars.map((webinar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <ArchivedWebinarCard webinar={webinar} />
            </motion.div>
          ))}
      </div>

      {visibleWebinar < webinarsLength && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            onClick={handleLoadMore}
            className="w-40 sm:w-44 md:w-48 lg:w-50 mx-auto text-sm sm:text-base md:text-md cursor-pointer p-4 sm:p-5 md:p-6 bg-black rounded-full"
          >
            Load More
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
}